"use client";

import { useState } from "react";
import { SectionWrapper, SectionHeading } from "@/components/ui/shared";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "TenserLabs transformed our payment infrastructure. They delivered a real-time gateway that handles thousands of transactions per second flawlessly.",
    name: "Sarah Chen",
    title: "CTO, NovaPay",
    company: "NovaPay",
  },
  {
    quote:
      "Working with TenserLabs felt like having an extended engineering team. Their expertise in cloud architecture saved us months of development time.",
    name: "Dr. James Okafor",
    title: "Founder, MedSync",
    company: "MedSync",
  },
  {
    quote:
      "The fleet tracking dashboard they built exceeded every expectation. Real-time updates, beautiful UI, and rock-solid reliability.",
    name: "Maria Rodriguez",
    title: "VP Engineering, ShipTrack",
    company: "ShipTrack",
  },
  {
    quote:
      "Their AI integration for our tutoring platform was incredibly well-executed. Student engagement improved by 60% within the first quarter.",
    name: "Alex Kim",
    title: "CEO, LearnUp",
    company: "LearnUp",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <SectionWrapper className="max-w-4xl mx-auto px-6">
      <SectionHeading
        badge="/* testimonials */"
        title="What Clients Say"
        description="Don't just take our word for it."
      />

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="bg-surface-light border border-surface-border rounded-2xl p-8 md:p-12 text-center"
          >
            <Quote size={32} className="text-accent/30 mx-auto mb-6" />
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-light">
              &ldquo;{testimonials[current].quote}&rdquo;
            </blockquote>
            <div>
              <div className="font-mono font-semibold text-foreground">
                {testimonials[current].name}
              </div>
              <div className="text-sm text-muted mt-1">
                {testimonials[current].title}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-lg border border-surface-border hover:border-accent/50 text-muted hover:text-accent transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-accent" : "bg-surface-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 rounded-lg border border-surface-border hover:border-accent/50 text-muted hover:text-accent transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
