import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as SiteShell, f as PRODUCTS } from "./site-shell-CkP5FAVp.mjs";
import { c as PRODUCT_STORIES } from "./router-DMI4BGSw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-iI_WROXR.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsIndex() {
	const data = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Auragenics product catalog",
		itemListElement: PRODUCTS.map((p, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: p.title,
			url: `/products/${p.slug}`,
			description: PRODUCT_STORIES[p.slug]?.seoDescription ?? p.tagline
		}))
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
						children: "Manufacturer · eleven lines"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-5xl",
						children: "The laboratory, then the floor."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg text-muted",
						children: "QBio and peptides from Irving. AuraGraft and the devices. Then every line we place — each with its own page, its own file, its own sentence we will not cross."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mx-auto max-w-7xl divide-y divide-line border-b border-line",
				children: PRODUCTS.map((p) => {
					const story = PRODUCT_STORIES[p.slug];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$slug",
						params: { slug: p.slug },
						className: "group grid gap-6 px-5 py-10 transition-colors hover:bg-surface md:grid-cols-[7rem_1fr_12rem] md:items-center md:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "folio text-accent",
								children: p.folio
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-kicker uppercase tracking-kicker text-muted",
									children: p.department
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-3xl group-hover:text-accent",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-xl text-sm leading-relaxed text-muted",
									children: story?.seoDescription ?? p.tagline
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-kicker uppercase tracking-kicker text-accent md:text-right",
								children: "Open the page"
							})
						]
					}) }, p.slug);
				})
			})
		})
	] });
}
//#endregion
export { ProductsIndex as component };
