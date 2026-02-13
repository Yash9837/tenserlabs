"use client";

import { SectionWrapper, SectionHeading } from "@/components/ui/shared";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Eye,
  Shield,
  Zap,
  Handshake,
  Search,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  HeartHandshake,
} from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We push boundaries and explore emerging technologies to deliver cutting-edge solutions." },
  { icon: Eye, title: "Transparency", description: "Open communication, honest timelines, and clear deliverables — no surprises." },
  { icon: Shield, title: "Quality", description: "Clean code, thorough testing, and production-grade architecture in every project." },
  { icon: Zap, title: "Speed", description: "Fast iteration cycles without compromising on code quality or user experience." },
  { icon: Handshake, title: "Partnership", description: "We don't just build for you — we build with you. Your success is our success." },
];

const process = [
  { icon: Search, title: "Discovery", description: "Deep dive into your vision, goals, and constraints." },
  { icon: Palette, title: "Design", description: "UI/UX wireframes and interactive prototypes." },
  { icon: Code2, title: "Develop", description: "Agile sprints with continuous delivery." },
  { icon: TestTube2, title: "Test", description: "Automated testing, QA, and security audits." },
  { icon: Rocket, title: "Deploy", description: "CI/CD pipelines and zero-downtime deployments." },
  { icon: HeartHandshake, title: "Support", description: "Ongoing maintenance, monitoring, and optimization." },
];

function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-xl bg-surface-light border border-surface-border hover:border-accent/30 transition-all card-glow"
    >
      <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
        <value.icon size={20} className="text-accent" />
      </div>
      <h3 className="font-mono font-semibold text-lg mb-2">{value.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{value.description}</p>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
            // about us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-6">
            We are <span className="gradient-text">TenserLabs</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Born from a passion for clean code and meaningful products, TenserLabs
            started as a small team of engineers who believed software could be built
            better — faster, leaner, and with genuine craftsmanship.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <SectionWrapper className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-mono mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Founded in 2020, TenserLabs began as a boutique development shop with
                a singular focus: build software that actually works at scale. No
                bloated codebases, no over-engineered solutions — just precise,
                purposeful engineering.
              </p>
              <p>
                Today, we&apos;re a team of 40+ engineers, designers, and strategists
                who&apos;ve delivered 120+ projects across FinTech, HealthTech, SaaS,
                E-Commerce, and more. From Series-A startups to Fortune 500
                enterprises, our code runs in production, serving millions of users
                worldwide.
              </p>
              <p>
                Our mission is simple: <strong className="text-foreground">transform ambitious ideas into scalable, production-grade digital products.</strong> We don&apos;t just write code — we engineer solutions.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-surface-light border border-surface-border p-8 font-mono text-sm">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="space-y-2 text-muted">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">tenserLabs</span> = {"{"}</p>
                <p className="pl-4"><span className="text-green-400">founded</span>: <span className="text-orange-300">&quot;2020&quot;</span>,</p>
                <p className="pl-4"><span className="text-green-400">team</span>: <span className="text-orange-300">40</span>,</p>
                <p className="pl-4"><span className="text-green-400">projects</span>: <span className="text-orange-300">120</span>,</p>
                <p className="pl-4"><span className="text-green-400">mission</span>: <span className="text-orange-300">&quot;Build better software&quot;</span>,</p>
                <p className="pl-4"><span className="text-green-400">status</span>: <span className="text-orange-300">&quot;Shipping 🚀&quot;</span>,</p>
                <p>{"};"}</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="{ core values }"
          title="What Drives Us"
          description="Five principles that guide every line of code and every client relationship."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {values.map((v, i) => (
            <ValueCard key={v.title} value={v} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Process Timeline */}
      <SectionWrapper className="max-w-5xl mx-auto px-6">
        <SectionHeading
          badge="// how we work"
          title="Our Process"
          description="A proven methodology from discovery to delivery and beyond."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3 relative">
                <step.icon size={22} className="text-accent" />
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h4 className="font-mono font-semibold text-sm mb-1">{step.title}</h4>
              <p className="text-xs text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Tech Philosophy */}
      <SectionWrapper className="max-w-4xl mx-auto px-6">
        <div className="bg-surface-light border border-surface-border rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-mono mb-6">
            Our Tech Philosophy
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            We believe in <strong className="text-foreground">clean, maintainable code</strong> over
            clever hacks. We contribute to open-source. We write tests. We document.
            We review each other&apos;s code. We deploy with confidence. Our engineering
            culture is built on <strong className="text-foreground">transparency, continuous
            learning, and mutual respect</strong> — because great software is always a
            team effort.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
