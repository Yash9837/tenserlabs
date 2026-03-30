"use client";

import { SectionWrapper, SectionHeading, TechBadge } from "@/components/ui/shared";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Code2,
  Cloud,
  Brain,
  Palette,
  Search,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";

/* =============== DEVICE MOCKUPS =============== */

function BrowserMockup() {
  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-900/90 shadow-2xl shadow-black/30 overflow-hidden">
      {/* Chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 border-b border-slate-700/60">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 ml-3 px-3 py-1 rounded-md bg-slate-900/60 text-[10px] text-slate-500 font-mono">
          https://your-app.com
        </div>
      </div>
      {/* UI Content */}
      <div className="p-4 space-y-3">
        {/* Nav */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-accent/30" />
            <div className="w-16 h-2 rounded bg-slate-700" />
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-1.5 rounded bg-slate-700/60" />
            <div className="w-8 h-1.5 rounded bg-slate-700/60" />
            <div className="w-12 h-5 rounded bg-accent/40 flex items-center justify-center">
              <span className="text-[7px] text-white/70 font-medium">Sign Up</span>
            </div>
          </div>
        </div>
        {/* Hero area */}
        <div className="h-20 rounded-lg bg-gradient-to-r from-accent/15 via-violet-500/10 to-accent/5 border border-slate-700/40 p-3 flex items-center">
          <div className="space-y-1.5">
            <div className="w-28 h-2.5 rounded bg-white/15" />
            <div className="w-20 h-1.5 rounded bg-slate-600/40" />
            <div className="w-14 h-4 rounded bg-accent/30 mt-1" />
          </div>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 rounded-lg bg-slate-800/70 border border-slate-700/30 p-2 space-y-1.5">
              <div className={`w-5 h-5 rounded ${i === 1 ? "bg-accent/25" : i === 2 ? "bg-emerald-500/20" : "bg-amber-500/20"}`} />
              <div className="w-full h-1.5 rounded bg-slate-700/50" />
              <div className="w-2/3 h-1 rounded bg-slate-700/30" />
            </div>
          ))}
        </div>
        {/* Table */}
        <div className="space-y-1.5">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between px-2 py-1.5 rounded bg-slate-800/40">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-16 h-1.5 rounded bg-slate-700/60" />
              </div>
              <div className="w-10 h-1.5 rounded bg-emerald-500/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="w-[200px] mx-auto rounded-[28px] border-2 border-slate-700/80 bg-slate-900/95 shadow-2xl shadow-black/40 overflow-hidden">
      {/* Notch */}
      <div className="flex justify-center pt-2 pb-1">
        <div className="w-20 h-5 rounded-full bg-slate-800 border border-slate-700/60" />
      </div>
      {/* Screen */}
      <div className="px-3 pb-4 space-y-2.5">
        {/* Status bar */}
        <div className="flex justify-between items-center px-1 pb-1">
          <span className="text-[8px] text-slate-500 font-mono">9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-1.5 rounded-sm bg-slate-600" />
            <div className="w-2 h-1.5 rounded-sm bg-slate-600" />
            <div className="w-4 h-2 rounded-sm bg-slate-600" />
          </div>
        </div>
        {/* Header */}
        <div className="flex items-center justify-between px-1">
          <span className="text-[10px] font-bold text-white/80">Home</span>
          <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/30" />
        </div>
        {/* Welcome card */}
        <div className="rounded-xl bg-gradient-to-br from-accent/20 to-violet-600/15 border border-slate-700/40 p-2.5">
          <div className="w-16 h-1.5 rounded bg-white/20 mb-1" />
          <div className="w-24 h-1 rounded bg-white/10" />
          {/* Mini chart */}
          <svg viewBox="0 0 120 35" className="w-full mt-2">
            <path
              d="M0,30 Q20,25 30,20 T60,12 T90,18 T120,5"
              fill="none"
              stroke="rgba(139,92,246,0.5)"
              strokeWidth="2"
            />
            <path
              d="M0,30 Q20,25 30,20 T60,12 T90,18 T120,5 L120,35 L0,35 Z"
              fill="rgba(139,92,246,0.08)"
            />
          </svg>
        </div>
        {/* List items */}
        {[
          { color: "bg-accent/20", w: "w-full" },
          { color: "bg-emerald-500/15", w: "w-4/5" },
          { color: "bg-amber-500/15", w: "w-3/4" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-800/60 border border-slate-700/30">
            <div className={`w-8 h-8 rounded-lg ${item.color} flex-shrink-0`} />
            <div className="flex-1 space-y-1">
              <div className={`${item.w} h-1.5 rounded bg-slate-700/60`} />
              <div className="w-2/3 h-1 rounded bg-slate-700/30" />
            </div>
            <div className="w-2 h-2 rounded-full bg-accent/30" />
          </div>
        ))}
        {/* Bottom nav */}
        <div className="flex justify-around pt-2 border-t border-slate-700/30">
          {[true, false, false, false].map((active, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-4 h-4 rounded-full ${active ? "bg-accent/50" : "bg-slate-700/50"}`} />
              <div className={`w-1 h-1 rounded-full ${active ? "bg-accent" : "opacity-0"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CodeWindowMockup() {
  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-900/90 shadow-2xl shadow-black/30 overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 border-b border-slate-700/60">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex ml-3 gap-0.5">
          <div className="px-3 py-1 rounded-t bg-slate-900/80 text-[9px] text-slate-400 font-mono border-b-2 border-accent/50">
            app.service.ts
          </div>
          <div className="px-3 py-1 rounded-t bg-slate-800/40 text-[9px] text-slate-600 font-mono">
            config.ts
          </div>
        </div>
      </div>
      {/* Code */}
      <div className="flex">
        {/* Line numbers */}
        <div className="py-3 px-2 text-right text-[10px] font-mono text-slate-700 leading-[1.8] select-none border-r border-slate-800">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        {/* Code content */}
        <div className="p-3 font-mono text-[10px] leading-[1.8] flex-1 overflow-hidden">
          <div><span className="text-violet-400">import</span> <span className="text-slate-500">{"{"}</span> <span className="text-emerald-400">createApp</span> <span className="text-slate-500">{"}"}</span> <span className="text-violet-400">from</span> <span className="text-amber-300">&apos;@tenserlabs/core&apos;</span></div>
          <div><span className="text-violet-400">import</span> <span className="text-slate-500">{"{"}</span> <span className="text-emerald-400">database</span><span className="text-slate-500">,</span> <span className="text-emerald-400">cache</span> <span className="text-slate-500">{"}"}</span> <span className="text-violet-400">from</span> <span className="text-amber-300">&apos;./config&apos;</span></div>
          <div className="text-slate-700">&nbsp;</div>
          <div><span className="text-violet-400">const</span> <span className="text-slate-300">app</span> <span className="text-slate-500">=</span> <span className="text-emerald-400">createApp</span><span className="text-slate-500">({"{"}</span></div>
          <div className="pl-4"><span className="text-slate-300">name</span><span className="text-slate-500">:</span> <span className="text-amber-300">&apos;production-api&apos;</span><span className="text-slate-500">,</span></div>
          <div className="pl-4"><span className="text-slate-300">database</span><span className="text-slate-500">,</span></div>
          <div className="pl-4"><span className="text-slate-300">cache</span><span className="text-slate-500">,</span></div>
          <div className="pl-4"><span className="text-slate-300">scaling</span><span className="text-slate-500">:</span> <span className="text-amber-300">&apos;auto&apos;</span><span className="text-slate-500">,</span></div>
          <div><span className="text-slate-500">{"}"})</span></div>
          <div className="text-slate-700">&nbsp;</div>
          <div><span className="text-violet-400">await</span> <span className="text-slate-300">app</span><span className="text-slate-500">.</span><span className="text-emerald-400">deploy</span><span className="text-slate-500">()</span></div>
          <div className="flex items-center gap-1.5 mt-0.5"><span className="text-emerald-400">✓</span> <span className="text-emerald-400/70">Build successful — 0 errors</span></div>
        </div>
      </div>
      {/* Terminal bar */}
      <div className="px-4 py-2 bg-slate-800/50 border-t border-slate-700/40 font-mono text-[9px] text-slate-500 flex items-center gap-2">
        <span className="text-emerald-400">$</span>
        <span>npm run deploy — production</span>
        <span className="ml-auto px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-[8px]">READY</span>
      </div>
    </div>
  );
}

/* =============== MAIN SERVICE CARDS =============== */

const coreServices = [
  {
    icon: Globe,
    title: "Web Applications",
    subtitle: "Your business, online",
    description:
      "Beautiful, fast websites and web apps that look great on every device. Whether it's a landing page, a customer dashboard, or a full platform — we build it to help you grow.",
    tech: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "Works perfectly on phones, tablets & desktops",
      "Lightning-fast load times",
      "Real-time updates & live features",
      "Built to rank well on Google",
    ],
    mockup: "browser",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    subtitle: "In your customers' pockets",
    description:
      "iOS and Android apps your customers will love using every day. Smooth animations, intuitive navigation, and a native feel — without building two separate apps.",
    tech: ["React Native", "Flutter", "iOS", "Android", "Firebase", "Expo"],
    features: [
      "One app for both iPhone & Android",
      "Smooth, native-feeling experience",
      "Works offline when needed",
      "Push notifications to keep users engaged",
    ],
    mockup: "phone",
  },
  {
    icon: Code2,
    title: "Custom Software",
    subtitle: "Built around your workflow",
    description:
      "Tailored systems that automate your processes, connect your tools, and handle growth. From internal tools to complex platforms — we build exactly what your business needs.",
    tech: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Kafka"],
    features: [
      "Automate repetitive tasks & save time",
      "Connect all your existing tools together",
      "Handle thousands of users without breaking",
      "Scales as your business grows",
    ],
    mockup: "code",
  },
];

const otherServices = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Reliable infrastructure that keeps your product fast, secure, and always online.",
    tech: ["AWS", "GCP", "Kubernetes", "Terraform"],
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description: "Smart features that learn from your data — chatbots, recommendations, predictions, and more.",
    tech: ["Python", "PyTorch", "OpenAI", "LangChain"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces your users actually enjoy using — intuitive, clean, and designed to convert.",
    tech: ["Figma", "Framer", "Storybook"],
  },
  {
    icon: Search,
    title: "Technical Consulting",
    description: "Expert advice on your tech stack, performance bottlenecks, and security — before problems happen.",
    tech: ["Architecture", "Performance", "Security"],
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Experienced developers who join your team and hit the ground running — no hiring headaches.",
    tech: ["Full-Stack", "Backend", "Frontend", "DevOps"],
  },
];

function CoreServiceCard({
  service,
  index,
}: {
  service: (typeof coreServices)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="group"
    >
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? "lg:[direction:rtl]" : ""}`}>
        {/* Mockup */}
        <div className={`${isReversed ? "lg:[direction:ltr]" : ""}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {service.mockup === "browser" && <BrowserMockup />}
            {service.mockup === "phone" && <PhoneMockup />}
            {service.mockup === "code" && <CodeWindowMockup />}
          </motion.div>
        </div>

        {/* Content */}
        <div className={`${isReversed ? "lg:[direction:ltr]" : ""}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 mb-4">
            <service.icon size={16} className="text-accent-light" />
            <span className="text-xs font-semibold text-accent-light uppercase tracking-wider">{service.subtitle}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            {service.title}
          </h3>

          <p className="text-slate-400 leading-relaxed mb-6">{service.description}</p>

          <ul className="space-y-2.5 mb-6">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-accent-light" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {service.tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SmallServiceCard({
  service,
  index,
}: {
  service: (typeof otherServices)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-accent/30 transition-all card-hover"
    >
      <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <service.icon size={20} className="text-accent-light" />
      </div>
      <h4 className="font-bold text-lg text-white mb-2 group-hover:text-accent-light transition-colors">
        {service.title}
      </h4>
      <p className="text-sm text-slate-400 leading-relaxed mb-4">{service.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {service.tech.map((t) => (
          <TechBadge key={t} name={t} />
        ))}
      </div>
    </motion.div>
  );
}

/* =============== PAGE =============== */

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-accent-light bg-accent/15 rounded-full border border-accent/25 mb-4">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
              What We <span className="gradient-text">Build</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              End-to-end engineering — from web and mobile apps to custom backend systems.
              We cover every layer of the stack.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services with Device Mockups */}
      <div className="max-w-6xl mx-auto px-6 space-y-24 py-16">
        {coreServices.map((s, i) => (
          <CoreServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>

      {/* Other Services */}
      <SectionWrapper className="max-w-6xl mx-auto px-6">
        <SectionHeading
          badge="Also"
          title="More Services"
          description="Beyond our core offerings, we provide specialized expertise across the full engineering spectrum."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((s, i) => (
            <SmallServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-800 via-[#1E1B4B]/50 to-slate-800 border border-slate-700/50 rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Ready to build something great?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll craft the perfect technical
            approach for your goals.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
