"use client";

import { SectionWrapper, SectionHeading } from "@/components/ui/shared";
import { motion } from "framer-motion";

const clientsByIndustry = [
  {
    industry: "FinTech",
    clients: [
      { name: "NovaPay", work: "Payment gateway infrastructure" },
      { name: "PayStream", work: "Transaction analytics platform" },
      { name: "VaultX", work: "Digital wallet system" },
    ],
  },
  {
    industry: "HealthTech",
    clients: [
      { name: "MedSync", work: "Patient management platform" },
      { name: "HealthBridge", work: "Telemedicine app" },
      { name: "CareLink", work: "EHR integration system" },
    ],
  },
  {
    industry: "Logistics",
    clients: [
      { name: "ShipTrack", work: "Fleet tracking dashboard" },
      { name: "FreightLine", work: "Route optimization engine" },
    ],
  },
  {
    industry: "EdTech",
    clients: [
      { name: "LearnUp", work: "AI-powered tutoring app" },
      { name: "EduVerse", work: "Virtual classroom platform" },
    ],
  },
  {
    industry: "E-Commerce",
    clients: [
      { name: "CartFlow", work: "Checkout optimization" },
      { name: "Tenzi Jeans", work: "Wholesale fashion platform" },
      { name: "ShopNest", work: "Multi-vendor marketplace" },
    ],
  },
  {
    industry: "SaaS",
    clients: [
      { name: "ThriveUp", work: "Event management platform" },
      { name: "LeadFlow", work: "Real estate CRM" },
      { name: "CamRX", work: "Equipment rental platform" },
    ],
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
    <div>
      {/* Hero — Dark */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-4 py-1.5 text-xs font-medium text-accent-light bg-accent/15 rounded-full border border-accent/25 mb-4">
              Our Clients
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Trusted by <span className="gradient-text">Innovators</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              From ambitious startups to established enterprises — we partner with companies that dare to build differently.
            </p>
          </motion.div>
        </div>
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
              <h3 className="text-sm text-accent-light font-semibold uppercase tracking-wider mb-4">
                {group.industry}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {group.clients.map((client) => (
                  <div
                    key={client.name}
                    className="group relative px-6 py-5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-accent/30 transition-all card-hover text-center"
                  >
                    <span className="font-semibold text-slate-300 group-hover:text-accent-light text-base transition-colors">{client.name}</span>
                    {/* Hover tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-white text-slate-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {client.work}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Industries We Serve */}
      <SectionWrapper className="max-w-4xl mx-auto px-6">
        <SectionHeading badge="Industries" title="Industries We Serve" />
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm font-medium text-white hover:border-accent/30 hover:text-accent-light transition-all cursor-default"
            >
              {ind}
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
