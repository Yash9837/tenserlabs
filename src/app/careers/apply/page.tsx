"use client";

import { useState, useRef, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  FileText,
  MessageSquare,
  Radio,
  Briefcase,
  Linkedin,
  Globe,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Rocket,
  Copy,
  Check,
} from "lucide-react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

/* ─── Types ─── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  courseYear: string;
  startDate: string;
  resumeLink: string;
  whyTenserLabs: string;
  howDidYouHear: string;
  experience: string;
  linkedin: string;
  portfolio: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  college: "",
  courseYear: "",
  startDate: "",
  resumeLink: "",
  whyTenserLabs: "",
  howDidYouHear: "",
  experience: "",
  linkedin: "",
  portfolio: "",
};

/* ─── Registration ID Generator ─── */
function generateRegId(): string {
  const now = new Date();
  const y = now.getFullYear().toString().slice(-2);
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `TL-INT-${y}${m}-${rand}`;
}

/* ─── Input styles ─── */
const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all";

const textareaClass =
  "w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none";

/* ─── Field wrapper ─── */
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

/* ─── Section wrapper ─── */
function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 px-6 md:px-8 py-7 md:py-8 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {description && (
          <p className="text-sm text-slate-500 mt-1">{description}</p>
        )}
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

/* ─── Role config ─── */
const roles = {
  sales: {
    title: "Business Development Intern (Sales)",
    firestoreRole: "Business Development Intern (Sales)",
    tagline:
      "Help us find and connect with the clients who'll shape TenserLabs' next chapter.",
    paused: false,
  },
  tech: {
    title: "Full-Stack Developer (Intern)",
    firestoreRole: "Full-Stack Developer (Intern)",
    tagline:
      "Ship real features on live client products alongside our engineering team.",
    paused: true,
  },
} as const;

type RoleKey = keyof typeof roles;

function resolveRoleKey(raw: string | null): RoleKey {
  // Accept legacy ?role=tech / ?role=sales AND the new ?role=fullstack-intern / ?role=bd-intern.
  if (!raw) return "sales";
  const r = raw.toLowerCase();
  if (r === "tech" || r === "fullstack-intern" || r === "fullstack") return "tech";
  return "sales";
}

/* ─── Page (wrapper with Suspense for useSearchParams) ─── */
export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAF7]" />}>
      <ApplyForm />
    </Suspense>
  );
}

