import useReveal from "../hooks/useReveal";

const PRIZES = [
  {
    place: "1st",
    amount: "$25,000",
    perks: ["AWS + Stripe credits", "Accelerator fast-track", "Mentorship program"],
    highlight: true,
  },
  {
    place: "2nd",
    amount: "$15,000",
    perks: ["Cloud credits", "Hardware bundle", "Investor intros"],
  },
  {
    place: "3rd",
    amount: "$10,000",
    perks: ["Cloud credits", "Swag pack", "Community spotlight"],
  },
];

const SPECIAL = [
  { title: "Best AI in Finance", amount: "$3,000" },
  { title: "Most Inclusive Design", amount: "$2,000" },
  { title: "Best Use of Open Banking API", amount: "$2,000" },
];

export default function Prizes() {
  const ref = useReveal();

  return (
    <section id="prizes" ref={ref} className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mint-400">
            Prizes
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            $50,000 in cash &amp; credits
          </h2>
          <p className="mt-4 text-slate-300">
            Plus track-specific bounties, sponsor APIs and fast-track interviews
            with partner engineering teams.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PRIZES.map((p, i) => (
            <div
              key={p.place}
              className={`reveal relative rounded-3xl border p-7 ${
                p.highlight
                  ? "border-mint-400/50 bg-gradient-to-b from-mint-500/15 to-transparent shadow-2xl shadow-mint-500/10 md:-mt-4"
                  : "border-white/10 bg-white/5"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-mint-400 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-950">
                  Grand prize
                </span>
              )}
              <span className="font-display text-sm font-semibold uppercase tracking-widest text-slate-400">
                {p.place} place
              </span>
              <p className="mt-3 font-display text-4xl font-bold text-white">
                {p.amount}
              </p>
              <ul className="mt-6 space-y-2.5">
                {p.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2.5 text-sm text-slate-300"
                  >
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-mint-400/20 text-[10px] text-mint-400">
                      ✓
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {SPECIAL.map((s, i) => (
            <div
              key={s.title}
              className="reveal flex items-center justify-between rounded-2xl border border-white/10 bg-ink-900/40 px-6 py-5"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="text-sm font-medium text-slate-200">
                {s.title}
              </span>
              <span className="font-display text-lg font-bold text-mint-400">
                {s.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
