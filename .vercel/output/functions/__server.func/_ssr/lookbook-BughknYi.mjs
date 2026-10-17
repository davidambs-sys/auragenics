import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as SiteShell, l as LOOKBOOK_CHAPTERS, n as Button, w as productBySlug } from "./site-shell-CkP5FAVp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lookbook-BughknYi.js
var import_jsx_runtime = require_jsx_runtime();
function Lookbook() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink px-5 py-16 md:px-8 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "Vol. 01 · The inventory"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-5xl",
						children: "What we make. What we place."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg text-muted",
						children: "QBio and peptides from the Irving laboratory. AuraGraft and the device floor. Then the lines we assign — removal, retail, analysis — under one desk."
					})
				]
			})
		}),
		LOOKBOOK_CHAPTERS.map((chapter) => {
			const products = chapter.slugs.map((s) => productBySlug(s)).filter((x) => Boolean(x));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-ink bg-bg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent",
							children: chapter.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl",
							children: chapter.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-base text-muted",
							children: chapter.dek
						}),
						chapter.featured && products[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProduct, { product: products[0] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3",
							children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
						})
					]
				})
			}, chapter.kicker);
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "Object notes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl font-display text-4xl",
						children: "Five tests we borrowed. None of them are a logo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-base leading-relaxed text-muted",
						children: "Bauhaus, Ulm, Rams, Dreyfuss — a century of arguing that an object should tell the truth in a room. We use the tests. We do not pretend they designed our catalog."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								n: "01",
								t: "Useful",
								b: "A thirty-eight-pound FUE console with a disposable pack beats a rendering that cannot run a Tuesday."
							},
							{
								n: "02",
								t: "Understandable",
								b: "HairPro puts the scalp on a screen the patient can leave with. A consult without a camera is a hope."
							},
							{
								n: "03",
								t: "Honest",
								b: "QBio is a topical cosmetic. inkOUT is Class I. A pending 510(k) stays pending. No Braun nameplate on a vial."
							},
							{
								n: "04",
								t: "Unobtrusive",
								b: "The machine recedes. The case occupies the room. Chrome fascia is not a clinical parameter."
							},
							{
								n: "05",
								t: "As little as possible",
								b: "Staff-operable TEPR instead of a laser theater. A pack that shortens cleanup. Less, on purpose."
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-ink pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "folio text-accent",
									children: item.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-2xl",
									children: item.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: item.b
								})
							]
						}, item.n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/journal/$slug",
								params: { slug: "the-device-as-an-object" },
								children: "Read the object letter"
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "The Journal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-xl font-display text-4xl",
					children: "How to read the file, after you close the lookbook."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/journal",
						children: "Read the letters"
					})
				})]
			})
		})
	] });
}
function FeaturedProduct({ product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/products/$slug",
		params: { slug: product.slug },
		className: "group mt-10 grid gap-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: product.slug === "auragraft" ? "relative aspect-[16/10] overflow-hidden bg-bg lg:aspect-auto lg:min-h-96" : "relative aspect-[4/3] overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.slug === "auragraft" ? "/images/auragraft-wide.jpg" : product.image,
				alt: product.imageAlt,
				className: "size-full object-cover transition-transform duration-700 group-hover:scale-105 frame"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "folio text-accent",
					children: [
						product.folio,
						" · ",
						product.department
					]
				}),
				product.specimen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-kicker uppercase tracking-kicker text-muted",
					children: product.specimen
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-4xl",
					children: product.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed text-muted",
					children: product.summary
				}),
				product.stats ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-8 grid grid-cols-2 gap-6",
					children: product.stats.slice(0, 4).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-display text-2xl",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-xs text-muted",
						children: s.label
					})] }, s.label))
				}) : null
			]
		})]
	});
}
function ProductCard({ product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/products/$slug",
		params: { slug: product.slug },
		className: "group",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[4/3] overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: product.image,
					alt: product.imageAlt,
					className: "size-full object-cover transition-transform duration-700 group-hover:scale-105 frame"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 folio text-accent",
				children: [
					product.folio,
					" · ",
					product.department
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 font-display text-2xl",
				children: product.title
			}),
			product.specimen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-kicker uppercase tracking-kicker text-muted",
				children: product.specimen
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: product.tagline
			})
		]
	});
}
//#endregion
export { Lookbook as component };
