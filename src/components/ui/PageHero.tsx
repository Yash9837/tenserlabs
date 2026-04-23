"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  /** Small label shown left of the headline ("About Us", "Service", etc.) */
  label: string;
  /** Multi-line headline. Use <br /> for line breaks. */
  title: ReactNode;
  /** Optional paragraph that appears right-aligned next to the headline. */
  description?: string;
  /** Optional actions (buttons/links) shown on the right under the description. */
  actions?: ReactNode;
}

export default function PageHero({
  label,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAFAF7]">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6 items-end">
          {/* Left: small label + big headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-4"
          >
            <span className="text-sm text-slate-500 mt-3 whitespace-nowrap">
              {label}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
              {title}
            </h1>
          </motion.div>

          {/* Right: description + optional actions */}
          {(description || actions) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="md:pb-3 flex flex-col gap-5"
            >
              {description && (
                <p className="text-slate-600 text-[15px] leading-relaxed max-w-md">
                  {description}
                </p>
              )}
              {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
