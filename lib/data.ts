export type TagType = "bio" | "comp" | "pharma" | "gen" | "neutral";

export interface Publication {
  id: string;
  year: number;
  title: string;
  authors: string[];
  journal: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  tags: { label: string; type: TagType }[];
  type: "first-author" | "co-author";
  note?: string;
}

export interface TimelineEvent {
  year: number;
  endYear?: number | "present";
  type: "education" | "research" | "internship" | "publication" | "award";
  title: string;
  organization: string;
  location?: string;
  description?: string;
  isCurrent?: boolean;
}

export interface SkillCategory {
  name: string;
  type: TagType;
  skills: string[];
}

export interface Award {
  year: number;
  title: string;
  grantor: string;
}

export interface Reference {
  name: string;
  degree: string;
  title: string;
  organization: string;
  email: string;
}

// ── Publications ──────────────────────────────────────────────────────────────
export const publications: Publication[] = [
  {
    id: "jo-2026-acs",
    year: 2026,
    title:
      "Two-Step Algorithmic Selection of Interspecies Sequence-Mismatch-Based Housekeeping Genes for Precise Gene-Expression Assessment in PBMC-Humanized NSG Mice",
    authors: [
      "Jo, M.",
      "Jeong, S. Y.",
      "Kyun, M. L.",
      "Lee, Y. S.",
      "Lee, J.",
      "Choi, C. H.",
      "Lee, Y. B.",
      "Choi, M.",
      "Rho, J.",
      "Moon, K. S.",
    ],
    journal: "ACS Omega",
    volume: "11",
    issue: "6",
    pages: "9187–9200",
    doi: "10.1021/acsomega.5c08313",
    tags: [
      { label: "Humanized Mouse", type: "bio" },
      { label: "Transcriptomics", type: "comp" },
      { label: "Bioinformatics", type: "comp" },
    ],
    type: "first-author",
    note: "Supplementary Cover",
  },
  {
    id: "choi-2026-faseb",
    year: 2026,
    title:
      "Wnt Signaling Downregulation Mediates T Cell Apoptosis Following OKT3‐Induced T Cell Activation in Preclinical Models",
    authors: [
      "Choi, M.",
      "Park, D.",
      "Lee, D. H.",
      "Choi, C. H.",
      "Jo, M.",
      "Jeong, S. Y.",
      "Moon, K. S.",
    ],
    journal: "The FASEB Journal",
    volume: "40",
    issue: "6",
    pages: "e71700",
    tags: [
      { label: "Immunology", type: "bio" },
      { label: "mAb Therapeutic", type: "pharma" },
    ],
    type: "co-author",
  },
  {
    id: "kyun-2025-cej",
    year: 2025,
    title:
      "3D liver model for assessing immune-mediated hepatotoxicity from biopharmaceutical risks",
    authors: [
      "Kyun, M. L.",
      "Park, D.",
      "Jung, H.",
      "Ryu, J. H.",
      "Kim, I.",
      "Jeong, S. Y.",
      "Kim, J.",
      "Jo, M.",
      "Kwon, J. I.",
      "Kim, J. K.",
      "Kim, D.",
      "Park, S. A.",
      "Ryu, C. S.",
      "Kim, S. K.",
      "Lee, Y. B.",
      "Moon, K. S.",
    ],
    journal: "Chemical Engineering Journal",
    volume: "523",
    pages: "168419",
    doi: "10.1016/j.cej.2025.168419",
    tags: [
      { label: "3D Model", type: "bio" },
      { label: "Hepatotoxicity", type: "pharma" },
      { label: "Biopharmaceutical", type: "pharma" },
    ],
    type: "co-author",
  },
  {
    id: "kyun-2025-acs",
    year: 2025,
    title:
      "Developing a Human Immune-Endothelial Coculture Model for Inflammatory Vasculitis and Drug Screening",
    authors: [
      "Kyun, M. L.",
      "Kwon, J. I.",
      "Kim, J.",
      "Jo, M.",
      "Jung, H.",
      "Lee, Y. B.",
      "Moon, K. S.",
    ],
    journal: "ACS Omega",
    volume: "10",
    issue: "40",
    pages: "47544–47558",
    doi: "10.1021/acsomega.5c07484",
    tags: [
      { label: "Co-culture", type: "bio" },
      { label: "Drug Screening", type: "pharma" },
    ],
    type: "co-author",
  },
  {
    id: "jeong-2024-heliyon",
    year: 2024,
    title:
      "Interspecies transcriptome profiles of human T cell activation and liver inflammation in a xenogeneic graft-versus-host disease model",
    authors: [
      "Jeong, S. Y.",
      "Park, D.",
      "Park, T.",
      "Han, J. S.",
      "Lee, J.",
      "Choi, C. H.",
      "Jo, M.",
      "Lee, Y. B.",
      "Kyun, M. L.",
      "Choi, M.",
      "Moon, K. S.",
    ],
    journal: "Heliyon",
    volume: "10",
    issue: "23",
    doi: "10.1016/j.heliyon.2024.e40559",
    tags: [
      { label: "GvHD Model", type: "bio" },
      { label: "Transcriptomics", type: "comp" },
      { label: "Humanized Mouse", type: "bio" },
    ],
    type: "co-author",
  },
  {
    id: "bak-2024-transplant",
    year: 2024,
    title:
      "The Effects of Busulfan on Xenogeneic Transplantation of Human Peripheral Blood Mononuclear Cells in Recipient Mice",
    authors: [
      "Bak, I.",
      "Choi, M.",
      "Yu, E.",
      "Yoo, K. W.",
      "Jeong, S. Y.",
      "Lee, J.",
      "Jo, M.",
      "Moon, K. S.",
      "Yu, D. Y.",
    ],
    journal: "Transplantation Proceedings",
    volume: "56",
    issue: "2",
    pages: "440–447",
    doi: "10.1016/j.transproceed.2023.12.018",
    tags: [
      { label: "Humanized Mouse", type: "bio" },
      { label: "PBMC", type: "bio" },
    ],
    type: "co-author",
  },
  {
    id: "kim-2020-aps",
    year: 2020,
    title:
      "Development and characterization of 17 microsatellite markers for Sonchus oleraceus",
    authors: [
      "Kim, S. H.",
      "Kim, H. B.",
      "Cho, M. S.",
      "Kim, C. S.",
      "Kim, S. C.",
    ],
    journal: "Applications in Plant Sciences",
    volume: "8",
    issue: "3",
    pages: "e11329",
    doi: "10.1002/aps3.11329",
    tags: [
      { label: "Population Genetics", type: "gen" },
      { label: "SSR Markers", type: "gen" },
    ],
    type: "co-author",
  },
];

