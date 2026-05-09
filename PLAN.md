# Min Seong Jo — Research Portfolio Website Plan

---

## 1. Overview

**목적:** Min Seong Jo의 학술 CV를 기반으로 한 고품질 연구 포트폴리오 웹사이트  
**방향:** Nature Journal 편집 스타일 + DeepMind 연구 미학 + 과학적 인터페이스  
**우선순위:** 학술 신뢰성 · **모바일 퍼스트** · SEO 최적화 · 절제된 인터랙션

---

## 2. Tech Stack

| 항목 | 선택 | 비고 |
|------|------|------|
| Framework | Next.js 15 (App Router) | SSG/SSR 혼용, Metadata API |
| Styling | Tailwind CSS v4 | 모바일 퍼스트 유틸리티 |
| Animation | Framer Motion | 절제된 스크롤 인터랙션 |
| Font | Geist Sans + IBM Plex Mono | 학술 · 데이터 느낌 |
| Deployment | Vercel | 자동 CDN, Analytics |
| Analytics | Vercel Analytics + Google Analytics 4 | 검색 트래픽 추적 |
| SEO Schema | JSON-LD (Schema.org) | Google 학술 검색 최적화 |
| Icons | Lucide React | 경량, 일관성 |

---

## 3. 프로젝트 구조

```
cv_minseoung/
├── app/
│   ├── layout.tsx              ← Root layout + JSON-LD Person schema
│   ├── page.tsx                ← 메인 랜딩 (SSG)
│   ├── publications/
│   │   └── page.tsx            ← 논문 전체 목록 페이지
│   ├── sitemap.ts              ← 자동 sitemap 생성
│   └── robots.ts               ← robots.txt
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ResearchIdentity.tsx
│   │   ├── ResearchPipeline.tsx
│   │   ├── Publications.tsx
│   │   ├── ExperimentalPlatforms.tsx
│   │   ├── Timeline.tsx
│   │   ├── Skills.tsx
│   │   ├── Awards.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── PublicationCard.tsx
│   │   ├── TimelineNode.tsx
│   │   ├── SkillBadge.tsx
│   │   ├── SectionHeader.tsx
│   │   └── FilterTabs.tsx
│   └── layout/
│       ├── Navbar.tsx          ← 모바일 햄버거 메뉴 포함
│       └── Footer.tsx
├── lib/
│   ├── data.ts                 ← CV 데이터 중앙 관리 (단일 소스)
│   └── schema.ts               ← JSON-LD schema 생성 함수
├── public/
│   ├── og-image.png            ← OG 이미지 (1200×630)
│   └── cv-minseongjo.pdf       ← 다운로드용 CV
├── tailwind.config.ts
├── next.config.ts
└── PLAN.md
```

---

## 4. 디자인 시스템

### 4-1. Color Palette

```css
/* Background */
--bg-base:        #0A0A0F;   /* 메인 배경 */
--bg-surface:     #111118;   /* 카드 · 패널 배경 */
--bg-elevated:    #16161F;   /* hover 상태 배경 */

/* Border */
--border-subtle:  #1E1E2E;   /* 기본 경계선 */
--border-muted:   #2A2A3A;   /* 강조 경계선 */

/* Text */
--text-primary:   #F0F4FF;   /* 주 텍스트 */
--text-secondary: #9BA3B2;   /* 보조 텍스트 */
--text-muted:     #6B7280;   /* 비활성 텍스트 */

/* Accent */
--accent-blue:    #4A7FFF;   /* 주 인터랙션 포인트 */
--accent-light:   #C8D8FF;   /* 제목 강조 */

/* Category Tags */
--tag-bio:        #1A3A2A / #2ECC71   /* 생물학 */
--tag-comp:       #1A2A3A / #4A7FFF  /* 전산 */
--tag-pharma:     #2A1A3A / #9B59B6  /* 제약 */
--tag-gen:        #3A2A1A / #E67E22  /* 유전체 */
```

### 4-2. Typography

```
Heading H1:   Geist Sans 700, -0.03em, 2.5rem (mobile: 1.75rem)
Heading H2:   Geist Sans 700, -0.02em, 1.75rem (mobile: 1.375rem)
Heading H3:   Geist Sans 600, -0.01em, 1.125rem
Body:         Geist Sans 400, 1.7 line-height, 1rem (mobile: 0.9375rem)
Caption:      Geist Sans 400, 0.875rem
Code/Data:    IBM Plex Mono 400, 0.8125rem (기법명·수치)
Label/Badge:  Geist Sans 500, UPPERCASE, 0.08em tracking, 0.6875rem
```

