import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronDown, i as Copy, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BgIK_8gJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var GEAR_CA = "0x5880cD05605A549f1DAb01a53ca61Ee559244bD1";
var PAIR_CA = "0x2839a8e410e7b2d5a6eea467dd6f4774a824c16f";
var DEX_URL = `https://www.dextools.io/app/base/pair-explorer/${PAIR_CA}`;
var INVITE_URL = "https://base.app/invite/capzero/FPR4HYZ0";
var INVITE_CODE = "FPR4HYZ0";
var X_URL = "https://x.com/capstiller";
var TIKTOK_URL = "https://www.tiktok.com/@capstiller.base.eth?_r=1&_t=ZT-99gNTL7zwAI";
var YT_URL = "https://www.youtube.com/@capstiller";
var TICKER = [
	"GET ONCHAIN",
	"FIND A GEAR",
	"PLAY THE GAME",
	"BE BASED"
];
var FAQS = [
	{
		id: "q-what",
		q: "What is Gear?",
		a: "Gear itself is the meme to get mechanics grinding. Like an idea to actually be useful. Gear token is just a means to prove that idea. Tokens used to drive IRL gears onchain are for the joy of the community who enjoy building and thinking about fun things. Gears are not intended to provide financial freedom they are intended to be useful for whatever you can do with them. IRL Gears are the tools used to drive humans onchain. After the mechanics get working, then humans are onchain."
	},
	{
		id: "q-value",
		q: "Are IRL Gears Valuable?",
		a: "Yes, IRL Gears are valuable... well, depending on what you think value is anyway. Gears get lost on purpose and by accident to build the ultimate game with solid lore. The loss of IRL gears keep the onchain gears turning and the loss of onchain gears keep the IRL gears manufactured. So- if a gear is found, hang on to it you never know who might want it. Most have a QR code to scan. Use your smartphone to get onboard either onchain or to something CAPSTILLER thinks is based. With a bonus finders reward onchain if you ever meet the right mechanic."
	},
	{
		id: "q-game",
		q: "What is the game?",
		a: "The Game... well, the game my friend is life... onchain!!! Gear is designed to cause the imagination to start turning in one direction. Forward... or backwards or upwards or longways... or anyways really, as long as they are attached and turning. It starts with CAPSTILLER's scavenger hunt. A game of wits or luck? Probably both! Easter eggs are great, but being based is better."
	},
	{
		id: "q-cap",
		q: "Who is CAPSTILLER?",
		a: "CAPSTILLER is the totally Based layer zero, looking to bring the world onchain to have fun. Life is a game and he wants to play, anyway onchain will allow or possibly not. Who really knows... CAPSTILLER will."
	},
	{
		id: "q-token",
		q: "What is the token?",
		a: ""
	}
];
async function copyText(text) {
	try {
		await navigator.clipboard.writeText(text);
	} catch {
		const ta = document.createElement("textarea");
		ta.value = text;
		ta.setAttribute("readonly", "");
		ta.style.position = "fixed";
		ta.style.left = "-9999px";
		document.body.appendChild(ta);
		ta.select();
		document.execCommand("copy");
		document.body.removeChild(ta);
	}
}
function scrollToId(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function CopyChip({ text, label }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "inline-flex w-fit items-center gap-1.5 rounded-md border border-line bg-chip px-2 py-1 font-mono text-xs font-semibold text-lime",
		onClick: async () => {
			await copyText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 1400);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), copied ? "Copied" : label ?? text]
	});
}
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/assets/gear-logo.png",
		alt: "GEAR",
		className: cn("gear-logo h-12 w-auto object-contain object-left", className)
	});
}
function Landing() {
	const [openFaq, setOpenFaq] = (0, import_react.useState)(null);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [toast, setToast] = (0, import_react.useState)(null);
	function go(section, faq) {
		setMenu(false);
		scrollToId(section);
		if (faq) setTimeout(() => setOpenFaq(faq), 80);
	}
	async function onCopy(text) {
		await copyText(text);
		setToast(`Copied: ${text}`);
		setTimeout(() => setToast(null), 1600);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh overflow-x-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex min-h-20 w-full max-w-6xl items-center justify-between gap-3 px-5 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go("top"),
							"aria-label": "GEAR home",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-11 max-w-48 sm:h-14 sm:max-w-none" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-5 text-sm text-fg/85 md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "hover:text-lime",
									onClick: () => go("faq", "q-what"),
									children: "What is GEAR?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "hover:text-lime",
									onClick: () => go("hold"),
									children: "Find a Gear"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "hover:text-lime",
									onClick: () => go("rack"),
									children: "Gear Rack"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									title: "Who is CAPSTILLER?",
									className: "shrink-0",
									onClick: () => go("faq", "q-cap"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/assets/cap-hat.png",
										alt: "CAP hat",
										className: "cap-hat h-12 w-auto object-contain"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-end gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: INVITE_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "rounded-pill bg-lime px-4 py-2 text-sm font-bold text-bg hover:bg-lime-2",
									children: "Get Onchain"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden items-center gap-1.5 text-xs text-muted sm:flex",
									children: ["My Invite Code:", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "rounded-md border border-line bg-chip px-2 py-0.5 font-semibold text-lime",
										onClick: () => onCopy(INVITE_CODE),
										children: INVITE_CODE
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "rounded-md p-2 text-fg md:hidden",
								"aria-label": "Menu",
								onClick: () => setMenu((v) => !v),
								children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
							})]
						})
					]
				}), menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-line bg-bg-2 px-5 py-4 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-left",
								onClick: () => go("faq", "q-what"),
								children: "What is GEAR?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-left",
								onClick: () => go("hold"),
								children: "Find a Gear"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-left",
								onClick: () => go("rack"),
								children: "Gear Rack"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "flex items-center gap-2 text-left",
								onClick: () => go("faq", "q-cap"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/assets/cap-hat.png",
									alt: "",
									className: "cap-hat h-10 w-auto object-contain"
								}), "Who is CAPSTILLER?"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 pt-1 text-xs text-muted",
								children: ["Invite:", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-md border border-line bg-chip px-2 py-1 font-semibold text-lime",
									onClick: () => onCopy(INVITE_CODE),
									children: INVITE_CODE
								})]
							})
						]
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid w-full min-w-0 max-w-6xl items-center gap-10 overflow-x-hidden px-5 py-16 md:grid-cols-2 md:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-4 inline-block rounded-md bg-lime/10 px-2.5 py-1 text-xs font-bold tracking-widest text-lime",
									children: "ON BASE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl",
									children: [
										"Life is a game. Play",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"it onchain."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-lg text-base text-muted md:text-lg",
									children: "GEAR is for driving fun onchain — one scavenger hunt at a time."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "rounded-pill bg-red px-5 py-3 font-bold text-fg hover:bg-red-2",
										children: "Find a Gear"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: DEX_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "rounded-pill border-2 border-green px-5 py-2.5 font-bold text-green hover:bg-green/10",
										children: "Trade GEAR"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex min-w-0 flex-col items-start gap-2 sm:flex-row sm:items-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-sm text-muted",
											children: "Gear:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "break-all font-mono text-xs text-fg/80 sm:text-sm",
											children: GEAR_CA
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyChip, {
											text: GEAR_CA,
											label: "Copy"
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex w-full min-w-0 max-w-sm justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/hero-cap.png",
								alt: "CAP mosaic",
								className: "aspect-square w-full rounded-full border-4 border-line object-cover object-center"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative w-full overflow-hidden border-y border-line bg-bg-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gear-marquee",
							children: [0, 1].map((copy) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "gear-marquee-track",
								"aria-hidden": copy === 1,
								children: TICKER.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "whitespace-nowrap text-sm font-bold tracking-widest text-lime",
									children: ["⚙️ ", item]
								}, `${copy}-${item}`))
							}, copy))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "hold",
						className: "scroll-mt-24 py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid w-full max-w-6xl items-center gap-8 px-5 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/hold-trade.jpg",
								alt: "Hands passing an IRL GEAR token",
								className: "h-full min-h-64 w-full rounded-lg object-cover md:min-h-96"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-2 text-xs font-bold tracking-widest text-lime",
									children: "HOLD OR TRADE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mb-4 text-3xl font-extrabold tracking-tight md:text-4xl",
									children: "Did you find a gear?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-3 text-muted",
									children: "Gear token is bringing the world onchain, one gear at a time. Hometown or visit town, gears get lost. It's ok though because its FUN to get them back. Anyway we can."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-6 text-muted",
									children: "If you found one-or two hang on to them or trade them to a friend. There will be many varieties, and tradable back to a good mechanic for a gear token."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: DEX_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex rounded-pill bg-red px-5 py-3 font-bold text-fg hover:bg-red-2",
									children: "Trade GEAR →"
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "faq",
						className: "scroll-mt-24 bg-bg-2 py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto w-full max-w-6xl px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mb-8 text-center text-3xl font-extrabold tracking-tight md:text-4xl",
								children: "Frequently Asked Questions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto flex max-w-3xl flex-col gap-2.5",
								children: FAQS.map((item) => {
									const open = openFaq === item.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										id: item.id,
										className: "overflow-hidden rounded-xl border border-line bg-surface",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-base font-semibold",
											onClick: () => setOpenFaq(open ? null : item.id),
											children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-5 shrink-0 text-lime transition-transform", open && "rotate-180") })]
										}), open ? item.id === "q-token" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 space-y-3 px-5 pb-5 font-mono text-sm text-fg/85",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted",
															children: "Gear:"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
															className: "break-all",
															children: GEAR_CA
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyChip, {
															text: GEAR_CA,
															label: "Copy"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted",
															children: "Gear/WETH:"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
															className: "break-all",
															children: PAIR_CA
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyChip, {
															text: PAIR_CA,
															label: "Copy"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-sans text-muted",
													children: "liquidity locked until 2034"
												})
											]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "px-5 pb-5 text-sm leading-relaxed text-muted",
											children: item.a
										}) : null]
									}, item.id);
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "rack",
						className: "scroll-mt-24 py-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto w-full max-w-6xl px-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-2 text-center text-xs font-bold tracking-widest text-lime",
									children: "GEAR RACK"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mb-8 text-center text-3xl font-extrabold tracking-tight md:text-4xl",
									children: "Want to see where the mechanics work?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: DEX_URL,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "rounded-2xl border border-line bg-surface-2 p-4 text-center transition hover:-translate-y-1 hover:border-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/assets/rack-dex.jpg",
												alt: "GEARscreener",
												className: "aspect-square w-full rounded-xl object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-3 block font-semibold",
												children: "DEXTools"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: X_URL,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "rounded-2xl border border-line bg-surface-2 p-4 text-center transition hover:-translate-y-1 hover:border-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/assets/rack-x.jpg",
												alt: "CAPSTILLER on X",
												className: "aspect-square w-full rounded-xl object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-3 block font-semibold",
												children: "X @capstiller"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: TIKTOK_URL,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "rounded-2xl border border-line bg-surface-2 p-4 text-center transition hover:-translate-y-1 hover:border-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: "/assets/rack-tiktok.jpg",
												alt: "CAP on TikTok",
												className: "aspect-square w-full rounded-xl object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-3 block font-semibold",
												children: "TikTok"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap justify-center gap-6 text-sm font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: X_URL,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "text-lime",
											children: "X @capstiller"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: YT_URL,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "text-red",
											children: "YouTube"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: TIKTOK_URL,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "text-lime",
											children: "TikTok"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-10 max-w-3xl text-center text-sm text-muted",
									children: "Gear token is intended to drive the IRL gears, designed and made by CAPSTILLER and his human. Mechanics in CAPSTILLER's game are experimental and could change to make the game more fun and interesting. IRL gears and Gear token are designed as a trading game, connecting real world gears onchain, and have no intention to supply financial gain or loss. Let's get onchain and have some fun."
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid w-full max-w-6xl gap-10 px-5 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "mb-5 h-16 max-w-full sm:h-20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mb-3 max-w-xs text-lg font-semibold leading-snug text-fg sm:text-xl",
									children: [
										"Life is a game.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Play it onchain."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: DEX_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-sm font-semibold text-lime",
									children: "View on DEXTools"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-3 text-xs font-bold tracking-widest text-lime",
								children: "QUICK LINKS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 text-sm text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "text-left",
										onClick: () => go("faq", "q-what"),
										children: "What is GEAR?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "text-left",
										onClick: () => go("hold"),
										children: "Find a Gear"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "text-left",
										onClick: () => go("rack"),
										children: "Gear Rack"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "text-left",
										onClick: () => go("faq"),
										children: "FAQ"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-3 text-xs font-bold tracking-widest text-lime",
								children: "COMMUNITY"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 text-sm text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: X_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										children: "@capstiller on X"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: YT_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										children: "YouTube"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: TIKTOK_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										children: "TikTok"
									})
								]
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-8 w-full max-w-6xl px-5 text-right text-xs text-muted",
						children: "© GEAR / CAPSTILLER"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-10 flex w-full max-w-6xl justify-center px-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://claim.gearup.wtf",
							className: "inline-flex min-w-[220px] items-center justify-center rounded-xl border-2 border-lime bg-lime/15 px-8 py-3.5 text-base font-black tracking-wide text-lime transition hover:bg-lime hover:text-black",
							children: "og GEAR claim"
						})
					})
				]
			}),
			toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-lime/30 bg-lime/10 px-4 py-2 text-sm text-lime",
				children: toast
			}) : null
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, {});
}
//#endregion
export { Home as component };
