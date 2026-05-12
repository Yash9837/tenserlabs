"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  LogOut,
  Search,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  Linkedin,
  Globe,
  FileText,
  ExternalLink,
  X,
  Briefcase,
  Inbox,
  Filter,
  RefreshCw,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth, db } from "@/lib/firebase";

/* ── Types matching the shape written by /careers/apply ── */
interface Application {
  id: string; // firestore doc id
  regId: string;
  name: string;
  email: string;
  phone: string;
  college: string;
  courseYear: string;
  startDate: string;
  resumeLink: string;
  whyTenserLabs: string;
  howDidYouHear: string;
  experience: string | null;
  linkedin: string | null;
  portfolio: string | null;
  role: string;
  status: string;
  appliedAt: Timestamp | null;
}

/* ── Helpers ── */
function fmtDate(ts: Timestamp | null): string {
  if (!ts) return "—";
  try {
    return ts.toDate().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "—";
  }
}

function fmtDateTime(ts: Timestamp | null): string {
  if (!ts) return "—";
  try {
    return ts.toDate().toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "—";
  }
}

function fmtPlainDate(s: string): string {
  if (!s) return "—";
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return s;
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

const statusStyles: Record<string, string> = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  reviewed: "bg-blue-50 text-blue-700 border-blue-200",
  accepted: "bg-emerald-50 text-emerald-700 border-emerald-200",
  rejected: "bg-red-50 text-red-700 border-red-200",
};

function StatusPill({ status }: { status: string }) {
  const key = (status || "pending").toLowerCase();
  const cls = statusStyles[key] || "bg-slate-100 text-slate-700 border-slate-200";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-medium capitalize ${cls}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {key}
    </span>
  );
}

