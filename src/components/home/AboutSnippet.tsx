"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Star } from "lucide-react";

const avatarCluster = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces",
];

const floatingTags = [
  { label: "Cybersecurity", className: "top-[34%] right-[-8%]" },
  { label: "Infrastructure Management", className: "top-[52%] right-[-18%]" },
  { label: "Operational Excellence", className: "top-[70%] right-[-10%]" },
];

export default function AboutSnippet() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFAF7]">
      <div className="max-w-container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <div className="flex items-start gap-4 mb-6">
            <span className="text-sm text-slate-500 mt-2">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              Driven by
              <br />
              Innovation. Powered
              <br />
              by People.
            </h2>
          </div>
          <p className="text-slate-600 text-[15px] leading-relaxed max-w-lg mb-8">
            With years of hands-on experience in SaaS development, cloud
            architecture, and enterprise IT services, we empower businesses to
            adapt to changing technologies, scale operations seamlessly, and
            thrive in an increasingly competitive digital world.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 rounded-full bg-accent/20 hover:bg-accent/30 text-accent-dark text-sm font-medium transition-all border border-accent/30"
          >
            Learn More
          </Link>
        </div>

        {/* Right: headshot + floating badges + rating card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[28px] overflow-hidden bg-accent/20">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop&crop=faces"
              alt="Team lead"
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>

          {/* Growth badge top-left */}
          <div className="absolute -top-4 left-4 sm:left-8 px-4 py-2 rounded-full bg-white shadow-lg shadow-slate-900/5 border border-slate-100 flex items-center gap-2 text-sm font-medium text-slate-900">
            <Rocket size={14} className="text-accent-dark" />
            Growth
          </div>

          {/* Rating card left */}
          <div className="absolute left-[-6%] sm:left-[-10%] top-[38%] bg-white rounded-2xl shadow-lg shadow-slate-900/8 border border-slate-100 p-3 w-[210px]">
            <div className="flex items-center gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-emerald-500 text-emerald-500"
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {avatarCluster.map((src) => (
                  <div
                    key={src}
                    className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-7 h-7 rounded-full bg-slate-900 text-white text-[10px] font-semibold flex items-center justify-center border-2 border-white">
                  +
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-900 ml-1">
                4.9{" "}
                <span className="text-[10px] font-normal text-slate-500">
                  Rating
                </span>
              </span>
            </div>
          </div>

          {/* Floating service badges right */}
          {floatingTags.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className={`hidden md:block absolute ${t.className} px-4 py-2 rounded-full bg-white shadow-md shadow-slate-900/5 border border-slate-100 text-xs font-medium text-slate-900 whitespace-nowrap`}
            >
              {t.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
