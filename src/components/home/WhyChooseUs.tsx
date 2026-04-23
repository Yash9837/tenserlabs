"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const items = [
  {
    title: "Tailored Solutions",
    body:
      "We don't believe in one-size-fits-all. Every solution we build is customized to your unique business goals, workflows, and challenges.",
  },
  {
    title: "Scalable & Future-Ready",
    body:
      "Our architectures are designed to grow with you — modular, cloud-native, and ready for tomorrow's demands without painful rewrites.",
  },
  {
    title: "Client-Centric Approach",
    body:
      "Transparent communication, iterative demos, and real ownership of outcomes. You're not a ticket — you're a partner.",
  },
  {
    title: "Security & Compliance First",
    body:
      "From day one we bake in secure defaults, encryption in transit and at rest, least-privilege access, and compliance-ready audit trails.",
  },
];

export default function WhyChooseUs() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF7]">
      <div className="max-w-container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: team photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[5/4] rounded-[28px] overflow-hidden bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=800&fit=crop"
              alt="Our team working together"
              fill
              sizes="(min-width: 1024px) 40rem, 90vw"
              className="object-cover"
            />
          </div>
          <Link
            href="/about"
            className="absolute left-6 -bottom-5 inline-flex items-center px-6 py-3 rounded-full bg-accent/20 hover:bg-accent/30 text-accent-dark text-sm font-medium transition-all border border-accent/30 backdrop-blur-sm"
          >
            About Us
          </Link>
        </motion.div>

        {/* Right: heading + accordion */}
        <div>
          <div className="flex items-start gap-4 mb-8">
            <span className="text-sm text-slate-500 mt-2">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              Built on Trust,
              <br />
              Driven by Results
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full text-left py-5 focus:outline-none"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`text-base md:text-lg font-medium transition-colors ${
                        isOpen ? "text-slate-900" : "text-slate-700"
                      }`}
                    >
                      {item.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 text-slate-500"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 10 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-sm text-slate-600 leading-relaxed overflow-hidden"
                      >
                        {item.body}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
