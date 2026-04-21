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

/* ─── Input Field Component ─── */
function Field({
  label,
  icon: Icon,
  required = false,
  children,
}: {
  label: string;
  icon: React.ElementType;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
        <Icon size={14} className="text-accent-light" />
        {label}
        {required && <span className="text-red-400">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all";

const textareaClass =
  "w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none";

/* ─── Role config ─── */
const roles = {
  sales: {
    title: "Business Development (Sales) Intern",
    firestoreRole: "Business Development (Sales) Intern",
    color: "accent",
    badgeClass: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  },
  tech: {
    title: "Tech (Development) Intern",
    firestoreRole: "Tech (Development) Intern",
    color: "cyan",
    badgeClass: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
  },
} as const;

/* ─── Page (wrapper with Suspense for useSearchParams) ─── */
export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ApplyForm />
    </Suspense>
  );
}

function ApplyForm() {
  const searchParams = useSearchParams();
  const roleKey = searchParams.get("role") === "tech" ? "tech" : "sales";
  const roleInfo = useMemo(() => roles[roleKey], [roleKey]);

  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "duplicate"
  >("idle");
  const [regId, setRegId] = useState("");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  /* ── Submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // 1. Check for duplicate email
      const emailQuery = query(
        collection(db, "intern_applications"),
        where("email", "==", form.email.toLowerCase().trim())
      );
      const existing = await getDocs(emailQuery);

      if (!existing.empty) {
        setStatus("duplicate");
        return;
      }

      // 2. Generate reg ID
      const id = generateRegId();

      // 3. Save to Firestore
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

  /* ── Success State ── */
  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="absolute inset-0 grid-bg-dark" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[140px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-lg w-full text-center"
        >
          <div className="p-10 rounded-2xl bg-slate-900/80 border border-slate-700/50 backdrop-blur-xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-500/15 flex items-center justify-center">
              <CheckCircle2 size={32} className="text-emerald-400" />
            </div>
            <h2 className="text-2xl font-extrabold text-white mb-2">
              Application Submitted!
            </h2>
            <p className="text-slate-400 mb-8">
              Welcome to the Tenser Labs family. We&apos;ll review your application
              and get back to you soon.
            </p>

            {/* Reg ID Card */}
            <div className="p-5 rounded-xl bg-slate-800/60 border border-accent/20 mb-8">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                Your Registration ID
              </p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl font-mono font-bold text-accent-light tracking-wider">
                  {regId}
                </span>
                <button
                  onClick={copyRegId}
                  className="p-2 rounded-lg bg-slate-700/50 hover:bg-accent/20 transition-colors"
                  title="Copy ID"
                >
                  {copied ? (
                    <Check size={16} className="text-emerald-400" />
                  ) : (
                    <Copy size={16} className="text-slate-400" />
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Save this ID for future reference
              </p>
            </div>

            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <ArrowLeft size={16} />
              Back to Careers
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 grid-bg-dark" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Back link */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent-light transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to Careers
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border ${roleInfo.badgeClass}`}>
              <Rocket size={12} /> Internship
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Apply — <span className="gradient-text">{roleInfo.title}</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Fill in the form below and we&apos;ll get back to you within 48 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-10"
        >
          {/* ── Section: Personal Info ── */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-700/40 backdrop-blur-sm space-y-6">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <User size={16} className="text-accent-light" />
              Personal Information
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" icon={User} required>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={set("name")}
                  className={inputClass}
                />
              </Field>

              <Field label="Email Address" icon={Mail} required>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={set("email")}
                  className={inputClass}
                />
              </Field>

              <Field label="Phone Number" icon={Phone} required>
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
          </div>

          {/* ── Section: Education ── */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-700/40 backdrop-blur-sm space-y-6">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <GraduationCap size={16} className="text-accent-light" />
              Education
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="College / University" icon={GraduationCap} required>
                <input
                  type="text"
                  required
                  placeholder="IIT Delhi"
                  value={form.college}
                  onChange={set("college")}
                  className={inputClass}
                />
              </Field>

              <Field label="Course & Year" icon={GraduationCap} required>
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
          </div>

          {/* ── Section: Availability ── */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-700/40 backdrop-blur-sm space-y-6">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Calendar size={16} className="text-accent-light" />
              Availability & Resume
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Start Date Availability" icon={Calendar} required>
                <input
                  type="date"
                  required
                  value={form.startDate}
                  onChange={set("startDate")}
                  className={inputClass}
                />
              </Field>

              <Field label="Resume (Google Drive link)" icon={FileText} required>
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
          </div>

          {/* ── Section: About You ── */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-700/40 backdrop-blur-sm space-y-6">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <MessageSquare size={16} className="text-accent-light" />
              About You
            </h3>

            <Field label="Why Tenser Labs?" icon={MessageSquare} required>
              <textarea
                required
                rows={4}
                placeholder="Tell us what excites you about joining Tenser Labs..."
                value={form.whyTenserLabs}
                onChange={set("whyTenserLabs")}
                className={textareaClass}
              />
            </Field>

            <Field label="How did you hear about us?" icon={Radio} required>
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
                <option value="College Placement Cell">College Placement Cell</option>
                <option value="Friend / Referral">Friend / Referral</option>
                <option value="Google Search">Google Search</option>
                <option value="Other">Other</option>
              </select>
            </Field>
          </div>

          {/* ── Section: Optional ── */}
          <div className="p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-dashed border-slate-700/40 backdrop-blur-sm space-y-6">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Briefcase size={16} className="text-slate-500" />
              Optional
              <span className="text-xs font-normal text-slate-500">
                (but helps your application)
              </span>
            </h3>

            <Field label="Experience (if any)" icon={Briefcase}>
              <textarea
                rows={3}
                placeholder="E.g., Sales internship at XYZ, freelance lead generation..."
                value={form.experience}
                onChange={set("experience")}
                className={textareaClass}
              />
            </Field>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="LinkedIn Profile" icon={Linkedin}>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  value={form.linkedin}
                  onChange={set("linkedin")}
                  className={inputClass}
                />
              </Field>

              <Field label="Portfolio / Website" icon={Globe}>
                <input
                  type="url"
                  placeholder="https://yoursite.com"
                  value={form.portfolio}
                  onChange={set("portfolio")}
                  className={inputClass}
                />
              </Field>
            </div>
          </div>

          {/* ── Errors ── */}
          <AnimatePresence>
            {status === "duplicate" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20"
              >
                <AlertCircle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-300">
                    This email has already been used
                  </p>
                  <p className="text-xs text-amber-400/70 mt-1">
                    An application with this email address already exists. Please use a different email or contact us if you think this is a mistake.
                  </p>
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
              >
                <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-300">
                    Something went wrong
                  </p>
                  <p className="text-xs text-red-400/70 mt-1">
                    Please try again. If the issue persists, reach out to us at{" "}
                    <a
                      href="mailto:hello@tenserlabs.com"
                      className="underline hover:text-red-300"
                    >
                      hello@tenserlabs.com
                    </a>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Submit ── */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent hover:bg-accent-light disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 text-base"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <Rocket size={16} />
                </>
              )}
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