// ── Timeline ──────────────────────────────────────────────────────────────────
export const timeline: TimelineEvent[] = [
  {
    year: 2012,
    endYear: 2019,
    type: "education",
    title: "B.S. in Life Science",
    organization: "Catholic University of Korea",
    location: "Bucheon, Republic of Korea",
    description:
      "Undergraduate thesis: Flora and Forest Community Structure of Wonmisan Mountain. Research in Community Ecology & Plant Ecology.",
  },
  {
    year: 2017,
    endYear: 2019,
    type: "research",
    title: "Undergraduate Researcher",
    organization: "Ecology Laboratory, Catholic University of Korea",
    description: "Community Ecology · Plant Ecology",
  },
  {
    year: 2019,
    endYear: 2021,
    type: "education",
    title: "M.S. in Biological Sciences",
    organization: "Sungkyunkwan University (SKKU)",
    location: "Suwon, Republic of Korea",
    description:
      "GPA 4.3/4.5. Thesis: Genetic diversity and differentiation of Styrax obassia using microsatellite (SSR) markers. Conducted population genetics study on 288 accessions across the Korean Peninsula.",
  },
  {
    year: 2019,
    endYear: 2020,
    type: "research",
    title: "Teaching Assistant",
    organization: "Department of Biological Sciences, SKKU",
    description:
      "Experimental of General Biology · Laboratory of Plant Taxonomy",
  },
  {
    year: 2021,
    endYear: 2022,
    type: "research",
    title: "Researcher — Genome Editing Laboratory",
    organization: "School of Medicine, Sungkyunkwan University",
    description:
      "Developed next-generation genome editors (Prime & Base editors, dCas9/nCas9). Participated in EGFR T790M drug development research using point mutation-based genome editing.",
  },
  {
    year: 2022,
    endYear: 2023,
    type: "internship",
    title: "Intern Researcher",
    organization:
      "Advanced Biopharmaceutical Research Group, Korea Institute of Toxicology (KIT)",
    location: "Daejeon, Republic of Korea",
    description:
      "Investigated the human immune system using NOG/NSG immunodeficient mice. Focused on cytokine-immune response correlation.",
  },
  {
    year: 2023,
    endYear: "present",
    type: "research",
    title: "Graduate Researcher (Joint Ph.D. Program)",
    organization:
      "Center for Global Biopharmaceutical Research, KIT & Chungnam National University",
    location: "Daejeon, Republic of Korea",
    description:
      "Ph.D. in Molecular Biotechnology. Research on IVIVC system, mAb therapeutics, species-specific qPCR marker development, GvHD disease models, and in vitro 3D disease modeling.",
    isCurrent: true,
  },
];

