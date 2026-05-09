"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { timeline } from "@/lib/data";

const typeColors: Record<string, { dot: string; label: string; labelBg: string }> = {
  education: { dot: "#2ecc71", label: "#2ecc71", labelBg: "#1a3a2a" },
  research: { dot: "#4a7fff", label: "#4a7fff", labelBg: "#1a2a3a" },
  internship: { dot: "#9b59b6", label: "#9b59b6", labelBg: "#2a1a3a" },
  publication: { dot: "#e67e22", label: "#e67e22", labelBg: "#3a2a1a" },
  award: { dot: "#c8d8ff", label: "#c8d8ff", labelBg: "#1e2a4a" },
};

const typeLabels: Record<string, string> = {
  education: "Education",
  research: "Research",
  internship: "Internship",
  publication: "Publication",
  award: "Award",
};

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 md:py-32 px-4 md:px-8 lg:px-16"
      style={{ borderTop: "1px solid #1e1e2e" }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="06"
          title="Research Timeline"
          subtitle="Academic and research journey from 2012 to present"
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-3 md:left-4 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #1e1e2e 5%, #1e1e2e 95%, transparent)",
            }}
          />

          <div className="space-y-8 md:space-y-10">
            {timeline.map((event, i) => {
              const c = typeColors[event.type];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative pl-10 md:pl-14"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-0 md:left-1 top-0 flex items-center justify-center"
                    style={{ width: "28px", height: "28px", paddingRight: "3px" }}
                  >
                    {event.isCurrent ? (
                      <div className="relative w-3.5 h-3.5">
                        <div
                          className="absolute inset-0 rounded-full pulse-dot"
                          style={{ backgroundColor: c.dot }}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-2.5 h-2.5 rounded-full border-2"
                        style={{
                          borderColor: c.dot,
                          backgroundColor: "#0a0a0f",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className="p-4 md:p-5 rounded"
                    style={{
                      backgroundColor: "#111118",
                      border: `1px solid ${event.isCurrent ? `${c.dot}44` : "#1e1e2e"}`,
                      outline: event.isCurrent
                        ? `none`
                        : undefined,
                      borderStyle: event.isCurrent ? "dashed" : "solid",
                    }}
                  >
                    {/* Year + type */}
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className="font-mono text-sm font-semibold"
                        style={{ color: c.dot }}
                      >
                        {event.year}
                        {event.endYear && event.endYear !== event.year
                          ? ` – ${event.endYear === "present" ? "Present" : event.endYear}`
                          : ""}
                      </span>
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded-sm"
                        style={{
                          backgroundColor: c.labelBg,
                          color: c.label,
                          fontSize: "0.625rem",
                        }}
                      >
                        {typeLabels[event.type]}
                      </span>
                      {event.isCurrent && (
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded-sm"
                          style={{
                            backgroundColor: "#1a2a3a",
                            color: "#4a7fff",
                            fontSize: "0.625rem",
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ color: "#f0f4ff" }}
                    >
                      {event.title}
                    </h3>

                    {/* Organization */}
                    <p
                      className="text-xs mb-2"
                      style={{ color: "#9ba3b2" }}
                    >
                      {event.organization}
                      {event.location && (
                        <span style={{ color: "#6b7280" }}>
                          {" "}
                          · {event.location}
                        </span>
                      )}
                    </p>

                    {/* Description */}
                    {event.description && (
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "#6b7280", lineHeight: 1.7 }}
                      >
                        {event.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