### 4-3. UI 모티프

- **섹션 넘버링:** `01 /`, `02 /`, `03 /` — 논문 섹션 스타일
- **1px 경계선 그리드:** Nature Journal 편집 레이아웃
- **Monospace 태그:** 기법명, 도구명, 수치 데이터
- **점선 테두리:** 진행중 연구 (PhD 현재 과정)
- **논문 인용 형식:** APA 원문 그대로 보존
- **강조 하이라이트:** 저자 목록에서 `Jo, M.` 볼드 처리

---

## 5. 모바일 퍼스트 설계 (최우선)

### 5-1. 설계 원칙

```
- 모든 컴포넌트를 모바일 기준으로 먼저 설계
- Tailwind: sm: → md: → lg: 순서로 확장
- 터치 타겟 최소 44×44px (iOS 가이드라인)
- 스와이프 제스처 고려 (수평 스크롤 컴포넌트)
- 폰트 크기 최소 14px (모바일 가독성)
- 적절한 여백 유지 (px-4 base, md:px-8, lg:px-16)
```

### 5-2. 브레이크포인트 전략

```
xs  (< 480px):   1열, 최소 여백, 축약 UI
sm  (480-767px): 1열, 여유 여백
md  (768-1023px): 1~2열 혼합, 탭 메뉴
lg  (1024-1279px): 2~3열 그리드
xl  (1280px+):   풀 레이아웃
```

### 5-3. 컴포넌트별 모바일 대응

| 섹션 | 데스크톱 | 모바일 |
|------|---------|--------|
| Navbar | 가로 메뉴 전체 표시 | 햄버거 → 슬라이드 다운 메뉴 |
| Hero | 2컬럼 (텍스트 + 비주얼) | 1열 (텍스트 중심, 비주얼 생략) |
| Research Identity | 2컬럼 | 1열 스택 |
| Research Pipeline | 수평 SVG 다이어그램 | 수직 플로우 → 각 단계 카드형 |
| Publications | 카드 2열 | 카드 1열 풀위드 |
| Publications 필터 | 탭 일렬 | 수평 스크롤 탭 (스와이프) |
| Experimental Platforms | 3열 그리드 | 1열 스택 + 아코디언 접기/펼치기 |
| Timeline | 좌측 축 + 우측 내용 | 좌측 점선 + 우측 내용 (좁은 버전) |
| Skills | 카테고리별 태그 | 아코디언 카테고리 접기/펼치기 |
| Awards | 2열 리스트 | 1열 리스트 |
| Contact | 2컬럼 | 1열 스택 |

### 5-4. 모바일 Navbar

```
고정 (sticky top): 높이 56px
좌측: 이름 로고 (Min Seong Jo)
우측: 햄버거 아이콘

햄버거 클릭 → 풀스크린 메뉴 오버레이:
  01 / Research
  02 / Publications
  03 / Timeline
  04 / Skills
  05 / Awards
  06 / Contact
  [Download CV]
```

### 5-5. 모바일 Research Pipeline

```
데스크톱: [A] → [B] → [C] → [D] (수평)

모바일: 수직 카드 스택
  ┌──────────────────┐
  │ 01  Human PBMC   │
  │     hPBMC        │
  └────────┬─────────┘
           ↓
  ┌──────────────────┐
  │ 02  Humanized    │
  │     Mouse Model  │
  └────────┬─────────┘
           ↓
         ...
```

### 5-6. 모바일 성능 목표

```
Lighthouse Mobile Score:
  Performance:    ≥ 90
  Accessibility:  ≥ 95
  Best Practices: ≥ 95
  SEO:            100

Core Web Vitals (Mobile):
  LCP: < 2.5s
  FID: < 100ms
  CLS: < 0.1

최적화 방법:
  - next/image 자동 WebP + lazy loading
  - 폰트 subset (영문 + 한글 최소)
  - 불필요한 JS 번들 제거 (tree-shaking)
  - SVG 애니메이션 → 모바일에서 간소화
  - preload: 폰트, OG 이미지
```

---

## 6. SEO 전략

### 6-1. Technical SEO

