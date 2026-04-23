"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const industries = [
  "All",
  "SaaS",
  "E-Commerce",
  "Rental",
  "FinTech",
  "HealthTech",
  "Logistics",
  "EdTech",
];

type Project = {
  title: string;
  industry: string;
  description: string;
  challenge: string;
  results: string;
  tech: string[];
  link: string;
  image: string;
  live: boolean;
};

const projects: Project[] = [
  {
    title: "ThriveUp",
    industry: "SaaS",
    description:
      "A comprehensive event management application enabling seamless event creation, discovery, and attendee management with real-time updates.",
    challenge:
      "Create a unified platform that handles event lifecycle from creation to post-event analytics.",
    results: "Processed 5,000+ events with 99.9% uptime in the first year.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "WebSockets"],
    link: "https://thriveup-web.vercel.app/",
    image: "/images/thriveup.png",
    live: true,
  },
  {
    title: "Tenzi Jeans",
    industry: "E-Commerce",
    description:
      "Premium wholesale fashion web platform with modern catalog management and B2B order processing systems.",
    challenge:
      "Digitize a traditional wholesale fashion business with a modern, mobile-first web presence.",
    results:
      "3× increase in wholesale inquiries and 60% reduction in order processing time.",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "CMS"],
    link: "https://www.tenzijeans.com/",
    image: "/images/tenzi.png",
    live: true,
  },
  {
    title: "LeadFlow CRM",
    industry: "SaaS",
    description:
      "An intelligent CRM platform for real estate businesses with lead tracking, AI-powered analytics, and automated follow-ups.",
    challenge:
      "Build a specialized CRM that understands real estate workflows and automates lead nurturing.",
    results: "40% improvement in lead conversion rates for early adopters.",
    tech: ["React", "Node.js", "PostgreSQL", "AI/ML", "Redis"],
    link: "https://lead-flow-mauve.vercel.app/landing",
    image: "/images/leadflow.png",
    live: true,
  },
  {
    title: "CamRX",
    industry: "Rental",
    description:
      "Camera and equipment rental application with seamless booking, inventory management, and integrated payments.",
    challenge:
      "Create a frictionless rental experience for camera equipment with complex availability management.",
    results:
      "Reduced booking friction by 70% and doubled monthly rental revenue.",
    tech: ["Next.js", "Stripe", "Firebase", "Tailwind CSS"],
    link: "https://camrx.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&h=700&fit=crop",
    live: true,
  },
  {
    title: "NovaPay Gateway",
    industry: "FinTech",
    description:
      "Real-time payment gateway processing thousands of transactions per second with multi-currency support and fraud detection.",
    challenge:
      "Build a payment system that handles high-throughput transactions with sub-100ms latency.",
    results: "Processing 10,000+ TPS with 99.99% uptime and $0 fraud losses.",
    tech: ["Node.js", "Kafka", "PostgreSQL", "AWS", "Docker"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=700&fit=crop",
    live: false,
  },
  {
    title: "MedSync Platform",
    industry: "HealthTech",
    description:
      "HIPAA-compliant patient management platform with telemedicine, EHR integration, and appointment scheduling.",
    challenge:
      "Unify patient records, scheduling, and telemedicine while maintaining HIPAA compliance.",
    results: "Reduced administrative overhead by 50% across 12 clinics.",
    tech: ["React", "Python", "FastAPI", "GCP", "PostgreSQL"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&h=700&fit=crop",
    live: false,
  },
  {
    title: "ShipTrack Dashboard",
    industry: "Logistics",
    description:
      "Real-time fleet tracking dashboard with route optimization, driver analytics, and predictive maintenance alerts.",
    challenge:
      "Real-time visibility into vehicle locations, driver behavior, and maintenance needs.",
    results: "20% reduction in fuel costs and 35% decrease in vehicle downtime.",
    tech: ["Next.js", "Go", "Redis", "Mapbox", "WebSockets"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=700&fit=crop",
    live: false,
  },
  {
    title: "LearnUp AI Tutor",
    industry: "EdTech",
    description:
      "AI-powered tutoring app with adaptive learning paths, real-time progress tracking, and personalized content recommendations.",
    challenge:
      "Engaging, AI-driven learning experience that adapts to each student's pace and style.",
    results:
      "60% improvement in student engagement and 45% faster learning outcomes.",
    tech: ["React Native", "OpenAI API", "Firebase", "Python"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=700&fit=crop",
    live: false,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const CardBody = (
    <>
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-accent-dark rounded-full border border-white/60">
          {project.industry}
        </span>
        {project.live && (
          <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
            Live
          </span>
        )}
      </div>

      <div className="pt-5 pb-2">
        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-accent-dark transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="space-y-2 mb-4">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-slate-500">
              Challenge
            </span>
            <p className="text-sm text-slate-700 leading-relaxed mt-0.5">
              {project.challenge}
            </p>
          </div>
          <div>
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-slate-500">
              Result
            </span>
            <p className="text-sm text-slate-700 leading-relaxed mt-0.5">
              {project.results}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-2.5 py-0.5 text-[11px] font-medium text-slate-600 bg-[#F3F4EE] rounded-full border border-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        {project.live && (
          <div className="inline-flex items-center gap-1.5 text-sm text-accent-dark font-medium group-hover:gap-2.5 transition-all">
            View live
            <ArrowUpRight size={14} strokeWidth={2.4} />
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
      className="group"
    >
      {project.live ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {CardBody}
        </a>
      ) : (
        <div>{CardBody}</div>
      )}
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.industry === activeFilter);

  return (
    <div className="bg-[#FAFAF7]">
      {/* Hero */}
      <PageHero
        label="Portfolio"
        title={
          <>
            Our
            <br />
            Projects
          </>
        }
        description="Real products we've built — shipped, scaled, and making an impact across industries. Every project here is designed, engineered, and owned by our team."
      />

      {/* Filter pills */}
      <section className="pb-10">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => {
              const active = activeFilter === ind;
              return (
                <button
                  key={ind}
                  onClick={() => setActiveFilter(ind)}
                  className={`px-5 py-2 text-sm font-medium rounded-full border transition-all ${
                    active
                      ? "bg-accent border-accent text-white shadow-sm"
                      : "bg-white border-slate-200 text-slate-700 hover:border-accent/50 hover:text-accent-dark"
                  }`}
                >
                  {ind}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
            >
              {filtered.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No projects in this category yet — check back soon.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
