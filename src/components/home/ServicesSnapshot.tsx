"use client";

import { SectionWrapper, SectionHeading } from "@/components/ui/shared";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Code2, Cloud, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";

/* ---------- Mini Device Visuals ---------- */

function MiniBrowser() {
  return (
    <div className="w-full max-w-[240px] rounded-lg border border-slate-700/60 bg-slate-900/80 overflow-hidden shadow-lg shadow-black/20">
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800/80 border-b border-slate-700/50">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
        <div className="flex-1 ml-2 h-3 rounded bg-slate-900/50" />
      </div>
      <div className="p-2.5 space-y-1.5">
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded bg-accent/20" />
          <div className="flex-1 space-y-1">
            <div className="w-3/4 h-1.5 rounded bg-slate-700/60" />
            <div className="w-1/2 h-1 rounded bg-slate-700/30" />
          </div>
        </div>
        <div className="h-10 rounded bg-gradient-to-r from-accent/10 to-violet-500/5 border border-slate-700/30" />
        <div className="grid grid-cols-3 gap-1">
          <div className="h-6 rounded bg-slate-800/60 border border-slate-700/20" />
          <div className="h-6 rounded bg-slate-800/60 border border-slate-700/20" />
          <div className="h-6 rounded bg-slate-800/60 border border-slate-700/20" />
        </div>
      </div>
    </div>
  );
}

function MiniPhone() {
  return (
    <div className="w-[100px] mx-auto rounded-[16px] border-2 border-slate-700/70 bg-slate-900/90 overflow-hidden shadow-lg shadow-black/20">
      <div className="flex justify-center pt-1">
        <div className="w-12 h-3 rounded-full bg-slate-800 border border-slate-700/50" />
      </div>
      <div className="px-1.5 pb-2 pt-1 space-y-1">
        <div className="h-10 rounded-lg bg-gradient-to-br from-accent/15 to-violet-600/10 border border-slate-700/30 p-1">
          <svg viewBox="0 0 60 20" className="w-full h-full">
            <path d="M0,18 Q10,14 20,12 T40,6 T60,2" fill="none" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" />
          </svg>
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-1 px-1 py-0.5 rounded bg-slate-800/50">
            <div className="w-3 h-3 rounded bg-accent/15 flex-shrink-0" />
            <div className="flex-1 space-y-0.5">
              <div className="w-full h-1 rounded bg-slate-700/50" />
              <div className="w-2/3 h-0.5 rounded bg-slate-700/25" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniCodeWindow() {
  return (
    <div className="w-full max-w-[240px] rounded-lg border border-slate-700/60 bg-slate-900/80 overflow-hidden shadow-lg shadow-black/20">
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800/80 border-b border-slate-700/50">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
        <span className="ml-2 text-[7px] text-slate-600 font-mono">service.ts</span>
      </div>
      <div className="p-2.5 font-mono text-[8px] leading-[1.6] space-y-0.5">
        <div><span className="text-violet-400">const</span> <span className="text-slate-300">app</span> <span className="text-slate-500">=</span> <span className="text-emerald-400">create</span><span className="text-slate-500">({"{"}</span></div>
        <div className="pl-2"><span className="text-slate-400">db</span><span className="text-slate-600">,</span> <span className="text-slate-400">cache</span><span className="text-slate-600">,</span></div>
        <div className="pl-2"><span className="text-slate-400">scale</span><span className="text-slate-600">:</span> <span className="text-amber-300">&apos;auto&apos;</span></div>
        <div><span className="text-slate-500">{"}"})</span></div>
        <div><span className="text-violet-400">await</span> <span className="text-slate-300">app</span><span className="text-slate-500">.</span><span className="text-emerald-400">deploy</span><span className="text-slate-500">()</span></div>
        <div className="flex items-center gap-1 pt-0.5"><span className="text-emerald-400 text-[7px]">✓</span><span className="text-emerald-400/60">deployed</span></div>
      </div>
    </div>
  );
}

function MiniCloud() {
  return (
    <div className="w-full max-w-[200px] flex flex-col items-center gap-2">
      <div className="flex gap-2">
        {["AWS", "GCP", "K8s"].map((label) => (
          <div key={label} className="px-2 py-1 rounded bg-slate-800/70 border border-slate-700/40 text-[8px] font-mono text-slate-500">
            {label}
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="flex gap-1.5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-8 h-8 rounded-lg bg-slate-800/60 border border-slate-700/30 flex items-center justify-center">
            <div className={`w-3 h-3 rounded-full ${i === 1 ? "bg-emerald-500/30" : i === 2 ? "bg-accent/20" : "bg-amber-500/20"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniAI() {
  return (
    <div className="w-full max-w-[200px] space-y-1.5">
      <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/30">
        <div className="w-4 h-4 rounded-full bg-accent/20" />
        <div className="flex-1 space-y-0.5">
          <div className="w-full h-1 rounded bg-slate-700/50" />
          <div className="w-3/4 h-1 rounded bg-slate-700/30" />
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-accent/5 border border-accent/15">
        <div className="w-4 h-4 rounded-full bg-accent/30 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
        </div>
        <div className="flex-1 space-y-0.5">
          <div className="w-full h-1 rounded bg-accent/20" />
          <div className="w-2/3 h-1 rounded bg-accent/10" />
        </div>
      </div>
      <div className="flex justify-center gap-1 pt-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`w-1 rounded-full bg-accent/${i <= 3 ? "40" : "15"}`} style={{ height: `${6 + i * 3}px` }} />
        ))}
      </div>
    </div>
  );
}

/* ---------- Service Data ---------- */

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    description: "Beautiful, fast websites and dashboards that look great on every device and help your business grow online.",
    visual: MiniBrowser,
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS and Android apps your customers will love — smooth, intuitive, and built to keep them coming back.",
    visual: MiniPhone,
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Tailored systems that automate your workflows, connect your tools, and scale as your business grows.",
    visual: MiniCodeWindow,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Reliable infrastructure that runs itself — so your product stays fast, secure, and always online.",
    visual: MiniCloud,
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description: "Smart features that learn from your data — chatbots, recommendations, predictions, and more.",
    visual: MiniAI,
  },
];

/* ---------- List Row ---------- */

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-8 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-accent/30 transition-all duration-300 card-hover">
        {/* Visual */}
        <div className="flex-shrink-0 w-full md:w-[260px] flex items-center justify-center py-2 group-hover:-translate-y-1 transition-transform duration-500">
          <service.visual />
        </div>

        {/* Divider */}
        <div className="hidden md:block w-[1px] h-24 bg-slate-700/50 group-hover:bg-accent/20 transition-colors" />

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <service.icon size={18} className="text-accent-light" />
            </div>
            <h3 className="font-bold text-xl text-white group-hover:text-accent-light transition-colors">
              {service.title}
            </h3>
          </div>
          <p className="text-slate-400 leading-relaxed mb-4 max-w-lg">
            {service.description}
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-accent-light font-medium hover:text-accent transition-colors"
          >
            Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- Section ---------- */

export default function ServicesSnapshot() {
  return (
    <SectionWrapper className="max-w-5xl mx-auto px-6">
      <SectionHeading
        badge="What We Do"
        title="Services"
        description="End-to-end engineering — from web and mobile apps to custom backend systems."
      />

      <div className="space-y-5">
        {services.map((s, i) => (
          <ServiceRow key={s.title} service={s} index={i} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 text-accent-light font-medium rounded-lg border border-accent/20 hover:border-accent/40 transition-all text-sm"
        >
          View all services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
