# Design System Reference

Generate an approachable minimalist system from the product's subject and existing identity. The rules below define relationships and quality thresholds; they are not a fixed visual theme.

## Contents

- [Typography](#typography)
- [Color Construction](#color-construction)
- [Gentle Playfulness System](#gentle-playfulness-system)
- [Layout and Spacing](#layout-and-spacing)
- [Soft Flat Surfaces and Elevation](#soft-flat-surfaces-and-elevation)
- [Focus and Motion](#focus-and-motion)
- [Accessibility Floor](#accessibility-floor)

## Typography

### Choose a Product Voice

Choose type from the product's subject, audience, reading needs, and intended emotional voice. Typography is a strong identity signal, so do not repeat one pairing across unrelated products by default. When extending or restyling an existing product, preserve a suitable established typeface rather than introducing a competing system merely because the affected route or component is new.

For a friendly, beginner-oriented product without an established or mandated typeface, this bundled pairing is a practical fallback:

- **Latin:** Quicksand, preferably weights 400 through 700
- **Traditional Chinese:** Huninn (`jf open 粉圓`), an open-source Traditional Chinese rounded typeface released primarily under SIL Open Font License 1.1, with Kosugi Maru-derived Hanzi under Apache-2.0
- **Code and terminal content:** a neutral system monospace

Treat the pairing as an available resource, not the Soft Syntax voice. If the product needs greater editorial authority, technical precision, compact data density, cultural specificity, or another distinct character, choose a typeface that serves that need and state the rationale before implementation.

Unmodified upstream files and their licenses are bundled in [assets/fonts](../assets/fonts). Reuse a project's correctly loaded copies when available; otherwise use these assets for deterministic, offline, or self-hosted output. Read [the bundled font notes](../assets/fonts/README.md) before copying or loading either font, use the documented `@font-face` aliases, and include every required license and notice. Huninn requires both `huninn/LICENSE.txt` and `huninn/APACHE-2.0.txt`.

```css
:root {
  --ss-font-sans: "Quicksand", "Huninn", sans-serif;
  --ss-font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

html {
  font-family: var(--ss-font-sans);
}
```

When using this fallback, keep Quicksand before Huninn so Latin characters retain the intended voice while unsupported Traditional Chinese glyphs fall through to Huninn. Set the document language accurately, such as `lang="zh-Hant"`.

Do not assume every CJK weight exists. Inspect Chinese headings for synthetic bold artifacts. If heavy synthesis harms the glyphs, create hierarchy with size, spacing, color, and layout while keeping Chinese text at its supported weight.

### Type Relationships

Choose exact sizes within these relationships according to content length and viewport:

| Role | Guidance |
| --- | --- |
| Display | Roughly 2.5-4 times body size; reserve for one short thesis |
| Page heading | Roughly 1.8-2.5 times body size |
| Section heading | Roughly 1.4-1.9 times body size |
| Card heading | Roughly 1.1-1.35 times body size |
| Body | Start near 1rem; increase for long-form or beginner-oriented content |
| Label | Do not shrink below comfortable reading size to force content into a component |

Use fluid type for major headings when appropriate:

```css
:root {
  --ss-type-body: clamp(1rem, 0.96rem + 0.18vw, 1.125rem);
  --ss-type-heading: clamp(2rem, 1.45rem + 2.2vw, 3.75rem);
  --ss-type-section: clamp(1.5rem, 1.28rem + 0.9vw, 2.25rem);
}
```

- Use sentence case and short headings.
- Keep prose near 55-75 characters per line.
- Use line height around 1.5-1.7 for body copy and 1.1-1.3 for short headings.
- Create hierarchy with weight and space before adding more type sizes.
- Keep dense metadata readable; hiding it behind tiny type is not minimalism.

## Color Construction

### Build by Role

Choose colors in this order:

1. Select a neutral temperature that fits the subject: cool, balanced, or warm.
2. Define canvas, surface, ink, muted text, and border within that neutral family.
3. Select one action hue with WCAG AA contrast in every text and control pairing.
4. Select one contextual accent only if it adds meaning or a memorable subject cue.
5. Define a visible focus color, then add semantic success, warning, and error colors without promoting them into brand colors.

Do not default to green or teal. The action and accent hues should come from the product's identity, content, imagery, or subject matter.

### Neutral Relationships

- Canvas and surface should be close enough to feel calm but distinct enough to show grouping.
- Ink should be dark and slightly softened rather than pure black everywhere.
- Muted text must still meet contrast requirements at its rendered size.
- Borders should organize content without outlining every surface.
- Inputs may use a subtle neutral fill, but active and error states must remain visible.

### When Restyling an Existing Product

Unless the user explicitly asks for a new palette, the product's existing colors are the source material, not a suggestion:

1. Sample before choosing. Collect computed styles for canvas, surfaces, text, links, buttons, badges, and borders from representative components and states, plus the logo's fill colors and any documented brand tokens.
2. Read the existing scheme. Identify which hues recur, which color reads as the brand or action color, and which combinations are framework defaults or accidents.
3. Choose the basis. If the page has a discernible color plan, derive the new role palette from it. If it does not, start from the logo's colors and their pairing.
4. Adjust, do not replace. Tune lightness, saturation, temperature, and pairings so each role passes WCAG AA and organizes the page. Keep recognizable brand hues recognizable: shifting them for contrast is adjustment, swapping them for new hues is a rebrand and needs an explicit request or a stated rationale.
5. Record the basis. Note what was sampled and what was adjusted in the direction notes or completion report so the palette can be audited against the original.

### When Product Signals Are Weak

Do not solve missing identity cues by reusing a house palette. Infer a neutral temperature and action hue from the audience, task, content, and desired emotional tone, then state that rationale before implementation. If the missing context would materially affect brand fit, ask one concise question rather than silently applying a stock color recipe.

The accent is decorative unless its actual text pairing passes WCAG AA. Never infer accessibility from how dark or saturated a color appears.

### Color Budget

- Use one neutral canvas family throughout a page.
- Use one action hue consistently for equivalent actions.
- Use no more than one non-semantic contextual accent in the same viewport.
- Keep category colors to small cues and pair them with text, symbols, or placement.
- Do not assign permanent color recipes to generic categories such as courses, pathways, pricing plans, or technologies.
- If a gradient has no semantic, spatial, or narrative job, use a flat field instead.

### Category Color

When color genuinely helps distinguish categories:

- Create a small palette from the current product direction rather than technology brand colors.
- Keep perceived lightness and saturation reasonably balanced so one category does not appear more important by accident.
- Test every foreground pairing independently.
- Use labels or icons as the primary identifier; color is reinforcement.
- Treat labeled category cues and an illustration's internal palette as semantic content colors, not extra action or accent hues. If several are visible together, keep them small and omit any unrelated contextual accent that would make the interface feel like a second palette.

## Gentle Playfulness System

Playfulness should help people feel curious, reassured, or rewarded. It is successful when the interface still feels calm and credible after the playful element is noticed.

### Playfulness Budget

- Give each page one primary playful moment.
- Add supporting moments only when they are smaller, quieter, and tied to a different user need.
- Keep high-frequency controls conventional so the interface remains easy to learn.
- Spend personality where emotion matters: first orientation, discovery, progress, empty states, and completion.
- Keep warnings, destructive actions, privacy, payment, and serious errors direct rather than cute.

### Intensity by Mode

| Mode | Intensity | Suitable expression |
| --- | --- | --- |
| Structured Browse | Low | Category symbols, one offset shape, helpful empty state, subtle progress cue |
| Expressive Welcome | Medium to high | Hero illustration, product metaphor, subject-specific character, one memorable interaction |
| Focused Detail | Low | Contextual icon, progress marker, completion response, supportive inline guidance |

### Visual Ingredients

Choose one or two, not all of them:

- Soft asymmetry in a crop, silhouette, label, or section edge
- A small accent that breaks the neutral field for a clear reason
- A simplified creature, object, or metaphor connected to the subject
- Broad 2D shapes with restrained outlines and minimal interior detail
- A short microinteraction that acknowledges input, discovery, or progress
- Plain-language microcopy with warmth and specificity

Do not put faces on ordinary controls, vary every corner, scatter decorative doodles, or make every state perform. Repetition turns delight into visual noise.

### Flat Illustration Grammar

- Build illustrations from a small vocabulary of silhouettes, fills, and line weights.
- Use overlap and scale for depth before adding shadow or perspective.
- Keep palette roles consistent with the interface; illustrations should not introduce a second color system.
- Allow slight asymmetry and imperfect rhythm so the image feels alive without becoming messy.
- Preserve a recognizable silhouette at small sizes.
- Use animation only when a still illustration already communicates successfully.

## Layout and Spacing

### Spacing Rhythm

Use a compact scale with a deliberate jump between component spacing and section spacing:

```css
:root {
  --ss-space-1: 0.25rem;
  --ss-space-2: 0.5rem;
  --ss-space-3: 0.75rem;
  --ss-space-4: 1rem;
  --ss-space-5: 1.5rem;
  --ss-space-6: 2rem;
  --ss-space-7: 3rem;
  --ss-space-8: 4.5rem;
}
```

- Use the smaller half inside components and the larger half between page chapters.
- Similar relationships should share spacing; do not vary gaps only to make a layout look organic.
- Dense browsing views may compress vertical spacing, but controls and reading targets must remain comfortable.

### Containers

Choose width from the content rather than a house breakpoint:

- Reading and editorial content: favor a narrow measure.
- Forms and decisions: keep related controls within one visually connected region.
- Catalogs and comparison views: use a wider container only when another column improves scanning.
- Marketing pages: allow occasional full-width media or color, while keeping text on a readable measure.

```css
.page-shell {
  width: min(100% - 2 * clamp(1rem, 3vw, 2.5rem), var(--content-max, 74rem));
  margin-inline: auto;
}

.prose {
  max-width: 68ch;
}
```

Treat `74rem` as a fallback, not a signature. Adjust it when the content, existing system, or composition calls for a different measure.

### Responsive Grids

- Start from one column and add columns only when each item retains a useful reading width.
- Prefer `minmax()` and container queries when they fit the existing stack.
- Choose breakpoints where the actual design becomes cramped, not from a memorized list.
- Let mobile cards grow with content; do not preserve desktop card heights on narrow screens.

```css
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);
}
```

## Soft Flat Surfaces and Elevation

Treat the interface as a small set of mostly flat planes. Separate them first with spacing, background tone, border, and typography.

Use a small shape vocabulary:

- Controls: modest rounding that preserves a clear control silhouette
- Content surfaces: medium rounding
- One dominant feature or media surface: optionally softer and larger
- Pills: reserve for compact categories, filters, and statuses whose shape communicates grouping

Choose the actual radius from the existing product or the visual direction. Keep equivalent neighboring components identical.

Prefer borders and tonal contrast for dense information. Use shadow to clarify layering or interactivity, not to make every card float.

- Keep ordinary content on the base plane.
- Use a raised plane for interactive or temporarily emphasized content only when the relationship needs clarification.
- Reserve the highest plane for menus, dialogs, popovers, and other overlays.
- Avoid simulated material, bevels, gloss, ambient lighting, and perspective as default styling.
- Ensure buttons and inputs remain recognizable through shape, contrast, labels, and states rather than realistic depth.

```css
:root {
  --ss-shadow-rest: 0 1px 2px rgb(28 34 30 / 8%);
  --ss-shadow-raised: 0 10px 30px rgb(28 34 30 / 10%);
}
```

## Focus and Motion

```css
:focus-visible {
  outline: 3px solid var(--ss-color-focus, currentColor);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- Keep ordinary feedback within a few hundred milliseconds.
- Animate one meaningful property rather than stacking movement, scaling, shadow, and color.
- Reserve one slightly more expressive response for the primary playful moment, and tie it to a real event such as progress or completion.
- Remove movement in reduced-motion mode while retaining immediate state feedback.
- Do not make required information hover-dependent.

## Accessibility Floor

- Meet WCAG AA for text and interactive states in the actual rendered context.
- Check text over gradients and images against the least favorable region.
- Keep interactive targets about 44 by 44px.
- Never encode difficulty, progress, status, or selection with color alone.
- Give images meaningful alt text and hide decorative SVGs with `aria-hidden="true"`.
- Label carousels, support keyboard control, and provide a pause mechanism for automatic movement.
- Keep native semantics wherever possible.
- Inspect Traditional Chinese line breaking, punctuation placement, fallback glyphs, and synthetic weight before considering the typography complete.
- Do not use playful color, shape, character, or motion as the only indication of status or required action.