export default function AdminApplicationsPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Application | null>(null);

  /* ── Auth guard ── */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.replace("/admin/login");
      } else {
        setUser(u);
      }
      setAuthChecked(true);
    });
    return () => unsub();
  }, [router]);

  /* ── Fetch ── */
  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const q = query(
        collection(db, "intern_applications"),
        orderBy("appliedAt", "desc")
      );
      const snap = await getDocs(q);
      const rows: Application[] = snap.docs.map((doc) => {
        const data = doc.data() as Record<string, unknown>;
        return {
          id: doc.id,
          regId: (data.regId as string) || "—",
          name: (data.name as string) || "",
          email: (data.email as string) || "",
          phone: (data.phone as string) || "",
          college: (data.college as string) || "",
          courseYear: (data.courseYear as string) || "",
          startDate: (data.startDate as string) || "",
          resumeLink: (data.resumeLink as string) || "",
          whyTenserLabs: (data.whyTenserLabs as string) || "",
          howDidYouHear: (data.howDidYouHear as string) || "",
          experience: (data.experience as string | null) ?? null,
          linkedin: (data.linkedin as string | null) ?? null,
          portfolio: (data.portfolio as string | null) ?? null,
          role: (data.role as string) || "—",
          status: (data.status as string) || "pending",
          appliedAt: (data.appliedAt as Timestamp) || null,
        };
      });
      setApps(rows);
    } catch (err) {
      console.error(err);
      setError(
        "Couldn't load applications. Check your Firestore rules and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) load();
  }, [user]);

  /* ── Derived ── */
  const roles = useMemo(() => {
    const s = new Set<string>();
    apps.forEach((a) => s.add(a.role));
    return Array.from(s);
  }, [apps]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return apps.filter((a) => {
      if (roleFilter !== "all" && a.role !== roleFilter) return false;
      if (
        statusFilter !== "all" &&
        (a.status || "pending").toLowerCase() !== statusFilter
      )
        return false;
      if (!term) return true;
      const hay = [
        a.name,
        a.email,
        a.regId,
        a.college,
        a.courseYear,
        a.phone,
        a.role,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(term);
    });
  }, [apps, search, roleFilter, statusFilter]);

  const stats = useMemo(() => {
    const total = apps.length;
    const pending = apps.filter(
      (a) => (a.status || "pending").toLowerCase() === "pending"
    ).length;
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - 7);
    const thisWeek = apps.filter(
      (a) => a.appliedAt && a.appliedAt.toDate() >= startOfWeek
    ).length;
    return { total, pending, thisWeek };
  }, [apps]);

  const handleSignOut = async () => {
    await signOut(auth);
    router.replace("/admin/login");
  };

  /* ── Render ── */
  if (!authChecked) {
    return (
      <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent" size={28} />
      </div>
    );
  }

  if (!user) {
    return null; // redirect already triggered
  }

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      {/* Admin header */}
      <header className="sticky top-0 z-30 bg-[#FAFAF7]/90 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-bold text-white text-sm">
              T
            </div>
            <span className="font-semibold text-lg text-slate-900">
              Tenser<span className="text-accent-dark">Labs</span>
            </span>
            <span className="ml-2 text-xs font-medium text-slate-500 uppercase tracking-[0.14em] border-l border-slate-300 pl-3">
              Admin
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-slate-500">
              {user.email}
            </span>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border border-slate-300 text-slate-700 hover:border-accent/60 hover:text-accent-dark transition-all"
            >
              <LogOut size={14} />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-container mx-auto px-6 pt-10 pb-20">
        {/* Title row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <span className="text-sm text-slate-500">Dashboard</span>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight mt-1">
              Internship applications
            </h1>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              All applications submitted through the careers page, newest first.
            </p>
          </div>

          <button
            onClick={load}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-slate-300 text-slate-700 hover:border-accent/60 hover:text-accent-dark transition-all disabled:opacity-60 self-start"
          >
            <RefreshCw
              size={14}
              className={loading ? "animate-spin" : ""}
            />
            Refresh
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <StatCard label="Total applications" value={stats.total} />
          <StatCard label="Pending review" value={stats.pending} />
          <StatCard label="Last 7 days" value={stats.thisWeek} />
        </div>

        {/* Filters */}
        <div className="rounded-2xl bg-white border border-slate-200 p-4 md:p-5 mb-6">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email, registration ID, college…"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAFAF7] border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
              />
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <Filter
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="pl-9 pr-8 py-2.5 rounded-xl bg-[#FAFAF7] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all appearance-none"
                >
                  <option value="all">All roles</option>
                  {roles.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-[#FAFAF7] border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all appearance-none"
              >
                <option value="all">All statuses</option>
                <option value="pending">Pending</option>
                <option value="reviewed">Reviewed</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-3 text-slate-500">
              <Loader2 className="animate-spin text-accent" size={24} />
              <p className="text-sm">Loading applications…</p>
            </div>
          ) : error ? (
            <div className="py-16 px-6 text-center">
              <p className="text-sm text-red-600">{error}</p>
              <button
                onClick={load}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-full border border-slate-300 text-slate-700 hover:border-accent/60 hover:text-accent-dark transition-all"
              >
                Try again
              </button>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 px-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#F3F4EE] border border-slate-200 flex items-center justify-center">
                <Inbox size={22} className="text-slate-400" />
              </div>
              <p className="text-sm font-medium text-slate-900">
                {apps.length === 0
                  ? "No applications yet"
                  : "No applications match your filters"}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {apps.length === 0
                  ? "Submissions from the careers page will show up here."
                  : "Try clearing the search or changing the filters."}
              </p>
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#FAFAF7] border-b border-slate-200">
                    <tr className="text-left text-[11px] uppercase tracking-[0.12em] text-slate-500">
                      <th className="px-5 py-3 font-medium">Candidate</th>
                      <th className="px-5 py-3 font-medium">Role</th>
                      <th className="px-5 py-3 font-medium">College</th>
                      <th className="px-5 py-3 font-medium">Applied</th>
                      <th className="px-5 py-3 font-medium">Status</th>
                      <th className="px-5 py-3 font-medium text-right">
                        Reg ID
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filtered.map((a) => (
                      <tr
                        key={a.id}
                        onClick={() => setSelected(a)}
                        className="hover:bg-[#FAFAF7] cursor-pointer transition-colors"
                      >
                        <td className="px-5 py-4">
                          <div className="font-medium text-slate-900">
                            {a.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {a.email}
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F3F4EE] border border-slate-200 text-[11px] text-slate-700 font-medium">
                            <Briefcase size={11} />
                            {a.role}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          <div>{a.college}</div>
                          <div className="text-xs text-slate-500">
                            {a.courseYear}
                          </div>
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {fmtDate(a.appliedAt)}
                        </td>
                        <td className="px-5 py-4">
                          <StatusPill status={a.status} />
                        </td>
                        <td className="px-5 py-4 text-right font-mono text-xs text-slate-500">
                          <div className="inline-flex items-center gap-1">
                            {a.regId}
                            <ChevronRight
                              size={14}
                              className="text-slate-400"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden divide-y divide-slate-100">
                {filtered.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setSelected(a)}
                    className="w-full text-left px-5 py-4 hover:bg-[#FAFAF7] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="font-medium text-slate-900">
                        {a.name}
                      </div>
                      <StatusPill status={a.status} />
                    </div>
                    <div className="text-xs text-slate-500 mb-2">
                      {a.email}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#F3F4EE] border border-slate-200">
                        <Briefcase size={10} />
                        {a.role}
                      </span>
                      <span>{a.college}</span>
                      <span className="text-slate-400">·</span>
                      <span>{fmtDate(a.appliedAt)}</span>
                    </div>
                    <div className="mt-2 font-mono text-[11px] text-slate-400">
                      {a.regId}
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <p className="text-xs text-slate-400 mt-4">
          Showing {filtered.length} of {apps.length}
        </p>
      </main>

      {/* Detail drawer */}
      <DetailDrawer
        application={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}

/* ── Stat card ── */
function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4">
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <p className="text-3xl font-semibold text-slate-900 mt-1">{value}</p>
    </div>
  );
}

/* ── Detail drawer ── */
function DetailDrawer({
  application,
  onClose,
}: {
  application: Application | null;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <AnimatePresence>
      {application && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/30 z-40"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full sm:max-w-xl bg-white border-l border-slate-200 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-[11px] text-slate-500 uppercase tracking-[0.14em]">
                  Application
                </p>
                <p className="font-semibold text-slate-900 truncate">
                  {application.name}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-2">
                <StatusPill status={application.status} />
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F3F4EE] border border-slate-200 text-[11px] text-slate-700 font-medium">
                  <Briefcase size={11} />
                  {application.role}
                </span>
                <button
                  onClick={() => copy("regId", application.regId)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-slate-200 text-[11px] font-mono text-slate-600 hover:border-accent/60 hover:text-accent-dark transition-colors"
                  title="Copy registration ID"
                >
                  {copied === "regId" ? (
                    <Check size={11} className="text-emerald-600" />
                  ) : (
                    <Copy size={11} />
                  )}
                  {application.regId}
                </button>
              </div>

              {/* Contact */}
              <DetailSection title="Contact">
                <DetailRow
                  icon={<Mail size={14} />}
                  label="Email"
                  value={application.email}
                  copyable
                  onCopy={() => copy("email", application.email)}
                  copied={copied === "email"}
                  href={`mailto:${application.email}`}
                />
                <DetailRow
                  icon={<Phone size={14} />}
                  label="Phone"
                  value={application.phone}
                  copyable
                  onCopy={() => copy("phone", application.phone)}
                  copied={copied === "phone"}
                  href={`tel:${application.phone}`}
                />
              </DetailSection>

              {/* Education */}
              <DetailSection title="Education">
                <DetailRow
                  icon={<GraduationCap size={14} />}
                  label="College"
                  value={application.college}
                />
                <DetailRow
                  icon={<GraduationCap size={14} />}
                  label="Course & year"
                  value={application.courseYear}
                />
              </DetailSection>

              {/* Availability */}
              <DetailSection title="Availability & resume">
                <DetailRow
                  icon={<Calendar size={14} />}
                  label="Start date"
                  value={fmtPlainDate(application.startDate)}
                />
                <DetailRow
                  icon={<FileText size={14} />}
                  label="Resume"
                  value={application.resumeLink}
                  href={application.resumeLink}
                  external
                  truncate
                />
              </DetailSection>

              {/* About */}
              <DetailSection title="About">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">
                    Why TenserLabs
                  </p>
                  <p className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
                    {application.whyTenserLabs || "—"}
                  </p>
                </div>
                <DetailRow
                  icon={<Inbox size={14} />}
                  label="How they heard"
                  value={application.howDidYouHear}
                />
                {application.experience && (
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">
                      Experience
                    </p>
                    <p className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
                      {application.experience}
                    </p>
                  </div>
                )}
              </DetailSection>

              {/* Links */}
              {(application.linkedin || application.portfolio) && (
                <DetailSection title="Links">
                  {application.linkedin && (
                    <DetailRow
                      icon={<Linkedin size={14} />}
                      label="LinkedIn"
                      value={application.linkedin}
                      href={application.linkedin}
                      external
                      truncate
                    />
                  )}
                  {application.portfolio && (
                    <DetailRow
                      icon={<Globe size={14} />}
                      label="Portfolio"
                      value={application.portfolio}
                      href={application.portfolio}
                      external
                      truncate
                    />
                  )}
                </DetailSection>
              )}

              {/* Meta */}
              <DetailSection title="Submission">
                <DetailRow
                  icon={<Calendar size={14} />}
                  label="Submitted at"
                  value={fmtDateTime(application.appliedAt)}
                />
              </DetailSection>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-[#FAFAF7] border border-slate-200 p-5 space-y-4">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function DetailRow({
  icon,
  label,
  value,
  href,
  external = false,
  copyable = false,
  onCopy,
  copied = false,
  truncate = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  copyable?: boolean;
  onCopy?: () => void;
  copied?: boolean;
  truncate?: boolean;
}) {
  const content = (
    <span
      className={`text-sm text-slate-900 ${
        truncate ? "truncate block max-w-full" : ""
      }`}
    >
      {value || "—"}
    </span>
  );

  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-start gap-2.5 min-w-0 flex-1">
        <span className="text-slate-400 mt-0.5">{icon}</span>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">
            {label}
          </p>
          {href ? (
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-sm text-accent-dark hover:underline inline-flex items-center gap-1.5 break-all"
            >
              <span className={truncate ? "truncate max-w-[280px]" : ""}>
                {value || "—"}
              </span>
              {external && (
                <ExternalLink size={11} className="flex-shrink-0" />
              )}
            </a>
          ) : (
            content
          )}
        </div>
      </div>
      {copyable && (
        <button
          onClick={onCopy}
          className="p-1.5 rounded-lg hover:bg-white text-slate-400 hover:text-slate-700 transition-colors flex-shrink-0"
          aria-label={`Copy ${label}`}
        >
          {copied ? (
            <Check size={13} className="text-emerald-600" />
          ) : (
            <Copy size={13} />
          )}
        </button>
      )}
    </div>
  );
}
