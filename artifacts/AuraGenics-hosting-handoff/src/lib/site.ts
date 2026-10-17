export const SITE = {
  name: "AuraGenics",
  url: "https://auragenics.com",
  masthead: "We Are Making Waves for our Customers!",
  issue: "No. 01",
  season: "Autumn 2026",
  logo: "/images/logo.png",
  tagline: "We Are Making Waves for our Customers!",
  description:
    "AuraGenics was established as a strategic partner to support emerging medical technology manufacturers and aesthetic and regenerative medicine physicians in navigating competitive markets. Our mission is to introduce innovative, “game-changing” products and services that redefine industry standards.",
  phone: "1-512-808-3294",
  phoneHref: "tel:+15128083294",
};

export const LAB = {
  name: "The laboratory",
  since: "2018",
  country: "United States",
  kicker: "The laboratory",
  dek: "FDA-registered 361 tissue establishment. Human umbilical cord and amniotic membrane–derived biomolecules — manufactured in the United States.",
  biomolecules: [
    "Exosomes",
    "Proteins",
    "Growth factors",
    "Other bioactive molecules",
  ],
  standards: [
    {
      t: "ISO Class 3 cleanroom",
      b: "Manufacturing in a certified ISO Class 3 cleanroom, with ISO Class 7 supporting areas — as the laboratory describes. Validated air, pressure, and particulate monitoring.",
    },
    {
      t: "U.S. cord-bank partners",
      b: "Tissue sourced through FDA-registered, AABB-accredited cord banks. Live, full-term, scheduled C-section births in U.S. hospitals only.",
    },
    {
      t: "Third-party release testing",
      b: "Each batch: USP <71> sterility and USP <85> endotoxin analysis by independent laboratories, reviewed against 21 CFR 1271 criteria before release.",
    },
    {
      t: "Donor screening",
      b: "Medical, behavioral, and social screening plus a maternal infectious-disease panel (including HIV, HBV, HCV, HTLV, syphilis, CMV, WNV, Zika, Chagas) as described by the laboratory.",
    },
  ],
  promise: [
    "Rigorous donor screening",
    "Transparent sourcing and traceability",
    "Regulatory compliance as a 361 tissue establishment",
    "Third-party validated quality control",
  ],
  disclaimer:
    "The laboratory manufactures human tissue–based products regulated under section 361 of the Public Health Service Act and 21 CFR Part 1271. These products are not intended to diagnose, treat, cure, or prevent any disease. For licensed professionals exclusively. QBio, as AuraGenics places it, is an FDA-cleared topical-use product.",
};

export const PROCESS = [
  {
    n: "01",
    t: "U.S. recovery",
    b: "Live, full-term, scheduled C-section births in U.S. hospitals. AABB-accredited, FDA-registered cord banks.",
  },
  {
    n: "02",
    t: "Eligibility",
    b: "Donor medical, behavioral, and social screening. Maternal infectious-disease panel as the laboratory describes.",
  },
  {
    n: "03",
    t: "ISO Class 3",
    b: "Manufacturing in a certified ISO Class 3 cleanroom, ISO Class 7 support. Validated air, pressure, particulates.",
  },
  {
    n: "04",
    t: "The profile",
    b: "Exosomes, proteins, and growth factors — quantitatively assessed for batch-to-batch consistency.",
  },
  {
    n: "05",
    t: "Independent labs",
    b: "USP <71> sterility and USP <85> endotoxin on every batch, by third parties — not an in-house checkbox.",
  },
  {
    n: "06",
    t: "Release",
    b: "Reviewed against 21 CFR 1271. Then the lot file travels. That is the product. The brochure is not.",
  },
];

export const WILL_NOT = [
  {
    t: "That it belongs in a joint",
    b: "We will not market QBio as a treatment for a joint. Documentation is not a wink.",
  },
  {
    t: "That Gro is a growth drug",
    b: "It is a professional scalp cosmetic. Hair restoration is a diagnosis, a camera, and a device — not a vial.",
  },
  {
    t: "That it is FDA approved",
    b: "QBio is an FDA-cleared topical-use product. We will not say approved when the labeling says cleared.",
  },
];

