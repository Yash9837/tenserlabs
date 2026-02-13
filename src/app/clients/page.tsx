"use client";

import { SectionWrapper, SectionHeading } from "@/components/ui/shared";
import { motion } from "framer-motion";

const clientsByIndustry = [
  {
    industry: "FinTech",
    clients: ["NovaPay", "PayStream", "VaultX"],
  },
  {
    industry: "HealthTech",
    clients: ["MedSync", "HealthBridge", "CareLink"],
  },
  {
    industry: "Logistics",
    clients: ["ShipTrack", "FreightLine"],
  },
  {
    industry: "EdTech",
    clients: ["LearnUp", "EduVerse"],
  },
  {
    industry: "E-Commerce",
    clients: ["CartFlow", "Tenzi Jeans", "ShopNest"],
  },
  {
    industry: "SaaS",
    clients: ["ThriveUp", "LeadFlow", "CamRX"],
  },
];

const industries = [
  "FinTech",
  "HealthTech",
  "SaaS",
  "Logistics",
  "E-Commerce",
  "EdTech",
  "Real Estate",
  "Media",
];

export default function ClientsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-accent bg-accent/10 rounded-full border border-accent/20 mb-4">
            // our clients
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight mb-6">
            Trusted by <span className="gradient-text">Innovators</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            From ambitious startups to established enterprises — we partner with companies that dare to build differently.
          </p>
        </motion.div>
      </section>

      {/* Client Logos by Industry */}
      <SectionWrapper className="max-w-5xl mx-auto px-6 !pt-0">
        <div className="space-y-10">
          {clientsByIndustry.map((group, gi) => (
            <motion.div
              key={group.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <h3 className="font-mono text-sm text-accent font-semibold uppercase tracking-wider mb-4">
                {group.industry}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {group.clients.map((client) => (
                  <div
                    key={client}
                    className="px-6 py-5 rounded-xl bg-surface-light border border-surface-border hover:border-accent/20 transition-all text-center"
                  >
                    <span className="font-mono font-semibold text-muted text-base">{client}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Industries We Serve */}
      <SectionWrapper className="max-w-4xl mx-auto px-6">
        <SectionHeading badge="{ industries }" title="Industries We Serve" />
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 rounded-full bg-surface-light border border-surface-border text-sm font-mono text-foreground hover:border-accent/30 hover:text-accent transition-all cursor-default"
            >
              {ind}
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
