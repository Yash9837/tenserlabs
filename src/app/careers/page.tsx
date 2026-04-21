"use client";

import { SectionWrapper, SectionHeading } from "@/components/ui/shared";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Zap,
  BookOpen,
  Globe,
  Coffee,
  Gamepad2,
  Rocket,
  IndianRupee,
  Home,
  Calendar,
  TrendingUp,
  Users,
  Target,
  Mail,
  Phone,
  Code2,
  GitBranch,
  Bug,
  Layers,
} from "lucide-react";


/* ─── Perks ─── */
const perks = [
  { icon: Globe, label: "Remote-First", description: "Work from anywhere in the world" },
  { icon: BookOpen, label: "Learning Budget", description: "$2K/year for courses & conferences" },
  { icon: Coffee, label: "Flexible Hours", description: "Async-friendly, results-driven" },
  { icon: Heart, label: "Health & Wellness", description: "Full health, dental & vision" },
  { icon: Gamepad2, label: "Hackathons", description: "Quarterly hack weeks to build cool stuff" },
  { icon: Zap, label: "Fast Growth", description: "Clear career paths and promotions" },
];

/* ─── Intern role highlights ─── */
const internHighlights = [
  {
    icon: Home,
    title: "Work from Home",
    desc: "Fully remote — work from anywhere in India",
  },
  {
    icon: Calendar,
    title: "Start Immediately",
    desc: "No waiting period — begin as soon as you're onboarded",
  },
  {
    icon: IndianRupee,
    title: "₹3K – ₹20K/month",
    desc: "Fixed stipend + performance-based incentives",
  },
  {
    icon: TrendingUp,
    title: "10-15% Commission",
    desc: "Earn commission on every deal you close — on top of stipend",
  },
];

/* ─── Tech Intern highlights ─── */
const techInternHighlights = [
  {
    icon: Home,
    title: "Work from Home",
    desc: "Fully remote — work from anywhere in India",
  },
  {
    icon: Calendar,
    title: "Start Immediately",
    desc: "No waiting period — begin as soon as you're onboarded",
  },
  {
    icon: IndianRupee,
    title: "₹5K – ₹10K/month",
    desc: "Fixed stipend based on skills & performance",
  },
  {
    icon: TrendingUp,
    title: "Real Projects",
    desc: "Work on live client projects — not dummy tasks",
  },
];

const whatTechInternWillDo = [
  {
    icon: Code2,
    text: "Build and maintain web/mobile applications using React, Next.js, Node.js, or React Native.",
  },
  {
    icon: GitBranch,
    text: "Collaborate with senior engineers via Git, code reviews, and agile sprints.",
  },
  {
    icon: Bug,
    text: "Debug, test, and optimize features for production-grade performance.",
  },
  {
    icon: Layers,
    text: "Learn and apply modern tech stacks, APIs, databases, and cloud services.",
  },
];

const whatYoullDo = [
  {
    icon: Target,
    text: "Hunt for clients — startups, small businesses, local brands — who need software or app development.",
  },
  {
    icon: Mail,
    text: "Reach out via LinkedIn, email, and calls to generate qualified leads.",
  },
  {
    icon: Phone,
    text: "Qualify leads and schedule meetings with our founding team.",
  },
  {
    icon: Users,
    text: "Collaborate closely with the founding team to close deals and grow Tenser Labs.",
  },
];


/* ─── Page ─── */
export default function CareersPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-accent-light bg-accent/15 rounded-full border border-accent/25 mb-4">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Build <span className="gradient-text">with us</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Join a team of world-class engineers building cutting-edge software
              for ambitious companies. Remote-first. No BS.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Perks ── */}
      <SectionWrapper className="max-w-5xl mx-auto px-6 !pt-0">
        <SectionHeading badge="Perks" title="Life at TenserLabs" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center card-hover"
            >
              <div className="w-10 h-10 mx-auto rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <perk.icon size={20} className="text-accent-light" />
              </div>
              <h4 className="font-semibold text-sm mb-1 text-white">
                {perk.label}
              </h4>
              <p className="text-xs text-slate-400">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ────────────────────────────────────────
           INTERNSHIP — Business Development (Sales)
         ──────────────────────────────────────── */}
      <SectionWrapper className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-slate-900 via-[#1E1B4B]/60 to-slate-900">
          {/* background glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 rounded-full border border-emerald-500/25">
                  <Rocket size={12} /> Internship
                </span>
                <span className="px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                  Hiring Now
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Business Development{" "}
                <span className="gradient-text">(Sales) Intern</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-10">
                Are you a go-getter with a passion for sales and technology?
                Help us connect with exciting clients and grow our IT consulting
                business.
              </p>
            </motion.div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {internHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-slate-700/40 backdrop-blur-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <h.icon size={18} className="text-accent-light" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {h.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {h.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* What you'll do */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                What You&apos;ll Do
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {whatYoullDo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-slate-700/30"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={16} className="text-accent-light" />
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="/careers/apply?role=sales"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 text-base"
              >
                Apply Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <span className="text-sm text-slate-500">
                Takes less than 2 minutes
              </span>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ────────────────────────────────────────
           INTERNSHIP — Tech Intern
         ──────────────────────────────────────── */}
      <SectionWrapper className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-[#0C1A2E]/60 to-slate-900">
          {/* background glow */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-cyan-500/15 text-cyan-400 rounded-full border border-cyan-500/25">
                  <Code2 size={12} /> Internship
                </span>
                <span className="px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20">
                  Hiring Now
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Tech{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-accent-light bg-clip-text text-transparent">
                  (Development) Intern
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-10">
                Passionate about code and building products? Join our engineering
                team, work on real client projects, and level up your skills with
                hands-on mentorship.
              </p>
            </motion.div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {techInternHighlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-slate-700/40 backdrop-blur-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                    <h.icon size={18} className="text-cyan-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {h.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {h.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* What you'll do */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                What You&apos;ll Do
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {whatTechInternWillDo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-slate-700/30"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={16} className="text-cyan-400" />
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="/careers/apply?role=tech"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/25 text-base"
              >
                Apply Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <span className="text-sm text-slate-500">
                Takes less than 2 minutes
              </span>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── General Application ── */}
      <SectionWrapper className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-800 via-[#1E1B4B]/50 to-slate-800 border border-slate-700/50 rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">
            Don&apos;t see your role?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            We&apos;re always interested in meeting talented people. Send us your
            resume and tell us what you&apos;re passionate about.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            General Application
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
