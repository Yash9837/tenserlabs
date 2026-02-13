"use client";

import { SectionWrapper, SectionHeading, TechBadge } from "@/components/ui/shared";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "ThriveUp",
    category: "Event Management",
    description:
      "A comprehensive event management application enabling seamless event creation, discovery, and attendee management.",
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
    link: "https://thriveup-web.vercel.app/",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Tenzi Jeans",
    category: "E-Commerce / Fashion",
    description:
      "Premium wholesale fashion web platform with modern catalog management and order processing systems.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://www.tenzijeans.com/",
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "LeadFlow CRM",
    category: "Real Estate / SaaS",
    description:
      "An intelligent CRM platform for real estate businesses with lead tracking, analytics, and automated follow-ups.",
    tech: ["React", "Node.js", "PostgreSQL", "AI"],
    link: "https://lead-flow-mauve.vercel.app/landing",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "CamRX",
    category: "Rental Platform",
    description:
      "Camera and equipment rental application with seamless booking, inventory management, and payment integration.",
    tech: ["Next.js", "Stripe", "Firebase"],
    link: "https://camrx.vercel.app/",
    gradient: "from-pink-500/20 to-violet-500/20",
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
      className="group relative rounded-xl bg-surface-light border border-surface-border hover:border-accent/30 overflow-hidden transition-all duration-300 card-glow"
    >
      {/* Gradient Preview */}
      <div
        className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
      >
        <div className="absolute inset-0 dot-bg opacity-40" />
        <span className="font-mono text-2xl font-bold text-foreground/80 relative z-10">
          {`{ ${project.title} }`}
        </span>
      </div>

      <div className="p-6">
        <div className="text-xs font-mono text-accent mb-2 uppercase tracking-wider">
          {project.category}
        </div>
        <h3 className="font-mono font-semibold text-xl mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <TechBadge key={t} name={t} />
          ))}
        </div>

        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-light transition-colors font-medium"
        >
          View Live
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <SectionWrapper className="max-w-7xl mx-auto px-6">
      <SectionHeading
        badge="// featured work"
        title="Projects"
        description="Real products we've built — shipped, scaled, and making an impact."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 border border-surface-border hover:border-accent/50 rounded-lg text-sm font-medium text-foreground hover:text-accent transition-all"
        >
          View All Projects →
        </Link>
      </div>
    </SectionWrapper>
  );
}