export const ROOMS = [
  {
    folio: "I",
    title: "The hair bay",
    kicker: "Camera, then the tool",
    body: "Revian if a cleared cap belongs. Gro as a topical cosmetic. AuraGraft if you operate.",
    image: "/images/hair.jpg",
    imageAlt: "Revian LED cap in use — doctor-dispensed hair device",
    href: "/consulting",
    label: "MD Hair Consulting",
  },
  {
    folio: "II",
    title: "The post-procedure tray",
    kicker: "Where a topical belongs",
    body: "QBio Elixir on the tray after energy or surgery. Gel with the reconstitution instructions. Lot on the chart. No new category because the word “exosome” photographs well.",
    image: "/images/exosomes.jpg",
    imageAlt: "QBio Elixir bottle — laboratory topical",
    href: "/exosomes",
    label: "QBio Exosomes",
  },
  {
    folio: "III",
    title: "The removal bay",
    kicker: "Staff, not a laser theater",
    body: "inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology. FDA Class I device — can be operated by properly trained staff. For most tattoos, full removal happens in just 3–5 sessions. Unlike other methods, TEPR works on yellow, red, white, blue, pastel, neon inks.",
    image: "/images/inkout-console.jpg",
    imageAlt: "inkOUT TEPRdrive Console with TEPR Pump and handpiece",
    href: "/inkout",
    label: "inkOUT",
  },
];

export type AppPath =
  | "/"
  | "/lookbook"
  | "/products"
  | "/about"
  | "/inquire"
  | "/consulting"
  | "/laboratory"
  | "/capital"
  | "/device"
  | "/hair"
  | "/project-summary";

