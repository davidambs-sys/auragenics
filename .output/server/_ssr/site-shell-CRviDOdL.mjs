import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-CRviDOdL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE = {
	name: "AuraGenics",
	url: "https://auragenics.com",
	masthead: "We Are Making Waves for our Customers!",
	issue: "No. 01",
	season: "Autumn 2026",
	logo: "/images/logo.png",
	tagline: "We Are Making Waves for our Customers!",
	description: "AuraGenics was established as a strategic partner to support emerging medical technology manufacturers and aesthetic and regenerative medicine physicians in navigating competitive markets. Our mission is to introduce innovative, “game-changing” products and services that redefine industry standards.",
	phone: "1-512-808-3294",
	phoneHref: "tel:+15128083294"
};
var WILL_NOT = [
	{
		t: "That it belongs in a joint",
		b: "We will not market QBio as a treatment for a joint. Documentation is not a wink."
	},
	{
		t: "That Gro is a growth drug",
		b: "It is a professional scalp cosmetic. Hair restoration is a diagnosis, a camera, and a device — not a vial."
	},
	{
		t: "That it is FDA approved",
		b: "QBio is an FDA-cleared topical-use product. We will not say approved when the labeling says cleared."
	}
];
var NAV = [
	{
		label: "Device",
		to: "/device"
	},
	{
		label: "Hair",
		to: "/hair"
	},
	{
		label: "Products",
		to: "/products"
	},
	{
		label: "About",
		to: "/about"
	}
];
var CATALOG = {
	device: {
		label: "Device",
		path: "/device",
		kicker: "Devices",
		title: "The devices.",
		dek: "AuraGraft FUE, inkOUT, PhoenixR, Revian, and Junera — devices for the floor.",
		seoTitle: "Devices | AuraGraft, inkOUT, PhoenixR, Revian, Junera | AuraGenics",
		seoDescription: "AuraGenics devices for United States practices: AuraGraft FUE, inkOUT, PhoenixR, Revian FDA-cleared LED hair cap, and Junera.",
		slugs: [
			"auragraft",
			"inkout",
			"phoenix-r",
			"revian",
			"junera"
		]
	},
	hair: {
		label: "Hair",
		path: "/hair",
		kicker: "Hair",
		title: "The hair department.",
		dek: "AuraGraft, QBio, and Revian — the hair floor, in one file.",
		seoTitle: "Hair Products | AuraGraft, Revian, QBio | AuraGenics",
		seoDescription: "Hair products for United States practices: AuraGraft FUE, Revian LED, and QBio exosomes.",
		slugs: [
			"auragraft",
			"exosomes",
			"revian"
		]
	}
};
/** Shown on every product page. Do not paraphrase manufacturer FDA language. */
var FDA_LINE = "Indications, claims, and regulatory status follow the manufacturer’s published labeling. Confirm clearance, registration, or 510(k) for the indication you intend to market. Professional use only.";
var PRODUCTS = [
	{
		slug: "exosomes",
		folio: "012",
		department: "Biologics",
		title: "QBio Exosomes",
		kicker: "Quintessence Biologics",
		tagline: "At Quintessence Biologics, we create science-backed products that rejuvenate and restore.",
		summary: "QBio is an FDA-cleared topical-use product. Elixir and Gro are the in-clinic cosmetics. Gel reconstitutes them and goes home with the patient. Every one of them is manufactured in our own FDA-registered facility and characterized by independent laboratories.",
		image: "/images/exosomes.jpg",
		imageAlt: "QBio Elixir professional topical, the United States",
		points: [
			"Infused with a rich array of advanced bioactive biomolecules known for their role in stimulating the skin's natural rejuvenation and restoration processes, QBio Elixir rejuvenates your skin at a cellular level. It promotes a youthful, radiant complexion and effectively slows down the signs of skin aging.",
			"Enriched with a powerful blend of bioactive biomolecules, known to target roots to stimulate natural hair growth and scalp vitality, QBio Gro nourishes and strengthens from the scalp to the ends, promoting thicker, fuller, and more vibrant hair, while also slowing down the visible signs of hair aging.",
			"Exosomes are tiny, membrane-bound vesicles released by cells that play a crucial role in cell-to-cell communication. They transport proteins, lipids, and genetic material, influencing the behavior of recipient cells.",
			"QBio is an FDA-cleared topical-use product. For topical use only."
		],
		notice: "QBio is an FDA-cleared topical-use product. Professional-use cosmetics intended exclusively for single-patient topical use. Manufactured by the laboratory, an FDA-registered U.S. facility.",
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
				label: "Cleared for topical use"
			},
			{
				value: "U.S.",
				label: "Manufactured in an FDA-registered facility"
			}
		],
		specimen: "FDA-cleared topical use · United States",
		source: "Quintessence Biologics / QBio",
		sourceUrl: "https://qbio.us/products"
	},
	{
		slug: "phoenix-r",
		folio: "014",
		department: "Device",
		title: "PhoenixR",
		kicker: "Nanocrystal Transdermal Beauty Device",
		tagline: "The World's First Nanocrystal Transdermal Beauty Device Combining Electroporation, EMS, and LED Technology",
		summary: "PhoenixR is a next-generation transdermal beauty instrument that combines nanotechnology with advanced electrophysical technology. It utilizes a 24K gold-plated crystal head, delivering exceptional smoothness, conductivity, and durability. Equipped with four core technologies—Microneedling, Electroporation, EMS, and LED phototherapy—it enables a complete, all-in-one aesthetic treatment system.",
		image: "/images/phoenixr-main.jpg",
		imageAlt: "PhoenixR nanocrystal transdermal beauty device with 24K gold-plated crystal head",
		points: [
			"24K Gold-Plated Crystal Head. The treatment head is coated with 24K gold, offering superior smoothness, enhanced conductivity, and long-lasting durability.",
			"4-in-1 Integrated Technology. Combines Microneedling, Electroporation, EMS, and LED phototherapy in a single device, enabling comprehensive treatment.",
			"Nano-Level Transdermal Delivery. The nanocrystal structure enhances transdermal absorption efficiency, allowing active ingredients to penetrate deeper into the skin.",
			"High Compatibility. Compatible with a wide range of serums, including hyaluronic acid, peptides, collagen, and other active ingredients.",
			"Professional + Home Dual Use. Suitable for both professional beauty salons and personal skincare use.",
			"Safe and Hygienic. Features a detachable, replaceable treatment head to ensure hygiene and prevent cross-contamination."
		],
		notice: "This content is for informational purposes only and is not intended as medical advice.",
		specialties: [
			"dermatology",
			"plastic-surgery",
			"medspa"
		],
		stats: [
			{
				value: "4-in-1",
				label: "Microneedling, Electroporation, EMS, LED"
			},
			{
				value: "0.5–2.5",
				label: "mm adjustable needle depth"
			},
			{
				value: "625nm",
				label: "Red LED — collagen synthesis and anti-aging"
			},
			{
				value: "465nm",
				label: "Blue LED — antibacterial and anti-inflammatory"
			},
			{
				value: "24K",
				label: "Gold-plated crystal treatment head"
			}
		],
		source: "PhoenixR brochure",
		gallery: [
			{
				src: "/images/phoenixr/in-use-1.jpg",
				alt: "PhoenixR in use — transdermal facial treatment"
			},
			{
				src: "/images/phoenixr/device-white.jpg",
				alt: "PhoenixR nanocrystal transdermal beauty device"
			},
			{
				src: "/images/phoenixr/in-use-2.jpg",
				alt: "PhoenixR in use on the face"
			},
			{
				src: "/images/phoenixr/device-white-2.jpg",
				alt: "PhoenixR with 24K gold-plated crystal head"
			},
			{
				src: "/images/phoenixr/kit-case.jpg",
				alt: "PhoenixR in its carrying case"
			},
			{
				src: "/images/phoenixr/head.jpg",
				alt: "PhoenixR 24K gold-plated crystal treatment head"
			},
			{
				src: "/images/phoenixr/kit.jpg",
				alt: "PhoenixR device, charging cable, and accessories"
			},
			{
				src: "/images/phoenixr/plate.jpg",
				alt: "PhoenixR with 24K gold-plated crystal plate"
			},
			{
				src: "/images/phoenixr/crystals.jpg",
				alt: "PhoenixR nanocrystal treatment heads"
			},
			{
				src: "/images/phoenixr/device-case.jpg",
				alt: "PhoenixR stored in its case"
			}
		]
	},
	{
		slug: "auragraft",
		folio: "018",
		department: "Device",
		title: "AuraGraft",
		kicker: "FUE Hair Transplant System",
		tagline: "AuraGraft is the smart choice for FUE Hair Transplants",
		summary: "Developed by the original team that introduced suction-assisted FUE globally, AuraGraft is built to optimize safety, precision, and clinical outcomes. Lightweight (just 38 lbs), portable, and durable, it’s backed by an industry-leading 3-year warranty—setting a new standard for reliability in hair restoration.",
		image: "/images/auragraft.jpg",
		imageAlt: "AuraGraft FUE hair transplant console with touchscreen, collection canister, and handpiece",
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
		notice: "Developed by physicians, medical scientists and engineers. Use according to the manufacturer’s labeling and training.",
		specialties: ["hair", "plastic-surgery"],
		stats: [
			{
				value: "FUE",
				label: "Suction-assisted extraction"
			},
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
		specimen: "FUE · 38 lbs · 3-year warranty",
		source: "AuraGraft / Blue Ocean Medical / AuraGenics",
		sourceUrl: "https://blueoceanmed.com/auragraft/"
	},
	{
		slug: "junera",
		folio: "030",
		department: "Device",
		title: "Junera",
		kicker: "Subdermal Laser Tissue Remodeling",
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
		slug: "inkout",
		folio: "042",
		department: "Device",
		title: "inkOUT",
		kicker: "Tattoo Removal",
		tagline: "The Latest in Non-Laser Tattoo and Permanent Makeup Removal Technology",
		summary: "inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology to naturally expel tattoo and permanent makeup ink through the skin’s surface. We are pleased to introduce InkOUT®, a patented, FDA Class I non-laser tattoo removal system powered by Trans-Epidermal Pigment Release (TEPRderm®) technology.",
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
		source: "inkOUT / Rejuvatek / Blue Ocean Medical",
		sourceUrl: "https://inkout.io/"
	},
	{
		slug: "revian",
		folio: "048",
		department: "Device",
		title: "Revian",
		kicker: "Hair Growth System",
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
	}
];
var ABOUT = {
	dek: "AuraGenics was established as a strategic partner to support emerging medical technology manufacturers and aesthetic and regenerative medicine physicians in navigating competitive markets. Our mission is to introduce innovative, “game-changing” products and services that redefine industry standards.",
	facts: [
		{
			value: "100+",
			label: "Years combined experience launching new technologies"
		},
		{
			value: "35",
			label: "Years introducing new hair restoration technologies and biologics"
		},
		{
			value: "38 lb",
			label: "AuraGraft portable console"
		},
		{
			value: "3 yr",
			label: "AuraGraft industry-leading warranty"
		}
	],
	houses: [
		{
			folio: "I",
			title: "Devices",
			place: "AuraGraft · inkOUT · PhoenixR · Revian · Junera",
			body: "AuraGraft FUE Hair Transplant System. inkOUT Tattoo Removal. PhoenixR Nanocrystal Transdermal Beauty Device. Revian Hair Growth System. Junera Subdermal Laser Tissue Remodeling.",
			href: "/products",
			label: "Products"
		},
		{
			folio: "II",
			title: "Products",
			place: "Quintessence Biologics · Revian",
			body: "Quintessence Biologics Exosomes. Revian Hair Growth System.",
			href: "/exosomes",
			label: "QBio Exosomes"
		},
		{
			folio: "III",
			title: "MD Hair Coach",
			place: "Consulting",
			body: "Expert Guidance to Elevate Your Practice and Patient Results. Whether you're just entering the hair restoration space or looking to expand your current offerings.",
			href: "/consulting",
			label: "MD Hair Restoration Consulting"
		}
	],
	body: [
		"AuraGenics was established as a strategic partner to support emerging medical technology manufacturers and aesthetic and regenerative medicine physicians in navigating competitive markets. Our mission is to introduce innovative, “game-changing” products and services that redefine industry standards.",
		"We are committed to creating uncontested market space and pioneering new business models for medical aesthetics manufacturers and physician practices. By doing so, we add more value to our customers and render traditional competition irrelevant. Through strategic partnerships with Premier global companies and niche service providers, we offer cost-effective, diversified products and expertise that helps our clients develop and execute sustainable, profitable growth strategies.",
		"The team has a combined experience of over 100 years with launching new technologies, building (start-ups) successful multi-million-dollar companies, and forming lifetime relationships with physicians and manufacturers around the world. 35 years with introducing new hair restoration technologies and biologics.",
		"Whether you are just starting your hair restoration program from scratch or want to expand on to your existing program, the hair restoration technology experts will provide you with the industry’s best products and services at affordable prices."
	]
};
var FAQS = [
	{
		q: "Where is QBio manufactured?",
		a: "At the laboratory in the United States — an FDA-registered 361 tissue establishment (established 2018). The laboratory describes ISO Class 3 manufacturing with ISO Class 7 support; AABB-accredited, FDA-registered U.S. cord-bank partners; tissue from live, full-term, scheduled C-section births in U.S. hospitals; and third-party USP <71> sterility and USP <85> endotoxin testing on each batch before release against 21 CFR 1271 criteria."
	},
	{
		q: "Are all products from AuraGenics?",
		a: "No. AuraGenics offers devices and products from other manufacturers — including QBio from the laboratory, PhoenixR, and inkOUT from Rejuvatek. Each product page cites the manufacturer of record. Confirm that manufacturer’s labeling."
	},
	{
		q: "Do you sell in the United States?",
		a: "Yes. AuraGenics sells to licensed medical and aesthetic practices across the United States — all fifty states and the District of Columbia. We do not sell to consumers. Practice inquiry is the start of the file."
	},
	{
		q: "Who can buy from AuraGenics?",
		a: "Licensed medical and aesthetic professionals in the U.S. — plastic surgeons, dermatologists, medical spas, hair restoration practices, and regenerative clinics including orthopedic groups exploring documented topicals. We do not sell to consumers."
	},
	{
		q: "Is QBio FDA-cleared?",
		a: "QBio is an FDA-cleared topical-use product. It is intended exclusively for single-patient topical use. Manufactured by the laboratory, an FDA-registered U.S. facility."
	},
	{
		q: "Do you treat osteoarthritis with QBio?",
		a: "No. QBio is an FDA-cleared topical-use product. We will consult with orthopedic and sports-medicine practices on manufacturing and characterization. We do not represent a treatment for osteoarthritis."
	},
	{
		q: "Is inkOUT a laser?",
		a: "No. inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology. It is a patented, FDA Class I non-laser tattoo removal system. FDA Class I device — can be operated by properly trained staff. Unlike other methods, TEPR works on yellow, red, white, blue, pastel, neon inks. For most tattoos, full removal happens in just 3–5 sessions. Individual results may vary. Safe when performed by certified technicians following proper protocols and aftercare guidelines."
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
		value: "phoenix-r",
		label: "PhoenixR"
	},
	{
		value: "auragraft",
		label: "AuraGraft FUE"
	},
	{
		value: "junera",
		label: "Junera"
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
		value: "hair",
		label: "Hair consulting"
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
var PRODUCT_NAV_ORDER = [
	"auragraft",
	"inkout",
	"phoenix-r",
	"revian",
	"junera",
	"exosomes"
];
function productsInNavOrder() {
	return PRODUCT_NAV_ORDER.map((slug) => productBySlug(slug)).filter((p) => Boolean(p));
}
var PRODUCT_PATHS = {
	exosomes: "/exosomes",
	"phoenix-r": "/phoenix-r",
	auragraft: "/auragraft",
	junera: "/junera",
	inkout: "/inkout",
	revian: "/revian"
};
function productHref(slug) {
	return PRODUCT_PATHS[slug];
}
var SEO = {
	locale: "en-US",
	ogLocale: "en_US",
	countryCode: "US",
	country: "United States",
	market: "Sold to licensed medical and aesthetic professionals across the United States.",
	defaultImage: "/og.jpg"
};
function absoluteUrl(path = "/") {
	const origin = SITE.url.replace(/\/$/, "");
	if (!path || path === "/") return origin;
	return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}
function crawlPaths() {
	return [
		"/",
		"/device",
		"/hair",
		"/products",
		...PRODUCTS.map((p) => productHref(p.slug) ?? `/${p.slug}`),
		"/about",
		"/consulting",
		"/sitemap"
	];
}
function withUsMarket(description) {
	if (/united states|\bu\.s\.\b|\busa\b|nationwide/i.test(description)) return description;
	return `${description.replace(/\s+$/, "").replace(/\.$/, "")}. ${SEO.market}`;
}
function pageHead({ title, description, path, index = true, image }) {
	const desc = withUsMarket(description);
	const canonical = absoluteUrl(path.startsWith("/") ? path : `/${path}`);
	const ogImage = absoluteUrl(image ?? SEO.defaultImage);
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: desc
			},
			{
				name: "robots",
				content: index ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" : "noindex,follow"
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
				content: SEO.country
			},
			{
				property: "og:locale",
				content: SEO.ogLocale
			},
			{
				property: "og:site_name",
				content: SITE.name
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
				content: path === "/" ? "website" : "article"
			},
			{
				property: "og:url",
				content: canonical
			},
			{
				property: "og:image",
				content: ogImage
			},
			{
				property: "og:image:alt",
				content: title
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: desc
			},
			{
				name: "twitter:image",
				content: ogImage
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
			"@type": ["Organization", "MedicalBusiness"],
			"@id": `${SITE.url}/#organization`,
			name: SITE.name,
			legalName: "AuraGenics",
			url: SITE.url,
			logo: absoluteUrl(SITE.logo),
			image: absoluteUrl(SITE.logo),
			description: withUsMarket(SITE.description),
			telephone: SITE.phone,
			address: {
				"@type": "PostalAddress",
				addressCountry: SEO.countryCode
			},
			areaServed: {
				"@type": "Country",
				name: SEO.country
			},
			availableLanguage: "English",
			contactPoint: {
				"@type": "ContactPoint",
				telephone: SITE.phone,
				contactType: "sales",
				areaServed: SEO.countryCode,
				availableLanguage: "English"
			},
			audience: {
				"@type": "Audience",
				audienceType: "Licensed medical and aesthetic professionals",
				geographicArea: {
					"@type": "Country",
					name: SEO.country
				}
			},
			knowsAbout: [
				"AuraGraft FUE hair transplant system",
				"Junera subdermal laser tissue remodeling",
				"inkOUT tattoo removal",
				"PhoenixR nanocrystal transdermal beauty device",
				"QBio exosomes",
				"Revian LED hair growth system",
				"hair restoration devices",
				"aesthetic medical devices"
			],
			brand: {
				"@type": "Brand",
				name: "AuraGenics"
			}
		}, {
			"@type": "WebSite",
			"@id": `${SITE.url}/#website`,
			name: SITE.name,
			url: SITE.url,
			inLanguage: SEO.locale,
			publisher: { "@id": `${SITE.url}/#organization` },
			description: withUsMarket(SITE.description)
		}]
	};
}
function sitemapXml(origin) {
	const base = (origin || SITE.url).replace(/\/$/, "");
	const lastmod = "2026-09-14";
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${crawlPaths().map((path) => {
		const loc = `${base}${path === "/" ? "/" : path}`;
		const productPaths = new Set(Object.values(PRODUCT_PATHS));
		const priority = path === "/" ? "1.0" : productPaths.has(path) ? "0.9" : path === "/products" || path === "/about" || path === "/device" || path === "/hair" ? "0.8" : "0.6";
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
function ProductLink({ slug, className, children }) {
	const to = productHref(slug);
	if (!to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className,
		children
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
							alt: "AuraGenics",
							className: "h-12 w-auto max-w-xs object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm italic text-muted",
							children: SITE.masthead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.phoneHref,
							className: "mt-4 inline-block text-lg font-bold tracking-tight text-ink hover:text-accent",
							children: SITE.phone
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "Device"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: CATALOG.device.slugs.map((slug) => {
						const p = productBySlug(slug);
						if (!p) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductLink, {
							slug,
							className: "text-sm text-muted hover:text-ink",
							children: p.title
						}) }, slug);
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "Hair"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: CATALOG.hair.slugs.map((slug) => {
						const p = productBySlug(slug);
						if (!p) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductLink, {
							slug,
							className: "text-sm text-muted hover:text-ink",
							children: p.title
						}) }, slug);
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "House"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							className: "hover:text-ink",
							children: "Products"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-ink",
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/consulting",
							className: "hover:text-ink",
							children: "Consulting"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/inquire",
							className: "hover:text-ink",
							children: "Inquire"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-7xl px-5 py-5 text-xs leading-relaxed text-faint md:px-8",
				children: [
					"For licensed professionals in the United States. Product information is educational and not medical advice. QBio is an FDA-cleared topical-use product. Confirm manufacturer labeling. inkOUT® / TEPR®: Rejuvatek. Revian and other trademarks belong to their owners. © ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					"AuraGenics."
				]
			})
		})]
	});
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: SITE.logo,
		alt: "AuraGenics — Inspired by nature, perfected by science",
		className: cn("w-auto object-contain object-center", className)
	});
}
function catalogForPath(to) {
	return Object.values(CATALOG).find((g) => g.path === to);
}
function groupActive(pathname, slugs, path) {
	return pathname === path || pathname.startsWith(`${path}/`) || slugs.some((slug) => pathname === `/${slug}` || pathname.startsWith(`/${slug}/`));
}
function DesktopGroup({ label, to, slugs, pathname }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const active = groupActive(pathname, slugs, to);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		onMouseEnter: () => setOpen(true),
		onMouseLeave: () => setOpen(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to,
			className: cn("text-kicker uppercase tracking-kicker transition-colors", active ? "text-accent" : "text-muted hover:text-ink"),
			"aria-expanded": open,
			children: label
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute left-1/2 top-full z-50 min-w-48 -translate-x-1/2 border border-ink bg-bg py-2",
			children: slugs.map((slug) => {
				const product = productBySlug(slug);
				if (!product) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductLink, {
					slug,
					className: "block px-4 py-2.5 text-kicker uppercase tracking-kicker text-muted hover:bg-surface hover:text-ink",
					children: product.title
				}, slug);
			})
		}) : null]
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
					"aria-label": "AuraGenics home",
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
						children: "We Are Making Waves for our Customers!"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/inquire",
								children: "Inquire"
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mx-auto flex max-w-7xl items-center justify-center px-8 py-3",
					"aria-label": "AuraGenics home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-16 w-auto max-w-xl" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-ink" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden lg:block",
				"aria-label": "Primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-center gap-7 px-8 py-2.5",
					children: NAV.map((item) => {
						const group = catalogForPath(item.to);
						if (group) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopGroup, {
							label: item.label,
							to: group.path,
							slugs: group.slugs,
							pathname
						}, item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("text-kicker uppercase tracking-kicker transition-colors", pathname === item.to || item.to !== "/" && pathname.startsWith(item.to) ? "text-accent" : "text-muted hover:text-ink"),
							children: item.label
						}, item.to);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-ink" })]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-ink bg-bg lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col px-5 py-4",
					"aria-label": "Mobile",
					children: NAV.map((item) => {
						const group = catalogForPath(item.to);
						if (group) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "flex min-h-12 items-center text-sm uppercase tracking-kicker",
								children: item.label
							}), group.slugs.map((slug) => {
								const product = productBySlug(slug);
								if (!product) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductLink, {
									slug,
									className: "flex min-h-11 items-center pl-4 text-sm text-muted",
									children: product.title
								}, slug);
							})]
						}, item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "flex min-h-12 items-center border-b border-line text-sm uppercase tracking-kicker",
							children: item.label
						}, item.to);
					})
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
export { sitemapXml as S, cn as _, FDA_LINE as a, productHref as b, PRODUCT_PATHS as c, SEO as d, SITE as f, absoluteUrl as g, WILL_NOT as h, FAQS as i, ProductLink as l, US_STATES as m, Button as n, INTERESTS as o, SiteShell as p, CATALOG as r, PRODUCTS as s, ABOUT as t, ROLES as u, pageHead as v, productsInNavOrder as x, productBySlug as y };
