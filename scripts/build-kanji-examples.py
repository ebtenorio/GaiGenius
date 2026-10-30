"""Build the Kanji example set from Tatoeba sentence pairs and KANJIDIC2."""
import argparse
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

import pykakasi

FALLBACKS = {
    "貝": [
        ("スーパーで貝を買ってきました。", "I bought shellfish at the supermarket."),
        ("貝の味噌汁を作りました。", "I made shellfish miso soup."),
        ("海で小さな貝を拾いました。", "I picked up a small shell at the beach."),
    ],
    "倉": [("倉庫に自転車をしまいました。", "I put my bicycle away in the storage shed."), ("荷物を倉庫まで運びます。", "I'll carry the luggage to the storeroom.")],
    "径": [
        ("このボールの直径は二十センチです。", "This ball is twenty centimeters in diameter."),
        ("皿の直径を測ってから棚に入れました。", "I measured the plate's diameter before putting it on the shelf."),
        ("このトンネルの直径は三メートルほどです。", "This tunnel is about three meters in diameter."),
        ("直径を確認してから新しい鍋を買いました。", "I checked the diameter before buying a new pot."),
    ],
    "昭": [("祖父は昭和生まれです。", "My grandfather was born in the Showa era."), ("この家は昭和に建てられました。", "This house was built in the Showa era.")],
    "孝": [("母の日に親孝行をしました。", "I did something nice for my mother on Mother's Day."), ("親孝行のために実家へ帰りました。", "I went back to my parents' home to do something for them."), ("親孝行できるうちにしたいです。", "I want to do what I can for my parents while I still can.")],
    "仁": [
        ("仁さんは近所の病院で働いています。", "Jin works at a nearby hospital."),
        ("仁くんは毎朝早く起きます。", "Jin gets up early every morning."),
        ("仁は今日、友達と映画を見に行きます。", "Jin is going to see a movie with a friend today."),
        ("仁は駅の近くに住んでいます。", "Jin lives near the station."),
        ("仁さんは犬と公園を散歩します。", "Jin takes a walk in the park with his dog."),
    ],
    "俵": [
        ("祖父から米を一俵もらいました。", "I received a sack of rice from my grandfather."),
        ("一俵の米を台所に運びました。", "I carried a sack of rice to the kitchen."),
        ("昔は米を俵に入れていました。", "People used to put rice in straw bales."),
        ("米俵を見たことがありますか。", "Have you ever seen a straw rice bale?"),
        ("祭りで大きな米俵を見ました。", "I saw a large rice bale at the festival."),
    ],
    "班": [("班のみんなで教室を掃除しました。", "Everyone in our group cleaned the classroom."), ("明日の班活動は何時からですか。", "What time does tomorrow's group activity start?")],
    "陛": [
        ("天皇陛下のお言葉をニュースで聞きました。", "I heard the Emperor's remarks on the news."),
        ("天皇陛下が式典に出席されました。", "The Emperor attended the ceremony."),
        ("ニュースで天皇陛下の訪問を見ました。", "I saw the news about the Emperor's visit."),
        ("天皇陛下は国民に向けて話されました。", "The Emperor spoke to the people."),
    ],
    "后": [
        ("皇后さまも式典に出席されました。", "The Empress also attended the ceremony."),
        ("皇后さまの写真が新聞に載っていました。", "A photo of the Empress was in the newspaper."),
        ("皇后さまは子どもたちに声をかけました。", "The Empress spoke to the children."),
        ("皇后さまの訪問がニュースになりました。", "The Empress's visit was in the news."),
        ("皇后さまは笑顔で手を振られました。", "The Empress waved with a smile."),
    ],
    "耕": [("父は週末に畑を耕しています。", "My father works the field on weekends."), ("祖父は小さな畑を耕しています。", "My grandfather works a small field.")],
    "郡": [
        ("那須郡にある牧場へ行きました。", "I went to a ranch in Nasu District."),
        ("西多摩郡の友達の家に泊まりました。", "I stayed at a friend's house in Nishitama District."),
        ("祖父の家は那須郡にあります。", "My grandfather's house is in Nasu District."),
        ("旅行の帰りに郡の道の駅へ寄りました。", "On the way back from our trip, we stopped at a roadside station in the district."),
    ],
    "絹": [("母から絹のスカーフをもらいました。", "I got a silk scarf from my mother.")],
    "蚕": [
        ("蚕は桑の葉を食べて育ちます。", "Silkworms grow by eating mulberry leaves."),
        ("子どもたちが学校で蚕を育てています。", "The children are raising silkworms at school."),
        ("蚕を近くで見るのは初めてです。", "This is my first time seeing a silkworm up close."),
        ("蚕がまゆを作る様子を観察しました。", "We watched a silkworm make a cocoon."),
    ],
    "茨": [("来月、茨城県へ旅行に行きます。", "I'm taking a trip to Ibaraki Prefecture next month."), ("茨城県でおいしい納豆を食べました。", "I ate delicious natto in Ibaraki Prefecture."), ("茨城から友達が遊びに来ました。", "A friend came to visit from Ibaraki."), ("茨城県の海を見に行きたいです。", "I want to go see the sea in Ibaraki Prefecture."), ("茨城に住む友人に会いました。", "I met a friend who lives in Ibaraki.")],
    "媛": [("愛媛県でみかんを買いました。", "I bought mandarins in Ehime Prefecture."), ("愛媛に住む友達から手紙が届きました。", "A letter arrived from my friend in Ehime."), ("愛媛県へ行く飛行機を予約しました。", "I booked a flight to Ehime Prefecture."), ("愛媛のお土産を家族に渡しました。", "I gave my family a souvenir from Ehime."), ("いつか愛媛でみかん狩りをしたいです。", "I'd like to go mandarin picking in Ehime someday.")],
    "潟": [("新潟県の友達に会いに行きました。", "I went to see my friend in Niigata Prefecture.")],
    "岐": [("岐阜県で古い町並みを歩きました。", "I walked through an old town in Gifu Prefecture."), ("岐阜の友達がお菓子を送ってくれました。", "My friend in Gifu sent me some sweets.")],
    "埼": [("埼玉から東京まで電車で通っています。", "I commute by train from Saitama to Tokyo."), ("埼玉に住む友達と映画を見ました。", "I saw a movie with my friend who lives in Saitama."), ("週末は埼玉の実家へ帰ります。", "I go back to my family home in Saitama on weekends."), ("埼玉県で新しい店を見つけました。", "I found a new shop in Saitama Prefecture."), ("埼玉から来た友人を駅で迎えました。", "I met my friend from Saitama at the station.")],
    "栃": [("栃木県の温泉に入りました。", "I went to a hot spring in Tochigi Prefecture."), ("栃木へ行く新幹線を予約しました。", "I booked a Shinkansen to Tochigi."), ("栃木のいちごは甘くておいしいです。", "The strawberries from Tochigi are sweet and delicious."), ("栃木県で友達と一泊しました。", "I spent the night with a friend in Tochigi Prefecture."), ("栃木からおいしい野菜が届きました。", "Some delicious vegetables arrived from Tochigi.")],
    "崎": [("長崎の港で写真を撮りました。", "I took a photo at the harbor in Nagasaki."), ("長崎ちゃんぽんを食べてみたいです。", "I'd like to try Nagasaki champon."), ("長崎に住む友人から電話がありました。", "I got a call from a friend who lives in Nagasaki."), ("長崎の坂道をゆっくり歩きました。", "I walked slowly along the sloping streets of Nagasaki."), ("長崎へ行く新幹線の切符を買いました。", "I bought a Shinkansen ticket to Nagasaki.")],
    "滋": [("滋賀県の湖の近くを散歩しました。", "I took a walk near a lake in Shiga Prefecture."), ("滋賀に住む友達を訪ねました。", "I visited a friend who lives in Shiga."), ("滋賀県で自転車を借りました。", "I rented a bicycle in Shiga Prefecture."), ("滋賀から京都まで電車で行きました。", "I went from Shiga to Kyoto by train."), ("滋賀県のお土産を家族に買いました。", "I bought my family a souvenir from Shiga Prefecture.")],
    "梨": [("冷蔵庫で冷やした梨を食べました。", "I ate a pear that I had chilled in the fridge."), ("梨をむいて家族と食べました。", "I peeled a pear and shared it with my family."), ("この梨は甘くてみずみずしいです。", "This pear is sweet and juicy.")],
    "阜": [("岐阜県の友達を訪ねました。", "I visited my friend in Gifu Prefecture."), ("岐阜でおいしい郷土料理を食べました。", "I ate delicious local food in Gifu."), ("岐阜駅で友達と待ち合わせました。", "I met my friend at Gifu Station."), ("岐阜県の山へハイキングに行きました。", "I went hiking in the mountains of Gifu Prefecture.")],
}

