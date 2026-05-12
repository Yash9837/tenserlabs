"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Our Team" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Custom Software",
  "Web Applications",
  "Mobile Apps",
  "Cloud & DevOps",
  "AI / ML Solutions",
  "UI/UX Design",
  "Consulting",
];

const socials = [
  { icon: Github, href: "https://github.com/tenserlabs", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/company/tenserlabs", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/tenserlabs", label: "X / Twitter" },
  { icon: Mail, href: "mailto:hello@tenserlabs.com", label: "Email" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-[#FAFAF7] border-t border-slate-200">
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-bold text-white text-sm">
                T
              </div>
              <span className="font-bold text-lg text-slate-900">
                Tenser<span className="text-accent-dark">Labs</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Engineering Tomorrow&apos;s Code, Today. We transform ambitious ideas
              into scalable, production-grade digital products.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-slate-500 hover:text-accent-dark hover:bg-slate-200 border border-slate-200 transition-all"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-500 hover:text-accent-dark transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-slate-500">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-sm text-slate-500 mb-4">
              Get insights on tech, engineering culture, and our latest work.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
              />
              <button
                type="submit"
                className="p-2.5 bg-accent hover:bg-accent-dark rounded-lg text-white transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-container mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} TenserLabs. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-accent-dark transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent-dark transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
