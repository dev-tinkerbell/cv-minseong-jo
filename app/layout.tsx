import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Min Seong Jo",
  givenName: "Min Seong",
  familyName: "Jo",
  jobTitle: "Ph.D. Candidate, Molecular Biotechnology",
  email: "Minseong.jo@kitox.re.kr",
  affiliation: [
    {
      "@type": "Organization",
      name: "Korea Institute of Toxicology",
      alternateName: "KIT",
    },
    {
      "@type": "Organization",
      name: "Chungnam National University",
      alternateName: "CNU",
    },
  ],
  alumniOf: [
    { "@type": "Organization", name: "Sungkyunkwan University" },
    { "@type": "Organization", name: "Catholic University of Korea" },
  ],
  knowsAbout: [
    "Computational Immunology",
    "Humanized Mouse Models",
    "Transcriptomics",
    "Multi-omics Integration",
    "Biopharmaceutical Evaluation",
    "In vitro-In vivo Correlation",
  ],
};

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
        <meta name="citation_author" content="Jo, Min Seong" />
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