```
✅ Next.js Metadata API         — 페이지별 title / description / OG tags
✅ generateMetadata()           — 동적 메타데이터
✅ sitemap.xml                  — next-sitemap 자동 생성
✅ robots.txt                   — 모든 크롤러 허용
✅ Canonical URL                — 중복 콘텐츠 방지
✅ next/image                   — WebP 변환, LCP 최적화
✅ Static Generation (SSG)      — 빠른 로딩, 크롤러 친화적
✅ Semantic HTML                — h1~h6, article, section, nav
✅ Core Web Vitals 최적화       — LCP < 2.5s, CLS < 0.1
✅ Mobile-first indexing 대응   — 구글 모바일 우선 색인 최적화
```

### 6-2. Academic SEO (핵심)

```
✅ JSON-LD: Person schema       — 연구자 신원 구조화
✅ JSON-LD: ScholarlyArticle    — 논문별 구조화 데이터
✅ JSON-LD: ResearchProject     — 연구 프로젝트 구조화
✅ Google Scholar citation 태그 — <meta name="citation_*">
✅ DOI 링크 직접 노출           — 논문 링크 권위 확보
✅ ORCID 연동 준비              — sameAs 속성
✅ OpenGraph + Twitter Card     — SNS 공유 최적화
✅ Google Search Console 등록   — 색인 모니터링
```

### 6-3. Citation 메타태그 (논문 페이지)

```html
<meta name="citation_author" content="Jo, Min Seong" />
<meta name="citation_title" content="Two-Step Algorithmic Selection..." />
<meta name="citation_publication_date" content="2026" />
<meta name="citation_journal_title" content="ACS Omega" />
<meta name="citation_doi" content="10.1021/acsomega.5c08313" />
<meta name="citation_volume" content="11" />
<meta name="citation_issue" content="6" />
<meta name="citation_firstpage" content="9187" />
<meta name="citation_lastpage" content="9200" />
```

### 6-4. 타겟 키워드

```
Primary:
  "Min Seong Jo researcher"
  "Jo Minseong computational immunology"
  "조민성 연구자"

Secondary:
  "humanized mouse model transcriptomics"
  "PBMC humanized NSG mice housekeeping genes"
  "biopharmaceutical IVIVC Korea"
  "in vitro in vivo correlation immunology"

Long-tail:
  "ACS Omega 2026 housekeeping genes NSG mice"
  "Korea Institute of Toxicology immunology researcher"
  "GvHD model xenogeneic transcriptome"
```

### 6-5. JSON-LD Person Schema (layout.tsx)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Min Seong Jo",
  "givenName": "Min Seong",
  "familyName": "Jo",
  "jobTitle": "Ph.D. Candidate, Molecular Biotechnology",
  "email": "Minseong.jo@kitox.re.kr",
  "affiliation": [
    {
      "@type": "Organization",
      "name": "Korea Institute of Toxicology",
      "alternateName": "KIT"
    },
    {
      "@type": "Organization",
      "name": "Chungnam National University",
      "alternateName": "CNU"
    }
  ],
  "alumniOf": [
    { "@type": "Organization", "name": "Sungkyunkwan University" },
    { "@type": "Organization", "name": "Catholic University of Korea" }
  ],
  "knowsAbout": [
    "Computational Immunology",
    "Humanized Mouse Models",
    "Transcriptomics",
    "Multi-omics Integration",
    "Biopharmaceutical Evaluation",
    "In vitro-In vivo Correlation"
  ]
}
```

---

## 7. 섹션별 UX 설계

### Section 01 — Hero

```
데스크톱: 2컬럼 (좌: 텍스트, 우: 추상 비주얼)
모바일:   1열 (텍스트 중심, 비주얼 제거 또는 최소화)

Content:
  - 이름:   Min Seong Jo
  - 직책:   Ph.D. Candidate · Korea Institute of Toxicology
  - 소개:   연구 아이덴티티 한 줄 요약 (원문 보존)
  - CTA:    [View Publications] [Download CV]

비주얼:
  - 배경: dot-grid SVG 패턴 (정적, 미세)
  - 데스크톱 우측: 추상 네트워크 라인 (canvas, 절제된 움직임)
  - 모바일: dot-grid만 (canvas 생략 → 성능)

SEO: H1 태그에 이름 + 직책 포함
```

### Section 02 — Research Identity

```
데스크톱: 2컬럼 (좌: 연구 서술, 우: 핵심 키워드 박스)
모바일:   1열 (서술 → 키워드 박스 순)

