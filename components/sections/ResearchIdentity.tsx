"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { personal } from "@/lib/data";

const inViewProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.6 },
};

const keywordColors: Record<number, { bg: string; text: string; border: string }> = {
  0: { bg: "#1a2a3a", text: "#4a7fff", border: "#1e3a6e" },
  1: { bg: "#1a3a2a", text: "#2ecc71", border: "#1a4a2a" },
  2: { bg: "#2a1a3a", text: "#9b59b6", border: "#3a1a5a" },
  3: { bg: "#1a2a3a", text: "#c8d8ff", border: "#1e2a4a" },
};

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
          {/* Left: Bio */}
          <motion.div {...inViewProps}>
            <div className="space-y-3">
              <p
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: "#4a7fff" }}
              >
                Research Focus
              </p>
              {[
                "Humanized Mouse Model Development (NOG / NSG)",
                "Transcriptomics & Multi-omics Integration",
                "In vitro–In vivo Correlation (IVIVC)",
                "Biopharmaceutical Efficacy & Safety Assessment",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "#9ba3b2" }}
                >
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                    style={{ backgroundColor: "#4a7fff" }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Keywords */}
          <motion.div
            {...inViewProps}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p
              className="font-mono text-xs tracking-widest uppercase mb-2"
              style={{ color: "#4a7fff" }}
            >
              Core Keywords
            </p>
            {personal.keywords.map((kw, i) => {
              const c = keywordColors[i];
              return (
                <div
                  key={i}
                  className="px-5 py-4 rounded"
                  style={{
                    backgroundColor: c.bg,
                    border: `1px solid ${c.border}`,
                    color: c.text,
                  }}
                >
                  <span className="text-sm font-medium">{kw}</span>
                </div>
              );
            })}

            {/* Stats — Inline divider */}
            <div
              className="mt-4 flex items-center rounded overflow-hidden"
              style={{ backgroundColor: "#111118", border: "1px solid #1e1e2e" }}
            >
              {[
                { value: "7", label: "Publications" },
                { value: "5", label: "Awards" },
                { value: "3+", label: "Years at KIT" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex-1 px-5 py-4"
                  style={{ borderRight: i < 2 ? "1px solid #1e1e2e" : "none" }}
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
