export const profile = {
  name: "Sahil Hossen",
  title: "Software Development Engineer",
  tagline:
    "I build production GenAI systems — RAG pipelines, LLM apps — and scalable full-stack & backend services.",
  summary:
    "Software Development Engineer (CSE, NIT Agartala) experienced in building production GenAI systems (RAG pipelines, LLM apps) and scalable full-stack and backend services. Skilled in Python, TypeScript, React, NestJS, Node.js, REST APIs, SQL, and AWS (Bedrock, Lambda, S3, DynamoDB), with strong testing and CI/CD practices. Comfortable owning features end-to-end — from API design and implementation to automated testing, deployment, and monitoring in production.",
  location: "Pune / Agartala, India",
  email: "sahilhossen51@gmail.com",
  phone: "+91-9362125184",
  github: "https://github.com/Sahil-hossen",
  linkedin: "https://www.linkedin.com/in/sahil-hossen",
  resume: "/Sahil_Hossen_Resume.pdf",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Amdocs",
    role: "Software Development Engineer Intern",
    period: "Jan 2026 – June 2026",
    location: "Pune, India",
    points: [
      "Built GitSense (NestJS, React, TypeScript), a RAG pipeline with AST code chunking, Titan v2 embeddings, and hybrid kNN/BM25 retrieval over S3 Vectors for accurate, source-cited code answers.",
      "Contributed to Docu AI, a GenAI tool that auto-generates documentation from PR diffs via AWS Bedrock and syncs to Confluence; set up GitHub Actions CI/CD and CloudWatch monitoring.",
      "Built a YAML-based regression test harness for the RAG pipeline, validating file paths, code snippets, and tool-call outputs on every change.",
      "Developed the React UI for querying the codebase with cited answers; contributed to API design, code reviews, and sprint releases.",
    ],
  },
  {
    company: "National Informatics Centre, Govt of India",
    role: "Software Development Engineer Intern",
    period: "June 2025 – July 2025",
    location: "Agartala, India",
    points: [
      "Designed and tested RESTful Spring Boot APIs for the RTI registration system; wrote PostgreSQL queries and validated correctness across multiple relational tables.",
      "Performed systematic API testing with Postman — validated request/response schemas, status codes, and edge cases to ensure data integrity.",
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  highlights: string[];
  tags: string[];
  link?: string;
  demo?: string;
  prs?: { label: string; url: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "GitSense",
    blurb:
      "A RAG pipeline that answers questions about a codebase with accurate, source-cited responses.",
    highlights: [
      "AST-based code chunking + Titan v2 embeddings",
      "Hybrid kNN / BM25 retrieval over S3 Vectors",
      "React UI for querying the codebase with citations",
    ],
    tags: ["NestJS", "React", "TypeScript", "AWS Bedrock", "RAG", "S3 Vectors"],
    featured: true,
  },
  {
    name: "Docu AI",
    blurb:
      "GenAI tool that auto-generates documentation from PR diffs and syncs it to Confluence.",
    highlights: [
      "Documentation generated from PR diffs via AWS Bedrock",
      "Confluence sync for living docs",
      "GitHub Actions CI/CD + CloudWatch monitoring",
    ],
    tags: ["AWS Bedrock", "GenAI", "GitHub Actions", "CI/CD", "CloudWatch"],
    featured: true,
  },
  {
    name: "Bank Customer Churn Analysis",
    blurb:
      "End-to-end analytics pipeline turning 10k bank records into retention insights.",
    highlights: [
      "Pandas cleaning → PostgreSQL → SQL segmentation → Matplotlib",
      "Identified Germany (32.4%) and high-risk segment (36.2%) as top churn drivers",
      "Actionable retention recommendations",
    ],
    tags: ["Python", "Pandas", "PostgreSQL", "SQL", "Matplotlib", "Data Analytics"],
    link: "https://github.com/Sahil-hossen/bank-churn-analysis",
    featured: true,
  },
  {
    name: "LiveLocator",
    blurb:
      "Real-time location-tracking web app with bidirectional updates and live map markers. Open the live demo and allow location to see your marker on the map.",
    highlights: [
      "Socket.IO for real-time bidirectional updates",
      "Leaflet.js + OpenStreetMap live user markers",
      "Handled connection drops, stale sessions, and geolocation denials",
    ],
    tags: ["Node.js", "Express", "Socket.IO", "Leaflet.js", "EJS"],
    demo: "https://livelocator-pm7c.onrender.com",
    link: "https://github.com/Sahil-hossen/RealTime-Tracker",
    featured: true,
  },
  {
    name: "RTI Registration APIs",
    blurb:
      "RESTful Spring Boot APIs for the government RTI Online registration system, contributed at NIC.",
    highlights: [
      "Built the Title and GetRole APIs (entity, repository, service, controller)",
      "Two pull requests reviewed and merged into the nictraining org",
      "Spring Boot REST APIs over PostgreSQL, tested with Postman",
    ],
    tags: ["Spring Boot", "Java", "PostgreSQL", "REST APIs", "Postman"],
    link: "https://github.com/Sahil-hossen/RTIOnline",
    prs: [
      { label: "Merged PR #26 · Title API", url: "https://github.com/nictraining/RTIOnline/pull/26" },
      { label: "Merged PR #30 · GetRole API", url: "https://github.com/nictraining/RTIOnline/pull/30" },
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "C/C++", "HTML/CSS"],
  },
  {
    label: "GenAI & LLMs",
    items: [
      "RAG Pipelines",
      "AI Agents",
      "Embeddings",
      "Prompt Engineering",
      "AWS Bedrock",
    ],
  },
  {
    label: "Frameworks & Backend",
    items: [
      "React.js",
      "NestJS",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (S3, Lambda, Bedrock, DynamoDB, CloudWatch)",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "PostgreSQL",
    ],
  },
  {
    label: "Testing & Fundamentals",
    items: [
      "Postman",
      "REST API Validation",
      "Automated Testing",
      "DSA",
      "DBMS",
      "OS",
      "OOP",
    ],
  },
];

export const achievements: string[] = [
  "JEE Main 2022 — Ranked among the top 1.6 percentile out of 1.2 million candidates.",
  "CodeChef — Rank 329 in Starters 196 among 29,657 participants; 2★ rated (1415).",
  "Smart India Hackathon — Team of 5 selected among top 12 college teams for project idea and presentation.",
];

export type EducationItem = {
  school: string;
  detail: string;
  period: string;
  location: string;
};

export const education: EducationItem[] = [
  {
    school: "National Institute of Technology, Agartala",
    detail: "B.Tech, Computer Science and Engineering — CGPA: 7.55",
    period: "Nov 2022 – May 2026",
    location: "Agartala, India",
  },
  {
    school: "Sigma School of Excellence, Rajasthan",
    detail: "Senior Secondary (XII) — 87.4%",
    period: "Apr 2020 – Mar 2021",
    location: "Rajasthan, India",
  },
  {
    school: "Jawahar Navodaya Vidyalaya, North Tripura",
    detail: "Secondary (X) — 94.4%",
    period: "Apr 2018 – Mar 2019",
    location: "Tripura, India",
  },
];
