# Render Deployment Plan

## Goal

Publish GaiGenius as a simple public demo on Render. The app is a static client-side site: it has no server, package manager, build tool, or environment variables. Render Static Sites are the right fit and serve the published files through Render's CDN.

## Recommended setup

Create one **Static Site** in the Render Dashboard, connected to `https://github.com/ebtenorio/GaiGenius`.

| Setting | Value |
| --- | --- |
| Name | `gaigenius-demo` (or another available name) |
| Branch | `master` |
| Root Directory | Leave blank (repository root) |
| Build Command | `mkdir -p dist && cp index.html styles.css app.js writing.js kanji-data.js dist/ && cp -R vendor dist/` |
| Publish Directory | `dist` |
| Environment Variables | None |
| Pull Request Previews | Optional; leave off for the first demo deployment |

The build command stages only the runtime assets into `dist`, so repository documents, scripts, and source-control files are not included in the published site. The app's local `vendor` assets must be copied along with the HTML, CSS, and JavaScript files.

## Deployment steps

1. Sign in to Render and choose **New > Static Site**.
2. Connect the GitHub account that can access `ebtenorio/GaiGenius`, then select that repository.
3. Enter the settings from the table above and create the site.
4. Wait for the first deploy to finish. Render will provide an `onrender.com` URL; use that URL for the demo.
5. Keep auto-deploy enabled for `master` so later pushes update the demo.

No custom domain, server process, start command, redirects, or SPA fallback is needed for the current app. The app serves one `index.html` and does not use client-side URL routing.

## Demo verification checklist

- Open the Render URL over HTTPS and confirm the lesson view loads without console or network errors.
- Switch between hiragana and katakana, select a character, and confirm its matching vocabulary preview updates.
- Open the vocabulary and practice views; confirm search, category filters, and quiz interactions work.
- Confirm stroke guides and local icon assets load. Try audio on a device with a Japanese speech voice available.
- Mark a character learned, reload the page, and confirm progress remains in that browser. Progress is stored in localStorage on each visitor's own device and is not shared across visitors.
- Check the page at desktop and mobile widths.

Google Fonts and the culture-card image come from external services, so those visual assets need an internet connection. The lessons and bundled stroke/icon data are served from this repository.

## Ongoing updates and rollback

Push approved demo changes to `master`; Render will build and publish a new deployment automatically. Review the deployment status and the live demo after each update. If a deployment breaks the demo, use Render's deploy history to redeploy the last successful version, then fix and push a follow-up commit.

## References

- [Render Static Sites](https://render.com/docs/static-sites)
- [Your First Render Deploy](https://render.com/docs/your-first-deploy)
- [Render Static Site Headers](https://render.com/docs/static-site-headers)
