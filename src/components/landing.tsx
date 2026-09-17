import { useState } from "react";
import { ChevronDown, Copy, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const GEAR_CA = "0x5880cD05605A549f1DAb01a53ca61Ee559244bD1";
const PAIR_CA = "0x2839a8e410e7b2d5a6eea467dd6f4774a824c16f";
const DEX_URL = `https://www.dextools.io/app/base/pair-explorer/${PAIR_CA}`;
const INVITE_URL = "https://base.app/invite/capzero/FPR4HYZ0";
const INVITE_CODE = "FPR4HYZ0";
const X_URL = "https://x.com/capstiller";
const TIKTOK_URL = "https://www.tiktok.com/@capstiller.base.eth?_r=1&_t=ZT-99gNTL7zwAI";
const YT_URL = "https://www.youtube.com/@capstiller";

const TICKER = ["GET ONCHAIN", "FIND A GEAR", "PLAY THE GAME", "BE BASED"];

const FAQS = [
  {
    id: "q-what",
    q: "What is Gear?",
    a: "Gear itself is the meme to get mechanics grinding. Like an idea to actually be useful. Gear token is just a means to prove that idea. Tokens used to drive IRL gears onchain are for the joy of the community who enjoy building and thinking about fun things. Gears are not intended to provide financial freedom they are intended to be useful for whatever you can do with them. IRL Gears are the tools used to drive humans onchain. After the mechanics get working, then humans are onchain.",
  },
  {
    id: "q-value",
    q: "Are IRL Gears Valuable?",
    a: "Yes, IRL Gears are valuable... well, depending on what you think value is anyway. Gears get lost on purpose and by accident to build the ultimate game with solid lore. The loss of IRL gears keep the onchain gears turning and the loss of onchain gears keep the IRL gears manufactured. So- if a gear is found, hang on to it you never know who might want it. Most have a QR code to scan. Use your smartphone to get onboard either onchain or to something CAPSTILLER thinks is based. With a bonus finders reward onchain if you ever meet the right mechanic.",
  },
  {
    id: "q-game",
    q: "What is the game?",
    a: "The Game... well, the game my friend is life... onchain!!! Gear is designed to cause the imagination to start turning in one direction. Forward... or backwards or upwards or longways... or anyways really, as long as they are attached and turning. It starts with CAPSTILLER's scavenger hunt. A game of wits or luck? Probably both! Easter eggs are great, but being based is better.",
  },
  {
    id: "q-cap",
    q: "Who is CAPSTILLER?",
    a: "CAPSTILLER is the totally Based layer zero, looking to bring the world onchain to have fun. Life is a game and he wants to play, anyway onchain will allow or possibly not. Who really knows... CAPSTILLER will.",
  },
  {
    id: "q-token",
    q: "What is the token?",
    a: "",
  },
] as const;

async function copyText(text: string) {
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

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function CopyChip({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="inline-flex w-fit items-center gap-1.5 rounded-md border border-line bg-chip px-2 py-1 font-mono text-xs font-semibold text-lime"
      onClick={async () => {
        await copyText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }}
    >
      <Copy className="size-3" />
      {copied ? "Copied" : (label ?? text)}
    </button>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/assets/gear-logo.png"
      alt="GEAR"
      className={cn("gear-logo h-12 w-auto object-contain object-left", className)}
    />
  );
}

export function Landing() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [menu, setMenu] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  function go(section: string, faq?: string) {
    setMenu(false);
    scrollToId(section);
    if (faq) {
      setTimeout(() => setOpenFaq(faq), 80);
    }
  }

  async function onCopy(text: string) {
    await copyText(text);
    setToast(`Copied: ${text}`);
    setTimeout(() => setToast(null), 1600);
  }

  return (
    <div className="min-h-dvh overflow-x-hidden bg-bg text-fg">
      <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex min-h-20 w-full max-w-6xl items-center justify-between gap-3 px-5 py-3">
          <button type="button" onClick={() => go("top")} aria-label="GEAR home">
            <Logo className="h-11 max-w-48 sm:h-14 sm:max-w-none" />
          </button>

          <nav className="hidden items-center gap-5 text-sm text-fg/85 md:flex">
            <button type="button" className="hover:text-lime" onClick={() => go("faq", "q-what")}>
              What is GEAR?
            </button>
            <button type="button" className="hover:text-lime" onClick={() => go("hold")}>
              Find a Gear
            </button>
            <button type="button" className="hover:text-lime" onClick={() => go("rack")}>
              Gear Rack
            </button>
            <button
              type="button"
              title="Who is CAPSTILLER?"
              className="shrink-0"
              onClick={() => go("faq", "q-cap")}
            >
              <img src="/assets/cap-hat.png" alt="CAP hat" className="cap-hat h-12 w-auto object-contain" />
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex flex-col items-end gap-1">
              <a
                href={INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-pill bg-lime px-4 py-2 text-sm font-bold text-bg hover:bg-lime-2"
              >
                Get Onchain
              </a>
              <div className="hidden items-center gap-1.5 text-xs text-muted sm:flex">
                My Invite Code:
                <button
                  type="button"
                  className="rounded-md border border-line bg-chip px-2 py-0.5 font-semibold text-lime"
                  onClick={() => onCopy(INVITE_CODE)}
                >
                  {INVITE_CODE}
                </button>
              </div>
            </div>
            <button
              type="button"
              className="rounded-md p-2 text-fg md:hidden"
              aria-label="Menu"
              onClick={() => setMenu((v) => !v)}
            >
              {menu ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
        {menu ? (
          <div className="border-t border-line bg-bg-2 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm">
              <button type="button" className="text-left" onClick={() => go("faq", "q-what")}>
                What is GEAR?
              </button>
              <button type="button" className="text-left" onClick={() => go("hold")}>
                Find a Gear
              </button>
              <button type="button" className="text-left" onClick={() => go("rack")}>
                Gear Rack
              </button>
              <button type="button" className="flex items-center gap-2 text-left" onClick={() => go("faq", "q-cap")}>
                <img src="/assets/cap-hat.png" alt="" className="cap-hat h-10 w-auto object-contain" />
                Who is CAPSTILLER?
              </button>
              <div className="flex items-center gap-2 pt-1 text-xs text-muted">
                Invite:
                <button
                  type="button"
                  className="rounded-md border border-line bg-chip px-2 py-1 font-semibold text-lime"
                  onClick={() => onCopy(INVITE_CODE)}
                >
                  {INVITE_CODE}
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main id="top">
        <section className="mx-auto grid w-full min-w-0 max-w-6xl items-center gap-10 overflow-x-hidden px-5 py-16 md:grid-cols-2 md:py-20">
          <div className="min-w-0">
            <span className="mb-4 inline-block rounded-md bg-lime/10 px-2.5 py-1 text-xs font-bold tracking-widest text-lime">
              ON BASE
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Life is a game. Play
              <br />
              it onchain.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted md:text-lg">
              GEAR is for driving fun onchain — one scavenger hunt at a time.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-pill bg-red px-5 py-3 font-bold text-fg hover:bg-red-2"
              >
                Find a Gear
              </button>
              <a
                href={DEX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-pill border-2 border-green px-5 py-2.5 font-bold text-green hover:bg-green/10"
              >
                Trade GEAR
              </a>
            </div>
            <div className="mt-6 flex min-w-0 flex-col items-start gap-2 sm:flex-row sm:items-center">
              <span className="shrink-0 text-sm text-muted">Gear:</span>
              <code className="break-all font-mono text-xs text-fg/80 sm:text-sm">{GEAR_CA}</code>
              <CopyChip text={GEAR_CA} label="Copy" />
            </div>
          </div>
          <div className="mx-auto flex w-full min-w-0 max-w-sm justify-center">
            <img
              src="/assets/hero-cap.png"
              alt="CAP mosaic"
              className="aspect-square w-full rounded-full border-4 border-line object-cover object-center"
            />
          </div>
        </section>

        <div className="relative w-full overflow-hidden border-y border-line bg-bg-2">
          <div className="gear-marquee">
            {[0, 1].map((copy) => (
              <div key={copy} className="gear-marquee-track" aria-hidden={copy === 1}>
                {TICKER.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="whitespace-nowrap text-sm font-bold tracking-widest text-lime"
                  >
                    ⚙️ {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section id="hold" className="scroll-mt-24 py-20">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 md:grid-cols-2">
            <img
              src="/assets/hold-trade.jpg"
              alt="Hands passing an IRL GEAR token"
              className="h-full min-h-64 w-full rounded-lg object-cover md:min-h-96"
            />
            <div>
              <div className="mb-2 text-xs font-bold tracking-widest text-lime">HOLD OR TRADE</div>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                Did you find a gear?
              </h2>
              <p className="mb-3 text-muted">
                Gear token is bringing the world onchain, one gear at a time. Hometown or visit town, gears
                get lost. It's ok though because its FUN to get them back. Anyway we can.
              </p>
              <p className="mb-6 text-muted">
                If you found one-or two hang on to them or trade them to a friend. There will be many
                varieties, and tradable back to a good mechanic for a gear token.
              </p>
              <a
                href={DEX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-pill bg-red px-5 py-3 font-bold text-fg hover:bg-red-2"
              >
                Trade GEAR →
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-bg-2 py-20">
          <div className="mx-auto w-full max-w-6xl px-5">
            <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto flex max-w-3xl flex-col gap-2.5">
              {FAQS.map((item) => {
                const open = openFaq === item.id;
                return (
                  <article
                    key={item.id}
                    id={item.id}
                    className="overflow-hidden rounded-xl border border-line bg-surface"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-base font-semibold"
                      onClick={() => setOpenFaq(open ? null : item.id)}
                    >
                      {item.q}
                      <ChevronDown
                        className={cn("size-5 shrink-0 text-lime transition-transform", open && "rotate-180")}
                      />
                    </button>
                    {open ? (
                      item.id === "q-token" ? (
                        <div className="min-w-0 space-y-3 px-5 pb-5 font-mono text-sm text-fg/85">
                          <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                            <span className="text-muted">Gear:</span>
                            <code className="break-all">{GEAR_CA}</code>
                            <CopyChip text={GEAR_CA} label="Copy" />
                          </div>
                          <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                            <span className="text-muted">Gear/WETH:</span>
                            <code className="break-all">{PAIR_CA}</code>
                            <CopyChip text={PAIR_CA} label="Copy" />
                          </div>
                          <p className="font-sans text-muted">liquidity locked until 2034</p>
                        </div>
                      ) : (
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                      )
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="rack" className="scroll-mt-24 py-20">
          <div className="mx-auto w-full max-w-6xl px-5">
            <div className="mb-2 text-center text-xs font-bold tracking-widest text-lime">GEAR RACK</div>
            <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight md:text-4xl">
              Want to see where the mechanics work?
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href={DEX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-line bg-surface-2 p-4 text-center transition hover:-translate-y-1 hover:border-muted"
              >
                <img src="/assets/rack-dex.jpg" alt="GEARscreener" className="aspect-square w-full rounded-xl object-cover" />
                <span className="mt-3 block font-semibold">DEXTools</span>
              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-line bg-surface-2 p-4 text-center transition hover:-translate-y-1 hover:border-muted"
              >
                <img src="/assets/rack-x.jpg" alt="CAPSTILLER on X" className="aspect-square w-full rounded-xl object-cover" />
                <span className="mt-3 block font-semibold">X @capstiller</span>
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-line bg-surface-2 p-4 text-center transition hover:-translate-y-1 hover:border-muted"
              >
                <img src="/assets/rack-tiktok.jpg" alt="CAP on TikTok" className="aspect-square w-full rounded-xl object-cover" />
                <span className="mt-3 block font-semibold">TikTok</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-bold">
              <a href={X_URL} target="_blank" rel="noopener noreferrer" className="text-lime">
                X @capstiller
              </a>
              <a href={YT_URL} target="_blank" rel="noopener noreferrer" className="text-red">
                YouTube
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="text-lime">
                TikTok
              </a>
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted">
              Gear token is intended to drive the IRL gears, designed and made by CAPSTILLER and his human.
              Mechanics in CAPSTILLER's game are experimental and could change to make the game more fun
              and interesting. IRL gears and Gear token are designed as a trading game, connecting real world
              gears onchain, and have no intention to supply financial gain or loss. Let's get onchain and
              have some fun.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:grid-cols-3">
          <div>
            <Logo className="mb-5 h-16 max-w-full sm:h-20" />
            <p className="mb-3 max-w-xs text-lg font-semibold leading-snug text-fg sm:text-xl">
              Life is a game.
              <br />
              Play it onchain.
            </p>
            <a href={DEX_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-lime">
              View on DEXTools
            </a>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold tracking-widest text-lime">QUICK LINKS</h3>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <button type="button" className="text-left" onClick={() => go("faq", "q-what")}>
                What is GEAR?
              </button>
              <button type="button" className="text-left" onClick={() => go("hold")}>
                Find a Gear
              </button>
              <button type="button" className="text-left" onClick={() => go("rack")}>
                Gear Rack
              </button>
              <button type="button" className="text-left" onClick={() => go("faq")}>
                FAQ
              </button>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold tracking-widest text-lime">COMMUNITY</h3>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href={X_URL} target="_blank" rel="noopener noreferrer">
                @capstiller on X
              </a>
              <a href={YT_URL} target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 w-full max-w-6xl px-5 text-right text-xs text-muted">
          © GEAR / CAPSTILLER
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-6xl justify-center px-5">
          <a
            href="https://claim.gearup.wtf"
            className="inline-flex min-w-[220px] items-center justify-center rounded-xl border-2 border-lime bg-lime/15 px-8 py-3.5 text-base font-black tracking-wide text-lime transition hover:bg-lime hover:text-black"
          >
            og GEAR claim
          </a>
        </div>
      </footer>

      {toast ? (
        <div className="pointer-events-none fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-lime/30 bg-lime/10 px-4 py-2 text-sm text-lime">
          {toast}
        </div>
      ) : null}
    </div>
  );
}
