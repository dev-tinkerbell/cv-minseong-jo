"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { personal } from "@/lib/data";

const focusItems = [
  "Humanized Mouse Model Development (NOG / NSG)",
  "Transcriptomics & Multi-omics Integration",
  "In vitro–In vivo Correlation (IVIVC)",
  "Biopharmaceutical Efficacy & Safety Assessment",
];

const keywordColors = [
  { color: "#4a7fff", bg: "#0d1a2e", border: "#1e2e4e" },
  { color: "#2ecc71", bg: "#0a1e12", border: "#1a3a22" },
  { color: "#9b59b6", bg: "#1a0d2e", border: "#2e1a4e" },
  { color: "#c8d8ff", bg: "#111820", border: "#1e2a4e" },
];

const stats = [
  { value: "7", label: "Publications" },
  { value: "5", label: "Awards" },
  { value: "3+", label: "Years at KIT" },
];

export default function ResearchIdentity() {
  return (
    <section
      id="research"
      className="py-24 md:py-32 px-4 md:px-8 lg:px-16"
      style={{ borderTop: "1px solid #1e1e2e" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          title="Research Identity"
          subtitle="Computational Immunology · Translational Research · Precision Medicine"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Numbered focus list */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "#4a7fff" }}>
              Research Focus
            </p>
            <div>
              {focusItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-5 py-5"
                  style={{ borderBottom: i < focusItems.length - 1 ? "1px solid #1e1e2e" : "none" }}
                >
                  <span className="font-mono text-xs shrink-0 mt-0.5" style={{ color: "#2a2a3a" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#f0f4ff" }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stacked keywords + Inline divider stats */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "#4a7fff" }}>
              Core Keywords
            </p>
            {personal.keywords.map((kw, i) => (
              <div
                key={i}
                className="px-5 py-3 rounded"
                style={{ backgroundColor: keywordColors[i].bg, border: `1px solid ${keywordColors[i].border}` }}
              >
                <span className="text-sm font-medium" style={{ color: keywordColors[i].color }}>{kw}</span>
              </div>
            ))}

            {/* Stats — Inline divider */}
            <div
              className="flex items-center rounded overflow-hidden mt-1"
              style={{ backgroundColor: "#111118", border: "1px solid #1e1e2e" }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex-1 px-5 py-4"
                  style={{ borderRight: i < stats.length - 1 ? "1px solid #1e1e2e" : "none" }}
                >
                  <div className="text-2xl font-bold font-mono" style={{ color: "#4a7fff" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#6b7280" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
