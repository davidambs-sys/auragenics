export type StoryItem = { t: string; b: string };
export type StoryPractice = { slug: string; t: string; b: string };

export type ProductStory = {
  seoTitle: string;
  seoDescription: string;
  dek: string;
  lead: string;
  offeringKicker: string;
  offeringTitle: string;
  offeringItalic: string;
  body: string[];
  edit: StoryItem[];
  notForTitle?: string;
  notFor?: StoryItem[];
  extraImage?: string;
  extraImageAlt?: string;
  practicesKicker: string;
  practicesTitle: string;
  practices: StoryPractice[];
  faqs: { q: string; a: string }[];
  companionSlug?: string;
  companionTitle?: string;
  companionBody?: string;
  solo?: boolean;
};

export const PRODUCT_STORIES: Record<string, ProductStory> = {
  exosomes: {
    seoTitle: "QBio Exosomes Made in Texas for US Practices | AuraGenics",
    seoDescription:
      "QBio professional FDA-cleared topical-use exosome cosmetics, made in the United States. Elixir, Gro, and Gel — university-characterized, lot-documented.",
    dek: "FDA-cleared topical-use product. Manufactured in an FDA-registered U.S. facility.",
    lead: "QBio is an FDA-cleared topical-use product. Elixir and Gro are the in-clinic cosmetics. Gel reconstitutes them and goes home with the patient. Every one of them is manufactured in our own FDA-registered facility and characterized by independent laboratories. QBio Gro is not intended to affect the growth of hair.",
    offeringKicker: "The laboratory",
    offeringTitle: "What QBio",
    offeringItalic: "exosomes actually are.",
    body: [
      "At Quintessence Biologics, we create science-backed products that rejuvenate and restore. We believe true beauty is not about masking flaws but nurturing the skin to its optimal state of health and vitality. Our products embody this philosophy, offering more than superficial beauty - they provide the boost your body needs to realize its full potential.",
      "QBIO ELIXIR. Infused with a rich array of advanced bioactive biomolecules known for their role in stimulating the skin's natural rejuvenation and restoration processes, QBio Elixir rejuvenates your skin at a cellular level. It promotes a youthful, radiant complexion and effectively slows down the signs of skin aging.",
      "QBIO GRO. Enriched with a powerful blend of bioactive biomolecules, known to target roots to stimulate natural hair growth and scalp vitality, QBio Gro nourishes and strengthens from the scalp to the ends, promoting thicker, fuller, and more vibrant hair, while also slowing down the visible signs of hair aging.",
      "Exosomes are tiny, membrane-bound vesicles released by cells that play a crucial role in cell-to-cell communication. They transport proteins, lipids, and genetic material, influencing the behavior of recipient cells.",
      "Independent characterization includes dynamic light scattering at UT Arlington and mass-spectrometry proteomics at UT Southwestern. The laboratory reports on the order of 50 billion exosome-sized particles and more than 3,000 unique biomolecules per vial, with lot-level documentation. Manufacturing, as the laboratory describes it: ISO Class 3 cleanroom with ISO Class 7 support; AABB-accredited, FDA-registered U.S. cord banks; tissue from live, full-term, scheduled C-section births; third-party USP <71> sterility and USP <85> endotoxin on each batch before 21 CFR 1271 review.",
    ],
    edit: [
      {
        t: "Three SKUs, one lab",
        b: "Elixir, Gro, and Gel — a deliberate professional protocol, not a single mystery vial.",
      },
      {
        t: "University characterization",
        b: "DLS particle analysis at UT Arlington. Proteomic analysis at UT Southwestern. Read the dossier, do not take a slogan.",
      },
      {
        t: "U.S. manufacturing",
        b: "ISO Class 3 cleanroom, ISO Class 7 support. AABB-accredited cord-bank partners. Lot records travel with the material.",
      },
      {
        t: "A clear line",
        b: "QBio is an FDA-cleared topical-use product. For topical use only.",
      },
    ],
    notForTitle: "What QBio is not",
    notFor: [
      {
        t: "FDA-cleared for topical use",
        b: "QBio is an FDA-cleared topical-use product. For topical use only.",
      },
      {
        t: "Not an osteoarthritis therapy",
        b: "We will not market these cosmetics as a treatment for joint or tendon disease.",
      },
    ],
    extraImage: "/images/qbio-gro.jpg",
    extraImageAlt: "QBio Gro professional scalp cosmetic, the United States",
    practicesKicker: "Five practices",
    practicesTitle: "Where QBio sits on the floor.",
    practices: [
      {
        slug: "plastic-surgery",
        t: "Plastic surgery",
        b: "Elixir as a post-procedure topical cosmetic after energy, contour, or revision — with lot records in the chart.",
      },
      {
        slug: "dermatology",
        t: "Dermatology",
        b: "A characterized topical for physician-led skin programs that will actually read the university work.",
      },
      {
        slug: "medspa",
        t: "Medical spas",
        b: "A professional cosmetic lane that is not a gray-market biologic fridge.",
      },
      {
        slug: "hair",
        t: "Hair",
        b: "Gro as a professional scalp cosmetic. Not positioned as a growth drug. Pairs with AuraGraft and Revian.",
      },
      {
        slug: "orthopedics",
        t: "Orthopedics",
        b: "Education on manufacturing and characterization. QBio is an FDA-cleared topical-use product.",
      },
    ],
    faqs: [
      {
        q: "Is QBio FDA-cleared?",
        a: "QBio is an FDA-cleared topical-use product. It is for topical use only.",
      },
      {
        q: "What is in the line?",
        a: "Elixir for post-procedure skin, Gro for professional scalp cosmetic care, and Gel as a reconstitution and homecare medium.",
      },
      {
        q: "Who can buy QBio?",
        a: "Licensed medical and aesthetic professionals. We do not sell to consumers.",
      },
    ],
    companionSlug: "phoenix-r",
    companionTitle: "PhoenixR.",
    companionBody:
      "The World's First Nanocrystal Transdermal Beauty Device Combining Electroporation, EMS, and LED Technology",
  },
  "phoenix-r": {
    seoTitle: "PhoenixR Nanocrystal Transdermal Beauty Device | AuraGenics",
    seoDescription:
      "The World's First Nanocrystal Transdermal Beauty Device Combining Electroporation, EMS, and LED Technology. PhoenixR utilizes a 24K gold-plated crystal head with Microneedling, Electroporation, EMS, and LED phototherapy.",
    dek: "The World's First Nanocrystal Transdermal Beauty Device Combining Electroporation, EMS, and LED Technology",
    lead: "PhoenixR is a next-generation transdermal beauty instrument that combines nanotechnology with advanced electrophysical technology. It utilizes a 24K gold-plated crystal head, delivering exceptional smoothness, conductivity, and durability. Equipped with four core technologies—Microneedling, Electroporation, EMS, and LED phototherapy—it enables a complete, all-in-one aesthetic treatment system.",
    offeringKicker: "PhoenixR",
    offeringTitle: "Nanocrystal",
    offeringItalic: "Transdermal Beauty Device",
    body: [
      "PhoenixR is a next-generation transdermal beauty instrument that combines nanotechnology with advanced electrophysical technology. It utilizes a 24K gold-plated crystal head, delivering exceptional smoothness, conductivity, and durability. Equipped with four core technologies—Microneedling, Electroporation, EMS, and LED phototherapy—it enables a complete, all-in-one aesthetic treatment system.",
      "Its advanced design allows simultaneous implementation of transdermal delivery, muscle stimulation, and phototherapy, making it an ideal solution for professional skincare, medical aesthetics, and home beauty applications.",
      "Microneedling Technology. Creates micro-channels on the skin surface through micron-level mechanical stimulation, enhancing transdermal absorption of active ingredients. Adjustable needle depth: 0.5-2.5mm. Stimulates collagen regeneration. Improves skin texture.",
      "Electroporation Technology. Utilizes pulsed electric fields to temporarily increase cell membrane permeability, enabling efficient transdermal delivery of macromolecular active ingredients. No needle required. Painless transdermal delivery. Ideal for hyaluronic acid, peptides, and collagen.",
      "EMS (Electrical Muscle Stimulation). Stimulates facial muscles through microcurrents, enhancing muscle contraction and promoting lifting and firming effects. Improves facial contours. Enhances skin tightness. Promotes blood circulation.",
      "LED Phototherapy. Red Light (625nm): Promotes collagen synthesis and anti-aging. Blue Light (465nm): Antibacterial and anti-inflammatory, suitable for acne-prone skin.",
      "Suitable Applications: Anti-aging and wrinkle reduction. Skin tightening and lifting. Acne and inflammation management. Transdermal serum delivery. Eye area rejuvenation. Body slimming and firming.",
      "Technical Specifications. Model: BR-1. Functions: Microneedling, Electroporation, EMS, LED. Needle Depth: 0.5-2.5mm. LED Wavelength: Red 625nm / Blue 465nm. Treatment Head Material: 24K Gold-Plated Crystal. Power Supply: USB Charging. Applicable Areas: Face, Eyes, Body.",
    ],
    edit: [
      {
        t: "24K Gold-Plated Crystal Head",
        b: "The treatment head is coated with 24K gold, offering superior smoothness, enhanced conductivity, and long-lasting durability.",
      },
      {
        t: "4-in-1 Integrated Technology",
        b: "Combines Microneedling, Electroporation, EMS, and LED phototherapy in a single device, enabling comprehensive treatment.",
      },
      {
        t: "Nano-Level Transdermal Delivery",
        b: "The nanocrystal structure enhances transdermal absorption efficiency, allowing active ingredients to penetrate deeper into the skin.",
      },
      {
        t: "High Compatibility",
        b: "Compatible with a wide range of serums, including hyaluronic acid, peptides, collagen, and other active ingredients.",
      },
      {
        t: "Professional + Home Dual Use",
        b: "Suitable for both professional beauty salons and personal skincare use.",
      },
      {
        t: "Safe and Hygienic",
        b: "Features a detachable, replaceable treatment head to ensure hygiene and prevent cross-contamination.",
      },
      {
        t: "Microneedling",
        b: "Creates micro-channels to enhance transdermal absorption of active ingredients.",
      },
      {
        t: "Electroporation",
        b: "Increases cell membrane permeability for efficient delivery of macromolecules.",
      },
      {
        t: "EMS",
        b: "Stimulates muscle contraction to lift and firm facial contours.",
      },
      {
        t: "LED Phototherapy",
        b: "Red light promotes collagen synthesis; blue light provides antibacterial and anti-inflammatory effects.",
      },
    ],
    extraImage: "/images/phoenixr/in-use-2.jpg",
    extraImageAlt: "PhoenixR in use on the face",
    practicesKicker: "Suitable Applications",
    practicesTitle: "Suitable Applications",
    practices: [
      {
        slug: "dermatology",
        t: "Anti-aging and wrinkle reduction",
        b: "Skin tightening and lifting. Acne and inflammation management.",
      },
      {
        slug: "medspa",
        t: "Transdermal serum delivery",
        b: "Eye area rejuvenation. Body slimming and firming.",
      },
    ],
    faqs: [
      {
        q: "What functions does PhoenixR include?",
        a: "Functions: Microneedling, Electroporation, EMS, LED.",
      },
      {
        q: "What is the needle depth?",
        a: "Needle Depth: 0.5-2.5mm",
      },
      {
        q: "What LED wavelengths are used?",
        a: "LED Wavelength: Red 625nm / Blue 465nm",
      },
      {
        q: "What is the treatment head material?",
        a: "Treatment Head Material: 24K Gold-Plated Crystal",
      },
      {
        q: "What is the power supply?",
        a: "Power Supply: USB Charging",
      },
      {
        q: "What are the applicable areas?",
        a: "Applicable Areas: Face, Eyes, Body",
      },
    ],
    companionSlug: "exosomes",
    companionTitle: "QBio.",
    companionBody:
      "Quintessence Biologics — compatible with a wide range of serums, including hyaluronic acid, peptides, collagen, and other active ingredients.",
  },
  auragraft: {
    seoTitle: "AuraGraft FUE Hair Transplant System | United States",
    seoDescription:
      "AuraGraft is the smart choice for FUE Hair Transplants. Developed by physicians, medical scientists and engineers. Lightweight (just 38 lbs), 3-year warranty.",
    dek: "AuraGraft is the smart choice for FUE Hair Transplants",
    lead: "Developed by the original team that introduced suction-assisted FUE globally, AuraGraft is built to optimize safety, precision, and clinical outcomes. Lightweight (just 38 lbs), portable, and durable, it’s backed by an industry-leading 3-year warranty—setting a new standard for reliability in hair restoration.",
    offeringKicker: "AuraGraft FUE Hair Transplant System",
    offeringTitle: "Why Choose",
    offeringItalic: "AuraGraft?",
    body: [
      "Developed by physicians, medical scientists and engineers.",
      "Developed by the original team that introduced suction-assisted FUE globally, AuraGraft is built to optimize safety, precision, and clinical outcomes. Lightweight (just 38 lbs), portable, and durable, it’s backed by an industry-leading 3-year warranty—setting a new standard for reliability in hair restoration.",
      "Complete disposable procedure packs include handpiece, punch, tubing set, exterior fluid canister, and Interior graft collection canister - No patient cross contamination, reduces clean up time by an average of 45 minutes.",
      "With AuraGraft priced at nearly half the cost of the previous suction-assisted FUE systems, your break-even point is dramatically reduced, making ROI faster and more attainable. In fact, you only need to treat approximately five patients to recoup your entire investment.",
      "Efficient, Expert Harvesting. Low-torque, high-precision punch system reduces follicular trauma. Grafts retain structural integrity, leading to higher survival and natural results. Offers continuous hydration and cooling environment during graft handling, preserving tissue viability. Designed to significantly reduce procedure time and operator fatigue without compromising graft quality or density.",
      "Suitable for men and women of all hair types and textures—offering inclusive solutions for a diverse patient base. Transplanted hair grows naturally and fully within 9–12 months, blending seamlessly with existing hair for undetectable results. AuraGraft expands treatment possibilities to include permanent restoration of facial hair, eyebrows, and other body areas affected by hair loss.",
      "AuraGraft is more than a device—it’s part of a comprehensive hair restoration business model designed to support clinical success, patient acquisition, and long-term growth.",
      "The AuraGraft team includes the original pioneers who introduced suction-assisted FUE globally. With over 75 years of combined experience in launching new technologies, building successful multi-million-dollar startups, and forging long-term partnerships with physicians and manufacturers worldwide, our leadership brings unmatched insight and credibility to the field. We bring 35+ years of focused experience in hair restoration technologies and biologics—making AuraGraft not just a product, but a trusted solution backed by proven expertise.",
      "AuraGraft delivers superior performance, precision, and patient satisfaction compared to previous systems. For clinics looking to elevate their FUE outcomes, improve workflow efficiency, and stay ahead in a competitive market, AuraGraft is the smart choice.",
    ],
    edit: [
      {
        t: "Engineered Excellence",
        b: "Developed by the original team that introduced suction-assisted FUE globally, AuraGraft is built to optimize safety, precision, and clinical outcomes. Lightweight (just 38 lbs), portable, and durable, it’s backed by an industry-leading 3-year warranty—setting a new standard for reliability in hair restoration.",
      },
      {
        t: "Key Features",
        b: "Touchscreen Interface: Intuitive and easy to navigate. Ergonomically Balanced Handpiece: Designed to reduce operator fatigue. Optimized Gear Ratio: Ensures smooth tissue extraction without heat damage. Powerful Vacuum Pressure: Prevents clogging and improves efficiency. One-Piece Disposable Contra-Angle & Punch: Cuts cleanup time by up to 45 minutes.",
      },
      {
        t: "Highest Safety Profile",
        b: "Complete disposable procedure packs include handpiece, punch, tubing set, exterior fluid canister, and Interior graft collection canister - No patient cross contamination, reduces clean up time by an average of 45 minutes.",
      },
      {
        t: "Highest ROI",
        b: "With AuraGraft priced at nearly half the cost of the previous suction-assisted FUE systems, your break-even point is dramatically reduced, making ROI faster and more attainable. In fact, you only need to treat approximately five patients to recoup your entire investment.",
      },
      {
        t: "Minimally Invasive, Rapid Recovery",
        b: "Offers faster healing with minimal downtime.",
      },
      {
        t: "Backed by a Proven Team with Deep FUE Expertise",
        b: "The AuraGraft team includes the original pioneers who introduced suction-assisted FUE globally. We bring 35+ years of focused experience in hair restoration technologies and biologics.",
      },
    ],
    practicesKicker: "Assigned practices",
    practicesTitle: "Who stands this up.",
    practices: [
      {
        slug: "hair",
        t: "Hair transplant",
        b: "AuraGraft is the smart choice for FUE Hair Transplants — portable console, disposable packs, facial and body hair too.",
      },
      {
        slug: "plastic-surgery",
        t: "Plastic surgery",
        b: "Keep hair cases in-house. Pair with QBio Gro (not intended to affect the growth of hair) and FDA-Cleared Revian for the non-surgical lane.",
      },
    ],
    faqs: [
      {
        q: "Who developed AuraGraft?",
        a: "Developed by the original team that introduced suction-assisted FUE globally. Developed by physicians, medical scientists and engineers.",
      },
      {
        q: "How heavy is the console?",
        a: "Lightweight (just 38 lbs), portable, and durable, backed by an industry-leading 3-year warranty.",
      },
      {
        q: "Does it work only on the scalp?",
        a: "AuraGraft expands treatment possibilities to include permanent restoration of facial hair, eyebrows, and other body areas affected by hair loss. Suitable for men and women of all hair types and textures.",
      },
    ],
    companionSlug: "revian",
    companionTitle: "The at-home lane: Revian.",
    companionBody:
      "FDA-Cleared at-home therapeutic LLLT device utilizing patented dual wavelength technology.",
  },
  junera: {
    seoTitle: "Junera 980 + 1470 Body Device for US Practices | AuraGenics",
    seoDescription:
      "Junera dual-wavelength 980 nm and 1,470 nm for minimally invasive subdermal remodeling, contouring, and tightening. For trained physicians. Cash-pay category.",
    dek: "Dual-Wavelength 980nm + 1470nm Technology for Minimally Invasive Tissue Remodeling",
    lead: "The Next Evolution in Precision Aesthetic Remodeling. Junera combines two clinically proven wavelengths—980nm and 1470nm—into one advanced platform engineered for controlled subdermal tissue remodeling, fat coagulation, skin contraction, and collagen stimulation.",
    offeringKicker: "JUNERA™",
    offeringTitle: "Why",
    offeringItalic: "Junera?",
    body: [
      "Junera combines two clinically proven wavelengths—980nm and 1470nm—into one advanced platform engineered for controlled subdermal tissue remodeling, fat coagulation, skin contraction, and collagen stimulation.",
      "Designed for physicians seeking results beyond traditional non-invasive devices, Junera delivers a minimally invasive solution with precision, versatility, and rapid patient recovery.",
      "980nm Energy: Targets vascularity and coagulation while supporting hemostasis and controlled tissue interaction. 1470nm Energy: Highly absorbed by water, making it ideal for precise soft tissue remodeling, contraction, and collagen stimulation. Combined Result: A synergistic treatment that supports tightening, contouring, remodeling, and rejuvenation in one platform.",
      "Clinical Applications: Lower face and jawline contouring. Submental fat reduction. Neck tightening. Body contouring. Skin laxity improvement. Postpartum abdominal remodeling. Bra roll / flank refinement. Targeted tissue tightening.",
      "Better Than “Wait and See” Energy Devices. Junera offers visible tissue response during treatment rather than relying solely on delayed outcomes common with external energy systems. Minimally Invasive: Tiny entry point. Local anesthesia. Little downtime. Fast recovery. High Margin Procedure: Cash-pay treatments with attractive ROI potential. Differentiates Your Practice: Offer an advanced category between surgery and non-invasive treatments.",
    ],
    edit: [
      {
        t: "980nm Energy",
        b: "Targets vascularity and coagulation while supporting hemostasis and controlled tissue interaction.",
      },
      {
        t: "1470nm Energy",
        b: "Highly absorbed by water, making it ideal for precise soft tissue remodeling, contraction, and collagen stimulation.",
      },
      {
        t: "Combined Result",
        b: "A synergistic treatment that supports tightening, contouring, remodeling, and rejuvenation in one platform.",
      },
      {
        t: "Better Than “Wait and See” Energy Devices",
        b: "Junera offers visible tissue response during treatment rather than relying solely on delayed outcomes common with external energy systems.",
      },
      {
        t: "Minimally Invasive",
        b: "Tiny entry point. Local anesthesia. Little downtime. Fast recovery.",
      },
      {
        t: "High Margin Procedure",
        b: "Cash-pay treatments with attractive ROI potential. Offer an advanced category between surgery and non-invasive treatments.",
      },
    ],
    practicesKicker: "Assigned practices",
    practicesTitle: "Who contours.",
    practices: [
      {
        slug: "plastic-surgery",
        t: "Plastic surgery",
        b: "The energy between liposuction and a surface tightening device.",
      },
      {
        slug: "medspa",
        t: "Medical spas",
        b: "Physician-performed contouring with a cash-pay ROI story — not a technician belt.",
      },
    ],
    faqs: [
      {
        q: "Is Junera non-invasive?",
        a: "It is positioned as minimally invasive: small entry, local anesthesia, physician-performed. Not a surface-only belt.",
      },
      {
        q: "What are the wavelengths?",
        a: "980 nm for vascularity and coagulation, and 1,470 nm for water-absorbed soft-tissue remodeling.",
      },
      {
        q: "Who is it for?",
        a: "Trained physicians in plastic surgery and body-contouring practices. Use according to labeling.",
      },
    ],
    companionSlug: "inkout",
    companionTitle: "inkOUT — not a laser.",
    companionBody:
      "We are pleased to introduce InkOUT®, a patented, FDA Class I non-laser tattoo removal system powered by Trans-Epidermal Pigment Release (TEPRderm®) technology.",
  },
  inkout: {
    seoTitle: "inkOUT Non-Laser Tattoo Removal for US Med Spas | AuraGenics",
    seoDescription:
      "inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology. FDA Class I non-laser tattoo and permanent makeup removal. Made in Utah.",
    dek: "The Latest in Non-Laser Tattoo and Permanent Makeup Removal Technology",
    lead: "We are pleased to introduce InkOUT®, a patented, FDA Class I non-laser tattoo removal system powered by Trans-Epidermal Pigment Release (TEPRderm®) technology.",
    offeringKicker: "Non-Laser Tattoo Removal System",
    offeringTitle: "Powered by Patented",
    offeringItalic: "TEPRderm® Technology",
    body: [
      "We are pleased to introduce InkOUT®, a patented, FDA Class I non-laser tattoo removal system powered by Trans-Epidermal Pigment Release (TEPRderm®) technology.",
      "This innovative platform provides physicians and medical spas a compelling opportunity to offer comprehensive tattoo removal services — without the financial, operational, or regulatory limitations commonly associated with laser systems.",
      "InkOUT utilizes a controlled, fractional epidermal ablation process to access tattoo pigment within the dermis. Following treatment, the body’s natural healing response forms a protective crust (scab), which lifts pigment upward and out of the skin during the healing phase. Rather than fragmenting pigment particles like lasers, TEPRderm technology facilitates the physical removal of ink through the body’s own regenerative process.",
      "Unlike traditional laser platforms, InkOUT: Is NOT a laser — no laser credentialing required. Removes all ink colors, including traditionally difficult pigments. Safe for all skin types (Fitzpatrick I–VI). All-natural mechanism — physically removes ink from the dermis. Typically requires fewer sessions (3–5 treatments). Costs approximately one-fifth of most laser platforms. FDA Class I device — can be operated by properly trained staff. Proudly made in the USA (Utah) ensuring quality manufacturing standards.",
      "For many practices, tattoo removal has historically required a six-figure capital investment, complex compliance requirements, and laser-certified personnel. InkOUT eliminates those barriers.",
      "To further improve comfort and healing, we have developed a proprietary three-step treatment protocol specifically engineered to: Help minimize inflammatory response. Support consistent, predictable healing. Improve overall patient satisfaction. This refined approach makes the procedure more tolerable while maintaining strong clinical outcomes.",
      "InkOUT allows practices to offer: Complete tattoo removal. Tattoo lightening for cover-ups. Permanent makeup (PMU) correction. Microblading correction. Cosmetic tattoo revision. Because the system works on all ink colors and skin types, it significantly broadens the patient demographic you can confidently treat.",
      "From a practice growth standpoint, InkOUT delivers: Lower capital investment compared to laser systems. Minimal regulatory burden. Low ongoing consumable costs. Fast path to ROI. A new cash-pay service that complements existing aesthetic offerings.",
    ],
    edit: [
      {
        t: "Is NOT a laser",
        b: "No laser credentialing required. FDA Class I device — can be operated by properly trained staff.",
      },
      {
        t: "Removes all ink colors",
        b: "Including traditionally difficult pigments. Safe for all skin types (Fitzpatrick I–VI).",
      },
      {
        t: "Typically 3–5 treatments",
        b: "Costs approximately one-fifth of most laser platforms. Proudly made in the USA (Utah) ensuring quality manufacturing standards.",
      },
      {
        t: "A Strong Business Opportunity",
        b: "Lower capital investment compared to laser systems. Minimal regulatory burden. Low ongoing consumable costs. Fast path to ROI. A new cash-pay service that complements existing aesthetic offerings.",
      },
    ],
    practicesKicker: "Assigned practices",
    practicesTitle: "Who removes ink without a laser.",
    practices: [
      {
        slug: "medspa",
        t: "Medical spas",
        b: "FDA Class I device — can be operated by properly trained staff. A cash-pay tattoo and PMU service without a laser system.",
      },
      {
        slug: "dermatology",
        t: "Dermatology",
        b: "TEPR works on yellow, red, white, blue, pastel, neon inks — including colors lasers treat poorly.",
      },
      {
        slug: "plastic-surgery",
        t: "Plastic surgery",
        b: "Non-laser tattoo and permanent makeup removal on the aesthetic floor.",
      },
    ],
    faqs: [
      {
        q: "Is inkOUT a laser?",
        a: "No. inkOUT provides non-thermal, non-laser tattoo & permanent makeup removal. It utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology. It is a patented, FDA Class I non-laser tattoo removal system. FDA Class I device — can be operated by properly trained staff.",
      },
      {
        q: "Does it work on all ink colors?",
        a: "Unlike other methods, TEPR works on yellow, red, white, blue, pastel, neon inks. Every color leaves the same way—through the surface of the skin.",
      },
      {
        q: "How many sessions?",
        a: "Up to 35% of ink is removed per session. For most tattoos, full removal happens in just 3–5 sessions over 10–15 months. Individual results may vary. Safe when performed by certified technicians following proper protocols and aftercare guidelines.",
      },
    ],
    extraImage: "/images/inkout-console.jpg",
    extraImageAlt: "inkOUT TEPRdrive Console with TEPR Pump and handpiece",
    solo: true,
  },
  revian: {
    seoTitle: "Revian FDA-Cleared LED Hair Cap | United States | AuraGenics",
    seoDescription:
      "Revian dual-wavelength LED cap — 660 nm red and 620 nm orange. FDA-cleared LLLT for indicated pattern hair loss. Doctor-dispensed, app-monitored.",
    dek: "#1 Doctor Recommended. FDA-Cleared at-home therapeutic LLLT device utilizing patented dual wavelength technology.",
    lead: "Clinically proven to grow more hair in less time. Revian is a non-invasive hair loss solution that can reverse hair loss, improve hair growth, and boost hair volume and strand quality.",
    offeringKicker: "No Chemicals -- No Pills",
    offeringTitle: "What is",
    offeringItalic: "Revian?",
    body: [
      "#1 Doctor Recommended. FDA-Cleared at-home therapeutic LLLT device utilizing patented dual wavelength technology. Clinically proven to grow more hair in less time.",
      "Revian is a non-invasive hair loss solution that can reverse hair loss, improve hair growth, and boost hair volume and strand quality. The device relies on cutting-edge LED light to target the underlying causes of thinning hair and unlock the body’s natural self-healing and regenerative abilities. The Revian easy-to-use cordless cap delivers uniform scalp coverage, allowing patients to move effortlessly around various locations as they undergo their 10-minute treatment.",
      "Dual wavelength technology – Revian’s precise pairing of red (660nm) and orange (620nm) LED wavelengths has revolutionized hair restoration treatment by targeting all three factors associated with hair loss – inflammation, lack of blood flow, and elevated DHT levels – in one convenient, at-home treatment.",
      "Unprecedented scalp coverage – LED light therapy offers superior scalp coverage and deeper penetration than is possible with conventional laser-based hair loss solutions. The overlapping light cones in Revian evenly target every single hair follicle, allowing for maximum regrowth and nourishment.",
      "Flawless accuracy – Revian’s Red Hair Growth System is monitored through a Smart App, ensuring that patients receive a high degree of precision and accuracy when it comes to each session with the LED cap. Revian treatment takes just 10 minutes to complete – no more, no less.",
      "Participants who were treated with the red light therapy and were at least 80% compliant for the duration of the study had an average of 26.3 more hairs per cm² compared to those who wore a similar cap but did not have light therapy after 16 weeks.",
      "Subjects treated with placebo continued to lose hair over the duration of the study given the severity of pattern hair loss enrolled into the study (men with Norwood-Hamilton classifications of IIa – V and women with Ludwig-Savin Scale I-1 to I-4, II -1, II-2 or frontal patterns of hair loss).",
    ],
    edit: [
      {
        t: "Dual wavelength technology",
        b: "Revian’s precise pairing of red (660nm) and orange (620nm) LED wavelengths has revolutionized hair restoration treatment by targeting all three factors associated with hair loss – inflammation, lack of blood flow, and elevated DHT levels – in one convenient, at-home treatment.",
      },
      {
        t: "Unprecedented scalp coverage",
        b: "LED light therapy offers superior scalp coverage and deeper penetration than is possible with conventional laser-based hair loss solutions. The overlapping light cones in Revian evenly target every single hair follicle, allowing for maximum regrowth and nourishment.",
      },
      {
        t: "Flawless accuracy",
        b: "Revian’s Red Hair Growth System is monitored through a Smart App. Revian treatment takes just 10 minutes to complete – no more, no less.",
      },
      {
        t: "Significant Clinical Results",
        b: "Participants who were treated with the red light therapy and were at least 80% compliant for the duration of the study had an average of 26.3 more hairs per cm² compared to those who wore a similar cap but did not have light therapy after 16 weeks.",
      },
    ],
    practicesKicker: "Assigned practices",
    practicesTitle: "Who dispenses the cap.",
    practices: [
      {
        slug: "hair",
        t: "Hair practices",
        b: "The at-home adjunct after consult, imaging, or FUE — FDA-cleared, app-tracked.",
      },
      {
        slug: "dermatology",
        t: "Dermatology",
        b: "Pattern hair loss you would rather treat with labeled LLLT than an unlabeled LED.",
      },
      {
        slug: "medspa",
        t: "Medical spas",
        b: "A retail-dispensed, doctor-authorized cap with a clinical number you can actually quote.",
      },
    ],
    faqs: [
      {
        q: "Is Revian FDA-cleared?",
        a: "Yes, for indicated pattern hair loss as labeled. See the 510(k) and indications for men (Norwood-Hamilton IIa–V) and women (Ludwig-Savin ranges listed).",
      },
      {
        q: "What does the study show?",
        a: "Compliant subjects (at least 80% over 16 weeks) had an average of 26.3 more hairs/cm² versus a sham cap. Placebo subjects continued to lose hair. Results depend on diagnosis and compliance.",
      },
    ],
    companionSlug: "auragraft",
    companionTitle: "When the cap sits next to FUE.",
    companionBody:
      "AuraGraft is the surgical console. Revian is the FDA-cleared at-home lane.",
  },
};

export function storyBySlug(slug: string) {
  return PRODUCT_STORIES[slug];
}
