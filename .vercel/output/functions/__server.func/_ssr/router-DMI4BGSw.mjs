import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { L as redirect, _ as createRootRoute, b as require_jsx_runtime, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as ChevronDown, n as TriangleAlert, o as ArrowLeft } from "../_libs/lucide-react.mjs";
import { C as practiceBySlug, S as pageHead, T as sitemapXml, _ as SiteShell, a as FDA_LINE, f as PRODUCTS, g as SITE, h as SEO, n as Button, o as INTERESTS, p as ROLES, s as JOURNAL, v as US_STATES, w as productBySlug, x as cn } from "./site-shell-CkP5FAVp.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inquire-form-CJIBwbcw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "h-12 w-full border border-line bg-transparent px-4 text-sm text-fg placeholder:text-faint transition-[border-color] duration-150 ease-out focus:border-accent focus:outline-none";
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn(fieldClass, className),
		...props
	});
}
function Select({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			className: cn(fieldClass, "appearance-none pr-10", className),
			...props,
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			"aria-hidden": "true",
			className: "pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted"
		})]
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(fieldClass, "h-auto min-h-32 py-3 leading-relaxed", className),
		...props
	});
}
function FieldLabel({ children, htmlFor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor,
		className: "mb-2 block text-kicker uppercase tracking-kicker text-muted",
		children
	});
}
var empty = (interest) => ({
	name: "",
	email: "",
	phone: "",
	practice: "",
	role: "",
	state: "",
	interest,
	message: "",
	licensed: false
});
function isEmail(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function FieldError({ message }) {
	if (!message) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1.5 text-xs text-accent",
		children: message
	});
}
function InquireForm({ defaultInterest = "", compact = false }) {
	const initialInterest = (0, import_react.useMemo)(() => {
		return INTERESTS.find((i) => i.value === defaultInterest)?.value ?? defaultInterest ?? "";
	}, [defaultInterest]);
	const [form, setForm] = (0, import_react.useState)(() => empty(initialInterest));
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	function set(key, value) {
		setForm((prev) => ({
			...prev,
			[key]: value
		}));
		setErrors((prev) => ({
			...prev,
			[key]: void 0
		}));
	}
	function onSubmit(e) {
		e.preventDefault();
		const next = {};
		if (form.name.trim().length < 2) next.name = "Please enter your name.";
		if (!isEmail(form.email.trim())) next.email = "Enter a business email.";
		if (!form.interest) next.interest = "Select a line of interest.";
		if (!form.licensed) next.licensed = "Required for professional inquiries.";
		setErrors(next);
		if (Object.keys(next).length) return;
		const record = {
			...form,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const existing = JSON.parse(localStorage.getItem("auragenics-inquiries") || "[]");
			localStorage.setItem("auragenics-inquiries", JSON.stringify([record, ...existing].slice(0, 20)));
		} catch {}
		setSubmitted(form);
	}
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-line bg-surface p-8 md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 flex size-11 items-center justify-center rounded-full bg-accent text-accent-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-5",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker uppercase tracking-kicker text-accent",
				children: "Inquiry received"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-3xl text-fg",
				children: "Your inquiry is with us."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-md text-sm leading-relaxed text-muted",
				children: [
					"A representative will follow up at ",
					submitted.email,
					" with professional information for your practice."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-8 space-y-3 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "01"
					}), " — We review discipline, setting, and the questions you raised."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "02"
					}), " — You receive a dossier or a short call, whichever fits."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "03"
					}), " — If there is a fit, we onboard with lot-level records in hand."] })
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: "name",
					children: "Name *"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "name",
					name: "name",
					autoComplete: "name",
					placeholder: "Full name",
					value: form.name,
					onChange: (e) => set("name", e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.name })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: "email",
					children: "Business email *"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "email",
					name: "email",
					type: "email",
					autoComplete: "email",
					placeholder: "name@practice.com",
					value: form.email,
					onChange: (e) => set("email", e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.email })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				htmlFor: "phone",
				children: "Phone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "phone",
				name: "phone",
				type: "tel",
				autoComplete: "tel",
				placeholder: "Optional",
				value: form.phone,
				onChange: (e) => set("phone", e.target.value)
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				htmlFor: "practice",
				children: "Practice / organization"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "practice",
				name: "practice",
				placeholder: "Clinic name",
				value: form.practice,
				onChange: (e) => set("practice", e.target.value)
			})] }),
			!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				htmlFor: "role",
				children: "Role"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				id: "role",
				name: "role",
				value: form.role,
				onChange: (e) => set("role", e.target.value),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: "Select"
				}), ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: r,
					children: r
				}, r))]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				htmlFor: "state",
				children: "State"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				id: "state",
				name: "state",
				value: form.state,
				onChange: (e) => set("state", e.target.value),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: "Select"
				}), US_STATES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: s,
					children: s
				}, s))]
			})] })] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						htmlFor: "interest",
						children: "Primary interest *"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						id: "interest",
						name: "interest",
						value: form.interest,
						onChange: (e) => set("interest", e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Select a discipline"
						}), INTERESTS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: i.value,
							children: i.label
						}, i.value))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.interest })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: "message",
					children: "What are you exploring?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "message",
					name: "message",
					rows: 4,
					placeholder: "Please do not include patient information.",
					value: form.message,
					onChange: (e) => set("message", e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: "mt-1 size-4 shrink-0 accent-accent",
						checked: form.licensed,
						onChange: (e) => set("licensed", e.target.checked)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I am inquiring on behalf of a licensed medical or aesthetic practice. This is not a consumer request." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { message: errors.licensed })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sm:col-span-2 pt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					className: cn("w-full sm:w-auto"),
					children: "Submit inquiry"
				})
			})
		]
	});
}
function InquireSection({ defaultInterest, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "inquire",
		className: "border-t border-ink bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "Practice inquiry"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 font-display text-4xl text-ink",
					children: [
						"A conversation with the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-accent",
							children: "laboratory."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-md text-base leading-relaxed text-muted",
					children: "Devices, exosomes, peptides — or the rest of the floor. Licensed practices only. We follow up with professional information. No patient details, please."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquireForm, {
				defaultInterest,
				compact
			})]
		})
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/product-stories-B2A2431G.js
var PRODUCT_STORIES = {
	exosomes: {
		seoTitle: "QBio Exosomes Made in Texas for US Practices | Auragenics",
		seoDescription: "QBio professional topical exosome cosmetics, made in Irving, Texas. Elixir, Gro, and Gel — university-characterized, lot-documented. Not FDA-approved. Not for injection.",
		dek: "Professional-use topical cosmetics. Manufactured in our FDA-registered U.S. facility.",
		lead: "Elixir and Gro are the in-clinic cosmetics. Gel reconstitutes them and goes home with the patient. Every one of them is manufactured in our own FDA-registered facility and characterized by independent laboratories. QBio Gro is not intended to affect the growth of hair.",
		offeringKicker: "The laboratory",
		offeringTitle: "What QBio",
		offeringItalic: "exosomes actually are.",
		body: [
			"Quintessence Biologics (QBio) is the named topical cosmetic line from Re-Gen Active Lab in Irving, Texas — an FDA-registered 361 tissue establishment established in 2018. The products are professional-use cosmetics for licensed providers — Elixir for post-procedure skin, Gro for the scalp as a cosmetic (not a growth drug), and Gel as a reconstitution and homecare hydration medium.",
			"Independent characterization includes dynamic light scattering at UT Arlington and mass-spectrometry proteomics at UT Southwestern. The laboratory reports on the order of 50 billion exosome-sized particles and more than 3,000 unique biomolecules per vial, with lot-level documentation. Manufacturing, as Re-Gen describes it: ISO Class 3 cleanroom with ISO Class 7 support; AABB-accredited, FDA-registered U.S. cord banks; tissue from live, full-term, scheduled C-section births; third-party USP <71> sterility and USP <85> endotoxin on each batch before 21 CFR 1271 review.",
			"Auragenics places QBio with plastic surgeons, dermatologists, medical spas, hair practices, and regenerative groups that want a documented topical — not an injectable story we cannot stand behind."
		],
		edit: [
			{
				t: "Three SKUs, one lab",
				b: "Elixir, Gro, and Gel — a deliberate professional protocol, not a single mystery vial."
			},
			{
				t: "University characterization",
				b: "DLS particle analysis at UT Arlington. Proteomic analysis at UT Southwestern. Read the dossier, do not take a slogan."
			},
			{
				t: "U.S. manufacturing",
				b: "ISO Class 3 cleanroom in Irving, ISO Class 7 support. AABB-accredited cord-bank partners. Lot records travel with the material."
			},
			{
				t: "A clear line",
				b: "Not FDA-approved. Not for injection. Not intended to diagnose, treat, cure, or prevent disease."
			}
		],
		notForTitle: "What QBio is not",
		notFor: [
			{
				t: "Not an FDA-approved drug",
				b: "There are currently no FDA-approved exosome products. QBio items are topical cosmetics."
			},
			{
				t: "Not for injection",
				b: "We do not sell QBio as an injectable, intra-articular, or IV product."
			},
			{
				t: "Not an osteoarthritis therapy",
				b: "We will not market these cosmetics as a treatment for joint or tendon disease."
			}
		],
		extraImage: "/images/qbio-gro.jpg",
		extraImageAlt: "QBio Gro professional scalp cosmetic, Irving, Texas",
		practicesKicker: "Five practices",
		practicesTitle: "Where QBio sits on the floor.",
		practices: [
			{
				slug: "plastic-surgery",
				t: "Plastic surgery",
				b: "Elixir as a post-procedure topical cosmetic after energy, contour, or revision — with lot records in the chart."
			},
			{
				slug: "dermatology",
				t: "Dermatology",
				b: "A characterized topical for physician-led skin programs that will actually read the university work."
			},
			{
				slug: "medspa",
				t: "Medical spas",
				b: "A professional cosmetic lane that is not a gray-market biologic fridge."
			},
			{
				slug: "hair",
				t: "Hair",
				b: "Gro as a professional scalp cosmetic. Not positioned as a growth drug. Pairs with AuraGraft, HairPro, and Revian."
			},
			{
				slug: "orthopedics",
				t: "Orthopedics",
				b: "Education on manufacturing and characterization. No injectable joint indication."
			}
		],
		faqs: [
			{
				q: "Are QBio exosomes FDA-approved?",
				a: "No. There are no FDA-approved exosome products, for any indication, from any company. QBio products are topical cosmetics for professional use — not drugs, not biologics, and not approved therapies. “FDA-registered facility” means the manufacturing establishment is registered with the FDA. It is a registration, not an approval."
			},
			{
				q: "Can QBio be injected?",
				a: "No. QBio products are for topical use only. They are not intended for injection or intravenous delivery, and we do not supply them for that purpose."
			},
			{
				q: "What is in the line?",
				a: "Elixir for post-procedure skin, Gro for professional scalp cosmetic care, and Gel as a reconstitution and homecare medium."
			},
			{
				q: "Who can buy QBio?",
				a: "Licensed medical and aesthetic professionals. We do not sell to consumers."
			}
		],
		companionSlug: "peptides",
		companionTitle: "Also from Irving: peptides.",
		companionBody: "The same Re-Gen Active Lab manufactures peptide and protein biomolecules from cord and amnion. Companion conversation, not a substitute."
	},
	peptides: {
		seoTitle: "Professional Peptides from Irving, Texas | Auragenics USA",
		seoDescription: "Cord- and amnion-derived peptide biomolecules from the Irving, Texas lab that makes QBio. Professional use. Not GLP-1s. Not research injectables.",
		dek: "The other biomolecule from the laboratory that makes QBio.",
		lead: "Naturally occurring peptides and proteins from umbilical cord and amniotic membrane tissue. Manufactured by Re-Gen Active Lab. Professional use. Not a compounding catalog, not a research peptide mill.",
		offeringKicker: "The offering",
		offeringTitle: "What we mean",
		offeringItalic: "when we say peptides.",
		body: [
			"Re-Gen Active Lab is an FDA-registered 361 tissue establishment in Irving, Texas, established in 2018. It manufactures biomolecule-rich products from human umbilical cord and amniotic membrane — including exosomes, proteins, peptides, and growth factors — in a certified ISO Class 3 cleanroom with ISO Class 7 support, as the laboratory describes. QBio is the named topical cosmetic line from that house. The peptide offering is the peptide-and-protein fraction of the same manufacturing story.",
			"We place it with licensed aesthetic and regenerative practices that already ask for documented biologics — not with consumers, and not as a gray-market injectable menu.",
			"If you came looking for a compounding GLP-1 list or a research-use injectable, we will send you elsewhere. If you already work with QBio and want the rest of the Irving biomolecule profile — peptides and proteins from the same 361 tissue establishment — that is the conversation."
		],
		edit: [
			{
				t: "The same laboratory",
				b: "Irving, Texas — the 361 tissue establishment that manufactures QBio also produces peptide and protein biomolecules from ethically sourced cord and amnion."
			},
			{
				t: "A biomolecule profile",
				b: "Exosomes, proteins, peptides, growth factors, and other bioactive molecules, preserved under controlled process. Not a separate research-chemical shop."
			},
			{
				t: "Lot by lot",
				b: "Professional use, for licensed practices. Documentation travels with the material."
			},
			{
				t: "A conversation first",
				b: "What belongs on your floor depends on specialty, state, and labeling. We do not drop-ship a protocol we cannot stand behind."
			}
		],
		notForTitle: "What we will not sell",
		notFor: [
			{
				t: "Not a GLP-1 catalog",
				b: "We do not sell semaglutide, tirzepatide, or other compounding-pharmacy weight-loss peptides."
			},
			{
				t: "Not research injectables",
				b: "We do not sell BPC-157, TB-500, or unapproved “research use only” vials for injection."
			},
			{
				t: "Not an orthopedic drug",
				b: "We will not market these biomolecules as a treatment for osteoarthritis, tendon injury, or joint disease."
			},
			{
				t: "Not FDA-approved drugs",
				b: "They are not intended to diagnose, treat, cure, or prevent disease. Confirm intended use and labeling with the desk."
			}
		],
		extraImage: "/images/lab.jpg",
		extraImageAlt: "Cryogenic vials at Re-Gen Active Lab, Irving, Texas",
		practicesKicker: "Five practices",
		practicesTitle: "How the peptide line sits on the floor.",
		practices: [
			{
				slug: "plastic-surgery",
				t: "Plastic surgery",
				b: "A documented professional topical alongside QBio Elixir after energy, contour, or revision."
			},
			{
				slug: "dermatology",
				t: "Dermatology",
				b: "Physician-led skin programs that want a biomolecule cosmetic with a manufacturing story they can actually read."
			},
			{
				slug: "medspa",
				t: "Medical spas",
				b: "A cash-pay professional lane that is not a six-figure laser and not a gray-market peptide fridge."
			},
			{
				slug: "hair",
				t: "Hair practices",
				b: "Paired with QBio Gro as a professional scalp cosmetic. Not positioned as a growth drug."
			},
			{
				slug: "orthopedics",
				t: "Orthopedics",
				b: "Education on manufacturing and characterization. No injectable joint story."
			}
		],
		faqs: [
			{
				q: "Do you sell injectable research peptides or GLP-1s?",
				a: "No. The peptide offering is professional biomolecules from Re-Gen Active Lab in Irving — the same 361 tissue establishment that manufactures QBio. We do not run a compounding-pharmacy weight-loss catalog."
			},
			{
				q: "Are these FDA-approved drugs?",
				a: "No. They are not intended to diagnose, treat, cure, or prevent disease. Confirm labeling and intended use with the desk."
			},
			{
				q: "How do peptides relate to QBio?",
				a: "Same laboratory family in Irving. QBio is the named topical exosome cosmetic line. Peptides are the peptide-and-protein fraction of the same manufacturing story."
			},
			{
				q: "Who can buy the peptide line?",
				a: "Licensed medical and aesthetic professionals. We do not sell to consumers. Confirm labeling, intended use, and state requirements with the desk."
			}
		],
		companionSlug: "exosomes",
		companionTitle: "Also from Irving: QBio.",
		companionBody: "Elixir, Gro, and Gel — professional topical exosome cosmetics, independently characterized, lot-documented. Companion conversation, not a substitute."
	},
	auragraft: {
		seoTitle: "AuraGraft FUE Hair Transplant System | United States",
		seoDescription: "AuraGraft is the smart choice for FUE Hair Transplants. Developed by the original team that introduced suction-assisted FUE globally. Lightweight (just 38 lbs). Industry-leading 3-year warranty.",
		dek: "AuraGraft is the smart choice for FUE Hair Transplants.",
		lead: "Developed by the original team that introduced suction-assisted FUE globally, AuraGraft is built to optimize safety, precision, and clinical outcomes. Lightweight (just 38 lbs), portable, and durable, it’s backed by an industry-leading 3-year warranty—setting a new standard for reliability in hair restoration.",
		offeringKicker: "Hair surgery",
		offeringTitle: "Restore lost hair",
		offeringItalic: "with precision FUE.",
		body: [
			"Restore lost hair with the AuraGraft medical aesthetic device using precision follicular-unit extraction (FUE) – a method we pioneered. AuraGraft™ rejuvenates your hairline with your own healthy hair providing the most natural-looking results for those who are bald or have thinning hair.",
			"Developed by physicians, medical scientists and engineers. Touchscreen Interface: Intuitive and easy to navigate. Ergonomically Balanced Handpiece: Designed to reduce operator fatigue. Optimized Gear Ratio: Ensures smooth tissue extraction without heat damage. Powerful Vacuum Pressure: Prevents clogging and improves efficiency. One-Piece Disposable Contra-Angle & Punch: Cuts cleanup time by up to 45 minutes. Complete disposable procedure packs include handpiece, punch, tubing set, exterior fluid canister, and interior graft collection canister — no patient cross contamination; reduces clean up time by an average of 45 minutes.",
			"Efficient, Expert Harvesting. Low-torque, high-precision punch system reduces follicular trauma. Grafts retain structural integrity, leading to higher survival and natural results. Offers continuous hydration and cooling environment during graft handling, preserving tissue viability. Designed to significantly reduce procedure time and operator fatigue without compromising graft quality or density. Suitable for men and women of all hair types and textures. AuraGraft expands treatment possibilities to include permanent restoration of facial hair, eyebrows, and other body areas affected by hair loss. Transplanted hair grows naturally and fully within 9–12 months, blending seamlessly with existing hair for undetectable results.",
			"With AuraGraft priced at nearly half the cost of the previous suction-assisted FUE systems, your break-even point is dramatically reduced, making ROI faster and more attainable. In fact, you only need to treat approximately five patients to recoup your entire investment. AuraGraft is more than a device—it’s part of a comprehensive hair restoration business model designed to support clinical success, patient acquisition, and long-term growth."
		],
		edit: [
			{
				t: "The original team",
				b: "Developed by the original team that introduced suction-assisted FUE globally. The AuraGraft team includes the original pioneers who introduced suction-assisted FUE globally."
			},
			{
				t: "Disposable packs",
				b: "Complete disposable procedure packs include handpiece, punch, tubing set, exterior fluid canister, and interior graft collection canister — no patient cross contamination; reduces clean up time by an average of 45 minutes."
			},
			{
				t: "38 lbs · 3-year warranty",
				b: "Lightweight (just 38 lbs), portable, and durable, it’s backed by an industry-leading 3-year warranty."
			},
			{
				t: "Facial and body hair",
				b: "Permanent restoration of facial hair, eyebrows, and other body areas affected by hair loss. Suitable for men and women of all hair types and textures."
			}
		],
		practicesKicker: "Assigned practices",
		practicesTitle: "Who stands this up.",
		practices: [{
			slug: "hair",
			t: "Hair transplant",
			b: "AuraGraft is the smart choice for FUE Hair Transplants — portable console, disposable packs, facial and body hair too."
		}, {
			slug: "plastic-surgery",
			t: "Plastic surgery",
			b: "Keep hair cases in-house. Pair with QBio Gro (not intended to affect the growth of hair) and FDA-Cleared Revian for the non-surgical lane."
		}],
		faqs: [
			{
				q: "Who developed AuraGraft?",
				a: "Developed by the original team that introduced suction-assisted FUE globally. Developed by physicians, medical scientists and engineers."
			},
			{
				q: "How heavy is the console?",
				a: "Lightweight (just 38 lbs), portable, and durable, backed by an industry-leading 3-year warranty."
			},
			{
				q: "Does it work only on the scalp?",
				a: "AuraGraft expands treatment possibilities to include permanent restoration of facial hair, eyebrows, and other body areas affected by hair loss. Suitable for men and women of all hair types and textures."
			}
		],
		companionSlug: "revian",
		companionTitle: "The at-home lane: Revian.",
		companionBody: "FDA-Cleared at-home therapeutic LLLT device utilizing patented dual wavelength technology."
	},
	auralux: {
		seoTitle: "AuraLux ProDeep 1340 nm Laser for US Clinics | Auragenics",
		seoDescription: "AuraLux packages Vydence ProDeep 1,340 nm non-ablative fractional Nd:YAP on Etherea-mx for U.S. aesthetic practices. Prescription device. Training required.",
		dek: "AuraLux, featuring Vydence’s ProDeep 1340nm energy platform, is now available in the U.S.",
		lead: "For nearly six years, Vydence has successfully utilized the ProDeep platform for hair restoration across South America and Europe. With over 70 FDA clearances in the US, Vydence is currently awaiting 510(k) FDA clearance for hair restoration.",
		offeringKicker: "Energy",
		offeringTitle: "ProDeep,",
		offeringItalic: "now a U.S. package.",
		body: [
			"ProDeep® is a unique 1,340 nm, non-ablative fractional Nd:YAP laser with deeper penetration than any other laser in its class. Exclusive 1340nm, fractionated, non-ablative platform. Additional plug & play handpieces & spots for 70 FDA-cleared treatments. With over 70 FDA clearances in the US, Vydence is currently awaiting 510(k) FDA clearance for hair restoration.",
			"AuraLux is how Auragenics packages that platform for U.S. plastic surgery, dermatology, and physician-supervised medical spas. It pairs naturally with QBio topical cosmetics in post-procedure menus. Prescription device. Training required. Use according to labeling and state requirements.",
			"Practices that already run Etherea-mx can treat AuraLux as the ProDeep conversation — same chassis, a specific wavelength, and an honest line on hair. Practices starting energy from zero should look at the full Vydence family so the first capital buy can grow by handpiece."
		],
		edit: [
			{
				t: "1,340 nm Nd:YAP",
				b: "Non-ablative fractional ProDeep® — the wavelength the package is built around."
			},
			{
				t: "Etherea-mx chassis",
				b: "Modular laser and light platform. Grow by handpiece instead of replacing the console."
			},
			{
				t: "Honest on hair",
				b: "Hair-restoration 510(k) is pending. We will not market AuraLux as FDA-cleared for hair until it is."
			},
			{
				t: "Post-procedure pair",
				b: "QBio Elixir as a topical cosmetic after energy — documented, not improvised."
			}
		],
		practicesKicker: "Assigned practices",
		practicesTitle: "Who runs energy.",
		practices: [
			{
				slug: "dermatology",
				t: "Dermatology",
				b: "Fractional work on a modular chassis, with a clear line on what is and is not cleared."
			},
			{
				slug: "plastic-surgery",
				t: "Plastic surgery",
				b: "Energy on the cash-pay floor next to Junera and surgical cases."
			},
			{
				slug: "medspa",
				t: "Medical spas",
				b: "Physician-supervised energy — not a staff-only toy."
			}
		],
		faqs: [
			{
				q: "Is AuraLux FDA-cleared for hair restoration?",
				a: "With over 70 FDA clearances in the US, Vydence is currently awaiting 510(k) FDA clearance for hair restoration. That indication is not claimed here."
			},
			{
				q: "What wavelength is ProDeep?",
				a: "1,340 nm non-ablative fractional Nd:YAP on the Etherea-mx platform."
			},
			{
				q: "Who can buy it?",
				a: "Licensed practices that can hold a prescription energy device, with training. Confirm state requirements."
			},
			{
				q: "How does AuraLux relate to Vydence?",
				a: "AuraLux is the Auragenics package built around ProDeep 1,340 nm on Etherea-mx. Vydence is the broader modular family — additional chassis and handpieces as the menu grows."
			}
		],
		companionSlug: "vydence",
		companionTitle: "The rest of the Vydence family.",
		companionBody: "Etherea-mx, Zye YAG, and Zye ALX — add handpieces as the menu grows. AuraLux is the ProDeep package; the platforms are how you scale."
	},
	junera: {
		seoTitle: "Junera 980 + 1470 Body Device for US Practices | Auragenics",
		seoDescription: "Junera dual-wavelength 980 nm and 1,470 nm for minimally invasive subdermal remodeling, contouring, and tightening. For trained physicians. Cash-pay category.",
		dek: "Minimally invasive subdermal remodeling between surgery and surface energy.",
		lead: "Junera combines 980 nm (vascularity and coagulation) with 1,470 nm (water-absorbed soft-tissue remodeling) for controlled subdermal tissue remodeling, fat coagulation, skin contraction, and collagen stimulation — local anesthesia, small entry, cash-pay category.",
		offeringKicker: "Body",
		offeringTitle: "Between lipo",
		offeringItalic: "and a surface device.",
		body: [
			"Junera is positioned as the category between surgical contouring and wait-and-see external energy. Two clinically used wavelengths share one platform: 980 nm for vascularity, coagulation, and hemostasis; 1,470 nm, highly absorbed by water, for precise soft-tissue remodeling, contraction, and collagen stimulation.",
			"Indications the manufacturer discusses include lower face and jawline contouring, submental and neck tightening, body contouring, postpartum abdomen, bra-roll and flank refinement, and targeted tissue tightening. Visible tissue response during treatment is a stated contrast to delayed external devices. Tiny entry, local anesthesia, little downtime as positioned. For trained physicians. Individual results vary.",
			"This is a physician procedure, not a technician belt. Plastic surgery groups use it between liposuction and a surface device. Physician-supervised medical spas use it as cash-pay contouring. Training and labeling decide who may run it — not a brochure."
		],
		edit: [
			{
				t: "980 nm",
				b: "Vascularity and coagulation — hemostasis and controlled tissue interaction."
			},
			{
				t: "1,470 nm",
				b: "Water-absorbed remodeling — contraction, contour, collagen stimulation as positioned."
			},
			{
				t: "Cash-pay contour",
				b: "A high-margin physician procedure, not a six-week wait for a belt device."
			},
			{
				t: "Face and body",
				b: "Jawline, submental, neck, abdomen, flanks, bra-roll — one platform, local anesthesia."
			}
		],
		practicesKicker: "Assigned practices",
		practicesTitle: "Who contours.",
		practices: [{
			slug: "plastic-surgery",
			t: "Plastic surgery",
			b: "The energy between liposuction and a surface tightening device."
		}, {
			slug: "medspa",
			t: "Medical spas",
			b: "Physician-performed contouring with a cash-pay ROI story — not a technician belt."
		}],
		faqs: [
			{
				q: "Is Junera non-invasive?",
				a: "It is positioned as minimally invasive: small entry, local anesthesia, physician-performed. Not a surface-only belt."
			},
			{
				q: "What are the wavelengths?",
				a: "980 nm for vascularity and coagulation, and 1,470 nm for water-absorbed soft-tissue remodeling."
			},
			{
				q: "Who is it for?",
				a: "Trained physicians in plastic surgery and body-contouring practices. Use according to labeling."
			}
		],
		companionSlug: "auralux",
		companionTitle: "Surface energy: AuraLux.",
		companionBody: "When the case is fractional and non-ablative rather than subdermal, ProDeep 1,340 nm on Etherea-mx is the companion package."
	},
	vydence: {
		seoTitle: "Vydence Laser Platforms for US Aesthetic Practices | Auragenics",
		seoDescription: "Modular Vydence laser and light platforms — Etherea-mx, Zye YAG, Zye ALX — with ProDeep, handPICO, DualMode, and more. Grow by handpiece. Confirm each 510(k).",
		dek: "Choose a platform. Add handpieces as the practice grows.",
		lead: "Modular laser and light platforms: ETHEREA-MX®, ZYE YAG®, or ZYE ALX®, with handpieces including ProDeep®, handPICO®, DualMode®, LongPulse®, and 3-10/VL®. Upgrade wavelengths instead of replacing the console.",
		offeringKicker: "Platforms",
		offeringTitle: "One capital buy.",
		offeringItalic: "Many indications.",
		body: [
			"Vydence builds modular energy platforms so a practice can start with the indications it will actually run and add handpieces as menus expand. Etherea-mx, Zye YAG, and Zye ALX are the chassis. Handpieces span pigment, vascular, fractional, and hair-removal work — including ProDeep, handPICO, DualMode, LongPulse, and 3-10/VL.",
			"Vydence reports 70+ FDA clearances across the family. Indications still vary by handpiece and clearance. Confirm the 510(k) for the indication you intend to market. Laser devices require appropriate credentials. Auragenics places the platforms with dermatology, plastic surgery, and physician-supervised medical spas.",
			"The buying question is not which laser so much as which chassis and which first handpiece. Dermatology often starts pigment or fractional. Plastic surgery often starts ProDeep. Medical spas need a medical director who can hold a prescription device. We will not advertise an indication the clearance does not support."
		],
		edit: [
			{
				t: "Three chassis",
				b: "Etherea-mx, Zye YAG, Zye ALX — pick a platform, do not buy a new console for every wavelength."
			},
			{
				t: "Handpiece logic",
				b: "ProDeep, handPICO, DualMode, LongPulse, 3-10/VL — pigment, vascular, fractional, hair removal."
			},
			{
				t: "Clearances, not slogans",
				b: "70+ FDA clearances reported. Still confirm the specific handpiece and indication before you advertise."
			}
		],
		practicesKicker: "Assigned practices",
		practicesTitle: "Who grows a platform.",
		practices: [
			{
				slug: "dermatology",
				t: "Dermatology",
				b: "Pigment, vascular, and fractional work without a new capital stack each year."
			},
			{
				slug: "plastic-surgery",
				t: "Plastic surgery",
				b: "Energy next to surgery — start with ProDeep, add as the aesthetic floor earns."
			},
			{
				slug: "medspa",
				t: "Medical spas",
				b: "Physician-supervised modular energy with an ROI path of added handpieces."
			}
		],
		faqs: [
			{
				q: "Do I have to replace the console to add a wavelength?",
				a: "The point of the family is the opposite: add a handpiece. Confirm which chassis and which clearance you need."
			},
			{
				q: "How many FDA clearances does Vydence have?",
				a: "The manufacturer reports 70+ across the portfolio. Indications still vary. Confirm labeling for what you will market."
			},
			{
				q: "Who can operate a Vydence platform?",
				a: "Laser devices require appropriate credentials and a medical director where the state requires one. Confirm the handpiece, the 510(k), and your state’s rules before you advertise."
			}
		],
		companionSlug: "auralux",
		companionTitle: "The ProDeep package: AuraLux.",
		companionBody: "If the first indication is 1,340 nm non-ablative fractional Nd:YAP, start with the AuraLux package on Etherea-mx."
	},
	inkout: {
		seoTitle: "inkOUT Non-Laser Tattoo Removal for US Med Spas | Auragenics",
		seoDescription: "inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology. FDA Class I non-laser tattoo and permanent makeup removal. Made in Utah.",
		dek: "The Latest in Non-Laser Tattoo and Permanent Makeup Removal Technology",
		lead: "inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology to naturally expel tattoo and permanent makeup ink through the skin’s surface.",
		offeringKicker: "Removal",
		offeringTitle: "TEPR®,",
		offeringItalic: "not a laser.",
		body: [
			"inkOUT® utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology to naturally expel tattoo and permanent makeup ink through the skin’s surface. We are pleased to introduce InkOUT®, a patented, FDA Class I non-laser tattoo removal system powered by Trans-Epidermal Pigment Release (TEPRderm®) technology. inkOUT provides non-thermal, non-laser tattoo & permanent makeup removal.",
			"Our patented technology uses a controlled ink expulsion technique to disrupt ink particles while delivering our natural TEPRsol® solution. As the body naturally heals, ink is expelled through the skin’s surface. Ink sloughs off during the healing process via a crusting layer. That means no internal absorption. Over the first 2–4 weeks, your skin begins the healing process via crusting that contains the captured ink particles. When the crusting naturally sloughs off the ink is taken out with it. Rather than fragmenting pigment particles like lasers, TEPRderm technology facilitates the physical removal of ink through the body’s own regenerative process. Nothing fragments into your lymphatic system to process out over time.",
			"Unlike other methods, TEPR works on yellow, red, white, blue, pastel, neon inks. Every color leaves the same way—through the surface of the skin. Up to 35% of ink is removed per session. For most tattoos, full removal happens in just 3–5 sessions over 10–15 months. That’s compared to 8–15+ laser sessions over 2+ years. FDA Class I device — can be operated by properly trained staff. Costs approximately one-fifth of most laser platforms. Proudly made in the USA (Utah). Individual results may vary. Safe when performed by certified technicians following proper protocols and aftercare guidelines."
		],
		edit: [
			{
				t: "TEPR® / TEPRderm®",
				b: "Patented Trans-Epidermal Pigment Release. Ink is expelled through a crusting layer. That means no internal absorption."
			},
			{
				t: "All colors",
				b: "TEPR works on yellow, red, white, blue, pastel, neon inks. Every color leaves the same way—through the surface of the skin."
			},
			{
				t: "FDA Class I",
				b: "Can be operated by properly trained staff. Safe when performed by certified technicians following proper protocols and aftercare guidelines."
			},
			{
				t: "3–5 sessions",
				b: "Up to 35% of ink is removed per session. For most tattoos, full removal happens in just 3–5 sessions over 10–15 months."
			}
		],
		practicesKicker: "Assigned practices",
		practicesTitle: "Who removes ink without a laser.",
		practices: [
			{
				slug: "medspa",
				t: "Medical spas",
				b: "FDA Class I device — can be operated by properly trained staff. A cash-pay tattoo and PMU service without a laser system."
			},
			{
				slug: "dermatology",
				t: "Dermatology",
				b: "TEPR works on yellow, red, white, blue, pastel, neon inks — including colors lasers treat poorly."
			},
			{
				slug: "plastic-surgery",
				t: "Plastic surgery",
				b: "Non-laser tattoo and permanent makeup removal on the aesthetic floor."
			}
		],
		faqs: [
			{
				q: "Is inkOUT a laser?",
				a: "No. inkOUT provides non-thermal, non-laser tattoo & permanent makeup removal. It utilizes patented TEPR® (Trans-Epidermal Pigment Release) technology. It is a patented, FDA Class I non-laser tattoo removal system. FDA Class I device — can be operated by properly trained staff."
			},
			{
				q: "Does it work on all ink colors?",
				a: "Unlike other methods, TEPR works on yellow, red, white, blue, pastel, neon inks. Every color leaves the same way—through the surface of the skin."
			},
			{
				q: "How many sessions?",
				a: "Up to 35% of ink is removed per session. For most tattoos, full removal happens in just 3–5 sessions over 10–15 months. Individual results may vary. Safe when performed by certified technicians following proper protocols and aftercare guidelines."
			}
		],
		companionSlug: "vydence",
		companionTitle: "When the case is still a laser case.",
		companionBody: "Pigment and vascular work that belongs on a Q-switched or fractional platform still lives with Vydence. inkOUT is the non-laser lane."
	},
	revian: {
		seoTitle: "Revian FDA-Cleared LED Hair Cap | United States | Auragenics",
		seoDescription: "Revian dual-wavelength LED cap — 660 nm red and 620 nm orange. FDA-cleared LLLT for indicated pattern hair loss. Doctor-dispensed, app-monitored.",
		dek: "#1 Doctor Recommended. FDA-Cleared at-home therapeutic LLLT device utilizing patented dual wavelength technology.",
		lead: "Clinically proven to grow more hair in less time. Dual wavelength technology — Revian’s precise pairing of red (660nm) and orange (620nm) LED wavelengths. Participants who were at least 80% compliant had an average of 26.3 more hairs per cm² compared to sham after 16 weeks.",
		offeringKicker: "At-home",
		offeringTitle: "The cap",
		offeringItalic: "that is actually cleared.",
		body: ["Revian is an FDA-cleared low-level light therapy cap for indicated pattern hair loss. Patented dual-wavelength LED — red 660 nm and orange 620 nm — is positioned to address inflammation, DHT signaling, and blood flow associated with pattern loss. No chemicals, no pills. Sessions are tracked in a smart app.", "Labeling covers men with Norwood-Hamilton IIa–V and women with Ludwig-Savin I-1 to I-4, II-1, II-2 or frontal patterns. In the sham-controlled study, subjects at least 80% compliant for 16 weeks averaged 26.3 more hairs per square centimeter versus sham; the placebo arm continued to lose hair. Doctor-dispensed. Pairs with AuraGraft, HairPro, and QBio Gro. Results depend on diagnosis and compliance."],
		edit: [
			{
				t: "FDA-cleared LLLT",
				b: "A labeled at-home therapeutic device — not a cosmetic LED hat without a 510(k) story."
			},
			{
				t: "Two wavelengths",
				b: "660 nm red and 620 nm orange. Dual-wavelength by design, not a single-color ring."
			},
			{
				t: "Compliance is the product",
				b: "App-monitored sessions. The published delta was in the 80%+ compliant arm."
			},
			{
				t: "Fits the department",
				b: "Dispense after HairPro imaging or alongside AuraGraft. Non-surgical lane, not a rival to FUE."
			}
		],
		practicesKicker: "Assigned practices",
		practicesTitle: "Who dispenses the cap.",
		practices: [
			{
				slug: "hair",
				t: "Hair practices",
				b: "The at-home adjunct after consult, imaging, or FUE — FDA-cleared, app-tracked."
			},
			{
				slug: "dermatology",
				t: "Dermatology",
				b: "Pattern hair loss you would rather treat with labeled LLLT than an unlabeled LED."
			},
			{
				slug: "medspa",
				t: "Medical spas",
				b: "A retail-dispensed, doctor-authorized cap with a clinical number you can actually quote."
			}
		],
		faqs: [{
			q: "Is Revian FDA-cleared?",
			a: "Yes, for indicated pattern hair loss as labeled. See the 510(k) and indications for men (Norwood-Hamilton IIa–V) and women (Ludwig-Savin ranges listed)."
		}, {
			q: "What does the study show?",
			a: "Compliant subjects (at least 80% over 16 weeks) had an average of 26.3 more hairs/cm² versus a sham cap. Placebo subjects continued to lose hair. Results depend on diagnosis and compliance."
		}],
		companionSlug: "hairpro",
		companionTitle: "Show the course: HairPro.",
		companionBody: "50–300× scalp imaging with split-screen progress. The graphs that make a dispensed cap make sense."
	},
	hairpro: {
		seoTitle: "HairPro Scalp Analysis for US Hair Clinics | Auragenics",
		seoDescription: "HairPro hair and scalp imaging — 50–300×, polarized and UV, split-screen progress, QR to the patient. No software maintenance fees as positioned. One-year warranty.",
		dek: "Magnification, polarization, UV, and AI suggestions — graphs that prove the course.",
		lead: "A hair and scalp imaging system (50–300×, polarized and UV) with questionnaires, split-screen progress, QR delivery to the patient, and service/product suggestions. No software maintenance fees as positioned. One-year warranty.",
		offeringKicker: "Diagnostics",
		offeringTitle: "Prove the course",
		offeringItalic: "on a split screen.",
		body: ["HairPro is a hair and scalp analysis system for practices that are tired of consults that cannot show anything. Magnification from 50× to 300× in normal, cross-polarized, parallel-polarized, and UV light. High-resolution condition of scalp and hair. Patient questionnaires to increase reliability. Split screen to compare past to current images. QR or email delivery of results to the patient.", "The software suggests in-house services and products — the conversion logic. Automatic updates and no software maintenance fees as positioned by the manufacturer. One-year warranty. It is an analysis and education tool. It does not diagnose disease by itself. Clinical judgment remains with the licensed provider."],
		edit: [
			{
				t: "50–300×",
				b: "Normal, polarized, and UV. The patient can see what you see."
			},
			{
				t: "Split screen",
				b: "Past versus current. The graph that keeps someone on Revian, Gro, or a surgical plan."
			},
			{
				t: "QR to the patient",
				b: "Results leave the room with them. Consults convert when the file is in their pocket."
			},
			{
				t: "No maintenance-fee model",
				b: "Automatic updates as positioned. One-year warranty. Suggests the services you actually sell."
			}
		],
		practicesKicker: "Assigned practices",
		practicesTitle: "Who needs to show the work.",
		practices: [
			{
				slug: "hair",
				t: "Hair practices",
				b: "The consult camera for FUE, LED, and topical menus — conversion when results are visible."
			},
			{
				slug: "dermatology",
				t: "Dermatology",
				b: "Scalp and hair documentation without a full imaging booth."
			},
			{
				slug: "medspa",
				t: "Medical spas",
				b: "A non-surgical hair bay that can prove progress instead of promising it."
			}
		],
		faqs: [{
			q: "Does HairPro diagnose disease?",
			a: "No. It is an analysis and education tool. Clinical judgment remains with the licensed provider."
		}, {
			q: "Are there software fees?",
			a: "The manufacturer positions automatic updates with no software maintenance fees. One-year warranty on the system."
		}],
		companionSlug: "auragraft",
		companionTitle: "When imaging leads to FUE.",
		companionBody: "AuraGraft is the surgical console. HairPro is how the consult earns the right to discuss it."
	},
	propatch: {
		seoTitle: "ProPatch+ Transdermal Patches for US Practices | Auragenics",
		seoDescription: "ProPatch+ freeze-dried transdermal patches — SculptPatch, RenewPatch, VitriPatch. Eight-hour time-release through skin. Professional retail for medical spas.",
		dek: "Freeze-dried nanotechnology. Time-release through skin.",
		lead: "Medical-grade transdermal patches using freeze-dried nanotechnology. Nutrients transmit through skin over an eight-hour window. SculptPatch, RenewPatch, and VitriPatch. Organic, vegan, latex-free formulas as labeled.",
		offeringKicker: "Retail",
		offeringTitle: "What leaves",
		offeringItalic: "with the patient.",
		body: [
			"ProPatch+ uses the skin as the delivery system. Freeze-dried nanotechnology and time-release are positioned to move nutrients through skin into circulation over about eight hours — an alternative to a swallowed pill as described by the manufacturer. Three lines: SculptPatch (B12, Garcinia, Echinacea; appetite and metabolism support), RenewPatch (collagen, HA, biotin, saw palmetto, resveratrol), and VitriPatch (vitamins, omegas, curcumin, lion’s mane, minerals).",
			"Formulas are labeled organic, vegan, and latex-free. These are dietary supplement patches, not evaluated by FDA to diagnose, treat, cure, or prevent disease. Dispense according to professional judgment after body, facial, or hair work. A retail SKU for medical spas, plastic surgery floors, and hair practices.",
			"This is not a device and not a drug. It is a take-home SKU that rides after contouring, a facial, or a hair consult. Talk about Sculpt, Renew, and Vitri as labeled supplements — a second ticket, not a clinical claim."
		],
		edit: [
			{
				t: "SculptPatch",
				b: "Body-sculpting support as labeled — B12, Garcinia, Echinacea."
			},
			{
				t: "RenewPatch",
				b: "Skin and hair cellular nutrition — collagen, HA, biotin, saw palmetto, resveratrol."
			},
			{
				t: "VitriPatch",
				b: "Systemic wellness nutrients — vitamins, omegas, curcumin, lion’s mane, minerals."
			},
			{
				t: "Eight hours",
				b: "Time-release through skin versus a pill, as positioned. A take-home after the visit."
			}
		],
		practicesKicker: "Assigned practices",
		practicesTitle: "Who dispenses retail.",
		practices: [
			{
				slug: "medspa",
				t: "Medical spas",
				b: "The patch that leaves with the body or facial — a second ticket without another device."
			},
			{
				slug: "plastic-surgery",
				t: "Plastic surgery",
				b: "Post-contour retail that does not pretend to be a drug."
			},
			{
				slug: "hair",
				t: "Hair",
				b: "RenewPatch in the non-surgical bag with Revian and Gro."
			}
		],
		faqs: [
			{
				q: "Are ProPatch+ products FDA-approved drugs?",
				a: "No. They are dietary supplement patches, not evaluated by FDA to diagnose, treat, cure, or prevent disease."
			},
			{
				q: "What are the three lines?",
				a: "SculptPatch, RenewPatch, and VitriPatch — body, skin/hair, and systemic wellness as labeled."
			},
			{
				q: "Who typically dispenses ProPatch+?",
				a: "Medical spas after body or facial work, plastic surgery floors as post-contour retail, and hair practices pairing RenewPatch with Revian or Gro. Professional judgment; supplement labeling."
			}
		],
		companionSlug: "analysis",
		companionTitle: "The consult that maps to retail.",
		companionBody: "AI facial analysis from a phone scan — then the treatments and take-home products you actually offer."
	},
	analysis: {
		seoTitle: "AI Facial Analysis for US Aesthetic Practices | Auragenics",
		seoDescription: "Smartphone facial analysis for plastic surgery, dermatology, and medical spas. Proportions, symmetry, volume, and skin — mapped to the treatments you offer. No imaging booth.",
		dek: "Proportions, symmetry, volume, and skin — then the treatments you actually offer.",
		lead: "End-to-end facial analysis from a phone scan. Holistic aesthetics, not only surface skin. Treatment education mapped to the clinic’s menu, a patient app, and a provider app to close plans. No dedicated imaging booth.",
		offeringKicker: "Software",
		offeringTitle: "The consult,",
		offeringItalic: "without a booth camera.",
		body: [
			"Most facial-analysis stacks start with a capital imaging booth. This one starts with a smartphone. The scan looks at proportions, symmetry, volume, and skin — a fuller aesthetic picture than surface texture alone — then educates the patient on treatments the practice actually offers.",
			"A patient app and a provider app close the plan. An optional referral network covers treatments you do not run. It is an education and visualization tool, not a diagnostic medical device and not a replacement for clinical exam. Built for plastic surgery, dermatology, and medical spas that want the consult to map to the menu.",
			"The scan is only as useful as the menu behind it. If you do not offer a treatment, the software should not sell it — or it should refer it. That is the difference between a toy and a consult tool."
		],
		edit: [
			{
				t: "Phone, not a booth",
				b: "No dedicated imaging room. The consult can happen where the patient already sits."
			},
			{
				t: "More than skin texture",
				b: "Proportions, symmetry, volume, and skin — then the treatments on your actual menu."
			},
			{
				t: "Two apps",
				b: "Patient education on one side, provider closing tools on the other."
			},
			{
				t: "Refer what you do not do",
				b: "Optional network for treatments outside the house, instead of a dead-end slide."
			}
		],
		practicesKicker: "Assigned practices",
		practicesTitle: "Who closes with a scan.",
		practices: [
			{
				slug: "plastic-surgery",
				t: "Plastic surgery",
				b: "Volume and proportion education that leads to the procedures you perform."
			},
			{
				slug: "dermatology",
				t: "Dermatology",
				b: "Skin plus structure — not a surface-only selfie score."
			},
			{
				slug: "medspa",
				t: "Medical spas",
				b: "Map the scan to injectables, energy, and retail you already sell."
			}
		],
		faqs: [
			{
				q: "Is this a diagnostic device?",
				a: "No. It is an education and visualization tool. It does not replace clinical examination."
			},
			{
				q: "Do I need a camera booth?",
				a: "No. Analysis runs from a smartphone scan."
			},
			{
				q: "Who is it for?",
				a: "Plastic surgery, dermatology, and medical spas that want the consult to map to treatments they actually offer — not a generic skin score."
			}
		],
		companionSlug: "auralux",
		companionTitle: "When the plan includes energy.",
		companionBody: "AuraLux and the Vydence family are what the scan should be allowed to recommend — only if you actually offer them."
	}
};
function storyBySlug(slug) {
	return PRODUCT_STORIES[slug];
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DMI4BGSw.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-DboowM1i.css";
var APP_NAME = SITE.name;
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-dvh flex-col items-center justify-center bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker uppercase tracking-kicker text-accent",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-4xl",
				children: "This page is not in the issue."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-8 text-kicker uppercase tracking-kicker text-accent",
				children: "Return home"
			})
		]
	});
}
var Route$18 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${APP_NAME} | US Manufacturer of Devices, Exosomes & Peptides` },
			{
				name: "description",
				content: SITE.description
			},
			{
				name: "theme-color",
				content: "#f3eee4"
			},
			{
				name: "language",
				content: "en-US"
			},
			{
				name: "geo.region",
				content: "US"
			},
			{
				name: "geo.placename",
				content: "Irving, TX, United States"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en-US",
		suppressHydrationWarning: true,
		className: "antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-bg font-sans text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	})
});
var $$splitComponentImporter$14 = () => import("./routes-DMeVSixI.mjs");
var Route$17 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$14, "component"),
	head: () => pageHead({
		title: "AURAGENICS | US Manufacturer of Devices, Exosomes & Peptides",
		description: "Luxury United States manufacturer and laboratory in Irving, Texas. QBio exosomes, peptide biomolecules, AuraGraft FUE, and a high-end device floor for licensed practices nationwide.",
		path: "/"
	})
});
var $$splitComponentImporter$13 = () => import("./about-DbsAapK6.mjs");
var Route$16 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => pageHead({
		title: "About Auragenics | US Device Manufacturer & Texas Laboratory",
		description: "Auragenics manufactures QBio exosomes and peptide biomolecules in Irving, Texas, and places a high-end device floor for licensed United States aesthetic and hair practices.",
		path: "/about"
	})
});
var $$splitComponentImporter$12 = () => import("./consulting-Dkg5atom.mjs");
var Route$15 = createFileRoute("/consulting")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	head: () => pageHead({
		title: "MD Hair Restoration Consulting for US Practices | Auragenics",
		description: "MD-level hair restoration consulting for United States practices: FUE device selection, protocols, training, and ROI for departments standing up or expanding.",
		path: "/consulting"
	})
});
var Route$14 = createFileRoute("/exosomes")({ beforeLoad: () => {
	throw redirect({
		to: "/products/$slug",
		params: { slug: "exosomes" }
	});
} });
var $$splitComponentImporter$11 = () => import("./inquire-DfjOCczy.mjs");
var Route$13 = createFileRoute("/inquire")({
	validateSearch: (search) => ({ interest: typeof search.interest === "string" ? search.interest : void 0 }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => pageHead({
		title: "US Practice Inquiry | Auragenics Laboratory",
		description: "Request professional information on Auragenics devices, QBio exosomes, and peptides. Licensed United States practices only.",
		path: "/inquire",
		index: false
	})
});
var $$splitComponentImporter$10 = () => import("./journal-Bxaa2Aso.mjs");
var Route$12 = createFileRoute("/journal")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./laboratory-BaQ3yPSI.mjs");
var Route$11 = createFileRoute("/laboratory")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => pageHead({
		title: "Irving, Texas Laboratory | Re-Gen Active Lab — Exosomes & Peptides",
		description: "Re-Gen Active Lab in Irving, Texas: FDA-registered 361 tissue establishment since 2018. ISO Class 3 manufacturing, U.S. C-section cord and amnion, USP <71> and <85> on each batch. QBio and peptides for licensed US practices.",
		path: "/laboratory"
	})
});
var $$splitComponentImporter$8 = () => import("./lookbook-BughknYi.mjs");
var Route$10 = createFileRoute("/lookbook")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => pageHead({
		title: "US Lookbook: Devices, Exosomes, Peptides | Auragenics",
		description: "Auragenics lookbook for United States practices: QBio and peptides from Irving, AuraGraft FUE, energy, inkOUT, Revian, HairPro, and the rest of the device floor.",
		path: "/lookbook"
	})
});
var Route$9 = createFileRoute("/peptides")({ beforeLoad: () => {
	throw redirect({
		to: "/products/$slug",
		params: { slug: "peptides" }
	});
} });
var $$splitComponentImporter$7 = () => import("./practices-B9OHByeK.mjs");
var Route$8 = createFileRoute("/practices")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./sitemap-xY-0TTiv.mjs");
var Route$7 = createFileRoute("/sitemap")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => pageHead({
		title: "Sitemap | Auragenics USA",
		description: "Index of Auragenics United States pages: QBio exosomes, peptides, AuraGraft FUE, AuraLux, Junera, Vydence, inkOUT, Revian, HairPro, ProPatch+, and AI facial analysis.",
		path: "/sitemap"
	})
});
var Route$6 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async ({ request }) => {
	const origin = new URL(request.url).origin;
	return new Response(sitemapXml(origin), { headers: {
		"Content-Type": "application/xml; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$5 = () => import("./journal.index-DuMjG5KG.mjs");
var Route$5 = createFileRoute("/journal/")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => pageHead({
		title: "Journal | US Exosomes, Peptides & Device Letters | Auragenics",
		description: "The Auragenics journal for United States practices: how to read an exosome file, peptides from Irving, AuraGraft FUE, inkOUT vs laser, and the orthopedic line we will not cross.",
		path: "/journal"
	})
});
function journalHead(slug) {
	const article = JOURNAL.find((a) => a.slug === slug);
	return pageHead({
		title: article?.seoTitle ?? "The Journal | AURAGENICS",
		description: article?.seoDescription ?? "",
		path: article ? `/journal/${article.slug}` : "/journal"
	});
}
function JsonLd$1({ article }) {
	const data = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "BlogPosting",
				headline: article.title,
				description: article.seoDescription,
				datePublished: article.dateIso,
				dateModified: article.dateIso,
				inLanguage: SEO.locale,
				image: article.image,
				url: `/journal/${article.slug}`,
				author: {
					"@type": "Organization",
					name: "Auragenics"
				},
				publisher: {
					"@type": "Organization",
					name: "Auragenics",
					logo: {
						"@type": "ImageObject",
						url: "/images/logo.png"
					}
				},
				articleSection: article.department,
				wordCount: article.body.join(" ").split(/\s+/).length
			},
			{
				"@type": "FAQPage",
				mainEntity: article.faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Home",
						item: "/"
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Journal",
						item: "/journal"
					},
					{
						"@type": "ListItem",
						position: 3,
						name: article.title,
						item: `/journal/${article.slug}`
					}
				]
			}
		]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
function JournalPage({ article }) {
	const related = article.related.map((slug) => productBySlug(slug)).filter((p) => Boolean(p));
	const others = JOURNAL.filter((a) => a.slug !== article.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd$1, { article }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center px-5 py-14 md:px-10 md:py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/journal",
								className: "mb-8 inline-flex min-h-11 items-center gap-2 text-kicker uppercase tracking-kicker text-muted hover:text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), " The Journal"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "folio text-accent",
								children: [
									article.folio,
									" · ",
									article.department,
									" · ",
									article.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-4 max-w-xl font-display text-4xl leading-none text-ink",
								children: [article.title, "."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md font-display text-2xl italic leading-snug text-muted",
								children: article.dek
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-base leading-relaxed text-muted",
								children: article.lead
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-8 text-kicker uppercase tracking-kicker text-faint",
								children: ["The Practice Edit · ", article.read]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative min-h-80 lg:min-h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: article.image,
							alt: article.imageAlt,
							className: "absolute inset-0 size-full object-cover frame"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28",
					children: article.body.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: i === 0 ? "drop-cap text-lg leading-relaxed text-muted" : "mt-6 text-lg leading-relaxed text-muted",
						children: p
					}, p.slice(0, 28)))
				})
			}),
			related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-ink bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "In the lookbook"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-px bg-ink sm:grid-cols-2 lg:grid-cols-3",
						children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "bg-bg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/products/$slug",
								params: { slug: p.slug },
								className: "block p-6 hover:bg-surface",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "folio text-accent",
										children: p.folio
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-2xl",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: p.tagline
									})
								]
							})
						}, p.slug))
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-ink bg-bg-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent",
							children: "Asked in the room"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 divide-y divide-line border-y border-line",
							children: article.faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "group py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: "flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-xl",
									children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent group-open:rotate-45",
										children: "+"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: item.a
								})]
							}, item.q))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 text-xs leading-relaxed text-faint",
							children: "Educational, for licensed professionals. Not medical advice. Not a claim that any product diagnoses, treats, cures, or prevents disease unless its own labeling says so."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-ink bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 py-16 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent",
							children: "Continue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl",
							children: "Further letters."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/journal",
								children: "All essays"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 divide-y divide-line border-y border-line",
						children: others.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/journal/$slug",
							params: { slug: a.slug },
							className: "flex flex-col gap-1 py-5 hover:text-accent sm:flex-row sm:items-baseline sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl",
								children: a.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-kicker uppercase tracking-kicker text-muted",
								children: a.department
							})]
						}) }, a.slug))
					})]
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquireSection, { compact: true })
	] });
}
var $$splitComponentImporter$4 = () => import("./journal._slug-B_GvvII7.mjs");
var Route$4 = createFileRoute("/journal/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: ({ params }) => journalHead(params.slug)
});
var $$splitComponentImporter$3 = () => import("./practices.index-BHwtZTj4.mjs");
var Route$3 = createFileRoute("/practices/")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => pageHead({
		title: "US Practices We Serve | Surgery, Medspa, Hair, Orthopedics",
		description: "How Auragenics supplies licensed United States practices: plastic surgery, medical spas, dermatology, hair transplant, and orthopedic regenerative groups.",
		path: "/practices"
	})
});
var $$splitComponentImporter$2 = () => import("./practices._slug-D8Iv9cDP.mjs");
var Route$2 = createFileRoute("/practices/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: ({ params }) => {
		const p = practiceBySlug(params.slug);
		return pageHead({
			title: p?.seoTitle ?? (p ? `${p.title} | AURAGENICS` : "AURAGENICS"),
			description: p?.seoDescription ?? p?.dek ?? "",
			path: p ? `/practices/${p.slug}` : "/practices"
		});
	}
});
var $$splitComponentImporter$1 = () => import("./products.index-iI_WROXR.mjs");
var Route$1 = createFileRoute("/products/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => pageHead({
		title: "Devices, Exosomes & Peptides for US Practices | Auragenics",
		description: "The Auragenics United States house: QBio exosomes and peptides from Irving, Texas, AuraGraft FUE, energy, inkOUT, Revian, HairPro, and the high-end device floor.",
		path: "/products"
	})
});
function productHead(slug) {
	const product = productBySlug(slug);
	const story = storyBySlug(slug);
	const title = story?.seoTitle ?? (product ? `${product.title} | AURAGENICS` : "AURAGENICS");
	const description = story?.seoDescription ?? product?.summary ?? "";
	return pageHead({
		title,
		description,
		path: product ? `/products/${product.slug}` : "/products"
	});
}
function JsonLd({ product, story }) {
	if (!story) return null;
	const data = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Product",
				name: product.title,
				description: story.seoDescription,
				brand: {
					"@type": "Brand",
					name: "Auragenics"
				},
				manufacturer: { "@id": "/#organization" },
				category: product.department,
				image: product.image,
				url: `/products/${product.slug}`,
				audience: {
					"@type": "Audience",
					audienceType: "Licensed medical and aesthetic professionals",
					geographicArea: {
						"@type": "Country",
						name: SEO.country
					}
				},
				offers: {
					"@type": "Offer",
					availability: "https://schema.org/InStock",
					areaServed: {
						"@type": "Country",
						name: SEO.country
					},
					eligibleRegion: SEO.countryCode,
					category: "Professional use only"
				}
			},
			{
				"@type": "FAQPage",
				mainEntity: story.faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: "Home",
						item: "/"
					},
					{
						"@type": "ListItem",
						position: 2,
						name: "Lookbook",
						item: "/lookbook"
					},
					{
						"@type": "ListItem",
						position: 3,
						name: product.title,
						item: `/products/${product.slug}`
					}
				]
			}
		]
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
	});
}
function ProductPage({ product }) {
	const story = storyBySlug(product.slug);
	const companion = story?.companionSlug ? productBySlug(story.companionSlug) : void 0;
	const others = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);
	const graft = product.slug === "auragraft";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, {
			product,
			story
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center px-5 py-14 md:px-10 md:py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/lookbook",
								className: "mb-8 inline-flex min-h-11 items-center gap-2 text-kicker uppercase tracking-kicker text-muted hover:text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), " Lookbook"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "folio text-accent",
								children: [
									product.folio,
									" · ",
									product.department,
									" · ",
									product.kicker
								]
							}),
							product.specimen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-kicker uppercase tracking-kicker text-muted",
								children: product.specimen
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-4 max-w-xl font-display text-4xl leading-none text-ink",
								children: [product.title, "."]
							}),
							story ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md font-display text-2xl italic leading-snug text-muted",
								children: story.dek
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-base leading-relaxed text-muted",
								children: story?.lead ?? product.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/inquire",
										search: { interest: product.slug },
										children: "Request information"
									})
								}), companion ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/products/$slug",
										params: { slug: companion.slug },
										children: companion.title
									})
								}) : null]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: graft ? "relative min-h-80 bg-ink lg:min-h-full" : "relative min-h-80 lg:min-h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.imageAlt,
							className: graft ? "absolute inset-0 size-full object-contain p-6 md:p-10" : "absolute inset-0 size-full object-cover frame"
						})
					})]
				})
			}),
			product.stats ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-ink bg-ink text-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 md:px-8 md:py-16",
					children: product.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-bg/65",
						children: s.label
					})] }, s.label))
				})
			}) : null,
			story ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 md:px-8 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent",
							children: story.offeringKicker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-4xl",
							children: [
								story.offeringTitle,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic",
									children: story.offeringItalic
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-7",
						children: story.body.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: i === 0 ? "drop-cap text-lg leading-relaxed text-muted" : "mt-6 text-lg leading-relaxed text-muted",
							children: p
						}, p.slice(0, 24)))
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-ink bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "The edit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2",
						children: (story?.edit ?? product.points.map((b) => ({
							t: "",
							b
						}))).map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-line pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "folio text-accent",
									children: String(i + 1).padStart(2, "0")
								}),
								item.t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-2xl",
									children: item.t
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: item.b
								})
							]
						}, item.t || item.b))
					})]
				})
			}),
			story?.notFor ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-ink bg-ink text-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl lg:grid-cols-2",
					children: [story.extraImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative min-h-80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: story.extraImage,
							alt: story.extraImageAlt ?? "",
							className: "absolute inset-0 size-full object-cover"
						})
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center px-5 py-16 md:px-12 md:py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-kicker uppercase tracking-kicker text-accent-2",
								children: story.notForTitle ?? "What we will not claim"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-4xl",
								children: "A short list, on purpose."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-10 divide-y divide-bg/15 border-y border-bg/15",
								children: story.notFor.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "py-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl",
										children: item.t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-bg/70",
										children: item.b
									})]
								}, item.t))
							})
						]
					})]
				})
			}) : null,
			story ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent",
							children: story.practicesKicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-2xl font-display text-4xl",
							children: story.practicesTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-12 divide-y divide-line border-y border-line",
							children: story.practices.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/practices/$slug",
								params: { slug: item.slug },
								className: "grid min-h-11 gap-3 py-6 transition-colors hover:text-accent md:grid-cols-[12rem_1fr] md:gap-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl",
									children: item.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted",
									children: item.b
								})]
							}) }, item.slug))
						})
					]
				})
			}) : null,
			story?.faqs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-ink bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent",
							children: "Questions practices ask"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl",
							children: "Before you write."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 divide-y divide-line border-y border-line",
							children: story.faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
								className: "group py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
									className: "flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-display text-xl",
									children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent group-open:rotate-45",
										children: "+"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: item.a
								})]
							}, item.q))
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-line bg-bg-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 py-12 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent",
							children: "Professional notice"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-3xl text-sm leading-relaxed text-muted",
							children: product.notice
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-3xl text-xs leading-relaxed text-faint",
							children: [FDA_LINE, product.source ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								" ",
								"Language from ",
								product.source,
								product.sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									" ",
									"(",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: product.sourceUrl,
										className: "underline decoration-line underline-offset-2 hover:text-ink",
										rel: "noreferrer",
										children: "manufacturer page"
									}),
									")."
								] }) : "."
							] }) : null]
						})
					]
				})
			}),
			companion && story ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "folio text-accent",
							children: [
								companion.folio,
								" · ",
								companion.department
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl",
							children: story.companionTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-relaxed text-muted",
							children: story.companionBody
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/products/$slug",
									params: { slug: companion.slug },
									children: ["Open ", companion.title]
								})
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: companion.image,
						alt: companion.imageAlt,
						className: "aspect-[4/3] w-full object-cover frame"
					})]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 py-16 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "Also in the lookbook"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-px bg-line sm:grid-cols-3",
						children: others.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products/$slug",
							params: { slug: p.slug },
							className: "bg-bg p-6 hover:bg-surface",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "folio text-accent",
									children: [
										p.folio,
										" · ",
										p.department
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: p.tagline
								})
							]
						}, p.slug))
					})]
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquireSection, {
			defaultInterest: product.slug,
			compact: true
		})
	] });
}
var $$splitComponentImporter = () => import("./products._slug-CR9Dq6mB.mjs");
var Route = createFileRoute("/products/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => productHead(params.slug)
});
var IndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var AboutRoute = Route$16.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$18
});
var ConsultingRoute = Route$15.update({
	id: "/consulting",
	path: "/consulting",
	getParentRoute: () => Route$18
});
var ExosomesRoute = Route$14.update({
	id: "/exosomes",
	path: "/exosomes",
	getParentRoute: () => Route$18
});
var InquireRoute = Route$13.update({
	id: "/inquire",
	path: "/inquire",
	getParentRoute: () => Route$18
});
var JournalRoute = Route$12.update({
	id: "/journal",
	path: "/journal",
	getParentRoute: () => Route$18
});
var LaboratoryRoute = Route$11.update({
	id: "/laboratory",
	path: "/laboratory",
	getParentRoute: () => Route$18
});
var LookbookRoute = Route$10.update({
	id: "/lookbook",
	path: "/lookbook",
	getParentRoute: () => Route$18
});
var PeptidesRoute = Route$9.update({
	id: "/peptides",
	path: "/peptides",
	getParentRoute: () => Route$18
});
var PracticesRoute = Route$8.update({
	id: "/practices",
	path: "/practices",
	getParentRoute: () => Route$18
});
var SitemapRoute = Route$7.update({
	id: "/sitemap",
	path: "/sitemap",
	getParentRoute: () => Route$18
});
var SitemapDotxmlRoute = Route$6.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$18
});
var JournalIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => JournalRoute
});
var JournalSlugRoute = Route$4.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => JournalRoute
});
var PracticesIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => PracticesRoute
});
var PracticesSlugRoute = Route$2.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => PracticesRoute
});
var ProductsIndexRoute = Route$1.update({
	id: "/products/",
	path: "/products/",
	getParentRoute: () => Route$18
});
var ProductsSlugRoute = Route.update({
	id: "/products/$slug",
	path: "/products/$slug",
	getParentRoute: () => Route$18
});
var JournalRouteChildren = {
	JournalSlugRoute,
	JournalIndexRoute
};
var JournalRouteWithChildren = JournalRoute._addFileChildren(JournalRouteChildren);
var PracticesRouteChildren = {
	PracticesSlugRoute,
	PracticesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ConsultingRoute,
	ExosomesRoute,
	InquireRoute,
	JournalRoute: JournalRouteWithChildren,
	LaboratoryRoute,
	LookbookRoute,
	PeptidesRoute,
	PracticesRoute: PracticesRoute._addFileChildren(PracticesRouteChildren),
	SitemapRoute,
	SitemapDotxmlRoute,
	ProductsSlugRoute,
	ProductsIndexRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { Route$4 as a, PRODUCT_STORIES as c, Route$2 as i, InquireForm as l, Route as n, JournalPage as o, ProductPage as r, Route$13 as s, router_exports as t, InquireSection as u };
