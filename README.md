# GaiGenius

A free, account-free introduction to Japanese. Open `index.html` in a modern browser. No installation, build step, or server is required.

## Learning

- 46 basic hiragana and 46 basic katakana characters, in ten lessons each.
- Character sounds, romanization, and short pronunciation notes.
- Animated stroke order for all 92 kana, with play/pause, replay, and numbered writing steps. Reduced-motion preferences use static steps instead of animation.
- 300 Japanese vocabulary entries across hiragana and katakana, with romaji, English meanings, search, and category filters. Includes 50 adjectives and 50 verbs in hiragana.
- Particle guide covering common particles, their roles, and example sentences built from vocabulary entries.
- Character-recognition quizzes with feedback and session results. Quizzes use explored characters when at least five are available; otherwise they use the selected lesson.
- Progress and learning streaks saved on the current browser and device with localStorage. Clearing browser data removes progress. Private browsing may not retain it.

Audio uses the browser's Speech Synthesis API and requires an installed Japanese voice. Voice availability and offline behavior vary by device. The app displays an explanation when audio is unavailable.

The core app works offline after the files are downloaded. Google Fonts and the Tokyo photograph from Unsplash require a network connection; local font and background fallbacks are provided. There is no backend, account system, or analytics.

## Structure

- `index.html`: document, metadata, fonts, and entry point.
- `styles.css`: responsive layout and presentation.
- `app.js`: lesson and vocabulary data, rendering, practice, speech, and local progress.
- `writing.js`: numbered writing guides and stroke playback.
- `vendor/lucide.min.js`: pinned Lucide 0.468.0 icons (ISC license, included in the library).
- `vendor/kana-strokes.js`: locally bundled ordered stroke paths and number positions.
- `scripts/build-kana-data.ps1`: reproducible KanjiVG importer; optionally pass `-Revision` to select a source commit.

## Stroke Data Attribution

The kana stroke paths and number positions are adapted from [KanjiVG](https://kanjivg.tagaini.net/), copyright Ulrich Apel, and distributed under [Creative Commons Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0/). The adaptation extracts the ordered paths and number transforms from the original SVGs into JavaScript data. The source revision is recorded in `vendor/kana-strokes.js`; the original notice is retained in `vendor/KANJIVG-LICENSE.txt`. These data-license terms apply to the adapted stroke data.

The current curriculum covers basic kana. Dakuten, handakuten, combined sounds, handwriting practice, and kanji are potential future lessons. Vocabulary may include these additional sounds and includes a note to distinguish them from the basic character set.

To publish, upload `index.html`, `styles.css`, `app.js`, `writing.js`, and the `vendor` directory to any static web host, such as GitHub Pages, Netlify, or Cloudflare Pages. The importer script is not needed at runtime.
