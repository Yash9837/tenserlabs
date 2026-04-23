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
    <section className="py-16 border-y border-slate-200 bg-[#FAFAF7] overflow-hidden">
      <div className="text-center mb-8">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">
          Trusted by innovative companies
        </span>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAF7] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAF7] to-transparent z-10" />

        <div className="marquee-track">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center"
            >
              <div className="px-8 py-4 rounded-xl bg-white/80 border border-slate-200/80 hover:border-accent/30 transition-colors group">
                <span className="text-lg font-semibold text-slate-600 group-hover:text-accent-dark whitespace-nowrap transition-colors">
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
