import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as SiteShell, s as JOURNAL } from "./site-shell-CkP5FAVp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal.index-DuMjG5KG.js
var import_jsx_runtime = require_jsx_runtime();
function JournalIndex() {
	const [featured, ...rest] = JOURNAL;
	const data = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "The Journal — Auragenics",
		description: "Letters to the practice: biologics, hair, removal, and the claims we will not make.",
		url: "/journal",
		mainEntity: {
			"@type": "ItemList",
			itemListElement: JOURNAL.map((a, i) => ({
				"@type": "ListItem",
				position: i + 1,
				name: a.title,
				url: `/journal/${a.slug}`
			}))
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(data) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink px-5 py-16 md:px-8 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "Vol. 01 · The Journal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-5xl",
						children: "Letters from the laboratory."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg text-muted",
						children: "How to read a file. What we will not claim. Devices as objects. Peptides from Irving. The orthopedic sentence that does not change in the room."
					})
				]
			})
		}),
		featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/journal/$slug",
				params: { slug: featured.slug },
				className: "group mx-auto grid max-w-7xl lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: featured.image,
						alt: featured.imageAlt,
						className: "absolute inset-0 size-full object-cover frame"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center px-5 py-14 md:px-12 md:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "folio text-accent",
							children: [
								featured.folio,
								" · ",
								featured.department,
								" · ",
								featured.date
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-4xl group-hover:text-accent",
							children: [featured.title, "."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md font-display text-2xl italic leading-snug text-muted",
							children: featured.dek
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-base leading-relaxed text-muted",
							children: featured.lead
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-kicker uppercase tracking-kicker text-accent",
							children: "Read the letter"
						})
					]
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mx-auto max-w-7xl divide-y divide-line border-b border-line",
				children: rest.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/journal/$slug",
					params: { slug: a.slug },
					className: "group grid gap-6 px-5 py-10 transition-colors hover:bg-surface md:grid-cols-[7rem_1fr_10rem] md:items-center md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "folio text-accent",
							children: a.folio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-kicker uppercase tracking-kicker text-muted",
								children: [
									a.department,
									" · ",
									a.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl group-hover:text-accent",
								children: a.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-sm leading-relaxed text-muted",
								children: a.dek
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent md:text-right",
							children: a.read
						})
					]
				}) }, a.slug))
			})
		})
	] });
}
//#endregion
export { JournalIndex as component };
