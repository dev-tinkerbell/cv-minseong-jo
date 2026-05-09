"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillCategories } from "@/lib/data";

const typeColors = {
  bio: { bg: "#1a3a2a", accent: "#2ecc71", border: "#1e4a2e", dim: "#0f2118" },
  comp: { bg: "#1a2a3a", accent: "#4a7fff", border: "#1e3a6e", dim: "#0d1a2a" },
  pharma: { bg: "#2a1a3a", accent: "#9b59b6", border: "#3a1a5a", dim: "#1a0d26" },
  gen: { bg: "#3a2a1a", accent: "#e67e22", border: "#4a3a1a", dim: "#261a0d" },
  neutral: { bg: "#1e1e2e", accent: "#9ba3b2", border: "#2a2a3a", dim: "#141420" },
};

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: "#0d0d14", borderTop: "1px solid #1e1e2e" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="07"
          title="Skills & Methodologies"
          subtitle="Technical expertise across in vivo, in vitro, and computational research domains"
        />

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const c = typeColors[cat.type];
            const [primary, ...rest] = cat.skills;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded overflow-hidden"
                style={{ border: "1px solid #1e1e2e" }}
              >
                {/* Category header */}
                <div
                  className="px-5 py-4 flex items-center gap-2.5"
                  style={{ backgroundColor: c.dim, borderBottom: `1px solid ${c.border}` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c.accent }} />
                  <span className="text-xs font-semibold tracking-wide" style={{ color: c.accent }}>
                    {cat.name}
                  </span>
                </div>

                <div className="p-5" style={{ backgroundColor: "#111118" }}>
                  {/* Primary skill */}
                  <div
                    className="font-mono text-xs px-3 py-2 rounded mb-3 font-semibold"
                    style={{ backgroundColor: c.bg, color: c.accent, border: `1px solid ${c.border}` }}
                  >
                    {primary}
                  </div>

                  {/* Rest */}
                  <div className="flex flex-wrap gap-1.5">
                    {rest.map((skill, j) => (
                      <span
                        key={j}
                        className="font-mono text-xs px-2 py-1 rounded-sm"
                        style={{
                          backgroundColor: "#0d0d14",
                          color: "#6b7280",
                          border: "1px solid #1e1e2e",
                          fontSize: "0.65rem",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: accordion */}
        <div className="flex flex-col gap-3 md:hidden">
          {skillCategories.map((cat, i) => {
            const c = typeColors[cat.type];
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded overflow-hidden"
                style={{ backgroundColor: "#111118", border: "1px solid #1e1e2e" }}
              >
                <button
                  className="w-full flex items-center justify-between px-4 py-3.5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.accent }} />
                    <span className="text-sm font-medium" style={{ color: "#f0f4ff" }}>
                      {cat.name}
                    </span>
                    <span className="font-mono text-xs" style={{ color: "#6b7280" }}>
                      {cat.skills.length}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: "#6b7280" }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1" style={{ borderTop: "1px solid #1e1e2e" }}>
                        <div className="flex flex-wrap gap-2 pt-3">
                          {cat.skills.map((skill, j) => (
                            <span
                              key={j}
                              className="font-mono text-xs px-2 py-1 rounded-sm"
                              style={{
                                backgroundColor: j === 0 ? c.bg : "#0d0d14",
                                color: j === 0 ? c.accent : "#6b7280",
                                border: `1px solid ${j === 0 ? c.border : "#1e1e2e"}`,
                                fontSize: "0.65rem",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
