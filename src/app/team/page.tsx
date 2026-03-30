"use client";

import { SectionWrapper, SectionHeading, TechBadge } from "@/components/ui/shared";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin } from "lucide-react";

const leadership = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    bio: "Full-stack engineer turned entrepreneur. 10+ years in software architecture. Passionate about building products that scale.",
    funFact: "Has visited 30+ countries while working remotely.",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "Systems architect with deep expertise in distributed computing, cloud infrastructure, and engineering leadership.",
    funFact: "Competitive chess player and open-source contributor.",
    github: "#",
    linkedin: "#",
  },
  {
    name: "David Park",
    role: "Head of Design",
    bio: "Design engineer obsessed with developer-centric UX. Previously at top-tier SaaS companies crafting design systems.",
    funFact: "Plays jazz piano and designs typefaces as a hobby.",
    github: "#",
    linkedin: "#",
  },
];

const engineers = [
  { name: "Ravi Kumar", role: "Senior Full-Stack Engineer", tech: ["React", "Node.js", "PostgreSQL"] },
  { name: "Sofia Chen", role: "ML Engineer", tech: ["Python", "PyTorch", "TensorFlow"] },
  { name: "Alex Thompson", role: "DevOps Engineer", tech: ["AWS", "Kubernetes", "Terraform"] },
  { name: "Maya Patel", role: "Frontend Engineer", tech: ["React", "Next.js", "TypeScript"] },
  { name: "James Wilson", role: "Backend Engineer", tech: ["Go", "Kafka", "Redis"] },
  { name: "Aisha Mohammed", role: "Mobile Developer", tech: ["React Native", "Flutter", "Firebase"] },
  { name: "Liam O'Brien", role: "Full-Stack Engineer", tech: ["Next.js", "Python", "AWS"] },
  { name: "Yuki Tanaka", role: "Data Engineer", tech: ["Python", "Spark", "Airflow"] },
];

function LeaderCard({ person, index }: { person: typeof leadership[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group p-8 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-accent/30 transition-all card-hover text-center"
    >
      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent/10 to-violet-500/10 border-2 border-slate-700 flex items-center justify-center mb-5">
        <span className="text-2xl font-extrabold text-accent">
          {person.name.split(" ").map((n) => n[0]).join("")}
        </span>
      </div>
      <h3 className="font-bold text-xl mb-1 text-white group-hover:text-accent transition-colors">
        {person.name}
      </h3>
      <p className="text-sm text-accent-light font-medium mb-3">{person.role}</p>
      <p className="text-sm text-slate-400 leading-relaxed mb-2">{person.bio}</p>
      <p className="text-xs text-accent/60 italic mb-5">{person.funFact}</p>
      <div className="flex justify-center gap-3">
        <a href={person.github} className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-accent-light hover:bg-slate-700 transition-all">
          <Github size={16} />
        </a>
        <a href={person.linkedin} className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-accent-light hover:bg-slate-700 transition-all">
          <Linkedin size={16} />
        </a>
      </div>
    </motion.div>
  );
}

function EngineerCard({ person, index }: { person: typeof engineers[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-accent/30 transition-all card-hover"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/10 to-violet-500/10 border-2 border-slate-700 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-bold text-accent">
            {person.name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-white group-hover:text-accent transition-colors">
            {person.name}
          </h4>
          <p className="text-xs text-accent-light">{person.role}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {person.tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-accent-light bg-accent/15 rounded-full border border-accent/25 mb-4">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Meet the <span className="gradient-text">Engineers</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              A collective of builders, architects, and problem solvers who live and breathe code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <SectionWrapper className="max-w-5xl mx-auto px-6">
        <SectionHeading badge="Leadership" title="The Core Team" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadership.map((p, i) => (
            <LeaderCard key={p.name} person={p} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Engineers Grid */}
      <SectionWrapper className="max-w-5xl mx-auto px-6">
        <SectionHeading
          badge="Engineers"
          title="Our Developers"
          description="Senior engineers across every layer of the stack."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {engineers.map((e, i) => (
            <EngineerCard key={e.name} person={e} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Culture */}
      <SectionWrapper className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-white">Life at TenserLabs</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We believe great work comes from great culture. Remote-first, async-friendly, with regular
            hackathons, open-source Fridays, and a genuine commitment to continuous learning.
            No politics. No ego. Just engineering.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Hackathons", "Open Source", "Tech Talks", "Remote First"].map((item) => (
              <div key={item} className="px-4 py-3 rounded-lg bg-accent/10 border border-accent/20 text-sm font-medium text-accent-light">
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
