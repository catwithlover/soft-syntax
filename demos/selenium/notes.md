# Selenium homepage demo

- Target: https://www.selenium.dev/ (Hugo + Docsy)
- Strategy: **structural restyle** — the original hero has no primary action, the News layout is markup-bound, and the bottom color slabs fail contrast, so a CSS-only override could not fix the real problems.
- Page mode: **Expressive Welcome** (marketing homepage).

## Where the palette came from

Sampled from the live site before designing:

| Sampled | Value | Becomes |
| --- | --- | --- |
| Logo / hero green | `#43B02A` | Illustration and focal accents; darkened to `#2E7D1E` for the action role so buttons and links pass WCAG AA (5.2:1 on white) |
| Announcement blue | `#4C6FBC` | Lightened to a quiet tonal announcement band `#EDF2F9` with dark blue ink |
| Footer | `#403F4C` | Softened to a green-neutral dark `#2C332E` |
| Body text | `#343A40` | Softened ink `#222922` |
| Neutral section | `#F8F9FA` | Tonal surface family, green-tinted `#F1F6EA` |
| Product red/blue/purple | `#CF0A2C` / `#0033A0` / `#645D9C` | Kept as official product logos only — small semantic cues, not a second palette |

The competing green/cyan/blue section slabs (`#43B02A`, `#8ADAEF`, `#4C6FBC`) were reduced to one action hue plus tonal surfaces. White headings on the cyan and blue slabs were near-invisible on mobile; all text/background pairs in the rebuild meet WCAG AA.

## Type

Quicksand (the skill's bundled fallback) replaces Encode Sans to demonstrate the skill's own voice. Encode Sans is a neutral choice, not an established brand asset; in a real client restyle this would be evaluated against their brand requirements.

## Structure changes

- Hero gains the missing primary action: "Get started" (WebDriver docs), with "Download Selenium" as the quiet secondary.
- Hero illustration (new, native SVG): a script card drives a browser window along a dotted path to a cursor checkmark and a passing-tests pill — one metaphor for "you write the script, the browser drives itself".
- Three products become cards with the official logos and specific link labels ("Explore WebDriver", "Install Selenium IDE", "Set up Grid") instead of three identical "READ MORE" links.
- Development partners and level sponsors become two labeled wordmark groups on one quiet chapter (no fabricated third-party logos).
- News keeps the same three items but uses a predictable `meta | content` row instead of the original split-column layout.
- The two saturated bottom slabs (cyan "Support" + blue "Donate") merge into one tonal panel with one primary action ("Donate on Open Collective").
- Footer groups links and labeled social icons; mobile nav collapses into an accessible dropdown (button + `aria-expanded`, Escape closes and restores focus).

## Primary action

"Get started" → https://www.selenium.dev/documentation/webdriver/

## Playful moment

The hero illustration is the primary moment (medium intensity, Expressive Welcome). Supporting moments stay quiet: the green dot in each illustration window header, the passing-tests pill, and the gentle cursor float (removed under `prefers-reduced-motion`).

## Verification

Inspected at 390, 800, and 1440 px widths, both sides of the 960/640 breakpoints. Checked: primary action visibility, mobile stacking, hamburger focus/Escape behavior, `:focus-visible` ring on light and dark surfaces, no horizontal overflow, no console errors. Original page copy preserved verbatim except for section labels and link wording noted above.

## Limitations

- Static demo: search, language menu, and external links are visual/real-URL only; no functionality behind them.
- Partner/sponsor logos are replaced with text wordmarks rather than fabricated brand assets.
- The "after" page is not tracked in version control; regenerate it from the sampled tokens if needed.
