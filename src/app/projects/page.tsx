"use client";

import { useState } from "react";
import { SectionWrapper, TechBadge } from "@/components/ui/shared";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const industries = ["All", "FinTech", "HealthTech", "Logistics", "EdTech", "E-Commerce", "SaaS", "Rental"];

const projects = [
  {
    title: "ThriveUp",
    industry: "SaaS",
    description: "A comprehensive event management application enabling seamless event creation, discovery, and attendee management with real-time updates.",
    challenge: "Create a unified platform that handles event lifecycle from creation to post-event analytics.",
    results: "Processed 5,000+ events with 99.9% uptime in the first year.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "WebSockets"],
    link: "https://thriveup-web.vercel.app/",
    color: "bg-blue-500",
  },
  {
    title: "Tenzi Jeans",
    industry: "E-Commerce",
    description: "Premium wholesale fashion web platform with modern catalog management and B2B order processing systems.",
    challenge: "Digitize a traditional wholesale fashion business with a modern, mobile-first web presence.",
    results: "3x increase in wholesale inquiries and 60% reduction in order processing time.",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "CMS"],
    link: "https://www.tenzijeans.com/",
    color: "bg-emerald-500",
  },
  {
    title: "LeadFlow CRM",
    industry: "SaaS",
    description: "An intelligent CRM platform for real estate businesses with lead tracking, AI-powered analytics, and automated follow-ups.",
    challenge: "Build a specialized CRM that understands real estate workflows and automates lead nurturing.",
    results: "40% improvement in lead conversion rates for early adopters.",
    tech: ["React", "Node.js", "PostgreSQL", "AI/ML", "Redis"],
    link: "https://lead-flow-mauve.vercel.app/landing",
    color: "bg-orange-500",
  },
  {
    title: "CamRX",
    industry: "Rental",
    description: "Camera and equipment rental application with seamless booking, inventory management, and integrated payments.",
    challenge: "Create a frictionless rental experience for camera equipment with complex availability management.",
    results: "Reduced booking friction by 70% and doubled monthly rental revenue.",
    tech: ["Next.js", "Stripe", "Firebase", "Tailwind CSS"],
    link: "https://camrx.vercel.app/",
    color: "bg-pink-500",
  },
  {
    title: "NovaPay Gateway",
    industry: "FinTech",
    description: "Real-time payment gateway processing thousands of transactions per second with multi-currency support and fraud detection.",
    challenge: "Build a payment system that handles high-throughput transactions with sub-100ms latency.",
    results: "Processing 10,000+ TPS with 99.99% uptime and $0 fraud losses.",
    tech: ["Node.js", "Kafka", "PostgreSQL", "AWS", "Docker"],
    link: "#",
    color: "bg-amber-500",
  },
  {
    title: "MedSync Platform",
    industry: "HealthTech",
    description: "HIPAA-compliant patient management platform with telemedicine, EHR integration, and appointment scheduling.",
    challenge: "Create a healthcare platform that unifies patient records, scheduling, and telemedicine while maintaining HIPAA compliance.",
    results: "Reduced administrative overhead by 50% across 12 clinics.",
    tech: ["React", "Python", "FastAPI", "GCP", "PostgreSQL"],
    link: "#",
    color: "bg-teal-500",
  },
  {
    title: "ShipTrack Dashboard",
    industry: "Logistics",
    description: "Real-time fleet tracking dashboard with route optimization, driver analytics, and predictive maintenance alerts.",
    challenge: "Provide fleet managers with real-time visibility into vehicle locations, driver behavior, and maintenance needs.",
    results: "20% reduction in fuel costs and 35% decrease in vehicle downtime.",
    tech: ["Next.js", "Go", "Redis", "Mapbox", "WebSockets"],
    link: "#",
    color: "bg-indigo-500",
  },
  {
    title: "LearnUp AI Tutor",
    industry: "EdTech",
    description: "AI-powered tutoring app with adaptive learning paths, real-time progress tracking, and personalized content recommendations.",
    challenge: "Create an engaging, AI-driven learning experience that adapts to each student's pace and style.",
    results: "60% improvement in student engagement and 45% faster learning outcomes.",
    tech: ["React Native", "OpenAI API", "Firebase", "Python"],
    link: "#",
    color: "bg-rose-500",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group rounded-xl bg-slate-800/50 border border-slate-700/50 overflow-hidden card-hover"
    >
      <div className="h-44 bg-slate-800 relative flex items-center justify-center overflow-hidden">
        <div className={`absolute top-4 left-4 w-3 h-3 rounded-full ${project.color} opacity-60`} />
        <span className="text-xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors">
          {project.title}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-accent-light uppercase tracking-wider">{project.industry}</span>
        </div>
        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

        <div className="space-y-2 mb-4">
          <div className="text-xs font-medium text-accent-light">Challenge:</div>
          <p className="text-xs text-slate-400">{project.challenge}</p>
          <div className="text-xs font-medium text-accent-light">Results:</div>
          <p className="text-xs text-slate-400">{project.results}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <TechBadge key={t} name={t} />
          ))}
        </div>

        {project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-dark transition-colors font-medium"
          >
            View Live <ArrowRight size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.industry === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-accent-light bg-accent/15 rounded-full border border-accent/25 mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Real products we&apos;ve built — shipped, scaled, and making an impact across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setActiveFilter(ind)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeFilter === ind
                  ? "bg-accent text-white shadow-sm"
                  : "bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-accent/30"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <SectionWrapper className="max-w-container mx-auto px-6 !pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </SectionWrapper>
    </div>
  );
}
