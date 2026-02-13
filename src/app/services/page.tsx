"use client";

import { SectionWrapper, SectionHeading, TechBadge } from "@/components/ui/shared";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Palette,
  Search,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Bespoke software engineered to your exact specifications. We build robust, scalable systems that solve real problems and grow with your business.",
    tech: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Kafka"],
    features: [
      "Microservices architecture",
      "Event-driven systems",
      "API-first design",
      "Database optimization",
    ],
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Modern, performant web applications built with the latest frameworks. Server-rendered, SEO-friendly, and accessible by default.",
    tech: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
    features: [
      "Server-side rendering",
      "Progressive Web Apps",
      "Real-time features",
      "Performance optimization",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications that feel truly native. One codebase, all platforms, zero compromises.",
    tech: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    features: [
      "Cross-platform development",
      "Native performance",
      "Offline-first architecture",
      "Push notifications",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description:
      "Infrastructure that scales automatically, deploys continuously, and monitors itself. We build clouds that just work.",
    tech: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"],
    features: [
      "CI/CD pipelines",
      "Infrastructure as Code",
      "Auto-scaling",
      "Monitoring & alerting",
    ],
  },
  {
    icon: Brain,
    title: "AI / ML Solutions & Data Engineering",
    description:
      "From predictive models to NLP and computer vision — we build intelligent systems that learn, adapt, and deliver insights.",
    tech: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain"],
    features: [
      "Custom model training",
      "NLP & chatbots",
      "Data pipelines",
      "MLOps & model serving",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design & Prototyping",
    description:
      "User-centered design that converts. We craft interfaces that are intuitive, accessible, and visually stunning.",
    tech: ["Figma", "Framer", "Adobe XD", "Storybook"],
    features: [
      "User research & testing",
      "Interactive prototypes",
      "Design systems",
      "Accessibility audits",
    ],
  },
  {
    icon: Search,
    title: "Technical Consulting & Code Audits",
    description:
      "Expert analysis of your codebase, architecture, and engineering processes. We find the bottlenecks and fix them.",
    tech: ["Architecture", "Performance", "Security", "Best Practices"],
    features: [
      "Code quality reviews",
      "Architecture assessment",
      "Performance profiling",
      "Security audits",
    ],
  },
  {
    icon: Users,
    title: "Staff Augmentation / Dedicated Teams",
    description:
      "Embedded engineers who integrate seamlessly with your team. Scale up fast without the hiring overhead.",
    tech: ["Full-Stack", "Backend", "Frontend", "DevOps", "QA"],
    features: [
      "Vetted senior engineers",
      "Flexible engagement",
      "Timezone-aligned teams",
      "Seamless integration",
    ],
  },
];

function ServiceDetailCard({
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
      className="group p-8 rounded-xl bg-surface-light border border-surface-border hover:border-accent/30 transition-all duration-300 card-glow"
    >
      <div className="flex items-start gap-5">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
          <service.icon size={22} className="text-accent" />
        </div>
        <div className="flex-1">
          <h3 className="font-mono font-semibold text-xl mb-3 group-hover:text-accent transition-colors">
            {service.title}
          </h3>
          <p className="text-muted leading-relaxed mb-5">{service.description}</p>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {service.tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
            {`{ services }`}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-6">
            What We <span className="gradient-text">Build</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            End-to-end engineering solutions — from system design and architecture
            to deployment and ongoing support. We cover every layer of the stack.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="max-w-5xl mx-auto px-6">
        <div className="space-y-6">
          {services.map((s, i) => (
            <ServiceDetailCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="max-w-4xl mx-auto px-6">
        <div className="bg-surface-light border border-surface-border rounded-2xl p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-mono mb-4">
            Need something specific?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
            We tailor our services to your exact requirements. Let&apos;s discuss
            your project and find the perfect approach.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all hover:shadow-[0_0_30px_rgba(108,99,255,0.3)]"
          >
            Get a Custom Quote
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
