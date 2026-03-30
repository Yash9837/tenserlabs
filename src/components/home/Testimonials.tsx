"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "TenserLabs transformed our payment infrastructure. They delivered a real-time gateway that handles thousands of transactions per second flawlessly.",
    name: "Sarah Chen",
    title: "CTO, NovaPay",
  },
  {
    quote:
      "Working with TenserLabs felt like having an extended engineering team. Their expertise in cloud architecture saved us months of development time.",
    name: "Dr. James Okafor",
    title: "Founder, MedSync",
  },
  {
    quote:
      "The fleet tracking dashboard they built exceeded every expectation. Real-time updates, beautiful UI, and rock-solid reliability.",
    name: "Maria Rodriguez",
    title: "VP Engineering, ShipTrack",
  },
  {
    quote:
      "Their AI integration for our tutoring platform was incredibly well-executed. Student engagement improved by 60% within the first quarter.",
    name: "Alex Kim",
    title: "CEO, LearnUp",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark" />
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-medium text-accent-light bg-accent/15 rounded-full border border-accent/25 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 md:p-12 text-center backdrop-blur-sm"
            >
              <Quote size={32} className="text-accent/30 mx-auto mb-6" />
              <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 font-light">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold text-white">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {testimonials[current].title}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-lg border border-slate-700 hover:border-accent/50 text-slate-500 hover:text-accent-light transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "bg-accent w-6" : "bg-slate-600 w-2"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-lg border border-slate-700 hover:border-accent/50 text-slate-500 hover:text-accent-light transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
