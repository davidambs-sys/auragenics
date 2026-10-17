import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as ProductLink, n as Button, p as SiteShell, y as productBySlug } from "./site-shell-CRviDOdL.mjs";
import { a as InquireSection } from "./router-2Gc9Dcgm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/consulting-M6vviuCI.js
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		t: "Device Selection",
		b: "Guidance on choosing the right system for your practice, patient demographics, and treatment philosophy."
	},
	{
		t: "Clinical Protocol Development",
		b: "Custom protocols that combine device parameters with topicals, growth factors, or regenerative therapies for optimized outcomes."
	},
	{
		t: "Integration Strategy",
		b: "Hands-on help introducing devices into your patient flow, including staff training, treatment positioning, and pre/post-care instructions."
	},
	{
		t: "Business Modeling",
		b: "ROI projections, pricing structures, and marketing strategies tailored to your specific business goals and patient base."
	},
	{
		t: "Ongoing Support",
		b: "Continued clinical and commercial support as technologies evolve and your needs grow."
	}
];
var BODY = ["Whether you're just entering the hair restoration space or looking to expand your current offerings, our consulting services are designed to help physicians, med spas, and aesthetic clinics confidently adopt and integrate advanced hair restoration technologies into their practice.", "We work with the hair systems on this site: AuraGraft FUE, Revian LED, and QBio topical cosmetics — plus practice setup around them."];
var FAQS = [
	{
		q: "Is this product training or a department plan?",
		a: "Both, on purpose. Device in-service without a Tuesday plan is just a crate. A plan without hardware is a PDF. We do the sequence."
	},
	{
		q: "Do we have to buy AuraGraft to consult?",
		a: "No. Some practices should not operate. We will say that. Others already operate and need imaging, a cleared cap, and honest topical language."
	},
	{
		q: "Who is in the room?",
		a: "Licensed hair-restoration and plastic-surgery practices, and medical spas standing up a supervised hair bay. Not consumers. Not a weekend course sold to the internet."
	}
];
var RELATED = [
	"auragraft",
	"revian",
	"exosomes"
];
function Consulting() {
	const related = RELATED.map((slug) => productBySlug(slug)).filter((p) => Boolean(p));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center px-5 py-16 md:px-10 md:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent",
							children: "MD Hair Coach · Folio 104"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-xl font-display text-4xl leading-none",
							children: "MD Hair Restoration Consulting"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-lg leading-relaxed text-muted",
							children: "Expert Guidance to Elevate Your Practice and Patient Results"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/inquire",
									search: { interest: "hair" },
									children: "Request a consulting call"
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hair.jpg",
					alt: "Hair restoration suite",
					className: "h-72 w-full object-cover lg:h-full frame"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-ink text-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-3 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl",
						children: "35+"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-bg/65",
						children: "Years in hair technologies"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl",
						children: "FUE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-bg/65",
						children: "AuraGraft, when you should operate"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl",
						children: "LED"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-bg/65",
						children: "Revian — FDA-cleared, doctor-dispensed"
					})] })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28",
				children: BODY.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: i === 0 ? "drop-cap text-lg leading-relaxed text-muted" : "mt-6 text-lg leading-relaxed text-muted",
					children: p
				}, p.slice(0, 24)))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "The work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-8 sm:grid-cols-2",
					children: ITEMS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-line pt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "folio text-accent",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: s.b
							})
						]
					}, s.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "Hair products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-px bg-ink sm:grid-cols-2 lg:grid-cols-4",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "bg-bg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ProductLink, {
							slug: p.slug,
							className: "block p-6 hover:bg-surface",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "folio text-accent",
									children: p.folio
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-2xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: p.tagline
								})
							]
						})
					}, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-5 py-16 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "Asked in the room"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 divide-y divide-line border-y border-line",
					children: FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
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
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquireSection, {
			defaultInterest: "hair",
			compact: true
		})
	] });
}
//#endregion
export { Consulting as component };
