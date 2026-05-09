"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    num: "01",
    label: "Human PBMC",
    sub: "hPBMC Isolation",
    color: "#1a3a2a",
    accent: "#2ecc71",
    tags: ["T-cell isolation", "FACS"],
  },
  {
    num: "02",
    label: "Humanized Mouse",
    sub: "NOG / NSG Model",
    color: "#1a2a3a",
    accent: "#4a7fff",
    tags: ["NOG/NSG", "Engraftment"],
  },
  {
    num: "03",
    label: "In vitro Models",
    sub: "3D · Co-culture",
    color: "#2a1a3a",
    accent: "#9b59b6",
    tags: ["3D culture", "Co-culture"],
  },
  {
    num: "04",
    label: "Transcriptomics",
    sub: "Multi-omics Analysis",
    color: "#1a2a3a",
    accent: "#c8d8ff",
    tags: ["RNA-seq", "scRNA-seq"],
  },
  {
    num: "05",
    label: "Biopharma Eval.",
    sub: "Efficacy & Safety",
    color: "#3a2a1a",
    accent: "#e67e22",
    tags: ["mAb", "IVIVC"],
  },
];

export default function ResearchPipeline() {
  return (
    <section
      id="pipeline"
      className="py-24 md:py-32 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: "#0d0d14", borderTop: "1px solid #1e1e2e" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          title="Research Pipeline"
          subtitle="Integrated research flow from human immune cell biology to translational outcomes"
        />

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-stretch gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 rounded p-4 group cursor-default"
                style={{
                  backgroundColor: step.color,
                  border: `1px solid ${step.accent}22`,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${step.accent}66`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = `${step.accent}22`)
                }
              >
                <div
                  className="font-mono text-xs mb-2"
                  style={{ color: step.accent }}
                >
                  {step.num}
                </div>
                <div
                  className="text-sm font-semibold mb-1"
                  style={{ color: "#f0f4ff" }}
                >
                  {step.label}
                </div>
                <div className="text-xs mb-3" style={{ color: "#9ba3b2" }}>
                  {step.sub}
                </div>
                <div className="flex flex-wrap gap-1">
                  {step.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="font-mono text-xs px-2 py-0.5 rounded-sm"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.3)",
                        color: step.accent,
                        border: `1px solid ${step.accent}33`,
                        fontSize: "0.6rem",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div
                  className="shrink-0 w-8 flex items-center justify-center text-lg select-none"
                  style={{ color: "#2a2a3a" }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical cards */}
        <div className="flex flex-col gap-3 md:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 items-start p-4 rounded"
              style={{
                backgroundColor: step.color,
                border: `1px solid ${step.accent}33`,
              }}
            >
              <div>
                <div
                  className="font-mono text-xs mb-1"
                  style={{ color: step.accent }}
                >
                  {step.num}
                </div>
                <div
                  className="text-sm font-semibold mb-0.5"
                  style={{ color: "#f0f4ff" }}
                >
                  {step.label}
                </div>
                <div className="text-xs" style={{ color: "#9ba3b2" }}>
                  {step.sub}
                </div>
              </div>
              <div className="flex flex-wrap gap-1 ml-auto">
                {step.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="font-mono text-xs px-2 py-0.5 rounded-sm"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.3)",
                      color: step.accent,
                      fontSize: "0.625rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outcome box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 p-5 rounded flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            backgroundColor: "#111118",
            border: "1px solid #1e1e2e",
          }}
        >
          <div
            className="font-mono text-xs tracking-widest uppercase shrink-0"
            style={{ color: "#4a7fff" }}
          >
            Outcome
          </div>
          <div
            className="h-px w-8 hidden sm:block"
            style={{ backgroundColor: "#2a2a3a" }}
          />
          <p className="text-sm" style={{ color: "#9ba3b2" }}>
            Precision biopharmaceutical evaluation through validated{" "}
            <span style={{ color: "#c8d8ff" }}>IVIVC systems</span> — bridging
            human immune biology and preclinical translational research.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
