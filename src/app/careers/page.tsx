"use client";

import { SectionWrapper, SectionHeading } from "@/components/ui/shared";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  MapPin,
  Briefcase,
  ArrowRight,
  Heart,
  Zap,
  BookOpen,
  Globe,
  Coffee,
  Gamepad2,
} from "lucide-react";

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-Time",
    description: "Build and ship production features across React/Next.js frontends and Node.js backends.",
  },
  {
    title: "ML Engineer",
    team: "AI/ML",
    location: "Remote",
    type: "Full-Time",
    description: "Design, train, and deploy machine learning models for real-world production applications.",
  },
  {
    title: "DevOps Engineer",
    team: "Infrastructure",
    location: "Remote",
    type: "Full-Time",
    description: "Own CI/CD pipelines, cloud infrastructure, and monitoring across AWS and GCP.",
  },
  {
    title: "UI/UX Designer",
    team: "Design",
    location: "Remote",
    type: "Full-Time",
    description: "Craft developer-centric interfaces and design systems for SaaS products.",
  },
  {
    title: "React Native Developer",
    team: "Mobile",
    location: "Remote",
    type: "Contract",
    description: "Build cross-platform mobile applications with React Native for client projects.",
  },
];

const perks = [
  { icon: Globe, label: "Remote-First", description: "Work from anywhere in the world" },
  { icon: BookOpen, label: "Learning Budget", description: "$2K/year for courses & conferences" },
  { icon: Coffee, label: "Flexible Hours", description: "Async-friendly, results-driven" },
  { icon: Heart, label: "Health & Wellness", description: "Full health, dental & vision" },
  { icon: Gamepad2, label: "Hackathons", description: "Quarterly hack weeks to build cool stuff" },
  { icon: Zap, label: "Fast Growth", description: "Clear career paths and promotions" },
];

function JobCard({ job, index }: { job: typeof openings[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group p-6 rounded-xl bg-surface-light border border-surface-border hover:border-accent/30 transition-all card-glow"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-accent/10 text-accent rounded-full border border-accent/20">
              {job.team}
            </span>
            <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-surface-lighter text-muted rounded-full border border-surface-border">
              {job.type}
            </span>
          </div>
          <h3 className="font-mono font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
            {job.title}
          </h3>
          <p className="text-sm text-muted mb-3">{job.description}</p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1">
              <MapPin size={12} /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase size={12} /> {job.type}
            </span>
          </div>
        </div>
        <Link
          href="/contact"
          className="flex-shrink-0 p-2 rounded-lg border border-surface-border hover:border-accent/50 text-muted hover:text-accent transition-all"
        >
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function CareersPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
            // join us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-6">
            Build Your <span className="gradient-text">Career</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Join a team of world-class engineers building cutting-edge software for ambitious companies. Remote-first. No BS.
          </p>
        </motion.div>
      </section>

      {/* Perks */}
      <SectionWrapper className="max-w-5xl mx-auto px-6 !pt-0">
        <SectionHeading badge="{ perks }" title="Life at TenserLabs" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-surface-light border border-surface-border text-center"
            >
              <div className="w-10 h-10 mx-auto rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <perk.icon size={20} className="text-accent" />
              </div>
              <h4 className="font-mono font-semibold text-sm mb-1">{perk.label}</h4>
              <p className="text-xs text-muted">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Open Positions */}
      <SectionWrapper className="max-w-4xl mx-auto px-6">
        <SectionHeading
          badge="// open roles"
          title="Open Positions"
          description="We're always looking for exceptional engineers. If you don't see a fit, reach out anyway."
        />
        <div className="space-y-4">
          {openings.map((job, i) => (
            <JobCard key={job.title} job={job} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* General Application */}
      <SectionWrapper className="max-w-4xl mx-auto px-6">
        <div className="bg-surface-light border border-surface-border rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-mono mb-4">
            Don&apos;t see your role?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            We&apos;re always interested in meeting talented people. Send us your resume and
            tell us what you&apos;re passionate about.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all hover:shadow-[0_0_30px_rgba(108,99,255,0.3)]"
          >
            General Application
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
