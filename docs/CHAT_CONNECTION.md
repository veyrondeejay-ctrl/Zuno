# ZUNO / Clerky connection status

The shipped Site remains a static, library-based educational preview. There is no active ZUNO API endpoint. The chat history, source cards, age editions and activity summaries work locally. Activity summaries identify a library lookup; they never claim a web search or model review. No provider keys appear in browser code.

## Verified source boundary

Clerky `server/api.mjs` on the reviewed main branch authenticates the workspace owner and rejects cross-origin POST requests. It has `/api/chat` for general agents, not `/api/zuno/answer`. Its general model service adds Clerky instructions and can use multiple agents. That route must not be exposed directly to children or weakened to accept ZUNO browser calls.

## Prepared code

`server/zuno-service.mjs` is a server-only foundation with dependency-injected moderation, exact approved free inference, bounded search and durable quota interfaces. It defaults off. Tests use mocks, not live providers. `createClerkyZunoClient` accepts only an HTTPS `/api/zuno/answer` endpoint and a server-held scoped token, rejects redirects and never accepts model/tool configuration from the child. It is not installed in Clerky or mounted in this static Site.

## Required before activation

1. Install a dedicated authenticated ZUNO route in the actual Clerky backend. Resolve a signed household/child profile server-side and verify parent consent and age band. A service token alone is not parental authorization.
2. Verify the account’s free capacity, model terms, ZDR/no-training configuration and child-safety evaluations. Keep the exact model/endpoint allowlist current. Groq’s June 2026 terms address minor-accessed customer applications; they do not verify our account settings or authorize any individual child.
3. Supply a server-owned search/extraction adapter using approved domains. Respect source access rules and licences; set byte/time/source limits, reject arbitrary user URLs and redirects, and treat extracted text as untrusted data. Do not render a crawl result or draft before checks complete.
4. Implement and evaluate the moderation adapters and an atomic household/global/provider quota store. Include the classification/review operations in the shared Clerky budget.
5. Mount a server-side Site API proxy, configure its scoped connection credential through runtime secrets, and connect the client to its validated answer/event schema. Do not add secrets to the static preview or call the owner workspace API from a browser.
6. Exercise real authentication, isolation, deletion, quota exhaustion, bad sources, malicious source instructions, failed reviews and provider outages before a supervised child pilot.

No live source search, crawling or AI review is enabled by this release. Those are outstanding integration work, not finished features.

## Research used

- https://www.perplexity.ai/en-GB/hub/blog/getting-started-with-perplexity — source-backed answers and linked references.
- https://www.perplexity.ai/en-GB/changelog/what-we-shipped---february-13-2026 — discoverable conversation history.
- https://support.khanacademy.org/hc/en-us/articles/14394814244365-What-safety-features-does-Khanmigo-have — adult oversight and transparent history expectations.
- https://console.groq.com/docs/legal/services-agreement — customer versus end-user obligations.
- https://console.groq.com/docs/your-data — configurable ZDR and retention conditions.
- https://developers.cloudflare.com/workers-ai/platform/data-usage/ — standard inference data commitments and exceptions.

These references inform an original ZUNO interface; no competitor code or artwork was copied.
