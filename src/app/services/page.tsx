"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  Cloud,
  Brain,
  Palette,
  Search,
  Users,
  ArrowUpRight,
  ChevronDown,
  Plus,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";

/* =============== CORE SERVICES =============== */

const coreServices = [
  {
    icon: Globe,
    label: "01 — Web",
    title: "Web Applications",
    description:
      "Fast, responsive websites and web apps built with modern frameworks. Landing pages, SaaS dashboards, marketplaces — we build them all to convert, scale, and feel premium.",
    highlights: [
      "Pixel-perfect on phone, tablet & desktop",
      "Sub-second load times, SEO-ready",
      "Real-time features with WebSockets",
      "Accessible by default",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=700&fit=crop",
  },
  {
    icon: Smartphone,
    label: "02 — Mobile",
    title: "Mobile Applications",
    description:
      "iOS and Android apps that feel native, ship from one codebase, and get loved in the reviews. From consumer apps to internal tools, we handle the full lifecycle.",
    highlights: [
      "Native-feel on iOS and Android",
      "Shared codebase — ship twice as fast",
      "Offline-first with background sync",
      "Push notifications and analytics baked in",
    ],
    tech: ["React Native", "Flutter", "Expo", "Firebase", "Swift"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=700&fit=crop",
  },
  {
    icon: Code2,
    label: "03 — Custom",
    title: "Custom Software",
    description:
      "Purpose-built systems for your exact workflow — internal tools, APIs, integrations, automation, AI pipelines. We talk to your team, map the domain, and ship.",
    highlights: [
      "Automations that save real hours",
      "Seamless integrations between every tool",
      "Handles production-grade load",
      "Scales as your business scales",
    ],
    tech: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Kafka"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=700&fit=crop",
  },
];

/* =============== SECONDARY SERVICES =============== */

const otherServices = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Reliable infrastructure that keeps your product fast, secure, and always online.",
    tags: ["AWS", "GCP", "Kubernetes", "Terraform"],
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description:
      "Smart features that learn from your data — chatbots, recommendations, predictions.",
    tags: ["Python", "PyTorch", "OpenAI", "LangChain"],
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Interfaces your users enjoy — intuitive, clean, and designed to convert.",
    tags: ["Figma", "Framer", "Storybook"],
  },
  {
    icon: Search,
    title: "Technical Consulting",
    description:
      "Expert advice on your stack, performance bottlenecks, and security — before problems appear.",
    tags: ["Architecture", "Performance", "Security"],
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description:
      "Senior engineers who embed with your team and hit the ground running.",
    tags: ["Full-Stack", "Backend", "Frontend", "DevOps"],
  },
  {
    icon: Code2,
    title: "MVP Sprint",
    description:
      "Four weeks from idea to live MVP — for founders who need to move yesterday.",
    tags: ["Strategy", "Design", "Build", "Ship"],
  },
];

/* =============== PROCESS =============== */

const process = [
  {
    step: "01",
    title: "Discover",
    body:
      "We sit with your team, map the problem, the users, and the constraints. You walk away with a scoped brief and a clear shape of the work.",
  },
  {
    step: "02",
    title: "Design",
    body:
      "UX flows, wireframes, and a high-fidelity prototype. Everything is clickable, reviewable, and signed off before a single line of production code is written.",
  },
  {
    step: "03",
    title: "Build",
    body:
      "Two-week sprints with live demos every Friday. You see progress, we collect feedback, and the product shapes itself in public.",
  },
  {
    step: "04",
    title: "Ship",
    body:
      "CI/CD, staging, production. We harden, monitor, document, and hand over — or stick around as a long-term engineering partner.",
  },
];

/* =============== FAQ =============== */

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "An MVP sprint ships in 4 weeks. Full products typically run 8–16 weeks. We'll scope the timeline in discovery and commit to milestones you can count on.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. About 60% of our clients are seed-to-Series-B startups and 40% are enterprise teams augmenting internal engineering. We tune the engagement to the stage.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We do an audit first (1–2 weeks), document the architecture, flag risks, and propose a stabilization plan before shipping new features.",
  },
  {
    q: "What does pricing look like?",
    a: "Fixed-scope projects for well-defined work, monthly retainers for ongoing product teams. We share a precise quote after the discovery call — no estimates that balloon.",
  },
];

/* =============== COMPONENTS =============== */

