"use client";

import { SectionWrapper, SectionHeading } from "@/components/ui/shared";
import PageHero from "@/components/ui/PageHero";
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

const milestones = [
  { year: "2020", title: "Founded", description: "Started as a 3-person dev shop with a vision for quality engineering." },
  { year: "2021", title: "First Enterprise Client", description: "Landed NovaPay — our first large-scale payment infrastructure project." },
  { year: "2022", title: "Team of 20", description: "Expanded to 20 engineers across 4 countries, going fully remote." },
  { year: "2023", title: "AI/ML Practice", description: "Launched our AI/ML division, delivering 15+ AI-powered products." },
  { year: "2024", title: "100 Projects", description: "Crossed the 100 project milestone with a 98% client satisfaction rate." },
  { year: "2025", title: "40+ Engineers", description: "Grew to 40+ team members serving clients across 6 industries." },
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
      className="p-6 rounded-xl bg-white border border-slate-200 hover:border-accent/30 transition-all card-hover"
    >
      <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
        <value.icon size={20} className="text-accent-dark" />
      </div>
      <h3 className="font-semibold text-lg mb-2 text-slate-900">{value.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <PageHero
        label="About Us"
        title={
          <>
            We are
            <br />
            TenserLabs
          </>
        }
        description="Born from a passion for clean code and meaningful products, TenserLabs started as a small team of engineers who believed software could be built better — faster, leaner, and with genuine craftsmanship."
      />

      {/* Our Story */}
      <SectionWrapper className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-slate-900">Our Story</h2>
            <div className="space-y-4 text-slate-500 leading-relaxed">
              <p>
                Founded in 2020, TenserLabs began as a boutique development shop with
                a singular focus: build software that actually works at scale. No
                bloated codebases, no over-engineered solutions — just precise,
                purposeful engineering.
              </p>
              <p>
                Today, we&apos;re a team of 40+ engineers, designers, and strategists
                who&apos;ve delivered 120+ projects across FinTech, HealthTech, SaaS,
                E-Commerce, and more.
              </p>
              <p>
                Our mission is simple: <strong className="text-slate-900">transform ambitious ideas into scalable, production-grade digital products.</strong>
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-accent/10 via-[#F3F4EE] to-accent/5 border border-slate-200 p-10 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-extrabold gradient-text mb-2">120+</div>
                <p className="text-slate-500 text-sm">Projects Delivered</p>
                <div className="mt-6 flex justify-center gap-4">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">40+</div>
                    <p className="text-xs text-slate-500">Engineers</p>
                  </div>
                  <div className="w-px bg-slate-200" />
                  <div>
                    <div className="text-2xl font-bold text-slate-900">6</div>
                    <p className="text-xs text-slate-500">Industries</p>
                  </div>
                  <div className="w-px bg-slate-200" />
                  <div>
                    <div className="text-2xl font-bold text-slate-900">5+</div>
                    <p className="text-xs text-slate-500">Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="max-w-container mx-auto px-6">
        <SectionHeading badge="Our Journey" title="Milestones" description="Key moments that shaped TenserLabs." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {milestones.map((m, i) => (
            <motion.div key={m.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-white border border-slate-200 text-center">
              <div className="text-2xl font-extrabold gradient-text mb-2">{m.year}</div>
              <h4 className="font-semibold text-sm text-slate-900 mb-1">{m.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="max-w-container mx-auto px-6">
        <SectionHeading badge="Core Values" title="What Drives Us" description="Five principles that guide every line of code and every client relationship." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {values.map((v, i) => (
            <ValueCard key={v.title} value={v} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper className="max-w-container mx-auto px-6">
        <SectionHeading badge="How We Work" title="Our Process" description="A proven methodology from discovery to delivery and beyond." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {process.map((step, i) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3 relative">
                <step.icon size={22} className="text-accent-dark" />
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">{i + 1}</span>
              </div>
              <h4 className="font-semibold text-sm text-slate-900 mb-1">{step.title}</h4>
              <p className="text-xs text-slate-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Tech Philosophy */}
      <SectionWrapper className="max-w-4xl mx-auto px-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-slate-900">Our Tech Philosophy</h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
            We believe in <strong className="text-slate-900">clean, maintainable code</strong> over
            clever hacks. We contribute to open-source. We write tests. We document.
            We review each other&apos;s code. We deploy with confidence. Our engineering
            culture is built on <strong className="text-slate-900">transparency, continuous
            learning, and mutual respect</strong> — because great software is always a
            team effort.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
