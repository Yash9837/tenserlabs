"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Users, Coffee, BookOpen, Globe } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

type Leader = {
  name: string;
  role: string;
  bio: string;
  funFact: string;
  github: string;
  linkedin: string;
};

const leadership: Leader[] = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    bio: "Full-stack engineer turned entrepreneur. 10+ years in software architecture, passionate about building products that scale.",
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
    bio: "Design engineer obsessed with developer-centric UX. Previously crafted design systems at top-tier SaaS companies.",
    funFact: "Plays jazz piano and designs typefaces as a hobby.",
    github: "#",
    linkedin: "#",
  },
];

type Engineer = {
  name: string;
  role: string;
  tech: string[];
};

const engineers: Engineer[] = [
  {
    name: "Ravi Kumar",
    role: "Senior Full-Stack Engineer",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    name: "Sofia Chen",
    role: "ML Engineer",
    tech: ["Python", "PyTorch", "TensorFlow"],
  },
  {
    name: "Alex Thompson",
    role: "DevOps Engineer",
    tech: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    name: "Maya Patel",
    role: "Frontend Engineer",
    tech: ["React", "Next.js", "TypeScript"],
  },
  {
    name: "James Wilson",
    role: "Backend Engineer",
    tech: ["Go", "Kafka", "Redis"],
  },
  {
    name: "Aisha Mohammed",
    role: "Mobile Developer",
    tech: ["React Native", "Flutter", "Firebase"],
  },
  {
    name: "Liam O'Brien",
    role: "Full-Stack Engineer",
    tech: ["Next.js", "Python", "AWS"],
  },
  {
    name: "Yuki Tanaka",
    role: "Data Engineer",
    tech: ["Python", "Spark", "Airflow"],
  },
];

const culturePoints = [
  {
    icon: Globe,
    title: "Remote-first",
    body: "Distributed across three continents. Your workspace, your hours.",
  },
  {
    icon: Coffee,
    title: "Async-friendly",
    body: "Meetings are a tool, not the default. We document, we ship.",
  },
  {
    icon: BookOpen,
    title: "Learning days",
    body: "Dedicated time every quarter to learn, experiment, and share.",
  },
  {
    icon: Users,
    title: "Open-source Fridays",
    body: "We contribute back — your work is visible and portable.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function LeaderCard({ person, index }: { person: Leader; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      {/* Initials tile in place of photo */}
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#A6C091] via-[#8FA77B] to-[#6B8A5C] mb-5 flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <span className="relative text-white text-7xl font-semibold tracking-tight">
          {getInitials(person.name)}
        </span>
        <div className="absolute bottom-3 left-3 flex gap-2">
          <a
            href={person.github}
            aria-label={`${person.name} on GitHub`}
            className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center text-slate-700 hover:text-accent-dark transition-colors shadow-sm"
          >
            <Github size={15} />
          </a>
          <a
            href={person.linkedin}
            aria-label={`${person.name} on LinkedIn`}
            className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center text-slate-700 hover:text-accent-dark transition-colors shadow-sm"
          >
            <Linkedin size={15} />
          </a>
        </div>
      </div>

      <div className="flex items-baseline justify-between gap-3 mb-1">
        <h3 className="text-lg font-semibold text-slate-900">{person.name}</h3>
        <span className="text-xs text-slate-500 whitespace-nowrap">
          {person.role}
        </span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-2">
        {person.bio}
      </p>
      <p className="text-xs text-accent-dark/90 italic">{person.funFact}</p>
    </motion.article>
  );
}

function EngineerCard({
  person,
  index,
}: {
  person: Engineer;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
      className="group rounded-2xl bg-white border border-slate-200 p-5 hover:border-accent/40 hover:shadow-sm transition-all"
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-semibold text-accent-dark">
            {getInitials(person.name)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-slate-900 group-hover:text-accent-dark transition-colors truncate">
            {person.name}
          </h4>
          <p className="text-xs text-slate-500 mb-2 truncate">{person.role}</p>
          <div className="flex flex-wrap gap-1">
            {person.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-medium text-slate-600 bg-[#F3F4EE] border border-slate-200 rounded-full px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  return (
    <div className="bg-[#FAFAF7]">
      {/* Hero */}
      <PageHero
        label="Team"
        title={
          <>
            Meet the
            <br />
            Engineers
          </>
        }
        description="A collective of builders, architects, and problem-solvers who live and breathe code. Remote-first, async-friendly, and obsessed with craft."
      />

      {/* Leadership */}
      <section className="py-12 md:py-16">
        <div className="max-w-container mx-auto px-6">
          <div className="flex items-start gap-4 mb-10">
            <span className="text-sm text-slate-500 mt-2">Leadership</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              The core team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((p, i) => (
              <LeaderCard key={p.name} person={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineers */}
      <section className="py-16 md:py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="flex items-start gap-4">
              <span className="text-sm text-slate-500 mt-2">Engineers</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
                Our developers
              </h2>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed md:pt-6">
              Senior engineers across every layer of the stack — from
              pixel-perfect frontends to high-throughput backends, mobile, data,
              and ML.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {engineers.map((e, i) => (
              <EngineerCard key={e.name} person={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 md:py-28">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex items-start gap-4">
              <span className="text-sm text-slate-500 mt-2">Culture</span>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15] mb-5">
                  Life at
                  <br />
                  TenserLabs
                </h2>
                <p className="text-slate-600 text-[15px] leading-relaxed max-w-md">
                  Great work comes from great culture. Remote-first,
                  async-friendly, with regular hackathons, open-source Fridays,
                  and a genuine commitment to continuous learning. No politics.
                  No ego. Just engineering.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {culturePoints.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="rounded-2xl bg-white border border-slate-200 p-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                      <Icon size={16} className="text-accent-dark" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {c.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {c.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
