"use client";

import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { personal } from "@/lib/data";

const email = personal.email;
const location = personal.location;
const title = personal.title;
const institution = personal.institution;
const affiliation = personal.affiliation;
const bio = personal.bio;

const tagLine = (
  <div className="flex items-center gap-3 mb-8">
    <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#4a7fff" }}>
      Research Portfolio
    </span>
    <span className="h-px w-12" style={{ backgroundColor: "#1e1e2e" }} />
    <span className="font-mono text-xs" style={{ color: "#2a2a3a" }}>2026</span>
  </div>
);

const ctaRow = (
  <div className="flex flex-wrap gap-3 mb-10">
    <span
      className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium"
      style={{ backgroundColor: "#4a7fff", color: "#f0f4ff" }}
    >
      View Publications <ArrowRight size={14} />
    </span>
    <span
      className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium"
      style={{ border: "1px solid #1e1e2e", color: "#9ba3b2" }}
    >
      Contact
    </span>
  </div>
);

const metaRow = (
  <div className="flex flex-wrap gap-6">
    <span className="flex items-center gap-2 text-xs font-mono" style={{ color: "#6b7280" }}>
      <Mail size={12} /> {email}
    </span>
    <span className="flex items-center gap-2 text-xs font-mono" style={{ color: "#6b7280" }}>
      <MapPin size={12} /> {location}
    </span>
  </div>
);

const titleRow = (
  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6">
    <span className="text-base md:text-lg" style={{ color: "#c8d8ff" }}>{title}</span>
    <span style={{ color: "#2a2a3a" }}>·</span>
    <span className="text-base md:text-lg" style={{ color: "#9ba3b2" }}>{institution}</span>
    <span style={{ color: "#2a2a3a" }}>·</span>
    <span className="text-base md:text-lg" style={{ color: "#9ba3b2" }}>{affiliation}</span>
  </div>
);

function Label({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="px-4 md:px-8 lg:px-16 pt-8 pb-4 flex items-center gap-4" style={{ borderBottom: "1px solid #1e1e2e" }}>
      <span
        className="font-mono text-xs px-2 py-0.5 rounded"
        style={{ backgroundColor: "#1a2a3a", color: "#4a7fff" }}
      >
        {letter}
      </span>
      <span className="font-mono text-xs" style={{ color: "#6b7280" }}>{title}</span>
    </div>
  );
}

// ── A: Small avatar beside name ───────────────────────────────────────────────
function ProtoA() {
  return (
    <div>
      <Label letter="A" title="Avatar inline — small photo beside name" />
      <section className="px-4 md:px-8 lg:px-16 py-20" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="max-w-2xl w-full">
          {tagLine}
          <div className="flex items-center gap-5 mb-4">
            <div
              className="shrink-0 overflow-hidden rounded-lg"
              style={{ width: "64px", height: "80px", border: "1px solid #1e1e2e" }}
            >
              <Image src="/profile.jpg" alt="Minseong Jo" width={303} height={389} className="w-full h-full object-cover" />
            </div>
            <div>
              <h1
                className="text-4xl sm:text-5xl font-bold leading-none tracking-tight"
                style={{ color: "#f0f4ff", letterSpacing: "-0.03em" }}
              >
                Minseong Jo
              </h1>
            </div>
          </div>
          {titleRow}
          <p className="text-sm md:text-base leading-relaxed mb-10" style={{ color: "#9ba3b2", lineHeight: 1.8 }}>
            {bio}
          </p>
          {ctaRow}
          {metaRow}
        </div>
      </section>
    </div>
  );
}

