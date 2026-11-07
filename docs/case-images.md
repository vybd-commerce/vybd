# Case study images

One image per card, named by the `slug` in `src/data/cases.ts` (e.g. `spices.jpg`).

- Portrait, about 800×880px or larger (cards are 200×220, so this covers 2× and up)
- JPG or WebP, under ~250KB
- Product or packaging shot, no baked-in text (the card prints the name and lane)

Add the path to `CASE_IMAGES` (looped across all cards) or set `image:` on one
card. Cards blur images while `blur: true`; flip it to `false` once the
high-quality version is in.
