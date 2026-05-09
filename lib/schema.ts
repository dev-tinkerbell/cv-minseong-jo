import { Publication, personal } from "./data";

const SITE_URL = "https://cv-minseong.vercel.app";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    givenName: "Min Seong",
    familyName: "Jo",
    jobTitle: `${personal.title}, Molecular Biotechnology`,
    email: personal.email,
    url: SITE_URL,
    sameAs: [personal.links.googleScholar].filter(Boolean),
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
}

export function generateScholarlyArticleSchema(pub: Publication) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    name: pub.title,
    headline: pub.title,
    author: pub.authors.map((author) => ({
      "@type": "Person",
      name: author,
    })),
    datePublished: String(pub.year),
    isPartOf: {
      "@type": "PublicationIssue",
      isPartOf: {
        "@type": "Periodical",
        name: pub.journal,
        ...(pub.volume && { volumeNumber: pub.volume }),
        ...(pub.issue && { issueNumber: pub.issue }),
      },
    },
    ...(pub.pages && { pagination: pub.pages }),
    ...(pub.doi && {
      identifier: `https://doi.org/${pub.doi}`,
      url: `https://doi.org/${pub.doi}`,
      sameAs: `https://doi.org/${pub.doi}`,
    }),
  };
}

export function generateCitationMetas(
  pub: Publication
): { name: string; content: string }[] {
  const metas: { name: string; content: string }[] = [
    { name: "citation_title", content: pub.title },
    ...pub.authors.map((a) => ({ name: "citation_author", content: a })),
    { name: "citation_publication_date", content: String(pub.year) },
    { name: "citation_journal_title", content: pub.journal },
  ];

  if (pub.volume) metas.push({ name: "citation_volume", content: pub.volume });
  if (pub.issue) metas.push({ name: "citation_issue", content: pub.issue });
  if (pub.pages) {
    const [first, last] = pub.pages.split("–");
    metas.push({ name: "citation_firstpage", content: first.trim() });
    if (last) metas.push({ name: "citation_lastpage", content: last.trim() });
  }
  if (pub.doi) metas.push({ name: "citation_doi", content: pub.doi });

  return metas;
}
