"use client";

import { useState } from "react";
import { SectionWrapper, SectionHeading, TechBadge } from "@/components/ui/shared";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const industries = ["All", "FinTech", "HealthTech", "Logistics", "EdTech", "E-Commerce", "SaaS", "Rental"];

const projects = [
  {
    title: "ThriveUp",
    industry: "SaaS",
    description: "A comprehensive event management application enabling seamless event creation, discovery, and attendee management with real-time updates.",
    challenge: "Create a unified platform that handles event lifecycle from creation to post-event analytics.",
    solution: "Built a real-time event platform with Next.js featuring live attendee tracking, automated notifications, and comprehensive analytics dashboards.",
    results: "Processed 5,000+ events with 99.9% uptime in the first year.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "WebSockets"],
    link: "https://thriveup-web.vercel.app/",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Tenzi Jeans",
    industry: "E-Commerce",
    description: "Premium wholesale fashion web platform with modern catalog management and B2B order processing systems.",
    challenge: "Digitize a traditional wholesale fashion business with a modern, mobile-first web presence.",
    solution: "Designed and built a sleek catalog-driven website with wholesale inquiry management, product categorization, and responsive image galleries.",
    results: "3x increase in wholesale inquiries and 60% reduction in order processing time.",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "CMS"],
    link: "https://www.tenzijeans.com/",
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "LeadFlow CRM",
    industry: "SaaS",
    description: "An intelligent CRM platform for real estate businesses with lead tracking, AI-powered analytics, and automated follow-ups.",
    challenge: "Build a specialized CRM that understands real estate workflows and automates lead nurturing.",
    solution: "Developed an AI-powered CRM with intelligent lead scoring, automated follow-up sequences, pipeline visualization, and predictive analytics.",
    results: "40% improvement in lead conversion rates for early adopters.",
    tech: ["React", "Node.js", "PostgreSQL", "AI/ML", "Redis"],
    link: "https://lead-flow-mauve.vercel.app/landing",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "CamRX",
    industry: "Rental",
    description: "Camera and equipment rental application with seamless booking, inventory management, and integrated payments.",
    challenge: "Create a frictionless rental experience for camera equipment with complex availability management.",
    solution: "Built a full-stack rental platform with real-time availability calendars, Stripe payment integration, and automated inventory tracking.",
    results: "Reduced booking friction by 70% and doubled monthly rental revenue.",
    tech: ["Next.js", "Stripe", "Firebase", "Tailwind CSS"],
    link: "https://camrx.vercel.app/",
    gradient: "from-pink-500/20 to-violet-500/20",
  },
  {
    title: "NovaPay Gateway",
    industry: "FinTech",
    description: "Real-time payment gateway processing thousands of transactions per second with multi-currency support and fraud detection.",
    challenge: "Build a payment system that handles high-throughput transactions with sub-100ms latency.",
    solution: "Architected a distributed payment gateway using event-driven microservices with Kafka, PostgreSQL for ACID transactions, and ML-based fraud detection.",
    results: "Processing 10,000+ TPS with 99.99% uptime and $0 fraud losses.",
    tech: ["Node.js", "Kafka", "PostgreSQL", "AWS", "Docker"],
    link: "#",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    title: "MedSync Platform",
    industry: "HealthTech",
    description: "HIPAA-compliant patient management platform with telemedicine, EHR integration, and appointment scheduling.",
    challenge: "Create a healthcare platform that unifies patient records, scheduling, and telemedicine while maintaining HIPAA compliance.",
    solution: "Built a secure, modular healthcare platform with React frontend, FastAPI backend, end-to-end encryption, and seamless EHR integration.",
    results: "Reduced administrative overhead by 50% across 12 clinics.",
    tech: ["React", "Python", "FastAPI", "GCP", "PostgreSQL"],
    link: "#",
    gradient: "from-teal-500/20 to-green-500/20",
  },
  {
    title: "ShipTrack Dashboard",
    industry: "Logistics",
    description: "Real-time fleet tracking dashboard with route optimization, driver analytics, and predictive maintenance alerts.",
    challenge: "Provide fleet managers with real-time visibility into vehicle locations, driver behavior, and maintenance needs.",
    solution: "Developed a real-time dashboard with Mapbox integration, WebSocket-powered live tracking, and Go-based microservices for data processing.",
    results: "20% reduction in fuel costs and 35% decrease in vehicle downtime.",
    tech: ["Next.js", "Go", "Redis", "Mapbox", "WebSockets"],
    link: "#",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "LearnUp AI Tutor",
    industry: "EdTech",
    description: "AI-powered tutoring app with adaptive learning paths, real-time progress tracking, and personalized content recommendations.",
    challenge: "Create an engaging, AI-driven learning experience that adapts to each student's pace and style.",
    solution: "Built a mobile app with OpenAI-powered adaptive tutoring, gamified progress tracking, and real-time analytics for educators.",
    results: "60% improvement in student engagement and 45% faster learning outcomes.",
    tech: ["React Native", "OpenAI API", "Firebase", "Python"],
    link: "#",
    gradient: "from-rose-500/20 to-pink-500/20",
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
      className="group rounded-xl bg-surface-light border border-surface-border hover:border-accent/30 overflow-hidden transition-all duration-300 card-glow"
    >
      <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
        <div className="absolute inset-0 dot-bg opacity-30" />
        <span className="font-mono text-xl font-bold text-foreground/80 relative z-10">
          {`{ ${project.title} }`}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono text-accent uppercase tracking-wider">{project.industry}</span>
        </div>
        <h3 className="font-mono font-semibold text-xl mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

        {/* Case Study Preview */}
        <div className="space-y-2 mb-4">
          <div className="text-xs font-mono text-accent/70">Challenge:</div>
          <p className="text-xs text-muted">{project.challenge}</p>
          <div className="text-xs font-mono text-accent/70">Results:</div>
          <p className="text-xs text-muted">{project.results}</p>
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
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors font-medium"
          >
            View Live <ExternalLink size={14} />
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
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
            // portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-6">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Real products we&apos;ve built — shipped, scaled, and making an impact across industries.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setActiveFilter(ind)}
              className={`px-4 py-2 text-sm font-mono rounded-lg transition-all ${
                activeFilter === ind
                  ? "bg-accent text-white"
                  : "bg-surface-lighter text-muted border border-surface-border hover:border-accent/30 hover:text-foreground"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <SectionWrapper className="max-w-7xl mx-auto px-6 !pt-0">
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
