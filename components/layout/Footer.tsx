import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="mt-0 py-8 px-4 md:px-8 lg:px-16"
      style={{ borderTop: "1px solid #1e1e2e", backgroundColor: "#0a0a0f" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs" style={{ color: "#4a7fff" }}>
            MSJ
          </span>
          <span className="text-xs" style={{ color: "#6b7280" }}>
            {personal.name} · {personal.institution}
          </span>
        </div>
        <p className="text-xs font-mono" style={{ color: "#2a2a3a" }}>
          © 2026 Min Seong Jo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
