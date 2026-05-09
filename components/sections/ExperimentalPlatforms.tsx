"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Microscope, FlaskConical, Cpu, LucideIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const platforms: {
  id: string;
  title: string;
  subtitle: string;
  type: "bio" | "pharma" | "comp";
  accent: string;
  bg: string;
  border: string;
  icon: LucideIcon;
  description: string;
  techniques: string[];
}[] = [
  {
    id: "in-vivo",
    title: "In vivo Platform",
    subtitle: "NOG / NSG Humanized Mouse Models",
    type: "bio" as const,
    accent: "#2ecc71",
    bg: "#1a3a2a",
    border: "#1e4a2e",
    icon: Microscope,
    description:
      "Humanized mouse models reconstituted with human peripheral blood mononuclear cells (hPBMC) for immune system studies and GvHD modeling.",
    techniques: [
      "Flow cytometry",
      "ELISA",
      "RT-qPCR",
      "RNA extraction",
      "cDNA synthesis",
      "ddPCR",
      "Orbital blood collection",
      "Tail vein injection",
      "Histological analysis",
      "Hydroxyproline assay",
    ],
  },
  {
    id: "in-vitro",
    title: "In vitro Platform",
    subtitle: "3D Models · Co-culture Systems",
    type: "pharma" as const,
    accent: "#9b59b6",
    bg: "#2a1a3a",
    border: "#3a1a4e",
    icon: FlaskConical,
    description:
      "Advanced 3D cell culture and immune-endothelial coculture models for inflammatory vasculitis and hepatotoxicity assessment.",
    techniques: [
      "3D cell culture",
      "Hepatocyte-Immune coculture",
      "Cytotoxicity assays",
      "Live/Dead staining",
      "Confocal microscopy",
      "Multiplex cytokine profiling",
      "Monoclonal antibody handling",
      "T-cell isolation (hPBMC)",
      "Macrophage polarization",
    ],
  },
  {
    id: "bioinformatics",
    title: "Bioinformatics & Genomics",
    subtitle: "Sequencing · Computational Analysis",
    type: "comp" as const,
    accent: "#4a7fff",
    bg: "#1a2a3a",
    border: "#1e3a6e",
    icon: Cpu,
    description:
      "Multi-omics data integration pipeline including bulk and single-cell RNA sequencing, interspecies sequence analysis, and computational tool development.",
    techniques: [
      "Bulk RNA-seq",
      "scRNA-seq",
      "NGS (deep sequencing)",
      "Sanger sequencing",
      "Sequence alignment",
      "Mismatch-based primer design",
      "SSR marker development",
      "gDNA / cpDNA extraction",
      "Vector cloning",
      "sgRNA design",
    ],
  },
];

function PlatformCard({ platform }: { platform: (typeof platforms)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="rounded p-6"
      style={{
        backgroundColor: platform.bg,
        border: `1px solid ${platform.border}`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div
            className="font-mono text-xs tracking-wider mb-2"
            style={{ color: platform.accent }}
          >
            {platform.subtitle}
          </div>
          <h3
            className="text-base font-semibold"
            style={{ color: "#f0f4ff" }}
          >
            {platform.title}
          </h3>
        </div>
        <div
          className="w-9 h-9 rounded shrink-0 flex items-center justify-center"
          style={{ backgroundColor: `${platform.accent}18` }}
        >
          <platform.icon size={16} style={{ color: platform.accent }} />
        </div>
      </div>

      {/* Description */}
      <p className="text-xs leading-relaxed mb-5" style={{ color: "#9ba3b2" }}>
        {platform.description}
      </p>

      {/* Techniques — desktop: always visible, mobile: accordion */}
      <div className="hidden md:flex flex-wrap gap-2">
        {platform.techniques.map((t, i) => (
          <span
            key={i}
            className="font-mono text-xs px-2 py-0.5 rounded-sm"
            style={{
              backgroundColor: "rgba(0,0,0,0.25)",
              color: platform.accent,
              border: `1px solid ${platform.accent}33`,
              fontSize: "0.65rem",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Mobile accordion */}
      <div className="md:hidden">
        <button
          className="flex items-center gap-2 text-xs font-mono w-full"
          style={{ color: platform.accent }}
          onClick={() => setExpanded(!expanded)}
        >
          <span>{expanded ? "Hide" : "Show"} techniques</span>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={12} />
          </motion.div>
        </button>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 pt-3">
                {platform.techniques.map((t, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-2 py-0.5 rounded-sm"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.25)",
                      color: platform.accent,
                      fontSize: "0.65rem",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ExperimentalPlatforms() {
  return (
    <section
      id="platforms"
      className="py-24 md:py-32 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: "#0d0d14", borderTop: "1px solid #1e1e2e" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          title="Experimental Platforms"
          subtitle="Three integrated research platforms for comprehensive biopharmaceutical evaluation"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {platforms.map((p) => (
            <PlatformCard key={p.id} platform={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
