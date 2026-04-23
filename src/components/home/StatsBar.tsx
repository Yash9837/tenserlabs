"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 90, suffix: "%", label: "Client satisfaction" },
  { target: 180, suffix: "+", label: "Projects Successfully Done" },
  { target: 10, suffix: "K+", label: "Overall Revenue Raised" },
];

function BigCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(t);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(t);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="py-16 md:py-20 bg-[#FAFAF7]">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="px-6 md:px-10 py-6 md:py-2"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-none">
                <BigCounter target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-sm text-slate-500 mt-3">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
