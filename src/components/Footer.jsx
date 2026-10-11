export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-mint-400 to-aqua-400 font-display text-base font-bold text-ink-950">
            F
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-white">
              FinHack<span className="text-mint-400">'26</span>
            </p>
            <p className="text-xs text-slate-500">
              The fintech hackathon · Nov 20–22, 2026
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <a href="#tracks" className="hover:text-mint-400">
            Tracks
          </a>
          <a href="#schedule" className="hover:text-mint-400">
            Schedule
          </a>
          <a href="#prizes" className="hover:text-mint-400">
            Prizes
          </a>
          <a href="#faq" className="hover:text-mint-400">
            FAQ
          </a>
        </div>

        <p className="text-xs text-slate-500">© 2026 FinHack. All rights reserved.</p>
      </div>
    </footer>
  );
}
