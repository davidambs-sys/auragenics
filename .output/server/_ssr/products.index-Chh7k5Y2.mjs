import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as productHref, l as ProductLink, p as SiteShell, x as productsInNavOrder } from "./site-shell-CRviDOdL.mjs";
import { o as PRODUCT_STORIES } from "./router-2Gc9Dcgm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products.index-Chh7k5Y2.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsIndex() {
	const data = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "AuraGenics product catalog",
		itemListElement: productsInNavOrder().map((p, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: p.title,
			url: productHref(p.slug) ?? `/${p.slug}`,
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
						children: "Products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-5xl",
						children: "The catalog."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-lg text-muted",
						children: "AuraGraft. inkOUT. PhoenixR. Revian. Junera. QBio. Each with its own page."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mx-auto max-w-7xl divide-y divide-line border-b border-line",
				children: productsInNavOrder().map((p) => {
					const story = PRODUCT_STORIES[p.slug];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ProductLink, {
						slug: p.slug,
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
