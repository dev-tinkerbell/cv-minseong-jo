"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, FileText, Mail } from "lucide-react";
import { personal } from "@/lib/data";

const navLinks = [
  { label: "Research", href: "#research" },
  { label: "Current Research", href: "#pipeline" },
  { label: "Publications", href: "#publications" },
  { label: "Research Experience", href: "#timeline" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// Google Scholar 아이콘 (SVG)
function GoogleScholarIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z" />
    </svg>
  );
}

// ORCID 아이콘 (SVG)
function OrcidIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
    </svg>
  );
}

// ResearchGate 아이콘 (SVG)
function ResearchGateIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a12.66 12.66 0 0 0-.35 2.64l-.08 2.65c-.154 3.214-1.82 5.022-4.87 5.022H8.99V7.49H5.52v16.263h3.468v-7.487h2.058c1.555 0 2.786.527 3.695 1.582.91 1.056 1.365 2.497 1.365 4.321v1.584h3.433v-2.286c0-1.74-.267-3.196-.8-4.367-.534-1.172-1.35-2.072-2.45-2.703 1.096-.618 1.895-1.512 2.394-2.682.5-1.17.75-2.66.75-4.471V5.01c0-1.167.14-2.025.42-2.576.28-.55.755-.826 1.42-.826a3.12 3.12 0 0 1 .784.107V.107A3.765 3.765 0 0 0 19.586 0z" />
    </svg>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center rounded transition-all duration-150"
      style={{ color: "#6b7280", border: "1px solid transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#c8d8ff";
        e.currentTarget.style.borderColor = "#1e1e2e";
        e.currentTarget.style.backgroundColor = "#111118";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#6b7280";
        e.currentTarget.style.borderColor = "transparent";
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      {children}
    </a>
  );
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy email"
      className="relative w-8 h-8 flex items-center justify-center rounded transition-all duration-150"
      style={{ color: "#6b7280", border: "1px solid transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#c8d8ff";
        e.currentTarget.style.borderColor = "#1e1e2e";
        e.currentTarget.style.backgroundColor = "#111118";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#6b7280";
        e.currentTarget.style.borderColor = "transparent";
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <Mail size={14} />
      {copied && (
        <span
          className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-mono px-2 py-0.5 rounded whitespace-nowrap pointer-events-none"
          style={{ backgroundColor: "#111118", color: "#2ecc71", border: "1px solid #1e1e2e" }}
        >
          Copied!
        </span>
      )}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(10, 10, 15, 0.92)"
            : "rgba(10, 10, 15, 0.6)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #1e1e2e" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-baseline gap-2"
            onClick={() => setOpen(false)}
          >
            <span
              className="font-mono text-sm font-semibold tracking-wider"
              style={{ color: "#4a7fff" }}
            >
              MSJ
            </span>
            <span className="hidden sm:inline text-xs" style={{ color: "#6b7280" }}>
              {personal.name}
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-xs font-mono tracking-wider uppercase transition-colors duration-150 pb-0.5"
                  style={{ color: isActive ? "#4a7fff" : "#6b7280" }}
                  onMouseEnter={(e) => !isActive && (e.currentTarget.style.color = "#f0f4ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#4a7fff" : "#6b7280")}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ backgroundColor: "#4a7fff" }}
                    />
                  )}
                </a>
              );
            })}

            {/* Divider */}
            <div className="h-4 w-px" style={{ backgroundColor: "#1e1e2e" }} />

            {/* Academic / Social icons */}
            <div className="flex items-center gap-1">
              <CopyEmailButton />
              <IconLink href={personal.links.googleScholar} label="Google Scholar">
                <GoogleScholarIcon size={14} />
              </IconLink>
              <IconLink href={personal.links.orcid} label="ORCID">
                <OrcidIcon size={14} />
              </IconLink>
              <IconLink href={personal.links.researchGate} label="ResearchGate">
                <ResearchGateIcon size={14} />
              </IconLink>
            </div>

            {/* Divider */}
            <div className="h-4 w-px" style={{ backgroundColor: "#1e1e2e" }} />

            {/* CV button */}
            <a
              href="/MinseongJo_Curriculum_Vitae.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all duration-150"
              style={{ border: "1px solid #1e1e2e", color: "#9ba3b2" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#4a7fff";
                e.currentTarget.style.color = "#4a7fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1e1e2e";
                e.currentTarget.style.color = "#9ba3b2";
              }}
            >
              <FileText size={12} />
              CV
            </a>
          </nav>

          {/* Mobile: icons + hamburger */}
          <div className="flex items-center gap-1 md:hidden">
            <CopyEmailButton />
            <button
              className="w-8 h-8 flex items-center justify-center rounded"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{ color: "#9ba3b2" }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden flex flex-col"
          style={{ backgroundColor: "rgba(10, 10, 15, 0.98)" }}
          onClick={() => setOpen(false)}
        >
          <div className="h-14" />
          <nav className="flex flex-col px-8 pt-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold tracking-tight"
                style={{ color: "#f0f4ff" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile academic icons row */}
            <div className="flex items-center gap-3 pt-2">
              {personal.links.googleScholar && (
                <a
                  href={personal.links.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono"
                  style={{ color: "#9ba3b2" }}
                >
                  <GoogleScholarIcon size={16} />
                  Scholar
                </a>
              )}
              {personal.links.orcid && (
                <a
                  href={personal.links.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono"
                  style={{ color: "#9ba3b2" }}
                >
                  <OrcidIcon size={16} />
                  ORCID
                </a>
              )}
              {personal.links.researchGate && (
                <a
                  href={personal.links.researchGate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono"
                  style={{ color: "#9ba3b2" }}
                >
                  <ResearchGateIcon size={16} />
                  ResearchGate
                </a>
              )}
            </div>

            <a
              href="/MinseongJo_Curriculum_Vitae.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 text-sm font-mono"
              style={{ color: "#4a7fff" }}
              onClick={() => setOpen(false)}
            >
              <FileText size={14} />
              Download CV
            </a>
          </nav>
          <div className="px-8 mt-auto pb-12">
            <p className="text-xs font-mono" style={{ color: "#2a2a3a" }}>
              Korea Institute of Toxicology · Daejeon
            </p>
          </div>
        </div>
      )}
    </>
  );
}