export const NAV: { label: string; to: AppPath }[] = [
  { label: "Device", to: "/device" },
  { label: "Hair", to: "/hair" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
];

export const CATALOG = {
  device: {
    label: "Device",
    path: "/device" as const,
    kicker: "Devices",
    title: "The devices.",
    dek: "AuraGraft FUE, inkOUT, PhoenixR, Revian, and Junera — devices for the floor.",
    seoTitle: "Devices | AuraGraft, inkOUT, PhoenixR, Revian, Junera | AuraGenics",
    seoDescription:
      "AuraGenics devices for United States practices: AuraGraft FUE, inkOUT, PhoenixR, Revian FDA-cleared LED hair cap, and Junera.",
    slugs: ["auragraft", "inkout", "phoenix-r", "revian", "junera"] as const,
  },
  hair: {
    label: "Hair",
    path: "/hair" as const,
    kicker: "Hair",
    title: "The hair department.",
    dek: "AuraGraft, QBio, and Revian — the hair floor, in one file.",
    seoTitle: "Hair Products | AuraGraft, Revian, QBio | AuraGenics",
    seoDescription:
      "Hair products for United States practices: AuraGraft FUE, Revian LED, and QBio exosomes.",
    slugs: ["auragraft", "exosomes", "revian"] as const,
  },
} as const;

export type ProductStat = { value: string; label: string };

export type Product = {
  slug: string;
  folio: string;
  department: string;
  title: string;
  kicker: string;
  tagline: string;
  summary: string;
  image: string;
  imageAlt: string;
  points: string[];
  notice: string;
  specialties: string[];
  stats?: ProductStat[];
  specimen?: string;
  source?: string;
  sourceUrl?: string;
  gallery?: { src: string; alt: string }[];
};

/** Shown on every product page. Do not paraphrase manufacturer FDA language. */
export const FDA_LINE =
  "Indications, claims, and regulatory status follow the manufacturer’s published labeling. Confirm clearance, registration, or 510(k) for the indication you intend to market. Professional use only.";

export const PRODUCTS: Product[] = [
  {
    slug: "exosomes",
    folio: "012",
    department: "Biologics",
    title: "QBio Exosomes",
    kicker: "Quintessence Biologics",
    tagline:
      "At Quintessence Biologics, we create science-backed products that rejuvenate and restore.",
    summary:
      "QBio is an FDA-cleared topical-use product. Elixir and Gro are the in-clinic cosmetics. Gel reconstitutes them and goes home with the patient. Every one of them is manufactured in our own FDA-registered facility and characterized by independent laboratories.",
    image: "/images/exosomes.jpg",
    imageAlt: "QBio Elixir professional topical, the United States",
    points: [
      "Infused with a rich array of advanced bioactive biomolecules known for their role in stimulating the skin's natural rejuvenation and restoration processes, QBio Elixir rejuvenates your skin at a cellular level. It promotes a youthful, radiant complexion and effectively slows down the signs of skin aging.",
      "Enriched with a powerful blend of bioactive biomolecules, known to target roots to stimulate natural hair growth and scalp vitality, QBio Gro nourishes and strengthens from the scalp to the ends, promoting thicker, fuller, and more vibrant hair, while also slowing down the visible signs of hair aging.",
      "Exosomes are tiny, membrane-bound vesicles released by cells that play a crucial role in cell-to-cell communication. They transport proteins, lipids, and genetic material, influencing the behavior of recipient cells.",
      "QBio is an FDA-cleared topical-use product. For topical use only.",
    ],
    notice:
      "QBio is an FDA-cleared topical-use product. Professional-use cosmetics intended exclusively for single-patient topical use. Manufactured by the laboratory, an FDA-registered U.S. facility.",
    specialties: [
      "dermatology",
      "plastic-surgery",
      "medspa",
      "hair",
      "orthopedics",
    ],
    stats: [
      { value: "50B", label: "Exosome-sized particles per vial (Elixir, Gro)" },
      { value: "FDA", label: "Cleared for topical use" },
      { value: "U.S.", label: "Manufactured in an FDA-registered facility" },
    ],
    specimen: "FDA-cleared topical use · United States",
    source: "Quintessence Biologics / QBio",
    sourceUrl: "https://qbio.us/products",
  },
  {
    slug: "phoenix-r",
    folio: "014",
    department: "Device",
    title: "PhoenixR",
    kicker: "Nanocrystal Transdermal Beauty Device",
    tagline:
      "The World's First Nanocrystal Transdermal Beauty Device Combining Electroporation, EMS, and LED Technology",
    summary:
      "PhoenixR is a next-generation transdermal beauty instrument that combines nanotechnology with advanced electrophysical technology. It utilizes a 24K gold-plated crystal head, delivering exceptional smoothness, conductivity, and durability. Equipped with four core technologies—Microneedling, Electroporation, EMS, and LED phototherapy—it enables a complete, all-in-one aesthetic treatment system.",
    image: "/images/phoenixr-main.jpg",
    imageAlt:
      "PhoenixR nanocrystal transdermal beauty device with 24K gold-plated crystal head",
    points: [
      "24K Gold-Plated Crystal Head. The treatment head is coated with 24K gold, offering superior smoothness, enhanced conductivity, and long-lasting durability.",
      "4-in-1 Integrated Technology. Combines Microneedling, Electroporation, EMS, and LED phototherapy in a single device, enabling comprehensive treatment.",
      "Nano-Level Transdermal Delivery. The nanocrystal structure enhances transdermal absorption efficiency, allowing active ingredients to penetrate deeper into the skin.",
      "High Compatibility. Compatible with a wide range of serums, including hyaluronic acid, peptides, collagen, and other active ingredients.",
      "Professional + Home Dual Use. Suitable for both professional beauty salons and personal skincare use.",
      "Safe and Hygienic. Features a detachable, replaceable treatment head to ensure hygiene and prevent cross-contamination.",
    ],
    notice:
      "This content is for informational purposes only and is not intended as medical advice.",
    specialties: ["dermatology", "plastic-surgery", "medspa"],
    stats: [
      { value: "4-in-1", label: "Microneedling, Electroporation, EMS, LED" },
      { value: "0.5–2.5", label: "mm adjustable needle depth" },
      { value: "625nm", label: "Red LED — collagen synthesis and anti-aging" },
      { value: "465nm", label: "Blue LED — antibacterial and anti-inflammatory" },
      { value: "24K", label: "Gold-plated crystal treatment head" },
    ],
    source: "PhoenixR brochure",
    gallery: [
      {
        src: "/images/phoenixr/in-use-1.jpg",
        alt: "PhoenixR in use — transdermal facial treatment",
      },
      {
        src: "/images/phoenixr/device-white.jpg",
        alt: "PhoenixR nanocrystal transdermal beauty device",
      },
      {
        src: "/images/phoenixr/in-use-2.jpg",
        alt: "PhoenixR in use on the face",
      },
      {
        src: "/images/phoenixr/device-white-2.jpg",
        alt: "PhoenixR with 24K gold-plated crystal head",
      },
      {
        src: "/images/phoenixr/kit-case.jpg",
        alt: "PhoenixR in its carrying case",
      },
      {
        src: "/images/phoenixr/head.jpg",
        alt: "PhoenixR 24K gold-plated crystal treatment head",
      },
      {
        src: "/images/phoenixr/kit.jpg",
        alt: "PhoenixR device, charging cable, and accessories",
      },
      {
        src: "/images/phoenixr/plate.jpg",
        alt: "PhoenixR with 24K gold-plated crystal plate",
      },
      {
        src: "/images/phoenixr/crystals.jpg",
        alt: "PhoenixR nanocrystal treatment heads",
      },
      {
        src: "/images/phoenixr/device-case.jpg",
        alt: "PhoenixR stored in its case",
      },
    ],
  },
  {
    slug: "auragraft",
    folio: "018",
    department: "Device",
    title: "AuraGraft",
    kicker: "FUE Hair Transplant System",
    tagline: "AuraGraft is the smart choice for FUE Hair Transplants",
    summary:
      "Developed by the original team that introduced suction-assisted FUE globally, AuraGraft is built to optimize safety, precision, and clinical outcomes. Lightweight (just 38 lbs), portable, and durable, it’s backed by an industry-leading 3-year warranty—setting a new standard for reliability in hair restoration.",
    image: "/images/auragraft.jpg",
    imageAlt:
      "AuraGraft FUE hair transplant console with touchscreen, collection canister, and handpiece",
    points: [
      "Touchscreen Interface: Intuitive and easy to navigate.",
      "Ergonomically Balanced Handpiece: Designed to reduce operator fatigue.",
      "Optimized Gear Ratio: Ensures smooth tissue extraction without heat damage.",
      "Powerful Vacuum Pressure: Prevents clogging and improves efficiency.",
      "One-Piece Disposable Contra-Angle & Punch: Cuts cleanup time by up to 45 minutes.",
      "Complete disposable procedure packs include handpiece, punch, tubing set, exterior fluid canister, and interior graft collection canister — no patient cross contamination; reduces clean up time by an average of 45 minutes.",
      "Low-torque, high-precision punch system reduces follicular trauma. Grafts retain structural integrity, leading to higher survival and natural results. Offers continuous hydration and cooling environment during graft handling, preserving tissue viability.",
      "Suitable for men and women of all hair types and textures. AuraGraft expands treatment possibilities to include permanent restoration of facial hair, eyebrows, and other body areas affected by hair loss.",
      "Transplanted hair grows naturally and fully within 9–12 months, blending seamlessly with existing hair for undetectable results.",
      "With AuraGraft priced at nearly half the cost of the previous suction-assisted FUE systems, your break-even point is dramatically reduced. In fact, you only need to treat approximately five patients to recoup your entire investment.",
    ],
    notice:
      "Developed by physicians, medical scientists and engineers. Use according to the manufacturer’s labeling and training.",
    specialties: ["hair", "plastic-surgery"],
    stats: [
      { value: "FUE", label: "Suction-assisted extraction" },
      { value: "38 lb", label: "Lightweight, portable console" },
      { value: "3 yr", label: "Industry-leading warranty" },
      { value: "5", label: "Patients to recoup investment, as the manufacturer states" },
    ],
    specimen: "FUE · 38 lbs · 3-year warranty",
    source: "AuraGraft / Blue Ocean Medical / AuraGenics",
    sourceUrl: "https://blueoceanmed.com/auragraft/",
  },
  {
    slug: "junera",
    folio: "030",
    department: "Device",
    title: "Junera",
    kicker: "Subdermal Laser Tissue Remodeling",
    tagline:
      "Dual-Wavelength 980nm + 1470nm Technology for Minimally Invasive Tissue Remodeling",
    summary:
      "Junera combines two clinically proven wavelengths—980nm and 1470nm—into one advanced platform engineered for controlled subdermal tissue remodeling, fat coagulation, skin contraction, and collagen stimulation.",
    image: "/images/junera.jpg",
    imageAlt: "Junera dual-wavelength contouring — brand photography",
    points: [
      "980nm targets vascularity and coagulation while supporting hemostasis and controlled tissue interaction.",
      "1470nm is highly absorbed by water, making it ideal for precise soft tissue remodeling, contraction, and collagen stimulation.",
      "A synergistic treatment that supports tightening, contouring, remodeling, and rejuvenation in one platform.",
      "Junera offers visible tissue response during treatment rather than relying solely on delayed outcomes common with external energy systems.",
      "Tiny entry point. Local anesthesia. Little downtime. Fast recovery.",
      "Offer an advanced category between surgery and non-invasive treatments.",
    ],
    notice:
      "Designed for physicians seeking results beyond traditional non-invasive devices. Use according to the manufacturer’s labeling and training. Individual results vary.",
    specialties: ["plastic-surgery", "medspa"],
    stats: [
      { value: "980", label: "nm — vascularity and coagulation" },
      { value: "1470", label: "nm — water-absorbed remodeling" },
    ],
    specimen: "980nm + 1470nm · minimally invasive · local anesthesia",
    source: "Junera / Blue Ocean Medical",
    sourceUrl: "https://blueoceanmed.com/junera/",
  },
  {
    slug: "inkout",
    folio: "042",
    department: "Device",
    title: "inkOUT",
    kicker: "Tattoo Removal",
    tagline:
      "The Latest in Non-Laser Tattoo and Permanent Makeup Removal Technology",
    summary:
      "inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology to naturally expel tattoo and permanent makeup ink through the skin’s surface. We are pleased to introduce InkOUT®, a patented, FDA Class I non-laser tattoo removal system powered by Trans-Epidermal Pigment Release (TEPRderm®) technology.",
    image: "/images/inkout-console.jpg",
    imageAlt: "inkOUT TEPRdrive Console with TEPR Pump and handpiece",
    points: [
      "inkOUT provides non-thermal, non-laser tattoo & permanent makeup removal.",
      "FDA Class I device — can be operated by properly trained staff.",
      "Our patented technology uses a controlled ink expulsion technique to disrupt ink particles while delivering our natural TEPRsol® solution. As the body naturally heals, ink is expelled through the skin’s surface. Ink sloughs off during the healing process via a crusting layer. That means no internal absorption.",
      "Rather than fragmenting pigment particles like lasers, TEPRderm technology facilitates the physical removal of ink through the body’s own regenerative process.",
      "Unlike other methods, TEPR works on yellow, red, white, blue, pastel, neon inks. Every color leaves the same way—through the surface of the skin.",
      "Up to 35% of ink is removed per session. For most tattoos, full removal happens in just 3–5 sessions over 10–15 months. That’s compared to 8–15+ laser sessions over 2+ years.",
      "Costs approximately one-fifth of most laser platforms.",
      "Proudly made in the USA (Utah) ensuring quality manufacturing standards.",
      "No melanin targeting means significantly reduced hypopigmentation risk. Fitzpatrick types I–IV all respond beautifully.",
    ],
    notice:
      "Individual results may vary. Safe when performed by certified technicians following proper protocols and aftercare guidelines. inkOUT®, TEPR®, TEPRderm®, and TEPRsol® are trademarks of Rejuvatek. Rejuvatek Aesthetics™ is a registered trademark.",
    specialties: ["medspa", "dermatology", "plastic-surgery"],
    stats: [
      { value: "3–5", label: "Typical sessions, as the manufacturer states" },
      { value: "35%", label: "Ink removed per session, as the manufacturer states" },
      { value: "I", label: "FDA Class I — trained staff may operate" },
    ],
    source: "inkOUT / Rejuvatek / Blue Ocean Medical",
    sourceUrl: "https://inkout.io/",
  },
  {
    slug: "revian",
    folio: "048",
    department: "Device",
    title: "Revian",
    kicker: "Hair Growth System",
    tagline:
      "#1 Doctor Recommended. FDA-Cleared at-home therapeutic LLLT device utilizing patented dual wavelength technology.",
    summary:
      "Clinically proven to grow more hair in less time. Dual wavelength technology — Revian’s precise pairing of red (660nm) and orange (620nm) LED wavelengths targets all three factors associated with hair loss — inflammation, lack of blood flow, and elevated DHT levels — in one convenient, at-home treatment.",
    image: "/images/revian.jpg",
    imageAlt: "Revian doctor-dispensed LED hair cap in its case",
    points: [
      "FDA-Cleared at-home therapeutic LLLT device.",
      "Red (660nm) and orange (620nm) LED wavelengths.",
      "Revian treatment takes just 10 minutes to complete.",
      "Participants who were treated with the red light therapy and were at least 80% compliant for the duration of the study had an average of 26.3 more hairs per cm² compared to those who wore a similar cap but did not have light therapy after 16 weeks.",
      "Indicated for men with Norwood-Hamilton classifications of IIa–V and women with Ludwig-Savin Scale I-1 to I-4, II-1, II-2 or frontal patterns of hair loss, as enrolled in the study.",
    ],
    notice:
      "FDA-Cleared at-home therapeutic LLLT device. See the manufacturer’s labeling for indications, contraindications, and use. Results depend on diagnosis and compliance as described in the clinical study.",
    specialties: ["hair", "dermatology", "medspa"],
    stats: [
      { value: "660", label: "nm red LED" },
      { value: "620", label: "nm orange LED" },
      { value: "+26.3", label: "hairs/cm² vs sham, ≥80% compliant, 16 weeks" },
    ],
    specimen: "FDA-Cleared LLLT · 660nm / 620nm · 10-minute treatment",
    source: "Revian / Blue Ocean Medical",
    sourceUrl: "https://blueoceanmed.com/revian-hair-growth-system/",
  },
];

export const LOOKBOOK_CHAPTERS: {
  kicker: string;
  title: string;
  dek: string;
  slugs: string[];
  featured?: boolean;
}[] = [
  {
    kicker: "Chapter I",
    title: "AuraGraft",
    dek: "The FUE platform — portable console, disposable packs, designed by the team that introduced suction-assisted extraction.",
    slugs: ["auragraft"],
    featured: true,
  },
  {
    kicker: "Chapter II",
    title: "The laboratory",
    dek: "QBio — from the laboratory. Manufactured in the United States. Professional use only.",
    slugs: ["exosomes"],
  },
  {
    kicker: "Chapter III",
    title: "Hair, continued",
    dek: "The FDA-cleared cap patients take home.",
    slugs: ["revian"],
  },
  {
    kicker: "Chapter IV",
    title: "Energy & contour",
    dek: "Junera — dual-wavelength 980nm + 1470nm subdermal remodeling.",
    slugs: ["junera"],
  },
  {
    kicker: "Chapter V",
    title: "Ink, out",
    dek: "Non-laser TEPR. All colors. Staff-operable. Made in Utah.",
    slugs: ["inkout"],
  },
];

export type TocItem =
  | {
      folio: string;
      dept: string;
      title: string;
      kind: "product";
      slug: string;
    }
  | {
      folio: string;
      dept: string;
      title: string;
      kind: "page";
      to: AppPath;
    };

export const CONTENTS: TocItem[] = [
  {
    folio: "012",
    dept: "Biologics",
    title: "QBio, made in Texas",
    kind: "product",
    slug: "exosomes",
  },
  {
    folio: "014",
    dept: "Device",
    title: "PhoenixR, nanocrystal transdermal device",
    kind: "product",
    slug: "phoenix-r",
  },
  {
    folio: "018",
    dept: "Hair surgery",
    title: "AuraGraft, the original FUE",
    kind: "product",
    slug: "auragraft",
  },
  {
    folio: "030",
    dept: "Device",
    title: "Junera, 980 + 1,470",
    kind: "product",
    slug: "junera",
  },
  {
    folio: "042",
    dept: "Removal",
    title: "inkOUT, through the surface",
    kind: "product",
    slug: "inkout",
  },
  {
    folio: "104",
    dept: "House",
    title: "MD Hair consulting",
    kind: "page",
    to: "/consulting",
  },
  {
    folio: "110",
    dept: "Desk",
    title: "Practice inquiry",
    kind: "page",
    to: "/inquire",
  },
];

export const ABOUT = {
  dek: "AuraGenics was established as a strategic partner to support emerging medical technology manufacturers and aesthetic and regenerative medicine physicians in navigating competitive markets. Our mission is to introduce innovative, “game-changing” products and services that redefine industry standards.",
  facts: [
    { value: "100+", label: "Years combined experience launching new technologies" },
    { value: "35", label: "Years introducing new hair restoration technologies and biologics" },
    { value: "38 lb", label: "AuraGraft portable console" },
    { value: "3 yr", label: "AuraGraft industry-leading warranty" },
  ],
  houses: [
    {
      folio: "I",
      title: "Devices",
      place: "AuraGraft · inkOUT · PhoenixR · Revian · Junera",
      body: "AuraGraft FUE Hair Transplant System. inkOUT Tattoo Removal. PhoenixR Nanocrystal Transdermal Beauty Device. Revian Hair Growth System. Junera Subdermal Laser Tissue Remodeling.",
      href: "/products",
      label: "Products",
    },
    {
      folio: "II",
      title: "Products",
      place: "Quintessence Biologics · Revian",
      body: "Quintessence Biologics Exosomes. Revian Hair Growth System.",
      href: "/exosomes",
      label: "QBio Exosomes",
    },
    {
      folio: "III",
      title: "MD Hair Coach",
      place: "Consulting",
      body: "Expert Guidance to Elevate Your Practice and Patient Results. Whether you're just entering the hair restoration space or looking to expand your current offerings.",
      href: "/consulting",
      label: "MD Hair Restoration Consulting",
    },
  ],
  body: [
    "AuraGenics was established as a strategic partner to support emerging medical technology manufacturers and aesthetic and regenerative medicine physicians in navigating competitive markets. Our mission is to introduce innovative, “game-changing” products and services that redefine industry standards.",
    "We are committed to creating uncontested market space and pioneering new business models for medical aesthetics manufacturers and physician practices. By doing so, we add more value to our customers and render traditional competition irrelevant. Through strategic partnerships with Premier global companies and niche service providers, we offer cost-effective, diversified products and expertise that helps our clients develop and execute sustainable, profitable growth strategies.",
    "The team has a combined experience of over 100 years with launching new technologies, building (start-ups) successful multi-million-dollar companies, and forming lifetime relationships with physicians and manufacturers around the world. 35 years with introducing new hair restoration technologies and biologics.",
    "Whether you are just starting your hair restoration program from scratch or want to expand on to your existing program, the hair restoration technology experts will provide you with the industry’s best products and services at affordable prices.",
  ],
};

export const FAQS = [
  {
    q: "Where is QBio manufactured?",
    a: "At the laboratory in the United States — an FDA-registered 361 tissue establishment (established 2018). The laboratory describes ISO Class 3 manufacturing with ISO Class 7 support; AABB-accredited, FDA-registered U.S. cord-bank partners; tissue from live, full-term, scheduled C-section births in U.S. hospitals; and third-party USP <71> sterility and USP <85> endotoxin testing on each batch before release against 21 CFR 1271 criteria.",
  },
  {
    q: "Are all products from AuraGenics?",
    a: "No. AuraGenics offers devices and products from other manufacturers — including QBio from the laboratory, PhoenixR, and inkOUT from Rejuvatek. Each product page cites the manufacturer of record. Confirm that manufacturer’s labeling.",
  },
  {
    q: "Do you sell in the United States?",
    a: "Yes. AuraGenics sells to licensed medical and aesthetic practices across the United States — all fifty states and the District of Columbia. We do not sell to consumers. Practice inquiry is the start of the file.",
  },
  {
    q: "Who can buy from AuraGenics?",
    a: "Licensed medical and aesthetic professionals in the U.S. — plastic surgeons, dermatologists, medical spas, hair restoration practices, and regenerative clinics including orthopedic groups exploring documented topicals. We do not sell to consumers.",
  },
  {
    q: "Is QBio FDA-cleared?",
    a: "QBio is an FDA-cleared topical-use product. It is intended exclusively for single-patient topical use. Manufactured by the laboratory, an FDA-registered U.S. facility.",
  },
  {
    q: "Do you treat osteoarthritis with QBio?",
    a: "No. QBio is an FDA-cleared topical-use product. We will consult with orthopedic and sports-medicine practices on manufacturing and characterization. We do not represent a treatment for osteoarthritis.",
  },
  {
    q: "Is inkOUT a laser?",
    a: "No. inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology. It is a patented, FDA Class I non-laser tattoo removal system. FDA Class I device — can be operated by properly trained staff. Unlike other methods, TEPR works on yellow, red, white, blue, pastel, neon inks. For most tattoos, full removal happens in just 3–5 sessions. Individual results may vary. Safe when performed by certified technicians following proper protocols and aftercare guidelines.",
  },
];

export const ROLES = [
  "Plastic surgeon",
  "Dermatologist",
  "Orthopedic / regenerative physician",
  "Hair restoration physician",
  "Medical spa owner / medical director",
  "Practice manager",
  "Other licensed professional",
];

export const INTERESTS = [
  { value: "exosomes", label: "QBio exosomes" },
  { value: "phoenix-r", label: "PhoenixR" },
  { value: "auragraft", label: "AuraGraft FUE" },
  { value: "junera", label: "Junera" },
  { value: "inkout", label: "inkOUT tattoo removal" },
  { value: "revian", label: "Revian LED" },
  { value: "hair", label: "Hair consulting" },
  { value: "several", label: "Several lines" },
];

export const US_STATES = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

export function productBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const PRODUCT_NAV_ORDER = [
  "auragraft",
  "inkout",
  "phoenix-r",
  "revian",
  "junera",
  "exosomes",
] as const;

export function productsInNavOrder() {
  return PRODUCT_NAV_ORDER.map((slug) => productBySlug(slug)).filter(
    (p): p is Product => Boolean(p),
  );
}

export const PRODUCT_PATHS = {
  exosomes: "/exosomes",
  "phoenix-r": "/phoenix-r",
  auragraft: "/auragraft",
  junera: "/junera",
  inkout: "/inkout",
  revian: "/revian",
} as const;

export type ProductHref = (typeof PRODUCT_PATHS)[keyof typeof PRODUCT_PATHS];

export function productHref(slug: string): ProductHref | undefined {
  return PRODUCT_PATHS[slug as keyof typeof PRODUCT_PATHS];
}