// ── Skills ────────────────────────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    name: "In Vivo Techniques",
    type: "bio",
    skills: [
      "Flow cytometry",
      "ELISA",
      "RT-qPCR",
      "RNA extraction",
      "cDNA synthesis",
      "ddPCR",
      "Hydroxyproline assay",
      "Orbital blood collection",
      "Tail vein injection",
      "Histological analysis",
      "Autopsy",
    ],
  },
  {
    name: "Molecular & Cell Biology",
    type: "bio",
    skills: [
      "Monoclonal antibody handling",
      "T-cell isolation (hPBMC)",
      "Macrophage polarization",
      "Cell culture (H1299, PC-9)",
      "Electroporation",
      "Transfection (lipofectamine)",
      "SDS-PAGE",
      "Gel electrophoresis",
      "Protein overexpression",
      "Protein purification",
    ],
  },
  {
    name: "3D & Advanced Models",
    type: "pharma",
    skills: [
      "3D cell culture",
      "Hepatocyte-Immune coculture",
      "Cytotoxicity assays",
      "Live/Dead staining",
      "Confocal microscopy",
      "Multiplex cytokine profiling",
    ],
  },
  {
    name: "Bioinformatics & Genomics",
    type: "comp",
    skills: [
      "Bulk RNA-seq",
      "scRNA-seq",
      "NGS (deep sequencing)",
      "Sanger sequencing",
      "Sequence alignment",
      "Mismatch-based primer design",
      "SSR marker development",
      "gDNA / cpDNA extraction",
      "PCR",
      "Vector cloning",
      "sgRNA design",
      "in vitro transcription",
    ],
  },
  {
    name: "Computational Tools",
    type: "comp",
    skills: [
      "R",
      "Python",
      "Linux",
      "GenALEx v6.5",
      "STRUCTURE v2.3.4",
      "Maxent 3.4.1",
      "GraphPad Prism",
      "GBIF / WorldClim 2",
    ],
  },
];

// ── Awards ────────────────────────────────────────────────────────────────────
export const awards: Award[] = [
  {
    year: 2026,
    title: "Outstanding Researcher Award",
    grantor: "President of the Korea Institute of Toxicology",
  },
  {
    year: 2024,
    title: "Outstanding Achievement Award — Research Achievement Competition",
    grantor: "President of the Korea Institute of Toxicology",
  },
  {
    year: 2023,
    title: "Outstanding Poster Presentation Award — KIT Annual Conference",
    grantor: "President of the Korea Institute of Toxicology",
  },
  {
    year: 2023,
    title: "Seoul City Chairman's Citation",
    grantor: "Chairman of Seoul",
  },
  {
    year: 2018,
    title: "Excellent Eco-Activist Group Award",
    grantor: "President of the National Institute of Biological Resources",
  },
];

// ── References ────────────────────────────────────────────────────────────────
export const references: Reference[] = [
  {
    name: "Yu Bin Lee, Ph.D.",
    degree: "Ph.D.",
    title: "Associate Researcher",
    organization:
      "Center for Global Biopharmaceutical Research, Korea Institute of Toxicology",
    email: "yubin.lee@kitox.re.kr",
  },
  {
    name: "Jaerang Rho, Ph.D.",
    degree: "Ph.D.",
    title: "Professor",
    organization:
      "College of Bioscience & Biotechnology, Chungnam National University",
    email: "jrrho@cnu.ac.kr",
  },
  {
    name: "Seung Chul Kim, Ph.D.",
    degree: "Ph.D.",
    title: "Professor",
    organization: "Department of Biological Science, Sungkyunkwan University",
    email: "sonchus2009@gmail.com",
  },
];

// ── Personal ──────────────────────────────────────────────────────────────────
export const personal = {
  name: "Min Seong Jo",
  nameAlt: "조민성",
  title: "Ph.D. Candidate",
  institution: "Korea Institute of Toxicology (KIT)",
  affiliation: "Chungnam National University (CNU)",
  email: "Minseong.jo@kitox.re.kr",
  location: "Daejeon, Republic of Korea",
  bio: "A researcher specializing in transcriptomics, functional validation, and humanized mouse model development to enhance the precision of biopharmaceutical evaluation through in vitro-in vivo correlation.",
  keywords: [
    "Multi-omics Data Integration",
    "In vitro-In vivo Correlation (IVIVC)",
    "Biopharmaceutical Efficacy & Safety Assessment",
    "Precision Medicine & Biomarker Discovery",
  ],
  links: {
    googleScholar: "https://scholar.google.com/citations?user=owHoxtYAAAAJ&hl=ko&oi=ao",
    orcid: "",
    researchGate: "",
  },
};
