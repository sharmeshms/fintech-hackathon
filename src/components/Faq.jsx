import { useState } from "react";
import useReveal from "../hooks/useReveal";

const FAQS = [
  {
    q: "Who can participate?",
    a: "Students, professionals and career-switchers 18+. Teams of 2–4 are ideal, but you can register solo and we'll help you match at the opening ceremony.",
  },
  {
    q: "Do I need a fintech idea beforehand?",
    a: "No. Tracks and problem statements are revealed at the opening ceremony. Many winning teams form and pick an idea on day one.",
  },
  {
    q: "Is it free to attend?",
    a: "Yes — registration is completely free. Meals, snacks, swag and 24/7 caffeine are provided for the full 48 hours.",
  },
  {
    q: "Can it be virtual?",
    a: "FinHack 2026 is hybrid. Join in person at the innovation campus or hack remotely with mentor sessions and demos streamed live.",
  },
  {
    q: "What should I bring?",
    a: "Your laptop, charger, any hardware you need and your ID for check-in. We'll provide power, Wi-Fi and a place to crash between sprints.",
  },
  {
    q: "How are projects judged?",
    a: "A panel scores on innovation, technical execution, real-world impact and demo quality. Everything submitted must be built during the event.",
  },
];

export default function Faq() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" ref={ref} className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mint-400">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="reveal overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-white">{item.q}</span>
                  <span
                    className={`grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-white/15 text-mint-400 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-300">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
