"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ---------- Animated Device Showcase ---------- */
function DeviceShowcase() {
  return (
    <div className="relative w-full h-[520px]">
      {/* Glow behind devices */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />

      {/* Browser Window — Web App */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -8 }}
        animate={{ opacity: 1, y: 0, rotateY: -4 }}
        transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
        className="absolute top-4 left-0 w-[340px] z-10"
        style={{ perspective: "1200px" }}
      >
        <div className="rounded-xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 border-b border-slate-700/60">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 ml-3 px-3 py-1 rounded-md bg-slate-900/60 text-[10px] text-slate-500 font-mono">
              app.tenserlabs.com
            </div>
          </div>
          {/* Fake web UI */}
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-accent/30" />
                <div className="w-16 h-2 rounded bg-slate-700" />
              </div>
              <div className="flex gap-2">
                <div className="w-10 h-2 rounded bg-slate-700/60" />
                <div className="w-10 h-2 rounded bg-slate-700/60" />
                <div className="w-14 h-5 rounded-md bg-accent/40 flex items-center justify-center">
                  <span className="text-[7px] text-white/70 font-medium">Launch</span>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
              className="h-24 rounded-lg bg-gradient-to-r from-accent/15 via-violet-500/10 to-accent/5 border border-slate-700/40"
            />
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + i * 0.15 }}
                  className="h-14 rounded-md bg-slate-800/80 border border-slate-700/40 p-2"
                >
                  <div className="w-full h-1.5 rounded bg-slate-700/60 mb-1.5" />
                  <div className="w-2/3 h-1.5 rounded bg-slate-700/40" />
                </motion.div>
              ))}
            </div>
            <div className="flex gap-2">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="origin-left flex-1 h-3 rounded bg-accent/20"
              />
              <div className="w-8 h-3 rounded bg-slate-700/40" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Phone — Mobile App */}
      <motion.div
        initial={{ opacity: 0, y: 50, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.9, duration: 0.9, ease: "easeOut" }}
        className="absolute bottom-4 right-4 w-[160px] z-20"
      >
        <div className="rounded-[24px] border-2 border-slate-700/80 bg-slate-900/95 backdrop-blur-sm shadow-2xl shadow-black/50 overflow-hidden">
          {/* Notch */}
          <div className="flex justify-center pt-2 pb-1">
            <div className="w-16 h-4 rounded-full bg-slate-800 border border-slate-700/60" />
          </div>
          {/* Mobile UI */}
          <div className="px-3 pb-4 space-y-2.5">
            <div className="text-[9px] font-bold text-white/80 px-1">Dashboard</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="h-20 rounded-xl bg-gradient-to-br from-accent/20 to-violet-600/15 border border-slate-700/40 p-2"
            >
              {/* Mini chart */}
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <motion.path
                  d="M0,35 Q15,30 25,25 T50,15 T75,20 T100,5"
                  fill="none"
                  stroke="rgba(139,92,246,0.6)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                />
                <motion.path
                  d="M0,35 Q15,30 25,25 T50,15 T75,20 T100,5 L100,40 L0,40 Z"
                  fill="rgba(139,92,246,0.08)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                />
              </svg>
            </motion.div>
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2 + i * 0.2 }}
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-700/30"
              >
                <div className="w-5 h-5 rounded-md bg-accent/20 flex-shrink-0" />
                <div className="flex-1 space-y-1">
                  <div className="w-full h-1.5 rounded bg-slate-700/60" />
                  <div className="w-2/3 h-1 rounded bg-slate-700/30" />
                </div>
              </motion.div>
            ))}
            {/* Bottom nav */}
            <div className="flex justify-around pt-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-4 h-4 rounded-full ${i === 1 ? "bg-accent/40" : "bg-slate-700/50"}`} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Code/Terminal Window — Software */}
      <motion.div
        initial={{ opacity: 0, y: 30, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.1, duration: 0.9, ease: "easeOut" }}
        className="absolute top-28 right-0 w-[260px] z-10"
      >
        <div className="rounded-xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/80 border-b border-slate-700/60">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <span className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
            <span className="text-[9px] text-slate-500 font-mono ml-2">api.service.ts</span>
          </div>
          <div className="p-3 font-mono text-[10px] leading-relaxed space-y-0.5">
            <div><span className="text-violet-400">export</span> <span className="text-blue-400">async function</span> <span className="text-emerald-400">deploy</span><span className="text-slate-500">(</span><span className="text-orange-300">config</span><span className="text-slate-500">)</span> <span className="text-slate-500">{"{"}</span></div>
            <div className="pl-3"><span className="text-violet-400">const</span> <span className="text-slate-300">app</span> <span className="text-slate-500">=</span> <span className="text-violet-400">await</span> <span className="text-emerald-400">build</span><span className="text-slate-500">(</span><span className="text-orange-300">config</span><span className="text-slate-500">);</span></div>
            <div className="pl-3"><span className="text-violet-400">await</span> <span className="text-slate-300">app</span><span className="text-slate-500">.</span><span className="text-emerald-400">optimize</span><span className="text-slate-500">();</span></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="pl-3"
            >
              <span className="text-violet-400">return</span> <span className="text-slate-300">app</span><span className="text-slate-500">.</span><span className="text-emerald-400">ship</span><span className="text-slate-500">(</span><span className="text-amber-300">&quot;production&quot;</span><span className="text-slate-500">);</span>
            </motion.div>
            <div><span className="text-slate-500">{"}"}</span></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ delay: 3, duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="mt-1 flex items-center gap-1"
            >
              <span className="text-emerald-400">&#x2713;</span>
              <span className="text-emerald-400/70">Deployed successfully</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating accent dots */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-20 w-2 h-2 rounded-full bg-accent/50"
      />
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-3 h-3 rounded-full bg-violet-500/30"
      />
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-8 w-1.5 h-1.5 rounded-full bg-accent/40"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0 grid-bg-dark" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-container mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-accent-light bg-accent/15 rounded-full border border-accent/25 mb-6">
              Premium Engineering Consultancy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white"
          >
            Engineering
            <br />
            Tomorrow&apos;s
            <br />
            <span className="gradient-text">Code, Today.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10"
          >
            From startups to enterprises, we architect, build, and ship
            production-grade digital products — fast, clean, and future-proof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-accent/30 text-base"
            >
              Explore Our Work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 hover:border-accent/50 text-slate-300 hover:text-white font-medium rounded-lg transition-all hover:bg-white/5 text-base"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        </div>

        {/* Device Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hidden lg:block"
        >
          <DeviceShowcase />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-accent rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
}
