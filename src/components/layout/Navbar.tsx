"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const hasDarkHero = pathname === "/"; // only the home page has the sage hero panel
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the home page: navbar floats over the sage hero (light text) while near
  // the top, then becomes a light bar after scrolling past the hero.
  // On every other page: navbar is always the light-bar variant (dark text on
  // translucent cream) so it's visible at the top.
  const onDark = hasDarkHero && !scrolled;

  // Header chrome: on home we let it go transparent over the sage hero;
  // everywhere else we always show the light bar so the nav is visible.
  const headerBg = onDark
    ? "bg-transparent"
    : "bg-[#FAFAF7]/90 backdrop-blur-xl border-b border-slate-200";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <nav className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
              onDark
                ? "bg-white/90 text-accent-dark"
                : "bg-accent text-white"
            }`}
          >
            T
          </div>
          <span
            className={`font-semibold text-lg transition-colors ${
              onDark ? "text-white" : "text-slate-900"
            }`}
          >
            Tenser
            <span className={onDark ? "text-white/80" : "text-accent-dark"}>
              Labs
            </span>
          </span>
        </Link>

        <div
          className={`hidden lg:flex items-center gap-1 px-2 py-1 rounded-full transition-colors ${
            onDark ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-1.5 text-sm transition-colors rounded-full ${
                onDark
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-900/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
              onDark
                ? "bg-white text-slate-900 hover:bg-white/90"
                : "bg-accent hover:bg-accent-dark text-white shadow-sm"
            }`}
          >
            Sign in
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 transition-colors ${
            onDark ? "text-white" : "text-slate-700 hover:text-slate-900"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 bg-[#FAFAF7] z-40"
          >
            <div className="px-6 py-8 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-lg font-medium text-slate-900 hover:text-accent-dark rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 text-base font-medium bg-accent hover:bg-accent-dark text-white rounded-full transition-all"
                >
                  Sign in
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
