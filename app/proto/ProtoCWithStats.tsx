"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { StatsA, StatsB, StatsC, StatsD } from "./StatsVariants";

const focusItems = [
  "Humanized Mouse Model Development (NOG / NSG)",
  "Transcriptomics & Multi-omics Integration",
  "In vitro–In vivo Correlation (IVIVC)",
  "Biopharmaceutical Efficacy & Safety Assessment",
];

const keywordColors = [
  { color: "#4a7fff", bg: "#0d1a2e" },
  { color: "#2ecc71", bg: "#0a1e12" },
  { color: "#9b59b6", bg: "#1a0d2e" },
  { color: "#c8d8ff", bg: "#111820" },
];

const statsComponents = [StatsA, StatsB, StatsC, StatsD];

export default function ProtoCWithStats({ variant }: { variant: number }) {
  const StatsComponent = statsComponents[variant];

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      {/* Left: focus list */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "#4a7fff" }}>
          Research Focus
        </p>
        <div>
          {focusItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 py-5"
              style={{ borderBottom: i < focusItems.length - 1 ? "1px solid #1e1e2e" : "none" }}
            >
              <span className="font-mono text-xs shrink-0 mt-0.5" style={{ color: "#2a2a3a" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium" style={{ color: "#f0f4ff" }}>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: keywords + stats */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-3"
      >
        <p className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "#4a7fff" }}>
          Core Keywords
        </p>
        {personal.keywords.map((kw, i) => (
          <div
            key={i}
            className="px-5 py-3 rounded-lg"
            style={{ backgroundColor: keywordColors[i].bg, border: `1px solid ${keywordColors[i].color}30` }}
          >
            <span className="text-sm font-medium" style={{ color: keywordColors[i].color }}>{kw}</span>
          </div>
        ))}

        <StatsComponent />
      </motion.div>
    </div>
  );
}
