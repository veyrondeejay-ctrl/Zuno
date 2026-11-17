# ZUNO foundation verification

Performed on the working local Sites preview, 15 November 2026 Africa/Nairobi.

## Verified

- JavaScript syntax checked for app, content, both solar renderers and service worker.
- Twelve Node tests passed for disabled live AI, zero-price/eligibility gates, quota rejection, expiry/retirement, age scope and forbidden client routing fields. Eight validate a stage-two policy contract, not a deployed AI backend. Four cover complete age editions, quiz feedback, solvable age-sized code boards and 47 unique county polygons.
- Static validation covers topic IDs, relationships, reading-band explanations, quiz answer indexes, required assets, icon files and licence notices.
- Desktop app rendered with the approved mascot/artwork and persistent navigation.
- Phone (375-pixel frame), tablet (768) and web (1024) layouts were inspected through the real app in a device-review iframe. Body scroll width matched available content width in sampled routes: 360/360, 753/753 and 1009/1009. The difference from frame width is the browser scrollbar, not a hidden horizontal overflow.
- Encyclopedia search for “planets” returned relevant stories; category filtering worked after entering a category route and then choosing Future Lab.
- Reading an article awarded 10 points; saving it appeared in My Universe. Changing to ages 6–8 changed the primary explanation. Progress persisted across reloads.
- Ask Zuno returned the curated Mars answer. An unsupported dinosaur question returned an honest fallback. A test phrase containing a name declaration was removed from the displayed question and prompted a privacy reminder. No model was called.
- Space quiz was completed, including an intentionally wrong answer. It gave an explanation without losing a life and awarded 30 completion points. The result appeared in My Universe.
- Mobile rover puzzle ran right ×4 then up ×4, reached the goal and awarded 25 points. Total test progress was 65 points with the expected badges/bookmark.
- Solar planet selection changed the information panel; pause changed to Play. The QA browser disables WebGL, so the illustrated Canvas fallback was rendered and exercised.

## Verification boundaries

- Three.js 3D rendering has not been visually verified on a GPU-enabled device. The fallback is functional. Physical iPhone/Android/tablet testing, landscape, screen readers, complete keyboard traversal and performance profiling on low-end devices remain to be done.
- No formal WCAG audit or measured whole-product contrast certification was performed. Focus styles, semantic navigation, field labels, a native modal, safe-area handling, larger reading text, reduced motion and non-drag controls are implemented. Small mobile brand/footer hit areas found during inspection were enlarged; no claim of exhaustive touch-target verification is made.
- Service-worker offline caching is implemented. A deliberate network-disconnection drill and storage/quota-failure tests were not performed. Larger 3D resources become offline-ready after use; the lightweight fallback is in the starter cache.
- Read-aloud depends on browser/OS voices; audio quality was not assessed.
- The 33 discoveries and age-specific quiz wording need editorial, educator and full reading-band review. All lead and supporting sections have age editions. The Kenya map has all 47 simplified county boundaries, but curated county descriptions cover only seven locations; other selections honestly identify the county and prompt comparison. The Wangari timeline is a selected four-event learning sequence, not a complete biography. Wildlife remains a small field guide, not a full 3D world.
- Client-only curated Ask and keyword guards are not a production safety system. Parent sign-in, consent, cloud sync, durable quotas, reporting, server moderation and live Clerky generation are not enabled.
- External reference links show a grown-up prompt. Reference websites, availability and content rights must be assessed before production inclusion; public references do not imply endorsement or reuse permission.

## Expanded discovery verification

- Browser smoke checks opened every one of the 33 discovery routes and 19 feature routes. Each rendered a heading and content; desktop content width matched the 1348-pixel body and no broken discovery images were observed. These checks complement visual inspection; they are not a claim of exhaustive usability testing.
- Inspected light/dark library and reading screens, home, original story, mobile labs and tablet Kenya map. Sampled phone and tablet content widths remained 360/360 and 753/753. Fixed navigation labels that could remain too long after switching from desktop to phone; labels now respond directly to CSS breakpoints.
- Confirmed the complete Nia story changes from the 12–14 edition to the simpler 6–8 edition, including both supporting sections and reflection.
- Light Mixer reached full white at RGB 255/255/255. Circuit switch opening showed no current; 7 V / 20 ohms displayed 0.35 A and 2.45 W in the older edition. Moon drop at 3 m reported 1.92 seconds. Gear ratio 12:12 at 20 rpm displayed 20 rpm in the opposite direction; start/pause worked.
- Kenya loaded 47 selectable county paths. Search selected Kilifi and showed the coastal explanation; 2004 selected the Nobel Peace Prize timeline entry.
- The ages 6–8 space quiz completed with 3/3, explanatory feedback and no duplicate point award for an already completed quiz. Separate question banks for all three bands passed data validation.
- Camera recognition, live voice conversation and AI-assisted creation are excluded; there are no teasers or enabled integrations. No model requests are made. Updated service-worker starter cache includes the new content and activity modules, styles and compact branding. Offline disconnection testing remains outstanding.

## Compact chat and quiz release

- 24 Node tests cover history redaction/expiry/opt-in, answer shuffling, complete age editions, model eligibility and mocked draft/review gating. A mocked pipeline test is not a live AI integration test.
- All 53 app routes (33 discoveries and 20 feature routes) opened at phone width; all 53 also opened at tablet and web widths. The 159 browser smoke checks found no horizontal overflow or broken loaded images. Visual checks sampled home, chat, history, reader, labs, maps, quizzes, settings and both colour modes; this is not a formal accessibility audit.
- The phone composer measured 46px for both field and send button, with a 0px difference between their vertical centres. History search, new conversation, reopening a two-question chat and following History settings worked.
- Chat body scroll height matched its viewport height and only the transcript was vertically scrollable. The header stayed below the main topbar; the single-line composer remained in place. External references were compact labelled cards.
- The revised ages 6–8 space quiz completed 3/3 despite shuffled positions, without awarding duplicate completion points. All 27 question editions and shuffled correct indexes passed validation.
- Header copy visibly rotated; its sampled mobile heading height remained 63.75px before and after. Rotation is deliberately paused for reduced motion and while a form control has focus.
- Native iOS keyboard/visual viewport and GPU-enabled 3D testing remain outstanding. Real provider calls, web crawling and AI review are not enabled or claimed.

- Final credit placement: one official ClerkOps logo link in the home footer, none in Chat or Play. Chat has a custom 5px rounded scrollbar; its body remains non-scrolling.
