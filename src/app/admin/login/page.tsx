"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lock,
  Mail,
  Loader2,
  AlertCircle,
  ArrowUpRight,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);

  // If already signed in, bounce to the dashboard.
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/admin/applications");
      } else {
        setCheckingAuth(false);
      }
    });
    return () => unsub();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password
      );
      router.replace("/admin/applications");
    } catch (err: unknown) {
      const code =
        typeof err === "object" && err && "code" in err
          ? String((err as { code: string }).code)
          : "";

      let message = "Unable to sign in. Please try again.";
      if (
        code === "auth/invalid-credential" ||
        code === "auth/wrong-password" ||
        code === "auth/user-not-found"
      ) {
        message = "Invalid email or password.";
      } else if (code === "auth/too-many-requests") {
        message =
          "Too many failed attempts. Please wait a moment and try again.";
      } else if (code === "auth/invalid-email") {
        message = "That email address looks invalid.";
      } else if (code === "auth/network-request-failed") {
        message = "Network error. Check your connection and try again.";
      }

      setErrorMsg(message);
      setStatus("error");
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent" size={28} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        {/* Back to site */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-accent-dark transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to site
        </Link>

        {/* Card */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 md:p-10">
          {/* Logo / brand */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center font-bold text-white text-sm">
              T
            </div>
            <span className="font-semibold text-lg text-slate-900">
              Tenser<span className="text-accent-dark">Labs</span>
              <span className="ml-2 text-xs font-medium text-slate-500 uppercase tracking-[0.14em]">
                Admin
              </span>
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
              Sign in
            </h1>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              Sign in with your admin account to view internship applications.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800">
                Email
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@tenserlabs.com"
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-red-50 border border-red-200"
              >
                <AlertCircle
                  size={16}
                  className="text-red-600 flex-shrink-0 mt-0.5"
                />
                <p className="text-xs text-red-700">{errorMsg}</p>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group w-full inline-flex items-center justify-center gap-2 pl-2 pr-6 py-2 rounded-full bg-accent hover:bg-accent-dark text-white font-medium transition-all text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                {status === "submitting" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <ArrowUpRight size={16} strokeWidth={2.4} />
                )}
              </span>
              {status === "submitting" ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-3">
            <ShieldCheck
              size={16}
              className="text-accent-dark flex-shrink-0 mt-0.5"
            />
            <p className="text-xs text-slate-500 leading-relaxed">
              This area is restricted to TenserLabs team members. Accounts are
              provisioned manually — there is no public sign-up.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
