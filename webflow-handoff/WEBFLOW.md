# MEDRIXX → Webflow handoff

Webflow cannot import this React site. Rebuild it in the Designer (your current medrixx.com project is already Webflow) using this kit.

## 1. Create or open the project

1. Open [webflow.com](https://webflow.com) → the existing **MEDRIXX** site.
2. Site settings → **Fonts** → add Google Fonts:
   - Display: **Cormorant Garamond** (400, 400 italic, 500, 600)
   - Body: **Outfit** (300, 400, 500, 600)
3. Site settings → **Inside `<head>` tag** → paste:

```html
<meta name="theme-color" content="#080808" />
```

4. Assets panel → upload everything in the `images/` folder.

## 2. Variables (Webflow → Variables)

| Name | Value | Use |
|---|---|---|
| bg | `#080808` | Page background |
| bg-2 | `#10100e` | Alternate bands |
| surface | `#161410` | Cards / form panel |
| fg | `#f3eee4` | Primary text |
| muted | `#9a9488` | Body / supporting |
| faint | `#6f6a62` | Legal / captions |
| accent | `#c9a75f` | Gold buttons, kickers, italics |
| accent-2 | `#e3c880` | Gold hover |
| accent-fg | `#0c0b09` | Text on gold buttons |
| panel | `#c7a45b` | “Evidence over exaggeration” band |
| panel-fg | `#0c0b09` | Text on the gold band |
| line | `#2c2618` | Hairline borders |

Body: Outfit 16 / 1.55 / `#f3eee4` on `#080808`  
Headings: Cormorant Garamond, tracking -0.03em  
Kickers: Outfit 11px, uppercase, letter-spacing 0.32em, color accent

Buttons: gold fill `#c9a75f`, text `#0c0b09`, 12px uppercase, tracking 0.32em, no radius (or 0). Outline variant: 1px gold, gold text.

## 3. Pages to add (same as the original site)

| Webflow page | Slug | Notes |
|---|---|---|
| Home | `/` | Hero, marquee, portfolio, gold standard, process, audiences, form |
| Exosomes | `/exosomes` | |
| Stem Cells | `/stem-cells` | |
| Peptides | `/peptides` | |
| Medical Devices | `/medical-devices` | |
| Standards | `/standards` | |
| Inquire | `/inquire` | Form + FAQ |

Nav: Exosomes · Stem Cells · Peptides · Medical Devices · Standards · **Inquire** (gold button)

## 4. Forms (this is the Webflow-native win)

Do **not** paste the React form. Use a Webflow Form so submissions go to Webflow / your email / Zapier.

Fields:

- Name * (text)
- Business email * (email)
- Phone (tel)
- Practice / organization (text)
- Role (select: Physician, Nurse practitioner, Physician assistant, Practice manager, Other licensed professional)
- State (select: US states)
- Primary interest * (select: Exosomes, Stem cells, Peptides, Medical devices, Several disciplines, Not sure yet)
- What are you exploring? (textarea) — placeholder: “Please do not include patient information.”
- Licensed-practice checkbox *
- Submit

Form settings → email notifications to your practice inbox.

## 5. Rebuild order (fastest)

1. Symbols: Header, Footer, Inquire form (embed the form symbol on Home, discipline pages, Inquire).
2. Home hero: full-bleed `hero-lab.jpg`, left gradient to `#080808`, headline **SCIENCE,** + italic gold **Selected.**
3. Portfolio: 2×2 image cells (`exosomes.jpg`, `stem-cells.jpg`, `peptides.jpg`, `devices.jpg`) linking to the four pages.
4. Gold band: background `#c7a45b`, copy “Evidence over exaggeration.”
5. Duplicate a discipline CMS-less template 4 times; swap image + copy from `copy.txt`.
6. Standards: long scrolling chapters 01–04.
7. Publish.

Keep the existing domain on this Webflow project when you publish — that is how medrixx.com updates.

## 6. What not to do

- Do not paste the React/JavaScript bundle into a Webflow embed. It will not run.
- Do not replace the whole site with a custom-code embed of this app. Use Designer.
- The inquiry form in the preview only stores locally for the demo. In Webflow, use a real Webflow Form.

## 7. If you do not need Webflow

This preview **is** the finished site. Publishing it from Grok hosts it on its own URL. Use Webflow only if you want to keep editing in the Designer and keep the current medrixx.com hosting.
