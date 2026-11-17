# Current implementation update · 15 November 2026

The older staged plan below remains architecture context. The current release adds eight 100-level game tracks per reading band and an optional connected grown-up AI testing preview. Chat, reader explanations and question-game hints share a dedicated scoped endpoint in Clerky. It is separate from the disabled future child-account contract below. Verified child accounts and parental consent are still outstanding. Current privacy and safety pages describe actual data flows and limits.

# ZUNO KIDS — foundations, reuse and staged architecture

Prepared 15 November 2026, Africa/Nairobi. This is an implementation plan and source review, not a child-safety certification or a claim of curriculum approval.

## Product direction preserved

**ZUNO KIDS — Ask. Learn. Explore.** An inviting discovery world for roughly ages 6–14, rooted in Kenya and open to the world. The encyclopedia, experiments, worlds and games are the product; AI helps with selected explanations and follow-ups. The operating target is 80–90% of interactions without AI inference. This target is a design constraint, not an observed launch metric.

The existing *Zuno Kids Neon Brand Board.png* is the authoritative visual reference used for this build. The preview reuses its mascot, app icon and category artwork. The multicolour wordmark treatment, Sora headings, Plus Jakarta Sans body, cosmic blue `#1E3DFF`, aqua `#00E5FF`, lime `#A8FF00`, pink `#FF3ACB`, yellow `#FFB800`, ink `#0B1026` and lavender `#7C69FF` are preserved. The light reading surface uses `#F5F7FF` with dark text. Transparent light/dark logo masters and compact UI exports are included; mascot and category art still use crops from the approved sheet.

Three provisional reading bands are implemented: Little Explorer (6–8), Explorer (9–11), Trailblazer (12–14). These are editorial controls, not verified ages or automatic school-grade assignments. All 33 discoveries include separate primary explanations and supporting reading sections for all three bands. Six fictional stories have complete separate editions. Educator and reading-level review remain necessary before publication for children.

## What is built now

The first stage is a routed application with five persistent destinations, nested topic/world/game screens, browser back navigation, and a grown-up corner. It is not a single marketing page.

| Area | Working foundation | Still to build |
| --- | --- | --- |
| Discover | 11 collections; 19 explainers, six original fictional stories and eight Little Wows; full age editions; local full-text search; related topics; save; optional device read-aloud | A substantial reviewed encyclopedia; rich diagrams and media; more reviewed map facts; Kiswahili |
| Zuno Chat | Multi-turn library conversations; searchable thread history; complete age editions; compact source cards; honest activity summaries; privacy guards; tab-only history by default and optional seven-day device history | Dedicated Clerky child gateway, parent permissions, durable quotas, input/output moderation, grounded AI evaluations |
| Explore Worlds | Interactive solar system; selectable planet facts; pause/reset; device-capability fallback; 47-county Kenya map and selected Wangari timeline; wildlife guide; light/circuit/gravity/gears labs | Richer exploration worlds, licensed 3D assets and wider editorial coverage |
| Play & Learn | Three quizzes with separate age question banks; age-sized coding route puzzle; Read → Explore → Try path; completion rewards | Spaced practice, more original simulations, optional visual coding editor |
| My Universe | Local bookmarks, completed stories, curiosity points, badges and daily goal | Household-owned sync, parent-managed profiles, deletion/export controls, adaptive recommendations |

The preview does not create child accounts, take payments, send questions to any model, upload files, request a microphone/camera/location, or enable general Clerky agents. Starter content still needs educator/editor review. The client-side keyword checks are a convenience guard for a bounded preview; they are not production moderation.

Camera recognition, live voice conversation and AI-assisted creation are excluded from this scope. They have no preview entry points, teasers or enabled integrations.

## Reference strategy and original implementation

