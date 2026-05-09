"use client";

import { motion } from "framer-motion";
import { FileText, Award, Microscope } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const focusItems = [
  "Humanized Mouse Model Development (NOG / NSG)",
  "Transcriptomics & Multi-omics Integration",
  "In vitro–In vivo Correlation (IVIVC)",
  "Biopharmaceutical Efficacy & Safety Assessment",
];

const stats = [
  { value: "7", label: "Publications", icon: FileText },
  { value: "5", label: "Awards", icon: Award },
  { value: "3+", label: "Years at KIT", icon: Microscope },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
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

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "#4a7fff" }}>
              At a Glance
            </p>
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex items-center justify-between px-6 py-5 rounded"
                  style={{ backgroundColor: "#0d0d14", border: "1px solid #1e1e2e" }}
                >
                  <span className="flex items-center gap-3 text-sm" style={{ color: "#6b7280" }}>
                    <Icon size={14} strokeWidth={1.5} />
                    {stat.label}
                  </span>
                  <span
                    className="text-3xl font-bold font-mono"
                    style={{ color: "#4a7fff", letterSpacing: "-0.04em" }}
                  >
                    {stat.value}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
