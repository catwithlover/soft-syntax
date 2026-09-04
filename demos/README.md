# Demos

Before/after captures of real websites restyled with the [Soft Syntax skill](../skills/soft-syntax). Each demo shows what the skill produces on a real target: the untouched site ("before") and the same content rebuilt under the Soft Syntax system ("after").

Only screenshots and notes are tracked. The working pages that produce the "after" captures stay out of version control — demos are evidence, not products.

## Layout

```
demos/
  <site-id>/
    desktop-before.png   # live site, 1440px wide viewport, full page
    desktop-after.png    # restyled page, same viewport
    mobile-before.png    # live site, 390px wide viewport @2x, full page
    mobile-after.png     # restyled page, same viewport
    notes.md             # strategy, palette basis, decisions, verification
```

Keep capture settings identical for before and after so the comparison stays honest:

- Desktop: 1440 × 900 viewport, device scale 1, full-page capture.
- Mobile: 390 × 844 viewport, device scale 2, full-page capture.
- No hover states, dev tools overlays, or artificial content.

The demo commits are screenshots only. If a capture exceeds a few hundred KB, quantize the PNG before committing.

## Adding a demo

1. Pick a real, public page as the target and capture **before** at both sizes.
2. Restyle it following `skills/soft-syntax/SKILL.md`: confirm the strategy first (structural restyle or style override), sample the product's existing colors, and choose one page mode for the route.
3. Capture **after** with the same viewport settings.
4. Write `notes.md`: the chosen strategy and page mode, where the palette came from (what was sampled from the original), the primary action, the playful moment, what changed structurally, verification performed, and known limitations.

## Current demos

| Demo | Target | Strategy |
| --- | --- | --- |
| [selenium](selenium/) | [selenium.dev](https://www.selenium.dev/) | Structural restyle |
