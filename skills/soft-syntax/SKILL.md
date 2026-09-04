---
name: soft-syntax
description: >-
  Design, build, restyle, review, or plan responsive websites and create original
  pictorial logos or illustrations with approachable minimalism and gentle
  playfulness: warm rounded typography, bright neutral canvases, soft flat
  surfaces, restrained contextual color, clear hierarchy, simple 2D imagery,
  and calm moments of delight. Use whenever the user asks for approachable,
  friendly, warm, or softly playful minimalism, or for a
  childlike-but-not-childish interface, especially for learning products, resource libraries,
  onboarding flows, course catalogs, program pages, knowledge products, or
  beginner-friendly technical experiences. Also use for friendly soft-flat
  pictorial marks, characters, mascots, empty-state art, hero illustrations,
  and product metaphors. Do not use merely because a site is sparse, contains
  cards, or uses bright colors.
compatibility: >-
  Requires source-file access for implementation. Browser or screenshot
  tooling is strongly preferred for visual verification. Image-generation
  tooling is optional; without it, create SVG when appropriate or provide a
  production-ready prompt and SVG construction plan.
license: MIT
---

# Soft Syntax

Create warm, structured digital experiences that reduce complexity without feeling empty or impersonal. Approachable minimalism provides the structure, gentle playfulness provides the emotional character, and soft flat design provides the visual language.

Minimalism removes distraction. Approachability comes from legible language, useful guidance, and forgiving interactions. Gentle playfulness adds curiosity and life through a few purposeful details rather than a layer of decoration.

The result should feel welcoming without becoming childish, lively without becoming noisy, and credible without becoming corporate or cold. Avoid both sterile minimalism that withholds context and friendly-looking interfaces that bury hierarchy under decoration.

## Operating Priorities

Optimize in this order:

1. Comprehension and a clear primary action
2. Accessible task completion and navigation
3. Scannable product or learning information
4. Responsive composition
5. Gentle playful character expressed through soft flat design
6. Decorative polish

## Invocation Mode

Infer the requested mode before working:

- **Build**: create the requested website or route and make it runnable.
- **Restyle**: inspect the existing product, preserve working behavior and brand requirements, then apply this system without creating a parallel component system.
- **Review**: do not edit. Return prioritized usability, visual-system, responsiveness, and accessibility findings with file or element references.
- **Plan**: provide a compact visual direction, page structure, token choices, and implementation notes without writing code.
- **Image**: create a requested pictorial mark or illustration. Honor the requested medium, format, and editability. Use a compatible image-generation tool when it suits the deliverable; construct native SVG for a requested editable vector; otherwise return a production-ready image prompt and SVG construction plan.

Unless the user asks for Review or Plan, complete the requested interface or image rather than only describing it.

## Start With Context

Before designing or editing:

- For interface work, identify the site's subject, audience, page goal, and single primary action.
- For standalone image work, identify the product meaning, intended use, target size and background, and one concept the image must communicate.
- Identify what may feel confusing, intimidating, or effortful to that audience. Reduce that friction with hierarchy and guidance, not decoration.
- Inspect the relevant routes, components, styles, assets, dependencies, and responsive conventions.
- Preserve established identity and accessible primitives when they work. Adapt this system to the product instead of replacing a coherent brand.
- Use realistic, subject-specific content. Do not fill the page with generic SaaS claims or repeated placeholder cards.
- For interface work, choose one primary page mode per route or distinct flow. If a route is ambiguous, infer its mode from the primary task rather than mixing all three within that route.

Before interface implementation, privately establish a compact direction for each affected route or flow:

1. One subject-specific visual idea
2. One neutral canvas family and one accessible action hue
3. One restrained signature treatment rooted in the product
4. One density target appropriate to the task
5. One gentle playful moment that supports curiosity, reassurance, or progress

Do not reuse the same palette, hero composition, or decorative signature across unrelated products.

