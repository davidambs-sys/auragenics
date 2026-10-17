globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { existsSync, promises, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/AuraGenics-Website-Project-Summary.pdf": {
		"type": "application/pdf",
		"etag": "\"13971-bQblholNWDWG6uLqB2MQyeclLb8\"",
		"mtime": "2026-09-15T12:59:04.022Z",
		"size": 80241,
		"path": "../public/AuraGenics-Website-Project-Summary.pdf"
	},
	"/Auragenics-Website-Project-Summary.pdf": {
		"type": "application/pdf",
		"etag": "\"13971-bQblholNWDWG6uLqB2MQyeclLb8\"",
		"mtime": "2026-09-15T12:59:04.022Z",
		"size": 80241,
		"path": "../public/Auragenics-Website-Project-Summary.pdf"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"c1e-d1E0DrTDyxqa9EcBWOcW8tGEzqc\"",
		"mtime": "2026-09-15T12:59:04.022Z",
		"size": 3102,
		"path": "../public/favicon.png"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"1f4-hK/Fx17jk61VvV+ZckrPkS+/c44\"",
		"mtime": "2026-09-15T12:59:04.022Z",
		"size": 500,
		"path": "../public/favicon.svg"
	},
	"/og.jpg": {
		"type": "image/jpeg",
		"etag": "\"13aa3-Q8+q21t4Yk/eHBXuDmBmOhH2+nk\"",
		"mtime": "2026-09-15T12:59:04.022Z",
		"size": 80547,
		"path": "../public/og.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"44-4oS39qWpjlp0iYG5Rp4qEDs1rnA\"",
		"mtime": "2026-09-15T12:59:04.022Z",
		"size": 68,
		"path": "../public/robots.txt"
	},
	"/__grok/icon-180.png": {
		"type": "image/png",
		"etag": "\"834-Xk8vfS0DTFn7ggtkfEduWTcNWGE\"",
		"mtime": "2026-09-15T12:59:04.018Z",
		"size": 2100,
		"path": "../public/__grok/icon-180.png"
	},
	"/assets/about-ax02_MCo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe6-kNgz89LnTNjifSpRIdl0aty/3ys\"",
		"mtime": "2026-09-15T12:59:03.478Z",
		"size": 4070,
		"path": "../public/assets/about-ax02_MCo.js"
	},
	"/assets/consulting-Dy7uoTzh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17e5-gO372COG6+L5EaeZye5W0siSn4Q\"",
		"mtime": "2026-09-15T12:59:03.478Z",
		"size": 6117,
		"path": "../public/assets/consulting-Dy7uoTzh.js"
	},
	"/assets/device-q8n5Neem.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79-oXUz7DQ23WEGZWkcWx6BxEYPvAI\"",
		"mtime": "2026-09-15T12:59:03.478Z",
		"size": 121,
		"path": "../public/assets/device-q8n5Neem.js"
	},
	"/assets/hair-DuqxqsnA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-XZ4MOmC0aFU6FspVutHS+TQHVn4\"",
		"mtime": "2026-09-15T12:59:03.478Z",
		"size": 119,
		"path": "../public/assets/hair-DuqxqsnA.js"
	},
	"/assets/inquire-w2VvYxpN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"62c-xY1phJT6/JdmPO9NVpNOwvmHYVA\"",
		"mtime": "2026-09-15T12:59:03.478Z",
		"size": 1580,
		"path": "../public/assets/inquire-w2VvYxpN.js"
	},
	"/assets/products.index-BZgZh6kX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"776-vWhDJTImV30oKJ06XNoTUw6ZK6E\"",
		"mtime": "2026-09-15T12:59:03.478Z",
		"size": 1910,
		"path": "../public/assets/products.index-BZgZh6kX.js"
	},
	"/assets/project-summary-pCd8PTe8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f5-OYhbaG3qljYDwWm0BRSqNog7VRs\"",
		"mtime": "2026-09-15T12:59:03.478Z",
		"size": 1013,
		"path": "../public/assets/project-summary-pCd8PTe8.js"
	},
	"/assets/routes-Bsjoydqv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"187c-TDNzpg4sCAkw+bHV1pnpXY+PNGA\"",
		"mtime": "2026-09-15T12:59:03.478Z",
		"size": 6268,
		"path": "../public/assets/routes-Bsjoydqv.js"
	},
	"/assets/sitemap-BT982qH8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f9-tjjSMvV1LFqxoUtcoXs9leMAzCA\"",
		"mtime": "2026-09-15T12:59:03.478Z",
		"size": 2041,
		"path": "../public/assets/sitemap-BT982qH8.js"
	},
	"/assets/styles-CZCtDrta.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"9935-SbIjcP8L3GBXJ5xeuaohnUSFT7Q\"",
		"mtime": "2026-09-15T12:59:03.478Z",
		"size": 39221,
		"path": "../public/assets/styles-CZCtDrta.css"
	},
	"/images/analysis-alt.png": {
		"type": "image/png",
		"etag": "\"2f6b-JTjs+JZUl/zK43S6HK0ynqdSJDY\"",
		"mtime": "2026-09-15T12:59:04.014Z",
		"size": 12139,
		"path": "../public/images/analysis-alt.png"
	},
	"/images/analysis-src.png": {
		"type": "image/png",
		"etag": "\"75fc-oY2vAWUfO+0GE7JwuspijYgwmZI\"",
		"mtime": "2026-09-15T12:59:04.034Z",
		"size": 30204,
		"path": "../public/images/analysis-src.png"
	},
	"/images/analysis.jpg": {
		"type": "image/jpeg",
		"etag": "\"ba49-0fZdtGFp5n/sw8zLI8+CZTjXolU\"",
		"mtime": "2026-09-15T12:59:04.034Z",
		"size": 47689,
		"path": "../public/images/analysis.jpg"
	},
	"/images/auragraft-source.jpg": {
		"type": "image/jpeg",
		"etag": "\"24150-IeLHvizhZRBRCfVQ1YnWabXRu80\"",
		"mtime": "2026-09-15T12:59:04.034Z",
		"size": 147792,
		"path": "../public/images/auragraft-source.jpg"
	},
	"/images/auragraft-src.png": {
		"type": "image/png",
		"etag": "\"1b020-WIXkKdgtg9JPIOYaDUSgdw2UXF8\"",
		"mtime": "2026-09-15T12:59:04.042Z",
		"size": 110624,
		"path": "../public/images/auragraft-src.png"
	},
	"/assets/index-CLbgU2eD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f305-am/Tx/OvxsyO9RsrzdrA7DZQkDE\"",
		"mtime": "2026-09-15T12:59:03.474Z",
		"size": 520965,
		"path": "../public/assets/index-CLbgU2eD.js"
	},
	"/images/auragraft-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"afcd9-OCIHq0yQiTW1MJkMuEWMEZsyqK8\"",
		"mtime": "2026-09-15T12:59:04.042Z",
		"size": 720089,
		"path": "../public/images/auragraft-wide.jpg"
	},
	"/images/auragraft.jpg": {
		"type": "image/jpeg",
		"etag": "\"afcd9-OCIHq0yQiTW1MJkMuEWMEZsyqK8\"",
		"mtime": "2026-09-15T12:59:04.042Z",
		"size": 720089,
		"path": "../public/images/auragraft.jpg"
	},
	"/images/auralux-src.png": {
		"type": "image/png",
		"etag": "\"13f94-+38gD0OLOwdr3oCmNeJcOedO1C4\"",
		"mtime": "2026-09-15T12:59:04.042Z",
		"size": 81812,
		"path": "../public/images/auralux-src.png"
	},
	"/images/clinic.jpg": {
		"type": "image/jpeg",
		"etag": "\"10e58-xFGvr+FcbKSC+nbu+Zdnu0/mRBg\"",
		"mtime": "2026-09-15T12:59:04.042Z",
		"size": 69208,
		"path": "../public/images/clinic.jpg"
	},
	"/images/devices.jpg": {
		"type": "image/jpeg",
		"etag": "\"67440-qDLowREhPACjtszhOm52YmNzuWQ\"",
		"mtime": "2026-09-15T12:59:04.046Z",
		"size": 422976,
		"path": "../public/images/devices.jpg"
	},
	"/images/derm.jpg": {
		"type": "image/jpeg",
		"etag": "\"6118b-Ph9yCZLeiAQHJmvdaPEoTEZdMV4\"",
		"mtime": "2026-09-15T12:59:04.042Z",
		"size": 397707,
		"path": "../public/images/derm.jpg"
	},
	"/images/ethereamx.png": {
		"type": "image/png",
		"etag": "\"12ebf-www3k9bbVMU5cWakVK0YEGwFOmg\"",
		"mtime": "2026-09-15T12:59:04.066Z",
		"size": 77503,
		"path": "../public/images/ethereamx.png"
	},
	"/images/facility.webp": {
		"type": "image/webp",
		"etag": "\"d9fa-gmI9/ac4+jlGCmE0ASWjING95hM\"",
		"mtime": "2026-09-15T12:59:04.062Z",
		"size": 55802,
		"path": "../public/images/facility.webp"
	},
	"/images/exosomes.jpg": {
		"type": "image/jpeg",
		"etag": "\"11acb-O7C6KVKDm8Ieoe98T0qea9rfhdM\"",
		"mtime": "2026-09-15T12:59:04.066Z",
		"size": 72395,
		"path": "../public/images/exosomes.jpg"
	},
	"/images/energy.jpg": {
		"type": "image/jpeg",
		"etag": "\"56114-KBLejUNJeKAOJ5bEmOtjLlJyFQE\"",
		"mtime": "2026-09-15T12:59:04.214Z",
		"size": 352532,
		"path": "../public/images/energy.jpg"
	},
	"/images/hairpro-src.png": {
		"type": "image/png",
		"etag": "\"30988-AzG6QuCcfHs6hNnHCGM2dV7VJKQ\"",
		"mtime": "2026-09-15T12:59:04.074Z",
		"size": 199048,
		"path": "../public/images/hairpro-src.png"
	},
	"/images/hairpro.jpg": {
		"type": "image/jpeg",
		"etag": "\"18dea-FLx4fZi306HWd2WDSBmOrS/khBI\"",
		"mtime": "2026-09-15T12:59:04.074Z",
		"size": 101866,
		"path": "../public/images/hairpro.jpg"
	},
	"/images/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"52184-rkNVmjXGax4n1QUnRfXtbESLvIA\"",
		"mtime": "2026-09-15T12:59:04.078Z",
		"size": 336260,
		"path": "../public/images/hero.jpg"
	},
	"/images/inkout-console.jpg": {
		"type": "image/jpeg",
		"etag": "\"36d2c-SNW7ZUNyQAr4BdVRkYMVJ/m4hs4\"",
		"mtime": "2026-09-15T12:59:04.094Z",
		"size": 224556,
		"path": "../public/images/inkout-console.jpg"
	},
	"/images/inkout-device.png": {
		"type": "image/png",
		"etag": "\"148b0-PO4t0k0WwAIi2B3cIZmoKM+7D9k\"",
		"mtime": "2026-09-15T12:59:04.090Z",
		"size": 84144,
		"path": "../public/images/inkout-device.png"
	},
	"/images/hair.jpg": {
		"type": "image/jpeg",
		"etag": "\"27665-lQ1JR5nQ+Igko/YmTZN+BKxSyXA\"",
		"mtime": "2026-09-15T12:59:04.074Z",
		"size": 161381,
		"path": "../public/images/hair.jpg"
	},
	"/images/inkout-io-device.png": {
		"type": "image/png",
		"etag": "\"7edb-r4gBcWDoESgpiSxN817VR5rbQwg\"",
		"mtime": "2026-09-15T12:59:04.094Z",
		"size": 32475,
		"path": "../public/images/inkout-io-device.png"
	},
	"/images/inkout-io.jpg": {
		"type": "image/jpeg",
		"etag": "\"62ceb-P2f2PpmcW40UJpeeIkRqh+wo+1E\"",
		"mtime": "2026-09-15T12:59:04.118Z",
		"size": 404715,
		"path": "../public/images/inkout-io.jpg"
	},
	"/images/inkout-hero-lg.png": {
		"type": "image/png",
		"etag": "\"6b85f-zscuTw2E4pKxSVOBU9gTKq3WBnw\"",
		"mtime": "2026-09-15T12:59:04.110Z",
		"size": 440415,
		"path": "../public/images/inkout-hero-lg.png"
	},
	"/images/inkout-portrait.jpg": {
		"type": "image/jpeg",
		"etag": "\"294f3-9/5nGXpJSY5V71PYzlhRo1iLnyI\"",
		"mtime": "2026-09-15T12:59:04.110Z",
		"size": 169203,
		"path": "../public/images/inkout-portrait.jpg"
	},
	"/images/inkout-src.png": {
		"type": "image/png",
		"etag": "\"2ecc7-4yW8t3ov0/iohHN+Dhhn+GgwWos\"",
		"mtime": "2026-09-15T12:59:04.118Z",
		"size": 191687,
		"path": "../public/images/inkout-src.png"
	},
	"/images/hero-lab.jpg": {
		"type": "image/jpeg",
		"etag": "\"231d6-YCdEG/LFgY8sbnFTFjS8sy52tI4\"",
		"mtime": "2026-09-15T12:59:04.086Z",
		"size": 143830,
		"path": "../public/images/hero-lab.jpg"
	},
	"/images/inkout-people.jpg": {
		"type": "image/jpeg",
		"etag": "\"51687-XNe0r88kHwNConEFlzH0Um2vJFA\"",
		"mtime": "2026-09-15T12:59:04.098Z",
		"size": 333447,
		"path": "../public/images/inkout-people.jpg"
	},
	"/images/inkout-strip.png": {
		"type": "image/png",
		"etag": "\"b4436-b/XE4YHs29BJ8fBM1yVT+OpV+5g\"",
		"mtime": "2026-09-15T12:59:04.122Z",
		"size": 738358,
		"path": "../public/images/inkout-strip.png"
	},
	"/images/hairpro-alt.png": {
		"type": "image/png",
		"etag": "\"80c95-YnFE8VZk1gvdFsMEi84/7Em/Jsw\"",
		"mtime": "2026-09-15T12:59:04.078Z",
		"size": 527509,
		"path": "../public/images/hairpro-alt.png"
	},
	"/images/inkout.jpg": {
		"type": "image/jpeg",
		"etag": "\"36d2c-SNW7ZUNyQAr4BdVRkYMVJ/m4hs4\"",
		"mtime": "2026-09-15T12:59:04.130Z",
		"size": 224556,
		"path": "../public/images/inkout.jpg"
	},
	"/images/junera-banner.png": {
		"type": "image/png",
		"etag": "\"30400-0IrN+fFodaWi+Ugrd4JU/rvmwnc\"",
		"mtime": "2026-09-15T12:59:04.134Z",
		"size": 197632,
		"path": "../public/images/junera-banner.png"
	},
	"/images/junera-src.png": {
		"type": "image/png",
		"etag": "\"61d1-Y2Qy1o9/DFpAkylsTcyovgceM7w\"",
		"mtime": "2026-09-15T12:59:04.134Z",
		"size": 25041,
		"path": "../public/images/junera-src.png"
	},
	"/images/junera.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e108-Zby4i1iAnNZF4OGo1Vx+iL/0p+w\"",
		"mtime": "2026-09-15T12:59:04.134Z",
		"size": 123144,
		"path": "../public/images/junera.jpg"
	},
	"/images/lab-tubes.jpg": {
		"type": "image/jpeg",
		"etag": "\"213e6-ysFqQefCR5DTmur4CIVj4SfUwBc\"",
		"mtime": "2026-09-15T12:59:04.134Z",
		"size": 136166,
		"path": "../public/images/lab-tubes.jpg"
	},
	"/images/logo.png": {
		"type": "image/png",
		"etag": "\"4b79-edpytIPPCCVJ1u74cKpXVMjC9SY\"",
		"mtime": "2026-09-15T12:59:04.134Z",
		"size": 19321,
		"path": "../public/images/logo.png"
	},
	"/images/lab.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b38c-7/uZOul0i2ymM2IIbCI+NiHxGYU\"",
		"mtime": "2026-09-15T12:59:04.134Z",
		"size": 111500,
		"path": "../public/images/lab.jpg"
	},
	"/images/medrixx-logo.png": {
		"type": "image/png",
		"etag": "\"1f882-x6ZACiTgffunLiaeKPlAbfB8nMc\"",
		"mtime": "2026-09-15T12:59:04.138Z",
		"size": 129154,
		"path": "../public/images/medrixx-logo.png"
	},
	"/images/landing-about.png": {
		"type": "image/png",
		"etag": "\"16e12-Y5fpT3T3gm6o7CzlUJgpkucIITM\"",
		"mtime": "2026-09-15T12:59:04.134Z",
		"size": 93714,
		"path": "../public/images/landing-about.png"
	},
	"/images/ortho.jpg": {
		"type": "image/jpeg",
		"etag": "\"763eb-8320f6P7uqh2PCGjBq9yApPqJxY\"",
		"mtime": "2026-09-15T12:59:04.138Z",
		"size": 484331,
		"path": "../public/images/ortho.jpg"
	},
	"/images/peptides.jpg": {
		"type": "image/jpeg",
		"etag": "\"ce2f-fCBVE0q9vXTSSEAOk+v1rFsMBJs\"",
		"mtime": "2026-09-15T12:59:04.146Z",
		"size": 52783,
		"path": "../public/images/peptides.jpg"
	},
	"/images/prodeep.png": {
		"type": "image/png",
		"etag": "\"6044-ElwiG72puYraUgzpnT4679rCkJA\"",
		"mtime": "2026-09-15T12:59:04.174Z",
		"size": 24644,
		"path": "../public/images/prodeep.png"
	},
	"/images/propatch-src.png": {
		"type": "image/png",
		"etag": "\"28406-/qTQ6qLbaPBlj7mSluvNT9ztbUQ\"",
		"mtime": "2026-09-15T12:59:04.174Z",
		"size": 164870,
		"path": "../public/images/propatch-src.png"
	},
	"/images/propatch.jpg": {
		"type": "image/jpeg",
		"etag": "\"2677c-p6Ln+8eA71DbctdzukhxEN0zMrQ\"",
		"mtime": "2026-09-15T12:59:04.174Z",
		"size": 157564,
		"path": "../public/images/propatch.jpg"
	},
	"/images/medspa.jpg": {
		"type": "image/jpeg",
		"etag": "\"787e7-hIZLrHMYo7Kyti84ZVteTZeI7qE\"",
		"mtime": "2026-09-15T12:59:04.150Z",
		"size": 493543,
		"path": "../public/images/medspa.jpg"
	},
	"/images/qbio-elixir-src.png": {
		"type": "image/png",
		"etag": "\"2514f-qFJwZ3gpbiUPsCUzSfBXtYrj64c\"",
		"mtime": "2026-09-15T12:59:04.174Z",
		"size": 151887,
		"path": "../public/images/qbio-elixir-src.png"
	},
	"/images/qbio-elixir.webp": {
		"type": "image/webp",
		"etag": "\"ae54-vkblh4hFx8QAyi1kACzcIT6EJFE\"",
		"mtime": "2026-09-15T12:59:04.174Z",
		"size": 44628,
		"path": "../public/images/qbio-elixir.webp"
	},
	"/images/phoenix-r.jpg": {
		"type": "image/jpeg",
		"etag": "\"4fa11-0BEvK54bjrPOib9kjzT9N+rGEfY\"",
		"mtime": "2026-09-15T12:59:04.150Z",
		"size": 326161,
		"path": "../public/images/phoenix-r.jpg"
	},
	"/images/qbio-gel.jpg": {
		"type": "image/jpeg",
		"etag": "\"cef9-jfedRe86xWaA/8NfEaGPzmA4oC8\"",
		"mtime": "2026-09-15T12:59:04.174Z",
		"size": 52985,
		"path": "../public/images/qbio-gel.jpg"
	},
	"/images/qbio-gel.webp": {
		"type": "image/webp",
		"etag": "\"1f198-4NNYMrBbarQ9SxmX+o7tONCCaiM\"",
		"mtime": "2026-09-15T12:59:04.174Z",
		"size": 127384,
		"path": "../public/images/qbio-gel.webp"
	},
	"/images/qbio-family.png": {
		"type": "image/png",
		"etag": "\"2732f-nftmmUVNO92v5EHs9UsgrZ+JlYk\"",
		"mtime": "2026-09-15T12:59:04.174Z",
		"size": 160559,
		"path": "../public/images/qbio-family.png"
	},
	"/images/qbio-elixir.jpg": {
		"type": "image/jpeg",
		"etag": "\"11c62-K6ggx5LCR//0F+wtOrbZwnzXmGM\"",
		"mtime": "2026-09-15T12:59:04.174Z",
		"size": 72802,
		"path": "../public/images/qbio-elixir.jpg"
	},
	"/images/phoenixr-main.jpg": {
		"type": "image/jpeg",
		"etag": "\"4fa11-0BEvK54bjrPOib9kjzT9N+rGEfY\"",
		"mtime": "2026-09-15T12:59:04.154Z",
		"size": 326161,
		"path": "../public/images/phoenixr-main.jpg"
	},
	"/images/qbio-gro-src.png": {
		"type": "image/png",
		"etag": "\"24f7d-YrV1vA3rY8OFlhcgBKWqux3ATFs\"",
		"mtime": "2026-09-15T12:59:04.178Z",
		"size": 151421,
		"path": "../public/images/qbio-gro-src.png"
	},
	"/images/qbio-gro.jpg": {
		"type": "image/jpeg",
		"etag": "\"10c67-WQj43idMbXY2U0U+C7gyIbdg1A8\"",
		"mtime": "2026-09-15T12:59:04.178Z",
		"size": 68711,
		"path": "../public/images/qbio-gro.jpg"
	},
	"/images/qbio-gro.webp": {
		"type": "image/webp",
		"etag": "\"9a28-Ps3i7QVMEFft19Uqkw2GMYf608c\"",
		"mtime": "2026-09-15T12:59:04.178Z",
		"size": 39464,
		"path": "../public/images/qbio-gro.webp"
	},
	"/images/revian-box.png": {
		"type": "image/png",
		"etag": "\"223a4-IA68mvRCmmA9Dwo1MmAYgsROjJg\"",
		"mtime": "2026-09-15T12:59:04.186Z",
		"size": 140196,
		"path": "../public/images/revian-box.png"
	},
	"/images/revian-use.jpg": {
		"type": "image/jpeg",
		"etag": "\"27665-lQ1JR5nQ+Igko/YmTZN+BKxSyXA\"",
		"mtime": "2026-09-15T12:59:04.190Z",
		"size": 161381,
		"path": "../public/images/revian-use.jpg"
	},
	"/images/revian-src.png": {
		"type": "image/png",
		"etag": "\"2a547-M7Q/tNpz3nqRmAs9fR1E0liSUYc\"",
		"mtime": "2026-09-15T12:59:04.214Z",
		"size": 173383,
		"path": "../public/images/revian-src.png"
	},
	"/images/revian.jpg": {
		"type": "image/jpeg",
		"etag": "\"11371-7PkWKCAEuTPaG2rpaCBIl+U5x7Q\"",
		"mtime": "2026-09-15T12:59:04.178Z",
		"size": 70513,
		"path": "../public/images/revian.jpg"
	},
	"/images/stem-cells.jpg": {
		"type": "image/jpeg",
		"etag": "\"5093e-vQicoYic6PLKfru4rlPurz1ALdM\"",
		"mtime": "2026-09-15T12:59:04.190Z",
		"size": 330046,
		"path": "../public/images/stem-cells.jpg"
	},
	"/images/vydence-src.png": {
		"type": "image/png",
		"etag": "\"2af14-ELAV5TqmkIYWSEufBHVBKL/zXko\"",
		"mtime": "2026-09-15T12:59:04.214Z",
		"size": 175892,
		"path": "../public/images/vydence-src.png"
	},
	"/__grok/install/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1a3d-VUsWOMAheo1/P30EqU5qaIkyvIQ\"",
		"mtime": "2026-09-15T12:59:04.018Z",
		"size": 6717,
		"path": "../public/__grok/install/styles.css"
	},
	"/images/standards.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a120-g/09DO5y8R6s95Mdy8DtQ0UhTVE\"",
		"mtime": "2026-09-15T12:59:04.190Z",
		"size": 368928,
		"path": "../public/images/standards.jpg"
	},
	"/images/phoenixr/crystals.jpg": {
		"type": "image/jpeg",
		"etag": "\"32f8f-RpEuQmXHFZvcdSg0lDGegYQEGKw\"",
		"mtime": "2026-09-15T12:59:04.014Z",
		"size": 208783,
		"path": "../public/images/phoenixr/crystals.jpg"
	},
	"/images/phoenixr/device-case.jpg": {
		"type": "image/jpeg",
		"etag": "\"491a2-Y3PNk75QpacCeWlEqtdZIdgP2k8\"",
		"mtime": "2026-09-15T12:59:04.214Z",
		"size": 299426,
		"path": "../public/images/phoenixr/device-case.jpg"
	},
	"/images/phoenixr/device-white-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"73c48-jp+9hwaGEKK08hVYDExZczcWiAg\"",
		"mtime": "2026-09-15T12:59:04.230Z",
		"size": 474184,
		"path": "../public/images/phoenixr/device-white-2.jpg"
	},
	"/images/phoenixr/device-white.jpg": {
		"type": "image/jpeg",
		"etag": "\"4fa11-0BEvK54bjrPOib9kjzT9N+rGEfY\"",
		"mtime": "2026-09-15T12:59:04.246Z",
		"size": 326161,
		"path": "../public/images/phoenixr/device-white.jpg"
	},
	"/images/vydence.jpg": {
		"type": "image/jpeg",
		"etag": "\"60d24-qUpw9KC13lJqdJTi1rgwmoWiQ3w\"",
		"mtime": "2026-09-15T12:59:04.214Z",
		"size": 396580,
		"path": "../public/images/vydence.jpg"
	},
	"/images/phoenixr/head.jpg": {
		"type": "image/jpeg",
		"etag": "\"496f4-3jyBsQ3cwNhw54sWA79tJW1OWzs\"",
		"mtime": "2026-09-15T12:59:04.230Z",
		"size": 300788,
		"path": "../public/images/phoenixr/head.jpg"
	},
	"/images/phoenixr/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"47680-cYfx7qp8eDCw46z+kFV/DMI7NC8\"",
		"mtime": "2026-09-15T12:59:04.238Z",
		"size": 292480,
		"path": "../public/images/phoenixr/hero.jpg"
	},
	"/images/phoenixr/kit-case.jpg": {
		"type": "image/jpeg",
		"etag": "\"79af7-o6441s12Qcqq+xJ1KkrVLWGVFlg\"",
		"mtime": "2026-09-15T12:59:04.250Z",
		"size": 498423,
		"path": "../public/images/phoenixr/kit-case.jpg"
	},
	"/images/phoenixr/kit.jpg": {
		"type": "image/jpeg",
		"etag": "\"4309d-aBNSYNvfuD0+pccW+K1FkwSJQPQ\"",
		"mtime": "2026-09-15T12:59:04.242Z",
		"size": 274589,
		"path": "../public/images/phoenixr/kit.jpg"
	},
	"/images/phoenixr/in-use-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"4e2a2-iiAUaR1iRxU1NXJDFBFcjlF274o\"",
		"mtime": "2026-09-15T12:59:04.258Z",
		"size": 320162,
		"path": "../public/images/phoenixr/in-use-2.jpg"
	},
	"/__grok/install/assets/homescreen/glass-puzzle.svg": {
		"type": "image/svg+xml",
		"etag": "\"713-AP2wG8KChAGjse1Fn+f/+vDN+sQ\"",
		"mtime": "2026-09-15T12:59:04.254Z",
		"size": 1811,
		"path": "../public/__grok/install/assets/homescreen/glass-puzzle.svg"
	},
	"/__grok/install/assets/homescreen/glass-share.svg": {
		"type": "image/svg+xml",
		"etag": "\"954-jb3ATcKjqgMOYrA/4w1v21j0Jvg\"",
		"mtime": "2026-09-15T12:59:04.254Z",
		"size": 2388,
		"path": "../public/__grok/install/assets/homescreen/glass-share.svg"
	},
	"/images/phoenixr/in-use-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"5521e-9ofbLYAl7CaHH3I028TpCfySU/A\"",
		"mtime": "2026-09-15T12:59:04.246Z",
		"size": 348702,
		"path": "../public/images/phoenixr/in-use-1.jpg"
	},
	"/images/phoenixr/plate.jpg": {
		"type": "image/jpeg",
		"etag": "\"38b63-Czm7nULvgaQMhcwAC80S0Vu4kV8\"",
		"mtime": "2026-09-15T12:59:04.250Z",
		"size": 232291,
		"path": "../public/images/phoenixr/plate.jpg"
	},
	"/__grok/install/assets/homescreen/logo-grok.svg": {
		"type": "image/svg+xml",
		"etag": "\"423-5mXO+yh9KW40jM3to5JlWPhxNK8\"",
		"mtime": "2026-09-15T12:59:04.254Z",
		"size": 1059,
		"path": "../public/__grok/install/assets/homescreen/logo-grok.svg"
	},
	"/__grok/install/assets/homescreen/ob-ipad.png": {
		"type": "image/png",
		"etag": "\"18dd3-wlRwrpmBImStuiu+4poVz7ANin4\"",
		"mtime": "2026-09-15T12:59:04.254Z",
		"size": 101843,
		"path": "../public/__grok/install/assets/homescreen/ob-ipad.png"
	},
	"/__grok/install/assets/homescreen/ob-phone.png": {
		"type": "image/png",
		"etag": "\"194bc-oZradWHIHO68q2glHU0Gk5ttpWA\"",
		"mtime": "2026-09-15T12:59:04.254Z",
		"size": 103612,
		"path": "../public/__grok/install/assets/homescreen/ob-phone.png"
	},
	"/__grok/install/assets/homescreen/plus.svg": {
		"type": "image/svg+xml",
		"etag": "\"961-sSBPunx/13vbMNAlPxb7UeO3l3A\"",
		"mtime": "2026-09-15T12:59:04.254Z",
		"size": 2401,
		"path": "../public/__grok/install/assets/homescreen/plus.svg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region scripts/install-page.html?raw
var install_page_default = "<!DOCTYPE html>\n<html lang=\"en\" class=\"device-desktop\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, viewport-fit=cover\"\n    />\n    <meta name=\"color-scheme\" content=\"dark\" />\n    <meta name=\"theme-color\" content=\"#000000\" />\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n    <meta name=\"apple-mobile-web-app-title\" content=\"{{APP_NAME}}\" />\n    <title>Add {{APP_NAME}} to your Home Screen</title>\n    <link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\" />\n    <link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\" />\n    <link rel=\"stylesheet\" href=\"/__grok/install/styles.css\" />\n    <script>\n      (function () {\n        var ua = navigator.userAgent || \"\";\n        var touch = navigator.maxTouchPoints || 0;\n        var isiPad = /iPad/.test(ua) || (/Macintosh/.test(ua) && touch > 1);\n        var isiPhone = /iPhone|iPod/.test(ua);\n        var isIOS = isiPhone || isiPad;\n        var isAndroid = /Android/i.test(ua);\n        var isAndroidPhone = isAndroid && /Mobile/i.test(ua);\n        var isAndroidTablet = isAndroid && !/Mobile/i.test(ua);\n        var minSide = Math.min(screen.width || 0, screen.height || 0);\n        var maxSide = Math.max(screen.width || 0, screen.height || 0);\n\n        var type = \"desktop\";\n        if (isiPhone) type = \"phone\";\n        else if (isiPad || isAndroidTablet) type = \"tablet\";\n        else if (isAndroidPhone) type = \"phone\";\n        else if (touch > 0 && minSide > 0 && minSide <= 500) type = \"phone\";\n        else if (touch > 0 && minSide > 500 && maxSide <= 1400) type = \"tablet\";\n\n        var iosMajor = null;\n        var osToken = null;\n        var safariToken = null;\n        var iphoneOs = ua.match(/iPhone OS (\\d+)[._]/);\n        var ipadOs = ua.match(/CPU OS (\\d+)[._](\\d+) like Mac OS X/);\n        var safariVer = ua.match(/Version\\/(\\d+)[._]/);\n        if (iphoneOs) osToken = parseInt(iphoneOs[1], 10);\n        else if (ipadOs) osToken = parseInt(ipadOs[1], 10);\n        if (isIOS && safariVer) safariToken = parseInt(safariVer[1], 10);\n        if (osToken != null || safariToken != null) {\n          iosMajor = Math.max(osToken || 0, safariToken || 0);\n        }\n\n        var root = document.documentElement;\n        var classes = [\"device-\" + type];\n        if (iosMajor != null) {\n          root.dataset.ios = String(iosMajor);\n          classes.push(iosMajor >= 27 ? \"ios-27-plus\" : \"ios-below-27\");\n        }\n        root.className = classes.join(\" \");\n      })();\n    <\/script>\n  </head>\n  <body>\n    <div class=\"page\">\n      <header class=\"powered\" aria-label=\"Powered by Grok\">\n        <span class=\"powered-by\">Powered by</span>\n        <span class=\"powered-brand\">\n          <img\n            class=\"grok-logo\"\n            src=\"/__grok/install/assets/homescreen/logo-grok.svg\"\n            width=\"14\"\n            height=\"14\"\n            alt=\"\"\n          />\n          <span class=\"powered-grok\">Grok</span>\n        </span>\n      </header>\n\n      <main class=\"content\">\n        <div class=\"ob\" aria-hidden=\"true\">\n          <img\n            class=\"ob-img ob-phone\"\n            src=\"/__grok/install/assets/homescreen/ob-phone.png\"\n            width=\"338\"\n            height=\"294\"\n            alt=\"\"\n          />\n          <img\n            class=\"ob-img ob-ipad\"\n            src=\"/__grok/install/assets/homescreen/ob-ipad.png\"\n            width=\"634\"\n            height=\"294\"\n            alt=\"\"\n          />\n        </div>\n\n        <section class=\"copy\">\n          <h1>Add {{APP_NAME}} to your&nbsp;Home&nbsp;Screen</h1>\n\n          <div class=\"steps\">\n            <p class=\"step step-tap step-ios27\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-puzzle.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar, then</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar, then</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n            </p>\n\n            <p class=\"step step-tap step-ios-legacy\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar</span>\n            </p>\n\n            <p class=\"step step-select\">\n              <span class=\"muted\">Select</span>\n              <span class=\"add-label\">\n                <img\n                  class=\"plus-icon\"\n                  src=\"/__grok/install/assets/homescreen/plus.svg\"\n                  width=\"16\"\n                  height=\"16\"\n                  alt=\"\"\n                />\n                <span class=\"add-text\">Add to Home Screen</span>\n              </span>\n            </p>\n          </div>\n        </section>\n      </main>\n\n      <main class=\"content content-desktop\">\n        <section class=\"copy\">\n          <h1>Open this link on your iPhone&nbsp;or&nbsp;iPad</h1>\n          <p class=\"desktop-note\">\n            This page shows how to add {{APP_NAME}} to an iOS Home Screen.\n          </p>\n          <a class=\"desktop-open\" href=\"{{APP_URL}}\">Open {{APP_NAME}}</a>\n        </section>\n      </main>\n    </div>\n  </body>\n</html>\n";
//#endregion
//#region \0virtual:grok-og-identity
var grokOgIdentity = { "site": {
	"title": "AuraGenics",
	"card": "custom",
	"image": "/og.jpg"
} };
//#endregion
//#region scripts/grok-pwa-shared.mjs
/**
* Single source of truth for platform head chrome (PWA, extensions.js, OG),
* shared by the Vite plugin and Nitro middleware. Plain ESM so `node --test`
* and the Nitro bundler can both consume it.
*/
var DEFAULT_APP_NAME = "Grok App";
var OG_SITE_REL_PATH = "src/lib/og/site.json";
var SHARE_META_KEYS = /* @__PURE__ */ new Set([
	"og:title",
	"og:description",
	"og:image",
	"og:image:width",
	"og:image:height",
	"og:type",
	"og:url",
	"og:site_name",
	"twitter:card",
	"twitter:title",
	"twitter:image",
	"twitter:description",
	"x:game:image",
	"x:game:image:width",
	"x:game:image:height"
]);
function escapeHtml(value) {
	return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
/** Inverse of escapeHtml. Decode &amp; last so a single pass undoes one encode. */
function unescapeHtml(value) {
	return String(value).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").replaceAll("&amp;", "&");
}
/** 6-digit hex for the og.grok.me placeholder, or "" if site.color is missing/invalid. */
function placeholderCardColor(site = {}) {
	const raw = String(site.color ?? "").trim();
	const hex = raw.startsWith("#") ? raw.slice(1) : raw;
	return /^[0-9a-fA-F]{6}$/.test(hex) ? hex : "";
}
/**
* "wild-race.grok.me" → "Wild Race". Only published app hosts encode the
* display name in the first label. Preview / guest hosts are image origins
* only — slugifying them produced internal names like "Hds Abc 3000 Xy".
*/
function appNameFromHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host.endsWith(".grok.me")) return DEFAULT_APP_NAME;
	const slug = host.split(".")[0] ?? "";
	if (!slug || slug === "www" || !/^[a-z0-9-]{1,63}$/.test(slug)) return DEFAULT_APP_NAME;
	return slug.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ") || "Grok App";
}
/** True for Vercel system domains. Envoy rewrites origin Host to these; they SSO-protect `/og.jpg`. */
function isVercelSystemHost(host) {
	return host === "vercel.app" || host.endsWith(".vercel.app") || host === "vercel.com" || host.endsWith(".vercel.com");
}
/** Hostname suitable for absolute og:image URLs. Preview guests (X-Forwarded-Host) are allowed. */
function publicAppHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host || !/^[a-z0-9.-]+$/.test(host) || !host.includes(".")) return "";
	if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return "";
	if (isVercelSystemHost(host)) return "";
	return host;
}
/**
* Published apps always use `VITE_PUBLIC_HOSTNAME` (the grok.me host the
* deployer injects). Live preview has no such env, so fall back to the
* request host / X-Forwarded-Host. Never prefer request Host on a published
* app — Envoy rewrites it to `*.vercel.app`.
*/
function resolvePublicHost(hostHeader) {
	return publicAppHost(process.env?.VITE_PUBLIC_HOSTNAME) || publicAppHost(hostHeader);
}
function isInstallQuery(url) {
	const query = String(url ?? "").split("?", 2)[1] ?? "";
	const params = new URLSearchParams(query);
	const install = params.get("install");
	const platform = (params.get("platform") ?? "").toLowerCase();
	return (install === "1" || install === "true") && platform === "ios";
}
/** Paths that can carry an app document (vs assets / API / internals). */
function isDocumentPath(pathname) {
	const path = String(pathname ?? "");
	return !path.startsWith("/__grok/") && !path.startsWith("/api/") && !path.startsWith("/@") && !path.startsWith("/node_modules") && !/\.[a-z0-9]+$/i.test(path);
}
function acceptsHtml(accept) {
	const value = String(accept ?? "");
	return value === "" || value.includes("text/html") || value.includes("*/*");
}
/** The same URL without the install-tutorial params (used as the app link). */
function stripInstallParams(url) {
	const [path = "/", query = ""] = String(url ?? "/").split("?", 2);
	const params = new URLSearchParams(query);
	params.delete("install");
	params.delete("platform");
	const rest = params.toString();
	return rest ? `${path}?${rest}` : path;
}
function renderInstallPageHtml(template, { host, url } = {}) {
	return String(template).replaceAll("{{APP_NAME}}", escapeHtml(appNameFromHost(host))).replaceAll("{{APP_URL}}", escapeHtml(stripInstallParams(url)));
}
function renderWebManifest(hostHeader) {
	const name = appNameFromHost(hostHeader);
	return JSON.stringify({
		name,
		short_name: name,
		id: "/",
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		icons: [{
			src: "/__grok/icon-180.png",
			sizes: "180x180",
			type: "image/png"
		}]
	}, null, 2);
}
function grokPwaHeadTags(appName = DEFAULT_APP_NAME) {
	return [
		["manifest", "<link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\">"],
		["apple-touch-icon", "<link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\">"],
		["apple-mobile-web-app-title", `<meta name="apple-mobile-web-app-title" content="${escapeHtml(appName)}">`],
		["apple-mobile-web-app-status-bar-style", "<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">"],
		["theme-color", "<meta name=\"theme-color\" content=\"#000000\">"]
	];
}
var GROK_EXTENSIONS_SCRIPT_SRC = "https://grok.com/grok-app-builder/extensions.js";
function readGrokProjectId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.VITE_PROJECT_ID : "";
	return String(fromProcess ?? "").trim();
}
function readXCreator() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR : "";
	return String(fromProcess ?? "").trim();
}
function readXCreatorId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR_ID : "";
	return String(fromProcess ?? "").trim();
}
function grokXCreatorHeadTags(creator = readXCreator(), creatorId = readXCreatorId()) {
	const name = String(creator ?? "").trim();
	const id = String(creatorId ?? "").trim();
	if (!name || !id) return [];
	return [`<meta property="x:creator" content="${escapeHtml(name)}">`, `<meta property="x:creator:id" content="${escapeHtml(id)}">`];
}
/** Platform "Created with Grok" banner — injected into every HTML document. */
function grokExtensionsHeadTags(projectId = readGrokProjectId()) {
	const id = escapeHtml(projectId);
	const tags = [];
	if (projectId) tags.push(`<meta name="grok-project-id" content="${id}">`);
	tags.push(`<script src="${GROK_EXTENSIONS_SCRIPT_SRC}"${projectId ? ` data-project-id="${id}"` : ""} defer><\/script>`);
	return tags;
}
function readOgSite(cwd = process.cwd()) {
	try {
		const raw = readFileSync(join(cwd, OG_SITE_REL_PATH), "utf8");
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
	} catch {
		return {};
	}
}
/** Public path of an on-disk share card, or "" if neither file exists. */
function ogCardPublicPath(cwd = process.cwd()) {
	if (existsSync(join(cwd, "public/og.jpg"))) return "/og.jpg";
	if (existsSync(join(cwd, "public/og.png"))) return "/og.png";
	return "";
}
function detectCustomOgCard(cwd = process.cwd(), site = {}) {
	if (ogCardPublicPath(cwd)) return true;
	return siteHasCustomCard(site) || Boolean(String(site.image ?? "").trim());
}
/** Snapshot for Vite/Nitro to bake into the server bundle (Vercel has no workspace FS). */
function snapshotOgIdentity(cwd = process.cwd()) {
	const site = { ...readOgSite(cwd) };
	const disk = ogCardPublicPath(cwd);
	if (disk) {
		site.card = "custom";
		site.image = disk;
	} else {
		if (siteHasCustomCard(site)) delete site.card;
		if (site.image) delete site.image;
	}
	if (existsSync(join(cwd, "public/x-banner.jpg"))) site.banner = site.banner || "/x-banner.jpg";
	return { site };
}
function ogServiceUrl() {
	return (String(process.env?.VITE_OG_SERVICE_URL ?? "").trim() || "https://og.grok.me").replace(/\/+$/, "");
}
function titleFromDocument(html) {
	const match = String(html ?? "").match(/<title\b[^>]*>([^<]*)<\/title>/i);
	return match ? unescapeHtml(match[1]).trim() : "";
}
function resolveOgTitle(site = {}, appName = DEFAULT_APP_NAME, host = "", documentTitle = "") {
	const fromSite = String(site.title ?? "").trim();
	if (fromSite) return fromSite;
	const fromDoc = String(documentTitle ?? "").trim();
	if (fromDoc) return fromDoc;
	const fromHost = appNameFromHost(host);
	if (fromHost && fromHost !== "Grok App") return fromHost;
	return String(appName ?? "").trim() || "Grok App";
}
function siteHasCustomCard(site = {}) {
	return String(site.card ?? "").toLowerCase() === "custom";
}
/**
* Preview: public/og.jpg|png on disk.
* Vercel: the bake (`card=custom` / `image`) because the function cannot stat public/.
* Otherwise empty — caller emits the og.grok.me placeholder.
*/
function resolveOgCardAsset(site = {}, cwd = process.cwd()) {
	return ogCardPublicPath(cwd) || (detectCustomOgCard(cwd, site) ? String(site.image ?? "").trim() || "/og.jpg" : "");
}
/** Stamp `card=custom` when public/og.jpg or public/og.png is on disk. */
function applyCustomCardFromFs(site, cwd) {
	const disk = ogCardPublicPath(cwd);
	if (!disk) return site;
	return {
		...site,
		card: "custom",
		image: disk
	};
}
function grokOgHeadTags({ host = "", appName = DEFAULT_APP_NAME, site = {}, documentTitle = "", cwd = process.cwd() } = {}) {
	const title = resolveOgTitle(site, appName, host, documentTitle);
	const publicHost = resolvePublicHost(host);
	const tags = [`<meta name="twitter:card" content="summary_large_image">`, `<meta property="og:title" content="${escapeHtml(title)}">`];
	const description = String(site.description ?? "").trim();
	if (description) tags.push(`<meta property="og:description" content="${escapeHtml(description)}">`);
	if (String(site.type ?? "").toLowerCase() === "x:game") tags.push(`<meta property="og:type" content="x:game">`);
	if (publicHost) {
		const asset = resolveOgCardAsset(site, cwd);
		const custom = Boolean(asset);
		let image = custom ? `https://${publicHost}${asset.startsWith("/") ? asset : `/${asset}`}` : `${ogServiceUrl()}/v1/card.png?host=${encodeURIComponent(publicHost)}&title=${encodeURIComponent(title)}`;
		const color = !custom ? placeholderCardColor(site) : "";
		if (color) image += `&color=${encodeURIComponent(color)}`;
		tags.push(`<meta property="og:image" content="${escapeHtml(image)}">`);
		tags.push(`<meta property="og:image:width" content="1200">`);
		tags.push(`<meta property="og:image:height" content="630">`);
		const banner = String(site.banner ?? "").trim();
		if (banner) {
			const bannerUrl = `https://${publicHost}${banner.startsWith("/") ? banner : `/${banner}`}`;
			tags.push(`<meta property="x:game:image" content="${escapeHtml(bannerUrl)}">`);
			tags.push(`<meta property="x:game:image:width" content="1200">`);
			tags.push(`<meta property="x:game:image:height" content="264">`);
		}
	}
	return tags;
}
function stripShareMetaTags(html) {
	return String(html).replace(/<meta\b[^>]*>/gi, (tag) => {
		const attrs = [...tag.matchAll(/\b(?:property|name)\s*=\s*["']([^"']+)["']/gi)];
		for (const match of attrs) if (SHARE_META_KEYS.has(String(match[1]).toLowerCase())) return "";
		return tag;
	});
}
function insertAfterHeadOpen(html, snippet) {
	if (/<head\b[^>]*>/i.test(html)) return html.replace(/<head\b[^>]*>/i, (open) => `${open}${snippet}`);
	if (/<html\b[^>]*>/i.test(html)) return html.replace(/<html\b[^>]*>/i, (open) => `${open}<head>${snippet}</head>`);
	return `<!doctype html><html><head>${snippet}</head>${html}`;
}
function insertBeforeHeadClose(html, snippet) {
	if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, `${snippet}</head>`);
	return insertAfterHeadOpen(html, snippet);
}
function normalizeHeadContext(ctx = {}) {
	const cwd = ctx.cwd ?? process.cwd();
	const site = applyCustomCardFromFs(ctx.site !== void 0 ? ctx.site : snapshotOgIdentity(cwd).site, cwd);
	return {
		appName: resolveOgTitle(site, ctx.appName ?? "Grok App", ctx.host ?? ""),
		projectId: ctx.projectId ?? readGrokProjectId(),
		creator: ctx.creator ?? readXCreator(),
		creatorId: ctx.creatorId ?? readXCreatorId(),
		host: ctx.host ?? "",
		cwd,
		site
	};
}
function injectGrokPwaHead(html, ctx = {}) {
	if (typeof html !== "string") return html;
	const { site, projectId, creator, creatorId, host, cwd } = normalizeHeadContext(ctx);
	const documentTitle = titleFromDocument(html);
	const appName = resolveOgTitle(site, ctx.appName ?? "Grok App", host, documentTitle);
	let next = stripShareMetaTags(html);
	const missing = grokPwaHeadTags(appName).filter(([key]) => {
		if (key === "manifest") return !next.includes("href=\"/__grok/manifest.webmanifest\"");
		if (key === "apple-touch-icon") return !next.includes("href=\"/__grok/icon-180.png\"");
		return !next.includes(`name="${key}"`);
	}).map(([, tag]) => tag);
	next = insertAfterHeadOpen(next, grokOgHeadTags({
		host,
		appName,
		site,
		documentTitle,
		cwd
	}).join(""));
	if (!next.includes("/grok-app-builder/extensions.js")) missing.push(...grokExtensionsHeadTags(projectId));
	else if (projectId && !next.includes("name=\"grok-project-id\"")) missing.push(`<meta name="grok-project-id" content="${escapeHtml(projectId)}">`);
	if (projectId && !next.includes("property=\"grok:app_id\"") && !next.includes("property='grok:app_id'")) missing.push(`<meta property="grok:app_id" content="${escapeHtml(projectId)}">`);
	const creatorTags = grokXCreatorHeadTags(creator, creatorId);
	if (creatorTags.length > 0) {
		if (!(next.includes("property=\"x:creator\" content=") || next.includes("property='x:creator' content="))) missing.push(creatorTags[0]);
		if (!next.includes("property=\"x:creator:id\"")) missing.push(creatorTags[1]);
	}
	if (missing.length === 0) return next;
	return insertBeforeHeadClose(next, missing.join(""));
}
function findHeadClose(buf) {
	return buf.toString("latin1").search(/<\/head>/i);
}
/**
* Streaming head injector: buffers only until `</head>` (ASCII marker; never
* appears inside a UTF-8 continuation byte), overwrites share-card metas,
* then passes later chunks through so streaming SSR keeps streaming.
*/
function createHeadInjector(ctx = {}) {
	const normalized = normalizeHeadContext(ctx);
	/** @type {Buffer[]} */
	let pending = [];
	let done = false;
	const apply = (html) => injectGrokPwaHead(html, {
		appName: normalized.appName,
		projectId: normalized.projectId,
		creator: normalized.creator,
		creatorId: normalized.creatorId,
		host: normalized.host,
		cwd: normalized.cwd,
		site: normalized.site
	});
	return {
		/** @param {Uint8Array | string} chunk @returns {Buffer[]} chunks ready to emit */
		push(chunk) {
			const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
			if (done) return [buf];
			pending.push(buf);
			const joined = Buffer.concat(pending);
			const at = findHeadClose(joined);
			if (at === -1) return [];
			done = true;
			pending = [];
			const closeLen = joined.toString("latin1", at).match(/^<\/head>/i)[0].length;
			const head = apply(joined.subarray(0, at + closeLen).toString("utf8"));
			return [Buffer.concat([Buffer.from(head, "utf8"), joined.subarray(at + closeLen)])];
		},
		/** @returns {Buffer[]} whatever is still buffered (no `</head>` seen) */
		flush() {
			if (done || pending.length === 0) return [];
			const rest = Buffer.concat(pending);
			pending = [];
			done = true;
			return [Buffer.from(apply(rest.toString("utf8")), "utf8")];
		}
	};
}
//#endregion
//#region server/middleware/grok-pwa.ts
/**
* Deployed-app (Nitro) half of the platform PWA chrome. Auto-registered as
* global h3 middleware because vite.config.ts sets `serverDir: "./server"` —
* without that option Nitro v3 never scans this directory.
*
* - `?install=1&platform=ios` on a document path → the Home Screen tutorial,
*   bundled into the server build via `?raw` (the public/ directory is CDN
*   static output on Vercel and not readable from the function).
* - `/__grok/manifest.webmanifest` → per-app-named manifest (kept out of
*   public/ so this dynamic response is the only one).
* - Other HTML documents → stream-inject PWA + OG head tags at `</head>`.
*   OG identity is baked via `virtual:grok-og-identity` at `vite build`
*   (this function cannot read `src/lib/og/site.json` or `public/og.jpg`).
*   This must be a middleware transforming `next()`: h3 discards the `response`
*   runtime hook's return value, and `render:html` does not exist in Nitro v3.
*/
function requestHost(event) {
	return event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? event.url.host;
}
function injectHeadStreaming(response, host) {
	const injector = createHeadInjector({
		host,
		site: grokOgIdentity.site
	});
	const transformed = response.body.pipeThrough(new TransformStream({
		transform(chunk, controller) {
			for (const out of injector.push(chunk)) controller.enqueue(out);
		},
		flush(controller) {
			for (const out of injector.flush()) controller.enqueue(out);
		}
	}));
	const headers = new Headers(response.headers);
	headers.delete("content-length");
	return new Response(transformed, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
async function grokPwaMiddleware(event, next) {
	if ((event.req.method ?? "GET").toUpperCase() !== "GET") return next();
	const path = event.url.pathname;
	const urlWithQuery = path + event.url.search;
	if (path === "/__grok/manifest.webmanifest" || path === "/__grok/manifest.json") return new Response(renderWebManifest(requestHost(event)), { headers: {
		"content-type": "application/manifest+json; charset=utf-8",
		"cache-control": "no-cache"
	} });
	if (isInstallQuery(urlWithQuery) && isDocumentPath(path) && acceptsHtml(event.req.headers.get("accept"))) {
		const html = renderInstallPageHtml(install_page_default, {
			host: requestHost(event),
			url: urlWithQuery
		});
		return new Response(html, { headers: {
			"content-type": "text/html; charset=utf-8",
			"cache-control": "no-cache"
		} });
	}
	if (!isDocumentPath(path)) return next();
	const result = await next();
	if (result instanceof Response && result.body && String(result.headers.get("content-type") ?? "").includes("text/html") && !result.headers.get("content-encoding")) return injectHeadStreaming(result, requestHost(event));
	return result;
}
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_IO091Z = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_IO091Z
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default), toEventHandler(grokPwaMiddleware)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
