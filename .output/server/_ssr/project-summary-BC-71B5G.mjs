import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as SiteShell } from "./site-shell-CRviDOdL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/project-summary-BC-71B5G.js
var import_jsx_runtime = require_jsx_runtime();
var PDF_HREF = "/AuraGenics-Website-Project-Summary.pdf";
function ProjectSummary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-2xl px-5 py-20 md:px-8 md:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-kicker uppercase tracking-kicker text-accent",
				children: "Client file"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-5xl",
				children: "Website project summary."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-base leading-relaxed text-muted",
				children: "Eight-page PDF for AuraGenics review. Catalog, language, photography, inquiry, and United States search — from start to finish."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: PDF_HREF,
				download: "AuraGenics-Website-Project-Summary.pdf",
				className: "mt-10 inline-flex min-h-12 items-center bg-action px-6 text-sm font-medium text-action-fg hover:bg-action-hover",
				children: "Download PDF"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-faint",
				children: "Confidential. For AuraGenics review. Not indexed in search."
			})
		]
	}) });
}
//#endregion
export { ProjectSummary as component };
