# ZUNO editorial and AI release

## Shipped behaviour

- Public landing route `#/welcome` is separate from app navigation. Logo, header and app navigation nodes persist through app route changes.
- Chat is branded Zuno AI; public pages use Zuno AI, powered by ClerkOps. Necessary learning sessions connect automatically; chat, article explanations and game hints share the same client. Session renewal retries once after an expired token. Duplicate greeting labels and rapid duplicate sends are removed.
- AI routes and credentials stay in the central server. Public responses omit provider/model fields, including saved browser history. Admin connection details require a separately signed admin scope, password hashing and persistent login throttles.
- `/app/admin` has an explicit static entry. No password or account credential is included in public assets. The requested login is configured in runtime secrets.
- Game chapters use rows of raised cut-corner tiles, with sequential locks and direct-route guards. Server-verified admin sessions can review any level. Learning progress remains browser-local; it is not a server-authoritative school record.
- Cube Lab adapts the owner's actual .Presents reversible model: 60 editions across three ages, genuine solving, undo, restart and hints.
- Did You Know has 300 base facts / 900 separate age editions. There are 345 reading entries total, including 18 original stories. Collections paginate rather than mounting hundreds of cards.
- Article covers and thumbnails use subject imagery with attribution. Wikimedia-source photographs/diagrams preserve author, licence and source links; generated illustrations are labelled. Fictional story illustrations are thematic and do not claim documentary authenticity.
- Reading images reserve space, use local WebP, and are cached for offline reading. UI controls retain the 3D icon system.

## Verification

- 41 frontend tests pass, including all 2,400 original game editions, all cube challenges and all 900 fact editions. The asset validator checks all 345 reading entries and their source/age metadata.
- 98 central backend tests pass, including scoped AI, confidentiality redirect, safe conversation and admin authorization boundaries. Production API login and live candle explanation were verified; factual explanation retrieved the Candle article and returned a checked answer without provider/model fields.
- Browser QA: 45 main-route/viewport checks, 135 reading-page checks in each theme, 105 additional game/map/policy/collection checks, and all 300 fact-page phone checks passed without document overflow or missing headings. No broken loaded images were found. Tested widths: 375, 768, 1024 pixels through real iframe viewports.
- Browser interaction: cube move and undo restore the board; two visible hints solve the first 9–11 challenge; direct level 100 is locked for a normal browser; external-source modal text clears its close button.

## Limits

AI generation is fallible. Automated checks and reference grounding do not constitute human editorial review or verified parental consent. Verified parent-managed child accounts are not enabled. Free-service availability and caps can temporarily prevent AI replies, while local reading and games remain available. Mobile layout QA uses Chromium viewport frames; device-specific Safari behaviour still depends on the user's device.
