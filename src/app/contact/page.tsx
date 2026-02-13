"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/shared";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const budgetRanges = [
  "Select budget range",
  "$5K – $15K",
  "$15K – $50K",
  "$50K – $100K",
  "$100K+",
  "Not sure yet",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Thanks for reaching out! We'll get back to you within 24 hours.");
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
            // get in touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-6">
            Let&apos;s <span className="gradient-text">Build Together</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? Need a technical partner? We&apos;re here to help
            turn your ideas into production-grade software.
          </p>
        </motion.div>
      </section>

      <SectionWrapper className="max-w-6xl mx-auto px-6 !pt-0">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-surface-light border border-surface-border rounded-2xl p-8">
              <h3 className="font-mono font-semibold text-xl mb-6">Tell us about your project</h3>
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-muted mb-2 font-mono">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-surface-border rounded-lg text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-2 font-mono">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-surface-border rounded-lg text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-muted mb-2 font-mono">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-surface-border rounded-lg text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors text-sm"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-2 font-mono">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-surface-border rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors text-sm appearance-none cursor-pointer"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-surface">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2 font-mono">Project Description *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-surface border border-surface-border rounded-lg text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-all hover:shadow-[0_0_30px_rgba(108,99,255,0.3)]"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Info Cards */}
            <div className="bg-surface-light border border-surface-border rounded-xl p-6">
              <h4 className="font-mono font-semibold text-sm mb-5 uppercase tracking-wider text-accent">Contact Info</h4>
              <div className="space-y-4">
                <a href="mailto:hello@tenserlabs.com" className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors">
                  <Mail size={18} className="text-accent/60" />
                  hello@tenserlabs.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-muted hover:text-accent transition-colors">
                  <Phone size={18} className="text-accent/60" />
                  +1 (234) 567-890
                </a>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <MapPin size={18} className="text-accent/60 flex-shrink-0 mt-0.5" />
                  <span>San Francisco, CA<br />Remote-first worldwide</span>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-surface-light border border-surface-border rounded-xl p-6">
              <h4 className="font-mono font-semibold text-sm mb-5 uppercase tracking-wider text-accent">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/tenserlabs", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/company/tenserlabs", label: "LinkedIn" },
                  { icon: Twitter, href: "https://x.com/tenserlabs", label: "Twitter" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-surface-lighter border border-surface-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all"
                    aria-label={s.label}
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-accent/5 border border-accent/15 rounded-xl p-6 text-center">
              <p className="font-mono text-sm text-accent font-medium mb-1">⚡ Quick Response</p>
              <p className="text-xs text-muted">We typically respond within 24 hours on business days.</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
