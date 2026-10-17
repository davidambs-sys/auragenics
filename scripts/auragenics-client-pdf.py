#!/usr/bin/env python3
"""Client-facing project summary for Auragenics. No internal tooling names."""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader

pdfmetrics.registerFont(TTFont("Playfair", "/workspace/artifacts/fonts/Playfair-400.ttf"))
pdfmetrics.registerFont(TTFont("PlayfairI", "/workspace/artifacts/fonts/Playfair-400i.ttf"))
pdfmetrics.registerFont(TTFont("PlayfairS", "/workspace/artifacts/fonts/Playfair-600.ttf"))
pdfmetrics.registerFont(TTFont("Figtree", "/workspace/artifacts/fonts/Figtree-400.ttf"))
pdfmetrics.registerFont(TTFont("FigtreeS", "/workspace/artifacts/fonts/Figtree-600.ttf"))

OUT = "/workspace/artifacts/Auragenics-Website-Project-Summary.pdf"
LOGO = "/workspace/public/images/logo.png"

INK = (0.110, 0.086, 0.071)
CREAM = (0.953, 0.933, 0.894)
CREAM2 = (0.910, 0.875, 0.816)
MUTED = (0.435, 0.392, 0.345)
ACCENT = (0.122, 0.169, 0.235)
LINE = (0.831, 0.796, 0.722)
WHITE = (1, 0.980, 0.953)
ACTION = (0.561, 0.784, 0.863)

W, H = letter
M = 0.7 * inch


def set_fill(c, rgb):
    c.setFillColorRGB(*rgb)


def set_stroke(c, rgb):
    c.setStrokeColorRGB(*rgb)


def paint_page(c):
    set_fill(c, CREAM)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    set_stroke(c, LINE)
    c.setLineWidth(0.6)
    c.rect(0.38 * inch, 0.38 * inch, W - 0.76 * inch, H - 0.76 * inch, fill=0, stroke=1)


def footer(c, page, total=8):
    set_fill(c, MUTED)
    c.setFont("FigtreeS", 8)
    c.drawString(M, 0.48 * inch, "AURAGENICS  ·  WEBSITE PROJECT SUMMARY  ·  CONFIDENTIAL")
    c.drawRightString(W - M, 0.48 * inch, f"{page}  /  {total}")


def kicker(c, text, x, y, color=ACCENT):
    set_fill(c, color)
    c.setFont("FigtreeS", 8)
    c.drawString(x, y, text.upper())


def rule(c, x, y, w=W - 2 * M):
    set_stroke(c, LINE)
    c.setLineWidth(0.7)
    c.line(x, y, x + w, y)


def wrap(c, text, font, size, x, y, max_w, leading, color=INK):
    c.setFont(font, size)
    set_fill(c, color)
    words = text.split()
    line = ""
    for word in words:
        trial = (line + " " + word).strip()
        if c.stringWidth(trial, font, size) <= max_w:
            line = trial
        else:
            c.drawString(x, y, line)
            y -= leading
            line = word
    if line:
        c.drawString(x, y, line)
        y -= leading
    return y


def bullets(c, items, x, y, max_w, size=9.5, leading=13):
    for item in items:
        set_fill(c, ACTION)
        c.circle(x + 3, y + 3, 1.6, fill=1, stroke=0)
        y = wrap(c, item, "Figtree", size, x + 12, y, max_w - 12, leading, MUTED)
        y -= 4
    return y


