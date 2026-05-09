"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin, FileText } from "lucide-react";
import CopyText from "@/components/ui/CopyText";
import SectionHeader from "@/components/ui/SectionHeader";
import { personal, references } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: "#0d0d14", borderTop: "1px solid #1e1e2e" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="09"
          title="Contact"
          subtitle="Open to collaborations in computational immunology, IVIVC research, and biopharmaceutical evaluation"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left: Photo + Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile photo */}
            <div className="flex items-start gap-6 mb-8">
              <div
                className="rounded-lg overflow-hidden shrink-0"
                style={{ border: "1px solid #1e1e2e", width: "96px" }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Minseong Jo"
                  width={303}
                  height={389}
                  className="w-full h-auto"
                />
              </div>
              <div className="pt-1">
                <p
                  className="text-base font-semibold mb-1"
                  style={{ color: "#f0f4ff" }}
                >
                  {personal.name}
                </p>
                <p className="text-sm mb-1" style={{ color: "#9ba3b2" }}>
                  {personal.title}
                </p>
                <p className="text-xs mb-3" style={{ color: "#6b7280" }}>
                  {personal.institution}
                  <br />
                  {personal.affiliation}
                </p>
                <div
                  className="flex items-center gap-1.5 font-mono text-xs"
                  style={{ color: "#2ecc71" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#2ecc71" }}
                  />
                  Currently active
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded shrink-0 flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: "#1a2a3a" }}
                >
                  <Mail size={15} style={{ color: "#4a7fff" }} />
                </div>
                <div>
                  <p className="text-xs font-mono mb-1" style={{ color: "#6b7280" }}>
                    Email
                  </p>
                  <CopyText
                    text={personal.email}
                    className="text-sm transition-colors"
                    style={{ color: "#c8d8ff" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#4a7fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#c8d8ff")}
                  />
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded shrink-0 flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: "#1a2a3a" }}
                >
                  <MapPin size={15} style={{ color: "#4a7fff" }} />
                </div>
                <div>
                  <p className="text-xs font-mono mb-1" style={{ color: "#6b7280" }}>
                    Location
                  </p>
                  <p className="text-sm" style={{ color: "#f0f4ff" }}>
                    {personal.location}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#9ba3b2" }}>
                    13, Sinseongnam-ro 115beon-gil, Yuseong-gu
                  </p>
                </div>
              </div>
            </div>

            {/* CV Download */}
            <a
              href="/MinseongJo_Curriculum_Vitae.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-mono transition-all duration-200"
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
              <FileText size={14} />
              Download Full CV (PDF)
            </a>
          </motion.div>

          {/* Right: References */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p
              className="font-mono text-xs tracking-widest uppercase mb-5"
              style={{ color: "#4a7fff" }}
            >
              References
            </p>
            <div className="space-y-4">
              {references.map((ref, i) => (
                <div
                  key={i}
                  className="p-4 rounded"
                  style={{ backgroundColor: "#111118", border: "1px solid #1e1e2e" }}
                >
                  <p className="text-sm font-semibold mb-0.5" style={{ color: "#f0f4ff" }}>
                    {ref.name}
                  </p>
                  <p className="text-xs mb-1" style={{ color: "#9ba3b2" }}>
                    {ref.title}
                  </p>
                  <p className="text-xs mb-2" style={{ color: "#6b7280" }}>
                    {ref.organization}
                  </p>
                  <CopyText
                    text={ref.email}
                    className="font-mono text-xs transition-colors"
                    style={{ color: "#4a7fff" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c8d8ff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#4a7fff")}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