// ── B: Right card, larger photo ───────────────────────────────────────────────
function ProtoB() {
  return (
    <div>
      <Label letter="B" title="Side by side — larger photo card right" />
      <section className="px-4 md:px-8 lg:px-16 py-20" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16 w-full">
          <div className="max-w-xl">
            {tagLine}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight mb-4"
              style={{ color: "#f0f4ff", letterSpacing: "-0.03em" }}
            >
              Minseong Jo
            </h1>
            {titleRow}
            <p className="text-sm md:text-base leading-relaxed mb-10" style={{ color: "#9ba3b2", lineHeight: 1.8 }}>
              {bio}
            </p>
            {ctaRow}
            {metaRow}
          </div>
          <div className="shrink-0 flex flex-col items-center gap-3">
            <div className="overflow-hidden rounded-lg" style={{ width: "240px", border: "1px solid #1e1e2e" }}>
              <Image src="/profile.jpg" alt="Minseong Jo" width={303} height={389} className="w-full h-auto" />
            </div>
            <p className="font-mono text-xs" style={{ color: "#2a2a3a" }}>Minseong Jo</p>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── C: Photo top-left, name beside ───────────────────────────────────────────
function ProtoC() {
  return (
    <div>
      <Label letter="C" title="Photo top-left, name & title beside" />
      <section className="px-4 md:px-8 lg:px-16 py-20" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="max-w-3xl w-full">
          {tagLine}
          {/* Photo + name block */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-10">
            <div
              className="shrink-0 overflow-hidden rounded-lg"
              style={{ width: "120px", border: "1px solid #1e1e2e" }}
            >
              <Image src="/profile.jpg" alt="Minseong Jo" width={303} height={389} className="w-full h-auto" />
            </div>
            <div className="pb-1">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight mb-3"
                style={{ color: "#f0f4ff", letterSpacing: "-0.03em" }}
              >
                Minseong Jo
              </h1>
              {titleRow}
            </div>
          </div>
          <p className="text-sm md:text-base leading-relaxed mb-10" style={{ color: "#9ba3b2", lineHeight: 1.8 }}>
            {bio}
          </p>
          {ctaRow}
          {metaRow}
        </div>
      </section>
    </div>
  );
}

// ── D: Full-height right column photo ─────────────────────────────────────────
function ProtoD() {
  return (
    <div>
      <Label letter="D" title="Full-height split — photo fills right half" />
      <section style={{ minHeight: "100vh", display: "flex" }}>
        {/* Left text */}
        <div className="flex-1 flex items-center px-4 md:px-8 lg:px-16 py-20">
          <div className="max-w-lg w-full">
            {tagLine}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight mb-4"
              style={{ color: "#f0f4ff", letterSpacing: "-0.03em" }}
            >
              Minseong Jo
            </h1>
            {titleRow}
            <p className="text-sm md:text-base leading-relaxed mb-10" style={{ color: "#9ba3b2", lineHeight: 1.8 }}>
              {bio}
            </p>
            {ctaRow}
            {metaRow}
          </div>
        </div>
        {/* Right photo — hidden on mobile */}
        <div
          className="hidden lg:block relative"
          style={{ width: "38%", borderLeft: "1px solid #1e1e2e" }}
        >
          <Image
            src="/profile.jpg"
            alt="Minseong Jo"
            fill
            className="object-cover object-top"
            style={{ filter: "brightness(0.85)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(10,10,15,0.5) 0%, transparent 30%)" }}
          />
        </div>
      </section>
    </div>
  );
}

export default function ProtoHeroPage() {
  return (
    <div style={{ backgroundColor: "#0a0a0f", minHeight: "100vh" }}>
      {/* Nav */}
      <div
        className="sticky top-0 z-50 px-4 md:px-8 lg:px-16 h-14 flex items-center justify-between"
        style={{ backgroundColor: "rgba(10,10,15,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1e1e2e" }}
      >
        <a href="/" className="font-mono text-xs" style={{ color: "#6b7280" }}>← Back</a>
        <span className="font-mono text-xs" style={{ color: "#2a2a3a" }}>/ proto-hero</span>
      </div>

      <ProtoA />
      <div style={{ borderTop: "2px solid #1e1e2e" }} />
      <ProtoB />
      <div style={{ borderTop: "2px solid #1e1e2e" }} />
      <ProtoC />
      <div style={{ borderTop: "2px solid #1e1e2e" }} />
      <ProtoD />
    </div>
  );
}
