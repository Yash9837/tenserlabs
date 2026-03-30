"use client";

import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="/contact"
        className="group flex items-center gap-2 px-5 py-3 bg-accent hover:bg-accent-dark text-white text-sm font-medium rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all animate-pulse-soft"
      >
        <MessageSquare size={16} />
        <span className="hidden sm:inline">Book a Call</span>
      </Link>
    </motion.div>
  );
}
