# Bundled Fonts

These are unmodified upstream font files bundled for deterministic, offline, or self-hosted output. Both fonts are distributed under the SIL Open Font License 1.1. Huninn includes Hanzi derived from the Apache-2.0-licensed Kosugi Maru; the applicable Apache license is included beside the font.

## Contents

| Typeface | File | Upstream | Bundled version |
| --- | --- | --- | --- |
| Quicksand | `quicksand/Quicksand[wght].ttf` | [Google Fonts repository at `c4d10b2`](https://github.com/google/fonts/tree/c4d10b2a6e42723c8bbac29eef4fcadf855764b6/ofl/quicksand) | Version 3.006, variable weight 300-700 |
| Huninn | `huninn/jf-openhuninn-2.1.ttf` | [justfont release](https://github.com/justfont/open-huninn-font/releases/tag/v2.1) | 2.1 |

Integrity checksums:

```text
39c9b64223561f56aaff6062a6f04063c4fc86809ad6768722c06614d977e1cc  quicksand/Quicksand[wght].ttf
9d5bf4932d31fe94c18cd8cfddc98bc1b14ce10f4e354c682179db290a99c825  huninn/jf-openhuninn-2.1.ttf
```

## Usage

Quicksand and Huninn are bundled fallbacks for friendly, beginner-oriented products, not a required Soft Syntax pairing. Choose a different family when the product's subject, audience, reading needs, or intended voice calls for one, and preserve a suitable established typeface during restyles.

When this pairing is appropriate, reuse a project's correctly loaded copies when available. Otherwise, copy the required font file and every license or notice listed under Redistribution Rules into the generated project. Huninn requires both `LICENSE.txt` and `APACHE-2.0.txt`. Huninn is substantially larger than Quicksand, so include it only when the project needs self-hosted Traditional Chinese support.

```css
@font-face {
  font-family: "Quicksand";
  src: url("./Quicksand[wght].ttf") format("truetype");
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
}

@font-face {
  font-family: "Huninn";
  src: url("./jf-openhuninn-2.1.ttf") format("truetype");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

html {
  font-family: "Quicksand", "Huninn", sans-serif;
}
```

Adjust asset URLs to the target project. Keep Quicksand first so Latin glyphs use Quicksand and Traditional Chinese glyphs fall through to Huninn.

## Redistribution Rules

- Keep `quicksand/OFL.txt` with every redistributed copy of Quicksand.
- Keep `huninn/LICENSE.txt` with every redistributed copy of Huninn.
- Keep `huninn/APACHE-2.0.txt` with Huninn to preserve the license for its Kosugi Maru-derived Hanzi.
- Do not sell either font by itself.
- Do not relicense the font files under the skill or application license.
- Do not imply endorsement by the font authors or copyright holders.
- Quicksand reserves the font name `Quicksand`; Huninn reserves `open huninn` and `huninn`.
- Format conversion, subsetting, glyph changes, and some metadata changes create a Modified Version under OFL 1.1. Do not keep a Reserved Font Name on a modified version without the copyright holder's written permission.

Use an official upstream webfont unchanged when a web-optimized format is required and its provenance can be verified. This README summarizes operational guidance; the adjacent license files are authoritative.