FALLBACK_READINGS = {
    "径": ["このぼーるのちょっけいはにじゅっせんちです。", "さらのちょっけいをはかってからたなにいれました。", "このとんねるのちょっけいはさんめーとるほどです。", "ちょっけいをかくにんしてからあたらしいなべをかいました。"],
    "崎": ["ながさきのみなとでしゃしんをとりました。", "ながさきちゃんぽんをたべてみたいです。", "ながさきにすむゆうじんからでんわがありました。", "ながさきのさかみちをゆっくりあるきました。", "ながさきへいくしんかんせんのきっぷをかいました。"],
    "滋": ["しがけんのみずうみのちかくをさんぽしました。", "しがにすむともだちをたずねました。", "しがけんでじてんしゃをかりました。", "しがからきょうとまででんしゃでいきました。", "しがけんのおみやげをかぞくにかいました。"],
    "茨": ["らいげつ、いばらきけんへりょこうにいきます。", "いばらきけんでおいしいなっとうをたべました。", "いばらきからともだちがあそびにきました。", "いばらきけんのうみをみにいきたいです。", "いばらきにすむゆうじんにあいました。"],
    "仁": ["じんさんはきんじょのびょういんではたらいています。", "じんくんはまいあさはやくおきます。", "じんはきょう、ともだちとえいがをみにいきます。", "じんはえきのちかくにすんでいます。", "じんさんはいぬとこうえんをさんぽします。"],
    "媛": ["えひめけんでみかんをかいました。", "えひめにすむともだちからてがみがとどきました。", "えひめけんへいくひこうきをよやくしました。", "えひめのおみやげをかぞくにわたしました。", "いつかえひめでみかんがりをしたいです。"],
    "潟": ["にいがたけんのともだちにあいにいきました。"], "岐": ["ぎふけんでふるいまちなみをあるきました。", "ぎふのともだちがおかしをおくってくれました。"],
    "埼": ["さいたまからとうきょうまででんしゃでかよっています。", "さいたまにすむともだちとえいがをみました。", "しゅうまつはさいたまのじっかへかえります。", "さいたまけんであたらしいみせをみつけました。", "さいたまからきたゆうじんをえきでむかえました。"],
    "栃": ["とちぎけんのおんせんにはいりました。", "とちぎへいくしんかんせんをよやくしました。", "とちぎのいちごはあまくておいしいです。", "とちぎけんでともだちとひとはくしました。", "とちぎからおいしいやさいがとどきました。"],
    "阜": ["ぎふけんのともだちをたずねました。", "ぎふでおいしいきょうどりょうりをたべました。", "ぎふえきでともだちとまちあわせました。", "ぎふけんのやまへはいきんぐにいきました。"],
}

