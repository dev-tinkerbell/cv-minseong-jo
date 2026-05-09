"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { awards } from "@/lib/data";

export default function Awards() {
  return (
    <section
      id="awards"
      className="py-24 md:py-32 px-4 md:px-8 lg:px-16"
      style={{ borderTop: "1px solid #1e1e2e" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="08"
          title="Awards & Recognition"
          subtitle="Honors received from leading Korean research institutions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card p-5 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className="w-8 h-8 rounded shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "#1a2a3a" }}
                >
                  <Trophy size={14} style={{ color: "#4a7fff" }} />
                </div>
                <span
                  className="font-mono text-2xl font-bold"
                  style={{ color: "#1e1e2e" }}
                >
                  {award.year}
                </span>
              </div>
              <div>
                <h3
                  className="text-sm font-semibold leading-snug mb-1"
                  style={{ color: "#f0f4ff" }}
                >
                  {award.title}
                </h3>
                <p className="text-xs" style={{ color: "#6b7280" }}>
                  {award.grantor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