function ApplyForm() {
  const searchParams = useSearchParams();
  const roleKey = resolveRoleKey(searchParams.get("role"));
  const roleInfo = useMemo(() => roles[roleKey], [roleKey]);

  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "duplicate"
  >("idle");
  const [regId, setRegId] = useState("");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  if (roleInfo.paused) {
    return (
      <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full text-center"
        >
          <div className="p-10 rounded-2xl bg-white border border-slate-200">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center">
              <AlertCircle size={32} className="text-amber-600" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              Applications paused
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We&apos;re not currently accepting applications for the{" "}
              <span className="font-medium text-slate-900">
                {roleInfo.title}
              </span>{" "}
              role. Please check back soon, or explore our other open roles.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-full transition-all"
            >
              <ArrowLeft size={16} />
              Back to Careers
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const set =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  /* ── Submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const emailQuery = query(
        collection(db, "intern_applications"),
        where("email", "==", form.email.toLowerCase().trim())
      );
      const existing = await getDocs(emailQuery);

      if (!existing.empty) {
        setStatus("duplicate");
        return;
      }

      const id = generateRegId();

      await addDoc(collection(db, "intern_applications"), {
        regId: id,
        name: form.name.trim(),
        email: form.email.toLowerCase().trim(),
        phone: form.phone.trim(),
        college: form.college.trim(),
        courseYear: form.courseYear.trim(),
        startDate: form.startDate,
        resumeLink: form.resumeLink.trim(),
        whyTenserLabs: form.whyTenserLabs.trim(),
        howDidYouHear: form.howDidYouHear.trim(),
        experience: form.experience.trim() || null,
        linkedin: form.linkedin.trim() || null,
        portfolio: form.portfolio.trim() || null,
        role: roleInfo.firestoreRole,
        appliedAt: serverTimestamp(),
        status: "pending",
      });

      setRegId(id);
      setStatus("success");
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
    }
  };

  const copyRegId = () => {
    navigator.clipboard.writeText(regId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* ── Success state ── */
  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full text-center"
        >
          <div className="p-10 rounded-2xl bg-white border border-slate-200">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
              <CheckCircle2 size={32} className="text-emerald-600" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              Application submitted
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Thanks for applying — we&apos;ll review your submission and get back
              to you within 48 hours.
            </p>

            <div className="p-5 rounded-xl bg-[#F3F4EE] border border-slate-200 mb-8">
              <p className="text-[11px] text-slate-500 uppercase tracking-[0.14em] mb-2">
                Registration ID
              </p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-xl font-mono font-semibold text-accent-dark tracking-wider">
                  {regId}
                </span>
                <button
                  onClick={copyRegId}
                  className="p-2 rounded-lg hover:bg-white transition-colors"
                  title="Copy ID"
                >
                  {copied ? (
                    <Check size={16} className="text-emerald-600" />
                  ) : (
                    <Copy size={16} className="text-slate-500" />
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Save this ID for future reference.
              </p>
            </div>

            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-full transition-all"
            >
              <ArrowLeft size={16} />
              Back to Careers
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <div className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-20">
        {/* Back link */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent-dark transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Back to Careers
        </Link>

        {/* Header — Altris-style: label left + big headline split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[auto_1fr] gap-4 md:gap-6 items-start mb-12"
        >
          <span className="text-sm text-slate-500 md:mt-2 whitespace-nowrap">
            Application
          </span>
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
              {roleInfo.title}
            </h1>
            <p className="text-slate-600 text-[15px] leading-relaxed mt-4 max-w-lg">
              {roleInfo.tagline} Fill in the form below and we&apos;ll reply
              within 48 hours.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          {/* Personal Info */}
          <Section title="Personal information">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" required>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={set("name")}
                  className={inputClass}
                />
              </Field>
              <Field label="Email address" required>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={set("email")}
                  className={inputClass}
                />
              </Field>
              <Field label="Phone number" required>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={set("phone")}
                  className={inputClass}
                />
              </Field>
            </div>
          </Section>

          {/* Education */}
          <Section title="Education">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="College / university" required>
                <input
                  type="text"
                  required
                  placeholder="IIT Delhi"
                  value={form.college}
                  onChange={set("college")}
                  className={inputClass}
                />
              </Field>
              <Field label="Course & year" required>
                <input
                  type="text"
                  required
                  placeholder="B.Tech CSE, 3rd Year"
                  value={form.courseYear}
                  onChange={set("courseYear")}
                  className={inputClass}
                />
              </Field>
            </div>
          </Section>

          {/* Availability */}
          <Section title="Availability & resume">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Start date" required>
                <input
                  type="date"
                  required
                  value={form.startDate}
                  onChange={set("startDate")}
                  className={inputClass}
                />
              </Field>
              <Field label="Resume (Google Drive link)" required>
                <input
                  type="url"
                  required
                  placeholder="https://drive.google.com/..."
                  value={form.resumeLink}
                  onChange={set("resumeLink")}
                  className={inputClass}
                />
              </Field>
            </div>
          </Section>

          {/* About You */}
          <Section title="About you">
            <Field label="Why TenserLabs?" required>
              <textarea
                required
                rows={4}
                placeholder="Tell us what excites you about joining TenserLabs…"
                value={form.whyTenserLabs}
                onChange={set("whyTenserLabs")}
                className={textareaClass}
              />
            </Field>
            <Field label="How did you hear about us?" required>
              <select
                required
                value={form.howDidYouHear}
                onChange={set("howDidYouHear")}
                className={inputClass}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Instagram">Instagram</option>
                <option value="Twitter/X">Twitter / X</option>
                <option value="College Placement Cell">
                  College placement cell
                </option>
                <option value="Friend / Referral">Friend / Referral</option>
                <option value="Google Search">Google search</option>
                <option value="Other">Other</option>
              </select>
            </Field>
          </Section>

          {/* Optional */}
          <Section
            title="Optional"
            description="Helps your application but not required."
          >
            <Field label="Experience (if any)">
              <textarea
                rows={3}
                placeholder="E.g., Sales internship at XYZ, freelance lead generation…"
                value={form.experience}
                onChange={set("experience")}
                className={textareaClass}
              />
            </Field>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="LinkedIn profile">
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/…"
                  value={form.linkedin}
                  onChange={set("linkedin")}
                  className={inputClass}
                />
              </Field>
              <Field label="Portfolio / website">
                <input
                  type="url"
                  placeholder="https://yoursite.com"
                  value={form.portfolio}
                  onChange={set("portfolio")}
                  className={inputClass}
                />
              </Field>
            </div>
          </Section>

          {/* Errors */}
          <AnimatePresence>
            {status === "duplicate" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200"
              >
                <AlertCircle
                  size={18}
                  className="text-amber-600 flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-medium text-amber-800">
                    This email has already been used
                  </p>
                  <p className="text-xs text-amber-700 mt-1">
                    An application with this email already exists. Please use a
                    different email or contact us if you think this is a
                    mistake.
                  </p>
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200"
              >
                <AlertCircle
                  size={18}
                  className="text-red-600 flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-medium text-red-800">
                    Something went wrong
                  </p>
                  <p className="text-xs text-red-700 mt-1">
                    Please try again. If it persists, email us at{" "}
                    <a
                      href="mailto:hello@tenserlabs.com"
                      className="underline hover:text-red-900"
                    >
                      hello@tenserlabs.com
                    </a>
                    .
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 pl-2 pr-6 py-2 rounded-full border border-slate-300 hover:border-accent/60 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 font-medium transition-all text-base"
            >
              <span className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center group-hover:bg-accent-dark transition-colors">
                {status === "submitting" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <ArrowUpRight size={16} strokeWidth={2.4} />
                )}
              </span>
              {status === "submitting" ? "Submitting…" : "Submit application"}
            </button>
            <span className="text-xs text-slate-500">
              By applying, you agree to our privacy policy.
            </span>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