Content:
  - 연구 관심사 원문 단락
  - 핵심 키워드 4개 강조 박스:
      Multi-omics Integration
      In vitro-In vivo Correlation (IVIVC)
      Biopharmaceutical Efficacy & Safety Assessment
      Precision Medicine & Biomarker Discovery
```

### Section 03 — Research Pipeline

```
데스크톱: 수평 SVG 플로우 다이어그램
모바일:   수직 카드 스택 (각 단계 카드형)

흐름:
  [Human PBMC] → [Humanized Mouse] → [In vitro Model]
  → [Transcriptomics] → [Biopharmaceutical Eval] → [IVIVC]

비주얼:
  - 데스크톱: SVG 화살표 노드, hover → 툴팁
  - 모바일: 카드 + 연결 화살표 아이콘
  - 스크롤 진입 시 순차 등장 (Framer Motion)
```

### Section 04 — Publications

```
데스크톱: 필터 탭 + 카드 2열
모바일:   수평 스크롤 필터 탭 + 카드 1열 풀위드

필터:
  [ All ] [ First Author ] [ Co-Author ] [ 2026 ] [ 2025 ] [ 2024 ]

카드 구성:
  저널명 · 연도 / 1저자 뱃지
  논문 제목 (full, 원문 보존)
  Jo, M. 볼드 하이라이트된 저자 목록
  주제 태그 / DOI 링크

논문 목록 (7편):
  1. Jo et al. (2026) ACS Omega — 1저자 ★
  2. Choi et al. (2026) FASEB Journal
  3. Kyun, Park et al. (2025) Chemical Engineering Journal
  4. Kyun, Kwon et al. (2025) ACS Omega
  5. Jeong et al. (2024) Heliyon
  6. Bak et al. (2024) Transplantation Proceedings
  7. Kim et al. (2020) Applications in Plant Sciences

SEO: ScholarlyArticle JSON-LD + citation_* 메타태그
```

### Section 05 — Experimental Platforms

```
데스크톱: 3열 카드 그리드
모바일:   1열 + 아코디언 (기법 목록 접기/펼치기)

카드 1: In Vivo Platform          [초록]
  Flow cytometry, ELISA, RT-qPCR, RNA extraction,
  cDNA synthesis, Tail vein injection...

카드 2: In Vitro Platform         [파랑]
  3D cell culture, Hepatocyte-Immune coculture,
  Confocal microscopy, Multiplex cytokine profiling...

카드 3: Bioinformatics & Genomics [보라]
  Bulk RNA-seq, scRNA-seq, ddPCR,
  Sequence alignment, NGS, Sanger sequencing...
```

### Section 06 — Research Timeline

```
데스크톱: 좌측 연도 축 + 우측 내용 (넓은 레이아웃)
모바일:   좁은 좌측 점선 축 + 우측 내용 (콤팩트)

2012  Catholic University of Korea — B.S. Life Science
2017  Ecology Laboratory (Undergraduate Research)
2019  SKKU — M.S. Biological Sciences (Plant Systematics)
2020  Publication: Kim et al. (Applications in Plant Sciences)
2021  SKKU Genome Editing Lab (Researcher)
2022  KIT Internship (Humanized Mouse)
2023  KIT + CNU Joint Ph.D. ← 현재 (펄스 점)
2024  Publications: Bak et al. / Jeong et al. + Awards
2025  Publications: Kyun et al. (×2)
2026  Publications: Jo et al. / Choi et al. + Outstanding Award ← NOW

비주얼:
  - 스크롤 트리거 순차 등장 (stagger 0.1s)
  - 현재 노드: 펄스 애니메이션 점
  - 모바일: 노드 크기 축소, 텍스트 줄바꿈 최적화
```

### Section 07 — Skills & Methodologies

```
데스크톱: 카테고리별 태그 클라우드 (5개 카테고리 가로 배치)
모바일:   아코디언 (카테고리명 클릭 → 태그 펼침)

카테고리:
  In Vivo Techniques       → Flow cytometry, ELISA, RT-qPCR...
  Molecular & Cell Biology → mAb handling, T-cell isolation...
  Bioinformatics & Genomics→ RNA-seq, NGS, SSR marker...
  3D & Advanced Models     → 3D culture, Co-culture...
  Computational Tools      → R, Python, Linux, GenALEx...

기법명 스타일: IBM Plex Mono 태그
```

### Section 08 — Awards

```
데스크톱: 2열 또는 수평 리스트
모바일:   1열 수직 리스트

