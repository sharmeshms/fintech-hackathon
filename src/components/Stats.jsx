import useReveal from "../hooks/useReveal";

const STATS = [
  { value: "1,000+", label: "Hackers" },
  { value: "$50K", label: "Prize pool" },
  { value: "48h", label: "To ship" },
  { value: "40+", label: "Mentors" },
];

export default function Stats() {
  const ref = useReveal();

  return (
    <section ref={ref} className="px-5 pb-20 lg:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="reveal flex flex-col items-center bg-ink-900/40 px-6 py-8"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <span className="font-display text-3xl font-bold text-white sm:text-4xl">
              {s.value}
            </span>
            <span className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-400">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