EVERYDAY_CUES = (
    "今日", "明日", "毎日", "朝", "昼", "夜", "家", "学校", "友達", "家族", "母", "父", "子ども", "駅", "電車", "バス", "店", "買", "食", "飲", "行", "来", "帰", "見", "聞", "話", "作", "使", "読", "書", "歩", "住", "仕事", "会社", "週末", "料理", "天気", "雨", "旅行", "公園", "病院", "電話", "本", "部屋", "車",
)
AVOID_PATTERNS = re.compile(r"つべこべ|あいつ|アイツ|エキセントリック|いかんにかかわらず|いかがわし|聖書|パリサイ|ニコデモ|ひっきりなし|おさらば|いまいまし|なさい|べきだ|たらしい|拷問|処刑|殺人|泥棒|盗人|巧言|令色|少なし|戦争|のであった|上天気|おいでですか|ワックス|もろともせず|ジャブジャブ|たらい|おいそれと|すんでのところ|ポンコツ|グランド・セントラル|男子学生|テクニカルグループ|道草を食う|ホットドッグ|クジラ|オーストラリア|サム|ジョージ|トム|ジョン|マイク|フランク|メアリー|スミス|ブラウン|カール|チャールズ|ベス|アリス|ボブ|売春宿|ばつが悪|見せかけ|ファックス|ビジネスホテル|イギリスのバラ|アメリカ人にとって|食いつき|エジプトでは|立ち食い|カッキリ|スクールカラー|セントラル自動車学校|ちっぽけ|くっきり|たとえ火の中|水増し|スクラップ|一見さん|とるに足らない|わきまえ|ピース作れ|立ちっぱなし|たべきれない|彼の犬は彼|ハーバード|エヴェレスト|フィート|ファンレター|犬は人間の最も親しい|見知らぬ人にほえる|男女を問わず|愛読|口元|ユニコーン|スーツにそんな|気前はよい|ちょいやく")
KATAKANA_NAMES = re.compile(r"トム|ジョン|マイク|サム|フランク|メアリー|スミス|ブラウン|ジョージ|チャールズ|カール|ベス|アリス|ボブ|イタリア人")


