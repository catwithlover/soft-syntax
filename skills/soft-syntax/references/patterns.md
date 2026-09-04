# Soft Syntax Patterns

Load only the sections relevant to the requested page. These are behavioral and compositional relationships, not a layout template. Adapt their shape, spacing, color, proportions, and playful expression to the product.

## Global Navigation

- Keep the product identity, primary destinations, and account or primary action easy to distinguish.
- Size the bar from its content and touch targets rather than a fixed house height.
- Use the selected action hue for the primary control; keep ordinary navigation quieter.
- Collapse before labels collide or available space forces awkward compression.
- Give the menu a named trigger, logical focus management, Escape handling, and no hidden focusable content.
- Prefer a tonal change or faint divider to a persistent heavy shadow.

## Announcement

- Include an announcement only when the message is current and important.
- Keep it visually subordinate to navigation and the page's primary action.
- Treat campaign color as temporary rather than adding another global brand color.
- If messages rotate, provide labels, keyboard controls, and a pause mechanism.

## Hero

Treat the hero as the page thesis, not a required left-copy and right-image template.

- Lead with one outcome, one primary action, and only the context needed to act.
- Derive the composition from the subject: product demonstration, learner work, annotated media, a useful interactive preview, or restrained typography may each be appropriate.
- Let the hero carry the primary playful moment when the page needs medium or high expressive intensity.
- Keep supporting copy narrower and quieter than the heading.
- If media appears, reserve its space and choose its aspect ratio from the content.
- Stack mobile content in the order that best explains the action.

### Image or Color-Field Hero

- Use an image overlay or color field only when it adds atmosphere or context that plain canvas cannot.
- Keep the text group compact and verify contrast across the entire rendered field.
- Avoid pairing a large treatment with several other high-emphasis sections in the same viewport.

## Search and Filters

- Group related controls in one connected surface; this may be a tonal panel, bordered region, or clearly spaced fieldset.
- Use color only when it helps locate the search task, not because search panels are expected to be colorful.
- Keep labels persistent and controls visually consistent.
- Arrange controls according to available width and reading order; stack before labels or values become cramped.
- Include loading feedback, clear filters, result counts where useful, and specific no-results guidance.
- Preserve selections when changing layout or opening a mobile filter dialog.
- Put personality in helpful suggestions, result feedback, or the empty state rather than making ordinary form controls novel.

## Category Control

- Use a chip, compact link, segmented control, or list item according to selection behavior.
- Pair category color with a label or symbol; never rely on color alone.
- Keep icon size, label treatment, and selected state consistent across the set.
- Use pill shapes only when the compact grouped silhouette is useful.
- Hover and selected states should not move surrounding content.
- A small flat symbol or gently irregular silhouette may add low-intensity playfulness when it improves recognition.

## Content Card

- Use a predictable scan path such as `media -> title -> description -> metadata` when all four layers are useful.
- Remove optional layers rather than leaving empty regions or decorative placeholders.
- Choose media ratio from the source material and keep it consistent within one collection.
- Use subject-specific flat imagery when a visual helps recognition; do not add generic decoration to fill the media slot.
- Let title length and metadata determine the card's minimum useful width.
- Clamp descriptions only when grid comparison benefits; provide full information in the detail view.
- Equalize heights only when it improves row scanning. Let mobile height follow content.
- Make the interactive target and destination unambiguous without nesting conflicting controls.
- On hover, emphasize one property subtly; do not combine translation, image zoom, border, and shadow changes.
- For preview media, provide a labeled play control and never auto-play audible content.

## Badge and Metadata

- Keep badges brief and semantic: difficulty, access, duration, status, certification, or another decision-relevant fact.
- Distinguish noninteractive badges from buttons.
- Use color, text, and iconography together when status matters.
- Keep metadata visually secondary without reducing it below a comfortable reading size.

## Featured Panel

- Use one featured panel only when a recommendation, program, outcome, or next step deserves clear emphasis.
- Derive its visual treatment from the product signature: a tonal field, illustration, unusual crop, typographic gesture, or restrained gradient.
- If this is the page's primary playful moment, make one gesture dominant and keep the nested content conventional.
- Keep nested content quieter than the panel's main message.
- Do not repeat the same featured-panel treatment for unrelated sections.