def cover(c):
    paint_page(c)
    set_fill(c, ACCENT)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    set_fill(c, CREAM)
    c.rect(0.55 * inch, 0.55 * inch, W - 1.1 * inch, H - 1.1 * inch, fill=1, stroke=0)

    try:
        img = ImageReader(LOGO)
        c.drawImage(img, M, H - 1.55 * inch, width=2.35 * inch, height=0.5 * inch, mask="auto", preserveAspectRatio=True, anchor="sw")
    except Exception:
        set_fill(c, INK)
        c.setFont("Playfair", 16)
        c.drawString(M, H - 1.3 * inch, "AURAGENICS")

    kicker(c, "Client project summary  ·  September 2026", M, H - 1.95 * inch)
    set_fill(c, INK)
    c.setFont("Playfair", 36)
    c.drawString(M, H - 2.7 * inch, "The website,")
    c.drawString(M, H - 3.25 * inch, "from start to finish.")

    y = wrap(
        c,
        "A record of the Auragenics site as built: catalog, language, photography, inquiry, and United States search — prepared for client review.",
        "Figtree",
        12,
        M,
        H - 3.7 * inch,
        5.4 * inch,
        17,
        MUTED,
    )

    rule(c, M, y - 10)

    facts = [
        ("Prepared for", "Auragenics"),
        ("Corporate line", "1-512-808-3294"),
        ("Practice desk", "Inquire form — email is not shown on the site"),
        ("Market", "Licensed medical and aesthetic professionals, United States"),
        ("Live domain", "auragenics.com"),
    ]
    y = y - 36
    for label, value in facts:
        set_fill(c, MUTED)
        c.setFont("FigtreeS", 8)
        c.drawString(M, y + 12, label.upper())
        set_fill(c, INK)
        c.setFont("Figtree", 11)
        c.drawString(M, y, value)
        y -= 34

    set_fill(c, ACCENT)
    c.setFont("PlayfairI", 14)
    c.drawString(M, 1.15 * inch, "We Are Making Waves for our Customers!")
    set_fill(c, MUTED)
    c.setFont("FigtreeS", 8)
    c.drawString(M, 0.88 * inch, "CONFIDENTIAL  ·  FOR AURAGENICS REVIEW")


def page_purpose(c):
    paint_page(c)
    kicker(c, "01  /  Purpose", M, H - M - 10)
    set_fill(c, INK)
    c.setFont("Playfair", 26)
    c.drawString(M, H - M - 48, "What this site had to be.")
    y = wrap(
        c,
        "Auragenics is a medical manufacturer of capital equipment and a professional catalog of other manufacturers’ products. The brief was not a consumer storefront. It was a high-end professional site that reads like a fashion magazine and behaves like a regulated medical catalog.",
        "Figtree",
        11,
        M,
        H - M - 80,
        W - 2 * M,
        16,
        MUTED,
    )
    y -= 8
    y = wrap(
        c,
        "Every round of review tightened the same three things: the products you actually carry, the exact language the manufacturers allow, and a structure Google can index for United States practices.",
        "Figtree",
        11,
        M,
        y,
        W - 2 * M,
        16,
        MUTED,
    )

    y -= 18
    rule(c, M, y)
    y -= 28
    kicker(c, "The assignment", M, y)
    y -= 18
    y = bullets(
        c,
        [
            "A professional site for licensed practices in the United States — not consumers.",
            "Fashion-magazine look. Medical-catalog discipline. The word “luxury” does not appear.",
            "One dedicated page per product, written for organic search.",
            "Manufacturer language used as published. No invented clinical claims.",
            "Photography you own or have permission to use.",
            "A practice inquiry that reaches the desk without publishing the email on the page.",
        ],
        M,
        y,
        W - 2 * M,
    )

    y -= 10
    rule(c, M, y)
    y -= 28
    kicker(c, "Who it is for", M, y)
    y -= 18
    y = wrap(
        c,
        "Plastic surgeons, dermatologists, medical spas, hair restoration practices, and regenerative clinics. The inquiry form requires a licensed-professional confirmation. The site does not sell to the public.",
        "Figtree",
        11,
        M,
        y,
        W - 2 * M,
        16,
        MUTED,
    )
    footer(c, 2)


