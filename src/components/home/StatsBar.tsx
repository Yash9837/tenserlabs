"use client";

import { AnimatedCounter } from "@/components/ui/shared";
import { Briefcase, Users, Code2, Clock } from "lucide-react";

const stats = [
  { target: 120, label: "Projects Delivered", icon: Briefcase },
  { target: 85, label: "Happy Clients", icon: Users },
  { target: 40, label: "Engineers", icon: Code2 },
  { target: 6, label: "Years in Business", icon: Clock },
];

export default function StatsBar() {
  return (
    <section className="relative py-16 border-y border-slate-800 bg-[#0F172A]">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <s.icon size={20} className="text-accent-light mb-1" />
              <AnimatedCounter target={s.target} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
