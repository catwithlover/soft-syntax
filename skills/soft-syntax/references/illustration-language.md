# Soft Solid Semantic Imagery

Use this reference when creating a pictorial mark, character, mascot, spot illustration, empty-state image, hero image, or product metaphor. Do not apply it automatically to ordinary interface icons, photography, diagrams, or data visualization.

The style compresses one meaningful idea into a bold, quiet flat image:

> One dominant soft silhouette + minimum identifying cues + one semantic focal point + restrained color roles + generous quiet space.

The result should feel friendly, composed, and gently playful. It may be charming or slightly awkward, but should not become infantile, anime-like, or generically corporate.

## Begin With Meaning

Write one plain sentence that describes the image before drawing it:

- A seedling shelters a new leaf.
- A small moon guides a signal home.
- A browser holds a cloud camera.
- A creature carries a message.

If the idea needs several sentences or a list of symbols, simplify it. One image should communicate one primary metaphor.

Choose one semantic focal point. It may be:

- An object being carried, held, protected, revealed, or transformed
- A defining feature of the subject
- A clear action or direction
- One concentrated accent color
- A deliberate cutout or negative-space relationship

Supporting details may explain that focal point, but must not introduce competing metaphors.

## Choose the Subject Freely

The language is not limited to animals or mascots. Select the subject that makes the product idea easiest to understand:

- Animals, plants, fungi, microbes, or imagined organisms
- Seeds, leaves, flowers, shells, stones, waves, clouds, or weather
- Planets, moons, stars, comets, or other celestial forms
- Tools, devices, containers, signals, or familiar objects
- A fusion of two or three product concepts into one readable form
- An abstract form when its behavior or silhouette still communicates clearly

Do not add a face merely to make a subject friendly. Anthropomorphism is optional and should strengthen the concept rather than become the concept.

## Shape Language

- Build the image around one large, continuous, solid mass that carries most of the visual weight.
- Fuse the main structure when possible instead of assembling it from many detached parts.
- Give the outer silhouette broad, softly rounded contours with confident weight.
- Allow slight asymmetry, imperfect rhythm, or a hand-cut-paper quality without making the geometry sloppy.
- Preserve the subject's distinctive silhouette. Do not force every plant, planet, object, or creature into the same bean shape.
- Let smaller limbs, leaves, wings, rings, handles, or props remain visibly subordinate to the main mass.
- Prefer teardrops, ovals, lobes, and rounded wedges for supporting organic forms when they suit the subject.
- Allow precise or angular interior geometry when it communicates function, such as an aperture, signal, window, or tool edge.
- Avoid thin protrusions and fragile gaps that disappear at the intended display size.

Silhouette comes before interior detail. The subject, orientation, and basic action should remain understandable when shown as one solid color.

## Detail and Character

Keep only details that identify the subject, explain the action, or add the minimum useful amount of life.

- Establish character through posture, gaze, proportion, and the relationship to the focal object.
- Simplify anatomy without erasing the few features needed to recognize the subject.
- When a face is useful, use the fewest marks that create the intended awareness or direction.
- One or two small eyes, an optional pupil, or one short mouth mark is usually enough.
- Omit eyebrows, eyelashes, blush, elaborate expressions, and decorative facial marks unless the concept specifically depends on one.
- Do not place faces on routine controls or turn every object in a composition into a character.

The viewer should notice the overall form and idea before noticing the face.

## Negative Space, Overlap, and Lines

- Use cutouts, overlap, and occlusion to explain structure before adding outlines.
- Treat the surrounding canvas color as an active shape for openings, separations, and functional detail.
- Use broad internal cutouts rather than thin carved lines when possible.
- Keep outlines absent by default. Never trace the entire outer silhouette.
- Use a very small number of round-capped lines only for indispensable features such as an antenna, whisker, fold, orbit, or signal.
- Keep line weight optically compatible with the solid shapes and visible at the target size.

Depth should come from shape relationships, not simulated lighting.

## Color Roles

Derive color from the current product and context. Do not reuse the palette of a reference image by default.

- **Dominant color**: carries the primary silhouette.
- **Supporting color**: separates a subordinate form or secondary structure.
- **Focal color**: marks the semantic focus, contact point, action, or defining feature.
- **Canvas-neutral color**: creates eyes, openings, or negative-space cuts and must work on the actual background.

For a compact mark, default to no more than three chromatic roles plus a neutral. Larger spot or hero illustrations may use more colors when each has a clear role and the focal hierarchy remains intact.