For standalone image work, skip page mode selection and follow the meaning-first workflow in [references/illustration-language.md](references/illustration-language.md).

## Choose One Page Mode Per Route

A website may use different modes across routes or flows. Keep one mode dominant within each route so its sections still form a coherent experience.

### Structured Browse

Use for libraries, catalogs, pathways, search, filters, indexes, and comparison flows.

- Favor a quiet canvas, compact rhythm, and consistent content anatomy.
- Group related controls in one tonal surface instead of coloring every control.
- Limit category color to small navigational cues paired with labels or symbols.
- Let titles, descriptions, and metadata follow a predictable scan path.
- Keep playfulness low-intensity: use it in category cues, progress, helpful empty states, or one small illustration.

### Expressive Welcome

Use for homepages, programs, campaigns, about pages, and orientation or conversion flows.

- Give the primary promise generous space and one obvious action.
- Choose one expressive device: photography, illustration, typography, color field, or product media.
- Ground the direction in the subject rather than a generic gradient hero.
- Support claims with outcomes, examples, testimonials, projects, or other concrete evidence.
- Let one medium- or high-intensity playful moment carry the page, usually through the hero, demonstration, or signature illustration.

### Focused Detail

Use for resources, courses, pathways, modules, programs, or product details.

- Use a quieter canvas and denser information structure than the welcome mode.
- Make overview, metadata, deeper content, progress, and the primary action easy to relate.
- Use category styling as orientation, not as a second visual system.
- Keep one obvious next step while preserving access to supporting information.
- Keep playfulness quiet and supportive through progress, completion, contextual icons, or encouraging guidance.

A Structured Browse route may contain one Expressive Welcome feature. Do not give every section within one route a different visual mode.

## Establish the System Before Decoration

Read [references/design-system.md](references/design-system.md) before choosing tokens, implementing styles, or reviewing visual-system and accessibility decisions.

- For a new standalone product without an established or mandated typeface, use Quicksand for Latin text and Huninn (`jf open 粉圓`) for Traditional Chinese. Preserve a suitable product typeface when extending or restyling an existing product.
- Prefer the unmodified files in [assets/fonts](assets/fonts) when the project needs deterministic, offline, or self-hosted typography. Follow the bundled font notes and copy every required license and notice with an asset; Huninn requires both `LICENSE.txt` and `APACHE-2.0.txt`. Do not convert or subset a font while retaining a Reserved Font Name.
- Use bright neutral canvases and dark, slightly softened text rather than pure black on pure white everywhere.
- Define color by role: canvas, surface, ink, muted text, border, action, accent, focus, success, warning, and error.
- Derive exact colors from the product subject and verify contrast. Do not choose a house hue before understanding the context.
- Use one action hue and at most one non-semantic contextual accent in a viewport. Small labeled category cues and an illustration's internal palette may add semantic colors, but they must not compete with actions or become a second interface palette. An expressive region may use a gradient only when it has a clear job.
- Set the container, type scale, spacing, and responsive behavior before adding imagery, shadows, or motion.
- Keep equivalent components consistent in shape, control height, icon family, and interaction behavior.
- Keep an element only when it improves comprehension, hierarchy, feedback, navigation, or emotional tone.

## Compose the Page

Read [references/patterns.md](references/patterns.md) when the page contains navigation, search and filters, content cards, pricing, FAQs, details, or a marketing flow.

Use quiet full-width chapters and constrained content regions to create rhythm, but let the subject determine their sequence and proportions. Keep text left-aligned by default; center only compact groups when symmetry improves comprehension.

Every chapter needs one clear job. Avoid both a repetitive wall of equal cards and a page made from unrelated showcase sections. Establish dominance, supporting information, and a deliberate ending.

## Gentle Playfulness

Every new design needs at least one recognizable but restrained playful moment. During a restyle, fit its intensity to the established brand. The moment should make the experience feel curious, encouraging, or alive without competing with the primary task.

