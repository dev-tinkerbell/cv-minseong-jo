"use client";

import { motion } from "framer-motion";

const lines = [
  { type: "keyword", text: "const researcher = {" },
  { type: "comment", text: "  // Korea Institute of Toxicology × CNU" },
  { type: "key", text: "  name:", value: '"Min Seong Jo",' },
  { type: "key", text: "  degree:", value: '"Ph.D. Candidate · Molecular Biotechnology",' },
  { type: "blank", text: "" },
  { type: "key", text: "  focus:", value: "[" },
  { type: "string", text: '    "Humanized Mouse Model Development",' },
  { type: "string", text: '    "Transcriptomics & Multi-omics Integration",' },
  { type: "string", text: '    "In vitro–In vivo Correlation (IVIVC)",' },
  { type: "string", text: '    "Biopharmaceutical Efficacy & Safety",' },
  { type: "keyword", text: "  ]," },
  { type: "blank", text: "" },
  { type: "key", text: "  publications:", value: "7," },
  { type: "key", text: "  awards:", value: "5," },
  { type: "key", text: "  yearsAtKIT:", value: '"3+",' },
  { type: "keyword", text: "}" },
];

const colors: Record<string, string> = {
  keyword: "#c8d8ff",
  comment: "#4a5568",
  key: "#9ba3b2",
  string: "#2ecc71",
  blank: "transparent",
};

export default function ProtoB() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-lg overflow-hidden"
        style={{ border: "1px solid #1e1e2e" }}
      >
        {/* Window bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ backgroundColor: "#16161F", borderBottom: "1px solid #1e1e2e" }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#febc2e" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#28c840" }} />
          <span className="ml-4 font-mono text-xs" style={{ color: "#4a5568" }}>
            researcher.config.ts
          </span>
        </div>

        {/* Code */}
        <div className="p-6 font-mono text-sm" style={{ backgroundColor: "#0d0d14" }}>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex gap-6 leading-relaxed"
            >
              <span className="select-none w-5 text-right shrink-0" style={{ color: "#2a2a3a" }}>
                {line.type !== "blank" ? i + 1 : ""}
              </span>
              <span style={{ color: colors[line.type] }}>
                {line.text}
                {line.value && (
                  <span style={{ color: line.type === "key" ? "#4a7fff" : colors[line.type] }}>
                    {" "}{line.value}
                  </span>
                )}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
