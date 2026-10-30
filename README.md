# GaiGenius

A free, account-free introduction to Japanese. Open `index.html` in a modern browser. No installation, build step, or server is required.

## Learning

- 46 basic hiragana and 46 basic katakana characters, in ten lessons each.
- Character sounds, romanization, and short pronunciation notes.
- Animated stroke order for all 92 kana, with play/pause, replay, and numbered writing steps. Reduced-motion preferences use static steps instead of animation.
- 300 Japanese vocabulary entries across hiragana and katakana, with romaji, English meanings, search, and category filters. Includes 50 adjectives and 50 verbs in hiragana.
- Homepage learning path with a Continue learning button that reopens the last lesson, script, row, or practice mode on that device.
- Particle guide covering common particles and their roles, with five vocabulary-based example sentences per particle. Reading and English translations are revealed on demand.
- Kanji section with all 1,026 school-assigned characters across Grades 1–6, English meanings, common on’yomi in katakana, kun’yomi in hiragana, and five sentence examples per kanji. Example selection favors beginner-readable sentences and words already introduced in the app.
- Character-recognition quizzes with feedback and session results. Each round randomly samples ten characters from the selected kana script.
- Practice modes for randomized kana identification and sentence translation, with readings and translations revealed on demand and no translation score.
- Progress and learning streaks saved on the current browser and device with localStorage. Clearing browser data removes progress. Private browsing may not retain it.

Audio uses the browser's Speech Synthesis API and requires an installed Japanese voice. Voice availability and offline behavior vary by device. The app displays an explanation when audio is unavailable.

The core app works offline after the files are downloaded. Google Fonts and the Tokyo photograph from Unsplash require a network connection; local font and background fallbacks are provided. There is no backend, account system, or analytics.

## Structure

- `index.html`: document, metadata, fonts, and entry point.
- `styles.css`: responsive layout and presentation.
- `app.js`: lesson and vocabulary data, rendering, practice, speech, and local progress.
- `kanji-data.js`: Grade 1–6 kanji, meanings, kana readings, and five Japanese–English example sentences per kanji.
- `writing.js`: numbered writing guides and stroke playback.
- `vendor/lucide.min.js`: pinned Lucide 0.468.0 icons (ISC license, included in the library).
- `vendor/kana-strokes.js`: locally bundled ordered stroke paths and number positions.
- `scripts/build-kana-data.ps1`: reproducible KanjiVG importer; optionally pass `-Revision` to select a source commit.
- `scripts/build-kanji-examples.py`: adds the example sentences to `kanji-data.js` from the Tatoeba sentence export and KANJIDIC2-derived grade list; it uses pykakasi to add kana readings.

## Stroke Data Attribution

The kana stroke paths and number positions are adapted from [KanjiVG](https://kanjivg.tagaini.net/), copyright Ulrich Apel, and distributed under [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0/). The adaptation extracts the ordered paths and number transforms from the original SVGs into JavaScript data. The source revision is recorded in `vendor/kana-strokes.js`; the original notice is retained in `vendor/KANJIVG-LICENSE.txt`. These data-license terms apply to the adapted stroke data.

The current curriculum covers basic kana and all six elementary school kanji grades: Grade 1 (80), Grade 2 (160), Grade 3 (200), Grade 4 (202), Grade 5 (193), and Grade 6 (191). Dakuten, handakuten, combined sounds, and handwriting practice remain potential future lessons. Vocabulary may include these additional sounds and includes a note to distinguish them from the basic character set.

Kanji grade allocations follow the current [MEXT curriculum allocation](https://www.mext.go.jp/content/1384661_4_1_1.pdf). Meanings and readings for Grades 3–6 are derived from [KANJIDIC2](https://www.edrdg.org/wiki/index.php/KANJIDIC2), copyright Electronic Dictionary Research and Development Group (EDRDG), under the [EDRDG licence](https://www.edrdg.org/edrdg/licence.html). Grade 1–2 common readings retain the existing curated sources: a [Grade 1 reading list](https://family-life.work/study/sho/resources/pdf/kanji/kanjiList-sho1.pdf) and a [Grade 2 reading list](https://minkan.co.jp/others/ps2/). On’yomi readings are shown in katakana and kun’yomi readings in hiragana; these are common readings, not an exhaustive list.

Kanji sentence examples are selected from the editor-curated Japanese–English examples of the [Tatoeba Project](https://tatoeba.org/), under [CC BY 2.0 FR](https://creativecommons.org/licenses/by/2.0/fr/). Tatoeba sentence IDs are retained and linked from each revealed example. The app adds kana readings to the selected sentences. A small number of examples for characters with limited corpus coverage were written for this project.

To publish, upload `index.html`, `styles.css`, `app.js`, `writing.js`, `kanji-data.js`, and the `vendor` directory to any static web host, such as GitHub Pages, Netlify, or Cloudflare Pages. The importer scripts are not needed at runtime.
