const icons = {
  book:'book-open', grid:'layout-grid', practice:'pencil-line', chart:'chart-no-axes-column-increasing',
  sound:'volume-2', arrow:'arrow-right', chevron:'chevron-right', flame:'flame', user:'user-round',
  leaf:'leaf', target:'target', bulb:'lightbulb', check:'check', shield:'shield-check', search:'search', trophy:'trophy',
};
const icon = name => `<i data-lucide="${icons[name] || icons.book}" aria-hidden="true"></i>`;
const rows = [
  {name:'Vowels', hira:'あいうえお', kata:'アイウエオ', sounds:['a','i','u','e','o']},
  {name:'K-row', hira:'かきくけこ', kata:'カキクケコ', sounds:['ka','ki','ku','ke','ko']},
  {name:'S-row', hira:'さしすせそ', kata:'サシスセソ', sounds:['sa','shi','su','se','so']},
  {name:'T-row', hira:'たちつてと', kata:'タチツテト', sounds:['ta','chi','tsu','te','to']},
  {name:'N-row', hira:'なにぬねの', kata:'ナニヌネノ', sounds:['na','ni','nu','ne','no']},
  {name:'H-row', hira:'はひふへほ', kata:'ハヒフヘホ', sounds:['ha','hi','fu','he','ho']},
  {name:'M-row', hira:'まみむめも', kata:'マミムメモ', sounds:['ma','mi','mu','me','mo']},
  {name:'Y-row', hira:'やゆよ', kata:'ヤユヨ', sounds:['ya','yu','yo']},
  {name:'R-row', hira:'らりるれろ', kata:'ラリルレロ', sounds:['ra','ri','ru','re','ro']},
  {name:'W + N', hira:'わをん', kata:'ワヲン', sounds:['wa','wo','n']},
];
const vocabulary = [
  {jp:'あさ',romaji:'asa',en:'Morning',category:'Everyday',script:'hira'},
  {jp:'いえ',romaji:'ie',en:'Home',category:'Places',script:'hira'},
  {jp:'おいしい',romaji:'oishii',en:'Delicious',category:'Food',script:'hira'},
  {jp:'えき',romaji:'eki',en:'Train station',category:'Places',script:'hira'},
  {jp:'すし',romaji:'sushi',en:'Sushi',category:'Food',script:'hira'},
  {jp:'ねこ',romaji:'neko',en:'Cat',category:'Everyday',script:'hira'},
  {jp:'みせ',romaji:'mise',en:'Shop',category:'Places',script:'hira'},
  {jp:'かさ',romaji:'kasa',en:'Umbrella',category:'Everyday',script:'hira'},
  {jp:'おちゃ',romaji:'ocha',en:'Tea',category:'Food',script:'hira'},
  {jp:'はな',romaji:'hana',en:'Flower',category:'Everyday',script:'hira'},
  {jp:'そら',romaji:'sora',en:'Sky',category:'Everyday',script:'hira'},
  {jp:'やま',romaji:'yama',en:'Mountain',category:'Places',script:'hira'},
  {jp:'いぬ',romaji:'inu',en:'Dog',category:'Everyday',script:'hira'},
  {jp:'さかな',romaji:'sakana',en:'Fish',category:'Food',script:'hira'},
  {jp:'くるま',romaji:'kuruma',en:'Car',category:'Everyday',script:'hira'},
  {jp:'うみ',romaji:'umi',en:'Sea',category:'Places',script:'hira'},
  {jp:'コーヒー',romaji:'kōhī',en:'Coffee',category:'Food',script:'kata'},
  {jp:'パン',romaji:'pan',en:'Bread',category:'Food',script:'kata'},
  {jp:'コンビニ',romaji:'konbini',en:'Convenience store',category:'Places',script:'kata'},
  {jp:'ホテル',romaji:'hoteru',en:'Hotel',category:'Places',script:'kata'},
  {jp:'バス',romaji:'basu',en:'Bus',category:'Everyday',script:'kata'},
  {jp:'カメラ',romaji:'kamera',en:'Camera',category:'Everyday',script:'kata'},
  {jp:'アイス',romaji:'aisu',en:'Ice cream',category:'Food',script:'kata'},
  {jp:'トイレ',romaji:'toire',en:'Restroom',category:'Places',script:'kata'},
  {jp:'メニュー',romaji:'menyū',en:'Menu',category:'Food',script:'kata'},
];
const additionalVocabulary = [
  ['あい','ai','love','Everyday','hira'],
  ['あお','ao','blue','Everyday','hira'],
  ['あか','aka','red','Everyday','hira'],
  ['あき','aki','autumn','Everyday','hira'],
  ['あに','ani','older brother','Everyday','hira'],
  ['あね','ane','older sister','Everyday','hira'],
  ['あめ','ame','rain','Everyday','hira'],
  ['いし','ishi','stone','Everyday','hira'],
  ['いと','ito','thread','Everyday','hira'],
  ['うし','ushi','cow','Everyday','hira'],
  ['うた','uta','song','Everyday','hira'],
  ['うで','ude','arm','Everyday','hira'],
  ['うち','uchi','inside; home','Places','hira'],
  ['おか','oka','hill','Places','hira'],
  ['おと','oto','sound','Everyday','hira'],
  ['おに','oni','ogre','Everyday','hira'],
  ['おや','oya','parent','Everyday','hira'],
  ['かお','kao','face','Everyday','hira'],
  ['かぎ','kagi','key','Everyday','hira'],
  ['かぜ','kaze','wind','Everyday','hira'],
  ['かに','kani','crab','Food','hira'],
  ['かみ','kami','paper','Everyday','hira'],
  ['きた','kita','north','Places','hira'],
  ['きく','kiku','chrysanthemum','Everyday','hira'],
  ['きのこ','kinoko','mushroom','Food','hira'],
  ['きもの','kimono','kimono','Everyday','hira'],
  ['くち','kuchi','mouth','Everyday','hira'],
  ['くも','kumo','cloud','Everyday','hira'],
  ['くに','kuni','country','Places','hira'],
  ['こえ','koe','voice','Everyday','hira'],
  ['ここ','koko','here','Places','hira'],
  ['こめ','kome','rice','Food','hira'],
  ['さけ','sake','salmon; sake','Food','hira'],
  ['さと','sato','village','Places','hira'],
  ['しお','shio','salt','Food','hira'],
  ['しろ','shiro','white; castle','Everyday','hira'],
  ['すな','suna','sand','Everyday','hira'],
  ['せかい','sekai','world','Places','hira'],
  ['せなか','senaka','back','Everyday','hira'],
  ['たこ','tako','octopus','Food','hira'],
  ['たまご','tamago','egg','Food','hira'],
  ['ちず','chizu','map','Places','hira'],
  ['つき','tsuki','moon','Everyday','hira'],
  ['つくえ','tsukue','desk','Everyday','hira'],
  ['つち','tsuchi','soil','Everyday','hira'],
  ['て','te','hand','Everyday','hira'],
  ['とけい','tokei','clock','Everyday','hira'],
  ['とり','tori','bird; chicken','Food','hira'],
  ['なつ','natsu','summer','Everyday','hira'],
  ['なまえ','namae','name','Everyday','hira'],
  ['にく','niku','meat','Food','hira'],
  ['にし','nishi','west','Places','hira'],
  ['にわ','niwa','garden','Places','hira'],
  ['はし','hashi','chopsticks; bridge','Everyday','hira'],
  ['はる','haru','spring','Everyday','hira'],
  ['ひ','hi','sun; day','Everyday','hira'],
  ['ひと','hito','person','Everyday','hira'],
  ['ひる','hiru','noon','Everyday','hira'],
  ['ふね','fune','boat','Places','hira'],
  ['ふゆ','fuyu','winter','Everyday','hira'],
  ['へや','heya','room','Places','hira'],
  ['ほし','hoshi','star','Everyday','hira'],
  ['まち','machi','town','Places','hira'],
  ['まど','mado','window','Everyday','hira'],
  ['みず','mizu','water','Food','hira'],
  ['みち','michi','road','Places','hira'],
  ['みみ','mimi','ear','Everyday','hira'],
  ['むし','mushi','insect','Everyday','hira'],
  ['むら','mura','village','Places','hira'],
  ['め','me','eye','Everyday','hira'],
  ['もり','mori','forest','Places','hira'],
  ['やさい','yasai','vegetables','Food','hira'],
  ['ゆき','yuki','snow','Everyday','hira'],
  ['ゆめ','yume','dream','Everyday','hira'],
  ['よる','yoru','night','Everyday','hira'],
  ['りんご','ringo','apple','Food','hira'],
  ['れんしゅう','renshū','practice','Everyday','hira'],
  ['わたし','watashi','I; me','Everyday','hira'],
  ['おかね','okane','money','Everyday','hira'],
  ['おてら','otera','temple','Places','hira'],
  ['おまつり','omatsuri','festival','Everyday','hira'],
  ['かぞく','kazoku','family','Everyday','hira'],
  ['こども','kodomo','child','Everyday','hira'],
  ['ともだち','tomodachi','friend','Everyday','hira'],
  ['テレビ','terebi','television','Everyday','kata'],
  ['ラジオ','rajio','radio','Everyday','kata'],
  ['タクシー','takushī','taxi','Places','kata'],
  ['\u30c8\u30ec\u30a4\u30f3','tor\u0113n','train','Places','kata'],
  ['チケット','chiketto','ticket','Places','kata'],
  ['キッチン','kitchin','kitchen','Everyday','kata'],
  ['レストラン','resutoran','restaurant','Places','kata'],
  ['スーパー','sūpā','supermarket','Places','kata'],
  ['デパート','depāto','department store','Places','kata'],
  ['パンケーキ','pankēki','pancake','Food','kata'],
  ['サンドイッチ','sandoitchi','sandwich','Food','kata'],
  ['ハンバーガー','hanbāgā','hamburger','Food','kata'],
  ['サラダ','sarada','salad','Food','kata'],
  ['スープ','sūpu','soup','Food','kata'],
  ['チーズ','chīzu','cheese','Food','kata'],
  ['バター','batā','butter','Food','kata'],
  ['ミルク','miruku','milk','Food','kata'],
  ['ジュース','jūsu','juice','Food','kata'],
  ['ケーキ','kēki','cake','Food','kata'],
  ['\u30c1\u30e7\u30b3\u30ec\u30fc\u30c8','chokor\u0113to','chocolate','Food','kata'],
  ['クッキー','kukkī','cookie','Food','kata'],
  ['アイスクリーム','aisukurīmu','ice cream','Food','kata'],
  ['オレンジ','orenji','orange','Food','kata'],
  ['バナナ','banana','banana','Food','kata'],
  ['レモン','remon','lemon','Food','kata'],
  ['トマト','tomato','tomato','Food','kata'],
  ['ポテト','poteto','potato','Food','kata'],
  ['ピザ','piza','pizza','Food','kata'],
  ['パスタ','pasuta','pasta','Food','kata'],
  ['カレー','karē','curry','Food','kata'],
  ['コーラ','kōra','cola','Food','kata'],
  ['ビール','bīru','beer','Food','kata'],
  ['ワイン','wain','wine','Food','kata'],
  ['サッカー','sakkā','soccer','Everyday','kata'],
  ['テニス','tenisu','tennis','Everyday','kata'],
  ['ゲーム','gēmu','game','Everyday','kata'],
  ['スポーツ','supōtsu','sports','Everyday','kata'],
  ['ギター','gitā','guitar','Everyday','kata'],
  ['ピアノ','piano','piano','Everyday','kata'],
  ['ペン','pen','pen','Everyday','kata'],
  ['ノート','nōto','notebook','Everyday','kata'],
  ['バッグ','baggu','bag','Everyday','kata'],
  ['シャツ','shatsu','shirt','Everyday','kata'],
  ['セーター','sētā','sweater','Everyday','kata'],
  ['ズボン','zubon','trousers','Everyday','kata'],
  ['スカート','sukāto','skirt','Everyday','kata'],
  ['コート','kōto','coat','Everyday','kata'],
  ['マスク','masuku','mask','Everyday','kata'],
  ['カレンダー','karendā','calendar','Everyday','kata'],
  ['カーテン','kāten','curtain','Everyday','kata'],
  ['テーブル','tēburu','table','Everyday','kata'],
  ['ソファ','sofa','sofa','Everyday','kata'],
  ['ベッド','beddo','bed','Everyday','kata'],
  ['ドア','doa','door','Everyday','kata'],
  ['エレベーター','erebētā','elevator','Places','kata'],
  ['エスカレーター','esukarētā','escalator','Places','kata'],
  ['バイク','baiku','motorcycle','Places','kata'],
  ['トラック','torakku','truck','Places','kata'],
  ['バスケットボール','basukettobōru','basketball','Everyday','kata'],
  ['ボール','bōru','ball','Everyday','kata'],
  ['カレーライス','karē raisu','curry rice','Food','kata'],
  ['ヨーグルト','yōguruto','yogurt','Food','kata'],
  ['サンド','sando','sandwich','Food','kata'],
  ['\u30c9\u30fc\u30ca\u30c4','d\u014dnatsu','doughnut','Food','kata'],
  ['\u30ad\u30e3\u30f3\u30c7\u30a3\u30fc','kyand\u012b','candy','Food','kata'],
  ['アイスティー','aisutī','iced tea','Food','kata'],
  ['ミネラルウォーター','mineraru wōtā','mineral water','Food','kata'],
  ['シャンプー','shanpū','shampoo','Everyday','kata'],
  ['プール','pūru','pool','Places','kata'],
  ['ビル','biru','building','Places','kata'],
  ['オフィス','ofisu','office','Places','kata'],
  ['トイレットペーパー','toiretto pēpā','toilet paper','Everyday','kata'],
  ['スマートフォン','sumātofon','smartphone','Everyday','kata'],
  ['コンピューター','konpyūtā','computer','Everyday','kata'],
  ['インターネット','intānetto','internet','Everyday','kata'],
  ['メール','mēru','email','Everyday','kata'],
  ['アプリ','apuri','app','Everyday','kata'],
  ['カメラマン','kameraman','photographer','Everyday','kata'],
  ['ニュース','nyūsu','news','Everyday','kata'],
  ['カード','kādo','card','Everyday','kata'],
  ['サイン','sain','sign; signature','Everyday','kata'],
  ['コピー','kopī','copy','Everyday','kata'],
  ['テスト','tesuto','test','Everyday','kata'],
  ['クラス','kurasu','class','Everyday','kata'],
  ['センター','sentā','center','Places','kata'],
  ['アパート','apāto','apartment','Places','kata'],
  ['マンション','manshon','condominium','Places','kata'],
  ['ビザ','biza','visa','Places','kata'],
  ['パスポート','pasupōto','passport','Places','kata'],
  ['\u30c1\u30e7\u30b3\u30ec\u30fc\u30c8','chokor\u0113to','chocolate','Food','kata'],
  ['オムレツ','omuretsu','omelet','Food','kata'],
].map(([jp,romaji,en,category,script]) => ({jp,romaji:romaji.trim(),en,category,script}));
const partsOfSpeechVocabulary = [
  ['おおきい','ōkii','big','Adjectives'],['ちいさい','chiisai','small','Adjectives'],['あたらしい','atarashii','new','Adjectives'],['ふるい','furui','old','Adjectives'],['いい','ii','good','Adjectives'],
  ['わるい','warui','bad','Adjectives'],['あつい','atsui','hot (weather)','Adjectives'],['さむい','samui','cold (weather)','Adjectives'],['つめたい','tsumetai','cold (to the touch)','Adjectives'],['あたたかい','atatakai','warm','Adjectives'],
  ['すずしい','suzushii','cool (weather)','Adjectives'],['たかい','takai','high; expensive','Adjectives'],['やすい','yasui','inexpensive','Adjectives'],['ひくい','hikui','low','Adjectives'],['ながい','nagai','long','Adjectives'],
  ['みじかい','mijikai','short','Adjectives'],['はやい','hayai','fast; early','Adjectives'],['おそい','osoi','slow; late','Adjectives'],['おもしろい','omoshiroi','interesting','Adjectives'],['つまらない','tsumaranai','boring','Adjectives'],
  ['たのしい','tanoshii','fun','Adjectives'],['うれしい','ureshii','happy; glad','Adjectives'],['かなしい','kanashii','sad','Adjectives'],['こわい','kowai','scary','Adjectives'],['やさしい','yasashii','kind; easy','Adjectives'],
  ['むずかしい','muzukashii','difficult','Adjectives'],['かんたん','kantan','easy; simple','Adjectives'],['しずか','shizuka','quiet','Adjectives'],['にぎやか','nigiyaka','lively','Adjectives'],['きれい','kirei','beautiful; clean','Adjectives'],
  ['ゆうめい','yūmei','famous','Adjectives'],['しんせつ','shinsetsu','kind; thoughtful','Adjectives'],['べんり','benri','convenient','Adjectives'],['ふべん','fuben','inconvenient','Adjectives'],['すき','suki','liked; fond of','Adjectives'],
  ['きらい','kirai','disliked','Adjectives'],['じょうず','jōzu','skillful','Adjectives'],['へた','heta','unskilled','Adjectives'],['げんき','genki','well; energetic','Adjectives'],['ひま','hima','free; not busy','Adjectives'],
  ['いそがしい','isogashii','busy','Adjectives'],['やわらかい','yawarakai','soft','Adjectives'],['まずい','mazui','bad-tasting','Adjectives'],['あまい','amai','sweet','Adjectives'],['からい','karai','spicy','Adjectives'],
  ['にがい','nigai','bitter','Adjectives'],['すっぱい','suppai','sour','Adjectives'],['おもい','omoi','heavy','Adjectives'],['かるい','karui','lightweight','Adjectives'],['かわいい','kawaii','cute','Adjectives'],
  ['たべる','taberu','to eat','Verbs'],['のむ','nomu','to drink','Verbs'],['みる','miru','to see; watch','Verbs'],['たずねる','tazuneru','to ask','Verbs'],['はなす','hanasu','to speak','Verbs'],
  ['よむ','yomu','to read','Verbs'],['かく','kaku','to write','Verbs'],['する','suru','to do','Verbs'],['くる','kuru','to come','Verbs'],['いく','iku','to go','Verbs'],
  ['かえる','kaeru','to return','Verbs'],['ある','aru','to exist (inanimate)','Verbs'],['いる','iru','to exist (animate)','Verbs'],['ねる','neru','to sleep','Verbs'],['おきる','okiru','to wake up','Verbs'],
  ['はたらく','hataraku','to work','Verbs'],['やすむ','yasumu','to rest; take a break','Verbs'],['あそぶ','asobu','to play','Verbs'],['まなぶ','manabu','to learn','Verbs'],['おしえる','oshieru','to teach; tell','Verbs'],
  ['おぼえる','oboeru','to remember','Verbs'],['わすれる','wasureru','to forget','Verbs'],['つかう','tsukau','to use','Verbs'],['つくる','tsukuru','to make','Verbs'],['かう','kau','to buy','Verbs'],
  ['うる','uru','to sell','Verbs'],['まつ','matsu','to wait','Verbs'],['あう','au','to meet','Verbs'],['はいる','hairu','to enter','Verbs'],['でる','deru','to leave; go out','Verbs'],
  ['あける','akeru','to open','Verbs'],['しめる','shimeru','to close','Verbs'],['あらう','arau','to wash','Verbs'],
  ['れんしゅうする','renshū suru','to practice','Verbs'],['うたう','utau','to sing','Verbs'],['およぐ','oyogu','to swim','Verbs'],['はしる','hashiru','to run','Verbs'],['あるく','aruku','to walk','Verbs'],
  ['のる','noru','to ride; get on','Verbs'],['おりる','oriru','to get off','Verbs'],['とる','toru','to take','Verbs'],['もつ','motsu','to hold; carry','Verbs'],['おく','oku','to put; place','Verbs'],
  ['つける','tsukeru','to turn on','Verbs'],['けす','kesu','to turn off; erase','Verbs'],['おもう','omou','to think','Verbs'],['しる','shiru','to know','Verbs'],['すむ','sumu','to live; reside','Verbs'],
  ['かりる','kariru','to borrow','Verbs'],['かす','kasu','to lend','Verbs'],
].map(([jp,romaji,en,category]) => ({jp,romaji,en,category,script:'hira'}));
vocabulary.push(...additionalVocabulary,...partsOfSpeechVocabulary);
const soundHints = {a:'“ah”, as in father',i:'“ee”, as in see',u:'“oo”, with relaxed, unrounded lips',e:'“eh”, as in bed',o:'“oh”, as in open',shi:'“shee”, as in she',chi:'“chee”, as in cheese',tsu:'“ts” + “oo”, as in tsunami',fu:'A soft “foo”, with relaxed lips',wo:'Usually pronounced “o” as a particle',n:'A nasal “n” sound',r:'A light tap of the tongue'};
const storageKey = 'nihongo-progress-v1';
let saved = {};
try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; } catch { saved = {}; }
const learned = new Set(Array.isArray(saved.learned) ? saved.learned.filter(value => typeof value === 'string') : []);
const activity = new Set(Array.isArray(saved.activity) ? saved.activity.filter(value => typeof value === 'string') : []);
const reviewCards = saved.reviewCards && typeof saved.reviewCards==='object' && !Array.isArray(saved.reviewCards) ? saved.reviewCards : {};
const resumeViews=['lessons','vocabulary','particles','kanji','practice'];
const savedResume=(()=>{
  const resume=saved.resume;
  if (!resume || !resumeViews.includes(resume.view)) return null;
  const script=resume.script==='kata'?'kata':'hira';
  const row=Number.isInteger(resume.row)?Math.max(0,Math.min(rows.length-1,resume.row)):0;
  const char=Number.isInteger(resume.char)?Math.max(0,Math.min(rows[row].sounds.length-1,resume.char)):0;
  const practiceMode=['characters','vocabulary','sentences','kanji','review','builder'].includes(resume.practiceMode)?resume.practiceMode:'characters';
  const practiceKanjiGrade=Number.isInteger(resume.practiceKanjiGrade)&&resume.practiceKanjiGrade>=1&&resume.practiceKanjiGrade<=6?resume.practiceKanjiGrade:1;
  const kanjiGrade=Number.isInteger(resume.kanjiGrade)&&resume.kanjiGrade>=1&&resume.kanjiGrade<=6?resume.kanjiGrade:1;
  return {view:resume.view,script,row,char,practiceMode,practiceKanjiGrade,kanjiGrade};
})();
const state = {view:'home',lessonsExpanded:window.innerWidth>700,practiceExpanded:false,script:savedResume?.script||'hira',row:savedResume?.row||0,char:savedResume?.char||0,category:'All',search:'',quiz:null,quizzes:Number.isFinite(saved.quizzes) ? saved.quizzes : 0,practiceMode:savedResume?.practiceMode||'characters',practiceKanjiGrade:savedResume?.practiceKanjiGrade||1,kanjiReadingsRevealed:false,vocabularyReadingRevealed:false,sentenceQueue:[],sentenceIndex:0,translationRevealed:false,builderQueue:[],builderIndex:0,builderSelected:[],builderOrder:[],builderChecked:null,kanjiGrade:savedResume?.kanjiGrade||1,kanjiSearch:'',resume:savedResume};
const app = document.querySelector('#app');
let strokePlayer = null;
const scriptName = () => state.script === 'hira' ? 'Hiragana' : 'Katakana';
const localDate = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
function saveProgress() {
  try { localStorage.setItem(storageKey, JSON.stringify({learned:[...learned],activity:[...activity],quizzes:state.quizzes,resume:state.resume,reviewCards})); }
  catch { toast('Browser storage is unavailable. Progress will last for this visit.'); }
}
function rememberLearningPlace() {
  if (!resumeViews.includes(state.view)) return;
  state.resume={view:state.view,script:state.script,row:state.row,char:state.char,practiceMode:state.practiceMode,practiceKanjiGrade:state.practiceKanjiGrade,kanjiGrade:state.kanjiGrade};
  saveProgress();
}
function resumeDescription() {
  if (!state.resume) return 'Start with Hiragana';
  if (state.resume.view==='lessons') return `${state.resume.script==='hira'?'Hiragana':'Katakana'} · ${rows[state.resume.row].name}`;
  if (state.resume.view==='practice') return ({characters:'Kana identification practice',vocabulary:'Vocabulary practice',sentences:'Sentence translation practice',kanji:`Kanji recognition · Grade ${state.resume.practiceKanjiGrade}`,review:'Spaced review',builder:'Sentence building'})[state.resume.practiceMode];
  return ({vocabulary:'Vocabulary lesson',particles:'Particles lesson',kanji:`Kanji lesson · Grade ${state.resume.kanjiGrade}`})[state.resume.view];
}
function streak() {
  const date = new Date();
  if (!activity.has(localDate(date))) date.setDate(date.getDate()-1);
  let count = 0;
  while (activity.has(localDate(date))) { count++; date.setDate(date.getDate()-1); }
  return count;
}
const characters = () => rows.flatMap((row,rowIndex) => [...row[state.script]].map((character,index) => ({character,sound:row.sounds[index],row:rowIndex,index})));
const countLearned = () => characters().filter(item => learned.has(item.character)).length;
const escapeText = text => String(text).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
function renderHome() {
  return `<section class="home-view"><p class="greeting">ようこそ / Welcome</p><div class="home-hero"><div><span class="eyebrow">A LITTLE JAPANESE, EVERY DAY</span><h1>Start with the sounds.<br>Build toward real sentences.</h1><p>GaiGenius is a simple, self-paced path through Japanese writing, everyday words, and sentence building. Learn a little at a time, then use Practice to check what you remember.</p><p class="resume-hint">${escapeText(resumeDescription())}</p><button class="primary-button" data-action="continue-learning">Continue learning ${icon('arrow')}</button></div><div class="home-hero-mark" lang="ja" aria-hidden="true">あ<br>ア</div></div><div class="section-title home-section-heading"><h2>A suggested learning order</h2><span class="muted">You can revisit any lesson whenever you like.</span></div><div class="learning-path"><article class="path-step"><span class="path-number">01</span><div><span class="eyebrow">LESSONS · START HERE</span><h3>Kana: Hiragana, then Katakana</h3><p>Learn the basic sounds and characters first. Follow the bite-sized rows and use the stroke guides to see how each character is written.</p><button class="text-button" data-action="view" data-value="lessons">Open Kana lessons ${icon('arrow')}</button></div></article><article class="path-step"><span class="path-number">02</span><div><span class="eyebrow">LESSONS</span><h3>Everyday vocabulary</h3><p>Build a useful base of common words, including food, places, adjectives, and verbs.</p><button class="text-button" data-action="view" data-value="vocabulary">Explore Vocabulary ${icon('arrow')}</button></div></article><article class="path-step"><span class="path-number">03</span><div><span class="eyebrow">LESSONS</span><h3>Particles</h3><p>See how particles such as は, が, を, に, and で connect words and show their roles in a sentence.</p><button class="text-button" data-action="view" data-value="particles">Explore Particles ${icon('arrow')}</button></div></article><article class="path-step"><span class="path-number">04</span><div><span class="eyebrow">LESSONS</span><h3>Kanji, Grade 1 through Grade 6</h3><p>Meet the school-grade kanji with their meanings, kana readings, and sentence examples.</p><button class="text-button" data-action="view" data-value="kanji">Explore Kanji ${icon('arrow')}</button></div></article></div><section class="home-practice"><div class="section-title"><div><span class="eyebrow">PRACTICE · USE IT AS YOU LEARN</span><h2>Short practice for each step</h2></div><p class="muted">Try a matching practice after each lesson. Translation practice lets you reveal the answer when you’re ready.</p></div><div class="home-practice-grid"><button class="home-practice-card" data-action="practice-mode" data-value="characters"><span class="home-practice-symbol" lang="ja">あ ア</span><strong>Hiragana / Katakana</strong><span>Identify a random kana character.</span>${icon('arrow')}</button><button class="home-practice-card" data-action="practice-mode" data-value="vocabulary"><span class="home-practice-symbol" lang="ja">ことば</span><strong>Vocabulary</strong><span>Choose the meaning of a word in kana.</span>${icon('arrow')}</button><button class="home-practice-card" data-action="practice-mode" data-value="sentences"><span class="home-practice-symbol" lang="ja">文</span><strong>Simple Sentence Translation</strong><span>Try a sentence, then reveal its reading and translation.</span>${icon('arrow')}</button><button class="home-practice-card" data-action="practice-mode" data-value="kanji"><span class="home-practice-symbol" lang="ja">漢字</span><strong>Kanji Recognition by Grade</strong><span>Practice recognizing kanji from a selected grade.</span>${icon('arrow')}</button></div></section><p class="home-note">Suggested path: Kana → Vocabulary → Particles → Kanji. Practice alongside each lesson and move at your own pace.</p></section>`;
}
function mountAdditionalPracticeOptions() {
  const options=[
    {mode:'review',label:'Spaced Review',description:'Review due or missed kana, vocabulary, and kanji.',symbol:'復習'},
    {mode:'builder',label:'Sentence Building',description:'Arrange familiar words and particles into sentences.',symbol:'文'},
  ];
  const submenu=app.querySelector('#practice-submenu');
  if (submenu) submenu.insertAdjacentHTML('beforeend',options.map(({mode,label})=>
    `<button class="nav-sub-button ${state.view==='practice'&&state.practiceMode===mode?'active':''}" type="button" data-action="practice-mode" data-value="${mode}" ${state.view==='practice'&&state.practiceMode===mode?'aria-current="page"':''}>${label}</button>`
  ).join(''));
  const homeGrid=app.querySelector('.home-practice-grid');
  if (homeGrid) homeGrid.insertAdjacentHTML('beforeend',options.map(({mode,label,description,symbol})=>
    `<button class="home-practice-card" data-action="practice-mode" data-value="${mode}"><span class="home-practice-symbol" lang="ja">${symbol}</span><strong>${label}</strong><span>${description}</span>${icon('arrow')}</button>`
  ).join(''));
}
function scriptTabs() {
  return `<div class="script-tabs" role="group" aria-label="Japanese script">${['hira','kata'].map(script => `<button class="script-tab ${state.script===script?'active':''}" data-action="script" data-value="${script}" aria-pressed="${state.script===script}">${script==='hira'?'Hiragana':'Katakana'}</button>`).join('')}</div>`;
}
function render() {
  strokePlayer?.destroy();
  const titles = {home:'Home',lessons:`Kana · ${scriptName()}`,vocabulary:'Vocabulary',particles:'Particles',kanji:'Kanji',practice:'Practice',progress:'Your progress'};
  const lessonsActive=['lessons','vocabulary','particles','kanji'].includes(state.view);
  app.innerHTML = `<aside class="sidebar" aria-label="Main navigation">
    <a class="brand" href="#" data-action="home" aria-label="GaiGenius home"><span class="brand-mark" lang="ja">が</span><span>Gai<span class="accent">Genius</span></span></a>
    <p class="brand-caption">A LITTLE JAPANESE, EVERY DAY.</p>
    <p class="nav-label">YOUR LEARNING SPACE</p>
    <nav class="nav" aria-label="Learning sections"><div class="nav-group ${lessonsActive?'active':''} ${state.lessonsExpanded?'is-expanded':''}"><button class="nav-button nav-lessons ${lessonsActive?'active':''}" type="button" data-action="toggle-lessons" aria-expanded="${state.lessonsExpanded}" aria-controls="lessons-submenu">${icon('book')}<span>Lessons</span><span class="nav-chevron">${icon('chevron')}</span></button><div class="nav-submenu" id="lessons-submenu" ${state.lessonsExpanded?'':'hidden'}><button class="nav-sub-button ${state.view==='lessons'?'active':''}" type="button" data-action="view" data-value="lessons" ${state.view==='lessons'?'aria-current="page"':''}>Kana</button><button class="nav-sub-button ${state.view==='vocabulary'?'active':''}" type="button" data-action="view" data-value="vocabulary" ${state.view==='vocabulary'?'aria-current="page"':''}>Vocabulary</button><button class="nav-sub-button ${state.view==='particles'?'active':''}" type="button" data-action="view" data-value="particles" ${state.view==='particles'?'aria-current="page"':''}>Particles</button><button class="nav-sub-button ${state.view==='kanji'?'active':''}" type="button" data-action="view" data-value="kanji" ${state.view==='kanji'?'aria-current="page"':''}>Kanji</button></div></div><div class="nav-group ${state.view==='practice'?'active':''} ${state.practiceExpanded?'is-expanded':''}"><button class="nav-button nav-practice ${state.view==='practice'?'active':''}" type="button" data-action="toggle-practice" aria-expanded="${state.practiceExpanded}" aria-controls="practice-submenu">${icon('practice')}<span>Practice</span><span class="nav-chevron">${icon('chevron')}</span></button><div class="nav-submenu" id="practice-submenu" ${state.practiceExpanded?'':'hidden'}><button class="nav-sub-button ${state.view==='practice'&&state.practiceMode==='characters'?'active':''}" type="button" data-action="practice-mode" data-value="characters" ${state.view==='practice'&&state.practiceMode==='characters'?'aria-current="page"':''}>Hiragana / Katakana</button><button class="nav-sub-button ${state.view==='practice'&&state.practiceMode==='vocabulary'?'active':''}" type="button" data-action="practice-mode" data-value="vocabulary" ${state.view==='practice'&&state.practiceMode==='vocabulary'?'aria-current="page"':''}>Vocabulary</button><button class="nav-sub-button ${state.view==='practice'&&state.practiceMode==='sentences'?'active':''}" type="button" data-action="practice-mode" data-value="sentences" ${state.view==='practice'&&state.practiceMode==='sentences'?'aria-current="page"':''}>Simple Sentence Translation</button><button class="nav-sub-button ${state.view==='practice'&&state.practiceMode==='kanji'?'active':''}" type="button" data-action="practice-mode" data-value="kanji" ${state.view==='practice'&&state.practiceMode==='kanji'?'aria-current="page"':''}>Kanji Recognition by Grade</button></div></div><button class="nav-button ${state.view==='progress'?'active':''}" type="button" data-action="view" data-value="progress" ${state.view==='progress'?'aria-current="page"':''}>${icon('chart')}<span>My progress</span></button></nav>
    <div class="sidebar-note"><div class="jp" lang="ja">一歩ずつ。</div><p>One step at a time.<br>That's how every journey begins.</p></div>
    <div class="sidebar-foot">${icon('shield')} Free to learn. Always.</div>
    </aside><div class="shell"><header class="topbar"><div class="breadcrumb">Your learning space ${icon('chevron')} <strong>${titles[state.view]}</strong></div><a class="brand mobile-brand" href="#" data-action="home" aria-label="GaiGenius home"><span class="brand-mark" lang="ja">が</span><span>Gai<span class="accent">Genius</span></span></a><div class="topbar-right"><span class="streak" title="Consecutive days of learning">${icon('flame')} ${streak()} day${streak()===1?'':'s'}</span><span class="guest" title="Learning without an account" aria-label="Guest learner">${icon('user')}</span></div></header>
    <main class="main" id="main-content"><div class="fade-in">${state.view==='home'?renderHome():state.view==='lessons'?renderLessons():state.view==='vocabulary'?renderVocabulary():state.view==='particles'?renderParticles():state.view==='kanji'?renderKanji():state.view==='practice'?renderPractice():renderProgress()}</div><footer class="footer"><span>A little progress, every day. You're on your way.</span><span class="jp" lang="ja">楽しんで学ぼう <span lang="en">/ Enjoy the journey</span></span></footer></main></div>`;
  mountAdditionalPracticeOptions();
  lucide.createIcons({attrs:{'stroke-width':1.7}});
  strokePlayer = mountStrokeGuide();
}
function renderLessons() {
  const row = rows[state.row];
  const character = row[state.script][state.char];
  const sound = row.sounds[state.char];
  const count = countLearned();
  const preview = vocabulary.filter(word => word.script===state.script && word.jp.includes(character)).slice(0,3);
  return `<p class="greeting">こんにちは <span lang="en">/ Hello, learner</span></p><div class="page-head"><div><h1>Let's start with ${state.script==='hira'?'あ':'ア'}.</h1><p>A new alphabet. A little practice. A world of possibility.</p></div><span class="today-tag">${icon('leaf')} At your own pace</span></div>
    <div class="workspace"><div class="lesson-column"><div class="section-title"><h2>Your next small step</h2>${scriptTabs()}</div>
    <section class="lesson-card" aria-label="Character lesson"><div class="lesson-top"><div><span class="eyebrow">${scriptName().toUpperCase()} · LESSON ${String(state.row+1).padStart(2,'0')}</span><h3>${state.row===0?'Meet the vowels':`Meet the ${row.name.toLowerCase()}`}</h3></div><span class="lesson-badge">${state.row===0?'The foundation':`${row[state.script].length} characters`}</span></div>
    <div class="character-stage"><div class="character-grid" aria-hidden="true"></div><button class="sound-button" data-action="speak" data-text="${character}" title="Listen to ${sound}" aria-label="Listen to ${sound}">${icon('sound')}</button><div class="big-character writing-character" lang="ja">${renderStrokeDiagram(character)}</div><div class="romanization">${sound}</div><div class="sound-description">${soundHints[sound] || (sound.startsWith('r') ? soundHints.r : `Pronounced “${sound}”`)}</div></div>
    ${renderStrokeControls(character)}
    <div class="character-options" role="group" aria-label="Lesson characters">${[...row[state.script]].map((kana,index) => `<button class="char-option ${state.char===index?'active':''} ${learned.has(kana)?'learned':''}" data-action="character" data-index="${index}" aria-pressed="${state.char===index}" aria-label="${kana}, ${row.sounds[index]}${learned.has(kana)?', learned':''}" lang="ja">${kana}</button>`).join('')}</div>
    <div class="lesson-bottom"><span class="lesson-position">${String(state.char+1).padStart(2,'0')} <span aria-hidden="true">/</span> ${String(row.sounds.length).padStart(2,'0')} characters</span><button class="primary-button" data-action="learn">${state.char===row.sounds.length-1?'Finish lesson':'Got it, next'} ${icon(state.char===row.sounds.length-1?'check':'arrow')}</button></div></section>
    <section class="section-gap"><div class="section-title"><h2>The ${scriptName().toLowerCase()} path</h2><span class="muted" style="font-size:10px">10 bite-sized lessons</span></div><div class="row-list">${rows.map((item,index) => `<button class="row-button ${state.row===index?'active':''}" data-action="row" data-index="${index}" aria-pressed="${state.row===index}"><span class="jp" lang="ja">${item[state.script][0]}</span><span class="row-name ${[...item[state.script]].every(kana => learned.has(kana))?'row-complete':''}">${[...item[state.script]].every(kana => learned.has(kana))?'✓ ':''}${item.name}</span></button>`).join('')}</div></section></div>
    <aside class="right-column" aria-label="Learning insights"><section class="progress-panel"><div class="progress-head"><h2>Look at you grow</h2>${icon('leaf')}</div><div class="progress-count">${count} <span>/ 46 characters</span></div><div class="progress-track" role="progressbar" aria-label="${scriptName()} characters learned" aria-valuenow="${count}" aria-valuemin="0" aria-valuemax="46"><div class="progress-fill" style="width:${count/46*100}%"></div></div><div class="progress-caption"><span>${scriptName()} journey</span><span>${Math.round(count/46*100)}%</span></div><div class="daily-goal"><span class="goal-icon">${icon('target')}</span><div class="goal-copy">A small daily goal<p>One lesson is a lovely start.</p></div><span class="goal-count">${activity.has(localDate())?'1':'0'} / 1</span></div></section>
    <article class="culture-card"><div class="culture-photo"><img src="https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=650&q=85" alt="Japanese shop signs along a lantern-lit Tokyo street" loading="lazy"><span class="photo-label" lang="ja">まちの中で</span></div><div class="culture-body"><span class="eyebrow">JAPANESE IN THE WILD</span><h3>Around the next corner</h3><p>${state.script==='hira'?'From a little shop to your morning tea, hiragana is all around you.':'Coffee shops, hotels, and menus: katakana brings familiar words to life.'}</p><button class="text-button" data-action="view" data-value="vocabulary">Explore everyday words ${icon('arrow')}</button></div></article>
    <div class="tip">${icon('bulb')}<p><strong>A little learning note</strong>${state.script==='hira'?'Hiragana is phonetic: each character represents a sound. Five vowels are the beginning of it all.':'Katakana shares the same sounds as hiragana. It is often used for words borrowed from other languages.'}</p></div></aside></div>
    <section class="vocab-section"><div class="section-title"><div class="vocab-heading"><h2>Little words, everyday life</h2><span class="count-badge">Words with ${character}</span></div><button class="text-button" data-action="view" data-value="vocabulary">View all ${icon('arrow')}</button></div><div class="vocab-grid preview">${preview.length?preview.map(wordCard).join(''):`<p class="empty-state">No ${scriptName().toLowerCase()} words with <span lang="ja">${character}</span> yet. Choose another character to explore its words.</p>`}</div></section>`;
}
function wordCard(word) {
  return `<article class="word-card"><div class="word-category"><span class="category-dot"></span>${word.category}</div><button class="word-sound" data-action="speak" data-text="${word.jp}" title="Listen to ${word.romaji}" aria-label="Listen to ${word.romaji}">${icon('sound')}</button><div class="word-jp" lang="ja">${word.jp}</div><p class="word-romaji">${word.romaji}</p><div class="word-english">${word.en}</div></article>`;
}
function filteredWords() {
  const query = state.search.trim().toLowerCase();
  return vocabulary.filter(word => word.script===state.script && (state.category==='All'||word.category===state.category) && [word.jp,word.en,word.romaji].some(text => text.toLowerCase().includes(query)));
}
function renderVocabulary() {
  const words = filteredWords();
  return `<p class="greeting">ことば / Words for your world</p><div class="page-head"><div><h1>Everyday discoveries.</h1><p>Familiar things. A whole new way to say them.</p></div>${scriptTabs()}</div><div class="filter-bar"><label class="search">${icon('search')}<input id="word-search" type="search" placeholder="Find a word…" aria-label="Search Japanese, romaji, or English" value="${escapeText(state.search)}"></label><div class="filters" role="group" aria-label="Vocabulary category">${['All','Everyday','Food','Places','Adjectives','Verbs'].map(category => `<button class="filter ${state.category===category?'active':''}" data-action="category" data-value="${category}" aria-pressed="${state.category===category}">${category}</button>`).join('')}</div></div><div class="section-title"><h2>${scriptName()} words</h2><span class="muted" id="word-count" style="font-size:11px">${words.length} words</span></div><div class="vocab-grid" id="vocab-results">${words.length?words.map(wordCard).join(''):'<p class="empty-state">No words found. Try another word or category.</p>'}</div><p class="muted" style="font-size:11px;line-height:1.8;margin-top:22px">${state.script==='hira'?'Some words include small kana, such as ゃ in おちゃ (ocha). Everyday words are shown in hiragana here; you may also see them written in kanji.':'Some words include marks such as ゛ and ゜, small kana, or ー, which lengthens the previous vowel.'}</p>`;
}
function filteredKanji() {
  const query=state.kanjiSearch.trim().toLowerCase();
  return (window.kanjiData[state.kanjiGrade]||[]).filter(([character,meaning,on,kun]) => [character,meaning,on,kun].some(value => value.toLowerCase().includes(query)));
}
function kanjiCard([character,meaning,on,kun]) {
  return `<article class="kanji-card"><div class="kanji-card-head"><span class="kanji-character" lang="ja">${character}</span><div><span class="eyebrow">GRADE ${state.kanjiGrade}</span><h2>${meaning}</h2></div></div><div class="kanji-readings">${on?`<p><span>On’yomi</span><strong lang="ja">${on}</strong></p>`:''}${kun?`<p><span>Kun’yomi</span><strong lang="ja">${kun}</strong></p>`:''}</div><button class="particle-open-examples kanji-card-examples" type="button" data-action="kanji-examples" data-value="${character}" aria-label="View five example sentences for ${character}, ${meaning}">View 5 examples ${icon('arrow')}</button></article>`;
}
function renderKanjiExample(example,index) {
  const sourceId=/^tatoeba-(\d+)$/.exec(example.source||'')?.[1];
  const sourceLink=sourceId?`<a class="kanji-example-source" href="https://tatoeba.org/en/sentences/show/${sourceId}" target="_blank" rel="noopener noreferrer">Tatoeba source</a>`:'';
  return `<article class="particle-example"><span class="eyebrow">EXAMPLE ${index+1}</span><p class="particle-japanese" lang="ja">${escapeText(example.jp)}</p><button class="text-button particle-example-reveal" data-action="reveal-particle-example" aria-expanded="false">Reveal reading &amp; English translation</button><div class="particle-example-answer" data-example-answer role="status" tabindex="-1" hidden><p class="kanji-example-reading" lang="ja">${escapeText(example.reading)}</p><p class="particle-meaning">${escapeText(example.meaning)}</p>${sourceLink}</div></article>`;
}
function kanjiExamplesFor([character,meaning,on,kun]) {
  return (window.kanjiExamples?.[character]||[]).map(([jp,reading,translation,source])=>({jp,reading,meaning:translation,source}));
}
function openKanjiExamples(character) {
  const kanji=(window.kanjiData[state.kanjiGrade]||[]).find(item=>item[0]===character);
  const dialog=document.querySelector('#kanji-example-dialog');
  if (!dialog || !kanji) return;
  document.querySelector('#kanji-example-dialog-title').textContent=`${kanji[0]} · ${kanji[1]} — Grade ${state.kanjiGrade}`;
  document.querySelector('#kanji-example-dialog-content').innerHTML=kanjiExamplesFor(kanji).map(renderKanjiExample).join('');
  dialog.showModal();
}
function renderKanjiResults() {
  const kanji=filteredKanji();
  document.querySelector('#kanji-results').innerHTML=kanji.length?kanji.map(kanjiCard).join(''):'<p class="empty-state">No kanji found. Try another character, meaning, or kana reading.</p>';
  document.querySelector('#kanji-count').textContent=`${kanji.length} kanji`;
}
function renderKanji() {
  const kanji=filteredKanji();
  return `<p class="greeting">かんじ / Characters and meanings</p><div class="page-head"><div><h1>Build your kanji foundation.</h1><p>Explore the first six Japanese school grades.</p></div></div><div class="kanji-intro"><strong>Reading guide</strong><p>On’yomi readings are shown in katakana; kun’yomi readings are shown in hiragana. These are common readings, not every possible reading for each kanji. Each character has five sample sentences using familiar vocabulary; open its examples to reveal kana readings and translations.</p></div><div class="kanji-controls"><div class="kanji-grade-tabs" role="group" aria-label="Kanji grade">${[1,2,3,4,5,6].map(grade => `<button class="kanji-grade-tab ${state.kanjiGrade===grade?'active':''}" data-action="kanji-grade" data-value="${grade}" aria-pressed="${state.kanjiGrade===grade}">Grade ${grade}</button>`).join('')}</div><label class="search kanji-search">${icon('search')}<input id="kanji-search" type="search" placeholder="Find kanji, meaning, or kana reading" aria-label="Search kanji, meaning, or kana reading" value="${escapeText(state.kanjiSearch)}"></label></div><div class="section-title"><h2>Grade ${state.kanjiGrade} kanji</h2><span class="muted" id="kanji-count" style="font-size:11px">${kanji.length} kanji</span></div><div class="kanji-grid" id="kanji-results">${kanji.length?kanji.map(kanjiCard).join(''):'<p class="empty-state">No kanji found. Try another character, meaning, or kana reading.</p>'}</div><dialog class="particle-dialog" id="kanji-example-dialog" aria-labelledby="kanji-example-dialog-title"><div class="particle-dialog-head"><div><span class="eyebrow">KANJI EXAMPLES</span><h2 id="kanji-example-dialog-title"></h2></div><form method="dialog"><button class="particle-dialog-close" aria-label="Close examples">Close</button></form></div><div class="particle-dialog-content" id="kanji-example-dialog-content"></div></dialog>`;
}
const particleLessons = [
  {jp:'は',sound:'wa',name:'Topic',description:'Marks the topic: what the sentence is about. When used as a particle, は is pronounced wa. It can also set up a contrast.',example:'ねこはかわいいです。',romaji:'Neko wa kawaii desu.',meaning:'Cats are cute.',words:['ねこ','かわいい']},
  {jp:'が',sound:'ga',name:'Subject and focus',description:'Marks the subject, often highlighting who or what does something or bringing in new information. It commonly appears with すき (to like).',example:'りんごがすきです。',romaji:'Ringo ga suki desu.',meaning:'I like apples.',words:['りんご','すき']},
  {jp:'を',sound:'o',name:'Direct object',description:'Marks what receives an action. The particle を is usually pronounced o.',example:'すしをたべます。',romaji:'Sushi o tabemasu.',meaning:'I eat sushi.',words:['すし','たべる']},
  {jp:'に',sound:'ni',name:'Destination, time, or recipient',description:'Marks a destination, a specific time, or the person something is directed to. Here it marks where someone returns.',example:'うちにかえります。',romaji:'Uchi ni kaerimasu.',meaning:'I return home.',words:['うち','かえる']},
  {jp:'で',sound:'de',name:'Place or means of action',description:'Marks where an action happens or the means used to do it. Here it marks the place where someone eats.',example:'レストランでたべます。',romaji:'Resutoran de tabemasu.',meaning:'I eat at a restaurant.',words:['レストラン','たべる']},
  {jp:'の',sound:'no',name:'Possession and connection',description:'Links nouns to show possession, association, or what kind of thing something is.',example:'ねこのなまえはミケです。',romaji:'Neko no namae wa Mike desu.',meaning:'The cat’s name is Mike.',words:['ねこ','なまえ']},
  {jp:'も',sound:'mo',name:'Also or too',description:'Adds a person or thing to a statement: also, too, or as well.',example:'わたしもおちゃをのみます。',romaji:'Watashi mo ocha o nomimasu.',meaning:'I drink tea too.',words:['わたし','おちゃ','のむ']},
  {jp:'へ',sound:'e',name:'Direction',description:'Marks movement toward a destination. へ is pronounced e when used as a particle.',example:'えきへいきます。',romaji:'Eki e ikimasu.',meaning:'I go to the station.',words:['えき','いく']},
  {jp:'と',sound:'to',name:'With or and',description:'Means with when naming a companion, and joins items in a complete list. It can also mark a quotation.',example:'ともだちとすしをたべます。',romaji:'Tomodachi to sushi o tabemasu.',meaning:'I eat sushi with a friend.',words:['ともだち','すし','たべる']},
  {jp:'や',sound:'ya',name:'Examples in a list',description:'Connects examples in a non-exhaustive list, often with an implied “and things like that.”',example:'パンやチーズをかいます。',romaji:'Pan ya chīzu o kaimasu.',meaning:'I buy bread, cheese, and things like that.',words:['パン','チーズ','かう']},
  {jp:'から',sound:'kara',name:'From or since',description:'Marks a starting point in place or time. It often pairs with まで (until; as far as).',example:'うちからえきまであるきます。',romaji:'Uchi kara eki made arukimasu.',meaning:'I walk from home to the station.',words:['うち','えき','あるく']},
  {jp:'まで',sound:'made',name:'Until or as far as',description:'Marks an endpoint in time or place. It often pairs with から (from).',example:'うちからえきまであるきます。',romaji:'Uchi kara eki made arukimasu.',meaning:'I walk from home to the station.',words:['うち','えき','あるく']},
  {jp:'か',sound:'ka',name:'Question or choice',description:'At the end of a sentence, turns it into a question. Between choices, it can mean or.',example:'おちゃをのみますか。',romaji:'Ocha o nomimasu ka?',meaning:'Would you like tea? / Do you drink tea?',words:['おちゃ','のむ']},
  {jp:'ね',sound:'ne',name:'Seeking agreement',description:'Often appears at the end of a sentence to invite agreement, like “right?” or “isn’t it?”',example:'すしはおいしいですね。',romaji:'Sushi wa oishii desu ne.',meaning:'Sushi is delicious, isn’t it?',words:['すし','おいしい']},
  {jp:'よ',sound:'yo',name:'Emphasis or new information',description:'Often appears at the end of a sentence to emphasize or share information the listener may not know.',example:'カレーはからいですよ。',romaji:'Karē wa karai desu yo.',meaning:'Curry is spicy, you know.',words:['カレー','からい']},
  {jp:'より',sound:'yori',name:'Comparison',description:'Marks the point of comparison, usually translated as than. The thing being compared is often followed by が.',example:'バスよりタクシーがはやいです。',romaji:'Basu yori takushī ga hayai desu.',meaning:'A taxi is faster than a bus.',words:['バス','タクシー','はやい']},
  {jp:'だけ',sound:'dake',name:'Only',description:'Limits a statement to one person or thing: only or just.',example:'おちゃだけのみます。',romaji:'Ocha dake nomimasu.',meaning:'I drink only tea.',words:['おちゃ','のむ']},
  {jp:'しか',sound:'shika',name:'Only, with a negative',description:'Means only or nothing but, and must be used with a negative verb form.',example:'みずしかのみません。',romaji:'Mizu shika nomimasen.',meaning:'I drink nothing but water.',words:['みず','のむ']},
];
const moreParticleExamples = {
  'は':[
    ['みずはつめたいです。','Mizu wa tsumetai desu.','Water is cold.',['みず','つめたい']],
    ['りんごはあまいです。','Ringo wa amai desu.','Apples are sweet.',['りんご','あまい']],
    ['ねこはげんきです。','Neko wa genki desu.','The cat is well.',['ねこ','げんき']],
    ['バスはおそいです。','Basu wa osoi desu.','The bus is slow.',['バス','おそい']],
  ],
  'が':[
    ['いぬがいます。','Inu ga imasu.','There is a dog.',['いぬ','いる']],
    ['ねこがいます。','Neko ga imasu.','There is a cat.',['ねこ','いる']],
    ['りんごがあまいです。','Ringo ga amai desu.','The apple is sweet.',['りんご','あまい']],
    ['おちゃがすきです。','Ocha ga suki desu.','I like tea.',['おちゃ','すき']],
  ],
  'を':[
    ['おちゃをのみます。','Ocha o nomimasu.','I drink tea.',['おちゃ','のむ']],
    ['パンをかいます。','Pan o kaimasu.','I buy bread.',['パン','かう']],
    ['みずをのみます。','Mizu o nomimasu.','I drink water.',['みず','のむ']],
    ['ケーキをつくります。','Kēki o tsukurimasu.','I make a cake.',['ケーキ','つくる']],
  ],
  'に':[
    ['えきにいきます。','Eki ni ikimasu.','I go to the station.',['えき','いく']],
    ['みせにいきます。','Mise ni ikimasu.','I go to the shop.',['みせ','いく']],
    ['いえにかえります。','Ie ni kaerimasu.','I return home.',['いえ','かえる']],
    ['うみにいきます。','Umi ni ikimasu.','I go to the sea.',['うみ','いく']],
  ],
  'で':[
    ['うちでやすみます。','Uchi de yasumimasu.','I rest at home.',['うち','やすむ']],
    ['みせでかいます。','Mise de kaimasu.','I buy it at the shop.',['みせ','かう']],
    ['ホテルでねます。','Hoteru de nemasu.','I sleep at the hotel.',['ホテル','ねる']],
    ['うちでおちゃをのみます。','Uchi de ocha o nomimasu.','I drink tea at home.',['うち','おちゃ','のむ']],
  ],
  'の':[
    ['ともだちのいえです。','Tomodachi no ie desu.','It is my friend’s house.',['ともだち','いえ']],
    ['ホテルのメニューです。','Hoteru no menyū desu.','It is the hotel menu.',['ホテル','メニュー']],
    ['すしのみせです。','Sushi no mise desu.','It is a sushi shop.',['すし','みせ']],
    ['わたしのかさです。','Watashi no kasa desu.','It is my umbrella.',['わたし','かさ']],
  ],
  'も':[
    ['ねこもかわいいです。','Neko mo kawaii desu.','The cat is cute too.',['ねこ','かわいい']],
    ['りんごもあまいです。','Ringo mo amai desu.','The apples are sweet too.',['りんご','あまい']],
    ['ともだちもすしをたべます。','Tomodachi mo sushi o tabemasu.','My friend eats sushi too.',['ともだち','すし','たべる']],
    ['バスもきます。','Basu mo kimasu.','The bus comes too.',['バス','くる']],
  ],
  'へ':[
    ['みせへいきます。','Mise e ikimasu.','I go to the shop.',['みせ','いく']],
    ['ホテルへいきます。','Hoteru e ikimasu.','I go to the hotel.',['ホテル','いく']],
    ['うちへかえります。','Uchi e kaerimasu.','I head home.',['うち','かえる']],
    ['うみへいきます。','Umi e ikimasu.','I go toward the sea.',['うみ','いく']],
  ],
  'と':[
    ['いぬとあそびます。','Inu to asobimasu.','I play with the dog.',['いぬ','あそぶ']],
    ['ねことあそびます。','Neko to asobimasu.','I play with the cat.',['ねこ','あそぶ']],
    ['ともだちとえきへいきます。','Tomodachi to eki e ikimasu.','I go to the station with a friend.',['ともだち','えき','いく']],
    ['パンとチーズをかいます。','Pan to chīzu o kaimasu.','I buy bread and cheese.',['パン','チーズ','かう']],
  ],
  'や':[
    ['りんごやバナナをかいます。','Ringo ya banana o kaimasu.','I buy apples, bananas, and things like that.',['りんご','バナナ','かう']],
    ['すしやサラダをたべます。','Sushi ya sarada o tabemasu.','I eat sushi, salad, and things like that.',['すし','サラダ','たべる']],
    ['カメラやバッグをかいます。','Kamera ya baggu o kaimasu.','I buy a camera, a bag, and things like that.',['カメラ','バッグ','かう']],
    ['シャツやズボンをかいます。','Shatsu ya zubon o kaimasu.','I buy shirts, trousers, and things like that.',['シャツ','ズボン','かう']],
  ],
  'から':[
    ['ホテルからみせまであるきます。','Hoteru kara mise made arukimasu.','I walk from the hotel to the shop.',['ホテル','みせ','あるく']],
    ['あさからはたらきます。','Asa kara hatarakimasu.','I work starting in the morning.',['あさ','はたらく']],
    ['えきからうちまであるきます。','Eki kara uchi made arukimasu.','I walk from the station to home.',['えき','うち','あるく']],
    ['みせからうちにかえります。','Mise kara uchi ni kaerimasu.','I return home from the shop.',['みせ','うち','かえる']],
  ],
  'まで':[
    ['あさまでやすみます。','Asa made yasumimasu.','I rest until morning.',['あさ','やすむ']],
    ['ホテルまでいきます。','Hoteru made ikimasu.','I go as far as the hotel.',['ホテル','いく']],
    ['レストランまであるきます。','Resutoran made arukimasu.','I walk as far as the restaurant.',['レストラン','あるく']],
    ['みせまできます。','Mise made kimasu.','I come as far as the shop.',['みせ','くる']],
  ],
  'か':[
    ['すしをたべますか。','Sushi o tabemasu ka?','Would you like to eat sushi?',['すし','たべる']],
    ['うちにかえりますか。','Uchi ni kaerimasu ka?','Are you going home?',['うち','かえる']],
    ['りんごがすきですか。','Ringo ga suki desu ka?','Do you like apples?',['りんご','すき']],
    ['ホテルへいきますか。','Hoteru e ikimasu ka?','Are you going to the hotel?',['ホテル','いく']],
  ],
  'ね':[
    ['みずはつめたいですね。','Mizu wa tsumetai desu ne.','The water is cold, isn’t it?',['みず','つめたい']],
    ['ねこはかわいいですね。','Neko wa kawaii desu ne.','The cat is cute, isn’t it?',['ねこ','かわいい']],
    ['やまはたかいですね。','Yama wa takai desu ne.','The mountain is high, isn’t it?',['やま','たかい']],
    ['りんごはあまいですね。','Ringo wa amai desu ne.','The apples are sweet, aren’t they?',['りんご','あまい']],
  ],
  'よ':[
    ['おちゃはおいしいですよ。','Ocha wa oishii desu yo.','The tea is delicious, you know.',['おちゃ','おいしい']],
    ['ホテルはきれいですよ。','Hoteru wa kirei desu yo.','The hotel is beautiful, you know.',['ホテル','きれい']],
    ['りんごはあまいですよ。','Ringo wa amai desu yo.','Apples are sweet, you know.',['りんご','あまい']],
    ['うみはきれいですよ。','Umi wa kirei desu yo.','The sea is beautiful, you know.',['うみ','きれい']],
  ],
  'より':[
    ['りんごよりバナナがあまいです。','Ringo yori banana ga amai desu.','Bananas are sweeter than apples.',['りんご','バナナ','あまい']],
    ['ホテルよりうちがしずかです。','Hoteru yori uchi ga shizuka desu.','Home is quieter than the hotel.',['ホテル','うち','しずか']],
    ['さかなよりすしがすきです。','Sakana yori sushi ga suki desu.','I like sushi more than fish.',['さかな','すし','すき']],
    ['コーヒーよりおちゃがすきです。','Kōhī yori ocha ga suki desu.','I like tea more than coffee.',['コーヒー','おちゃ','すき']],
  ],
  'だけ':[
    ['すしだけたべます。','Sushi dake tabemasu.','I eat only sushi.',['すし','たべる']],
    ['ねこだけいます。','Neko dake imasu.','There is only a cat.',['ねこ','いる']],
    ['りんごだけかいます。','Ringo dake kaimasu.','I buy only apples.',['りんご','かう']],
    ['ともだちだけきます。','Tomodachi dake kimasu.','Only my friend is coming.',['ともだち','くる']],
  ],
  'しか':[
    ['すししかたべません。','Sushi shika tabemasen.','I eat nothing but sushi.',['すし','たべる']],
    ['ねこしかいません。','Neko shika imasen.','There is nothing but a cat.',['ねこ','いる']],
    ['パンしかかいません。','Pan shika kaimasen.','I buy nothing but bread.',['パン','かう']],
    ['コーヒーしかのみません。','Kōhī shika nomimasen.','I drink nothing but coffee.',['コーヒー','のむ']],
  ],
};
particleLessons.forEach(particle => {
  const firstExample = {jp:particle.example,romaji:particle.romaji,meaning:particle.meaning,words:particle.words};
  const additionalExamples = moreParticleExamples[particle.jp].map(([jp,romaji,meaning,words]) => ({jp,romaji,meaning,words}));
  particle.examples = [firstExample,...additionalExamples];
});
const sentenceBuildingCards = [
  {parts:['ねこ','は','かわいい','です'],romaji:'Neko wa kawaii desu.',meaning:'Cats are cute.'},
  {parts:['りんご','が','すき','です'],romaji:'Ringo ga suki desu.',meaning:'I like apples.'},
  {parts:['すし','を','たべます'],romaji:'Sushi o tabemasu.',meaning:'I eat sushi.'},
  {parts:['わたし','も','おちゃ','を','のみます'],romaji:'Watashi mo ocha o nomimasu.',meaning:'I drink tea too.'},
  {parts:['うち','に','かえります'],romaji:'Uchi ni kaerimasu.',meaning:'I am going home.'},
  {parts:['レストラン','で','たべます'],romaji:'Resutoran de tabemasu.',meaning:'I eat at a restaurant.'},
  {parts:['えき','へ','いきます'],romaji:'Eki e ikimasu.',meaning:'I am going to the station.'},
  {parts:['ともだち','と','すし','を','たべます'],romaji:'Tomodachi to sushi o tabemasu.',meaning:'I eat sushi with a friend.'},
  {parts:['パン','や','チーズ','を','かいます'],romaji:'Pan ya chīzu o kaimasu.',meaning:'I buy bread, cheese, and things like that.'},
  {parts:['うち','から','えき','まで','あるきます'],romaji:'Uchi kara eki made arukimasu.',meaning:'I walk from home to the station.'},
  {parts:['みず','は','つめたい','です','ね'],romaji:'Mizu wa tsumetai desu ne.',meaning:'The water is cold, isn’t it?'},
  {parts:['りんご','より','バナナ','が','あまい','です'],romaji:'Ringo yori banana ga amai desu.',meaning:'Bananas are sweeter than apples.'},
  {parts:['すし','だけ','たべます'],romaji:'Sushi dake tabemasu.',meaning:'I eat only sushi.'},
  {parts:['ねこ','しか','いません'],romaji:'Neko shika imasen.',meaning:'There is nothing but a cat.'},
  {parts:['カレー','は','からい','です','よ'],romaji:'Karē wa karai desu yo.',meaning:'Curry is spicy.'},
  {parts:['おちゃ','を','のみます','か'],romaji:'Ocha o nomimasu ka?',meaning:'Would you like some tea?'},
  {parts:['さかな','を','かいます'],romaji:'Sakana o kaimasu.',meaning:'I buy fish.'},
  {parts:['はな','を','みます'],romaji:'Hana o mimasu.',meaning:'I look at the flowers.'},
  {parts:['わたし','は','まいあさ','コーヒー','を','のみます'],romaji:'Watashi wa maiasa kōhī o nomimasu.',meaning:'I drink coffee every morning.'},
  {parts:['あさ','に','パン','を','たべます'],romaji:'Asa ni pan o tabemasu.',meaning:'I eat bread in the morning.'},
  {parts:['ひる','に','ともだち','と','すし','を','たべます'],romaji:'Hiru ni tomodachi to sushi o tabemasu.',meaning:'I eat sushi with a friend at noon.'},
  {parts:['よる','に','おちゃ','を','のみます'],romaji:'Yoru ni ocha o nomimasu.',meaning:'I drink tea in the evening.'},
  {parts:['きょう','は','あめ','です'],romaji:'Kyō wa ame desu.',meaning:'It is rainy today.'},
  {parts:['あした','は','はれ','です'],romaji:'Ashita wa hare desu.',meaning:'It will be sunny tomorrow.'},
  {parts:['そら','が','あおい','です'],romaji:'Sora ga aoi desu.',meaning:'The sky is blue.'},
  {parts:['はな','が','きれい','です'],romaji:'Hana ga kirei desu.',meaning:'The flowers are beautiful.'},
  {parts:['この','みせ','は','おいしい','です'],romaji:'Kono mise wa oishii desu.',meaning:'The food at this shop is delicious.'},
  {parts:['この','すし','は','おいしい','です'],romaji:'Kono sushi wa oishii desu.',meaning:'This sushi is delicious.'},
  {parts:['コーヒー','は','あつい','です'],romaji:'Kōhī wa atsui desu.',meaning:'The coffee is hot.'},
  {parts:['みず','を','ください'],romaji:'Mizu o kudasai.',meaning:'Water, please.'},
  {parts:['メニュー','を','みせて','ください'],romaji:'Menyū o misete kudasai.',meaning:'Please show me the menu.'},
  {parts:['これ','は','いくら','です','か'],romaji:'Kore wa ikura desu ka?',meaning:'How much is this?'},
  {parts:['パン','を','ふたつ','ください'],romaji:'Pan o futatsu kudasai.',meaning:'Two breads, please.'},
  {parts:['コンビニ','で','おちゃ','を','かいます'],romaji:'Konbini de ocha o kaimasu.',meaning:'I buy tea at the convenience store.'},
  {parts:['スーパー','で','やさい','を','かいます'],romaji:'Sūpā de yasai o kaimasu.',meaning:'I buy vegetables at the supermarket.'},
  {parts:['みせ','で','パン','を','かいました'],romaji:'Mise de pan o kaimashita.',meaning:'I bought bread at the shop.'},
  {parts:['えき','で','ともだち','に','あいます'],romaji:'Eki de tomodachi ni aimasu.',meaning:'I meet my friend at the station.'},
  {parts:['バス','で','がっこう','へ','いきます'],romaji:'Basu de gakkō e ikimasu.',meaning:'I go to school by bus.'},
  {parts:['タクシー','で','ホテル','へ','いきます'],romaji:'Takushī de hoteru e ikimasu.',meaning:'I go to the hotel by taxi.'},
  {parts:['うち','から','えき','まで','バス','で','いきます'],romaji:'Uchi kara eki made basu de ikimasu.',meaning:'I go from home to the station by bus.'},
  {parts:['ともだち','は','あるいて','きます'],romaji:'Tomodachi wa aruite kimasu.',meaning:'My friend comes on foot.'},
  {parts:['いぬ','と','こうえん','を','あるきます'],romaji:'Inu to kōen o arukimasu.',meaning:'I walk through the park with my dog.'},
  {parts:['こうえん','で','ねこ','を','みました'],romaji:'Kōen de neko o mimashita.',meaning:'I saw a cat in the park.'},
  {parts:['にわ','に','はな','が','あります'],romaji:'Niwa ni hana ga arimasu.',meaning:'There are flowers in the garden.'},
  {parts:['へや','に','つくえ','が','あります'],romaji:'Heya ni tsukue ga arimasu.',meaning:'There is a desk in the room.'},
  {parts:['つくえ','の','うえ','に','ほん','が','あります'],romaji:'Tsukue no ue ni hon ga arimasu.',meaning:'There is a book on the desk.'},
  {parts:['かばん','の','なか','に','かぎ','が','あります'],romaji:'Kaban no naka ni kagi ga arimasu.',meaning:'There is a key in the bag.'},
  {parts:['ねこ','は','いす','の','した','に','います'],romaji:'Neko wa isu no shita ni imasu.',meaning:'The cat is under the chair.'},
  {parts:['いぬ','は','そと','に','います'],romaji:'Inu wa soto ni imasu.',meaning:'The dog is outside.'},
  {parts:['ここ','に','すわって','ください'],romaji:'Koko ni suwatte kudasai.',meaning:'Please sit here.'},
  {parts:['まど','を','あけて','ください'],romaji:'Mado o akete kudasai.',meaning:'Please open the window.'},
  {parts:['ドア','を','しめて','ください'],romaji:'Doa o shimete kudasai.',meaning:'Please close the door.'},
  {parts:['でんき','を','つけます'],romaji:'Denki o tsukemasu.',meaning:'I turn on the light.'},
  {parts:['テレビ','を','みます'],romaji:'Terebi o mimasu.',meaning:'I watch TV.'},
  {parts:['おんがく','を','ききます'],romaji:'Ongaku o kikimasu.',meaning:'I listen to music.'},
  {parts:['うち','で','ほん','を','よみます'],romaji:'Uchi de hon o yomimasu.',meaning:'I read a book at home.'},
  {parts:['ともだち','に','てがみ','を','かきます'],romaji:'Tomodachi ni tegami o kakimasu.',meaning:'I write a letter to my friend.'},
  {parts:['かぞく','と','ばんごはん','を','たべます'],romaji:'Kazoku to bangohan o tabemasu.',meaning:'I eat dinner with my family.'},
  {parts:['はは','は','さかな','を','りょうりします'],romaji:'Haha wa sakana o ryōri shimasu.',meaning:'My mother cooks fish.'},
  {parts:['ちち','は','コーヒー','が','すき','です'],romaji:'Chichi wa kōhī ga suki desu.',meaning:'My father likes coffee.'},
  {parts:['いもうと','は','アイス','が','だいすき','です'],romaji:'Imōto wa aisu ga daisuki desu.',meaning:'My younger sister loves ice cream.'},
  {parts:['あに','は','くるま','で','しごと','へ','いきます'],romaji:'Ani wa kuruma de shigoto e ikimasu.',meaning:'My older brother goes to work by car.'},
  {parts:['ともだち','の','なまえ','は','ゆき','です'],romaji:'Tomodachi no namae wa Yuki desu.',meaning:'My friend’s name is Yuki.'},
  {parts:['わたし','の','かぞく','は','よにん','です'],romaji:'Watashi no kazoku wa yonin desu.',meaning:'There are four people in my family.'},
  {parts:['こども','は','こうえん','で','あそびます'],romaji:'Kodomo wa kōen de asobimasu.',meaning:'The child plays in the park.'},
  {parts:['こども','たち','が','うた','を','うたいます'],romaji:'Kodomotachi ga uta o utaimasu.',meaning:'The children sing a song.'},
  {parts:['わたし','は','にほんご','を','べんきょうします'],romaji:'Watashi wa nihongo o benkyō shimasu.',meaning:'I study Japanese.'},
  {parts:['まいにち','ひらがな','を','れんしゅうします'],romaji:'Mainichi hiragana o renshū shimasu.',meaning:'I practice hiragana every day.'},
  {parts:['きょう','は','にほんご','の','クラス','が','あります'],romaji:'Kyō wa nihongo no kurasu ga arimasu.',meaning:'I have Japanese class today.'},
  {parts:['せんせい','に','しつもん','を','します'],romaji:'Sensei ni shitsumon o shimasu.',meaning:'I ask the teacher a question.'},
  {parts:['この','ことば','の','いみ','は','なん','です','か'],romaji:'Kono kotoba no imi wa nan desu ka?',meaning:'What does this word mean?'},
  {parts:['もう','いちど','いって','ください'],romaji:'Mō ichido itte kudasai.',meaning:'Please say that one more time.'},
  {parts:['ゆっくり','はなして','ください'],romaji:'Yukkuri hanashite kudasai.',meaning:'Please speak slowly.'},
  {parts:['わたし','も','そう','おもいます'],romaji:'Watashi mo sō omoimasu.',meaning:'I think so too.'},
  {parts:['これは','わたし','の','かさ','です'],romaji:'Kore wa watashi no kasa desu.',meaning:'This is my umbrella.'},
  {parts:['その','かばん','は','だれ','の','です','か'],romaji:'Sono kaban wa dare no desu ka?',meaning:'Whose bag is that?'},
  {parts:['あの','ホテル','は','あたらしい','です'],romaji:'Ano hoteru wa atarashii desu.',meaning:'That hotel over there is new.'},
  {parts:['この','へや','は','しずか','です'],romaji:'Kono heya wa shizuka desu.',meaning:'This room is quiet.'},
  {parts:['この','みち','は','ながい','です'],romaji:'Kono michi wa nagai desu.',meaning:'This road is long.'},
  {parts:['きょう','は','とても','さむい','です'],romaji:'Kyō wa totemo samui desu.',meaning:'It is very cold today.'},
  {parts:['なつ','は','あつい','です','ね'],romaji:'Natsu wa atsui desu ne.',meaning:'Summer is hot, isn’t it?'},
  {parts:['ふゆ','に','ゆき','が','ふります'],romaji:'Fuyu ni yuki ga furimasu.',meaning:'It snows in winter.'},
  {parts:['あき','は','やま','が','きれい','です'],romaji:'Aki wa yama ga kirei desu.',meaning:'The mountains are beautiful in autumn.'},
  {parts:['はる','に','さくら','が','さきます'],romaji:'Haru ni sakura ga sakimasu.',meaning:'Cherry blossoms bloom in spring.'},
  {parts:['きょう','は','かぜ','が','つよい','です'],romaji:'Kyō wa kaze ga tsuyoi desu.',meaning:'The wind is strong today.'},
  {parts:['つき','が','きれい','です','ね'],romaji:'Tsuki ga kirei desu ne.',meaning:'The moon is beautiful, isn’t it?'},
  {parts:['よる','に','ほし','を','みます'],romaji:'Yoru ni hoshi o mimasu.',meaning:'I look at the stars at night.'},
  {parts:['うみ','で','およぎます'],romaji:'Umi de oyogimasu.',meaning:'I swim in the sea.'},
  {parts:['やま','に','のぼります'],romaji:'Yama ni noborimasu.',meaning:'I climb the mountain.'},
  {parts:['ふね','で','しま','へ','いきます'],romaji:'Fune de shima e ikimasu.',meaning:'I go to the island by boat.'},
  {parts:['ちず','を','みて','ください'],romaji:'Chizu o mite kudasai.',meaning:'Please look at the map.'},
  {parts:['しゃしん','を','とって','も','いい','です','か'],romaji:'Shashin o totte mo ii desu ka?',meaning:'May I take a picture?'},
  {parts:['カメラ','を','もって','きました'],romaji:'Kamera o motte kimashita.',meaning:'I brought my camera.'},
  {parts:['きっぷ','を','かいました'],romaji:'Kippu o kaimashita.',meaning:'I bought a ticket.'},
  {parts:['でんしゃ','は','なんじ','に','きます','か'],romaji:'Densha wa nanji ni kimasu ka?',meaning:'What time does the train come?'},
  {parts:['バス','が','もうすぐ','きます'],romaji:'Basu ga mō sugu kimasu.',meaning:'The bus will be here soon.'},
  {parts:['えき','の','まえ','で','まちます'],romaji:'Eki no mae de machimasu.',meaning:'I will wait in front of the station.'},
  {parts:['ホテル','に','チェックインします'],romaji:'Hoteru ni chekkuin shimasu.',meaning:'I check in at the hotel.'},
  {parts:['トイレ','は','どこ','です','か'],romaji:'Toire wa doko desu ka?',meaning:'Where is the restroom?'},
  {parts:['おちゃ','と','コーヒー','と','どちら','が','いい','です','か'],romaji:'Ocha to kōhī to dochira ga ii desu ka?',meaning:'Which would you prefer, tea or coffee?'},
];
function renderParticles() {
  return `<p class="greeting">じょし / Small words, important work</p><div class="page-head"><div><h1>Particles connect the pieces.</h1><p>A particle follows a word or phrase and shows how it works in the sentence.</p></div></div><div class="particle-note"><strong>A helpful starting point</strong><p>Particles do not map neatly to one English word. Learn the job each one does in its sentence. A few are pronounced differently from their usual kana sound: は as a particle is wa, へ is e, and を is usually o.</p></div><div class="particle-grid">${particleLessons.map(particle => `<article class="particle-card"><div class="particle-card-head"><span class="particle-symbol" lang="ja">${particle.jp}</span><div><span class="particle-sound">${particle.sound}</span><h2>${particle.name}</h2></div></div><p class="particle-description">${particle.description}</p><button class="particle-open-examples" type="button" data-action="particle-examples" data-value="${particle.jp}" aria-label="View five example sentences for ${particle.jp}, ${particle.name}">View 5 examples ${icon('arrow')}</button></article>`).join('')}</div><dialog class="particle-dialog" id="particle-dialog" aria-labelledby="particle-dialog-title"><div class="particle-dialog-head"><div><span class="eyebrow">PARTICLE EXAMPLES</span><h2 id="particle-dialog-title"></h2></div><form method="dialog"><button class="particle-dialog-close" aria-label="Close examples">Close</button></form></div><div class="particle-dialog-content" id="particle-dialog-content"></div></dialog>`;
}
function renderParticleExample(example,index) {
  return `<article class="particle-example"><span class="eyebrow">EXAMPLE ${index+1}</span><p class="particle-japanese" lang="ja">${example.jp}</p><button class="text-button particle-example-reveal" data-action="reveal-particle-example" aria-expanded="false">Reveal reading &amp; English translation</button><div class="particle-example-answer" data-example-answer role="status" tabindex="-1" hidden><p class="particle-romaji">${example.romaji}</p><p class="particle-meaning">${example.meaning}</p><div class="particle-vocabulary"><span>Vocabulary:</span>${example.words.map(term => { const word=vocabulary.find(item => item.jp===term); return word?`<span class="particle-word" lang="ja" title="${word.en}">${word.jp}<small>${word.en}</small></span>`:''; }).join('')}</div></div></article>`;
}
function openParticleExamples(particleCharacter) {
  const particle=particleLessons.find(item => item.jp===particleCharacter);
  const dialog=document.querySelector('#particle-dialog');
  if (!particle || !dialog) return;
  document.querySelector('#particle-dialog-title').textContent=`${particle.jp} · ${particle.name}`;
  document.querySelector('#particle-dialog-content').innerHTML=particle.examples.map(renderParticleExample).join('');
  dialog.showModal();
}
function shuffle(items) {
  const result = [...items];
  for (let index=result.length-1;index>0;index--) { const other=Math.floor(Math.random()*(index+1)); [result[index],result[other]]=[result[other],result[index]]; }
  return result;
}
function startQuiz() {
  const pool = characters();
  const questions = shuffle(pool).slice(0,10).map(item => ({...item,options:shuffle([item.sound,...shuffle(pool.filter(other => other.sound!==item.sound)).slice(0,3).map(other => other.sound)])}));
  state.quiz = {type:'kana',questions,index:0,score:0,answer:null};
}
function startKanjiQuiz() {
  const pool=window.kanjiData[state.practiceKanjiGrade]||[];
  const questions=shuffle(pool).slice(0,10).map(([character,meaning])=>{
    const distractors=shuffle([...new Set(pool.map(item=>item[1]).filter(option=>option!==meaning))]).slice(0,3);
    return {character,meaning,options:shuffle([meaning,...distractors])};
  });
  state.quiz={type:'kanji',grade:state.practiceKanjiGrade,questions,index:0,score:0,answer:null};
  state.kanjiReadingsRevealed=false;
}
function startVocabularyQuiz() {
  const pool=[...new Map(vocabulary.map(word=>[word.en,word])).values()];
  const questions=shuffle(pool).slice(0,10).map(word=>{
    const distractors=shuffle(pool.filter(other=>other.en!==word.en)).slice(0,3).map(other=>other.en);
    return {character:word.jp,reading:word.romaji,meaning:word.en,options:shuffle([word.en,...distractors])};
  });
  state.quiz={type:'vocabulary',questions,index:0,score:0,answer:null};
  state.vocabularyReadingRevealed=false;
}
function reviewSources() {
  const kana=['hira','kata'].flatMap(script=>rows.flatMap((row,rowIndex)=>[...row[script]].map((character,index)=>({
    key:`kana|${script}|${character}`,kind:'kana',script,character,sound:row.sounds[index],
  }))));
  const words=[...new Map(vocabulary.map(word=>[word.en,word])).values()].map(word=>({
    key:`vocabulary|${word.jp}|${word.en}`,kind:'vocabulary',character:word.jp,reading:word.romaji,meaning:word.en,
  }));
  const kanji=[1,2,3,4,5,6].flatMap(grade=>(window.kanjiData[grade]||[]).map(([character,meaning])=>({
    key:`kanji|${grade}|${character}`,kind:'kanji',grade,character,meaning,
  })));
  return {kana,words,kanji};
}
function addReviewOptions(question,sources) {
  if (question.kind==='kana') {
    const distractors=shuffle([...new Set(sources.kana.filter(item=>item.sound!==question.sound).map(item=>item.sound))]).slice(0,3);
    question.options=shuffle([question.sound,...distractors]);
  } else if (question.kind==='vocabulary') {
    const distractors=shuffle(sources.words.filter(item=>item.meaning!==question.meaning)).slice(0,3).map(item=>item.meaning);
    question.options=shuffle([question.meaning,...distractors]);
  } else {
    const sameGrade=sources.kanji.filter(item=>item.grade===question.grade&&item.meaning!==question.meaning);
    const distractors=shuffle([...new Set(sameGrade.map(item=>item.meaning))]).slice(0,3);
    question.options=shuffle([question.meaning,...distractors]);
  }
  return question;
}
function startReviewQuiz() {
  const sources=reviewSources();
  const all=[...sources.kana,...sources.words,...sources.kanji];
  const now=Date.now();
  const due=all.filter(item=>reviewCards[item.key]&&Number(reviewCards[item.key].dueAt)<=now)
    .sort((a,b)=>Number(reviewCards[a.key].dueAt)-Number(reviewCards[b.key].dueAt));
  const questions=due.slice(0,10);
  const groups=[
    shuffle(sources.kana.filter(item=>!reviewCards[item.key])),
    shuffle(sources.words.filter(item=>!reviewCards[item.key])),
    shuffle(sources.kanji.filter(item=>item.grade===state.practiceKanjiGrade&&!reviewCards[item.key])),
  ];
  while (questions.length<10&&groups.some(group=>group.length)) {
    for (const group of groups) {
      if (questions.length>=10) break;
      if (group.length) questions.push(group.pop());
    }
  }
  if (questions.length<10) {
    const future=all.filter(item=>reviewCards[item.key]&&Number(reviewCards[item.key].dueAt)>now)
      .sort((a,b)=>Number(reviewCards[a.key].dueAt)-Number(reviewCards[b.key].dueAt));
    questions.push(...future.slice(0,10-questions.length));
  }
  state.quiz={type:'review',questions:questions.map(question=>addReviewOptions(question,sources)),index:0,score:0,answer:null};
  state.kanjiReadingsRevealed=false;
  state.vocabularyReadingRevealed=false;
}
function rememberReviewAnswer(quiz,question,correct) {
  const kind=quiz.type==='review'?question.kind:quiz.type==='kana'?'kana':quiz.type;
  const grade=quiz.type==='review'?question.grade:quiz.grade;
  const key=quiz.type==='review'?question.key:kind==='kana'
    ?`kana|${question.script||state.script}|${question.character}`
    :kind==='vocabulary'?`vocabulary|${question.character}|${question.meaning}`
    :`kanji|${grade}|${question.character}`;
  const previous=reviewCards[key]||{repetitions:0,correct:0,misses:0};
  const now=Date.now();
  if (correct) {
    const repetitions=previous.repetitions+1;
    const intervals=[1,3,7,14,30];
    const intervalDays=intervals[Math.min(repetitions-1,intervals.length-1)];
    reviewCards[key]={repetitions,correct:previous.correct+1,misses:previous.misses,dueAt:now+intervalDays*24*60*60*1000,lastReviewed:now,intervalDays};
  } else {
    reviewCards[key]={repetitions:0,correct:previous.correct,misses:previous.misses+1,dueAt:now,lastReviewed:now,intervalDays:0};
  }
  saveProgress();
}
function correctQuizAnswer(quiz,question) {
  if (quiz.type==='review') return question.kind==='kana'?question.sound:question.meaning;
  return quiz.type==='kanji'||quiz.type==='vocabulary'?question.meaning:question.sound;
}
function sentencePracticePool() {
  const examples=particleLessons.flatMap(particle => particle.examples.map(example => ({...example,particle:particle.jp})));
  return shuffle([...new Map(examples.map(example => [example.jp,example])).values()]);
}
function startSentencePractice() {
  state.sentenceQueue=sentencePracticePool();
  state.sentenceIndex=0;
  state.translationRevealed=false;
}
function prepareSentenceBuilder() {
  const sentence=sentenceBuildingCards[state.builderQueue[state.builderIndex]];
  state.builderSelected=[];
  state.builderOrder=shuffle(sentence.parts.map((_,index)=>index));
  state.builderChecked=null;
}
function startSentenceBuilder() {
  state.builderQueue=shuffle(sentenceBuildingCards.map((_,index)=>index));
  state.builderIndex=0;
  prepareSentenceBuilder();
}
function nextSentenceBuilder() {
  state.builderIndex++;
  if (state.builderIndex>=state.builderQueue.length) startSentenceBuilder();
  else prepareSentenceBuilder();
}
function renderPractice() {
  const headings={characters:['Recognize Hiragana and Katakana.','Choose the sound that matches each kana character.'],vocabulary:['Practice everyday vocabulary.','Choose the English meaning of each word in kana.'],sentences:['Translate a simple sentence.','Try translating before revealing the reading and English.'],kanji:['Recognize Kanji by grade.','Choose the meaning of a kanji from the selected grade.'],review:['Bring back what you have learned.','Review items you missed or are due to see again.'],builder:['Build a sentence, one word at a time.','Put familiar vocabulary and particles in the right order.']};
  const [title,description]=headings[state.practiceMode]||headings.characters;
  const heading=`<p class="greeting">れんしゅう / A little practice</p><div class="page-head"><div><h1>${title}</h1><p>${description}</p></div></div>`;
  if (state.practiceMode==='sentences') {
    if (!state.sentenceQueue.length) startSentencePractice();
    const sentence=state.sentenceQueue[state.sentenceIndex];
    return `${heading}<div class="practice-layout"><section class="practice-card sentence-practice-card" aria-label="Sentence translation practice"><div class="quiz-meta"><span>TRANSLATE THIS SENTENCE</span><span>Particle: <strong lang="ja">${sentence.particle}</strong></span></div><p class="sentence-practice-prompt">Try translating it before you reveal the answer. There is no score in this mode.</p><div class="sentence-practice-japanese" lang="ja">${sentence.jp}</div>${state.translationRevealed?`<div class="translation-reveal" role="status"><div><span class="eyebrow">READING</span><p class="sentence-practice-romaji">${sentence.romaji}</p></div><div><span class="eyebrow">ENGLISH TRANSLATION</span><p>${sentence.meaning}</p></div></div>`:`<button class="text-button reveal-translation" data-action="reveal-translation">Reveal reading &amp; translation ${icon('arrow')}</button>`}<button class="primary-button next-sentence" data-action="next-sentence">Next sentence ${icon('arrow')}</button></section></div>`;
  }
  if (state.practiceMode==='builder') {
    if (!state.builderQueue.length) startSentenceBuilder();
    const card=sentenceBuildingCards[state.builderQueue[state.builderIndex]];
    const target=card.parts.map((_,index)=>index);
    const solved=state.builderSelected.join(',')===target.join(',');
    const selected=state.builderSelected.length
      ?state.builderSelected.map(index=>`<button class="builder-token selected" type="button" data-action="builder-remove" data-index="${index}" aria-label="Remove ${escapeText(card.parts[index])}">${escapeText(card.parts[index])} <span aria-hidden="true">×</span></button>`).join('')
      :'<span class="builder-placeholder">Choose the first word</span>';
    const used=new Set(state.builderSelected);
    const choices=state.builderOrder.map(index=>`<button class="builder-token" type="button" data-action="builder-add" data-index="${index}" ${used.has(index)?'disabled':''}>${escapeText(card.parts[index])}</button>`).join('');
    const answer=state.builderChecked&&solved?`<div class="translation-reveal" role="status"><div><span class="eyebrow">READING</span><p class="sentence-practice-romaji">${escapeText(card.romaji)}</p></div><div><span class="eyebrow">ENGLISH TRANSLATION</span><p>${escapeText(card.meaning)}</p></div></div>`:state.builderChecked===false?'<p class="builder-feedback" role="status">That order does not sound right yet. Remove a word and try again.</p>':'';
    return `${heading}<div class="practice-layout"><section class="practice-card builder-card" aria-label="Sentence building practice"><div class="quiz-meta"><span>SENTENCE ${state.builderIndex+1} OF ${state.builderQueue.length}</span><span>No score</span></div><p class="sentence-practice-prompt">Choose the tiles in order. Tap a selected tile to remove it.</p><div class="builder-answer" aria-label="Your sentence">${selected}</div><div class="builder-choices" role="group" aria-label="Word and particle tiles">${choices}</div><div class="builder-actions"><button class="secondary-button" type="button" data-action="builder-reset">Clear</button><button class="secondary-button" type="button" data-action="builder-check" ${state.builderSelected.length!==card.parts.length||state.builderChecked&&solved?'disabled':''}>Check sentence</button><button class="${state.builderChecked&&solved?'primary-button':'text-button'}" type="button" data-action="builder-next">${state.builderChecked&&solved?'Next sentence':'Skip for now'} ${icon('arrow')}</button></div>${answer}</section></div>`;
  }
  const isReview=state.practiceMode==='review';
  const isKanji=state.practiceMode==='kanji';
  const isVocabulary=state.practiceMode==='vocabulary';
  const quizType=isReview?'review':isKanji?'kanji':isVocabulary?'vocabulary':'kana';
  if (!state.quiz || state.quiz.type!==quizType || (isKanji&&state.quiz.grade!==state.practiceKanjiGrade)) {
    if (isReview) startReviewQuiz();
    else if (isKanji) startKanjiQuiz();
    else if (isVocabulary) startVocabularyQuiz();
    else startQuiz();
  }
  const quiz=state.quiz;
  const complete=quiz.index>=quiz.questions.length;
  const question=quiz.questions[quiz.index];
  const questionIsKanji=isKanji||(isReview&&question?.kind==='kanji');
  const questionIsVocabulary=isVocabulary||(isReview&&question?.kind==='vocabulary');
  const correctAnswer=question?correctQuizAnswer(quiz,question):'';
  const questionDescription=isReview?`10 due and new review items · Grade ${state.practiceKanjiGrade} kanji`:isKanji?`Grade ${quiz.grade} · ${quiz.questions.length} randomized kanji`:isVocabulary?`${quiz.questions.length} randomized vocabulary words`:`${scriptName()} · ${quiz.questions.length} randomized characters`;
  const modeControls=isKanji?`<div class="kanji-grade-tabs practice-kanji-grades" role="group" aria-label="Kanji practice grade">${[1,2,3,4,5,6].map(grade=>`<button class="kanji-grade-tab ${state.practiceKanjiGrade===grade?'active':''}" type="button" data-action="practice-kanji-grade" data-value="${grade}" aria-pressed="${state.practiceKanjiGrade===grade}">Grade ${grade}</button>`).join('')}</div>`:isVocabulary?'':isReview?'':scriptTabs();
  const questionGrade=question?.grade||quiz.grade;
  const kanjiEntry=questionIsKanji&&question?(window.kanjiData[questionGrade]||[]).find(([character])=>character===question.character):null;
  const kanjiReadings=kanjiEntry?`<button class="text-button kanji-reading-toggle" type="button" data-action="toggle-kanji-readings" aria-expanded="${state.kanjiReadingsRevealed}">${state.kanjiReadingsRevealed?'Hide':'Reveal'} On’yomi / Kun’yomi readings</button><div class="kanji-readings kanji-quiz-readings" ${state.kanjiReadingsRevealed?'':'hidden'}>${kanjiEntry[2]?`<p><span>On’yomi</span><strong lang="ja">${kanjiEntry[2]}</strong></p>`:''}${kanjiEntry[3]?`<p><span>Kun’yomi</span><strong lang="ja">${kanjiEntry[3]}</strong></p>`:''}${!kanjiEntry[2]&&!kanjiEntry[3]?'<p>No readings are listed for this character.</p>':''}</div>`:'';
  const vocabularyReading=question&&questionIsVocabulary?`<button class="text-button vocabulary-reading-toggle" type="button" data-action="toggle-vocabulary-reading" aria-expanded="${state.vocabularyReadingRevealed}">${state.vocabularyReadingRevealed?'Hide':'Reveal'} reading</button><p class="vocabulary-quiz-reading" ${state.vocabularyReadingRevealed?'':'hidden'}>${question.reading}</p>`:'';
  const resultCopy=isReview?'Review session complete. Missed items will come back soon.':quiz.score===quiz.questions.length?(isKanji?'Every character found its meaning.':isVocabulary?'Every word found its meaning.':'Every sound found its place.'):'Keep coming back. Familiarity grows with practice.';
  const quizLabel=isReview?'Spaced review quiz':isKanji?'Kanji meaning recognition quiz':isVocabulary?'Vocabulary meaning quiz':'Kana character recognition quiz';
  const prompt=isReview?(questionIsKanji?'Which meaning matches this kanji?':questionIsVocabulary?'What does this word mean?':'Which sound matches this character?'):isKanji?'Which meaning matches this kanji?':isVocabulary?'What does this word mean?':'Which sound matches this character?';
  return `${heading}<div class="practice-layout"><div class="practice-options"><p>${complete?'Session complete':questionDescription}</p>${modeControls}</div><section class="practice-card" aria-label="${quizLabel}">${complete?`
    <div class="completion-icon">${icon('trophy')}</div><h2 class="result-title">${quiz.score===quiz.questions.length?'Beautifully done!':'Another step forward.'}</h2><p class="result-description">${resultCopy}</p><div class="result-score">${quiz.score}<span class="muted"> / ${quiz.questions.length}</span></div><p class="muted">correct answers</p><div class="result-actions"><button class="secondary-button" data-action="view" data-value="lessons">Back to lessons</button><button class="primary-button" data-action="restart">Practice again ${icon('arrow')}</button></div>`:`
    <div class="quiz-meta"><span>QUESTION ${quiz.index+1} OF ${quiz.questions.length}</span><span>${quiz.score} correct</span></div><div class="progress-track"><div class="progress-fill" style="width:${quiz.index/quiz.questions.length*100}%"></div></div><div class="quiz-character ${questionIsVocabulary?'vocabulary-quiz-word':''}" lang="ja">${question.character}</div>${kanjiReadings}${vocabularyReading}<p class="quiz-prompt">${prompt}</p><div class="answer-grid">${question.options.map(option=>`<button class="answer-button ${quiz.answer!==null?(option===correctAnswer?'correct':option===quiz.answer?'wrong':''):''}" data-action="answer" data-value="${escapeText(option)}" ${quiz.answer!==null?'disabled':''}>${escapeText(option)}</button>`).join('')}</div><div class="quiz-feedback" role="status">${quiz.answer===null?'':quiz.answer===correctAnswer?'That’s right. Nicely done!':`This is “${correctAnswer}”. You’ll get it next time.`}</div>${quiz.answer!==null?`<button class="primary-button quiz-action" data-action="next-question">${quiz.index===quiz.questions.length-1?'See results':questionIsKanji?'Next kanji':questionIsVocabulary?'Next word':isReview?'Next item':'Next character'} ${icon('arrow')}</button>`:''}`}</section></div>`;
}
function renderProgress() {
  return `<div class="progress-view"><p class="greeting">一歩ずつ / One step at a time</p><div class="page-head"><div><h1>Your journey, so far.</h1><p>Every character is a small win worth keeping.</p></div></div><div class="progress-stats"><article class="stat">${icon('book')}<strong>${charactersForAllScripts().filter(character => learned.has(character)).length}<span class="muted" style="font-size:15px"> / 92</span></strong><p>Characters explored</p></article><article class="stat">${icon('flame')}<strong>${streak()}</strong><p>Day learning streak</p></article><article class="stat">${icon('target')}<strong>${state.quizzes}</strong><p>Practice sessions</p></article></div><div class="section-title"><h2>Your character collection</h2>${scriptTabs()}</div><div class="kana-chart">${characters().map(item => `<button class="chart-cell ${learned.has(item.character)?'learned':''}" data-action="open-character" data-row="${item.row}" data-index="${item.index}" aria-label="Study ${item.character}, ${item.sound}${learned.has(item.character)?', learned':''}"><span class="jp" lang="ja">${item.character}</span><small>${item.sound}</small></button>`).join('')}</div><p class="muted" style="font-size:11px">${countLearned()} of 46 ${scriptName().toLowerCase()} characters explored.</p></div>`;
}
function charactersForAllScripts() { return rows.flatMap(row => [...row.hira,...row.kata]); }
let toastTimer;
function toast(message) {
  document.querySelector('.toast')?.remove();
  const element = document.createElement('div');
  element.className='toast'; element.setAttribute('role','status'); element.textContent=message;
  document.body.append(element); clearTimeout(toastTimer);
  toastTimer=setTimeout(() => element.remove(),4500);
}
function speak(text) {
  if (!('speechSynthesis' in window)) { toast('Audio is not supported by this browser. Romaji is shown below each character.'); return; }
  const voices = speechSynthesis.getVoices();
  const voice = voices.find(item => item.lang.toLowerCase().startsWith('ja'));
  if (voices.length && !voice) { toast('Japanese audio needs a Japanese voice installed in your browser or device.'); return; }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang='ja-JP'; utterance.rate=0.75;
  if (voice) utterance.voice=voice;
  utterance.onerror=event => { if (!['canceled','interrupted'].includes(event.error)) toast('Japanese audio is unavailable. Check your device’s Japanese voice settings.'); };
  speechSynthesis.speak(utterance);
}
app.addEventListener('click', event => {
  if (event.target.id==='particle-dialog') { event.target.close(); return; }
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  if (action.startsWith('stroke-')) { strokePlayer?.handle(action,Number(button.dataset.index)); return; }
  if (action==='speak') { speak(button.dataset.text); return; }
  if (action==='particle-examples') { openParticleExamples(button.dataset.value); return; }
  if (action==='kanji-examples') { openKanjiExamples(button.dataset.value); return; }
  if (action==='continue-learning') {
    const resume=state.resume;
    state.view=resume?.view||'lessons';
    state.script=resume?.script||'hira';
    state.row=resume?.row||0;
    state.char=resume?.char||0;
    state.practiceMode=resume?.practiceMode||'characters';
    state.practiceKanjiGrade=resume?.practiceKanjiGrade||1;
    state.kanjiGrade=resume?.kanjiGrade||1;
    state.lessonsExpanded=resumeViews.includes(state.view)&&state.view!=='practice'&&window.innerWidth>700;
    state.practiceExpanded=state.view==='practice'&&window.innerWidth>700;
    if (state.view==='practice') {
      if (state.practiceMode==='sentences') startSentencePractice();
      else if (state.practiceMode==='kanji') startKanjiQuiz();
      else if (state.practiceMode==='vocabulary') startVocabularyQuiz();
      else if (state.practiceMode==='review') startReviewQuiz();
      else if (state.practiceMode==='builder') startSentenceBuilder();
      else startQuiz();
    } else if (!resume) rememberLearningPlace();
    window.scrollTo({top:0,behavior:'instant'});
  }
  if (action==='reveal-particle-example') {
    const answer=button.closest('.particle-example')?.querySelector('[data-example-answer]');
    if (!answer) return;
    answer.hidden=!answer.hidden;
    button.setAttribute('aria-expanded',String(!answer.hidden));
    button.textContent=answer.hidden?'Reveal reading & English translation':'Hide reading & English translation';
    return;
  }
  if (action==='practice-mode') {
    state.practiceMode=button.dataset.value;
    state.view='practice';
    state.practiceExpanded=window.innerWidth>700;
    if (state.practiceMode==='sentences') startSentencePractice();
    else if (state.practiceMode==='kanji') startKanjiQuiz();
    else if (state.practiceMode==='vocabulary') startVocabularyQuiz();
    else if (state.practiceMode==='review') startReviewQuiz();
    else if (state.practiceMode==='builder') startSentenceBuilder();
    else startQuiz();
    rememberLearningPlace();
  }
  if (action==='toggle-practice') state.practiceExpanded=!state.practiceExpanded;
  if (action==='practice-kanji-grade') { state.practiceKanjiGrade=Number(button.dataset.value); startKanjiQuiz(); rememberLearningPlace(); }
  if (action==='toggle-kanji-readings') state.kanjiReadingsRevealed=!state.kanjiReadingsRevealed;
  if (action==='toggle-vocabulary-reading') state.vocabularyReadingRevealed=!state.vocabularyReadingRevealed;
  if (action==='kanji-grade') { state.kanjiGrade=Number(button.dataset.value); rememberLearningPlace(); }
  if (action==='reveal-translation') state.translationRevealed=true;
  if (action==='next-sentence') {
    state.sentenceIndex++;
    if (state.sentenceIndex>=state.sentenceQueue.length) startSentencePractice();
    else state.translationRevealed=false;
  }
  if (action==='builder-add') {
    const index=Number(button.dataset.index);
    if (!state.builderSelected.includes(index)) state.builderSelected.push(index);
    state.builderChecked=null;
  }
  if (action==='builder-remove') {
    const index=Number(button.dataset.index);
    state.builderSelected=state.builderSelected.filter(item=>item!==index);
    state.builderChecked=null;
  }
  if (action==='builder-reset') { state.builderSelected=[]; state.builderChecked=null; }
  if (action==='builder-check') {
    const card=sentenceBuildingCards[state.builderQueue[state.builderIndex]];
    state.builderChecked=state.builderSelected.length===card.parts.length&&state.builderSelected.every((index,position)=>index===position);
  }
  if (action==='builder-next') nextSentenceBuilder();
  if (action==='home') { event.preventDefault(); state.view='home'; state.practiceExpanded=false; }
  if (action==='toggle-lessons') state.lessonsExpanded=!state.lessonsExpanded;
  if (action==='view') {
    state.view=button.dataset.value;
    if (['lessons','vocabulary','particles','kanji'].includes(state.view)) state.lessonsExpanded=window.innerWidth>700;
    state.practiceExpanded=state.view==='practice'&&window.innerWidth>700;
    rememberLearningPlace();
    window.scrollTo({top:0,behavior:'instant'});
  }
  if (action==='script') { state.script=button.dataset.value; state.char=0; state.quiz=null; rememberLearningPlace(); }
  if (action==='row') { state.row=Number(button.dataset.index); state.char=0; rememberLearningPlace(); }
  if (action==='character') { state.char=Number(button.dataset.index); rememberLearningPlace(); }
  if (action==='category') state.category=button.dataset.value;
  if (action==='learn') {
    const row=rows[state.row];
    learned.add(row[state.script][state.char]); activity.add(localDate());
    if (state.char<row.sounds.length-1) state.char++;
    else {
      const completedRow=state.row;
      if (state.row<rows.length-1) { state.row++; state.char=0; }
      else { state.view='progress'; }
      toast(`${rows[completedRow].name} lesson complete. A lovely step forward!`);
    }
    if (state.view==='lessons') rememberLearningPlace(); else saveProgress();
  }
  if (action==='open-character') { state.view='lessons'; state.lessonsExpanded=window.innerWidth>700; state.practiceExpanded=false; state.row=Number(button.dataset.row); state.char=Number(button.dataset.index); rememberLearningPlace(); window.scrollTo({top:0,behavior:'instant'}); }
  if (action==='restart') { if (state.practiceMode==='kanji') startKanjiQuiz(); else if (state.practiceMode==='vocabulary') startVocabularyQuiz(); else if (state.practiceMode==='review') startReviewQuiz(); else if (state.practiceMode==='builder') startSentenceBuilder(); else startQuiz(); }
  if (action==='answer') {
    if (!state.quiz || state.quiz.answer!==null) return;
    state.quiz.answer=button.dataset.value;
    const question=state.quiz.questions[state.quiz.index];
    const correct=state.quiz.answer===correctQuizAnswer(state.quiz,question);
    if (correct) state.quiz.score++;
    rememberReviewAnswer(state.quiz,question,correct);
  }
  if (action==='next-question') {
    if (!state.quiz || state.quiz.answer===null) return;
    state.quiz.index++; state.quiz.answer=null;
    state.kanjiReadingsRevealed=false;
    state.vocabularyReadingRevealed=false;
    if (state.quiz.index===state.quiz.questions.length) { state.quizzes++; activity.add(localDate()); saveProgress(); }
  }
  render();
  if (action==='answer') document.querySelector('[data-action="next-question"]')?.focus({preventScroll:true});
  if (action==='next-question') document.querySelector('.answer-button')?.focus({preventScroll:true});
});
app.addEventListener('input', event => {
  if (event.target.id==='word-search') {
    state.search=event.target.value;
    const words=filteredWords();
    document.querySelector('#vocab-results').innerHTML=words.length?words.map(wordCard).join(''):'<p class="empty-state">No words found. Try another word or category.</p>';
    document.querySelector('#word-count').textContent=`${words.length} words`;
    lucide.createIcons({attrs:{'stroke-width':1.7}});
  }
  if (event.target.id==='kanji-search') {
    state.kanjiSearch=event.target.value;
    renderKanjiResults();
  }
});
render();
