import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as ProductLink, p as SiteShell, s as PRODUCTS } from "./site-shell-CRviDOdL.mjs";
import { o as PRODUCT_STORIES } from "./router-2Gc9Dcgm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sitemap-BqNNtroe.js
var import_jsx_runtime = require_jsx_runtime();
function Sitemap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker uppercase tracking-kicker text-accent",
				children: "Index"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-5xl",
				children: "Sitemap."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted",
				children: "Unique pages for every line in the catalog."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 font-display text-3xl",
				children: "Products"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 divide-y divide-line border-y border-line",
				children: PRODUCTS.map((p) => {
					const story = PRODUCT_STORIES[p.slug];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ProductLink, {
							slug: p.slug,
							className: "block hover:text-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "folio text-accent",
									children: p.folio
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block font-display text-xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-muted",
									children: story?.seoDescription ?? p.tagline
								})
							]
						})
					}, p.slug);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 font-display text-3xl",
				children: "House"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-6 space-y-3 text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-ink",
						children: "Home"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/device",
						className: "hover:text-ink",
						children: "Device — AuraGraft, inkOUT, PhoenixR, Revian, Junera"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/hair",
						className: "hover:text-ink",
						children: "Hair — AuraGraft, QBio, Revian"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						className: "hover:text-ink",
						children: "All products"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "hover:text-ink",
						children: "About"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/consulting",
						className: "hover:text-ink",
						children: "MD Hair Restoration Consulting"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/inquire",
						className: "hover:text-ink",
						children: "Practice inquiry"
					}) })
				]
			})
		]
	}) });
}
//#endregion
export { Sitemap as component };
