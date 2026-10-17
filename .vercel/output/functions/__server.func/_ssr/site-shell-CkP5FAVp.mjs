import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-CkP5FAVp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE = {
	name: "AURAGENICS",
	masthead: "Laboratory · Devices",
	issue: "No. 01",
	season: "Autumn 2026",
	logo: "/images/logo.png",
	tagline: "A luxury US manufacturer of medical devices, QBio exosomes, and peptide biomolecules.",
	description: "Auragenics is a United States medical manufacturer and laboratory house in Irving, Texas: QBio professional exosome cosmetics, peptide biomolecules, and high-end aesthetic and hair-restoration devices for licensed practices nationwide.",
	phone: "(817) 719-1322",
	phoneHref: "tel:+18177191322"
};
var LAB = {
	name: "Re-Gen Active Lab",
	legalName: "Re-Gen Active Lab, Inc.",
	since: "2018",
	url: "https://regenactivelab.com/",
	phone: "(817) 719-1322",
	phoneHref: "tel:+18177191322",
	street: "2216 W Walnut Hill Lane",
	city: "Irving",
	region: "TX",
	postal: "75038",
	country: "United States",
	kicker: "The Irving laboratory",
	dek: "Sister laboratory. FDA-registered 361 tissue establishment. Human umbilical cord and amniotic membrane–derived biomolecules — exosomes, proteins, peptides, growth factors — manufactured in Irving, Texas.",
	biomolecules: [
		"Exosomes",
		"Proteins",
		"Peptides",
		"Growth factors",
		"Other bioactive molecules"
	],
	standards: [
		{
			t: "ISO Class 3 cleanroom",
			b: "Manufacturing in a certified ISO Class 3 cleanroom, with ISO Class 7 supporting areas — as the laboratory describes. Validated air, pressure, and particulate monitoring."
		},
		{
			t: "U.S. cord-bank partners",
			b: "Tissue sourced through FDA-registered, AABB-accredited cord banks. Live, full-term, scheduled C-section births in U.S. hospitals only."
		},
		{
			t: "Third-party release testing",
			b: "Each batch: USP <71> sterility and USP <85> endotoxin analysis by independent laboratories, reviewed against 21 CFR 1271 criteria before release."
		},
		{
			t: "Donor screening",
			b: "Medical, behavioral, and social screening plus a maternal infectious-disease panel (including HIV, HBV, HCV, HTLV, syphilis, CMV, WNV, Zika, Chagas) as described by the laboratory."
		}
	],
	promise: [
		"Rigorous donor screening",
		"Transparent sourcing and traceability",
		"Regulatory compliance as a 361 tissue establishment",
		"Third-party validated quality control"
	],
	disclaimer: "Re-Gen Active Lab manufactures human tissue–based products regulated under section 361 of the Public Health Service Act and 21 CFR Part 1271. These products are not intended to diagnose, treat, cure, or prevent any disease. Distributed exclusively for licensed professionals. QBio, as Auragenics places it, is a professional topical cosmetic — not an injectable, not an FDA-approved exosome drug."
};
var PROCESS = [
	{
		n: "01",
		t: "U.S. recovery",
		b: "Live, full-term, scheduled C-section births in U.S. hospitals. AABB-accredited, FDA-registered cord banks."
	},
	{
		n: "02",
		t: "Eligibility",
		b: "Donor medical, behavioral, and social screening. Maternal infectious-disease panel as the laboratory describes."
	},
	{
		n: "03",
		t: "ISO Class 3",
		b: "Manufacturing in a certified ISO Class 3 cleanroom, ISO Class 7 support. Validated air, pressure, particulates."
	},
	{
		n: "04",
		t: "The profile",
		b: "Exosomes, proteins, peptides, growth factors — quantitatively assessed for batch-to-batch consistency."
	},
	{
		n: "05",
		t: "Independent labs",
		b: "USP <71> sterility and USP <85> endotoxin on every batch, by third parties — not an in-house checkbox."
	},
	{
		n: "06",
		t: "Release",
		b: "Reviewed against 21 CFR 1271. Then the lot file travels. That is the product. The brochure is not."
	}
];
var WILL_NOT = [
	{
		t: "That QBio is FDA-approved",
		b: "There are currently no FDA-approved exosome products. We will not invent one in a sentence."
	},
	{
		t: "That it belongs in a joint",
		b: "We do not sell an injectable orthopedic indication. Documentation is not a wink."
	},
	{
		t: "That Gro is a growth drug",
		b: "It is a professional scalp cosmetic. Hair restoration is a diagnosis, a camera, and a device — not a vial."
	},
	{
		t: "That AuraLux restores hair",
		b: "A 510(k) for that indication is pending. Pending is not cleared. We will say pending."
	},
	{
		t: "That we compound GLP-1s",
		b: "Peptides here are cord- and amnion-derived biomolecules from Irving. Not a weight-loss catalog."
	}
];
var ROOMS = [
	{
		folio: "I",
		title: "The hair bay",
		kicker: "Camera, then the tool",
		body: "HairPro first — the scalp on a screen the patient can leave with. Then Revian if a cleared cap belongs. Gro as a topical cosmetic. AuraGraft if you operate. The room in that order, or not at all.",
		image: "/images/hair.jpg",
		imageAlt: "Revian LED cap in use — doctor-dispensed hair device",
		href: "/consulting",
		label: "MD Hair Consulting"
	},
	{
		folio: "II",
		title: "The post-procedure tray",
		kicker: "Where a topical belongs",
		body: "QBio Elixir on the tray after energy or surgery. Gel with the reconstitution instructions. Lot on the chart. No new category because the word “exosome” photographs well.",
		image: "/images/exosomes.jpg",
		imageAlt: "QBio Elixir bottle — Irving laboratory topical",
		href: "/products/exosomes",
		label: "QBio Exosomes"
	},
	{
		folio: "III",
		title: "The removal bay",
		kicker: "Staff, not a laser theater",
		body: "inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology. FDA Class I device — can be operated by properly trained staff. For most tattoos, full removal happens in just 3–5 sessions. Unlike other methods, TEPR works on yellow, red, white, blue, pastel, neon inks.",
		image: "/images/inkout-portrait.jpg",
		imageAlt: "inkOUT — non-laser tattoo removal, from the brand",
		href: "/products/inkout",
		label: "inkOUT"
	}
];
var NAV = [
	{
		label: "Lookbook",
		to: "/lookbook"
	},
	{
		label: "Laboratory",
		to: "/laboratory"
	},
	{
		label: "Practices",
		to: "/practices"
	},
	{
		label: "Journal",
		to: "/journal"
	},
	{
		label: "About",
		to: "/about"
	}
];
/** Shown on every product page. Do not paraphrase manufacturer FDA language. */
var FDA_LINE = "Indications, claims, and regulatory status follow the manufacturer’s published labeling. Confirm clearance, registration, or 510(k) for the indication you intend to market. Professional use only.";
var PRODUCTS = [
	{
		slug: "exosomes",
		folio: "012",
		department: "Biologics",
		title: "QBio Exosomes",
		kicker: "Quintessence Biologics · Irving, Texas",
		tagline: "Professional-use topical cosmetics. Manufactured in our FDA-registered U.S. facility.",
		summary: "Elixir and Gro are the in-clinic cosmetics. Gel reconstitutes them and goes home with the patient. Every one of them is manufactured in our own FDA-registered facility and characterized by independent laboratories.",
		image: "/images/exosomes.jpg",
		imageAlt: "QBio Elixir professional topical, Irving, Texas",
		points: [
			"QBio Elixir — post-procedure topical cosmetic for the appearance of skin after aesthetic procedures. 50 billion exosome-sized particles per vial. Leave on for 12 hours.",
			"QBio Gro — professional post-procedure scalp cosmetic care. Not intended to affect the growth of hair. 50 billion exosome-sized particles per vial. Leave on for 24 hours.",
			"QBio Gel — reconstitution medium for Elixir and Gro, with a professional homecare role.",
			"There are no FDA-approved exosome products, for any indication, from any company. QBio products are topical cosmetics for professional use — not drugs, not biologics, and not approved therapies.",
			"“FDA-registered facility” means the manufacturing establishment is registered with the FDA. It is a registration, not an approval.",
			"They are not intended for injection or intravenous delivery."
		],
		notice: "QBio products are professional-use topical cosmetics intended exclusively for single-patient topical use. They are not drugs and are not intended to diagnose, treat, cure, or prevent any disease or medical condition. They are not intended for injection or intravenous delivery. Manufactured by Re-Gen Active Lab, an FDA-registered facility in Irving, Texas.",
		specialties: [
			"dermatology",
			"plastic-surgery",
			"medspa",
			"hair",
			"orthopedics"
		],
		stats: [
			{
				value: "50B",
				label: "Exosome-sized particles per vial (Elixir, Gro)"
			},
			{
				value: "FDA",
				label: "Registered manufacturing facility — not product approval"
			},
			{
				value: "0",
				label: "FDA-approved exosome products, anywhere"
			}
		],
		specimen: "Topical cosmetic · Irving, TX · not a drug · not for injection",
		source: "Quintessence Biologics / QBio",
		sourceUrl: "https://qbio.us/products"
	},
	{
		slug: "peptides",
		folio: "015",
		department: "Biologics",
		title: "Peptides",
		kicker: "Re-Gen Active Lab · Irving, Texas",
		tagline: "Human tissue–based products regulated under section 361 of the Public Health Service Act and 21 CFR Part 1271.",
		summary: "Re-Gen Active Lab manufactures biomolecule-rich products derived from human umbilical cord and amniotic membrane — including exosomes, proteins, peptides, and growth factors — in an FDA-registered facility in Irving, Texas.",
		image: "/images/peptides.jpg",
		imageAlt: "QBio Gel reconstitution medium from Re-Gen Active Lab, Irving",
		points: [
			"Manufactured by Re-Gen Active Lab, sister laboratory to QBio, in Irving, Texas.",
			"Derived from ethically sourced human umbilical cord and amniotic membrane.",
			"ISO Class 3 manufacturing with ISO Class 7 support, as the laboratory describes.",
			"Tissue sourced through FDA-registered, AABB-accredited cord banks. Live, full-term, scheduled C-section births in U.S. hospitals.",
			"Distributed exclusively for licensed professionals."
		],
		notice: "Re-Gen Active Lab manufactures human tissue–based products regulated under section 361 of the Public Health Service Act and 21 CFR Part 1271. These products are not intended to diagnose, treat, cure, or prevent any disease. Distributed exclusively for licensed professionals.",
		specialties: [
			"dermatology",
			"plastic-surgery",
			"medspa",
			"hair",
			"orthopedics"
		],
		stats: [{
			value: "361",
			label: "PHS Act / 21 CFR 1271, as the laboratory describes"
		}, {
			value: "TX",
			label: "Manufactured in Irving with QBio"
		}],
		specimen: "361 tissue establishment · Irving · licensed professionals",
		source: "Re-Gen Active Lab",
		sourceUrl: "https://regenactivelab.com/"
	},
	{
		slug: "auragraft",
		folio: "018",
		department: "Hair surgery",
		title: "AuraGraft",
		kicker: "FUE Hair Transplants",
		tagline: "AuraGraft is the smart choice for FUE Hair Transplants",
		summary: "Developed by the original team that introduced suction-assisted FUE globally, AuraGraft is built to optimize safety, precision, and clinical outcomes. Lightweight (just 38 lbs), portable, and durable, it’s backed by an industry-leading 3-year warranty—setting a new standard for reliability in hair restoration.",
		image: "/images/auragraft.jpg",
		imageAlt: "AuraGraft FUE hair transplant console, touchscreen, and suction handpiece",
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
			"With AuraGraft priced at nearly half the cost of the previous suction-assisted FUE systems, your break-even point is dramatically reduced. In fact, you only need to treat approximately five patients to recoup your entire investment."
		],
		notice: "Restore lost hair with the AuraGraft medical aesthetic device using precision follicular-unit extraction (FUE) – a method we pioneered. AuraGraft™ rejuvenates your hairline with your own healthy hair providing the most natural-looking results for those who are bald or have thinning hair. Use according to the manufacturer’s labeling and training.",
		specialties: ["hair", "plastic-surgery"],
		stats: [
			{
				value: "38 lb",
				label: "Lightweight, portable console"
			},
			{
				value: "3 yr",
				label: "Industry-leading warranty"
			},
			{
				value: "5",
				label: "Patients to recoup investment, as the manufacturer states"
			}
		],
		specimen: "FUE · 38 lbs · disposable packs · 3-year warranty",
		source: "AuraGraft / Blue Ocean Medical / Auragenics",
		sourceUrl: "https://blueoceanmed.com/auragraft/"
	},
	{
		slug: "auralux",
		folio: "024",
		department: "Energy",
		title: "AuraLux",
		kicker: "Powered by Vydence ProDeep®",
		tagline: "AuraLux, featuring Vydence’s ProDeep 1340nm energy platform, is now available in the U.S.",
		summary: "For nearly six years, Vydence has successfully utilized the ProDeep platform for hair restoration across South America and Europe. With over 70 FDA clearances in the US, Vydence is currently awaiting 510(k) FDA clearance for hair restoration.",
		image: "/images/energy.jpg",
		imageAlt: "Editorial photograph of an energy platform in a cream treatment room",
		points: [
			"ProDeep® is a unique 1,340 nm, non-ablative fractional Nd:YAP laser with deeper penetration than any other laser in its class.",
			"Exclusive 1340nm, fractionated, non-ablative platform.",
			"Additional plug & play handpieces & spots for 70 FDA-cleared treatments.",
			"Etherea-mx® by Vydence — laser and light platform, leader in the Brazilian market, validated by international KOLs.",
			"Vydence is currently awaiting 510(k) FDA clearance for hair restoration. That indication is not claimed here."
		],
		notice: "With over 70 FDA clearances in the US, Vydence is currently awaiting 510(k) FDA clearance for hair restoration. AuraLux is not represented as FDA-cleared for hair restoration while that 510(k) remains pending. Prescription device. Use according to labeling, indications, and training.",
		specialties: [
			"dermatology",
			"plastic-surgery",
			"medspa"
		],
		stats: [
			{
				value: "1,340",
				label: "nm non-ablative fractional Nd:YAP (ProDeep®)"
			},
			{
				value: "70+",
				label: "FDA clearances in the US, as Vydence states"
			},
			{
				value: "510(k)",
				label: "Hair restoration — awaiting clearance"
			}
		],
		specimen: "ProDeep® 1,340 nm · 70+ FDA clearances · hair 510(k) pending",
		source: "AuraLux / Vydence / Blue Ocean Medical",
		sourceUrl: "https://blueoceanmed.com/auralux/"
	},
	{
		slug: "junera",
		folio: "030",
		department: "Body",
		title: "Junera",
		kicker: "980nm + 1470nm",
		tagline: "Dual-Wavelength 980nm + 1470nm Technology for Minimally Invasive Tissue Remodeling",
		summary: "Junera combines two clinically proven wavelengths—980nm and 1470nm—into one advanced platform engineered for controlled subdermal tissue remodeling, fat coagulation, skin contraction, and collagen stimulation.",
		image: "/images/junera.jpg",
		imageAlt: "Junera dual-wavelength contouring — brand photography",
		points: [
			"980nm targets vascularity and coagulation while supporting hemostasis and controlled tissue interaction.",
			"1470nm is highly absorbed by water, making it ideal for precise soft tissue remodeling, contraction, and collagen stimulation.",
			"A synergistic treatment that supports tightening, contouring, remodeling, and rejuvenation in one platform.",
			"Junera offers visible tissue response during treatment rather than relying solely on delayed outcomes common with external energy systems.",
			"Tiny entry point. Local anesthesia. Little downtime. Fast recovery.",
			"Offer an advanced category between surgery and non-invasive treatments."
		],
		notice: "Designed for physicians seeking results beyond traditional non-invasive devices. Use according to the manufacturer’s labeling and training. Individual results vary.",
		specialties: ["plastic-surgery", "medspa"],
		stats: [{
			value: "980",
			label: "nm — vascularity and coagulation"
		}, {
			value: "1470",
			label: "nm — water-absorbed remodeling"
		}],
		specimen: "980nm + 1470nm · minimally invasive · local anesthesia",
		source: "Junera / Blue Ocean Medical",
		sourceUrl: "https://blueoceanmed.com/junera/"
	},
	{
		slug: "vydence",
		folio: "036",
		department: "Platforms",
		title: "Vydence",
		kicker: "Etherea-mx · Zye YAG · Zye ALX",
		tagline: "Each handpiece provides a wide range of treatment options. Which ones fit your practice best?",
		summary: "You can always upgrade your platform with new handpieces and wavelengths as your practice grows, thereby maximizing system ROI as well as the number of clinical indications you can treat.",
		image: "/images/vydence.jpg",
		imageAlt: "Modular laser console in an ivory treatment room with burgundy orchids",
		points: [
			"Platforms include ETHEREA-MX®, ZYE YAG®, and ZYE ALX®.",
			"Handpieces include ProDeep®, handPICO®, DualMode®, LongPulse®, and 3-10/VL®.",
			"Upgrade your platform with new handpieces and wavelengths as your practice grows.",
			"With over 70 FDA clearances in the US, as Vydence states. Confirm the 510(k) for the specific handpiece and indication you intend to market."
		],
		notice: "Indications vary by handpiece and clearance. Confirm the 510(k) for the indication you intend to market. Laser devices require appropriate credentials and labeling compliance.",
		specialties: [
			"dermatology",
			"plastic-surgery",
			"medspa"
		],
		stats: [{
			value: "3",
			label: "Chassis — Etherea-mx, Zye YAG, Zye ALX"
		}, {
			value: "70+",
			label: "FDA clearances in the US, as Vydence states"
		}],
		specimen: "Modular chassis · add handpieces · confirm each 510(k)",
		source: "Vydence Medical / Blue Ocean Medical",
		sourceUrl: "https://blueoceanmed.com/vydence-medical/"
	},
	{
		slug: "inkout",
		folio: "042",
		department: "Removal",
		title: "inkOUT",
		kicker: "TEPR® / TEPRderm®",
		tagline: "The Latest in Non-Laser Tattoo and Permanent Makeup Removal Technology",
		summary: "inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology to naturally expel tattoo and permanent makeup ink through the skin’s surface. We are pleased to introduce InkOUT®, a patented, FDA Class I non-laser tattoo removal system powered by Trans-Epidermal Pigment Release (TEPRderm®) technology.",
		image: "/images/inkout.jpg",
		imageAlt: "inkOUT TEPR non-laser tattoo removal device",
		points: [
			"inkOUT provides non-thermal, non-laser tattoo & permanent makeup removal.",
			"FDA Class I device — can be operated by properly trained staff.",
			"Our patented technology uses a controlled ink expulsion technique to disrupt ink particles while delivering our natural TEPRsol® solution. As the body naturally heals, ink is expelled through the skin’s surface. Ink sloughs off during the healing process via a crusting layer. That means no internal absorption.",
			"Rather than fragmenting pigment particles like lasers, TEPRderm technology facilitates the physical removal of ink through the body’s own regenerative process.",
			"Unlike other methods, TEPR works on yellow, red, white, blue, pastel, neon inks. Every color leaves the same way—through the surface of the skin.",
			"Up to 35% of ink is removed per session. For most tattoos, full removal happens in just 3–5 sessions over 10–15 months. That’s compared to 8–15+ laser sessions over 2+ years.",
			"Costs approximately one-fifth of most laser platforms.",
			"Proudly made in the USA (Utah) ensuring quality manufacturing standards.",
			"No melanin targeting means significantly reduced hypopigmentation risk. Fitzpatrick types I–IV all respond beautifully."
		],
		notice: "Individual results may vary. Safe when performed by certified technicians following proper protocols and aftercare guidelines. inkOUT®, TEPR®, TEPRderm®, and TEPRsol® are trademarks of Rejuvatek. Rejuvatek Aesthetics™ is a registered trademark.",
		specialties: [
			"medspa",
			"dermatology",
			"plastic-surgery"
		],
		stats: [
			{
				value: "3–5",
				label: "Typical sessions, as the manufacturer states"
			},
			{
				value: "35%",
				label: "Ink removed per session, as the manufacturer states"
			},
			{
				value: "I",
				label: "FDA Class I — trained staff may operate"
			}
		],
		specimen: "TEPR® · FDA Class I · made in Utah",
		source: "inkOUT / Rejuvatek / Blue Ocean Medical",
		sourceUrl: "https://inkout.io/"
	},
	{
		slug: "revian",
		folio: "048",
		department: "At-home",
		title: "Revian",
		kicker: "FDA-Cleared LLLT",
		tagline: "#1 Doctor Recommended. FDA-Cleared at-home therapeutic LLLT device utilizing patented dual wavelength technology.",
		summary: "Clinically proven to grow more hair in less time. Dual wavelength technology — Revian’s precise pairing of red (660nm) and orange (620nm) LED wavelengths targets all three factors associated with hair loss — inflammation, lack of blood flow, and elevated DHT levels — in one convenient, at-home treatment.",
		image: "/images/revian.jpg",
		imageAlt: "Revian doctor-dispensed LED hair cap in its case",
		points: [
			"FDA-Cleared at-home therapeutic LLLT device.",
			"Red (660nm) and orange (620nm) LED wavelengths.",
			"Revian treatment takes just 10 minutes to complete.",
			"Participants who were treated with the red light therapy and were at least 80% compliant for the duration of the study had an average of 26.3 more hairs per cm² compared to those who wore a similar cap but did not have light therapy after 16 weeks.",
			"Indicated for men with Norwood-Hamilton classifications of IIa–V and women with Ludwig-Savin Scale I-1 to I-4, II-1, II-2 or frontal patterns of hair loss, as enrolled in the study."
		],
		notice: "FDA-Cleared at-home therapeutic LLLT device. See the manufacturer’s labeling for indications, contraindications, and use. Results depend on diagnosis and compliance as described in the clinical study.",
		specialties: [
			"hair",
			"dermatology",
			"medspa"
		],
		stats: [
			{
				value: "660",
				label: "nm red LED"
			},
			{
				value: "620",
				label: "nm orange LED"
			},
			{
				value: "+26.3",
				label: "hairs/cm² vs sham, ≥80% compliant, 16 weeks"
			}
		],
		specimen: "FDA-Cleared LLLT · 660nm / 620nm · 10-minute treatment",
		source: "Revian / Blue Ocean Medical",
		sourceUrl: "https://blueoceanmed.com/revian-hair-growth-system/"
	},
	{
		slug: "hairpro",
		folio: "054",
		department: "Diagnostics",
		title: "HairPRO",
		kicker: "Precision scalp & hair analysis",
		tagline: "HairPRO is a powerful hair analysis system that incorporates state of the art imagery and AI technology to suggest treatment options, track results, and significantly increase revenue.",
		summary: "No Software Maintenance Fees — Automatic Software Updates — 1 year warranty.",
		image: "/images/hairpro.jpg",
		imageAlt: "HairPro CytoPen scalp analysis camera",
		points: [
			"OBSERVE & ANALYZE the health condition of hair and scalp.",
			"50–300 X MAGNIFICATION in normal, cross and parallel polarized, and UV light.",
			"HIGH RESOLUTION a detailed condition of scalp & hair.",
			"QR CODE sends results to patient via QR Code or email.",
			"PATIENT QUESTIONNAIRE increases reliability in analysis.",
			"SPLIT SCREEN allows comparison of past to current videos and photos.",
			"SUGGESTS YOUR SERVICES/PRODUCTS which significantly increases your revenue.",
			"INCREASE PATIENT SATISFACTION because graphs prove results."
		],
		notice: "An analysis and education tool as described by the manufacturer. Clinical judgment remains with the licensed provider.",
		specialties: [
			"hair",
			"dermatology",
			"medspa"
		],
		stats: [{
			value: "50–300×",
			label: "Magnification, polarized and UV"
		}, {
			value: "1 yr",
			label: "Warranty — no software maintenance fees"
		}],
		specimen: "50–300× · polarized + UV · QR to the patient",
		source: "HairPRO / Blue Ocean Medical",
		sourceUrl: "https://blueoceanmed.com/hairpro/"
	},
	{
		slug: "propatch",
		folio: "060",
		department: "Retail",
		title: "ProPatch+",
		kicker: "The Future of Nutrient Delivery",
		tagline: "The most advanced delivery system for nutrients with medical grade patch technology.",
		summary: "Utilizing the skin for the delivery system, ProPatch+ uses freeze-dried nanotechnology. Nutrients are transmitted through the skin and directly into bloodstream through Time-Release Technology allowing nutrients to be absorbed over an 8-hour period for increased absorption compared to pills.",
		image: "/images/propatch.jpg",
		imageAlt: "ProPatch+ Sculpt, Renew, and Vitri 90-day pack",
		points: [
			"SculptPatch — Physician Formulated to Enhance Body Sculpting Programs.",
			"RenewPatch — Scientifically Formulated with Skin and Hair Cellular Nutrition.",
			"VitriPatch — Scientifically Formulated with Vital Nutrients for Total Health and Wellness.",
			"Time-Release Technology — nutrients absorbed over an 8-hour period."
		],
		notice: "Dietary supplement patches as labeled by the manufacturer. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.",
		specialties: [
			"medspa",
			"plastic-surgery",
			"hair"
		],
		stats: [{
			value: "8 hr",
			label: "Time-release window, as the manufacturer states"
		}, {
			value: "3",
			label: "Lines — Sculpt, Renew, Vitri"
		}],
		specimen: "Transdermal patch · 8-hour time-release · three lines",
		source: "ProPatch+ / Blue Ocean Medical",
		sourceUrl: "https://blueoceanmed.com/propatch/"
	},
	{
		slug: "analysis",
		folio: "066",
		department: "Software",
		title: "AI Facial Analysis",
		kicker: "Smartphone Scans · Holistic Analysis · Treatment Marketing",
		tagline: "Experience cutting-edge facial analysis powered by AI. Easily scan a patient's face with just a smartphone—no special equipment needed.",
		summary: "Go beyond skin assessments. Evaluate facial aesthetics holistically by including proportions, symmetry, and volume loss in addition to skin surface analysis.",
		image: "/images/analysis.jpg",
		imageAlt: "Holisticana AI facial analysis on a practice tablet",
		points: [
			"Easily scan a patient's face with just a smartphone—no special equipment needed.",
			"Educate patients on which treatments will help them achieve their ideal look.",
			"Easily refer patients for treatments you don't offer in-house.",
			"Educate patients with a user-friendly app.",
			"Close the deal with the provider app."
		],
		notice: "An education and visualization tool as described by the manufacturer. Not a replacement for clinical examination.",
		specialties: [
			"plastic-surgery",
			"dermatology",
			"medspa"
		],
		stats: [{
			value: "Phone",
			label: "Scan — no special equipment needed"
		}, {
			value: "2",
			label: "Apps — patient and provider"
		}],
		specimen: "Smartphone scan · no booth · patient + provider apps",
		source: "AI Facial Analysis / Blue Ocean Medical",
		sourceUrl: "https://blueoceanmed.com/ai-facial-analysis-for-aesthetic-medicine/"
	}
];
var PRACTICES = [
	{
		slug: "plastic-surgery",
		folio: "072",
		title: "Plastic surgery",
		kicker: "The operating room, and after",
		dek: "Contouring energy, FUE, documented topicals and peptides, and tattoo revision for surgical practices that also run a cash-pay aesthetic floor.",
		seoTitle: "US Plastic Surgery Devices, FUE & Topicals | Auragenics",
		seoDescription: "Junera contouring, AuraGraft FUE, Vydence energy, inkOUT revision, and QBio professional topicals for United States plastic surgery practices.",
		image: "/images/energy.jpg",
		imageAlt: "Energy platform in a couture treatment room",
		products: [
			"junera",
			"auragraft",
			"auralux",
			"vydence",
			"inkout",
			"exosomes",
			"peptides",
			"analysis"
		],
		bullets: [
			"Junera for subdermal remodeling between lipo and surface devices",
			"AuraGraft for in-house FUE rather than referring every hair case out",
			"QBio Elixir and peptide biomolecules as post-procedure professional topicals, with lot records",
			"inkOUT for PMU and tattoo revision without a six-figure laser"
		]
	},
	{
		slug: "medspa",
		folio: "078",
		title: "Medical spas",
		kicker: "The floor that has to earn",
		dek: "Non-laser tattoo menus, peptide and exosome topicals, LED hair, patches, imaging, and energy platforms chosen for staff-operable, cash-pay throughput.",
		seoTitle: "US Medical Spa Products: inkOUT, Exosomes, LED | Auragenics",
		seoDescription: "Staff-operable inkOUT tattoo removal, QBio and peptide topicals, Revian LED, HairPro, ProPatch+, and physician-supervised energy for United States medical spas.",
		image: "/images/medspa.jpg",
		imageAlt: "Medical spa bed in ivory linen",
		products: [
			"inkout",
			"revian",
			"hairpro",
			"propatch",
			"auralux",
			"exosomes",
			"peptides",
			"analysis"
		],
		bullets: [
			"inkOUT as an FDA Class I, staff-operable tattoo and PMU service",
			"QBio and peptide biomolecules as a documented professional topical lane",
			"Revian and HairPro for a complete non-surgical hair bay",
			"ProPatch+ as a dispensed retail line after body and facial work"
		]
	},
	{
		slug: "dermatology",
		folio: "084",
		title: "Dermatology",
		kicker: "Skin, as a discipline",
		dek: "Fractional and pigment platforms, QBio Elixir and peptide biomolecules with university-adjacent documentation, and non-laser pigment removal that does not fragment ink the way Q-switched lasers do.",
		seoTitle: "US Dermatology Lasers, Exosomes & Tattoo Removal | Auragenics",
		seoDescription: "Vydence and AuraLux energy, QBio Elixir, peptide biomolecules, and non-laser inkOUT for United States dermatology practices. Confirm each clearance.",
		image: "/images/derm.jpg",
		imageAlt: "Dermatology room with a round mirror",
		products: [
			"vydence",
			"auralux",
			"exosomes",
			"peptides",
			"inkout",
			"revian",
			"analysis"
		],
		bullets: [
			"Vydence modular handpieces for pigment, vascular, and fractional work",
			"QBio Elixir and peptide biomolecules — topical, lot-documented, from the Irving lab",
			"inkOUT for tattoo and cosmetic tattoo cases you would rather not laser",
			"Revian as an FDA-cleared at-home adjunct for pattern hair loss"
		]
	},
	{
		slug: "hair",
		folio: "090",
		title: "Hair transplant & growth",
		kicker: "From graft to cap",
		dek: "The original FUE story, peptide and exosome cosmetics for the scalp, imaging that proves the course, an FDA-cleared LED cap, and MD-level consulting if you are standing up the department from zero.",
		seoTitle: "US Hair Transplant FUE, LED Cap & Scalp Cosmetics | Auragenics",
		seoDescription: "AuraGraft FUE, QBio Gro and peptides as scalp cosmetics, HairPro imaging, and FDA-cleared Revian LED for United States hair restoration practices.",
		image: "/images/hair.jpg",
		imageAlt: "Hair restoration suite",
		products: [
			"auragraft",
			"exosomes",
			"peptides",
			"revian",
			"hairpro"
		],
		bullets: [
			"AuraGraft FUE — portable, disposable packs, facial and body hair too",
			"QBio Gro and peptide biomolecules as professional scalp cosmetics (not growth drugs)",
			"HairPro imaging + Revian dual-wavelength LED for the non-surgical lane",
			"MD Hair Restoration Consulting for protocols, pricing, and training"
		]
	},
	{
		slug: "orthopedics",
		folio: "096",
		title: "Orthopedic & regenerative",
		kicker: "A careful yes",
		dek: "Orthopedic and sports-medicine groups increasingly ask about exosomes and peptides. We will talk manufacturing, characterization, and what is — and is not — a documented professional biomolecule. We will not sell an orthopedic injectable story we cannot document.",
		seoTitle: "US Orthopedic Exosomes: Documentation, Not a Claim | Auragenics",
		seoDescription: "What QBio and Irving peptide biomolecules are — and are not — for United States orthopedic and sports-medicine groups. Not FDA-approved. Not for injection.",
		image: "/images/ortho.jpg",
		imageAlt: "Warm stone regenerative clinic corridor",
		products: ["exosomes", "peptides"],
		bullets: [
			"Education on what QBio and the peptide line actually are: professional biomolecules, U.S.-made, lot-documented",
			"Independent university characterization on the exosome line (DLS and proteomics) you can read",
			"Clear line: not FDA-approved drugs, not for injection as we sell them, not a treatment for osteoarthritis or tendon disease",
			"Practice consult if you are building a regenerative menu and need documentation, not a claim"
		]
	}
];
var LOOKBOOK_CHAPTERS = [
	{
		kicker: "Chapter I",
		title: "AuraGraft",
		dek: "The FUE platform — portable console, disposable packs, designed by the team that introduced suction-assisted extraction.",
		slugs: ["auragraft"],
		featured: true
	},
	{
		kicker: "Chapter II",
		title: "The laboratory",
		dek: "Quintessence Biologics and peptide biomolecules — Elixir, Gro, Gel, and the peptide line. Manufactured in Irving. Professional use only.",
		slugs: ["exosomes", "peptides"]
	},
	{
		kicker: "Chapter III",
		title: "Hair, continued",
		dek: "The imaging that proves the course, and the FDA-cleared cap patients take home.",
		slugs: ["revian", "hairpro"]
	},
	{
		kicker: "Chapter IV",
		title: "Energy & contour",
		dek: "Subdermal remodeling, fractional Nd:YAP, and a modular laser family you grow by handpiece.",
		slugs: [
			"junera",
			"auralux",
			"vydence"
		]
	},
	{
		kicker: "Chapter V",
		title: "Ink, out",
		dek: "Non-laser TEPR. All colors. Staff-operable. Made in Utah.",
		slugs: ["inkout"]
	},
	{
		kicker: "Chapter VI",
		title: "The floor",
		dek: "Retail that dispenses after the visit, and analysis that maps to the menu you actually run.",
		slugs: ["propatch", "analysis"]
	}
];
var CONTENTS = [
	{
		folio: "008",
		dept: "Laboratory",
		title: "The Irving file",
		kind: "page",
		to: "/laboratory"
	},
	{
		folio: "012",
		dept: "Biologics",
		title: "QBio, made in Texas",
		kind: "product",
		slug: "exosomes"
	},
	{
		folio: "015",
		dept: "Biologics",
		title: "Peptides, from the same lab",
		kind: "product",
		slug: "peptides"
	},
	{
		folio: "018",
		dept: "Hair surgery",
		title: "AuraGraft, the original FUE",
		kind: "product",
		slug: "auragraft"
	},
	{
		folio: "030",
		dept: "Body",
		title: "Junera, 980 + 1,470",
		kind: "product",
		slug: "junera"
	},
	{
		folio: "042",
		dept: "Removal",
		title: "inkOUT, through the surface",
		kind: "product",
		slug: "inkout"
	},
	{
		folio: "072",
		dept: "Departments",
		title: "Five practices, one house",
		kind: "page",
		to: "/practices"
	},
	{
		folio: "096",
		dept: "Orthopedics",
		title: "The conversation we will have",
		kind: "practice",
		slug: "orthopedics"
	},
	{
		folio: "104",
		dept: "House",
		title: "MD Hair consulting",
		kind: "page",
		to: "/consulting"
	},
	{
		folio: "100",
		dept: "Journal",
		title: "The device as an object",
		kind: "page",
		to: "/journal"
	},
	{
		folio: "110",
		dept: "Desk",
		title: "Practice inquiry",
		kind: "page",
		to: "/inquire"
	}
];
var ABOUT = {
	dek: "Auragenics is a luxury medical manufacturer and laboratory house. We make QBio exosome cosmetics and peptide biomolecules in Irving, Texas, and we place a high-end device floor — FUE, energy, hair, imaging — into licensed practices.",
	facts: [
		{
			value: "2018",
			label: "Re-Gen Active Lab established in Irving"
		},
		{
			value: "ISO 3",
			label: "Certified cleanroom, ISO 7 support — as described"
		},
		{
			value: "361",
			label: "FDA-registered tissue establishment"
		},
		{
			value: "USP",
			label: "<71> sterility and <85> endotoxin, each batch"
		}
	],
	houses: [
		{
			folio: "I",
			title: "The laboratory",
			place: "Irving, Texas",
			body: "QBio Elixir, Gro, and Gel, and the peptide biomolecules — made by Re-Gen Active Lab, a sister FDA-registered 361 tissue establishment (since 2018). ISO Class 3 manufacturing, ISO Class 7 support. U.S. C-section cord and amnion. Lot records. Topical cosmetics, not drugs.",
			href: "/laboratory",
			label: "The Irving laboratory"
		},
		{
			folio: "II",
			title: "The devices",
			place: "The floor",
			body: "AuraGraft FUE, energy platforms, hair imaging and LED, contouring — a high-end device house, not a distributor PDF.",
			href: "/lookbook",
			label: "Open the lookbook"
		},
		{
			folio: "III",
			title: "The placed lines",
			place: "Utah, and after",
			body: "inkOUT / TEPR from Rejuvatek, and the rest of the floor we assign to a practice: retail, analysis, removal. Placed with the same desk as the laboratory.",
			href: "/products/inkout",
			label: "inkOUT"
		}
	],
	body: [
		"Auragenics is a luxury manufacturer and laboratory house. We make QBio professional exosome cosmetics and peptide biomolecules in Irving, Texas, with sister laboratory Re-Gen Active Lab — an FDA-registered 361 tissue establishment (since 2018) working human umbilical cord and amniotic membrane. ISO Class 3 manufacturing, ISO Class 7 support. We also make and place the device floor a high-end practice actually runs: AuraGraft FUE, energy, hair imaging and LED.",
		"The practices we serve kept asking for the rest of the room: tattoo removal, transdermal retail, facial analysis. That catalog lives with Blue Ocean Medical — 35 years in hair technologies — and with inkOUT from Rejuvatek in Utah. The desk is one desk. The laboratory remains the center of the house.",
		"We sell to licensed professionals — plastic surgeons, dermatologists, medical spas, hair transplant and growth practices, and regenerative orthopedic groups exploring documented biomolecules. We do not sell to consumers. We will not invent an injectable orthopedic indication for a topical or professional cosmetic."
	]
};
var FAQS = [
	{
		q: "Where are QBio and the peptides manufactured?",
		a: "At Re-Gen Active Lab in Irving, Texas — an FDA-registered 361 tissue establishment (established 2018). The laboratory describes ISO Class 3 manufacturing with ISO Class 7 support; AABB-accredited, FDA-registered U.S. cord-bank partners; tissue from live, full-term, scheduled C-section births in U.S. hospitals; and third-party USP <71> sterility and USP <85> endotoxin testing on each batch before release against 21 CFR 1271 criteria."
	},
	{
		q: "Do you sell in the United States?",
		a: "Yes. Auragenics sells to licensed medical and aesthetic practices across the United States — all fifty states and the District of Columbia. We do not sell to consumers. Practice inquiry is the start of the file."
	},
	{
		q: "Who can buy from Auragenics?",
		a: "Licensed medical and aesthetic professionals in the U.S. — plastic surgeons, dermatologists, medical spas, hair restoration practices, and regenerative clinics including orthopedic groups exploring documented topicals. We do not sell to consumers."
	},
	{
		q: "Are QBio exosomes FDA-approved?",
		a: "No. There are no FDA-approved exosome products, for any indication, from any company. QBio products are professional-use topical cosmetics intended exclusively for single-patient topical use. They are not drugs and are not intended to diagnose, treat, cure, or prevent any disease or medical condition. They are not intended for injection or intravenous delivery. Manufactured by Re-Gen Active Lab, an FDA-registered facility in Irving, Texas. “FDA-registered facility” is a registration, not an approval."
	},
	{
		q: "Do you sell orthopedic joint injections?",
		a: "No. We will consult with orthopedic and sports-medicine practices on what our topical QBio cosmetics are — and are not. We do not represent an injectable orthopedic indication."
	},
	{
		q: "Is inkOUT a laser?",
		a: "No. inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology. It is a patented, FDA Class I non-laser tattoo removal system. FDA Class I device — can be operated by properly trained staff. Unlike other methods, TEPR works on yellow, red, white, blue, pastel, neon inks. For most tattoos, full removal happens in just 3–5 sessions. Individual results may vary. Safe when performed by certified technicians following proper protocols and aftercare guidelines."
	},
	{
		q: "Is AuraLux FDA-cleared for hair restoration?",
		a: "With over 70 FDA clearances in the US, Vydence is currently awaiting 510(k) FDA clearance for hair restoration. That indication is not claimed on this site. Confirm labeling for the indication you intend to market."
	},
	{
		q: "Do you sell injectable research peptides or GLP-1s?",
		a: "No. The peptide offering is professional biomolecules from Re-Gen Active Lab in Irving — the same 361 tissue establishment that manufactures QBio — derived from umbilical cord and amniotic membrane. We do not run a compounding-pharmacy weight-loss catalog, and we do not sell unapproved injectable research peptides."
	}
];
var ROLES = [
	"Plastic surgeon",
	"Dermatologist",
	"Orthopedic / regenerative physician",
	"Hair restoration physician",
	"Medical spa owner / medical director",
	"Practice manager",
	"Other licensed professional"
];
var INTERESTS = [
	{
		value: "exosomes",
		label: "QBio exosomes"
	},
	{
		value: "peptides",
		label: "Peptides"
	},
	{
		value: "auragraft",
		label: "AuraGraft FUE"
	},
	{
		value: "auralux",
		label: "AuraLux / ProDeep"
	},
	{
		value: "junera",
		label: "Junera"
	},
	{
		value: "vydence",
		label: "Vydence platforms"
	},
	{
		value: "inkout",
		label: "inkOUT tattoo removal"
	},
	{
		value: "revian",
		label: "Revian LED"
	},
	{
		value: "hairpro",
		label: "HairPro analysis"
	},
	{
		value: "propatch",
		label: "ProPatch+"
	},
	{
		value: "analysis",
		label: "AI facial analysis"
	},
	{
		value: "hair",
		label: "Hair consulting"
	},
	{
		value: "dossier",
		label: "Irving laboratory dossier"
	},
	{
		value: "several",
		label: "Several lines"
	}
];
var US_STATES = [
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
	"WY"
];
function productBySlug(slug) {
	return PRODUCTS.find((p) => p.slug === slug);
}
function practiceBySlug(slug) {
	return PRACTICES.find((p) => p.slug === slug);
}
var JOURNAL = [
	{
		slug: "the-device-as-an-object",
		folio: "100",
		department: "Object",
		title: "The device as an object",
		dek: "Werkbund to Ulm to Tuesday. What we inherited, and what we refuse.",
		date: "3 September 2026",
		dateIso: "2026-09-03",
		read: "8 min",
		image: "/images/devices.jpg",
		imageAlt: "Editorial still life of a medical-aesthetic console treated as a designed object",
		seoTitle: "The Device as an Object | Auragenics Journal",
		seoDescription: "How industrial design history — Bauhaus, the Ulm School, Dieter Rams, Henry Dreyfuss — should change the way a practice reads AuraGraft, inkOUT, and a laboratory vial.",
		lead: "A lookbook that only flatters the room has already failed the object.",
		body: [
			"Industrial design did not begin as a styling department. The Deutscher Werkbund, in 1907, argued that industry could carry quality instead of disguising it. Walter Gropius founded the Bauhaus in 1919 to unify craft and the machine; by 1923 the school’s slogan was “Art into Industry.” Form was supposed to follow use, materials were supposed to tell the truth, and ornament that hid the joint was already a kind of lie. That argument is a century old. Most device decks still have not heard it.",
			"After the war, Hochschule für Gestaltung Ulm (1953–1968) took the Bauhaus inheritance and made it systematic. Max Bill, Inge Scholl, Otl Aicher, Hans Gugelot. Not a look: a method. Products as families. Graphics as a language. Social responsibility as a brief, not a caption. When Gugelot’s circle met Dieter Rams at Braun, the result was not a “minimalist aesthetic.” It was a radio you could operate without a seminar. Rams later wrote the tests down: good design is useful, understandable, honest, unobtrusive, thorough, long-lasting, and — the line everyone quotes and almost nobody uses — as little design as possible.",
			"The American parallel is less pretty and just as necessary. Henry Dreyfuss, in Designing for People (1955), put the body back into the drawing: anthropometrics, the telephone, the tractor, the thermostat, medical equipment as something a hand actually meets. Raymond Loewy and Norman Bel Geddes, in the same decades, sold streamlining — the locomotive look applied to a toaster. One tradition measures the grip. The other photographs the future. A hair-restoration robot rendering in a dark showroom is Bel Geddes. A thirty-eight-pound FUE console with a disposable pack, a three-year warranty, and a Tuesday protocol is closer to Dreyfuss, whether or not anyone in the room has read him.",
			"We will not pretend AuraGraft was drawn at Ulm, or that inkOUT is a Rams product, or that a vial of QBio is Braun. That would be the dishonest kind of design history: name-dropping as provenance. What we will take is the test. Useful: does the object do the job without a second object to explain it. Understandable: can a trained operator read it on the floor. Honest: does the claim match the labeling — topical stays topical, Class I stays Class I, a pending 510(k) stays pending. Unobtrusive: the machine should recede so the case can occupy the room. As little as possible: a disposable pack that cuts cleanup by up to forty-five minutes is more design than a chrome fascia.",
			"Olivetti taught a further lesson, via Marcello Nizzoli and later Ettore Sottsass: the machine is also culture. A Lettera 22 on a desk told you what kind of office you were in. A medical-aesthetic floor tells patients the same thing, whether you intended it or not. A laser that looks like a prop, a vial that looks like a nightclub, a FUE arm that looks like a film still — those are cultural choices. They are not neutral. Our lookbook is fashion because the clinic is a public room. It is also a specimen list because the objects have mass, origin, and an intended use. Both can be true. Only one of them survives a medical director."
		],
		related: [
			"auragraft",
			"inkout",
			"exosomes",
			"hairpro"
		],
		faqs: [
			{
				q: "Are you saying Auragenics products were designed by Dieter Rams?",
				a: "No. Rams, Ulm, Dreyfuss, and the Bauhaus are a standard for reading objects — not a fake provenance. We will not put their names on a console they did not draw."
			},
			{
				q: "What does ‘honest’ mean for a topical cosmetic?",
				a: "That QBio is described as a professional topical cosmetic, manufactured in Irving, with lot records — not as an injectable, not as an FDA-approved exosome drug, and not as a treatment for osteoarthritis."
			},
			{
				q: "Why does industrial design belong in a practice journal?",
				a: "Because a device is used by a body, in a room, on a Tuesday. If the object only works in a rendering, it is styling. If it works in the room, it is design."
			}
		]
	},
	{
		slug: "what-qbio-is",
		folio: "101",
		department: "Biologics",
		title: "What QBio is, and is not",
		dek: "A laboratory file, not a brochure sentence.",
		date: "28 August 2026",
		dateIso: "2026-08-28",
		read: "6 min",
		image: "/images/lab.jpg",
		imageAlt: "Laboratory still life of glassware, notes, and serum vials",
		seoTitle: "What QBio Exosomes Are (and Are Not) | Auragenics",
		seoDescription: "QBio is a professional topical exosome cosmetic made in Irving, Texas. It is not an injectable, not a drug, and not an FDA-approved exosome product. How practices should read the file.",
		lead: "Practices keep asking the same three questions. We would rather answer them in print than in a sales voicemail.",
		body: [
			"QBio is a professional-use topical cosmetic line manufactured in Irving, Texas by Re-Gen Active Lab, a sister laboratory that describes itself as an FDA-registered 361 tissue establishment. Elixir is written for post-procedure skin. Gro is written as a professional scalp cosmetic. Gel is the reconstitution and homecare hydration medium. That is the offering. It is not a secret protocol, and it is not a stem-cell therapy.",
			"There are currently no FDA-approved exosome products. QBio is not an exception hiding behind better photography. Independent DLS work at UT Arlington and proteomic work at UT Southwestern are characterization of a cosmetic lot — particle size, a biomolecule count, a file a medical director can read. They are not a drug approval, not a 510(k), and not a license to inject.",
			"The sentence we will not say in a consult: that this vial treats osteoarthritis, that it belongs in a joint, that it is a biologic drug. Orthopedic groups are welcome to the manufacturing conversation. They are not welcome to a claim we cannot stand behind. If a competitor’s deck says otherwise, ask them for the indication, the route, and the approval. Then call us.",
			"What a practice should actually do with QBio is quieter. Put Elixir on a post-procedure tray where a topical cosmetic belongs. Put Gro in a hair department that already has a diagnosis and a camera, not as a substitute for either. Keep Gel with the reconstitution instructions. Document the lot. Do not invent a new category because the word “exosome” photographs well."
		],
		related: ["exosomes", "peptides"],
		faqs: [
			{
				q: "Is QBio FDA-approved?",
				a: "No. There are currently no FDA-approved exosome products. QBio is positioned as a professional topical cosmetic, manufactured in an FDA-registered facility."
			},
			{
				q: "Can QBio be injected?",
				a: "Not as we sell it, and not as we describe it. QBio is a topical cosmetic. We will not train, hint, or wink at injection."
			},
			{
				q: "Who is it for?",
				a: "Licensed aesthetic and regenerative practices: dermatology, plastic surgery, medical spas, hair departments, and — for education only — orthopedic groups asking about manufacturing."
			}
		]
	},
	{
		slug: "reading-an-exosome-file",
		folio: "102",
		department: "Standards",
		title: "How to read an exosome file",
		dek: "Lot records over adjectives.",
		date: "21 August 2026",
		dateIso: "2026-08-21",
		read: "7 min",
		image: "/images/standards.jpg",
		imageAlt: "Editorial desk with laboratory documents and a cream blotter",
		seoTitle: "How to Read an Exosome COA | Auragenics Journal",
		seoDescription: "A practice checklist for exosome documentation: lot records, DLS particle analysis, proteomics, sourcing, and the difference between a university characterization and a drug approval.",
		lead: "If the deck leads with a celebrity and buries the lot number, you already know the rest.",
		body: [
			"A serious file starts with identity. Who manufactured it, where, under what establishment description, and which lot is in the box you would actually put on a tray. QBio’s file is Irving, Texas; Re-Gen Active Lab; lot-level records; cord-bank partners named as qualified U.S. sources; third-party bioburden and endotoxin testing. If a competing vial cannot say those things in one page, it is not more “premium.” It is less documented.",
			"Next is characterization, not poetry. Dynamic light scattering answers a particle-size question. Proteomics answers a biomolecule-count question. QBio cites independent work at UT Arlington and UT Southwestern, with a characterized figure of approximately 50 billion exosome-sized particles and 3,000-plus unique biomolecules per vial. Those numbers belong in a medical-director folder. They do not belong in a consumer Instagram caption as a cure.",
			"Then intended use. Cosmetics have a lane. Drugs have another. Devices have another. Mixing the three in a consult is how practices inherit someone else’s problem. QBio’s lane is professional topical cosmetics. The file should say that in the same type size as the particle count. If it does not, ask why.",
			"Last is the question nobody puts on the slide: what happens when a patient asks if it is stem cells, or if it can be injected, or if it treats a joint. Write the answer before the consult. Ours is already written. Yours should be too, on letterhead, with the lot."
		],
		related: ["exosomes", "peptides"],
		faqs: [
			{
				q: "What should be in an exosome COA?",
				a: "Manufacturer, facility, lot, intended use, sterility or bioburden testing as applicable, and any independent characterization the company is willing to stand behind. Adjectives are not a COA."
			},
			{
				q: "Does university testing mean FDA approval?",
				a: "No. Independent laboratory characterization is evidence about a lot. It is not an FDA approval of an exosome product."
			},
			{
				q: "Will Auragenics share the file with a medical director?",
				a: "Yes. That is the point of a practice inquiry. We would rather a director read the records than a coordinator read a slogan."
			}
		]
	},
	{
		slug: "peptides-from-irving",
		folio: "103",
		department: "Biologics",
		title: "Peptides from the same laboratory",
		dek: "Not a compounding-pharmacy catalog.",
		date: "14 August 2026",
		dateIso: "2026-08-14",
		read: "5 min",
		image: "/images/peptides.jpg",
		imageAlt: "Amber glass vials and a dropper on cream linen",
		seoTitle: "Peptide Biomolecules from Irving | Auragenics Journal",
		seoDescription: "Auragenics peptides are cord- and amnion-derived biomolecules from Re-Gen Active Lab in Irving — the same 361 tissue establishment as QBio. Not GLP-1s, not research chemicals.",
		lead: "Peptide, on the internet, now means whatever the last webinar needed it to mean. We mean something narrower.",
		body: [
			"The peptides we place sit in the same Irving laboratory as QBio. Re-Gen Active Lab describes naturally occurring peptides and proteins from ethically sourced human umbilical cord and amniotic membrane, characterized alongside exosomes, growth factors, and other bioactive molecules. That is a tissue-establishment story. It is not a research-chemical menu, and it is not a compounding-pharmacy GLP-1 program.",
			"We say that in the first meeting because the word has been exhausted. A practice that wants semaglutide is in a different conversation, with a different license, a different refrigerator, and a different lawyer. We will not pretend our vial is that conversation. We will also not stock anonymous “BPC” and “CJC” vials with a batch sticker from a Telegram channel.",
			"What belongs on the floor is a documented professional biomolecule, with a lot, an intended-use sentence, and a medical director who has read both. The 361 language the laboratory uses (21 CFR 1271) is a control story, not a marketing story. Confirm labeling and state requirements with the desk before anyone writes a menu item.",
			"If you already carry QBio, peptides are not a second vendor. They are the same house, the same city, the same records habit. That is the only reason they are in this journal."
		],
		related: ["peptides", "exosomes"],
		faqs: [
			{
				q: "Are these GLP-1 peptides?",
				a: "No. We do not sell compounding-pharmacy GLP-1s or unapproved injectable research peptides."
			},
			{
				q: "Where are they made?",
				a: "Irving, Texas, by Re-Gen Active Lab — the same laboratory family as QBio Elixir, Gro, and Gel."
			},
			{
				q: "Can we inject them?",
				a: "Do not assume a route we have not labeled. Confirm intended use, labeling, and applicable requirements with the desk before anything reaches a tray."
			}
		]
	},
	{
		slug: "original-fue",
		folio: "104",
		department: "Hair surgery",
		title: "The original FUE machine, without the brochure",
		dek: "Lightweight (just 38 lbs). Industry-leading 3-year warranty.",
		date: "7 August 2026",
		dateIso: "2026-08-07",
		read: "6 min",
		image: "/images/auragraft-wide.jpg",
		imageAlt: "AuraGraft FUE console, touchscreen, and suction handpiece",
		seoTitle: "AuraGraft: The Original FUE Machine | Auragenics Journal",
		seoDescription: "AuraGraft is the smart choice for FUE Hair Transplants. Developed by the original team that introduced suction-assisted FUE globally. Lightweight (just 38 lbs). 3-year warranty.",
		lead: "Restore lost hair with the AuraGraft medical aesthetic device using precision follicular-unit extraction (FUE) – a method we pioneered.",
		body: [
			"Restore lost hair with the AuraGraft medical aesthetic device using precision follicular-unit extraction (FUE) – a method we pioneered. AuraGraft™ rejuvenates your hairline with your own healthy hair providing the most natural-looking results for those who are bald or have thinning hair.",
			"Developed by the original team that introduced suction-assisted FUE globally, AuraGraft is built to optimize safety, precision, and clinical outcomes. Lightweight (just 38 lbs), portable, and durable, it’s backed by an industry-leading 3-year warranty. Complete disposable procedure packs include handpiece, punch, tubing set, exterior fluid canister, and interior graft collection canister — no patient cross contamination; reduces clean up time by an average of 45 minutes.",
			"Low-torque, high-precision punch system reduces follicular trauma. Grafts retain structural integrity, leading to higher survival and natural results. Offers continuous hydration and cooling environment during graft handling, preserving tissue viability. Suitable for men and women of all hair types and textures. AuraGraft expands treatment possibilities to include permanent restoration of facial hair, eyebrows, and other body areas affected by hair loss. Transplanted hair grows naturally and fully within 9–12 months, blending seamlessly with existing hair for undetectable results.",
			"With AuraGraft priced at nearly half the cost of the previous suction-assisted FUE systems, your break-even point is dramatically reduced. In fact, you only need to treat approximately five patients to recoup your entire investment. Use according to the manufacturer’s labeling and training."
		],
		related: [
			"auragraft",
			"revian",
			"hairpro"
		],
		faqs: [
			{
				q: "Who is AuraGraft for?",
				a: "Licensed hair-restoration physicians and surgical practices — typically hair departments and plastic surgery."
			},
			{
				q: "Is it a robot?",
				a: "No. It is a suction-assisted FUE platform with a handpiece the surgeon drives. The origin story is the method, not an autonomous arm."
			},
			{
				q: "What about training?",
				a: "Protocols, ROI modeling, and training ship with the conversation. A device without a Tuesday plan is just a crate."
			}
		]
	},
	{
		slug: "ink-without-a-laser",
		folio: "105",
		department: "Removal",
		title: "Removing ink without a laser",
		dek: "FDA Class I. TEPR®. Made in the USA (Utah).",
		date: "31 July 2026",
		dateIso: "2026-07-31",
		read: "6 min",
		image: "/images/inkout.jpg",
		imageAlt: "inkOUT TEPR non-laser tattoo removal device",
		seoTitle: "inkOUT TEPR vs Laser Tattoo Removal | Auragenics Journal",
		seoDescription: "inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology. FDA Class I non-laser tattoo and permanent makeup removal. 3–5 sessions. Made in Utah.",
		lead: "inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology to naturally expel tattoo and permanent makeup ink through the skin’s surface.",
		body: [
			"inkOUT provides non-thermal, non-laser tattoo & permanent makeup removal. We are pleased to introduce InkOUT®, a patented, FDA Class I non-laser tattoo removal system powered by Trans-Epidermal Pigment Release (TEPRderm®) technology. FDA Class I device — can be operated by properly trained staff. Proudly made in the USA (Utah).",
			"Our patented technology uses a controlled ink expulsion technique to disrupt ink particles while delivering our natural TEPRsol® solution. As the body naturally heals, ink is expelled through the skin’s surface. Ink sloughs off during the healing process via a crusting layer. That means no internal absorption. Rather than fragmenting pigment particles like lasers, TEPRderm technology facilitates the physical removal of ink through the body’s own regenerative process.",
			"Unlike other methods, TEPR works on yellow, red, white, blue, pastel, neon inks. Every color leaves the same way—through the surface of the skin. Up to 35% of ink is removed per session. For most tattoos, full removal happens in just 3–5 sessions over 10–15 months. That’s compared to 8–15+ laser sessions over 2+ years. Costs approximately one-fifth of most laser platforms. Individual results may vary. Safe when performed by certified technicians following proper protocols and aftercare guidelines."
		],
		related: ["inkout", "analysis"],
		faqs: [
			{
				q: "Is inkOUT a laser?",
				a: "No. inkOUT provides non-thermal, non-laser tattoo & permanent makeup removal. It utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology. FDA Class I device — can be operated by properly trained staff."
			},
			{
				q: "Does it work on permanent makeup?",
				a: "inkOUT® utilizes patented TEPR® technology to naturally expel tattoo and permanent makeup ink through the skin’s surface. Unlike other methods, TEPR works on yellow, red, white, blue, pastel, neon inks."
			},
			{
				q: "How many sessions?",
				a: "Up to 35% of ink is removed per session. For most tattoos, full removal happens in just 3–5 sessions over 10–15 months. Individual results may vary. Safe when performed by certified technicians following proper protocols and aftercare guidelines."
			}
		]
	},
	{
		slug: "orthopedic-line",
		folio: "106",
		department: "Orthopedics",
		title: "The line orthopedics will hear from us",
		dek: "Manufacturing, yes. A joint injection, no.",
		date: "24 July 2026",
		dateIso: "2026-07-24",
		read: "5 min",
		image: "/images/ortho.jpg",
		imageAlt: "Regenerative clinic corridor in quiet architectural light",
		seoTitle: "Exosomes and Orthopedics: Our Line | Auragenics Journal",
		seoDescription: "Orthopedic and sports-medicine groups ask about exosomes. Auragenics will show QBio manufacturing and characterization — and will not claim an injectable joint therapy or osteoarthritis treatment.",
		lead: "We take the orthopedic call. We do not take the orthopedic fantasy.",
		body: [
			"Sports medicine and orthopedic groups write because the word exosome has left the dermatology corridor. They want a vial, a paper, and a sentence they can say to a forty-two-year-old knee. We will show manufacturing in Irving, the 361 description the laboratory uses, independent characterization, lot records, sourcing. That is a serious conversation. It is also where the conversation stops.",
			"QBio is a topical cosmetic. It is not an injectable joint therapy. It is not a treatment for osteoarthritis. It is not an FDA-approved exosome product, because none exist. If a distributor offers you a different sentence, they are offering you their liability, not ours.",
			"Why keep the specialty on the masthead, then? Because the groups will call anyway, and because a house that refuses the sentence should still be willing to educate. Regenerative questions deserve a file, not a shrug and not a wink. We would rather a medical director leave with documents than with a rumor about what “some practices inject.”",
			"If your group is building a compliant topical or peri-procedural cosmetic program, we can talk. If your group needs a drug for a joint, you need a different company, a different approval, and a different lawyer. We will say that in the room. This article exists so nobody is surprised."
		],
		related: ["exosomes", "peptides"],
		faqs: [
			{
				q: "Do you sell an orthopedic injectable exosome?",
				a: "No. QBio is a professional topical cosmetic. We will not describe, train, or supply it as a joint injection or as an osteoarthritis treatment."
			},
			{
				q: "Why meet with orthopedic groups at all?",
				a: "Because they ask, and because manufacturing and characterization are legitimate questions. Education is not an indication."
			},
			{
				q: "Are there FDA-approved exosome drugs?",
				a: "Not at the time of this article. We will not pretend otherwise to close a conversation."
			}
		]
	},
	{
		slug: "hair-department",
		folio: "107",
		department: "Hair",
		title: "A hair department, in one edit",
		dek: "Surgery, a camera, a cap, a topical — assigned, not stacked as a miracle.",
		date: "17 July 2026",
		dateIso: "2026-07-17",
		read: "7 min",
		image: "/images/hair.jpg",
		imageAlt: "Hair-restoration consultation room with a cream chair and dark wood",
		seoTitle: "Building a Hair Restoration Department | Auragenics Journal",
		seoDescription: "How Auragenics edits a hair department: AuraGraft FUE, HairPro imaging, Revian FDA-cleared LLLT, and QBio Gro as a topical cosmetic — not a single miracle SKU.",
		lead: "A hair menu with one product is a hope. A hair department is a sequence.",
		body: [
			"Start with seeing. HairPro is a scalp and hair imaging system — fifty to three-hundred times, polarized and UV — with questionnaires, split-screen progress, and a QR the patient can leave with. It does not diagnose disease by itself. It does make a consult honest. Practices that skip the camera skip the argument they will need in month six.",
			"Then the surgical line, if you are that practice. AuraGraft is the FUE platform: portable, disposable pack, originators of suction-assisted FUE, three-year warranty. It is not a retail SKU. It is a room, a nurse, a Tuesday. Plastic surgery and dedicated hair practices belong here. A med spa that wants “a hair thing” does not start here.",
			"Then the home line that actually has an FDA clearance: Revian, dual-wavelength LED, 660 nm red and 620 nm orange, doctor-dispensed, app-monitored. In the labeled study, compliant subjects had 26.3 more hairs per square centimeter versus sham after sixteen weeks. That sentence has conditions — diagnosis, compliance, the indication as written. It is still a different class of sentence from a cosmetic caption.",
			"QBio Gro sits last on purpose. It is a professional topical scalp cosmetic, not a drug claim about hair growth, not a substitute for diagnosis, surgery, or a cleared device. Elixir and Gel may belong on a post-procedure tray. ProPatch Renew is a supplement patch with biotin and friends — labeled as such, not evaluated by FDA to treat disease. The edit is the order. Mix the order and you get a brochure. Keep the order and you get a department."
		],
		related: [
			"auragraft",
			"hairpro",
			"revian",
			"exosomes"
		],
		faqs: [
			{
				q: "Do we have to take every hair SKU?",
				a: "No. A camera and an honest consult are the minimum. Surgery, a cleared cap, and a topical cosmetic are assigned to the practice you actually are."
			},
			{
				q: "Is QBio Gro a hair-growth drug?",
				a: "No. It is positioned as a professional topical scalp cosmetic. We will not write a drug claim onto a cosmetic."
			},
			{
				q: "Where does Revian belong?",
				a: "In a doctor-dispensed, indicated pattern-hair-loss program, with compliance. See labeling. It is not a substitute for FUE and not a substitute for a diagnosis."
			}
		]
	}
];
function articleBySlug(slug) {
	return JOURNAL.find((a) => a.slug === slug);
}
var SEO = {
	locale: "en-US",
	ogLocale: "en_US",
	countryCode: "US",
	country: "United States",
	locality: "Irving",
	region: "TX",
	market: "Sold to licensed medical and aesthetic practices across the United States."
};
function crawlPaths() {
	return [
		"/",
		"/lookbook",
		"/products",
		...PRODUCTS.map((p) => `/products/${p.slug}`),
		"/practices",
		...PRACTICES.map((p) => `/practices/${p.slug}`),
		"/journal",
		...JOURNAL.map((a) => `/journal/${a.slug}`),
		"/about",
		"/laboratory",
		"/consulting",
		"/inquire",
		"/sitemap"
	];
}
function withUsMarket(description) {
	if (/united states|\bu\.s\.\b|\busa\b|nationwide/i.test(description)) return description;
	return `${description.replace(/\s+$/, "").replace(/\.$/, "")}. ${SEO.market}`;
}
function pageHead({ title, description, path, index = true }) {
	const desc = withUsMarket(description);
	const canonical = path.startsWith("/") ? path : `/${path}`;
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: desc
			},
			{
				name: "robots",
				content: index ? "index,follow,max-image-preview:large" : "noindex,follow"
			},
			{
				name: "language",
				content: SEO.locale
			},
			{
				name: "content-language",
				content: SEO.locale
			},
			{
				name: "geo.region",
				content: SEO.countryCode
			},
			{
				name: "geo.placename",
				content: `${SEO.locality}, ${SEO.region}, ${SEO.country}`
			},
			{
				property: "og:locale",
				content: SEO.ogLocale
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: desc
			},
			{
				property: "og:type",
				content: canonical === "/" ? "website" : "article"
			}
		],
		links: [
			{
				rel: "canonical",
				href: canonical
			},
			{
				rel: "alternate",
				href: canonical,
				hrefLang: SEO.locale
			},
			{
				rel: "alternate",
				href: canonical,
				hrefLang: "x-default"
			}
		]
	};
}
function organizationJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [{
			"@type": ["Organization", "Manufacturer"],
			"@id": "/#organization",
			name: SITE.name,
			legalName: "Auragenics",
			url: "/",
			logo: SITE.logo,
			image: "/images/hero.jpg",
			description: withUsMarket(SITE.description),
			telephone: SITE.phoneHref.replace("tel:", ""),
			address: {
				"@type": "PostalAddress",
				streetAddress: LAB.street,
				addressLocality: LAB.city,
				addressRegion: LAB.region,
				postalCode: LAB.postal,
				addressCountry: SEO.countryCode
			},
			foundingLocation: {
				"@type": "Place",
				address: {
					"@type": "PostalAddress",
					streetAddress: LAB.street,
					addressLocality: LAB.city,
					addressRegion: LAB.region,
					postalCode: LAB.postal,
					addressCountry: SEO.countryCode
				}
			},
			areaServed: {
				"@type": "Country",
				name: SEO.country
			},
			availableLanguage: "English",
			audience: {
				"@type": "Audience",
				audienceType: "Licensed medical and aesthetic professionals",
				geographicArea: {
					"@type": "Country",
					name: SEO.country
				}
			},
			knowsAbout: [
				"QBio exosomes",
				"peptide biomolecules",
				"hair restoration devices",
				"medical aesthetic devices",
				"professional topical cosmetics"
			],
			brand: {
				"@type": "Brand",
				name: "Auragenics"
			}
		}, {
			"@type": "WebSite",
			"@id": "/#website",
			name: SITE.name,
			url: "/",
			inLanguage: SEO.locale,
			publisher: { "@id": "/#organization" },
			description: withUsMarket(SITE.description)
		}]
	};
}
function sitemapXml(origin) {
	const base = origin.replace(/\/$/, "");
	const lastmod = "2026-09-03";
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${crawlPaths().map((path) => {
		const loc = `${base}${path}`;
		const priority = path === "/" ? "1.0" : path.startsWith("/products/") && path !== "/products" ? "0.9" : path.startsWith("/journal/") && path !== "/journal" ? "0.8" : path.startsWith("/practices/") && path !== "/practices" ? "0.8" : path === "/journal" || path === "/products" || path === "/about" || path === "/laboratory" ? "0.8" : "0.7";
		return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en-US" href="${loc}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>
  </url>`;
	}).join("\n")}
</urlset>
`;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-semibold transition-[background-color,color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			gold: "border border-ink/20 bg-action text-action-fg hover:bg-action-hover",
			outline: "border border-ink text-ink hover:border-action hover:bg-action hover:text-action-fg",
			ghost: "text-muted hover:text-ink",
			ink: "border border-ink/20 bg-action text-action-fg hover:bg-action-hover"
		},
		size: {
			sm: "h-11 px-4 text-xs uppercase tracking-kicker",
			md: "h-12 px-6 text-xs uppercase tracking-kicker",
			lg: "h-14 px-8 text-xs uppercase tracking-kicker"
		}
	},
	defaultVariants: {
		variant: "gold",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-ink bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: SITE.logo,
							alt: "Auragenics",
							className: "h-12 w-auto max-w-xs object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm italic text-muted",
							children: SITE.masthead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-sm leading-relaxed text-muted",
							children: "Luxury US manufacturer of devices, QBio exosomes, and peptide biomolecules. Sold to licensed practices nationwide."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted",
							children: [
								LAB.street,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								LAB.city,
								", ",
								LAB.region,
								" ",
								LAB.postal,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: LAB.phoneHref,
									className: "hover:text-ink",
									children: LAB.phone
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "Lookbook"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products/$slug",
						params: { slug: p.slug },
						className: "text-sm text-muted hover:text-ink",
						children: p.title
					}) }, p.slug))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "Practices"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: PRACTICES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/practices/$slug",
						params: { slug: p.slug },
						className: "text-sm text-muted hover:text-ink",
						children: p.title
					}) }, p.slug))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "House"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journal",
							className: "hover:text-ink",
							children: "Journal"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/laboratory",
							className: "hover:text-ink",
							children: "Laboratory"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-ink",
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							className: "hover:text-ink",
							children: "All products"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/consulting",
							className: "hover:text-ink",
							children: "MD Hair Consulting"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/inquire",
							className: "hover:text-ink",
							children: "Practice inquiry"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sitemap",
							className: "hover:text-ink",
							children: "Sitemap"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-7xl px-5 py-5 text-xs leading-relaxed text-faint md:px-8",
				children: "For licensed professionals in the United States. Product information is educational and not medical advice. There are no FDA-approved exosome products. QBio and peptide items are professional biomolecules, not drugs, and not sold here as injectables. © 2026 Auragenics. inkOUT® / TEPR®: Rejuvatek. Revian, Vydence, and other marks belong to their owners. Please do not include patient information in inquiries."
			})
		})]
	});
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: SITE.logo,
		alt: "Auragenics — Inspired by nature, perfected by science",
		className: cn("w-auto object-contain object-center", className)
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-ink" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2 md:px-8 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex min-h-11 items-center",
					"aria-label": "Auragenics home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-10 max-w-56" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/inquire",
							children: "Inquire"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center",
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden lg:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-8 pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-muted",
						children: "Manufacturer · Irving, Texas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.phoneHref,
							className: "text-kicker uppercase tracking-kicker text-muted hover:text-ink",
							children: SITE.phone
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/inquire",
								children: "Inquire"
							})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mx-auto flex max-w-7xl items-center justify-center px-8 py-3",
					"aria-label": "Auragenics home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-16 w-auto max-w-xl" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-ink" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden lg:block",
				"aria-label": "Primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-center gap-7 px-8 py-2.5",
					children: [
						NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("text-kicker uppercase tracking-kicker transition-colors", pathname === item.to || item.to !== "/" && pathname.startsWith(item.to) ? "text-accent" : "text-muted hover:text-ink"),
							children: item.label
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products/$slug",
							params: { slug: "exosomes" },
							className: cn("text-kicker uppercase tracking-kicker", pathname.includes("exosomes") ? "text-accent" : "text-muted hover:text-ink"),
							children: "Exosomes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products/$slug",
							params: { slug: "peptides" },
							className: cn("text-kicker uppercase tracking-kicker", pathname.includes("peptides") ? "text-accent" : "text-muted hover:text-ink"),
							children: "Peptides"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/consulting",
							className: cn("text-kicker uppercase tracking-kicker", pathname.startsWith("/consulting") ? "text-accent" : "text-muted hover:text-ink"),
							children: "Consulting"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-ink" })]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-ink bg-bg lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col px-5 py-4",
					"aria-label": "Mobile",
					children: [
						NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "flex min-h-12 items-center border-b border-line text-sm uppercase tracking-kicker",
							children: item.label
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products/$slug",
							params: { slug: "exosomes" },
							className: "flex min-h-12 items-center border-b border-line text-sm uppercase tracking-kicker",
							children: "Exosomes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products/$slug",
							params: { slug: "peptides" },
							className: "flex min-h-12 items-center border-b border-line text-sm uppercase tracking-kicker",
							children: "Peptides"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/consulting",
							className: "flex min-h-12 items-center text-sm uppercase tracking-kicker",
							children: "Consulting"
						})
					]
				})
			}) : null
		]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(organizationJsonLd()) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { practiceBySlug as C, pageHead as S, sitemapXml as T, SiteShell as _, FDA_LINE as a, articleBySlug as b, LAB as c, PROCESS as d, PRODUCTS as f, SITE as g, SEO as h, FAQS as i, LOOKBOOK_CHAPTERS as l, ROOMS as m, Button as n, INTERESTS as o, ROLES as p, CONTENTS as r, JOURNAL as s, ABOUT as t, PRACTICES as u, US_STATES as v, productBySlug as w, cn as x, WILL_NOT as y };
