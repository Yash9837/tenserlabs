"use client";

import { SectionWrapper, SectionHeading } from "@/components/ui/shared";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Cloud,
  Brain,
  Smartphone,
  Search,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "API Development",
    description: "RESTful & GraphQL APIs built for scale with robust documentation and testing.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, GCP, Azure — CI/CD pipelines, containerization, and infrastructure as code.",
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description: "Custom models, NLP, computer vision, and intelligent data pipelines.",
  },
  {
    icon: Layers,
    title: "Web Applications",
    description: "React, Next.js, Angular — performant, accessible, and beautifully crafted.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "React Native & Flutter apps that feel native on every platform.",
  },
  {
    icon: Search,
    title: "Consulting & Audits",
    description: "Code reviews, architecture audits, and strategic tech consulting.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 rounded-xl bg-surface-light border border-surface-border hover:border-accent/30 transition-all duration-300 card-glow"
    >
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <service.icon size={22} className="text-accent" />
      </div>
      <h3 className="font-mono font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function ServicesSnapshot() {
  return (
    <SectionWrapper className="max-w-7xl mx-auto px-6">
      <SectionHeading
        badge="{ what we do }"
        title="Services"
        description="End-to-end engineering solutions — from ideation to deployment and beyond."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
