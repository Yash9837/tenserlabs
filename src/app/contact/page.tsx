"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Clock,
  MessageCircle,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const budgetRanges = [
  "Select budget range",
  "$5K – $15K",
  "$15K – $50K",
  "$50K – $100K",
  "$100K+",
  "Not sure yet",
];

const projectTypes = [
  "Select project type",
  "New product / MVP",
  "Revamp existing product",
  "Add a feature",
  "Consulting / audit",
  "Dedicated team",
  "Something else",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all";

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-800">
        {label}
        {required && <span className="text-accent-dark ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New Project Inquiry from ${formData.name}${
        formData.company ? ` (${formData.company})` : ""
      }`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "N/A"}
Project type: ${formData.projectType || "N/A"}
Budget: ${formData.budget || "N/A"}

Project Description:
${formData.message}`
    );
    window.location.href = `mailto:contact@tenserlabs.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#FAFAF7]">
      {/* Hero */}
      <PageHero
        label="Contact"
        title={
          <>
            Let&apos;s build
            <br />
            together
          </>
        }
        description="Have a project in mind, or just exploring? Tell us about it and we'll reply within one business day with a clear next step."
      />

      {/* Body */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-container mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white border border-slate-200 px-6 md:px-10 py-8 md:py-10 space-y-6"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              Tell us about your project
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" required>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className={inputClass}
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@company.com"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Company">
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Acme Inc."
                  className={inputClass}
                />
              </Field>
              <Field label="Project type">
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  {projectTypes.map((t) => (
                    <option
                      key={t}
                      value={t === "Select project type" ? "" : t}
                      disabled={t === "Select project type"}
                    >
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Budget range">
              <select
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                {budgetRanges.map((b) => (
                  <option
                    key={b}
                    value={b === "Select budget range" ? "" : b}
                    disabled={b === "Select budget range"}
                  >
                    {b}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Project description" required>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Goals, timeline, constraints, any specific requirements…"
                className={`${inputClass} resize-none`}
              />
            </Field>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <button
                type="submit"
                className="group inline-flex items-center gap-2 pl-2 pr-6 py-2 rounded-full border border-slate-300 hover:border-accent/60 text-slate-900 font-medium transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center group-hover:bg-accent-dark transition-colors">
                  <ArrowUpRight size={16} strokeWidth={2.4} />
                </span>
                Send message
              </button>
              <span className="text-xs text-slate-500">
                We&apos;ll reply within one business day.
              </span>
            </div>
          </motion.form>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="space-y-5"
          >
            {/* Direct contact */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-500 mb-5">
                Reach us directly
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:contact@tenserlabs.com"
                    className="flex items-center gap-3 text-sm text-slate-800 hover:text-accent-dark transition-colors"
                  >
                    <span className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent-dark">
                      <Mail size={15} />
                    </span>
                    contact@tenserlabs.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917303426763"
                    className="flex items-center gap-3 text-sm text-slate-800 hover:text-accent-dark transition-colors"
                  >
                    <span className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent-dark">
                      <Phone size={15} />
                    </span>
                    +91 73034 26763
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-800">
                  <span className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent-dark">
                    <MapPin size={15} />
                  </span>
                  Remote-first · worldwide
                </li>
              </ul>
            </div>

            {/* Response time */}
            <div className="rounded-2xl bg-[#F3F4EE] border border-slate-200 p-6 flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-accent-dark flex-shrink-0 border border-slate-200">
                <Clock size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900 mb-0.5">
                  Quick response
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We typically reply within 24 hours on business days.
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-500 mb-5">
                Follow us
              </h3>
              <div className="flex gap-3">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/tenserlabs",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/company/tenserlabs",
                    label: "LinkedIn",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/tenserlabs",
                    label: "X / Twitter",
                  },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-[#F3F4EE] border border-slate-200 flex items-center justify-center text-slate-700 hover:text-accent-dark hover:border-accent/40 transition-all"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Careers nudge */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent-dark flex-shrink-0">
                  <MessageCircle size={15} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Looking to join us?
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Check our open roles — we&apos;re always hiring great people.
                  </p>
                </div>
              </div>
              <Link
                href="/careers"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark hover:underline underline-offset-4"
              >
                View careers
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </Link>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
}
