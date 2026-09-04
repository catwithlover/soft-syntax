# ModSecurity homepage demo

- Target: https://modsecurity.org/ (static OWASP project site)
- Strategy: **structural restyle** — the hero visual is a photorealistic stock photo (world map + padlock over a binary-code texture) that dominates the page and cannot be reconciled with a soft flat system through CSS alone.
- Page mode: **Expressive Welcome** (project homepage).

## Where the palette came from

Sampled from the live site and its assets before designing:

| Sampled | Value | Becomes |
| --- | --- | --- |
| Logo "security" wordmark | `#00AEEF` | The brand hue everywhere: button fill (with dark ink text, 6.0:1), illustration, tonal surfaces, footer accents — kept at the exact logo value |
| Logo "mod" wordmark | `#000000` | Softened into the ink `#1B2733` and the footer navy `#1B2733` |
| Site heading / footer blue | `#0E98D8` | Folded into the logo-blue family; not carried over separately |
| Button blue | `#0378AB` | Replaced by the logo blue + ink text; links use the same hue darkened to `#0773A6` for AA on white (5.2:1) |
| Link gray | `#666666` | Cool muted `#55677A` (5.8:1) |
| Body | black on white | Softened ink `#1B2733` on bright cool canvas `#F7FAFC` |

The original page pairs three different blues (#00AEEF logo, #0E98D8 headings/footer, #0378AB buttons). The rebuild anchors on the logo's own two-tone: black + `#00AEEF`. White text on the original blue footer failed contrast; the navy footer keeps white text at 15:1.

## Type

Nunito is kept — the site's existing body face, already rounded and friendly. The condensed display face Oswald (all-caps headings) is dropped: its military-plate character fights the approachable voice; hierarchy now comes from Nunito 800 with a fluid scale. Version numbers use a neutral system mono.

## Structure changes

- Hero gains a clearer hierarchy: eyebrow ("OWASP ModSecurity Project"), display heading from the original H2, the Swiss-Army-Knife intro, and both release links as pill buttons ("Get latest V3: 3.0.16" primary, "Get latest V2: 2.9.14" outline).
- Hero illustration (new, native SVG, replaces the stock photo): HTTP requests flow from a browser window through a shield — allowed dots pass with green checks, one red request bounces off, a rule card is pinned to the shield. One metaphor for "a rules engine that inspects traffic".
- The "most widespread WAF" paragraph gets an audience chip row (businesses, governments, ISPs, WAF vendors) as quiet evidence.
- OWASP custodianship becomes a bordered panel pairing the real project logo with the paragraph.
- Usage scenarios become four icon cards; principles become a tonal checklist with "Getting started". The original's parallel list-and-button pairs keep their jobs.
- Community keeps its friendly copy (emoji dropped — they rendered as tofu in capture environments); Slack and GitHub are inline links.
- Latest posts become dated cards (dates recovered from the post URLs) with an "All posts" link.
- Footer: navy, brand wordmark, link columns, and the site's own white-filled social icons on quiet chips.

## Primary action

"Get latest V3: 3.0.16" → https://github.com/owasp-modsecurity/ModSecurity/releases/tag/v3.0.16

## Playful moment

The hero shield illustration is the primary moment (medium intensity, Expressive Welcome): good requests sail through with checks while a red one bounces off. Supporting moments stay quiet: the check ticks in the principles list and the icon chips on scenario cards.

## Verification

Inspected at 390, 800, and 1440 px widths. Checked: primary action visibility, mobile stacking and illustration-first order, hamburger focus/Escape behavior (opens, closes, restores focus), `:focus-visible` ring, no horizontal overflow at any width, Nunito loads, no console errors. Original page copy preserved; link set matches the original (Blog/Videos/Documentation/Developers/FAQs/Donate, releases, wiki, Slack, GitHub, LinkedIn).

## Limitations

- Static demo: nav links marked `#` on the original site (Blog, Documentation) keep pointing to `#`; search is omitted.
- The OWASP logo and social icons are the site's own assets; no third-party assets were fabricated.
- The "after" page is not tracked in version control; regenerate it from the sampled tokens if needed.
