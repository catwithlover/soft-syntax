# Pet shelter system demo (全國動物收容管理系統)

- Target: https://www.pet.gov.tw/AnimalApp/AnnounceMent_Announce.aspx — the "收容公告" listing of the national animal shelter management system (Taiwan, MOA). It is the system's de-facto homepage: filters + every shelter animal waiting for adoption.
- Strategy: **structural restyle** — key info was hover-bound (shelter number revealed by an overlay), the form was a flat 10-field bar with an 11px button, and cards had no hierarchy. All bound to markup.
- Page mode: **Structured Browse** (a large, filterable adoption listing).

## Where the palette came from

Sampled computed styles from the live page before designing:

| Sampled | Value | Becomes |
| --- | --- | --- |
| Navbar teal | `#1E88A8` (4.1:1 with white text) | Action hue, darkened to `#146C84` (5.99:1) for header, primary button, links |
| Card-title blue | `#3D80B3` | Folded into the teal family; tonal surfaces `#EAF4F8`/`#E3F0F5` |
| 查詢 button / cyan accents | `#51A8DD` / `#00BCD4` | Replaced by the single teal action hue |
| 前往寵物登記網 badge | `#5AB02E` | Kept as the one green pill, darkened to `#4A8220` (4.7:1 with white) |
| Footer / page-title brown | `#514840` | Ink `#3A332D`, warm canvas `#FAF7F2`, footer kept at the original brown (white 8.9:1) |

The original mixed teal, blue, cyan, green, and brown with no role plan. The rebuild keeps its two strongest identity colors — navbar teal and warm brown — and lets them carry action and text roles.

## Type

The site had no brand face (Arial + 微軟正黑體). Huninn (`jf open 粉圓`) carries Traditional Chinese — a rounded, friendly face for an adoption audience — with Quicksand for Latin and digits. Both self-hosted from the skill bundle with licenses. Hierarchy uses size and color only: Huninn has a single weight, so no synthetic CJK bold is used anywhere.

## Structure changes

- Shelter number moved from a hover-only overlay to a permanent card footer line — the most requested datum needs no pointer.
- Cards rebuilt: 1:1 photos (the original cropped arbitrarily at 220px), gender chip pinned on the photo, animal name + category tag as the title row, source and current shelter as labeled lines with a map-pin icon.
- `NO IMAGE` placeholders replaced with a paw illustration on a tonal surface — an honest "photo coming" state instead of a broken-image plate.
- The 10-field form is grouped into two labeled fieldsets (動物條件 / 收容地點), with species as chip radios, and rare expert fields (收容編號, 晶片號碼) behind a native `<details>`. Controls are 44px tall with visible borders and focus rings (the original's text inputs were borderless).
- Result count (8,748 隻) surfaces above the grid; the original's count hid under pagination.
- Mobile becomes a deliberate composition: filters collapse behind a 篩選條件 toggle (aria-expanded), instead of a long stacked form before any animal.
- The scalloped hero edge from the original banner is kept as the page's signature transition; the paw decorations flanking the title echo the original's paw title ornaments.
- Footer keeps the brown, the MOA logo, and contact lines; floating LINE/back-to-top buttons kept as quiet circles.
- `<html lang>` set to `zh-Hant` (the original was empty); the footer's "All Righits Reserved" typo corrected.

## Primary action

查詢 (search) in the filter panel; per-animal detail links preserved to the real `AnnounceSingle.aspx` URLs.

## Playful moment

The scalloped hero edge flowing into paw-flanked 收容公告 title is the primary moment. Supporting moments stay quiet: the paw "photo coming" placeholders and the warm microcopy in the lede (「等一個家」「毛住民」).

## Verification

Inspected at 390, 800, and 1440 px widths. Checked: no horizontal overflow (fixed a 1px pagination overflow at 390), Huninn/Quicksand load, hamburger opens/Escape closes with focus restored, mobile filter toggle expands/collapses, form submit and pagination show a demo notice instead of pretending to query, all 15 animal photos load, `:focus-visible` rings, contrast verified (muted on canvas 5.7:1, white on action 6.0:1, footer pairs ≥4.9:1), no console errors. The 20 listed animals, their data, photos, and every filter option are the real page content.

## Limitations

- Static demo: search and pagination don't query the backend (original posts via `PaginationClick`); a small note says so. Detail links point at the live site.
- Animal photos are the shelter's own uploaded photos, downscaled and recompressed for the demo; no third-party assets were fabricated.
- The "after" page is not tracked in version control; regenerate it from the sampled tokens if needed.
