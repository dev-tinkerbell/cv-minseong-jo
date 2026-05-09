import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { publications } from "@/lib/data";
import {
  generatePersonSchema,
  generateScholarlyArticleSchema,
  generateCitationMetas,
} from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Min Seong Jo | Computational Immunology Researcher",
  description:
    "Ph.D. Candidate at Korea Institute of Toxicology specializing in transcriptomics, humanized mouse models, and biopharmaceutical evaluation through in vitro-in vivo correlation.",
  keywords: [
    "Min Seong Jo",
    "computational immunology",
    "humanized mouse model",
    "transcriptomics",
    "biopharmaceutical",
    "IVIVC",
    "Korea Institute of Toxicology",
    "multi-omics",
    "precision medicine",
  ],
  authors: [{ name: "Min Seong Jo", url: "mailto:Minseong.jo@kitox.re.kr" }],
  openGraph: {
    type: "profile",
    title: "Min Seong Jo | Computational Immunology Researcher",
    description:
      "Ph.D. Candidate specializing in transcriptomics, humanized mouse models, and biopharmaceutical evaluation.",
    locale: "en_US",
    siteName: "Min Seong Jo Research Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Min Seong Jo | Computational Immunology Researcher",
    description:
      "Ph.D. Candidate at Korea Institute of Toxicology · Transcriptomics · IVIVC · Precision Medicine",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const personSchema = generatePersonSchema();
const articleSchemas = publications.map(generateScholarlyArticleSchema);
const firstAuthorPub = publications.find((p) => p.type === "first-author")!;
const citationMetas = generateCitationMetas(firstAuthorPub);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {articleSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {citationMetas.map((meta, i) => (
          <meta key={i} name={meta.name} content={meta.content} />
        ))}
        <meta
          name="citation_author_institution"
          content="Korea Institute of Toxicology"
        />
      </head>
      <body className="min-h-screen" style={{ backgroundColor: "#0a0a0f" }}>
        {children}
      </body>
    </html>
  );
}
