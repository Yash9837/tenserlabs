"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Role = {
  title: string;
  location: string;
  level: string;
  type: string;
  href: string;
  paused?: boolean;
};

type RoleGroup = {
  category: string;
  roles: Role[];
};

const groups: RoleGroup[] = [
  {
    category: "Software Development",
    roles: [
      {
        title: "Full-Stack Developer (Intern)",
        location: "Remote",
        level: "Intern",
        type: "Internship",
        href: "/careers/apply?role=fullstack-intern",
        paused: true,
      },
    ],
  },
  {
    category: "Business & Growth",
    roles: [
      {
        title: "Business Development Intern (Sales)",
        location: "Remote",
        level: "Intern",
        type: "Internship",
        href: "/careers/apply?role=bd-intern",
      },
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="bg-[#FAFAF7]">
      {/* ── Hero: big headline left, short paragraph right ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-14">
        <div className="max-w-container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.05]"
            >
              We&apos;re looking for
              <br />
              talented people
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-slate-600 text-[15px] leading-relaxed md:pt-4 md:max-w-sm"
            >
              TenserLabs is growing fast, and we are always looking for
              passionate, dynamic, and talented individuals to join our
              distributed team all around the world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Full-bleed team photo ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
        className="pb-16 md:pb-20"
      >
        <div className="max-w-container mx-auto px-6">
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1800&h=900&fit=crop"
              alt="Our team collaborating"
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* ── Role groups ── */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          {groups.map((group, g) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: g * 0.08, duration: 0.5 }}
              className="rounded-2xl bg-white border border-slate-200 px-6 md:px-8 py-7 md:py-9"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
                {group.category}
              </h2>

              <ul className="divide-y divide-slate-200">
                {group.roles.map((role) => (
                  <li
                    key={role.title}
                    className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                  >
                    <div>
                      <div className="font-semibold text-slate-900 mb-2">
                        {role.title}
                      </div>
                      <div className="flex flex-wrap gap-x-6 gap-y-1 text-[11px] font-semibold tracking-[0.14em] uppercase text-slate-500">
                        <span>{role.location}</span>
                        <span>{role.level}</span>
                        <span>{role.type}</span>
                      </div>
                    </div>

                    {role.paused ? (
                      <span
                        className="shrink-0 inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-sm font-medium cursor-not-allowed"
                        aria-label={`Applications paused for ${role.title}`}
                      >
                        Applications Paused
                      </span>
                    ) : (
                      <Link
                        href={role.href}
                        className="group shrink-0 inline-flex items-center gap-2 pl-1.5 pr-5 py-1.5 rounded-full border border-slate-300 hover:border-accent/60 transition-colors text-slate-900"
                        aria-label={`Apply for ${role.title}`}
                      >
                        <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center group-hover:bg-accent-dark transition-colors">
                          <ArrowUpRight size={14} strokeWidth={2.4} />
                        </span>
                        <span className="text-sm font-medium">Apply</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer note under cards */}
        <div className="max-w-4xl mx-auto px-6 mt-10 text-center">
          <p className="text-sm text-slate-600">
            Don&apos;t see a role that fits?{" "}
            <Link
              href="/contact"
              className="text-accent-dark font-medium hover:underline underline-offset-4"
            >
              Reach out
            </Link>{" "}
            — we&apos;re always open to meeting great people.
          </p>
        </div>
      </section>
    </div>
  );
}
