"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-container mx-auto px-6"
      >
        <div className="relative rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] p-12 md:p-16 text-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 dot-bg-dark opacity-30" />
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-violet-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Let&apos;s build something
              <br />
              <span className="gradient-text">remarkable.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              From concept to deployment — we&apos;ve got you covered. Let&apos;s
              turn your vision into reality.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-accent/30"
            >
              Start a Conversation
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
