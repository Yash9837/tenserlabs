"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cloud,
  BarChart3,
  Code2,
  Plus,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "IT Consulting Services",
    description:
      "Strategic guidance to align your technology stack with long-term business objectives, ensuring agility and growth.",
    href: "/services",
  },
  {
    icon: BarChart3,
    title: "Data Analytics Solutions",
    description:
      "Transform raw data into actionable insights that drive smarter decisions, improved forecasting, and business innovation.",
    href: "/services",
    featured: true,
  },
  {
    icon: Code2,
    title: "Website Development Service",
    description:
      "Responsive, user-centric websites built with modern frameworks to deliver performance, accessibility, and brand impact.",
    href: "/services",
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF7]">
      <div className="max-w-container mx-auto px-6">
        {/* Header row */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <div className="flex items-start gap-4">
            <span className="text-sm text-slate-500 mt-2">Service</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              Solutions Built
              <br />
              to Accelerate Your
              <br />
              Growth
            </h2>
          </div>
          <p className="text-slate-600 text-[15px] leading-relaxed md:pt-6">
            With years of hands-on experience in SaaS development, cloud
            architecture, and enterprise IT services, we empower businesses to
            adapt to changing technologies, scale operations seamlessly, and
            thrive in an increasingly competitive digital world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`group relative rounded-2xl p-8 border transition-all hover:shadow-lg hover:shadow-slate-900/5 ${
                  svc.featured
                    ? "bg-white border-accent/40 shadow-md shadow-slate-900/5"
                    : "bg-[#F3F4EE] border-transparent hover:border-slate-200"
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-accent/25 flex items-center justify-center mb-8">
                  <Icon size={20} className="text-accent-dark" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-4 leading-tight">
                  {svc.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {svc.description}
                </p>

                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-accent-dark transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-accent-dark transition-colors">
                    <Plus size={14} />
                  </span>
                  Read More
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 rounded-full bg-accent/20 hover:bg-accent/30 text-accent-dark text-sm font-medium transition-all border border-accent/30"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
