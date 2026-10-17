import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as SiteShell, c as LAB, d as PROCESS, n as Button } from "./site-shell-CkP5FAVp.mjs";
import { u as InquireSection } from "./router-DMI4BGSw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/laboratory-BaQ3yPSI.js
var import_jsx_runtime = require_jsx_runtime();
function Laboratory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center px-5 py-16 md:px-10 md:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent",
							children: [
								LAB.kicker,
								" · Since ",
								LAB.since
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-xl font-display text-4xl leading-none",
							children: "Re-Gen Active Lab. The Irving file."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-lg leading-relaxed text-muted",
							children: LAB.dek
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-sm leading-relaxed text-muted",
							children: [
								LAB.street,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								LAB.city,
								", ",
								LAB.region,
								" ",
								LAB.postal,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: LAB.phoneHref,
									className: "text-accent hover:text-ink",
									children: ["Call/text ", LAB.phone]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products/$slug",
									params: { slug: "exosomes" },
									children: "QBio Exosomes"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products/$slug",
									params: { slug: "peptides" },
									children: "Peptides"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-lab.jpg",
					alt: "Re-Gen Active Lab manufacturing facility in Irving, Texas",
					className: "h-72 w-full object-cover lg:h-full frame"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-ink text-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-5 md:px-8",
				children: LAB.biomolecules.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: m
				}, m))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "How a lot is made"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl font-display text-4xl",
						children: "Six steps. Then the file, not the brochure."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: PROCESS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-ink pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "folio text-accent",
									children: step.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-2xl",
									children: step.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: step.b
								})
							]
						}, step.n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/inquire",
								search: { interest: "dossier" },
								children: "Request the Irving dossier"
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "Who they are"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "drop-cap mt-6 text-lg leading-relaxed text-muted",
						children: [
							"Re-Gen Active Lab is the sister laboratory in Irving. It describes itself as an FDA-registered 361 tissue establishment, established in",
							" ",
							LAB.since,
							", dedicated to human umbilical cord and amniotic membrane–derived biomolecules. That is the file we inherit: not a slogan, and not a license to invent an injectable indication."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg leading-relaxed text-muted",
						children: "What they manufacture, in their words, is a naturally occurring profile — exosomes, proteins, peptides, growth factors, and other bioactive molecules — preserved under process control. QBio is the named topical cosmetic line we place from that house. The peptide offering is the peptide-and-protein fraction of the same story."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg leading-relaxed text-muted",
						children: "Tissue is sourced, as they describe it, only from live, full-term, scheduled C-section births in U.S. hospitals, through FDA-registered and AABB-accredited cord banks. Donors are screened. Maternal blood is tested. Batches are released after independent sterility and endotoxin work. We will show that dossier. We will not turn it into a disease claim."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-accent",
					children: "Our standards — as the laboratory writes them"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-8 sm:grid-cols-2",
					children: LAB.standards.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-line pt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "folio text-accent",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-2xl",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: s.b
							})
						]
					}, s.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "The promise"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-px bg-ink sm:grid-cols-2 lg:grid-cols-4",
						children: LAB.promise.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "bg-bg p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl leading-snug",
								children: p
							})
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 max-w-3xl text-sm leading-relaxed text-muted",
						children: LAB.disclaimer
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs text-faint",
						children: [
							"Source:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: LAB.url,
								className: "underline decoration-line underline-offset-2 hover:text-ink",
								rel: "noreferrer",
								target: "_blank",
								children: "regenactivelab.com"
							}),
							". We paraphrase the laboratory’s public file. We do not copy a brochure, and we do not add an indication they did not write."
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquireSection, {
			defaultInterest: "dossier",
			compact: true
		})
	] });
}
//#endregion
export { Laboratory as component };
