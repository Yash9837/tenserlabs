"use client";

import { SectionWrapper, SectionHeading } from "@/components/ui/shared";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Building Scalable Real-Time Systems with Kafka and WebSockets",
    excerpt: "A deep dive into how we architect real-time data pipelines for high-throughput applications, handling 10K+ events per second.",
    date: "Jan 28, 2026",
    readTime: "8 min read",
    tags: ["Engineering", "Backend"],
    slug: "#",
  },
  {
    title: "Why We Chose Next.js 14 for Every New Project in 2026",
    excerpt: "Server components, streaming SSR, and the App Router — how Next.js 14 became our default framework for production apps.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    tags: ["Engineering", "Frontend"],
    slug: "#",
  },
  {
    title: "Our DevOps Journey: From Manual Deploys to Full GitOps",
    excerpt: "How TenserLabs evolved from manual deployments to a fully automated GitOps workflow with Kubernetes and ArgoCD.",
    date: "Dec 20, 2025",
    readTime: "10 min read",
    tags: ["DevOps", "Engineering"],
    slug: "#",
  },
  {
    title: "Integrating OpenAI APIs: Lessons from 5 Production Projects",
    excerpt: "Practical tips, cost optimization strategies, and architectural patterns for building AI-powered features in production.",
    date: "Dec 5, 2025",
    readTime: "12 min read",
    tags: ["AI", "Engineering"],
    slug: "#",
  },
  {
    title: "The TenserLabs Code Review Playbook",
    excerpt: "Our internal guide to effective code reviews — how we catch bugs early, share knowledge, and maintain code quality at scale.",
    date: "Nov 18, 2025",
    readTime: "7 min read",
    tags: ["Culture", "Engineering"],
    slug: "#",
  },
  {
    title: "Designing for Developers: Our UI Philosophy",
    excerpt: "Why developer-centric aesthetics matter and how we approach dark themes, monospace typography, and terminal-inspired interfaces.",
    date: "Nov 2, 2025",
    readTime: "5 min read",
    tags: ["Design", "Culture"],
    slug: "#",
  },
];

function BlogCard({ post, index }: { post: typeof posts[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group p-6 rounded-xl bg-surface-light border border-surface-border hover:border-accent/30 transition-all card-glow"
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-accent/10 text-accent rounded-full border border-accent/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="font-mono font-semibold text-lg mb-3 group-hover:text-accent transition-colors leading-tight">
        {post.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-4">{post.excerpt}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>
        <Link
          href={post.slug}
          className="text-sm text-accent hover:text-accent-light transition-colors font-medium flex items-center gap-1"
        >
          Read
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
            {`{ blog }`}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-6">
            Insights & <span className="gradient-text">Engineering</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Technical deep dives, engineering culture, and lessons learned from building production software.
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <SectionWrapper className="max-w-5xl mx-auto px-6 !pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((p, i) => (
            <BlogCard key={p.title} post={p} index={i} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
