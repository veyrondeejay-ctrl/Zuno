# ZUNO Cube Lab

## Provenance

Adapted with the owner's instruction from their private repository `veyrondeejay-ctrl/OgilvyPresents`, `cube-puzzle.js` on `main` (tree commit `773fa15fd239d63843385b177bedf0e8d6f2dedd`, file last modified 20 October 2026). The GitHub connection confirmed the owner's administrative/pull/push access. This is their .Presents model, not a downloaded third-party cube game. The render/UI are newly written for ZUNO. No additional library or external asset is required.

The reversible integer quarter-turn model is preserved. Changes: optional 2×2 size; visual face-colour solved detection; deterministic challenges; keyboard-operable CSS 3D view; ZUNO blue, cyan, lime, pink, gold and violet; shape-coded stickers; age-based difficulty; saved sequential progression.

## Integration

- Import `{cubePage,mountCube}` from `./cube.js` and add `cube.css` after the main styles.
- Route `#/play/cube/1` through `cubePage(age,level,{admin:verifiedAdminBoolean})`.
- Mount with `mountCube({reduced:boolean,toast:fn,onComplete:fn})`; retain and call the returned cleanup function before replacing the page.
- `onComplete` receives `{game:'cube',age,level,moves,hints}` once when the actual cube is solved. The cube saves completion to browser-local `zuno-cube-progress-v1` first. Parent can record the daily play activity.
- `cubePage` rejects locked higher levels. Only pass `admin:true` after verifying the server-admin session. No local admin toggle exists here.
- Parent game catalogue should expose a separate Cube Lab card with 20 challenges per reading band.

## Mechanics

Little Explorers start with a 2×2 cube; level 11 introduces a 3×3. Older bands use 3×3 throughout, with deeper scrambles. All 60 editions are deterministically scrambled using valid quarter turns and have tested inverse solutions. Every face has 4/9 stickers, never missing or duplicated.

Six pairs of labelled buttons turn faces clockwise or anticlockwise, as viewed straight at that face. Three view buttons and arrow keys change the view without making a puzzle move. Colour-independent shapes appear on every sticker. Undo reverses only player moves. Restart returns to the same challenge rather than marking it complete. A clue identifies one inverse turn in the reduced current trail; the child still makes that turn. There is no fake solve/reward button, timer, life loss or penalty for hints.

The 3D interface uses native CSS transforms with no WebGL dependency, and remains usable on devices without a GPU/WebGL context. Reduced-motion mode removes transitions.

## Verification

`node --test tests/cube.test.mjs` passes five tests covering both sizes, every outer-face quarter turn, inverse/four-turn identity, all 60 deterministic/reversible unsolved challenges, sticker grids, invalid moves, whole-cube orientation, age difficulty and level guards. Parent still needs browser layout/interaction QA when integrating.
