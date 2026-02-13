"use client";

import { AnimatedCounter } from "@/components/ui/shared";

const stats = [
  { target: 120, label: "Projects Delivered" },
  { target: 85, label: "Happy Clients" },
  { target: 40, label: "Engineers" },
  { target: 6, label: "Years in Business" },
];

export default function StatsBar() {
  return (
    <section className="relative py-16 border-y border-surface-border bg-surface/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <AnimatedCounter key={s.label} target={s.target} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
