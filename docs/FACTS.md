# Did You Know content bank

`dist/facts-bank.js` contains **300 distinct base facts and 900 reading editions**. The text is original ZUNO educational copy, written in three forms for ages 6–8, 9–11 and 12–14. The youngest form introduces a concrete idea; the middle form defines or explains it; the oldest form adds a mechanism, relationship, limitation or evidence distinction. These are complete authored texts, not runtime generated answers or the same sentence with an age label appended.

The 15 editorial collections contain 20 facts each: space, weather, Earth science, ocean, wildlife, plants and fungi, the human body, physics, materials, number, geometry, computing, art and interpretation, Kenya, and scientific thinking. The `category` field uses existing ZUNO discovery categories so the bank can appear within the app without inventing navigation sections.

Each fact has a stable `id`, `category`, `title`, `levels`, reference organisation in `source`, and HTTPS `url`. `factForAge(fact, age)` returns the requested reading edition, with a 9–11 fallback for an invalid band. No network connection or AI call is required to read the bank.

## References and editorial boundaries

Reference metadata links to primary science, museum, research and educational organisations. Some links are subject collections intended for further reading, rather than a claim that a single landing page contains every detail. Specific links are used for planetary topics, the water cycle, corals, elephant anatomy, fungal biology and Kenyan heritage. Kenyan heritage details were checked against UNESCO World Heritage, National Museums of Kenya, the Kenya Law Reform Commission and Nobel Prize records. The bank avoids fragile animal-population totals, changing moon counts and unsupported numerical superlatives.

The copy is not copied from these organisations, and they have not endorsed or approved ZUNO. It should not be labelled as independently reviewed by an educator or as officially curriculum approved. The body entries explain general anatomy and physiology; they do not diagnose, prescribe or provide personal health instructions. The learning interface should retain source links and allow corrections to be reported.

## Checks

`node --test tests/facts-bank.test.mjs` checks the 300/900 counts, unique IDs and titles, non-placeholder text, three distinct editions, expanding context for older readers, secure reference metadata and primary-institution coverage.
