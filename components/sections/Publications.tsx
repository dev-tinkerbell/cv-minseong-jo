"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, Bookmark } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { publications, Publication } from "@/lib/data";

type Filter = "all" | "first-author" | "co-author" | "2026" | "2025" | "2024";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "first-author", label: "First Author" },
  { id: "co-author", label: "Co-Author" },
  { id: "2026", label: "2026" },
  { id: "2025", label: "2025" },
  { id: "2024", label: "2024" },
];

function highlightAuthor(author: string) {
  const isMe = author.trim().startsWith("Jo, M");
  return (
    <span
      key={author}
      style={{
        color: isMe ? "#c8d8ff" : "#6b7280",
        fontWeight: isMe ? 600 : 400,
      }}
    >
      {author}
    </span>
  );
}

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="card p-5 md:p-6"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="font-mono text-xs"
            style={{ color: "#9ba3b2" }}
          >
            {pub.journal}
          </span>
          <span style={{ color: "#2a2a3a" }}>·</span>
          <span
            className="font-mono text-xs"
            style={{ color: "#6b7280" }}
          >
            {pub.year}
          </span>
          {pub.volume && (
            <>
              <span style={{ color: "#2a2a3a" }}>·</span>
              <span
                className="font-mono text-xs"
                style={{ color: "#6b7280" }}
              >
                {pub.volume}
                {pub.issue ? `(${pub.issue})` : ""}
                {pub.pages ? `:${pub.pages}` : ""}
              </span>
            </>
          )}
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {pub.type === "first-author" && (
            <span
              className="flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-sm"
              style={{ backgroundColor: "#1a2a3a", color: "#4a7fff" }}
            >
              <Star size={10} />
              1st
            </span>
          )}
          {pub.note && (
            <span
              className="flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-sm"
              style={{ backgroundColor: "#2a1e0a", color: "#e6a817" }}
            >
              <Bookmark size={10} />
              {pub.note}
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-sm md:text-base font-medium leading-snug mb-3"
        style={{ color: "#f0f4ff", lineHeight: 1.55 }}
      >
        {pub.title}
      </h3>

      {/* Authors */}
      <p
        className="text-xs leading-relaxed mb-4"
        style={{ color: "#6b7280", lineHeight: 1.7 }}
      >
        {pub.authors.map((a, i) => (
          <span key={i}>
            {highlightAuthor(a)}
            {i < pub.authors.length - 1 && (
              <span style={{ color: "#2a2a3a" }}>, </span>
            )}
          </span>
        ))}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex flex-wrap gap-1.5">
          {pub.tags.map((tag, i) => (
            <span key={i} className={`tag tag-${tag.type}`}>
              {tag.label}
            </span>
          ))}
        </div>
        {pub.doi ? (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono transition-colors shrink-0"
            style={{ color: "#6b7280" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#4a7fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
          >
            DOI
            <ExternalLink size={10} />
          </a>
        ) : (
          <span
            className="text-xs font-mono shrink-0"
            style={{ color: "#2a2a3a" }}
          >
            DOI pending
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered = publications.filter((pub) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "first-author") return pub.type === "first-author";
    if (activeFilter === "co-author") return pub.type === "co-author";
    return pub.year === parseInt(activeFilter);
  });

  return (
    <section
      id="publications"
      className="py-24 md:py-32 px-4 md:px-8 lg:px-16"
      style={{ borderTop: "1px solid #1e1e2e" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          title="Publications"
          subtitle={`${publications.length} peer-reviewed publications · 1 first-author`}
        />

        {/* Filter tabs — horizontally scrollable on mobile */}
        <div className="overflow-x-auto pb-2 mb-8 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-2 min-w-max md:min-w-0 md:flex-wrap">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className="px-4 py-1.5 rounded text-xs font-mono tracking-wider transition-all duration-150"
                style={{
                  backgroundColor:
                    activeFilter === f.id ? "#4a7fff" : "#111118",
                  color: activeFilter === f.id ? "#f0f4ff" : "#6b7280",
                  border:
                    activeFilter === f.id
                      ? "1px solid #4a7fff"
                      : "1px solid #1e1e2e",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((pub) => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center py-16 text-sm" style={{ color: "#6b7280" }}>
            No publications for this filter.
          </p>
        )}
      </div>
    </section>
  );
}
