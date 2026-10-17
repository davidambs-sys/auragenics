import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as SiteShell, u as PRACTICES } from "./site-shell-CkP5FAVp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/practices.index-BHwtZTj4.js
var import_jsx_runtime = require_jsx_runtime();
function PracticesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-ink px-5 py-16 md:px-8 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "Departments"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl font-display text-5xl",
					children: "Five practices. One house."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-muted",
					children: "Plastic surgery, medical spas, dermatology, hair transplant and growth, and orthopedic regenerative groups — each with a different edit of the same catalog."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: PRACTICES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/practices/$slug",
		params: { slug: p.slug },
		className: `grid border-b border-ink lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: p.image,
			alt: p.imageAlt,
			className: "h-72 w-full object-cover lg:h-full min-h-80 frame"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-center px-5 py-12 md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "folio text-accent",
					children: [
						p.folio,
						" · ",
						p.kicker
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: p.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-muted",
					children: p.dek
				})
			]
		})]
	}, p.slug)) })] });
}
//#endregion
export { PracticesIndex as component };