## Pricing and Plan Choice

- Show the number of plans the decision actually requires; do not force a three-card composition.
- Emphasize a recommended plan only when there is a defensible reason.
- Use hierarchy, border, background, or position before scale. Avoid scale emphasis on narrow screens.
- Give each plan one clear action and surface the few differences that drive a decision.
- Follow with an accessible comparison table when more detail is necessary.
- Keep plan colors subordinate to the shared action system.

## Detail View

- Provide clear return navigation, title, decision-relevant metadata, overview, deeper content, and one primary next action.
- Choose columns only when overview and deeper information benefit from side-by-side comparison.
- Stack in reading order when space narrows.
- Use media or category styling as orientation rather than a competing visual system.
- Keep this mode denser and quieter than a welcome or campaign page.

## Empty, Loading, Progress, and Success States

These states are strong locations for low-intensity playfulness because reassurance and momentum matter there.

- Explain the state and next action before adding personality.
- Use one concise flat illustration, contextual icon, warm line of copy, or brief state transition.
- Connect the treatment to the actual subject or action rather than a generic celebration graphic.
- Keep loading feedback calm and informative; do not make people wait for an animation to finish.
- Celebrate meaningful completion proportionally. Routine saves need confirmation, not confetti.
- Keep error and destructive states direct, specific, and visually distinct from celebratory states.

## FAQ and Disclosure

- Use FAQs only for genuine recurring questions, not as a container for missing product information.
- Make the complete question row an accessible `summary` or button.
- Keep expanded state, focus, and disclosure icons clear.
- Use borders, spacing, or subtle tonal contrast to separate items; a card is not required for every answer.
- Avoid motion that delays access to the answer, and honor reduced-motion preferences.

## Footer

- Group links by user intent and keep organization legible on narrow screens.
- Separate company context, legal links, and social destinations from primary navigation groups.
- Keep type compact but readable.
- Do not add a decorative closing flourish by default. Use one only when it is specific to the product and earns its visual weight.
- A quiet callback to the page's primary playful motif may provide closure without introducing a second signature.

## Page Composition Recipes

Use these as content checklists, not fixed section orders.

### Welcome or Marketing Page

- Primary promise and action
- Product-specific demonstration or visual thesis
- One primary playful moment rooted in the subject
- Focused explanation of how the outcome is achieved
- Evidence such as examples, outcomes, testimonials, or customers
- Selected content or projects when they help evaluation
- One featured next step
- Decision support such as FAQ when genuinely needed
- Clear closing action and footer

Vary section order and composition according to the audience's questions. Do not automatically produce a hero, three cards, gradient panel, testimonial, FAQ sequence.

### Catalog or Resource Library

- Orientation and scope
- Search or filtering when the collection needs it
- Categories only when they improve navigation
- Featured content only when there is a useful editorial reason
- Responsive content grid or list
- Loading, empty, and no-results states
- Stable metadata and clear destinations
- Low-intensity playfulness in category, progress, or empty-state treatment

### Resource, Course, or Path Detail

- Return navigation and context
- Title, concise orientation, and primary action
- Decision-relevant metadata
- Overview and deeper structure such as syllabus, contents, or requirements
- Progress or resume state when applicable
- One quiet contextual or completion moment when it supports orientation
- Supporting evidence or related content only when it helps the next decision

### Pricing or Plan Comparison

- Concise value proposition
- Necessary plan choices with honest recommendation logic
- One action and decision-critical features per plan
- Accessible complete comparison
- Evidence that reduces purchase uncertainty
- Playfulness limited to orientation or reassurance, never price or consequence clarity
- FAQ and final action only when they add information

## Copy Patterns

Prefer concrete, outcome-led language:

- Name what the person can do after completing the step.
- Explain the simplest credible first action.
- State prerequisites directly instead of using reassurance as decoration.
- Keep action names consistent through buttons, confirmations, and success messages.
- Replace `Submit`, `Click here`, and vague `Learn more` labels when the outcome is known.

Write examples from the actual subject. Do not reuse a stock set of learning slogans across unrelated products.
