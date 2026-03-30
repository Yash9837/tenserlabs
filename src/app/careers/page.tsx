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
    description: "Craft intuitive interfaces and design systems for SaaS products.",
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
      className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-accent/30 transition-all card-hover"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-accent/10 text-accent-light rounded-full border border-accent/20">
              {job.team}
            </span>
            <span className="px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-slate-800 text-slate-400 rounded-full border border-slate-700">
              {job.type}
            </span>
          </div>
          <h3 className="font-bold text-lg mb-2 text-white group-hover:text-accent transition-colors">
            {job.title}
          </h3>
          <p className="text-sm text-slate-400 mb-3">{job.description}</p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
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
          className="flex-shrink-0 px-4 py-2 rounded-lg bg-accent/10 text-accent-light text-sm font-medium hover:bg-accent hover:text-white transition-all"
        >
          Apply
        </Link>
      </div>
    </motion.div>
  );
}

export default function CareersPage() {
  return (
    <div>
      {/* Hero — Dark */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-accent-light bg-accent/15 rounded-full border border-accent/25 mb-4">
              Careers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Build <span className="gradient-text">with us</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Join a team of world-class engineers building cutting-edge software for ambitious companies. Remote-first. No BS.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
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
              <h4 className="font-semibold text-sm mb-1 text-white">{perk.label}</h4>
              <p className="text-xs text-slate-400">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Open Positions */}
      <SectionWrapper className="max-w-4xl mx-auto px-6">
        <SectionHeading
          badge="Open Roles"
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
        <div className="bg-gradient-to-br from-slate-800 via-[#1E1B4B]/50 to-slate-800 border border-slate-700/50 rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">
            Don&apos;t see your role?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            We&apos;re always interested in meeting talented people. Send us your resume and
            tell us what you&apos;re passionate about.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            General Application
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
