import useReveal from "../hooks/useReveal";

const TRACKS = [
  {
    title: "Payments & Wallets",
    desc: "Real-time rails, cross-border transfers, instant checkout and programmable wallets.",
    tag: "PAY",
    accent: "from-mint-400/25",
  },
  {
    title: "Blockchain & DeFi",
    desc: "Smart contracts, tokenisation, stablecoins and decentralised lending protocols.",
    tag: "DEFI",
    accent: "from-aqua-400/25",
  },
  {
    title: "Open Banking",
    desc: "Account aggregation, consented data sharing and embedded finance APIs.",
    tag: "API",
    accent: "from-indigo-400/25",
  },
  {
    title: "AI in Finance",
    desc: "Fraud detection, robo-advisory, credit scoring and conversational banking.",
    tag: "AI",
    accent: "from-fuchsia-400/25",
  },
  {
    title: "RegTech & Security",
    desc: "KYC/AML automation, identity verification and privacy-preserving compliance.",
    tag: "SEC",
    accent: "from-amber-400/25",
  },
  {
    title: "Wealth & InsurTech",
    desc: "Investing apps, micro-insurance and personal finance automation for everyone.",
    tag: "WLT",
    accent: "from-rose-400/25",
  },
];

export default function Tracks() {
  const ref = useReveal();

  return (
    <section id="tracks" ref={ref} className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mint-400">
            Tracks
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pick your frontier
          </h2>
          <p className="mt-4 text-slate-300">
            Six challenge tracks spanning the full fintech stack. Choose one, form
            a team and turn an idea into a working demo in a weekend.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t, i) => (
            <article
              key={t.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint-400/40"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${t.accent} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative">
                <span className="inline-flex rounded-lg border border-white/10 bg-ink-950/60 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-mint-400">
                  {t.tag}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {t.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
