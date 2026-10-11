import useReveal from "../hooks/useReveal";

const SCHEDULE = [
  {
    when: "Fri · Nov 20",
    time: "09:00",
    title: "Check-in & team matching",
    desc: "Grab your badge, meet the mentors and find teammates at the networking breakfast.",
  },
  {
    when: "Fri · Nov 20",
    time: "11:00",
    title: "Opening ceremony & track reveal",
    desc: "Problem statements go live. Judges share what they're looking for this year.",
  },
  {
    when: "Fri · Nov 20",
    time: "12:00",
    title: "Hacking begins",
    desc: "48-hour clock starts. Build, break, iterate — workshops run all night.",
  },
  {
    when: "Sat · Nov 21",
    time: "14:00",
    title: "Mentor office hours",
    desc: "1:1 sessions with engineers from Stripe, Plaid, Wise and leading fintech VCs.",
  },
  {
    when: "Sun · Nov 22",
    time: "12:00",
    title: "Code freeze & submissions",
    desc: "Lock your repo, record your demo and submit on the hackathon portal.",
  },
  {
    when: "Sun · Nov 22",
    time: "16:00",
    title: "Finals, demos & awards",
    desc: "Top 10 teams pitch live on stage. Winners announced and prizes awarded.",
  },
];

export default function Timeline() {
  const ref = useReveal();

  return (
    <section id="schedule" ref={ref} className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="reveal max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mint-400">
            Schedule
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            48 hours, minute by minute
          </h2>
        </div>

        <ol className="relative mt-12 border-l border-white/10 pl-8">
          {SCHEDULE.map((item, i) => (
            <li
              key={i}
              className="reveal relative pb-10 last:pb-0"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border border-mint-400/40 bg-ink-950">
                <span className="h-2 w-2 rounded-full bg-mint-400" />
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
                  {item.when}
                </span>
                <span className="font-mono text-sm font-semibold text-mint-400">
                  {item.time}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                {item.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
