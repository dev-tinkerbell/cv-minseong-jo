"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";

// A — Horizontal timeline strip + keyword grid
const focusItems = [
  { num: "01", title: "Humanized Mouse Model Development", sub: "NOG / NSG" },
  { num: "02", title: "Transcriptomics & Multi-omics Integration", sub: "" },
  { num: "03", title: "In vitro–In vivo Correlation", sub: "IVIVC" },
  { num: "04", title: "Biopharmaceutical Efficacy & Safety Assessment", sub: "" },
];

const keywordColors = [
  { color: "#4a7fff", bg: "#0d1a2e", border: "#1e2e4e" },
  { color: "#2ecc71", bg: "#0a1e12", border: "#1a3a22" },
  { color: "#9b59b6", bg: "#1a0d2e", border: "#2e1a4e" },
  { color: "#c8d8ff", bg: "#111118", border: "#1e2a4e" },
];

const stats = [
  { value: "7", label: "Publications" },
  { value: "5", label: "Awards" },
  { value: "3+", label: "Years at KIT" },
];

export default function ProtoA() {
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      {/* Focus — horizontal strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {focusItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="p-4 rounded-lg"
            style={{ backgroundColor: "#111118", border: "1px solid #1e1e2e" }}
          >
            <span className="font-mono text-xs" style={{ color: "#4a7fff" }}>{item.num} /</span>
            <p className="text-xs font-medium mt-2 leading-snug" style={{ color: "#f0f4ff" }}>
              {item.title}
            </p>
            {item.sub && (
              <p className="font-mono text-xs mt-1" style={{ color: "#6b7280" }}>{item.sub}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom row: keywords + stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Keywords */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          {personal.keywords.map((kw, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              className="px-4 py-3 rounded-lg"
              style={{
                backgroundColor: keywordColors[i].bg,
                border: `1px solid ${keywordColors[i].border}`,
              }}
            >
              <span className="text-xs font-medium" style={{ color: keywordColors[i].color }}>
                {kw}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="p-5 rounded-lg flex flex-col justify-center gap-5"
          style={{ backgroundColor: "#111118", border: "1px solid #1e1e2e" }}
        >
          {stats.map((s, i) => (
            <div key={i} className="flex items-baseline gap-3">
              <span className="text-3xl font-bold font-mono" style={{ color: "#4a7fff" }}>{s.value}</span>
              <span className="text-xs" style={{ color: "#6b7280" }}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
