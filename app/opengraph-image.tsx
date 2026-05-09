import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Dot grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, #1e1e2e 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.5,
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(74,127,255,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0px", position: "relative" }}>
          {/* Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <span style={{ color: "#4a7fff", fontSize: "14px", letterSpacing: "0.15em" }}>
              RESEARCH PORTFOLIO · 2026
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#f0f4ff",
              letterSpacing: "-0.03em",
              lineHeight: 1,
              marginBottom: "20px",
            }}
          >
            Minseong Jo
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "22px",
              color: "#9ba3b2",
              marginBottom: "48px",
              display: "flex",
              gap: "16px",
            }}
          >
            <span style={{ color: "#c8d8ff" }}>Ph.D. Candidate</span>
            <span style={{ color: "#2a2a3a" }}>·</span>
            <span>Korea Institute of Toxicology</span>
            <span style={{ color: "#2a2a3a" }}>·</span>
            <span>Chungnam National University</span>
          </div>

          {/* Keywords */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {[
              "Multi-omics Integration",
              "IVIVC",
              "Biopharmaceutical Evaluation",
              "Precision Medicine",
            ].map((kw) => (
              <div
                key={kw}
                style={{
                  background: "#111118",
                  border: "1px solid #1e1e2e",
                  color: "#9ba3b2",
                  fontSize: "13px",
                  padding: "6px 14px",
                  borderRadius: "4px",
                }}
              >
                {kw}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom right monogram */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "48px",
            fontWeight: 700,
            color: "#4a7fff",
            opacity: 0.3,
            letterSpacing: "-2px",
          }}
        >
          MSJ
        </div>
      </div>
    ),
    { ...size }
  );
}
