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
        className="max-w-4xl mx-auto px-6"
      >
        <div className="relative rounded-2xl bg-gradient-to-br from-accent/10 via-surface-light to-purple-500/10 border border-accent/20 p-12 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 dot-bg opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
              Have a project in mind?
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s build it together. From concept to deployment — we&apos;ve
              got you covered.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all hover:shadow-[0_0_30px_rgba(108,99,255,0.3)]"
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
