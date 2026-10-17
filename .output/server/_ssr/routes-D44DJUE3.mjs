import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as SITE, h as WILL_NOT, l as ProductLink, n as Button, p as SiteShell, x as productsInNavOrder, y as productBySlug } from "./site-shell-CRviDOdL.mjs";
import { a as InquireSection } from "./router-2Gc9Dcgm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D44DJUE3.js
var import_jsx_runtime = require_jsx_runtime();
var COVER_LINES = [
	{
		n: "01",
		title: "AuraGraft",
		dek: "FUE Hair Transplant System",
		slug: "auragraft"
	},
	{
		n: "02",
		title: "inkOUT",
		dek: "Tattoo Removal",
		slug: "inkout"
	},
	{
		n: "03",
		title: "QBio",
		dek: "Quintessence Biologics Exosomes",
		slug: "exosomes"
	}
];
function Home() {
	const qbio = productBySlug("exosomes");
	const graft = productBySlug("auragraft");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-[calc(100dvh-7rem)] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-lab.jpg",
					alt: "U.S. manufacturing facility",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[calc(100dvh-7rem)] max-w-7xl flex-col justify-end gap-10 px-5 pb-12 pt-24 md:flex-row md:items-end md:justify-between md:px-8 md:pb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "reveal text-kicker uppercase tracking-kicker text-accent-fg/80",
								children: [
									SITE.issue,
									" · ",
									SITE.season
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "reveal reveal-2 mt-4 font-display text-5xl leading-[0.92] text-bg",
								children: [
									"We Are Making Waves",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic",
										children: "for our Customers!"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal reveal-3 mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/products",
										children: "Products"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "border-bg text-bg hover:bg-bg hover:text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/inquire",
										children: "Inquire"
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "reveal reveal-4 hidden w-64 shrink-0 border-l border-bg/30 pl-6 lg:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "mb-4 text-kicker uppercase tracking-kicker text-bg/55",
							children: "On the cover"
						}), COVER_LINES.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-t border-bg/20 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ProductLink, {
								slug: line.slug,
								className: "block text-bg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "folio text-accent-2",
										children: line.n
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-display text-xl leading-tight",
										children: line.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm text-bg/65",
										children: line.dek
									})
								]
							})
						}, line.n))]
					})]
				})
			]
		}),
		graft ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-ink text-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "folio text-accent-2",
						children: [
							graft.folio,
							" · ",
							graft.department
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-5xl",
							children: [graft.title, "."]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-base leading-relaxed text-bg/75",
							children: graft.summary
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/auragraft.jpg",
						alt: graft.imageAlt,
						className: "mt-10 mx-auto max-h-[36rem] w-full object-contain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductLink, {
								slug: "auragraft",
								children: "See the platform"
							})
						})
					})
				]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "The floor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: "The catalog."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 divide-y divide-line border-y border-line",
						children: productsInNavOrder().map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ProductLink, {
							slug: p.slug,
							className: "group grid gap-2 py-6 md:grid-cols-[7rem_1fr_auto] md:items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "folio text-accent",
									children: p.folio
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-kicker uppercase tracking-kicker text-muted",
									children: p.kicker
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl group-hover:text-accent",
									children: p.title
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-kicker uppercase tracking-kicker text-accent",
									children: "Open"
								})
							]
						}) }, p.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-ink bg-ink text-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/lab.jpg",
						alt: "Cryogenic vials in a U.S. laboratory",
						className: "absolute inset-0 size-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center px-5 py-16 md:px-12 md:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent-2",
							children: "QBio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-6 font-display text-3xl italic leading-snug md:text-4xl",
							children: "“QBio. Documented lots. FDA-cleared topical-use cosmetics. Not a brochure.”"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-kicker uppercase tracking-kicker text-bg/55",
							children: "United States · Professional use"
						}),
						qbio?.stats ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-12 grid grid-cols-2 gap-8",
							children: qbio.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-3xl text-bg",
								children: s.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-xs leading-relaxed text-bg/60",
								children: s.label
							})] }, s.label))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductLink, {
									slug: "exosomes",
									children: "QBio Exosomes"
								})
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "The difference"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl font-display text-4xl",
						children: "Three sentences we will not say."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 grid gap-8 sm:grid-cols-3",
						children: WILL_NOT.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-ink pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "folio text-accent",
									children: String(i + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-xl leading-snug",
									children: item.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: item.b
								})
							]
						}, item.t))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquireSection, { compact: true })
	] });
}
//#endregion
export { Home as component };
