import { B as notFound, b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as practiceBySlug, _ as SiteShell, n as Button, w as productBySlug } from "./site-shell-CkP5FAVp.mjs";
import { i as Route$2, u as InquireSection } from "./router-DMI4BGSw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/practices._slug-D8Iv9cDP.js
var import_jsx_runtime = require_jsx_runtime();
function PracticePage() {
	const { slug } = Route$2.useParams();
	const practice = practiceBySlug(slug);
	if (!practice) throw notFound();
	const products = practice.products.map((s) => productBySlug(s)).filter((x) => Boolean(x));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-[28rem] overflow-hidden border-b border-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: practice.image,
					alt: practice.imageAlt,
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[28rem] max-w-7xl flex-col justify-end px-5 py-16 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "folio text-bg/80",
						children: [
							practice.folio,
							" · ",
							practice.kicker
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl text-bg",
						children: practice.title
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl leading-snug",
					children: practice.dek
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-line border-t border-line",
					children: practice.bullets.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "folio text-accent",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed text-muted",
							children: b
						})]
					}, b))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "Assigned from the lookbook"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products/$slug",
							params: { slug: p.slug },
							className: "group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.imageAlt,
									className: "aspect-[4/3] w-full object-cover frame"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 folio text-accent",
									children: [
										p.folio,
										" · ",
										p.department
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-display text-2xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: p.tagline
								})
							]
						}, p.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/inquire",
								children: "Book a practice conversation"
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquireSection, { compact: true })
	] });
}
//#endregion
export { PracticePage as component };
