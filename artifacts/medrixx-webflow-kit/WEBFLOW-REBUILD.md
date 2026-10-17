# MEDRIXX → Webflow rebuild kit

This preview is a React app. Webflow cannot import it as a project.
Use this kit to recreate the site in Webflow Designer, or skip Webflow
and publish the live preview instead (that keeps the exact design).

## Pages to create in Webflow

| Page | Slug |
|---|---|
| Home | `/` |
| Exosomes | `/exosomes` |
| Stem Cells | `/stem-cells` |
| Peptides | `/peptides` |
| Medical Devices | `/medical-devices` |
| Standards | `/standards` |
| Inquire | `/inquire` |

Nav: Exosomes, Stem Cells, Peptides, Medical Devices, Standards, Inquire (button)

## Brand

Fonts (Google Fonts in Webflow Project Settings → Fonts)
- Headings: Cormorant Garamond (400, 500, 600 + italic)
- Body: Outfit (300, 400, 500, 600)

Colors
- Background: #080808
- Background 2: #10100e
- Surface: #161410
- Ivory text: #f3eee4
- Muted text: #9a9488
- Faint text: #6f6a62
- Champagne gold: #c9a75f
- Gold highlight: #e3c880
- Gold panel: #c7a45b
- Ink on gold: #0c0b09
- Hairline: #2c2618

Logo: `images/medrixx-logo.png` (transparent gold wordmark)
Favicon: `brand/favicon.svg`

## Layout notes

- Sticky header, black, 1px gold-tinted border
- Max width ~1280px, side padding 20–32px
- Kickers: 11px, uppercase, letter-spacing ~0.32em, gold
- Hero title: Cormorant, very large, tight leading; italic gold on “Selected.”
- Gold panel section on Home: background #c7a45b, dark text
- Forms: transparent fields, 1px #2c2618 border, gold on focus
- Primary button: gold fill, black uppercase tracking
- Outline button: gold border + gold text
- Footer: wordmark + portfolio links + licensed-professional disclaimer

## Images (Designer → Assets)

| File | Use |
|---|---|
| hero-lab.jpg | Home hero |
| exosomes.jpg | Portfolio + Exosomes page |
| stem-cells.jpg | Portfolio + Stem Cells page |
| peptides.jpg | Portfolio + Peptides page |
| devices.jpg | Portfolio + Devices page |
| standards.jpg | Standards hero |
| clinic.jpg | Home “Who we serve” |
| medrixx-logo.png | Header logo |

## Copy

Keep the existing MEDRIXX voice. Do not add FDA-approval claims.
Keep the exosome notice: there are currently no FDA-approved exosome products;
topical offerings are not for injection.

Home inquiry and /inquire should collect:
Name*, business email*, phone, practice, role, state, interest*, message,
licensed-professional checkbox*.
Webflow form notifications → your email.

## If you want this exact site live

Do not import into Webflow. Publish this Grok app and point medrixx.com at it.
That is the only way to keep the photography, motion, and form behavior 1:1.