- Favor solid fills with deliberate contrast.
- Keep the dominant mass visually dominant rather than distributing color evenly.
- Concentrate the strongest contrast near the semantic focal point.
- Do not assign a different color to every body part or supporting shape.
- Test the actual foreground and background pairings; canvas-neutral does not always mean white.
- Avoid gradients, glows, translucent overlays, material texture, realistic highlights, and modeled shading.

## Composition and Motion

- Give the subject one clear orientation, lean, reach, orbit, growth direction, or other restrained sense of movement.
- Balance that movement with a stable overall mass so the image feels calm rather than kinetic.
- Leave enough quiet space for the silhouette to read immediately.
- Keep the subject centered or intentionally offset according to its direction and placement in the page.
- Avoid a badge, panel, or geometric container unless it is part of the product metaphor or required by the placement.
- Keep text and detailed scenery outside the image unless the requested format specifically needs them.
- Use a transparent or quiet background when portability matters.

## Adapt to the Usage

### Pictorial Mark or Logo

- Apply the strictest reduction: one silhouette, one focus, few fills, and few paths.
- Avoid scenery, decorative particles, text, and nonessential props.
- Test the mark in one color and at its smallest intended size, including favicon scale when relevant.
- Use a simple viewBox and preserve a comfortable clear area around the mark.

### Spot or Empty-State Illustration

- Keep one dominant subject and one clear action.
- Add at most a small grounding relationship or one supporting object when it improves comprehension.
- Pair warmth with direct explanatory copy; never let the image hide the next action.
- Keep loading and error imagery especially quiet and avoid making serious states cute.

### Hero or Editorial Illustration

- Allow a few supporting shapes or contextual elements, but preserve one dominant silhouette and semantic focus.
- Coordinate the image with nearby heading and action placement rather than centering it by habit.
- Increase detail only when the larger display size and story require it.
- Keep the composition understandable when cropped responsively.

### Interface Icon

Do not shrink this illustration language into every interface icon. Functional icons should follow the product's established icon system, optical size, stroke, and accessibility conventions. Use soft solid imagery only for identity, orientation, explanation, or emotional emphasis.

## Construction Workflow

1. State the concept in one sentence.
2. Choose the subject and one semantic focal point.
3. Sketch several black silhouettes before adding interior detail.
4. Select the silhouette that remains recognizable and has the clearest direction.
5. Add only the minimum identifying cutouts and subordinate shapes.
6. Assign dominant, supporting, focal, and canvas-neutral color roles.
7. Remove any detail that does not improve identity, action, or meaning.
8. Test the image in monochrome, on its real background, and at its intended smallest size.
9. Check responsive crops and reduced-motion behavior if the image is animated.

For SVG output:

- Prefer native vector geometry and solid fills; do not embed raster images.
- Use a concise path structure without sacrificing the intended organic contour.
- Avoid filters and effects that simulate depth.
- Include an accessible title and description when the image conveys content; hide it from assistive technology when purely decorative.

## Prompt Recipe

When delegating image generation, provide meaning and hierarchy rather than naming a reference image:

```text
Create a [usage] for [product or subject]. Show [subject] [single action or
relationship] to communicate [one concept]. Use one dominant softly rounded
solid silhouette, minimum identifying details, and one semantic focal point.
Build structure with flat fills, negative space, and overlap rather than
outlines or shading. Use a restrained contextual palette with distinct
dominant, supporting, focal, and canvas-neutral roles. Keep the composition
quiet, slightly asymmetric, clearly directed, and recognizable at [target
size]. Do not add unrelated symbols, decorative scenery, or extra metaphors.
```

Add the relevant usage constraints from this reference rather than appending every rule to every prompt.

## Avoid

- Copying the subject, pose, palette, or proportions of a reference mark
- Generic corporate scenes or decorative blob compositions
- A mascot unrelated to the product concept
- Multiple symbols competing to explain the same product
- Identical bean-shaped bodies across unrelated subjects
- Excessive geometric symmetry or disconnected part assembly
- Black outer strokes, intricate line art, or a line around every shape
- Realistic anatomy, fur, feathers, shell texture, or ornamental surface detail
- Oversized cute eyes, blush, exaggerated emotion, or anime styling
- A different color for every part
- Gradients, shadows, glow, glass, glossy plastic, or 3D rendering
- Background scenes, badges, labels, and decorative particles without a clear job

## Acceptance Checks

- Can the idea be described in one sentence?
- Does one silhouette clearly dominate?
- Is there exactly one primary semantic focal point?
- Is the subject recognizable without relying on facial detail?
- Does each color have a specific role?
- Do negative space and overlap explain structure without an outer stroke?
- Does the image remain legible at its intended size and crop?
- Does it feel gentle and distinctive without becoming childish or generic?