def page_ia(c):
    paint_page(c)
    kicker(c, "02  /  Structure", M, H - M - 10)
    set_fill(c, INK)
    c.setFont("Playfair", 26)
    c.drawString(M, H - M - 48, "How the house is organized.")
    y = wrap(
        c,
        "The menu is short on purpose. Device, Hair, Products, About. Capital equipment is not a separate category — those lines sit under Device and Products.",
        "Figtree",
        11,
        M,
        H - M - 80,
        W - 2 * M,
        16,
        MUTED,
    )

    cols = [
        (
            "Device",
            "/device",
            [
                "AuraGraft",
                "Junera",
                "inkOUT",
                "PhoenixR",
                "Revian",
            ],
        ),
        (
            "Hair",
            "/hair",
            [
                "AuraGraft",
                "QBio Exosomes",
                "Revian",
            ],
        ),
        (
            "Products",
            "/products",
            [
                "Full catalog",
                "QBio, PhoenixR,",
                "AuraGraft, Junera,",
                "inkOUT, Revian",
            ],
        ),
        (
            "About",
            "/about",
            [
                "Company story",
                "Corporate phone",
                "1-512-808-3294",
                "Practice inquiry",
            ],
        ),
    ]
    y -= 16
    col_w = (W - 2 * M - 18) / 4
    x = M
    for title, path, items in cols:
        set_fill(c, WHITE)
        set_stroke(c, LINE)
        c.roundRect(x, y - 210, col_w, 220, 4, fill=1, stroke=1)
        kicker(c, title, x + 12, y - 8)
        set_fill(c, MUTED)
        c.setFont("FigtreeS", 8)
        c.drawString(x + 12, y - 22, path)
        iy = y - 46
        for item in items:
            set_fill(c, INK)
            c.setFont("Figtree", 10)
            c.drawString(x + 12, iy, item)
            iy -= 18
        x += col_w + 6

    y = y - 240
    kicker(c, "Supporting pages", M, y)
    y -= 16
    y = bullets(
        c,
        [
            "Inquire — practice form. Indexed off. Reaches the desk; the address is not printed on the page.",
            "MD Hair Restoration Consulting — expert guidance for practices entering or expanding hair restoration.",
            "Sitemap — public index of every live product and house page.",
        ],
        M,
        y,
        W - 2 * M,
    )
    footer(c, 3)


def page_catalog(c):
    paint_page(c)
    kicker(c, "03  /  Catalog", M, H - M - 10)
    set_fill(c, INK)
    c.setFont("Playfair", 26)
    c.drawString(M, H - M - 48, "The six lines you carry.")
    y = wrap(
        c,
        "Each product has its own page. Language follows the manufacturer. Photography is yours or used with permission.",
        "Figtree",
        11,
        M,
        H - M - 78,
        W - 2 * M,
        16,
        MUTED,
    )
    y -= 12

    products = [
        (
            "AuraGraft",
            "FUE Hair Transplant System",
            "Device  ·  Hair",
            "Blue Ocean Medical / Auragenics copy, used as published. Your console photograph is the image throughout the site.",
        ),
        (
            "Junera",
            "Subdermal Laser Tissue Remodeling",
            "Device  ·  Products",
            "Dual-wavelength 980nm + 1470nm. Manufacturer language from the Junera / Blue Ocean Medical page.",
        ),
        (
            "inkOUT",
            "Non-laser tattoo and permanent makeup removal",
            "Device  ·  Products",
            "TEPR® language from inkOUT / Rejuvatek. The page is inkOUT only — no companion products on that file.",
        ),
        (
            "PhoenixR",
            "Nanocrystal Transdermal Beauty Device",
            "Device  ·  Products",
            "Name set to PhoenixR. Brochure photographs and wording used as supplied. Model BR-1 remains in the technical specifications.",
        ),
        (
            "QBio Exosomes",
            "Quintessence Biologics",
            "Hair  ·  Products",
            "FDA-cleared topical-use product. Elixir, Gro, and Gel. Not injectable. Not represented as a treatment for disease.",
        ),
        (
            "Revian",
            "FDA-Cleared LED Hair Growth System",
            "Device  ·  Hair",
            "Doctor-dispensed at-home LLLT. Dual wavelength 660nm / 620nm. Manufacturer indications as published.",
        ),
    ]
    for name, dek, place, body in products:
        set_stroke(c, LINE)
        c.setLineWidth(0.6)
        c.line(M, y + 12, W - M, y + 12)
        set_fill(c, INK)
        c.setFont("Playfair", 13)
        c.drawString(M, y - 4, name)
        set_fill(c, MUTED)
        c.setFont("FigtreeS", 8)
        c.drawRightString(W - M, y - 2, place.upper())
        y -= 18
        set_fill(c, ACCENT)
        c.setFont("Figtree", 9)
        c.drawString(M, y, dek)
        y -= 14
        y = wrap(c, body, "Figtree", 9.5, M, y, W - 2 * M, 13, MUTED)
        y -= 8
    footer(c, 4)


