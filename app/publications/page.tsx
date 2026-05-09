import type { Metadata } from "next";
import { publications } from "@/lib/data";
import { generateScholarlyArticleSchema, generateCitationMetas } from "@/lib/schema";
import PublicationsList from "./PublicationsList";
import BackLink from "./BackLink";

export const metadata: Metadata = {
  title: "Publications | Minseong Jo",
  description:
    "Peer-reviewed publications by Minseong Jo — transcriptomics, humanized mouse models, biopharmaceutical evaluation, and in vitro-in vivo correlation.",
  openGraph: {
    title: "Publications | Minseong Jo",
    description:
      "7 peer-reviewed publications in ACS Omega, FASEB Journal, Chemical Engineering Journal, Heliyon, Transplantation Proceedings, and Applications in Plant Sciences.",
    type: "website",
  },
};

const articleSchemas = publications.map(generateScholarlyArticleSchema);
const citationMetaGroups = publications.map(generateCitationMetas);

export default function PublicationsPage() {
  return (
    <>
      <head>
        {articleSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {citationMetaGroups.map((metas, pi) =>
          metas.map((meta, mi) => (
            <meta key={`${pi}-${mi}`} name={meta.name} content={meta.content} />
          ))
        )}
      </head>

      <div className="min-h-screen" style={{ backgroundColor: "#0a0a0f" }}>
        {/* Top nav */}
        <div
          className="sticky top-0 z-50 px-4 md:px-8 lg:px-16 h-14 flex items-center"
          style={{
            backgroundColor: "rgba(10,10,15,0.92)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #1e1e2e",
          }}
        >
          <BackLink />
          <span
            className="ml-3 font-mono text-xs"
            style={{ color: "#2a2a3a" }}
          >
            / Publications
          </span>
        </div>

        <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
          {/* Header */}
          <div className="mb-12">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-3"
              style={{ color: "#4a7fff" }}
            >
              04 /
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
              style={{ color: "#f0f4ff", letterSpacing: "-0.02em" }}
            >
              Publications
            </h1>
            <p className="text-sm" style={{ color: "#6b7280" }}>
              {publications.length} peer-reviewed publications &middot; 1 first-author
            </p>
          </div>

          <PublicationsList />
        </main>
      </div>
    </>
  );
}
