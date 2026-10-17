import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as SiteShell, f as PRODUCTS, g as SITE, m as ROOMS, n as Button, r as CONTENTS, s as JOURNAL, u as PRACTICES, w as productBySlug, y as WILL_NOT } from "./site-shell-CkP5FAVp.mjs";
import { u as InquireSection } from "./router-DMI4BGSw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DMeVSixI.js
var import_jsx_runtime = require_jsx_runtime();
var COVER_LINES = [
	{
		n: "01",
		title: "The laboratory",
		dek: "QBio and peptides, Irving",
		slug: "exosomes"
	},
	{
		n: "02",
		title: "The original FUE",
		dek: "AuraGraft, 38 pounds",
		slug: "auragraft"
	},
	{
		n: "03",
		title: "Ink, out",
		dek: "TEPR, not a laser",
		slug: "inkout"
	}
];
function TocLink({ item }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "folio text-accent",
		children: item.folio
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "min-w-0 flex-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-kicker uppercase tracking-kicker text-muted",
			children: item.dept
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 block font-display text-xl leading-snug",
			children: item.title
		})]
	})] });
	const cls = "flex items-start gap-5 border-b border-line py-5 transition-colors hover:text-accent";
	if (item.kind === "product") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/products/$slug",
		params: { slug: item.slug },
		className: cls,
		children: inner
	});
	if (item.kind === "practice") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/practices/$slug",
		params: { slug: item.slug },
		className: cls,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: item.to,
		className: cls,
		children: inner
	});
}
function Home() {
	const qbio = productBySlug("exosomes");
	const graft = productBySlug("auragraft");
	const ink = productBySlug("inkout");
	const junera = productBySlug("junera");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-[calc(100dvh-7rem)] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-lab.jpg",
					alt: "Re-Gen Active Lab manufacturing facility in Irving, Texas",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[calc(100dvh-7rem)] max-w-7xl flex-col justify-end gap-10 px-5 pb-12 pt-24 md:flex-row md:items-end md:justify-between md:px-8 md:pb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "reveal text-kicker uppercase tracking-kicker text-accent-fg/80",
								children: [
									SITE.issue,
									" · ",
									SITE.season,
									" · ",
									SITE.masthead
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "reveal reveal-2 mt-4 font-display text-5xl leading-[0.92] text-bg",
								children: [
									"Devices.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Exosomes.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "italic",
										children: "Peptides."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "reveal reveal-3 mt-6 max-w-md text-lg text-bg/85",
								children: "A luxury United States manufacturer and laboratory house. QBio and peptides, made in Irving, Texas. AuraGraft FUE. Energy, hair, and imaging — placed with licensed practices nationwide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal reveal-3 mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/products/$slug",
										params: { slug: "exosomes" },
										children: "The laboratory"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "border-bg text-bg hover:bg-bg hover:text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/lookbook",
										children: "The lookbook"
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "reveal reveal-4 hidden w-64 shrink-0 border-l border-bg/30 pl-6 lg:block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "mb-4 text-kicker uppercase tracking-kicker text-bg/55",
								children: "On the cover"
							}),
							COVER_LINES.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-t border-bg/20 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/products/$slug",
									params: { slug: line.slug },
									className: "block text-bg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "folio text-accent-2",
											children: line.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block font-display text-xl leading-tight",
											children: line.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm text-bg/65",
											children: line.dek
										})
									]
								})
							}, line.n)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-t border-bg/20 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/practices/$slug",
									params: { slug: "orthopedics" },
									className: "block text-bg",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "folio text-accent-2",
											children: "04"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block font-display text-xl leading-tight",
											children: "A careful yes"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm text-bg/65",
											children: "The orthopedic edit"
										})
									]
								})
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 px-5 py-4 md:px-8",
				children: [
					"United States",
					"Manufacturer",
					"Laboratory",
					"Devices",
					"Exosomes",
					"Peptides"
				].map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-muted",
					children: word
				}, word))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-3 px-5 py-5 sm:grid-cols-5 md:px-8",
				children: PRACTICES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/practices/$slug",
					params: { slug: p.slug },
					className: "text-kicker uppercase tracking-kicker text-muted hover:text-accent",
					children: p.title
				}, p.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-ink text-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "folio text-accent-2",
						children: "018 · Hair surgery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-5xl",
							children: "AuraGraft."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-base leading-relaxed text-bg/75",
							children: "Developed by the original team that introduced suction-assisted FUE globally, AuraGraft is built to optimize safety, precision, and clinical outcomes. Lightweight (just 38 lbs), portable, and durable, it’s backed by an industry-leading 3-year warranty."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/auragraft-wide.jpg",
						alt: "AuraGraft FUE hair transplant console, touchscreen, and suction handpiece",
						className: "mt-10 w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products/$slug",
								params: { slug: "auragraft" },
								children: "See the platform"
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-16 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent",
							children: "Contents"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display text-4xl",
							children: [
								"In this",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic",
									children: "issue."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xs text-sm leading-relaxed text-muted",
							children: "The Blue Ocean catalog, the Irving laboratory (QBio and peptides), and inkOUT — edited for five practices."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 sm:gap-x-10",
						children: CONTENTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocLink, { item }, item.folio))
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "Cover stories"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl",
						children: "The lookbook, abbreviated."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/lookbook",
							children: "All lines"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-10 lg:grid-cols-12",
					children: [graft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$slug",
						params: { slug: graft.slug },
						className: "group lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-[16/10] overflow-hidden bg-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/auragraft-wide.jpg",
									alt: graft.imageAlt,
									className: "size-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 folio text-accent",
								children: [
									graft.folio,
									" · ",
									graft.department
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-4xl",
								children: graft.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-md text-sm text-muted",
								children: graft.tagline
							})
						]
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-10 lg:col-span-5",
						children: [qbio, ink].map((p) => p ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products/$slug",
							params: { slug: p.slug },
							className: "group grid gap-4 sm:grid-cols-2 lg:grid-cols-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-[16/10] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.imageAlt,
									className: "size-full object-cover transition-transform duration-700 group-hover:scale-105 frame"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "folio text-accent",
									children: [
										p.folio,
										" · ",
										p.department
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-3xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: p.tagline
								})
							] })]
						}, p.slug) : null)
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-ink bg-ink text-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/lab.jpg",
						alt: "Cryogenic vials at Re-Gen Active Lab, Irving, Texas",
						className: "absolute inset-0 size-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center px-5 py-16 md:px-12 md:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent-2",
							children: "The Irving laboratory"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-6 font-display text-3xl italic leading-snug md:text-4xl",
							children: "“Exosomes and peptides, from the same Texas laboratory. Documented lots. Topical cosmetics. Not a brochure, and not an injectable story.”"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-kicker uppercase tracking-kicker text-bg/55",
							children: "QBio · Peptides · Irving, Texas · Professional use"
						}),
						qbio?.stats ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-12 grid grid-cols-2 gap-8",
							children: qbio.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-display text-3xl text-bg",
								children: s.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-xs leading-relaxed text-bg/60",
								children: s.label
							})] }, s.label))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/laboratory",
										children: "The Irving laboratory"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "border-bg text-bg hover:bg-bg hover:text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/products/$slug",
										params: { slug: "exosomes" },
										children: "QBio Exosomes"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "border-bg text-bg hover:bg-bg hover:text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/products/$slug",
										params: { slug: "peptides" },
										children: "Peptides"
									})
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "The difference"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl font-display text-4xl",
						children: "Five sentences we will not say. Competitors will."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: WILL_NOT.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-ink pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "folio text-accent",
									children: String(i + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-xl leading-snug",
									children: item.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: item.b
								})
							]
						}, item.t))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink bg-bg-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "Tuesday"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl font-display text-4xl",
						children: "Three rooms. Not a PDF."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-12 grid gap-px bg-ink lg:grid-cols-3",
						children: ROOMS.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "bg-bg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomCard, { room })
						}, room.folio))
					})
				]
			})
		}),
		junera ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-2 flex flex-col justify-center px-5 py-16 md:px-12 lg:order-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "folio text-accent",
							children: [
								junera.folio,
								" · ",
								junera.department
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl",
							children: junera.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-base leading-relaxed text-muted",
							children: "Dual-wavelength 980 nm and 1,470 nm — the category between liposuction and a surface device. Jawline, neck, postpartum abdomen, flanks. Local anesthesia. Cash-pay."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products/$slug",
									params: { slug: "junera" },
									children: "Read the body edit"
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative order-1 min-h-80 lg:order-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: junera.image,
						alt: junera.imageAlt,
						className: "absolute inset-0 size-full object-cover frame"
					})
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "Departments"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-xl font-display text-4xl",
						children: "Five practices. One masthead."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-px bg-ink sm:grid-cols-2 lg:grid-cols-5",
						children: PRACTICES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/practices/$slug",
							params: { slug: p.slug },
							className: "group bg-bg p-6 hover:bg-surface",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "folio text-accent",
									children: p.folio
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-2xl leading-tight",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: p.kicker
								})
							]
						}, p.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/ortho.jpg",
						alt: "Regenerative clinic corridor",
						className: "absolute inset-0 size-full object-cover frame"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center px-5 py-16 md:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker uppercase tracking-kicker text-accent",
							children: "Orthopedics, carefully"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl",
							children: "Regenerative questions, without the brochure fiction."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted",
							children: "Orthopedic and sports-medicine groups ask about exosomes. We will show manufacturing, characterization, and the line we will not cross: QBio is a topical cosmetic, not an injectable joint therapy, not a treatment for osteoarthritis."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/practices/$slug",
									params: { slug: "orthopedics" },
									children: "Read the orthopedic edit"
								})
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker uppercase tracking-kicker text-accent",
						children: "The Journal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-xl font-display text-4xl",
						children: "Letters from the laboratory."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journal",
							children: "Read the journal"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-px bg-ink md:grid-cols-3",
					children: JOURNAL.slice(0, 3).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "bg-bg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/journal/$slug",
							params: { slug: a.slug },
							className: "group block hover:bg-surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-[16/10] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: a.image,
									alt: a.imageAlt,
									className: "size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "folio text-accent",
										children: [
											a.folio,
											" · ",
											a.department
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-2xl leading-tight",
										children: a.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted",
										children: a.dek
									})
								]
							})]
						})
					}, a.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-ink bg-bg-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-10 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-kicker uppercase tracking-kicker text-muted",
					children: "Also in the lookbook"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-x-6 gap-y-2",
					children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products/$slug",
						params: { slug: p.slug },
						className: "text-sm text-ink hover:text-accent",
						children: p.title
					}, p.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquireSection, { compact: true })
	] });
}
function RoomCard({ room }) {
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative aspect-[16/10] overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: room.image,
			alt: room.imageAlt,
			className: "size-full object-cover transition-transform duration-700 group-hover:scale-105 frame"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "folio text-accent",
				children: [
					room.folio,
					" · ",
					room.kicker
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-3xl",
				children: room.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: room.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-kicker uppercase tracking-kicker text-accent",
				children: room.label
			})
		]
	})] });
	if (room.href === "/consulting") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/consulting",
		className: "group block h-full hover:bg-surface",
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/products/$slug",
		params: { slug: room.href.replace("/products/", "") },
		className: "group block h-full hover:bg-surface",
		children: inner
	});
}
//#endregion
export { Home as component };