def page_compliance(c):
    paint_page(c)
    kicker(c, "04  /  Language & compliance", M, H - M - 10)
    set_fill(c, INK)
    c.setFont("Playfair", 26)
    c.drawString(M, H - M - 48, "We did not rewrite the file.")
    y = wrap(
        c,
        "FDA language is not a design choice. Product pages use manufacturer wording. Where a brochure or owned site already carried the approved text, that text was placed on the corresponding Auragenics page.",
        "Figtree",
        11,
        M,
        H - M - 80,
        W - 2 * M,
        16,
        MUTED,
    )
    y -= 10
    rule(c, M, y)
    y -= 26

    blocks = [
        (
            "Sources of record",
            [
                "Blue Ocean Medical pages for AuraGraft, Junera, and Revian — copied as published.",
                "inkOUT / Rejuvatek TEPR language, including session ranges and ink-color statements as the manufacturer states.",
                "QBio / Quintessence Biologics: FDA-cleared topical use only. No injection language.",
                "PhoenixR brochure: photographs and wording used as supplied, with the commercial name PhoenixR.",
            ],
        ),
        (
            "Lines we will not cross",
            [
                "No “FDA approved.” QBio is stated as an FDA-cleared topical-use product.",
                "No injectable claims for QBio or laboratory topicals.",
                "No treatment-of-disease claims the manufacturer does not carry.",
                "Every product page carries a professional notice and a standard FDA confirmation line.",
            ],
        ),
        (
            "Contact, on purpose",
            [
                "Corporate number 1-512-808-3294 appears in the About section only, large and bold.",
                "No Irving address. No QBio street address on the site.",
                "Practice inquiries go to the desk. The email is not printed anywhere on the page.",
            ],
        ),
    ]
    for title, items in blocks:
        kicker(c, title, M, y)
        y -= 16
        y = bullets(c, items, M, y, W - 2 * M)
        y -= 10
    footer(c, 5)


def page_design(c):
    paint_page(c)
    kicker(c, "05  /  Design", M, H - M - 10)
    set_fill(c, INK)
    c.setFont("Playfair", 26)
    c.drawString(M, H - M - 48, "Magazine on the outside.")
    y = wrap(
        c,
        "The look is editorial: serif display type, cream paper, ink and light blue action. Buttons are light blue so the words stand. It is not a consumer spa site and it is not a black clinical template.",
        "Figtree",
        11,
        M,
        H - M - 80,
        W - 2 * M,
        16,
        MUTED,
    )
    y -= 12
    swatches = [
        (CREAM, "Paper"),
        (ACCENT, "Ink navy"),
        (ACTION, "Action"),
        (INK, "Type"),
    ]
    x = M
    for rgb, label in swatches:
        set_fill(c, rgb)
        c.rect(x, y - 36, 1.15 * inch, 0.42 * inch, fill=1, stroke=0)
        set_fill(c, MUTED)
        c.setFont("FigtreeS", 8)
        c.drawString(x, y - 52, label.upper())
        x += 1.35 * inch

    y -= 80
    kicker(c, "Photography", M, y)
    y -= 16
    y = bullets(
        c,
        [
            "AuraGraft — your console photograph, used as the product image across the site.",
            "PhoenixR — every photograph from the supplied brochure, including in-use and kit shots.",
            "Remaining catalog — manufacturer photography you confirmed we have rights to use.",
            "Logo — Auragenics mark in the header and footer. The masthead appears once in the footer.",
        ],
        M,
        y,
        W - 2 * M,
    )
    y -= 8
    kicker(c, "Voice", M, y)
    y -= 16
    y = wrap(
        c,
        "“We Are Making Waves for our Customers!” is the house line. It is the home headline. It is not repeated as filler. Interior pages speak in the manufacturer’s register, then invite a practice to inquire.",
        "Figtree",
        11,
        M,
        y,
        W - 2 * M,
        16,
        MUTED,
    )
    footer(c, 6)