Draw playfulness from the subject rather than a stock mascot or decorative pattern. Good sources include:

- A simple 2D character, creature, object, or metaphor tied to the content
- Soft asymmetry in one illustration, crop, label, or section boundary
- One surprising accent color used in a small, meaningful area
- Friendly microcopy that clarifies rather than performs cuteness
- A brief microinteraction that acknowledges progress or successful input
- A thoughtful empty, loading, success, or completion state

Use a playfulness budget:

- Give each page one primary playful moment; keep supporting moments smaller and quieter.
- Concentrate personality in states or regions where reassurance, discovery, or progress matters.
- Keep ordinary controls predictable. Do not turn every button, card, or label into a novelty.
- Never use playful treatment to soften serious errors, obscure consequences, or delay task completion.

## Soft Flat Design

Build the visual language from clean 2D shapes, typography, spacing, tonal surfaces, and simple illustration.

- Let flat color, spacing, and borders establish most hierarchy.
- Use shadow only to explain interaction, overlay, or meaningful elevation; keep depth levels few and consistent.
- Prefer simple silhouettes, broad color shapes, restrained outlines, and little or no simulated texture.
- Avoid photorealistic 3D, glossy materials, dramatic lighting, and ornamental depth unless the product explicitly requires another direction.
- Preserve affordance: buttons, inputs, selected states, draggable items, and overlays must remain recognizable without relying on realism.
- The layout should remain understandable if decorative imagery and shadows are removed.

## Implement for the Existing Stack

- Reuse the project's framework, routing, styling approach, tokens, and accessible components.
- Prefer shared tokens over repeated literals, but do not introduce an entire design-system abstraction for one small page.
- Use semantic landmarks and native controls. Build accordions with `details` and `summary` or accessible buttons, not clickable generic containers.
- Preserve loading, empty, error, disabled, selected, and authenticated states during a restyle.
- Add dependencies only when they materially improve the result and fit the project.
- Keep images responsive, reserve their space to prevent layout shift, and use accurate alt text. Hide decorative SVGs from assistive technology.

## Responsive Behavior

Design mobile as a deliberate composition, not a scaled desktop page.

- Use fluid outer gutters that remain comfortable from narrow mobile to wide desktop.
- Reduce multi-column layouts before cards, controls, or text become cramped; choose breakpoints from the rendered content.
- Collapse navigation before labels collide, with a visible trigger, logical focus order, Escape handling, and no hidden focusable content.
- Stack hero, filter, pricing, and detail regions in reading order on narrow screens.
- Remove desktop-only scale or overlap emphasis on mobile.
- Keep touch targets about 44 by 44px, even when the visible control is smaller.
- Test long headings, realistic descriptions, empty results, localization, and narrow screens for overflow.

## Interaction and Motion

- Keep ordinary feedback brief and calm.
- Let hover change one primary property, such as color, shadow, or a very small translation. Do not combine several attention-seeking effects.
- Reserve one slightly more characterful microinteraction for the page's primary playful moment when it supports feedback or discovery.
- Never auto-play audible media or make every card animate.
- Do not let hover change layout.
- Provide a visible `:focus-visible` treatment that remains legible on every surface.
- Honor `prefers-reduced-motion`; preserve immediate state feedback while removing nonessential movement.
- Do not rely on hover to reveal information required to complete a task.

## Content and Imagery

When creating a pictorial mark, character, mascot, spot illustration, empty-state image, hero image, or product metaphor, read [references/illustration-language.md](references/illustration-language.md). Choose its usage-specific profile rather than forcing character treatment onto every image.

For a standalone Image request:

1. Honor the requested medium, output format, transparency, dimensions, and editability before selecting a tool. If the user requests SVG or an editable vector, use source-file tools to construct native SVG rather than substituting a raster asset.
2. For other finished-image requests, use a compatible image-generation tool when one is available and can produce the required deliverable.
3. If direct generation is unavailable but source-file tools are available and SVG suits the request, construct a native SVG.
4. Otherwise, provide a production-ready image prompt and an SVG construction plan. State clearly that no final image was synthesized.
5. Apply the reference's usage-specific constraints and acceptance checks to the final asset, SVG, prompt, or plan.

- Write in active voice and speak directly to the learner or customer.
- Lead with the outcome, then explain the content, technology, or process.
- Use short sentence-case headings and specific verb-plus-result actions.
- Prefer real people, relevant working or learning settings, product screens, and original flat illustrations rooted in the subject.
- Keep one icon family with consistent stroke, optical size, and container treatment.
- If suitable imagery is unavailable, use a purposeful graphic composition or honest placeholder rather than fabricated third-party assets.

## Independence Guardrails

Approachable minimalism is a design method, not a fixed visual template. Each result needs one coherent signature drawn from the product's subject, audience, or content.

Avoid these failure modes:

- Reusing the same palette across unrelated projects
- Assigning fixed colors or gradients to generic content categories
- Defaulting to any signature treatment before the product context justifies it
- Copying exact dimensions, breakpoints, card proportions, or page recipes from a reference site
- Thin low-contrast type, especially at small sizes or in Chinese text
- Empty-looking layouts that remove orientation, context, or useful metadata
- Glassmorphism, neon glows, chrome-like 3D, or other decoration that conflicts with the requested direction
- Pills on every control and excessive corner-radius variation
- Generic dashboard composition for a content-led experience
- Card walls where every item has equal weight and animation
- Uncontrolled cuteness that weakens information hierarchy or professional credibility

## Verification

After Build or Restyle implementation, run the project's relevant checks and visually inspect each affected route when browser tooling is available.

In Review mode, use browser inspection and read-only checks only. Do not run commands that may write caches, snapshots, formatted output, generated files, or lockfile changes. Report defects as prioritized findings without changing source.

In Image mode, apply the acceptance checks in [references/illustration-language.md](references/illustration-language.md). Inspect a generated asset or SVG on its intended background and at its smallest target size. If only a prompt and construction plan are possible, confirm that they define the meaning, hierarchy, output format, and usage-specific constraints.

For interface Build, Restyle, or Review work, inspect at a narrow mobile width, a wide desktop width, and both sides of every breakpoint affected by the work:

- The primary action is immediately obvious.
- Heading wrapping, body measure, Chinese punctuation, and metadata remain readable.
- The container, grid transitions, section rhythm, and mobile stacking match the selected mode.
- Navigation, forms, menus, accordions, and media controls work with keyboard input.
- Focus, hover, pressed, disabled, loading, empty, and error states are distinguishable.
- Text and background combinations meet WCAG AA, including gradients and image overlays.
- No content clips or creates horizontal overflow.
- Motion reduction works and hover causes no layout shift.
- The browser console is free of new errors.
- The page contains a recognizable moment of gentle playfulness that supports curiosity, reassurance, or progress without distracting from the primary task.
- Surfaces read primarily through color, spacing, borders, and typography; depth effects remain scarce and functional.
- The result feels warm and uncluttered, belongs to its subject, and does not resemble a reusable theme demo.

In Build or Restyle mode, fix visible or behavioral defects and inspect again. In Image mode, revise or regenerate the result until it passes the applicable image checks. In Review mode, report defects without editing. If browser tooling is unavailable for interface work, state that visual verification was not performed; code inspection is not a substitute.

## Completion Report

Keep the report concise.

For interface work, state:

1. The selected page mode for each affected route or flow, primary action, product-specific signature, and primary playful moment
2. What was implemented, changed, planned, or found in Review mode
3. Verification performed and any remaining limitation

For Image mode, state:

1. The concept, subject, focal point, and intended use
2. Whether a generated asset, SVG, or fallback prompt and construction plan was delivered
3. Verification performed and any remaining limitation