2026  Outstanding Researcher Award — KIT
2024  Outstanding Achievement Award — KIT
2023  Outstanding Poster Presentation — KIT Annual Conference
2023  Seoul City Chairman's Citation
2018  Excellent Eco-Activist Group — NIBR
```

### Section 09 — Contact

```
데스크톱: 2컬럼 (좌: 연락처, 우: References)
모바일:   1열 (연락처 → References 순)

연락처: 이메일 · 소속 · 위치 · [Download CV]
References: 3인 (이름, 직책, 소속, 이메일)
```

---

## 8. 애니메이션 원칙

```
원칙: 절제 · 목적성 · 모바일 성능 우선

✅ 사용:
  - 스크롤 트리거 fade-up (섹션 등장)
  - 타임라인 순차 등장 (stagger 0.1s)
  - 파이프라인 노드 순차 등장 (SVG)
  - hover 미세 색상 변화 (0.15s ease)
  - 현재 연구 포지션 펄스 점

❌ 금지:
  - 타이핑 효과
  - 파티클 · 파도 애니메이션
  - 자동 슬라이드 · 캐러셀
  - Parallax 스크롤 (CLS 위험)

⚠️  모바일 조건부:
  - prefers-reduced-motion 미디어쿼리 대응
  - 모바일에서 canvas 비주얼 생략 (성능)
  - SVG 애니메이션 간소화
```

---

## 9. 구현 로드맵

### Phase 1 — 기반 세팅
```
□ Next.js 15 프로젝트 초기화 (App Router)
□ Tailwind CSS v4 + Framer Motion 설치
□ Geist Sans + IBM Plex Mono 폰트 설정
□ CSS 변수 기반 컬러 시스템 + 글로벌 스타일
□ lib/data.ts — CV 전체 데이터 구조화
□ lib/schema.ts — JSON-LD 생성 함수
□ Navbar (모바일 햄버거 포함) + Footer
□ 반응형 기본 레이아웃 (px-4 → md:px-8 → lg:px-16)
```

### Phase 2 — 핵심 섹션 구현
```
□ Hero (dot-grid 배경 + fade-in, 모바일 1열)
□ Research Identity
□ Research Pipeline (SVG 데스크톱 / 카드 모바일)
□ Publications (필터 탭 + 카드, 모바일 스와이프 탭)
□ Timeline (스크롤 애니메이션, 모바일 최적화)
```

### Phase 3 — 보조 섹션 + 인터랙션
```
□ Experimental Platforms (모바일 아코디언)
□ Skills (모바일 아코디언)
□ Awards
□ Contact
□ Framer Motion 스크롤 트리거 전체 적용
□ prefers-reduced-motion 대응
□ 전체 반응형 QA (xs / sm / md / lg / xl)
```

### Phase 4 — SEO + 배포
```
□ Metadata API (모든 페이지)
□ JSON-LD Person + ScholarlyArticle schema
□ citation_* 메타태그
□ sitemap.xml / robots.txt
□ OG 이미지 (1200×630)
□ Vercel 배포
□ Vercel Analytics + Google Analytics 4
□ Google Search Console 등록 + sitemap 제출
□ Lighthouse Mobile 점수 확인 (목표 ≥ 90)
```

---

## 10. 주요 데이터 구조 (lib/data.ts)

```typescript
export interface Publication {
  id: string
  year: number
  title: string
  authors: string[]
  journal: string
  volume?: string
  issue?: string
  pages?: string
  doi: string
  tags: string[]
  type: 'first-author' | 'co-author'
  note?: string            // 'Supplementary Cover' 등
}

export interface TimelineEvent {
  year: number
  type: 'education' | 'research' | 'publication' | 'award' | 'current'
  title: string
  organization: string
  description?: string
  publicationIds?: string[]
}

export interface SkillCategory {
  name: string
  color: 'bio' | 'comp' | 'pharma' | 'gen'
  skills: string[]
}
```

---

## 11. 모바일 Lighthouse 목표

```
Performance:    ≥ 90
Accessibility:  ≥ 95
Best Practices: ≥ 95
SEO:            100

Core Web Vitals (Mobile):
  LCP: < 2.5s   (next/image + font preload)
  FID: < 100ms  (JS 최소화)
  CLS: < 0.1    (레이아웃 안정성)
```

---

*모바일 퍼스트 + SEO 최적화 계획서 완료*
