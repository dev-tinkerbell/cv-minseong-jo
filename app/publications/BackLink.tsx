"use client";

import { ArrowLeft } from "lucide-react";

export default function BackLink() {
  return (
    <a
      href="/"
      className="flex items-center gap-2 text-xs font-mono transition-colors"
      style={{ color: "#6b7280" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f4ff")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
    >
      <ArrowLeft size={12} />
      Minseong Jo
    </a>
  );
}
