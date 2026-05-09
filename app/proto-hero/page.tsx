"use client";

import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { personal } from "@/lib/data";

const bio = personal.bio;
const email = personal.email;
const location = personal.location;

// Simulated mobile frame
function MobileFrame({ label, description, children }: {
  label: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <span
          className="font-mono text-xs px-2 py-0.5 rounded"
          style={{ backgroundColor: "#1a2a3a", color: "#4a7fff" }}
        >
          {label}
        </span>
        <p className="font-mono text-xs mt-2" style={{ color: "#6b7280" }}>{description}</p>
      </div>
      {/* Phone frame */}
      <div
        className="relative overflow-hidden"
        style={{
          width: "390px",
          maxWidth: "100%",
          border: "1px solid #2a2a3a",
          borderRadius: "12px",
          backgroundColor: "#0a0a0f",
        }}
      >
        {/* Status bar mock */}
        <div
          className="px-5 py-2 flex items-center justify-between"
          style={{ borderBottom: "1px solid #1e1e2e" }}
        >
          <span className="font-mono text-xs" style={{ color: "#2a2a3a" }}>9:41</span>
          <span className="font-mono text-xs" style={{ color: "#2a2a3a" }}>Research Portfolio</span>
          <span className="font-mono text-xs" style={{ color: "#2a2a3a" }}>···</span>
        </div>
        {children}
      </div>
    </div>
  );
}

// Shared elements
const tagLine = (
  <div className="flex items-center gap-2 mb-6">
    <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#4a7fff" }}>
      Research Portfolio
    </span>
    <span className="h-px w-8" style={{ backgroundColor: "#1e1e2e" }} />
    <span className="font-mono text-xs" style={{ color: "#2a2a3a" }}>2026</span>
  </div>
);

const titleBlock = (
  <div className="mb-5">
    <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ color: "#f0f4ff", letterSpacing: "-0.03em" }}>
      Minseong Jo
    </h1>
    <p className="text-sm" style={{ color: "#c8d8ff" }}>Ph.D. Candidate</p>
    <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>Korea Institute of Toxicology · CNU</p>
  </div>
);

const ctaRow = (
  <div className="flex gap-2 mb-6">
    <span className="flex items-center gap-1.5 px-4 py-2 rounded text-xs font-medium" style={{ backgroundColor: "#4a7fff", color: "#f0f4ff" }}>
      Publications <ArrowRight size={11} />
    </span>
    <span className="flex items-center px-4 py-2 rounded text-xs font-medium" style={{ border: "1px solid #1e1e2e", color: "#9ba3b2" }}>
      Contact
    </span>
  </div>
);

const metaRow = (
  <div className="flex flex-col gap-1.5">
    <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: "#6b7280" }}>
      <Mail size={10} /> {email}
    </span>
    <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: "#6b7280" }}>
      <MapPin size={10} /> {location}
    </span>
  </div>
);

const bioText = (
  <p className="text-xs leading-relaxed" style={{ color: "#9ba3b2", lineHeight: 1.75 }}>
    {bio}
  </p>
);

const photo = (w: number) => (
  <div className="overflow-hidden rounded" style={{ width: `${w}px`, border: "1px solid #1e1e2e", flexShrink: 0 }}>
    <Image src="/profile.jpg" alt="Minseong Jo" width={303} height={389} className="w-full h-auto" />
  </div>
);

// ── M1: 사진 상단, 텍스트 하단 스택 ────────────────────────────────────────────
function M1() {
  return (
    <MobileFrame label="M1" description="사진 상단 → 텍스트 하단">
      <div className="p-5">
        {tagLine}
        <div className="mb-5">{photo(120)}</div>
        {titleBlock}
        {bioText}
        <div className="mt-5">{ctaRow}</div>
        {metaRow}
      </div>
    </MobileFrame>
  );
}