def page_seo(c):
    paint_page(c)
    kicker(c, "06  /  Search & inquiry", M, H - M - 10)
    set_fill(c, INK)
    c.setFont("Playfair", 26)
    c.drawString(M, H - M - 48, "Set up for the United States.")
    y = wrap(
        c,
        "Organic search was built for licensed U.S. practices. Each product is its own indexable page. The inquire page is not meant to rank.",
        "Figtree",
        11,
        M,
        H - M - 80,
        W - 2 * M,
        16,
        MUTED,
    )
    y -= 10
    left = [
        "Unique title, description, and headline on every live page.",
        "Language and region set to English, United States.",
        "Canonical addresses on auragenics.com.",
        "Product, FAQ, breadcrumb, and organization markup.",
        "XML sitemap of live pages only — old URLs and redirects are omitted.",
        "Practice inquiry is noindex. The form still works.",
    ]
    right = [
        "Form fields: name, business email, practice, role, state, interest, message, licensed confirmation.",
        "Interest list matches the current catalog plus hair consulting.",
        "Messages go to the practice desk. The address is never displayed.",
        "No patient information is requested.",
        "After publish: connect auragenics.com, then submit the sitemap in Google Search Console.",
    ]
    kicker(c, "On the pages", M, y)
    kicker(c, "At the desk", M + 3.55 * inch, y)
    y -= 16
    y1 = bullets(c, left, M, y, 3.3 * inch)
    y2 = bullets(c, right, M + 3.55 * inch, y, 3.3 * inch)
    y = min(y1, y2) - 8
    rule(c, M, y)
    y -= 28
    kicker(c, "Go-live note", M, y)
    y -= 16
    y = wrap(
        c,
        "This is a custom professional website. It does not need to be rebuilt in Webflow to publish. Point the domain at this site, keep the inquiry routing, submit the sitemap. A visual website builder would put approved language back in an editor — a risk for this catalog.",
        "Figtree",
        11,
        M,
        y,
        W - 2 * M,
        16,
        MUTED,
    )
    footer(c, 7)


def page_out(c):
    paint_page(c)
    kicker(c, "07  /  Decisions", M, H - M - 10)
    set_fill(c, INK)
    c.setFont("Playfair", 26)
    c.drawString(M, H - M - 48, "What we took off the floor.")
    y = wrap(
        c,
        "The catalog is only what you currently carry. Lines, phrases, and pages that did not belong were removed so the live site cannot be misread.",
        "Figtree",
        11,
        M,
        H - M - 80,
        W - 2 * M,
        16,
        MUTED,
    )
    y -= 8
    removed = [
        "HairPRO, AuraLux, AI Facial Analysis, peptides, ProPatch Plus.",
        "“Luxury,” “distributed / distribution,” “what we manufacture,” Re-Gen Active Lab.",
        "“FDA-registered Class I medical device” as a blanket line. inkOUT keeps its own manufacturer Class I language.",
        "QBio injectable claims. Any implication QBio is a drug or a disease treatment.",
        "Irving address and QBio street / contact block. Phone lives on About only.",
        "Practices directory, journals, and lookbook as a public menu item (Products replaced it).",
        "Capital as a separate menu. Those devices fold into Device and Products.",
    ]
    y = bullets(c, removed, M, y, W - 2 * M)
    y -= 6
    rule(c, M, y)
    y -= 26
    kicker(c, "Still yours to confirm at launch", M, y)
    y -= 16
    y = bullets(
        c,
        [
            "Final read of each product page against current labeling — especially PhoenixR, QBio, and AuraGraft.",
            "Connect auragenics.com and confirm the inquiry arrives at the desk.",
            "Google Search Console verification and sitemap submit after DNS is live.",
        ],
        M,
        y,
        W - 2 * M,
    )
    y -= 10
    set_fill(c, ACCENT)
    c.roundRect(M, 0.85 * inch, W - 2 * M, 1.15 * inch, 4, fill=1, stroke=0)
    set_fill(c, CREAM)
    c.setFont("Playfair", 14)
    c.drawString(M + 16, 1.6 * inch, "Ready for client review.")
    c.setFont("Figtree", 10)
    y = wrap(
        c,
        "The site is the catalog you asked for: six products, manufacturer language, United States search, and a quiet desk. When you are ready, we publish it on auragenics.com.",
        "Figtree",
        10,
        M + 16,
        1.38 * inch,
        W - 2 * M - 32,
        14,
        CREAM,
    )
    footer(c, 8)


def main():
    c = canvas.Canvas(OUT, pagesize=letter)
    c.setTitle("Auragenics Website Project Summary")
    c.setAuthor("Prepared for Auragenics")
    c.setCreator("Auragenics")
    c.setProducer("Auragenics")
    c.setSubject("Client record of the professional website from start to finish")
    c.setKeywords("Auragenics, website, catalog, United States")
    cover(c)
    c.showPage()
    page_purpose(c)
    c.showPage()
    page_ia(c)
    c.showPage()
    page_catalog(c)
    c.showPage()
    page_compliance(c)
    c.showPage()
    page_design(c)
    c.showPage()
    page_seo(c)
    c.showPage()
    page_out(c)
    c.save()
    print(OUT)


if __name__ == "__main__":
    main()
