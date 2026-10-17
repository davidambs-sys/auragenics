import { B as notFound, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as articleBySlug } from "./site-shell-CkP5FAVp.mjs";
import { a as Route$4, o as JournalPage } from "./router-DMI4BGSw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal._slug-B_GvvII7.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { slug } = Route$4.useParams();
	const article = articleBySlug(slug);
	if (!article) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JournalPage, { article });
}
//#endregion
export { Page as component };