// ── M2: 사진 우측 상단 고정, 텍스트 왼쪽 ─────────────────────────────────────
function M2() {
  return (
    <MobileFrame label="M2" description="사진 우측 고정 + 텍스트 좌측, bio 하단">
      <div className="p-5">
        {tagLine}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold tracking-tight mb-1.5" style={{ color: "#f0f4ff", letterSpacing: "-0.03em" }}>
              Minseong Jo
            </h1>
            <p className="text-xs mb-0.5" style={{ color: "#c8d8ff" }}>Ph.D. Candidate</p>
            <p className="text-xs" style={{ color: "#6b7280" }}>KIT · CNU</p>
          </div>
          {photo(88)}
        </div>
        {ctaRow}
        {metaRow}
        <div className="mt-5 pt-5" style={{ borderTop: "1px solid #1e1e2e" }}>
          {bioText}
        </div>
      </div>
    </MobileFrame>
  );
}

// ── M3: 텍스트만, 사진 숨김 ────────────────────────────────────────────────────
function M3() {
  return (
    <MobileFrame label="M3" description="모바일에서 사진 숨김, 텍스트만">
      <div className="p-5">
        {tagLine}
        {titleBlock}
        {bioText}
        <div className="mt-6">{ctaRow}</div>
        {metaRow}
      </div>
    </MobileFrame>
  );
}

// ── M4: 사진 원형 중앙 정렬 ────────────────────────────────────────────────────
function M4() {
  return (
    <MobileFrame label="M4" description="원형 사진 중앙 → 이름 → bio → 버튼">
      <div className="p-5 flex flex-col items-center text-center">
        {tagLine}
        <div
          className="overflow-hidden mb-4"
          style={{ width: "96px", height: "96px", borderRadius: "50%", border: "1px solid #1e1e2e" }}
        >
          <Image src="/profile.jpg" alt="Minseong Jo" width={303} height={389} className="w-full h-auto object-cover object-top" style={{ marginTop: "-4px" }} />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-1.5" style={{ color: "#f0f4ff", letterSpacing: "-0.03em" }}>
          Minseong Jo
        </h1>
        <p className="text-sm mb-0.5" style={{ color: "#c8d8ff" }}>Ph.D. Candidate</p>
        <p className="text-xs mb-6" style={{ color: "#6b7280" }}>Korea Institute of Toxicology · CNU</p>
        <div className="text-left w-full mb-6">{bioText}</div>
        <div className="flex gap-2 justify-center mb-4">
          <span className="flex items-center gap-1.5 px-4 py-2 rounded text-xs font-medium" style={{ backgroundColor: "#4a7fff", color: "#f0f4ff" }}>
            Publications <ArrowRight size={11} />
          </span>
          <span className="flex items-center px-4 py-2 rounded text-xs font-medium" style={{ border: "1px solid #1e1e2e", color: "#9ba3b2" }}>
            Contact
          </span>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: "#6b7280" }}>
            <Mail size={10} /> {email}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: "#6b7280" }}>
            <MapPin size={10} /> {location}
          </span>
        </div>
      </div>
    </MobileFrame>
  );
}

export default function ProtoHeroPage() {
  return (
    <div style={{ backgroundColor: "#0a0a0f", minHeight: "100vh" }}>
      {/* Nav */}
      <div
        className="sticky top-0 z-50 px-4 md:px-8 h-14 flex items-center justify-between"
        style={{ backgroundColor: "rgba(10,10,15,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1e1e2e" }}
      >
        <a href="/" className="font-mono text-xs" style={{ color: "#6b7280" }}>← Back</a>
        <span className="font-mono text-xs" style={{ color: "#2a2a3a" }}>/ proto-hero · mobile layouts</span>
      </div>

      <div className="px-4 md:px-8 py-16">
        <p className="font-mono text-xs mb-12 text-center" style={{ color: "#2a2a3a" }}>
          Mobile Hero layout options — 390px frame
        </p>
        <div className="flex flex-wrap justify-center gap-16">
          <M1 />
          <M2 />
          <M3 />
          <M4 />
        </div>
      </div>
    </div>
  );
}
