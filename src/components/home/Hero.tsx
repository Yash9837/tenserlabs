"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Plus } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces",
];

export default function Hero() {
  return (
    <section className="relative pt-2 pb-10 px-2 md:px-3">
      {/* Hero panel */}
      <div className="relative max-w-[1440px] mx-auto rounded-[32px] overflow-hidden bg-gradient-to-br from-[#8FA77B] via-[#7C9A6B] to-[#6B8A5C] min-h-[640px] md:min-h-[680px] flex flex-col pt-20">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
             style={{
               backgroundImage:
                 "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
               backgroundSize: "22px 22px",
             }}
        />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/10 blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#6B8A5C]/40 blur-[100px] pointer-events-none" />

        {/* Top: spacer for fixed navbar */}
        <div className="flex-1" />

        {/* Hero content — split row */}
        <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-6 px-8 md:px-14 pb-10 md:pb-14 items-end">
          {/* Left: headline + avatars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-8">
              Engineering
              <br />
              Tomorrow&apos;s
              <br />
              <span className="inline-flex items-center gap-3">
                <ArrowRight className="inline-block" size={40} strokeWidth={2.2} />
                Code, Today.
              </span>
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                    className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#7C9A6B] ring-1 ring-white/40"
                  >
                    <Image
                      src={src}
                      alt="team member"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="w-10 h-10 rounded-full bg-slate-900 border-2 border-[#7C9A6B] flex items-center justify-center text-white"
                >
                  <Plus size={16} strokeWidth={2.5} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: description + CTAs + scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col md:items-end gap-8"
          >
            <div className="md:max-w-sm md:text-right">
              <p className="text-white/90 text-[15px] leading-relaxed">
                From custom software to cloud integration, our expert team
                delivers reliable IT services that evolve with your business
                needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#F3F4EE] hover:bg-white text-slate-900 text-sm font-medium transition-all shadow-sm"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 text-sm font-medium transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Big title at bottom-left corner + scroll-down circle on bottom-right */}
        <div className="relative z-10 px-8 md:px-14 pb-8 md:pb-10 flex items-end justify-between">
          <div className="text-white/70 text-xs tracking-[0.3em] uppercase">
            Tenserlabs — Engineering Studio
          </div>
          <motion.a
            href="#about"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition-all"
            aria-label="Scroll down"
          >
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <ArrowDown size={18} />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
