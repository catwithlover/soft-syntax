<div align="center">
  <img src="docs/assets/logo.svg" alt="Soft Syntax Lightkeeper" width="180" />
  <h1>Soft Syntax</h1>
  <p><em>A gentler grammar for digital products.</em></p>
  <p><a href="https://catwithlover.github.io/soft-syntax/"><strong>Website</strong></a></p>
  <p><strong>English</strong> · <a href="README.zh-TW.md">繁體中文</a></p>
</div>

**Soft Syntax** is a reusable design skill for clear, accessible, responsive interfaces shaped by approachable minimalism, restrained playfulness, warm typography, and soft flat imagery.

## Features

- Designs new interfaces, restyles existing products, reviews designs, and plans implementation.
- Defines visual direction for original logos and illustrations, and generates them when the host environment provides a compatible tool.

## Design Principles

- **Clarity first:** every page has one primary action and a clear information hierarchy.
- **Warmth through structure:** approachable language, typography, spacing, and guidance do more work than decoration.
- **Play with purpose:** delight supports curiosity, reassurance, discovery, or progress.
- **Flat, not lifeless:** solid shapes, tonal surfaces, borders, and negative space create depth without decorative effects.
- **Specific, not templated:** each result draws its identity from the product, audience, and content.
- **Accessible by default:** interaction, responsiveness, and state clarity are part of the visual system.

## Installation

Install with Skills CLI:

```bash
npx skills add catwithlover/soft-syntax
```

Or install manually for your preferred Agent Skills-compatible tool:

```bash
git clone https://github.com/catwithlover/soft-syntax.git
cp -r soft-syntax/skills/soft-syntax /path/to/your/agent/skills/
```

Reload or restart your agent tool after installation so it can discover the skill.

## Usage

With [`skills/soft-syntax`](skills/soft-syntax) installed, describe the product, audience, page goal, and desired result in natural language:

```text
Design a responsive course discovery page for adults learning programming for
the first time. Make it easy to compare courses, filter them by topic and
difficulty, and understand where to begin. Keep the experience calm and encouraging.
```

## Demos

The [`demos/`](demos/) directory collects before/after captures of real websites restyled with the skill — currently the [Selenium homepage](demos/selenium/) — with notes on the strategy, palette basis, and decisions behind each result.

## Image Generation

If the host harness or model runtime provides an image-generation tool, Soft Syntax can guide it with the included [illustration language](skills/soft-syntax/references/illustration-language.md). Describe what the product does, what the logo should convey, and where it will be used. Do not ask it to imitate an existing logo.

```text
Use Soft Syntax to design and generate a pictorial logo for [project name].
The product helps [audience] achieve [outcome]. The logo should convey
[one core concept]. Choose a subject that makes the concept clear at a glance.

Follow the Soft Solid Semantic Imagery style: use one dominant, softly rounded
silhouette; include only the details needed to identify the subject; and use a
small contextual palette, generous negative space, and one meaningful focal
point. Build the form with solid fills, negative space, and overlapping shapes.
Avoid gradients, shadows, outer strokes, decorative scenery, text, and
competing metaphors.

Honor the requested format first. If an editable SVG is requested, construct
native SVG with source-editing tools. For other formats, use a compatible
image-generation tool when available and create the image on a transparent
square canvas. If neither route can produce the requested deliverable, provide
a production-ready image prompt and an SVG construction plan.
```

The same approach can guide characters, empty states, hero imagery, and product metaphors.

## Visual Language

Soft Syntax combines three layers:

1. **Approachable minimalism** creates clear hierarchy with a restrained, practical structure.
2. **Gentle playfulness** adds just enough curiosity, warmth, and life.
3. **Soft flat design** uses typography, solid shapes, subtle surfaces, and purposeful imagery.

For original artwork, Soft Solid Semantic Imagery uses one dominant silhouette, only the details needed for recognition, a restrained palette, and one meaningful focal point. It can depict creatures, plants, natural forms, celestial bodies, objects, and abstract product metaphors without turning everything into a mascot.

## Requirements

- Browser or screenshot tools for complete visual checks
- An image-generation tool supplied by the host harness or model runtime for direct generation

## License

Soft Syntax source, documentation, and logo are released under the [MIT License](LICENSE). The bundled Quicksand and Huninn files retain their upstream licenses; details are included in [`skills/soft-syntax/assets/fonts`](skills/soft-syntax/assets/fonts).
