"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "7", label: "Publications" },
  { value: "5", label: "Awards" },
  { value: "3+", label: "Years at KIT" },
];

// A — Inline divider
export function StatsA() {
  return (
    <div
      className="flex items-center rounded-lg overflow-hidden"
      style={{ backgroundColor: "#111118", border: "1px solid #1e1e2e" }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex-1 px-5 py-4"
          style={{ borderRight: i < stats.length - 1 ? "1px solid #1e1e2e" : "none" }}
        >
          <div className="text-2xl font-bold font-mono" style={{ color: "#4a7fff" }}>{s.value}</div>
          <div className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// B — Top-accent cards
export function StatsB() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {stats.map((s, i) => (
        <div
          key={i}
          className="px-4 py-4 rounded-lg overflow-hidden relative"
          style={{ backgroundColor: "#111118", border: "1px solid #1e1e2e" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ backgroundColor: "#4a7fff" }}
          />
          <div className="text-2xl font-bold font-mono mt-1" style={{ color: "#4a7fff" }}>{s.value}</div>
          <div className="text-xs mt-1" style={{ color: "#6b7280" }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// C — Minimal mono
export function StatsC() {
  return (
    <div
      className="px-5 py-4 rounded-lg space-y-3"
      style={{ backgroundColor: "#111118", border: "1px solid #1e1e2e" }}
    >
      {stats.map((s, i) => (
        <div key={i} className="flex items-center gap-4">
          <span className="font-mono text-lg font-bold w-8 shrink-0" style={{ color: "#4a7fff" }}>
            {s.value}
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "#1e1e2e" }} />
          <span className="font-mono text-xs" style={{ color: "#6b7280" }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

// D — Stacked progress
const maxVals = [10, 7, 6]; // 비율 계산용 기준값

export function StatsD() {
  return (
    <div
      className="px-5 py-4 rounded-lg space-y-4"
      style={{ backgroundColor: "#111118", border: "1px solid #1e1e2e" }}
    >
      {stats.map((s, i) => {
        const numVal = parseFloat(s.value);
        const pct = Math.min((numVal / maxVals[i]) * 100, 100);
        return (
          <div key={i}>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="font-mono text-lg font-bold" style={{ color: "#4a7fff" }}>{s.value}</span>
              <span className="text-xs" style={{ color: "#6b7280" }}>{s.label}</span>
            </div>
            <div className="h-0.5 rounded-full overflow-hidden" style={{ backgroundColor: "#1e1e2e" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: "#4a7fff" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
