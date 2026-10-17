# MEDRIXX → Webflow rebuild kit

This preview is a React app. Webflow cannot import it as a project.
Use this kit to rebuild the same site inside your existing medrixx.com Webflow project.

## Fonts
- Display (headings): Cormorant Garamond — 400, 500, 600, italic
- Body: Outfit — 300, 400, 500, 600
Load both from Google Fonts in Webflow Site settings → Fonts.

## Colors
| Token | Hex | Use |
|---|---|---|
| Background | #080808 | Page, header, footer |
| Background 2 | #10100e | Alternate bands |
| Surface | #161410 | Cards, form panels |
| Ivory | #f3eee4 | Primary text |
| Muted | #9a9488 | Body secondary |
| Faint | #6f6a62 | Legal / captions |
| Champagne | #c9a75f | Logo, kickers, italic, buttons |
| Champagne light | #e3c880 | Button hover |
| Gold panel | #c7a45b | “Evidence over exaggeration” section |
| Ink on gold | #0c0b09 | Text on gold panel |
| Line | #2c2618 | Hairline borders |

## Type
- Kickers: 11px, uppercase, letter-spacing ~0.32em, champagne
- Hero: Cormorant ~clamp 54–118px, line-height 0.9, tracking -0.03em
- Section titles: Cormorant ~44px
- Body: Outfit 16px, line-height 1.55, muted

## Pages (match current medrixx.com URLs)
1. Home `/`
2. Exosomes `/exosomes`
3. Stem Cells `/stem-cells`
4. Peptides `/peptides`
5. Medical Devices `/medical-devices`
6. Standards `/standards`
7. Inquire `/inquire` (new — or keep as `#inquire` on each page)

Nav: Exosomes, Stem Cells, Peptides, Medical Devices, Standards, Inquire (gold outline/fill button)

## Home sections
1. Sticky header + logo
2. Full-bleed hero (`hero-lab.jpg`) — “SCIENCE, Selected.”
3. Scrolling credentials bar
4. Portfolio 2×2 image tiles
5. Gold band — The MEDRIXX Standard
6. Four-step representation process
7. Who we serve (`clinic.jpg`)
8. Private consultation form
9. Footer

## Images in this zip
| File | Placement |
|---|---|
| medrixx-logo.png | Header (transparent gold wordmark) |
| hero-lab.jpg | Home hero |
| exosomes.jpg | Portfolio + Exosomes page |
| stem-cells.jpg | Portfolio + Stem Cells page |
| peptides.jpg | Portfolio + Peptides page |
| devices.jpg | Portfolio + Devices page |
| standards.jpg | Standards page hero |
| clinic.jpg | Who we serve |

Upload these to Webflow Assets, then bind to Image elements. Do not paste the React/Tailwind code into Embeds — it will not run.

## Form
Rebuild as a native Webflow form (Name, Business email, Phone, Practice, Role, State, Interest, Message, licensed-professional checkbox). Point it at your existing Webflow form notification / CRM. The preview form only stores locally and will not email you.

## What not to do
- Do not paste the Grok React project into a Webflow Embed
- Do not expect a .webflow.zip from this preview — Webflow only exports those from the Designer
