"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const studies = [
  {
    title: "ThriveUp — Event Management SaaS",
    industry: "SaaS",
    image: "/images/thriveup.png",
    credit: "©2025 — TenserLabs Studio",
    href: "https://thriveup-web.vercel.app/",
    external: true,
  },
  {
    title: "Tenzi Jeans — Wholesale Fashion",
    industry: "E-Commerce",
    image: "/images/tenzi.png",
    credit: "©2025 — TenserLabs Studio",
    href: "https://www.tenzijeans.com/",
    external: true,
  },
  {
    title: "LeadFlow — Real-Estate CRM",
    industry: "SaaS",
    image: "/images/leadflow.png",
    credit: "©2025 — TenserLabs Studio",
    href: "https://lead-flow-mauve.vercel.app/landing",
    external: true,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF7]">
      <div className="max-w-container mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-sm text-slate-500">Work Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15] mb-4">
            Case Studies
            <br />
            &amp; Success Stories
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed">
            Real products we&apos;ve shipped and scaled. A selection of our most
            impactful work across SaaS, e-commerce, and rental platforms.
          </p>
        </div>

        {/* Case study grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studies.map((study, i) => {
            const CardInner = (
              <>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider bg-white/90 text-accent-dark rounded-full border border-white/60 backdrop-blur-sm">
                    {study.industry}
                  </span>
                  <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <div className="mt-4">
                  <div className="text-[11px] text-slate-500 mb-1">
                    {study.credit}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-accent-dark transition-colors leading-snug">
                    {study.title}
                  </h3>
                </div>
              </>
            );

            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group"
              >
                {study.external ? (
                  <a
                    href={study.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {CardInner}
                  </a>
                ) : (
                  <Link href={study.href} className="block">
                    {CardInner}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-accent/20 hover:bg-accent/30 text-accent-dark text-sm font-medium transition-all border border-accent/30"
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
