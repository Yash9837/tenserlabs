"use client";

const clients = [
  "NovaPay",
  "MedSync",
  "ShipTrack",
  "LearnUp",
  "CartFlow",
  "ThriveUp",
  "Tenzi Jeans",
  "CamRX",
];

export default function ClientMarquee() {
  return (
    <section className="py-16 border-y border-slate-800 bg-[#0F172A] overflow-hidden">
      <div className="text-center mb-8">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">
          Trusted by innovative companies
        </span>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-10" />

        <div className="marquee-track">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center"
            >
              <div className="px-8 py-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-accent/30 transition-colors group">
                <span className="text-lg font-semibold text-slate-600 group-hover:text-accent-light whitespace-nowrap transition-colors">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
