import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as FAQS, p as SiteShell } from "./site-shell-CRviDOdL.mjs";
import { i as InquireForm, n as Route$10 } from "./router-2Gc9Dcgm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inquire-BkbX9lIA.js
var import_jsx_runtime = require_jsx_runtime();
function InquirePage() {
	const { interest } = Route$10.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-ink bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "The desk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 font-display text-5xl",
					children: [
						"A conversation with",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic text-accent",
							children: "the desk."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-md text-base leading-relaxed text-muted",
					children: "Licensed practices only. The catalog. We will not ask for patient information."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquireForm, { defaultInterest: interest })]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-bg-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 py-20 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker uppercase tracking-kicker text-accent",
				children: "Before you write"
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
	})] });
}
//#endregion
export { InquirePage as component };
