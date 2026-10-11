import { useState } from "react";
import useReveal from "../hooks/useReveal";

export default function Register() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    track: "Payments & Wallets",
    size: "2–4",
  });

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="register" ref={ref} className="px-5 py-20 lg:px-8">
      <div className="reveal mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900">
        <div className="grid md:grid-cols-2">
          <div className="relative p-8 sm:p-10">
            <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-mint-500/20 blur-[90px]" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                Register for FinHack 2026
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                Free to attend. Applications close November 10 — secure your spot
                and we'll send the prep kit, track previews and team-matching
                details.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {[
                  "Confirmed within 48 hours",
                  "Team matching if you're solo",
                  "Meals, swag & 24/7 support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-mint-400/20 text-xs text-mint-400">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 bg-ink-950/40 p-8 sm:p-10 md:border-l md:border-t-0">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-mint-400/15 text-2xl text-mint-400">
                  ✓
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  You're on the list!
                </h3>
                <p className="mt-2 max-w-xs text-sm text-slate-400">
                  Thanks {form.name || "hacker"} — check your inbox for a
                  confirmation and next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <Field
                  label="Full name"
                  placeholder="Ada Lovelace"
                  value={form.name}
                  onChange={update("name")}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update("email")}
                  required
                />
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-slate-400">
                    Preferred track
                  </label>
                  <select
                    value={form.track}
                    onChange={update("track")}
                    className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-mint-400"
                  >
                    {[
                      "Payments & Wallets",
                      "Blockchain & DeFi",
                      "Open Banking",
                      "AI in Finance",
                      "RegTech & Security",
                      "Wealth & InsurTech",
                    ].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-slate-400">
                    Team size
                  </label>
                  <div className="flex gap-2">
                    {["Solo", "2–4", "5+"].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, size: s }))}
                        className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                          form.size === s
                            ? "border-mint-400 bg-mint-400/15 text-mint-400"
                            : "border-white/10 text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-gradient-to-r from-mint-400 to-aqua-400 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-mint-500/20 transition-transform hover:-translate-y-0.5"
                >
                  Submit application
                </button>
                <p className="text-center text-xs text-slate-500">
                  By registering you agree to the code of conduct.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-slate-400">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-mint-400"
      />
    </div>
  );
}
