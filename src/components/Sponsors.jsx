const SPONSORS = [
  "NovaPay",
  "Ledgerly",
  "Plaid",
  "WiseWire",
  "Chainbank",
  "KYC.ai",
  "Vaultify",
  "Stellar Labs",
];

export default function Sponsors() {
  const row = [...SPONSORS, ...SPONSORS];

  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-14">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Backed by leaders in financial technology
      </p>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14">
          {row.map((name, i) => (
            <span
              key={i}
              className="font-display text-xl font-semibold whitespace-nowrap text-slate-500"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
