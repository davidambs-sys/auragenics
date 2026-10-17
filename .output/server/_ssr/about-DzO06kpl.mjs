import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as productHref, f as SITE, i as FAQS, l as ProductLink, n as Button, p as SiteShell, t as ABOUT } from "./site-shell-CRviDOdL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DzO06kpl.js
var import_jsx_runtime = require_jsx_runtime();
function HouseLink({ href, children, className }) {
	if (href === "/products") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/products",
		className,
		children
	});
	if (href === "/consulting") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/consulting",
		className,
		children
	});
	if (href === "/lookbook") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/lookbook",
		className,
		children
	});
	if (href === "/laboratory") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/laboratory",
		className,
		children
	});
	if (href.startsWith("/products/")) {
		const slug = href.replace("/products/", "");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductLink, {
			slug,
			className,
			children
		});
	}
	const productSlug = href.replace(/^\//, "");
	if (productHref(productSlug)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductLink, {
		slug: productSlug,
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className,
		children
	});
}
function About() {
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
							children: "The house"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-xl font-display text-4xl leading-none",
							children: "About AuraGenics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg leading-relaxed text-muted",
							children: ABOUT.dek
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: SITE.logo,
							alt: "AuraGenics — Inspired by nature, perfected by science",
							className: "mt-10 h-12 w-auto max-w-xs object-contain"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-lab.jpg",
					alt: "U.S. manufacturing facility",
					className: "h-72 w-full object-cover md:h-full frame"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-ink text-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 md:px-8",
				children: ABOUT.facts.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl",
					children: f.value
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-bg/65",
					children: f.label
				})] }, f.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "Devices · Products · MD Hair Coach"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-px bg-ink md:grid-cols-3",
					children: ABOUT.houses.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "bg-bg p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "folio text-accent",
								children: [
									h.folio,
									" · ",
									h.place
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl",
								children: h.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted",
								children: h.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseLink, {
								href: h.href,
								className: "mt-6 inline-flex min-h-11 items-center text-kicker uppercase tracking-kicker text-accent hover:text-ink",
								children: h.label
							})
						]
					}, h.folio))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24",
			children: [ABOUT.body.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mb-6 text-lg leading-relaxed text-muted ${i === 0 ? "drop-cap" : ""}`,
				children: p
			}, p.slice(0, 24))), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/inquire",
						children: "Talk to the desk"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						children: "Products"
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-5 py-20 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "For the record"
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
		})
	] });
}
//#endregion
export { About as component };