function CoreServiceRow({
  service,
  index,
}: {
  service: (typeof coreServices)[0];
  index: number;
}) {
  const isReversed = index % 2 !== 0;
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Image */}
      <div className={`${isReversed ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[5/4] rounded-2xl overflow-hidden bg-accent/15 border border-slate-200">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 border border-white/60 backdrop-blur-sm shadow-sm">
            <Icon size={14} className="text-accent-dark" />
            <span className="text-xs font-medium text-slate-900">
              {service.label}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${isReversed ? "lg:order-1" : ""}`}>
        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.15] mb-5">
          {service.title}
        </h3>
        <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
          {service.description}
        </p>

        <ul className="space-y-3 mb-8">
          {service.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-3 text-sm text-slate-700"
            >
              <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-dark" />
              </span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-8">
          {service.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-3 py-1 text-xs font-medium text-slate-700 bg-[#F3F4EE] rounded-full border border-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 pl-2 pr-5 py-2 rounded-full border border-slate-300 hover:border-accent/60 text-slate-900 text-sm font-medium transition-colors"
        >
          <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center group-hover:bg-accent-dark transition-colors">
            <ArrowUpRight size={14} strokeWidth={2.4} />
          </span>
          Start a {service.title.split(" ")[0].toLowerCase()} project
        </Link>
      </div>
    </motion.article>
  );
}

function SmallServiceCard({
  service,
  index,
}: {
  service: (typeof otherServices)[0];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group rounded-2xl bg-white border border-slate-200 p-7 hover:border-accent/40 hover:shadow-lg hover:shadow-slate-900/5 transition-all"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center">
          <Icon size={18} className="text-accent-dark" />
        </div>
        <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
          <Plus size={14} />
        </span>
      </div>
      <h4 className="font-semibold text-lg text-slate-900 mb-2">
        {service.title}
      </h4>
      <p className="text-sm text-slate-600 leading-relaxed mb-5">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] font-medium text-slate-500 tracking-wide"
          >
            {t}
          </span>
        )).reduce<React.ReactNode[]>((acc, el, i) => {
          if (i > 0) acc.push(<span key={`dot-${i}`} className="text-slate-300">·</span>);
          acc.push(el);
          return acc;
        }, [])}
      </div>
    </motion.div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      className="w-full text-left py-5 focus:outline-none"
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className={`text-base md:text-lg font-medium transition-colors ${
            open ? "text-slate-900" : "text-slate-700"
          }`}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-slate-500"
        >
          <ChevronDown size={18} />
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 10 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.25 }}
            className="text-sm text-slate-600 leading-relaxed overflow-hidden"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
}

/* =============== PAGE =============== */

export default function ServicesPage() {
  return (
    <div className="bg-[#FAFAF7]">
      {/* Hero */}
      <PageHero
        label="Service"
        title={
          <>
            What We
            <br />
            Build
          </>
        }
        description="End-to-end engineering — from web and mobile apps to custom backend systems, AI features, and dedicated squads. We cover every layer of the stack."
        actions={
          <>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-accent hover:bg-accent-dark text-white text-sm font-medium transition-all shadow-sm"
            >
              Start a Project
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 rounded-full border border-slate-300 hover:border-accent/60 text-slate-700 hover:text-accent-dark text-sm font-medium transition-all"
            >
              See Our Work
            </Link>
          </>
        }
      />

      {/* Core services — alternating rows */}
      <section className="py-16 md:py-24">
        <div className="max-w-container mx-auto px-6 space-y-24 md:space-y-32">
          {coreServices.map((s, i) => (
            <CoreServiceRow key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* How we work — process */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-200">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 mb-14">
            <div className="flex items-start gap-4">
              <span className="text-sm text-slate-500 mt-2">Process</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
                How We Work,
                <br />
                Sprint by Sprint
              </h2>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed md:pt-6">
              Transparent, iterative, and predictable. You see working software
              every week — never a black box, never a surprise on delivery day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-2xl bg-[#FAFAF7] border border-slate-200 p-6"
              >
                <div className="text-xs font-semibold tracking-[0.18em] text-accent-dark mb-4">
                  {p.step}
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">
                  {p.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Also we build — secondary services */}
      <section className="py-20 md:py-28">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 mb-14">
            <div className="flex items-start gap-4">
              <span className="text-sm text-slate-500 mt-2">Also</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
                More Ways
                <br />
                We Can Help
              </h2>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed md:pt-6">
              Beyond our core offering, we embed with your team on anything that
              needs senior engineering muscle — from cloud infra to AI features
              to full-squad augmentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((s, i) => (
              <SmallServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-start gap-4 mb-10">
            <span className="text-sm text-slate-500 mt-2">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              Questions, answered.
            </h2>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-container mx-auto px-6">
          <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-[#8FA77B] via-[#7C9A6B] to-[#6B8A5C] p-10 md:p-16 text-center">
            <div
              className="absolute inset-0 opacity-[0.09] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-[1.15]">
                Ready to build
                <br />
                something great?
              </h2>
              <p className="text-white/80 text-[15px] leading-relaxed max-w-xl mx-auto mb-8">
                Tell us about your project and we&apos;ll come back with a
                precise scope, a timeline, and the team who&apos;ll ship it.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#F3F4EE] hover:bg-white text-slate-900 text-sm font-medium transition-all"
                >
                  Start a Project
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 text-sm font-medium transition-all"
                >
                  See Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
