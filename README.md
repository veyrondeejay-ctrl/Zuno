# ZUNO Kids

Ask. Learn. Explore.

Zuno AI powered by ClerkOps. Mobile-first learning, reading, age-curated facts, stories, worlds and games for ages 6–14.

## Run locally

Serve `dist/` over HTTP, for example `python3 -m http.server 8000 --directory dist`. No build or dependency installation is required.

## Checks

- `npm test`
- `npm run validate`
- `node --test integrations/clerky/tests/zuno.test.mjs`

## Included

Complete published frontend source and artwork, editorial images and credits, 345 reading entries, 900 age-curated fact editions, original stories, learning games, cube game, admin client, tests and implementation notes. The dedicated central AI API source is in `integrations/clerky/`.

The live frontend uses the existing centrally hosted API. Keys and admin credentials remain in server runtime configuration and are not included here. See the integration README before moving the backend. Older architecture documents describe earlier stages; current release notes are in `docs/EDITORIAL_RELEASE.md`.

Live app: https://zuno-kids.creativehub254.chatgpt.site

Third-party image attribution and license notices are retained with the assets.
