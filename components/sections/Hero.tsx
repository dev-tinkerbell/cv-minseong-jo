"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import CopyText from "@/components/ui/CopyText";
import { personal } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};


export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!glowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowRef.current.style.background = `radial-gradient(ellipse 60% 50% at ${x}% ${y}%, rgba(74,127,255,0.10) 0%, transparent 70%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.background =
      "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(74,127,255,0.06) 0%, transparent 70%)";
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center dot-grid pt-14"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(74,127,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-20">

          {/* Photo — top on mobile, hidden on desktop (shown in right column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block lg:hidden"
          >
            <div
              className="overflow-hidden rounded-lg"
              style={{ width: "120px", border: "1px solid #1e1e2e" }}
            >
              <Image
                src="/profile.jpg"
                alt="Minseong Jo"
                width={303}
                height={389}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Left: Text content */}
          <div className="max-w-2xl">
            {/* Tag line */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >
              <span
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: "#4a7fff" }}
              >
                Research Portfolio
              </span>
              <span className="h-px flex-1 max-w-12" style={{ backgroundColor: "#1e1e2e" }} />
              <span className="font-mono text-xs" style={{ color: "#2a2a3a" }}>2026</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tight mb-4"
              style={{ color: "#f0f4ff", letterSpacing: "-0.03em" }}
            >
              Minseong Jo
            </motion.h1>

            {/* Title */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-8"
            >
              <span className="text-base md:text-lg" style={{ color: "#c8d8ff" }}>
                {personal.title}
              </span>
              <span style={{ color: "#2a2a3a" }}>·</span>
              <span className="text-base md:text-lg" style={{ color: "#9ba3b2" }}>
                {personal.institution}
              </span>
              <span style={{ color: "#2a2a3a" }}>·</span>
              <span className="text-base md:text-lg" style={{ color: "#9ba3b2" }}>
                {personal.affiliation}
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-sm md:text-base leading-relaxed mb-10"
              style={{ color: "#9ba3b2", lineHeight: 1.8 }}
            >
              {personal.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#publications"
                className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-all duration-200"
                style={{ backgroundColor: "#4a7fff", color: "#f0f4ff" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3b6fe8")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4a7fff")}
              >
                View Publications
                <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-all duration-200"
                style={{ border: "1px solid #1e1e2e", color: "#9ba3b2" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#4a7fff";
                  e.currentTarget.style.color = "#f0f4ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1e1e2e";
                  e.currentTarget.style.color = "#9ba3b2";
                }}
              >
                Contact
              </a>
            </motion.div>

            {/* Meta info */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-6"
            >
              <CopyText
                text={personal.email}
                className="flex items-center gap-2 text-xs font-mono transition-colors"
                style={{ color: "#6b7280" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#9ba3b2")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
              >
                <Mail size={12} />
                {personal.email}
              </CopyText>
              <span className="flex items-center gap-2 text-xs font-mono" style={{ color: "#6b7280" }}>
                <MapPin size={12} />
                {personal.location}
              </span>
            </motion.div>
          </div>

          {/* Right: Profile photo — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex shrink-0 flex-col items-end gap-3"
          >
            <div
              className="overflow-hidden rounded-lg"
              style={{
                width: "200px",
                border: "1px solid #1e1e2e",
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Minseong Jo"
                width={303}
                height={389}
                className="w-full h-auto"
                priority
              />
            </div>
            <p className="font-mono text-xs" style={{ color: "#2a2a3a" }}>
              {personal.name}
            </p>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs" style={{ color: "#2a2a3a" }}>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ backgroundColor: "#2a2a3a" }}
        />
      </motion.div>
    </section>
  );
}
