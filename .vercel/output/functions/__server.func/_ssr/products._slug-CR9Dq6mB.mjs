import { B as notFound, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { w as productBySlug } from "./site-shell-CkP5FAVp.mjs";
import { n as Route, r as ProductPage } from "./router-DMI4BGSw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-CR9Dq6mB.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { slug } = Route.useParams();
	const product = productBySlug(slug);
	if (!product) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPage, { product });
}
//#endregion
export { Page as component };
