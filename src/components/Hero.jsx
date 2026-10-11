import useCountdown from "../hooks/useCountdown";
import useReveal from "../hooks/useReveal";

function CountBox({ value, label }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm sm:px-6">
      <span className="font-display text-3xl font-bold tabular-nums text-white sm:text-4xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[11px] font-medium uppercase tracking-widest text-slate-400">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const { days, hours, minutes, seconds } = useCountdown();
  const ref = useReveal();

  return (
    <section
      id="top"
      ref={ref}
      className="relative px-5 pb-24 pt-36 sm:pt-44 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-mint-400/30 bg-mint-500/10 px-4 py-1.5 text-xs font-medium text-mint-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint-400" />
          48-hour fintech hackathon · Nov 20–22, 2026
        </div>

        <h1
          className="reveal mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.05s" }}
        >
          Build the future of
          <br />
          <span className="text-gradient">money &amp; finance</span>
        </h1>

        <p
          className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          style={{ animationDelay: "0.15s" }}
        >
          FinHack 2026 brings together 1,000+ engineers, designers and founders to
          ship real products across payments, open banking, DeFi and AI-driven
          finance. No idea required — just bring your skills.
        </p>

        <div
          className="reveal mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.25s" }}
        >
          <a
            href="#register"
            className="rounded-full bg-gradient-to-r from-mint-400 to-aqua-400 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-xl shadow-mint-500/20 transition-transform hover:-translate-y-0.5"
          >
            Register your team
          </a>
          <a
            href="#tracks"
            className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
          >
            Explore tracks
          </a>
        </div>

        <div
          className="reveal mt-14 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.35s" }}
        >
          <CountBox value={days} label="days" />
          <CountBox value={hours} label="hrs" />
          <CountBox value={minutes} label="min" />
          <CountBox value={seconds} label="sec" />
        </div>

        <p
          className="reveal mt-5 text-xs text-slate-500"
          style={{ animationDelay: "0.4s" }}
        >
          Applications close Nov 10, 2026 · $50,000 prize pool
        </p>
      </div>
    </section>
  );
}