def current_grade(character, old_grade):
    if old_grade == 4 and character in "囲紀喜救型航告殺士史象賞貯停堂得毒費粉脈歴":
        return 5
    if old_grade == 4 and character in "胃腸":
        return 6
    if old_grade == 5 and character in "賀群徳富":
        return 4
    if old_grade == 5 and character in "恩券承舌銭退敵俵預":
        return 6
    if old_grade == 6 and character == "城":
        return 4
    return old_grade


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("kanjidic_json", type=Path)
    parser.add_argument("tatoeba_json", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()

    kanjidic = json.loads(args.kanjidic_json.read_text(encoding="utf-8"))
    corpus = json.loads(args.tatoeba_json.read_text(encoding="utf-8"))["sentences"]
    readings = pykakasi.kakasi()
    app_source = Path(__file__).resolve().parents[1] / "app.js"
    vocabulary_source = app_source.read_text(encoding="utf-8").split("const soundHints", 1)[0]
    vocabulary_readings = set()
    for word in re.findall(r"jp:'([^']+)'", vocabulary_source):
        reading = "".join(part["hira"] for part in readings.convert(word))
        if len(reading) >= 2:
            vocabulary_readings.add(reading)
            # Include dictionary stems so inflected everyday verbs and adjectives can match.
            if reading[-1:] in "うくぐすつぬぶむるい":
                vocabulary_readings.add(reading[:-1])
    grades = {
        character: current_grade(character, item.get("grade"))
        for character, item in kanjidic.items()
        if item.get("grade") in range(1, 7)
    }
    for character in "茨媛岡潟岐熊香佐埼崎滋鹿縄井沖栃奈梨阪阜":
        grades[character] = 4

    candidates = defaultdict(list)
    for entry in corpus:
        japanese = entry.get("japanese", "").strip()
        english = entry.get("english", "").strip()
        if not english or not 6 <= len(japanese) <= 64:
            continue
        if not re.search(r"[。！？]$", japanese):
            continue
        sentence_kanji = {char for char in japanese if "\u4e00" <= char <= "\u9fff"}
        targets = sentence_kanji.intersection(grades)
        if not targets:
            continue
        if AVOID_PATTERNS.search(japanese):
            continue
        kana = "".join(part["hira"] for part in readings.convert(japanese))
        for character in targets:
            grade = grades[character]
            later_kanji = sum(1 for char in sentence_kanji if char not in grades or grades[char] > grade)
            # Prefer concise, complete sentences with fewer kanji beyond the learner's grade.
            length_cost = abs(len(japanese) - 22)
            everyday_bonus = min(sum(cue in japanese for cue in EVERYDAY_CUES), 3) * 8
            vocabulary_bonus = min(sum(word in kana for word in vocabulary_readings), 2) * 14
            name_cost = 18 if KATAKANA_NAMES.search(japanese) else 0
            score = later_kanji * 18 + length_cost + max(0, len(japanese) - 34) * 2 + name_cost - everyday_bonus - vocabulary_bonus
            candidates[character].append((score, japanese, kana, english, entry["id"]))

    output = {}
    shortages = []
    for character in grades:
        unique = {}
        for row in sorted(candidates.get(character, [])):
            unique.setdefault(row[1], row)
        selected = list(unique.values())[:5]
        for index, (japanese, english) in enumerate(FALLBACKS.get(character, [])):
            if len(selected) >= 5 or japanese in unique:
                continue
            kana = FALLBACK_READINGS.get(character, [])[index] if character in FALLBACK_READINGS else "".join(part["hira"] for part in readings.convert(japanese))
            selected.append((10_000 + index, japanese, kana, english, "authored"))
        if len(selected) < 5:
            shortages.append((character, len(selected)))
        output[character] = [[japanese, kana, english, source_id] for _, japanese, kana, english, source_id in selected]

    if shortages:
        raise ValueError(f"Every kanji must have five examples; remaining shortages: {shortages[:20]}")

    existing_data = args.output.read_text(encoding="utf-8")
    marker = "\nwindow.kanjiExamples = "
    if marker in existing_data:
        existing_data = existing_data.split(marker, 1)[0]
    args.output.write_text(
        existing_data.rstrip()
        + "\n\n// Tatoeba example sentences (CC BY 2.0 FR; sentence IDs retained for attribution).\n"
        + "window.kanjiExamples = " + json.dumps(output, ensure_ascii=False, separators=(",", ":")) + ";\n",
        encoding="utf-8",
        newline="\n",
    )
    counts = Counter(grades.values())
    vocabulary_examples = sum(any(word in reading for word in vocabulary_readings) for values in output.values() for _, reading, _, _ in values)
    print("Kanji targets:", len(output), "grade totals:", dict(sorted(counts.items())))
    print("Characters with fewer than five corpus examples:", len(shortages))
    print("Examples matching app vocabulary:", vocabulary_examples, "of", sum(map(len, output.values())))
    print("Shortage sample:", [(ch.encode("unicode_escape").decode(), n) for ch, n in shortages[:30]])


if __name__ == "__main__":
    main()
