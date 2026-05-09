"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";

// D — Full-width keyword cards (large) + focus as tag strip at bottom
const focusItems = [
  { label: "Humanized Mouse Model Development", tag: "NOG / NSG", color: "#4a7fff" },
  { label: "Transcriptomics & Multi-omics Integration", tag: "RNA-seq", color: "#2ecc71" },
  { label: "In vitro–In vivo Correlation", tag: "IVIVC", color: "#9b59b6" },
  { label: "Biopharmaceutical Efficacy & Safety Assessment", tag: "mAb", color: "#e67e22" },
];

const keywordColors = [
  { color: "#4a7fff", bg: "#0d1a2e", border: "#1e2e4e" },
  { color: "#2ecc71", bg: "#0a1e12", border: "#1a3a22" },
  { color: "#9b59b6", bg: "#1a0d2e", border: "#2e1a4e" },
  { color: "#c8d8ff", bg: "#111820", border: "#1e2a4e" },
];

export default function ProtoD() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Keywords — large horizontal cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {personal.keywords.map((kw, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="px-6 py-5 rounded-lg"
            style={{
              backgroundColor: keywordColors[i].bg,
              border: `1px solid ${keywordColors[i].border}`,
            }}
          >
            <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: keywordColors[i].color, opacity: 0.6 }}>
              Keyword {String(i + 1).padStart(2, "0")}
            </p>
            <p className="text-base font-semibold" style={{ color: keywordColors[i].color }}>
              {kw}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Research Focus — tag strip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="p-5 rounded-lg"
        style={{ backgroundColor: "#111118", border: "1px solid #1e1e2e" }}
      >
        <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#4a7fff" }}>
          Research Focus
        </p>
        <div className="flex flex-wrap gap-2">
          {focusItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 rounded-sm"
              style={{ backgroundColor: `${item.color}12`, border: `1px solid ${item.color}30` }}
            >
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
              <span className="text-xs font-medium" style={{ color: "#f0f4ff" }}>{item.label}</span>
              <span className="font-mono text-xs" style={{ color: item.color }}>{item.tag}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-5 pt-4" style={{ borderTop: "1px solid #1e1e2e" }}>
          {[{ v: "7", l: "Publications" }, { v: "5", l: "Awards" }, { v: "3+", l: "Years at KIT" }].map((s, i) => (
            <div key={i} className="flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold" style={{ color: "#4a7fff" }}>{s.v}</span>
              <span className="text-xs" style={{ color: "#6b7280" }}>{s.l}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
