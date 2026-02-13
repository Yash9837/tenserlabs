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
    <section className="py-16 border-y border-surface-border bg-surface/30 overflow-hidden">
      <div className="text-center mb-8">
        <span className="text-xs font-mono text-muted uppercase tracking-widest">
          Trusted by innovative companies
        </span>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="marquee-track">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center"
            >
              <div className="px-8 py-4 rounded-xl bg-surface-light/50 border border-surface-border">
                <span className="font-mono text-lg font-semibold text-muted/60 whitespace-nowrap">
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