KiwiCo informed age-led discovery, hands-on questions and creative confidence, with no store or sales flow. PlayKrea informed clear world entry points and short learning paths; ZUNO keeps its own navigation, artwork and identity. Mwalimu.ai informed the separation of learning progress, curriculum metadata and parent oversight. Marketing claims were not adopted as independently verified results. No competitor code, illustrations or curriculum content was copied.

The current release adds original stories about measurement, debugging, evidence, offline design, observation and fractions. Little Wows are short explainers with a next question, not copied video scripts. Source records distinguish factual explainers from original fiction. The Kenya map uses official geoBoundaries source polygons with attribution rather than a decorative invented map. All four labs are programmed ideal models with explicit assumptions.

## Clerky infrastructure review

Repository: [veyrondeejay-ctrl/Clerky](https://github.com/veyrondeejay-ctrl/Clerky), `main` tree `ba3dd2c84958e57db06b8622af061273e2aceef5`. Reviewed source includes `server/api.mjs`, `model-service.mjs`, `openrouter.mjs`, `backup-providers.mjs`, `router.mjs`, `task-policy.mjs`, `quality.mjs` and `package.json`. Selected routing files are retained under `research/clerky/` for the next integration stage, outside the served application directory. The existing Clerky repository was not modified.

| Existing piece | Reuse decision |
| --- | --- |
| Server-held provider adapters | Reuse the adapter boundaries behind a dedicated ZUNO policy layer. Keep all keys out of browsers. |
| OpenRouter zero-price filter and `max_price` checks | Useful baseline. Add exact model/endpoint approval, child-use terms, no-training and zero-retention requirements. A zero price alone is insufficient. |
| Provider cooldowns, aborts and fallback handling | Reuse. ZUNO should try at most two eligible generation routes, then return reviewed content. Clerky currently permits more retries. |
| Model catalogue caching | Reuse with short-lived eligibility evidence and retirement monitoring. Never trust an indefinitely cached free status. |
| `*_FREE_TIER_VERIFIED` flags | Treat as configuration assertions, not proof of billing plan, remaining quota, privacy settings or child-use permission. |
| General task ranking | Replace with a narrow explanation/translation/grounded-tutoring policy. Existing capability scores are policy profiles, not measured child-safety benchmarks. |
| Generic `CLERKY_SYSTEM`, tools, repo context and multi-step agent workflow | Do not expose to children. A child request needs a dedicated system policy and no general tool/agent access. |
| Owner authentication and same-origin POST checks | Preserve. ZUNO cannot simply call the owner-only `/api/chat` endpoint from its own origin. Implement a scoped service-to-service boundary. |
| Browser-local conversations and project memory | Do not repurpose as a child-data store or consent system. |

The inspected provider adapters list OpenRouter, Google AI Studio, Groq, Mistral and Cloudflare. Itera and NVIDIA were not wired in the reviewed `backup-providers.mjs`; remembered setup intentions are not evidence of a working adapter. No live provider credentials, account quotas or privacy settings were read or changed in this work.

## Free-model eligibility findings

No live model is approved for ZUNO in this build. The distinction is between reusable infrastructure and a provider route cleared for this specific child-facing product. Passing through Clerky does not remove an upstream age, privacy or licence restriction.

| Provider/model | Finding | ZUNO decision now |
| --- | --- | --- |
| Google AI Studio / Gemini API | Current API terms expressly exclude API clients directed towards or likely accessed by under-18s. Unpaid data also has training/review provisions. | Excluded from child-facing ZUNO routing. |
| Groq `openai/gpt-oss-20b` | Present in Clerky; supported in current provider catalogue. Groq publishes rate-limit information, but account-specific limits must be checked. June 2026 terms require an adult customer and expressly address customer applications accessed by minors under the customer’s responsibility. Account-specific free capacity, ZDR, parent authorization and safety evaluation remain unverified. | Hold. Candidate for short grounded explanations only after explicit eligibility and account checks. |
| Groq `openai/gpt-oss-120b` | Present in Clerky; same eligibility concerns. Larger model need not serve every request. | Hold. Potential difficult-explanation route only. |
| Cloudflare `@cf/meta/llama-3.2-3b-instruct` | Present in Clerky; published retirement date is 20 November 2026. | Exclude from a new dependency. |
| Cloudflare `@cf/meta/llama-3.1-8b-instruct` | Clerky’s exact ID no longer resolves to a current model detail page; the FP8 variant also has a published retirement date. | Revalidate the entire Cloudflare allowlist. Do not silently substitute a model. |
| A current Cloudflare replacement | Workers AI publishes a 10,000-Neuron daily free allocation; certain models require paid access. Standard inference has published no-training/retention commitments with exceptions. Model licences and child-use/DPA applicability still need checking. | Candidate provider, no replacement model approved yet. Keep the account free-only and apply a hard local cap. |
| OpenRouter account-eligible `:free` models, including any eligible Qwen variant | Existing zero-price discovery is reusable. Provider training/retention and model terms vary. Generic auto-routing is unsuitable for approval control. The exact free catalogue is account-dependent. | Hold for an exact model+endpoint allowlist. Qwen priority only among routes that pass every gate. |
| Mistral free Studio routes | Present in Clerky. Official help states free-mode inputs/outputs may be used for training, with opt-out controls. Free production allowance and applicable terms must also be verified. | Hold; no child prompts until all privacy and eligibility requirements are satisfied. |

Groq supports ZDR controls. These and account capacity still need verification for the intended child-facing integration; the service terms do not substitute for parental authorization or a product safety assessment. Cloudflare free allocation is shared account capacity, not an allocation per child. Clerky and ZUNO must share one provider budget ledger; never create extra accounts to evade limits. OpenRouter account policy must stay intact; do not turn off privacy protection to increase the free-model count.

The shipped `server/eligibility.mjs` is a tested, disabled-by-default contract for the next stage. It rejects missing evidence, nonzero/unknown prices, wrong age bands, exhausted quotas, expired verification and imminent model retirement. It also blocks Gemini and client attempts to choose a provider/model or enable paid execution. It is not connected to a live endpoint and does not implement authentication or moderation.

## Open-source reuse research

| Resource | Licence / constraint | Action |
| --- | --- | --- |
| [Three.js](https://github.com/mrdoob/three.js) | MIT; retain notice | Downloaded r160 module and licence; used in the solar world. Lazy loaded. The local QA browser disables WebGL, so its 2D fallback was exercised; a GPU device remains a verification task. |
| [MiniSearch](https://github.com/lucaong/minisearch) | MIT; retain notice | Downloaded 7.1.1 UMD distribution and licence; used for on-device encyclopedia search. No hosted search bill. |
| [Lucide](https://github.com/lucide-icons/lucide) | ISC, with some Feather MIT portions | Downloaded selected 0.468.0 SVGs and licence; served locally. |
| [Google Fonts](https://github.com/google/fonts) | SIL OFL for Sora and Plus Jakarta Sans | Downloaded fonts and notices; no external font requests. |
| [Blockly](https://github.com/RaspberryPiFoundation/blockly) | Apache 2.0 | Good stage-three visual coding candidate. Use a published stable release after evaluating touch accessibility; not installed in the starter. |
| [Phaser](https://github.com/phaserjs/phaser) | MIT | Good candidate for more demanding 2D games. Avoid loading a game engine for three-question quizzes. Not installed. |
| [Kolibri](https://github.com/learningequality/kolibri) | Platform MIT; content has separate licences | Study offline content packages and curation. The full learning-management platform would change the product direction and add operational weight; not integrated. |
| [Astro/Starlight](https://github.com/withastro/starlight) | MIT | Useful future content-build reference, not adopted as the child-facing UI. No CMS server is needed for the starter. |
| [Scratch](https://github.com/scratchfoundation/scratch-gui) | Code and trademark terms are distinct | Link as a grown-up-assisted learning reference. Do not import Scratch branding, characters or public community into ZUNO. |
| [PhET](https://phet.colorado.edu/en/licensing/) | Regular HTML simulations currently CC BY-NC; commercial use requires separate arrangements | Do not bundle into a future paid ZUNO product without a suitable licence. Build original small simulations instead. |

Only components needed by the working first stage were downloaded and integrated. This avoids carrying whole applications, unrelated accounts and hidden backend dependencies. Every reused runtime asset is self-hosted. Full notices are included in `third-party/` and served at `/licenses/`.

## Complete architecture

### Client and content

Start with a lightweight web app/PWA that runs on mobile, tablet and desktop. Five destinations remain consistent: Discover, Zuno Chat, Explore Worlds, Play & Learn and My Universe. Mobile gets five labelled bottom tabs, tablet gets a compact rail, desktop gets a full rail and supporting curiosity cards. Nested screens have explicit back links and deep links. The separate `/preview.html` review surface switches 375/768/1024-pixel frames.

The current build is framework-free ES modules to minimize startup and hosting work. The existing Clerky server is JavaScript and can integrate without adopting a different language. As the UI grows, these content/data contracts can be retained in a component framework; do not rebuild the product into an admin dashboard.

Build the encyclopedia as reviewed versioned content, emitted to static JSON/HTML and local search indexes. Each topic record needs canonical ID, age band, language, short answer, article blocks, source links, media rights, editorial status, reviewer, review date, related topics, learning goals and optional curriculum tags. Media, quiz and world manifests link by IDs rather than duplicating article text.

Serve articles, images, audio and world bundles through static caching. The service worker keeps the starter library and UI available after a successful first load; larger 3D assets cache after use. Offline mode must never queue a child’s raw questions for later automatic transmission. The current search indexes text locally; hosted vector search is unnecessary at this size.

### Zuno Chat request path

1. Parent-authenticated household creates a pseudonymous child profile and grants optional AI access. The server resolves age band and limits from that profile, not client-supplied fields.
2. ZUNO backend validates the session, ownership, origin, body size and idempotency ID. It checks child, household, global and provider capacity using atomic reservations.
3. Check approved answer cache and local topic retrieval first. Cache keys include content version, language, age band and normalized intent. Never cache raw PII or share unreviewed personalized responses across children.
4. A dedicated safety stage handles privacy, distress, unsafe requests and prompt injection. Child-sensitive disclosures need a supportive response; do not indiscriminately turn every such question into a refusal. No open-web browsing or arbitrary file uploads in V1.
5. Ground an eligible question in published, age-appropriate content snippets. If no reliable material exists, offer a reviewed alternative or a grown-up-assisted source search rather than fabricate an answer.
6. ZUNO makes a server-to-server call to a **new scoped Clerky ZUNO service**, with a service credential restricted to `zuno:explain`. It must not accept arbitrary system prompts, tools, repositories, models, provider overrides or paid flags from the child client.
7. Clerky checks the exact eligible model/endpoint against time-limited evidence and shared quotas. Prefer one compact route; allow at most one eligible retry. Cap output at roughly 450 tokens initially. Paid fallback remains disabled.
8. Validate the complete answer against the child policy, age level and supplied sources before displaying it. Do not stream unmoderated tokens to children. On failure or provider unavailability, show an approved topic answer.
9. Store only necessary aggregate operational metadata. Keep prompt/response logs off by default; establish an explicit restricted, minimized, expiring process for any safety reports. Reconcile quota reservations and never retry the same request blindly.

Planned endpoints: `GET /api/catalogue`, `GET /api/topics/:id`, `POST /api/zuno/ask`, `POST /api/progress`, `POST /api/bookmarks`, `GET /api/me/universe`, and parent-only profile/consent/export/delete endpoints. The only child-supplied Ask fields are `question`, optional `topicId`, and `requestId`. Response fields should include `mode` (`library`, `cache`, `ai`, `fallback`), answer blocks, source IDs, related topic IDs and remaining allowance. Operational provider details stay in the parent/admin interface.

### Data, identity and operations

Use parent-managed household ownership, preset nicknames/avatars and coarse age bands. A child does not need a real name, email, date of birth, school or exact location. Parent login, consent version/history and server-authorized data access are stage-two launch gates, not promises made by the preview.

A small relational store can hold profiles, bookmarks, activity, consent and quota reservations; use object storage/static objects for larger published content/media. `docs/schema-planned.sql` sketches these entities and is not executed. Existing Sites D1/R2 capabilities are a possible low-operations fit; price and retention limits must be checked when enabling them. Do not add a database, vector service, paid authentication subscription or background model agent merely to serve public articles.

Publish content through a draft → review → publish workflow. Keep the reviewer/version/source/rights record. Parent deletion must cover primary data, derived records and applicable backups; access must be enforced by household on every endpoint. Data protection and cross-border processing requirements need review for the intended launch markets before real child data is collected.

### Kenya and technology learning

Start with original Kenyan examples in maths, local landscapes, wildlife, conservation, changemakers, digital literacy and coding. Planned learning collections can map to Mathematics, English/Kiswahili, Environmental Activities, Science and Technology, Social Studies and junior-school digital skills using the correct grade/strand/outcome records. Age alone does not establish a learner’s grade.

Use [KICD curriculum designs](https://kicd.ac.ke/cbc-materials/curriculum-designs/) and [Kenya Education Cloud](https://www.kec.ac.ke/) as authoritative programme references. Keep any external visit in the grown-up flow. Research KICD’s educational media/Elimu TV programmes for links and permissions during content expansion. Public access does not imply permission to copy videos, textbooks or whole courses. The starter does not claim KICD approval or complete CBC/CBE coverage.

Future Lab should be a first-class area: algorithms, debugging, how the internet works, safe digital habits, AI literacy, simple circuits and creative making. Build activities that reveal mechanisms rather than a generic homework chatbot.

### Motivation and safety by design

Borrow the useful learning pattern from Duolingo: tiny sessions, a clear next step, active recall, useful feedback, encouraging character moments and repeat practice. Build an independent identity and interaction system. No copied characters, punitive streaks, lost lives, leaderboards, artificial scarcity or chat dependency. Let learners stop freely. Add optional parent-set session reminders later, not anxiety-driven notifications.

## Cost controls

The current preview makes zero model calls and requires no paid service keys. This is not a guarantee that hosting, bandwidth or future production will remain free at any scale.

Use a measured starting budget: at most five AI questions per child per day by default; allocate a global/provider ceiling below the available account quota; reserve capacity before requesting; 600-character question cap; 450-token output cap; two generation attempts maximum; no agent teams; no model calls for every page, quiz or recommendation. Safety requests also consume resources and must be included in the ledger.

With 100 daily learners and 10 interactions each, an 85% non-AI share would leave about 150 generation requests before moderation and retries. This is a planning example, not a measured traffic forecast or quota promise. Quota exhaustion should reduce AI availability while the encyclopedia and games continue working. Track cache hit rate, non-AI share, latency, failure rate, safety blocks, content gaps and spend without retaining unnecessary child text.

## Implementation stages and exit gates

1. **Foundation preview — delivered:** approved asset reuse, responsive navigation, encyclopedia schema and starter content, curated Ask, solar world/fallback, Kenya map/timeline, wildlife guide, four labs, full age editions, original stories/Little Wows, age-based games and local My Universe. Document known limits and verify real user journeys.
2. **Parent and Clerky boundary:** parent identity/consent, household data isolation, atomic quotas, new scoped Clerky route, exact provider eligibility evidence, moderation/grounding/output checks and deletion. All paid/unknown/unapproved routes remain closed. Pilot with adult testers before child use.
3. **Reviewed content and Kenya learning:** expand the encyclopedia by complete topic clusters, full age editions, curriculum metadata, Kiswahili review, licensed illustrations/audio and richer Kenya content. Add educators to the review workflow; test source accuracy and accessibility.
4. **Richer worlds and learning:** progressively enhance wildlife/Kenya worlds, add original experiments and Blockly/Phaser only where justified. Provide equivalent controls and readable alternatives for every visual interaction. Verify low-end Android, iPhone, tablets, keyboard and assistive technology.
5. **Controlled child pilot:** parent-supervised consented testing, independent safety assessment, provider/account evidence refreshed, performance/cost instrumentation, recovery/deletion drills and support process. Launch gradually with a kill switch for live AI.

This scope is educational only. No shop, checkout, subscriptions or payment collection is included.

## Primary research references

Checked during this build; policies and catalogues can change.

- [Gemini API terms](https://ai.google.dev/gemini-api/terms) — age requirements and unpaid-service data use.
- [Groq services agreement](https://console.groq.com/docs/legal/services-agreement) — age requirement and application/end-user terms.
- [Groq models](https://console.groq.com/docs/models), [rate limits](https://console.groq.com/docs/rate-limits), [data controls](https://console.groq.com/docs/your-data).
- [Cloudflare AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/), [data usage](https://developers.cloudflare.com/workers-ai/platform/data-usage/), [Llama 3.2 3B retirement](https://developers.cloudflare.com/workers-ai/models/llama-3.2-3b-instruct/).
- [OpenRouter privacy](https://openrouter.ai/privacy/), [terms](https://openrouter.ai/terms/), [limits](https://openrouter.ai/docs/api_reference/limits).
- [Mistral training and opt-out controls](https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models).
- Repository licence links and content sources appear in the tables above and in individual starter stories.

## Content updates

Edit `dist/new-content.js` for explainers and Little Wows, `dist/stories.js` for original fiction, and `dist/content.js` for the catalogue. Each record needs a unique ID, category, all three age editions, supporting sections, related IDs and a factual source or explicit original-fiction label. Existing base topics use `dist/age-tools.js` for their supporting age editions. Run `npm run validate` and `npm test`, read the changed editions in the browser, and require an educator/editor review before a child-facing release. Increment `contentVersion` and the service-worker cache name when shipping a content bundle.

## Conversation and interaction release

The interface now uses a single conversation scroll region with stationary header/composer and no page scrollbar in Chat. Mobile has clock/new-chat icon buttons and a history dialog; larger desktop layouts include a history rail. A one-line textarea grows to four lines, and the paper-plane control stays centred. Source cards distinguish a ZUNO discovery from its external reference. The homepage uses the same send icon.

There are 40 original homepage messages and 40 chat welcome messages. They rotate every eight seconds without changing the heading height, pause during interaction or reduced motion, and preserve a stable accessible heading. Raised symbols, hover/press feedback, page entry and scroll reveal effects use browser rendering. No extra AI or image requests are needed. Only the homepage footer uses official light/dark ClerkOps logo assets linking to https://clerkops.co.ke.

All 27 quiz questions (three quizzes × three age bands × three questions) now use plausible subject-related alternatives rather than unrelated objects. Answer choices shuffle once per attempt, and grading uses that same shuffled snapshot. Explanations distinguish misconceptions.

`server/zuno-service.mjs` is an unmounted integration foundation, not a live connection. It defines exact free-route checks, trusted server profile/consent, atomic quota reservations (up to five operations including checks), bounded sources, draft/review/output gates and public activity events. A failed review never returns the draft. Its tests use injected mock services. The scoped client rejects Clerky’s general `/api/chat` route and follows no redirects. No provider credentials were read or copied and no live generation was enabled. See `docs/CHAT_CONNECTION.md` for the remaining installation work.
