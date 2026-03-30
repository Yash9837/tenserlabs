"use client";

import { SectionWrapper, TechBadge } from "@/components/ui/shared";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "ThriveUp",
    category: "Event Management",
    description:
      "A comprehensive event management application enabling seamless event creation, discovery, and attendee management.",
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
    link: "https://thriveup-web.vercel.app/",
    color: "bg-blue-500",
  },
  {
    title: "Tenzi Jeans",
    category: "E-Commerce / Fashion",
    description:
      "Premium wholesale fashion web platform with modern catalog management and order processing systems.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://www.tenzijeans.com/",
    color: "bg-emerald-500",
  },
  {
    title: "LeadFlow CRM",
    category: "Real Estate / SaaS",
    description:
      "An intelligent CRM platform for real estate businesses with lead tracking, analytics, and automated follow-ups.",
    tech: ["React", "Node.js", "PostgreSQL", "AI"],
    link: "https://lead-flow-mauve.vercel.app/landing",
    color: "bg-orange-500",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative rounded-xl bg-slate-800/50 border border-slate-700/50 overflow-hidden card-hover-dark"
    >
      {/* Project Preview Header */}
      <div className="h-48 bg-slate-800 relative flex items-center justify-center overflow-hidden">
        <div className={`absolute top-4 left-4 w-3 h-3 rounded-full ${project.color} opacity-60`} />
        <span className="text-2xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors">
          {project.title}
        </span>
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-sm font-medium text-accent-light opacity-0 group-hover:opacity-100 transition-opacity delay-100">
            View Case Study
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="text-xs font-medium text-accent-light mb-2 uppercase tracking-wider">
          {project.category}
        </div>
        <h3 className="font-bold text-xl mb-2 text-white group-hover:text-accent-light transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-accent-light hover:text-accent transition-colors font-medium"
        >
          View Live <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 dot-bg-dark" />
      <div className="relative z-10 max-w-container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-accent-light bg-accent/15 rounded-full border border-accent/25 mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Real products we&apos;ve built — shipped, scaled, and making an impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-accent/50 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-all hover:bg-white/5"
          >
            View All Projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
