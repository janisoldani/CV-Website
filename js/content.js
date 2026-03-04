// js/content.js

window.SITE_CONTENT = {
  personal: {
    name: "Janis Oldani",
    // role is used on the cv.html header — keep accurate
    role: "Business AI Student @ FHNW",
    location: "Wettingen, Switzerland",
    email: "janis.oldani@gmx.ch",
    phone: "+41 79 396 79 17",
    photoUrl: "assets/janis-oldani.jpg",
    photoAlt: "Portrait of Janis Oldani",
    tagline: "Turning data\ninto decisions.",
    aboutShort:
      "Business AI student at FHNW and corporate banking advisor at Migros Bank — combining structured finance experience with AI and data engineering to build practical solutions.",
    skills: ["Python", "SQL", "HTML/CSS/JS", "Git/GitHub", "Data Analysis"],
    cvUrl: "cv.html",
    cvPdfUrl: "assets/CV_Janis_Oldani.pdf"
  },

  availability: {
    // Displayed as a pill on the homepage — update when status changes
    pillLabel: "Open to work",
    statusText: "available immediately",
    // Shown below the name on the homepage as a positioning label
    targetRole: "Business AI Engineer"
  },

  links: {
    github: "https://github.com/janisoldani",
    linkedin: "https://www.linkedin.com/in/janis-oldani-395042219/"
  },

  hero: {
    titleLine1: "Where Code Meets Business.",
    titleLine2: "",
    subtitle:
      "I study Business Artificial Intelligence at FHNW and combine practical banking experience with technical skills in data, AI and software to create value for businesses.",
    primaryCta: "View Projects",
    secondaryCta: "Get in Touch",
    tertiaryCta: "Experience"
  },

  sections: {
    work: {
      title: "Selected Work",
      subtitle: "University, side and client projects."
    },
    about: {
      title: "Profile & Background",
      subtitle: "Education, experience and skills at a glance."
    },
    experience: {
      badge: "Career",
      title: "Experience",
      subtitle: "Education and career — often running in parallel."
    },
    skills: {
      badge: "Technical Expertise",
      title: "Skills & Tools",
      subtitle: "Technologies and tools I work with."
    },
    testimonials: {
      badge: "References",
      title: "Testimonials",
      subtitle: "What others say about working with me."
    },
    contact: {
      title: "Let's Talk",
      subtitle: "Let's discuss projects or collaborations.",
      introText: "Drop me a message — I'll get back to you quickly.",
      ctaButtonLabel: "Send Email",
      emailLabelPrefix: "Email:"
    }
  },

  aboutIntro: {
    badge: "About Me",
    title: "Who I Am",
    subtitle: "Business mindset meets technical execution.",
    text: [
      "Banking taught me discipline. AI is teaching me leverage. And running towards an <strong>Ironman 70.3</strong> is teaching me that the only way to eat a long-term goal is one training session at a time — which, it turns out, is also how you build a career across two demanding fields simultaneously.",
      "For the past four years I've been doing exactly that: working 70% as a <strong>Corporate Customer Advisor at Migros Bank</strong> while completing a BSc in Business Artificial Intelligence at FHNW. The combination isn't accidental. I genuinely believe the next wave of valuable AI applications will be built by people who understand both the technology and the business problem it's meant to solve — and that combination is rare.",
      "On the tech side: Python, SQL, machine learning, data engineering, and a habit of shipping things. On the business side: <strong>50+ corporate client relationships</strong>, independent credit decisions, and years of working in a regulated, detail-oriented environment. I'm looking for a team that values both — and wants someone who bridges the gap, not just fills a seat."
    ]
  },

  quickFacts: [
    {
      label: "Location",
      value: "Wettingen, CH",
      detail: "Based in Wettingen, Aargau — Switzerland."
    },
    {
      label: "Education",
      value: "Business AI, FHNW",
      link: "https://www.fhnw.ch/en/degree-programmes/business/bai",
      detail: "BSc in Business Artificial Intelligence at FHNW School of Business, Olten. Part-time alongside work, 180 ECTS. Expected graduation 2028. Focus: intelligent systems & processes, data-driven decision-making, and AI applied in a business context."
    },
    {
      label: "Career",
      value: "Banking → AI / Tech",
      detail: "Currently working as a Corporate Customer Advisor at Migros Bank. Goal: transition into an AI or tech role after completing my Business AI degree at FHNW — combining financial domain knowledge with modern technology."
    },
    {
      label: "Sports",
      value: "Football · Ironman",
      detail: "Active football player in the 2nd league. Currently in training for an Ironman 70.3 — target year: 2027."
    },
    {
      label: "Status",
      value: "Open to Opportunities",
      highlight: true,
      detail: "Actively seeking to transition from banking into AI, data, or tech. Looking for roles at the intersection of business and technology — where domain expertise meets innovation."
    }
  ],


  skillCategories: [
    {
      icon: "code",
      title: "Languages",
      tags: ["Python", "SQL", "HTML/CSS", "JavaScript"]
    },
    {
      icon: "framework",
      title: "Frameworks & Libraries",
      tags: ["Pandas", "nltk", "Whisper API", "OpenAI API"]
    },
    {
      icon: "tool",
      title: "Tools & Platforms",
      tags: ["Git/GitHub", "VS Code", "Jupyter", "PostgreSQL"]
    },
    {
      icon: "banking",
      title: "Banking & Finance",
      tags: ["Mortgage Financing", "Consumer Leasing", "Medical Practice Lending", "Liquidity Planning", "Client Advisory", "Credit Assessment", "KYC & Compliance", "Portfolio Monitoring"]
    }
  ],


  beyondCode: {
    badge: "Beyond Code",
    title: "Life Outside the Terminal",
    subtitle: "The mountains taught me what code can't.",
    heroImage: {
      src: "assets/hiking-alps.jpeg",
      alt: "Hiking in the Swiss Alps — trail along a mountain lake"
    },
    gallery: [
      {
        src: "assets/snowboard-powder.jpeg",
        alt: "Snowboarding in deep powder",
        label: "Winter",
        insight: "Adapting to conditions in real time — reading the terrain and committing to a line."
      },
      {
        src: "assets/climbing-rocks.jpeg",
        alt: "Rock climbing in the mountains",
        label: "Pushing Limits",
        insight: "Every hold is a decision. Risk assessment meets commitment — step by step toward the summit."
      },
      {
        src: "assets/camping-alps.jpeg",
        alt: "Wild camping in the Swiss Alps",
        label: "Outdoors",
        insight: "Stepping back to see the bigger picture — self-reliance, planning and clarity from distance."
      },
      {
        src: "assets/football-captain.jpeg",
        alt: "Playing football as captain, #19",
        label: "Captain",
        insight: "Leading a team as captain — communication, responsibility and making decisions under pressure."
      },
      {
        src: "assets/surfing-ocean.jpeg",
        alt: "Surfing in the ocean",
        label: "Flow",
        insight: "Timing and patience — waiting for the right moment, then fully committing."
      },
      {
        src: "assets/drone-winter.jpeg",
        alt: "Aerial drone shot of a winter river through forest",
        label: "Drone Photography",
        insight: "Capturing the world from above — a creative eye for detail, composition and new perspectives."
      }
    ],
    ironman: {
      title: "Next Goal: Ironman 70.3",
      text: "1.9 km swim. 90 km bike. 21.1 km run. My next summit isn't a mountain — it's a Half Ironman. Training for this endurance challenge teaches the same principles I apply to every project: break the impossible into manageable steps, stay consistent, and never stop moving forward.",
      target: "Target: 2027"
    },
  },

  creativity: {
    photography: {
      badge: "Photography",
      title: "Through the Lens.",
      subtitle: "Mountains, surf and adventure — captured at eye level.",
      heroImage: {
        src: "assets/photography/alps-sunset-silhouette.jpeg",
        alt: "Two silhouettes standing on an alpine plateau at golden sunset"
      },
      gallery: [
        { src: "assets/photography/alps-mountain-peak.jpeg",       alt: "Dramatic alpine rock tower rising above the clouds",                     label: "Summit" },
        { src: "assets/photography/alps-lake-reflection.jpeg",     alt: "Crystal-clear alpine lake reflecting a sharp mountain peak",             label: "Reflection" },
        { src: "assets/photography/alps-sunset-silhouette.jpeg",   alt: "Two silhouettes on an alpine plateau at golden sunset",                  label: "Golden Hour" },
        { src: "assets/photography/alps-lake-dawn.jpeg",           alt: "Alpine lake at dawn with a perfect mirror reflection of the peaks",      label: "Dawn" },
        { src: "assets/photography/alps-turquoise-lake.jpeg",      alt: "Turquoise glacial alpine lake surrounded by jagged grey peaks",          label: "Glacial Blue" },
        { src: "assets/photography/alps-rocky-lake.jpeg",          alt: "Rocky alpine lake with jagged spires reflected in still water",          label: "Spires" },
        { src: "assets/photography/alps-crystal-lake.jpeg",        alt: "Crystal clear alpine lake with dramatic rock formations",                label: "Crystal" },
        { src: "assets/photography/alps-cliffs.jpeg",              alt: "Towering alpine limestone cliffs against a deep blue sky",               label: "Cliffs" },
        { src: "assets/photography/alps-climber-silhouette.jpeg",  alt: "Climber silhouetted against the sun on a rocky alpine summit",           label: "Climber" },
        { src: "assets/photography/alps-ridge-hikers.jpeg",        alt: "Two hikers on a high alpine ridge with a panoramic mountain backdrop",   label: "Ridge" },
        { src: "assets/photography/alps-hiker.jpeg",               alt: "Hiker photographing dramatic alpine cliffs on a summer trail",           label: "Trail" },
        { src: "assets/photography/alps-summit-station.jpeg",      alt: "Alpine summit station perched on a rocky ridge above the clouds",        label: "Station" },
        { src: "assets/photography/lake-boat.jpeg",                alt: "Lone boat on a calm Swiss lake under a dramatic cloudy sky",             label: "Still Water" },
        { src: "assets/photography/sailing.jpeg",                  alt: "Standing on the bow of a sailboat, leaning against the mast",            label: "Sailing" },
        { src: "assets/photography/mediterranean-beach.jpeg",      alt: "Rocky Mediterranean beach with sun loungers and clear blue water",       label: "Mediterranean" },
        { src: "assets/photography/surf-beach.jpeg",               alt: "Atlantic surf beach with rolling waves and surfers in the water",        label: "Surf" },
        { src: "assets/photography/beach-cafe.jpeg",               alt: "Beachside cafe with yellow umbrella overlooking a surf bay",             label: "Beach Cafe" },
        { src: "assets/photography/morocco-sunset.jpeg",           alt: "Group silhouette watching the sun set over the Atlantic ocean in Morocco", label: "Atlantic Sunset" },
        { src: "assets/photography/canyon-gorge.jpeg",             alt: "Narrow canyon gorge with rock pools and a small waterfall",              label: "Gorge" },
        { src: "assets/photography/local-restaurant.jpeg",         alt: "The Local Restaurant street food stall at a surf beach",                 label: "Local" },
        { src: "assets/photography/edinburgh-sunset.jpeg",         alt: "Edinburgh Castle and church spire silhouetted against a blazing sunset", label: "Edinburgh" },
        { src: "assets/photography/edinburgh-street.jpeg",         alt: "Victoria Street Edinburgh at night, lit up in vivid colours",            label: "Victoria St" },
        { src: "assets/photography/edinburgh-balmoral.jpeg",       alt: "The Balmoral Hotel clock tower in Edinburgh against a dramatic sky",     label: "Balmoral" },
        { src: "assets/photography/urban-steps.jpeg",              alt: "Abstract curved concrete steps — lines and geometry",                    label: "Lines" },
        { src: "assets/photography/urban-spiral.jpeg",             alt: "Monochrome building with two spiral staircases on the facade",           label: "Spiral" },
        { src: "assets/photography/autumn-leaves.jpeg",            alt: "Carpet of yellow, red and white autumn leaves on the ground",            label: "Autumn" },
        { src: "assets/photography/stpauli-stickers.jpeg",         alt: "Wall covered in FC St. Pauli stickers and fan culture",                  label: "St. Pauli" }
      ]
    },

    drone: {
      badge: "Drone",
      title: "From Above.",
      subtitle: "The Alps and beyond — seen from a bird's eye view.",
      heroImage: {
        src: "assets/photography/drone/drone-alpine-valley.jpeg",
        alt: "Aerial view of a snow-covered alpine valley with forest and mountains"
      },
      gallery: [
        { src: "assets/photography/drone/drone-alpine-valley.jpeg", alt: "Aerial view of a snow-covered alpine valley with forest and mountains",    label: "Alpine Valley" },
        { src: "assets/photography/drone/drone-village-night.jpeg", alt: "Aerial night shot of a snow-covered alpine village with mountain backdrop", label: "Village Night" },
        { src: "assets/photography/drone/drone-village-snow.jpeg",  alt: "Top-down aerial of a snow-covered village and its street grid",            label: "Snow Village" },
        { src: "assets/photography/drone/drone-river-winter.jpeg",  alt: "Top-down aerial of a frozen river winding through snow-covered trees",     label: "Winter River" },
        { src: "assets/photography/drone/drone-forest-summer.jpeg", alt: "Top-down aerial of a dense summer forest with a road cutting through",     label: "Forest" },
        { src: "assets/photography/drone/drone-forest-autumn.jpeg", alt: "Top-down aerial of a forest in late autumn with bare and sparse trees",    label: "Autumn Forest" },
        { src: "assets/photography/drone/drone-city-night.jpeg",    alt: "Top-down aerial of city streets at night lit by orange street lamps",      label: "City Night" }
      ]
    },

    videos: {
      // hidden: true removes this section from creativity.html until YouTube IDs are ready
      hidden: true,
      badge: "Film & Motion",
      title: "In Motion.",
      subtitle: "Drone footage and moments captured from above.",
      items: [
        { youtubeId: "", title: "Alps from Above", description: "Aerial footage over the Swiss Alps." },
        { youtubeId: "", title: "Winter Flight", description: "Winter drone footage through powder and peaks." },
        { youtubeId: "", title: "Mountain Flow", description: "Rivers, valleys and ridgelines from above." },
        { youtubeId: "", title: "Golden Hour", description: "Last light over alpine terrain." }
      ]
    },

    books: {
      badge: "Reading",
      title: "Books That Shaped Me.",
      subtitle: "Ideas and stories I keep thinking about.",
      items: [
        {
          title: "Von wegen",
          author: "Christina Ragettli",
          genre: "Satire",
          note: "Sharp, funny and thought-provoking — a book that challenges assumptions with wit.",
          teaser: "Everything you assume about modern life — Ragettli skewers it with wit that cuts deep. A book that makes you laugh until it makes you think. Then keeps you thinking.",
          coverUrl: "https://arisverlag.ch/cdn/shop/files/AV-VW-Cover-M.jpg?v=1689336420"
        },
        {
          title: "Schachnovelle",
          author: "Stefan Zweig",
          genre: "Novella",
          note: "Mental strength under extreme pressure. A masterclass in psychological depth.",
          teaser: "Confined to a hotel room with nothing but a chess manual, a man discovers the terrifying limits of genius. Zweig's most perfect story — finished in one sitting, remembered for a lifetime.",
          coverUrl: "https://pictures.abebooks.com/isbn/9783596215225-us.jpg"
        },
        {
          title: "Die Dolmetscherin",
          author: "Titus Müller",
          genre: "Novel",
          note: "A story about language, identity and the spaces between cultures.",
          teaser: "She moves between worlds no one else can cross — carrying secrets that could change everything. A story of courage, language and what we risk for the truth.",
          coverUrl: "https://www.penguin.de/resource/responsive-image/4518160/280/7/mueller-tdie-dolmetscherin-258157-jpg.jpg"
        },
        {
          title: "22 Bahnen",
          author: "Caroline Wahl",
          genre: "Literary Fiction",
          note: "Grief, swimming and moving forward — honest and quietly powerful.",
          teaser: "Twenty-two laps, every day — because some things can only be processed in the water. Quiet, precise and quietly devastating. You'll think about the ending long after.",
          coverUrl: "https://covers.openlibrary.org/b/id/14830304-L.jpg"
        },
        {
          title: "Künstliche Intelligenz: Ein moderner Ansatz",
          author: "Russell & Norvig",
          genre: "Technical",
          note: "The foundational textbook for AI — comprehensive, systematic and essential.",
          teaser: "The book that defines the field — and makes you realise just how deep the rabbit hole goes. If you want to understand where AI is heading, this is where you start.",
          coverUrl: "https://pictures.abebooks.com/isbn/9783868944303-us.jpg"
        },
        {
          title: "Can't Hurt Me",
          author: "David Goggins",
          genre: "Memoir",
          note: "Mental toughness and radical self-discipline. Goggins shows what the mind is capable of.",
          teaser: "David Goggins was told he'd never amount to anything. What followed is almost impossible to believe. This book doesn't just inspire — it rearranges what you think is possible.",
          coverUrl: "https://pictures.abebooks.com/isbn/9781544512280-us.jpg"
        }
      ]
    }
  },

  projects: [
    {
      id: "meetmind",
      category: "AI / Fullstack",
      title: "MeetMind — Meeting Intelligence",
      description:
        "AI-powered meeting intelligence system for SMEs — automatically transcribes audio with Whisper, generates structured summaries and extracts action items via LLM, and makes all meetings searchable through a RAG agent with timestamped source citations. Dual-stack architecture: MVP runs fully local (€0/month, Whisper + LLaMA via Ollama + ChromaDB), Production switches to OpenAI APIs via env variables. GDPR-native design for the DACH mid-market.",
      tags: ["Python", "FastAPI", "LangChain", "RAG", "Whisper", "LLaMA", "ChromaDB", "Next.js", "pgvector", "DSGVO"],
      status: "in-progress",
      problemstellung: "Mid-sized enterprises in the DACH region lose valuable institutional knowledge in every meeting: decisions disappear, accountability is unclear, and post-meeting follow-up (protocols, action items, summaries) consumes 30–60 minutes per meeting hour. Existing solutions fail the market: Otter.ai and Fireflies run on US servers (GDPR problem), Microsoft Copilot requires M365 Business Premium that most SMEs don't have, and none offer a self-hosted option for compliance-sensitive organisations.",
      zielsetzung: "Build a GDPR-native meeting intelligence platform that automatically transcribes, summarises and makes all meeting recordings searchable through a RAG agent — fully deployable on-premise with zero cloud costs for the MVP, scalable to a SaaS product ($10/seat/month) for the DACH mid-market. Core design principle: every decision, every context, every commitment — permanently and instantly retrievable.",
      vorgehen: "Designed a dual-stack architecture where MVP and Production share identical code — switching between local and cloud AI providers requires only 4 environment variable changes. MVP stack: Whisper (local, CPU), Ollama/LLaMA 3.1 8B, sentence-transformers (all-MiniLM-L6-v2), ChromaDB, Supabase Free — zero API costs. Production stack: OpenAI Whisper API, GPT-4o, text-embedding-3-small, pgvector + Row Level Security, Railway. Backend: FastAPI with BackgroundTasks (Redis/Celery deliberately omitted to keep the stack under 8 technologies). Frontend: Next.js 14, Tailwind CSS, shadcn/ui. The database schema is multi-tenant from day one — workspace_id FK across all tables, with PostgreSQL Row Level Security enforcing workspace isolation at DB level rather than application level.",
      losung: "A complete meeting intelligence pipeline: audio upload → Whisper transcription with word-level confidence scores → LLM-generated structured summary + action item extraction with assignee → RAG indexing with semantic search. The RAG agent answers natural-language questions about past meetings with timestamped source citations (e.g. 'What did we decide about Vendor X in March?' → answer with meeting link and transcript timestamp). Confidence-score UI marks uncertain transcriptions inline for manual correction. RAGAS evaluation framework validates RAG quality on a 50 Q&A gold-standard dataset (Faithfulness > 0.75, Answer Relevancy > 0.70). GDPR compliance is structural: opt-in consent before every recording, cascading delete of audio + transcript + vectors, no cross-workspace data leakage via pgvector + RLS.",
      technicalSteps: [
        "Designed dual-stack provider architecture — MVP (local) ↔ Production (cloud) switchable via 4 env variables, zero code changes",
        "Built Whisper transcription pipeline with word-level confidence scores; inline correction UI re-triggers RAG re-embedding on edit",
        "Implemented RAG pipeline: sentence-transformers embeddings → ChromaDB (MVP) / pgvector + Row Level Security (Production) → LangChain retrieval chain with timestamped source citations",
        "Designed multi-tenant DB schema (workspaces / users / meetings / action_items) with PostgreSQL RLS: workspace isolation enforced at DB level, not filter level",
        "Integrated RAGAS evaluation framework with 50 Q&A gold-standard test pairs — Faithfulness and Answer Relevancy measured automatically after every pipeline change",
        "Implemented GDPR consent flow, cascading delete of all derived data (audio, transcript, vectors), opt-out re-extraction and audit trail",
        "Planned 8-week MVP sprint roadmap with validation gates: Upload Hypothesis (Sprint 1) must pass before RAG features are built"
      ],
      learnings: "Designing for testability upfront — RAGAS gold-standard dataset, confidence scores per word — forces a concrete definition of 'good enough' before building, not after. The dual-stack architecture validated that MVP and production can share identical code if you abstract provider interfaces from day one. pgvector + Row Level Security is architecturally superior to application-level filtering for multi-tenant RAG: a single missing where-clause in ChromaDB can cause a data leak, while RLS makes it structurally impossible. And the key product insight: GDPR compliance in DACH is a go-to-market advantage, not a constraint — the self-hosted option opens market segments Microsoft Copilot structurally cannot reach.",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "injury-risk-detector",
      category: "Fullstack / AI",
      title: "Injury Risk Detector",
      description:
        "Fullstack training safety tool — computes a real-time 0–100 injury risk score from HRV, sleep and resting heart rate. Six deterministic safety rules override ML predictions for critical conditions, ensuring the system never clears a session when the athlete shows danger signals. Includes session planner, FIT file import and Recharts visualizations.",
      tags: ["FastAPI", "React", "TypeScript", "Python", "TailwindCSS"],
      status: "in-progress",
      problemstellung: "Athletes and fitness enthusiasts often lack objective data to decide whether a planned training session is safe given their current physiological state. Overtraining leads to preventable injuries, yet most tools only track past workouts without providing forward-looking risk assessments.",
      zielsetzung: "Build a comprehensive system that combines physiological data (HRV, sleep quality, resting heart rate), symptom tracking and planned training load to calculate a real-time injury risk score (0–100) with actionable recommendations.",
      vorgehen: "Designed a fullstack architecture with a FastAPI backend (SQLAlchemy 2.0, Pydantic v2, Alembic migrations) and a React 18 frontend (TypeScript, Vite, TailwindCSS, TanStack Query, Recharts). Implemented deterministic safety rules (R0–R4) that override ML predictions for critical conditions. Added HRV analysis with Z-score normalization against a 28-day baseline and ACWR monitoring for load management.",
      losung: "A working MVP with traffic-light risk visualization, FIT file import, a session planner with real-time risk preview and alternative workout recommendations. The safety rule system ensures that severe conditions (pain, swelling, extreme HRV deviation) always trigger appropriate alerts regardless of the ML model output.",
      technicalSteps: [
        "Designed REST API with FastAPI and SQLAlchemy 2.0",
        "Implemented safety rules (R0–R4) with deterministic overrides",
        "Built HRV analysis with 28-day baseline Z-score normalization",
        "Added ACWR (Acute:Chronic Workload Ratio) monitoring",
        "Created React frontend with Recharts visualizations",
        "Integrated FIT file import for Garmin data"
      ],
      learnings: "Deterministic safety rules (R0–R4) built before ML modelling prevented false negatives on critical edge cases — clinical thresholds need override logic, not just model confidence. HRV Z-score normalisation over a 28-day baseline proved more interpretable to end users than raw ML outputs, reinforcing that explainability matters as much as accuracy in health applications.",
      githubUrl: "https://github.com/janisoldani/Injury-Risk-Detector",
      demoUrl: ""
    },
    {
      id: "whisper-arztberichte",
      category: "AI / Data",
      title: "Automated Medical Reports with Whisper",
      description:
        "Medical conversation transcription pipeline using OpenAI Whisper — benchmarked 5 model variants (tiny → large) to identify optimal accuracy/cost trade-offs. Built post-processing with nltk for text cleanup. Team project: led transcription pipeline implementation and model evaluation, forming the data foundation for a downstream medical AI labelling system.",
      tags: ["OpenAI", "Python", "nltk", "Whisper API"],
      status: "in-progress",
      problemstellung: "The initial challenge was to automatically transcribe medical conversations and make them usable for further data processing. Early tests revealed significant comprehension errors in the raw transcript, making it unclear whether data quality was sufficient for subsequent labeling. Additionally, it needed to be determined whether manual corrections were permissible and practical, and how accuracy could be improved technically.",
      zielsetzung: "The project aimed to build a functioning end-to-end setup that automatically processes audio recordings, converts them to text, cleans and structures the output. At the same time, it needed to clarify which models, parameters and post-processing steps are required to create a robust data foundation for a medical AI system. The goal was a technically clean, reproducible setup that could be extended later.",
      vorgehen: "Audio files were captured, preprocessed and transcribed using Whisper. Implementation was done in Python, including model integration, file processing and automated output. Different Whisper model sizes were tested to assess whether model size and quality affect the error rate. In parallel, the question was resolved whether manual transcript correction is practical, and which options exist for quality improvement (e.g. higher-quality models, fine-tuning, audio optimization).",
      losung: "A functional transcription system was implemented that automatically reads, transcribes and exports all recorded conversations as text files. Results are generally usable but show typical language model errors, particularly with technical terms or unclear pronunciation. Additionally, a workflow was defined that allows both manual corrections and future improvements through better models or additional processing steps. The solution forms a stable foundation for further labeling and development of the actual AI system.",
      technicalSteps: [
        "Captured and preprocessed audio files (format, sampling rate)",
        "Tested Whisper models across different sizes (tiny → large)",
        "Implemented Python pipeline for batch transcription",
        "Post-processing with nltk for text cleanup",
        "Comparative analysis of error rates per model size",
        "Defined workflow for manual corrections"
      ],
      learnings: "Audio preprocessing (sampling rate normalisation, noise reduction) had a larger impact on word error rate than upgrading the model size — technical quality of the input matters more than model complexity. Annotation guidelines need to be agreed on before transcription starts, not after: late-stage corrections cost far more time than early alignment on labelling rules.",
      githubUrl: "https://github.com/eli611/Arztbericht-Erstellung-ML-HS-2025",
      demoUrl: ""
    },
    {
      id: "zalando-empfehlungssystem",
      category: "University Project",
      title: "Intelligent Shoe Recommendation System",
      description:
        "Knowledge representation project for Zalando — built an explainable shoe recommendation engine using three complementary symbolic AI methods: DMN decision tables for structured business rules, a Prolog knowledge base for logical inference, and an OWL ontology with SWRL rules and SPARQL queries for semantic reasoning. Team project at FHNW (Spring Semester 2025).",
      tags: ["DMN", "Prolog", "OWL/SWRL", "SPARQL", "Knowledge Representation"],
      status: "completed",
      problemstellung: "Online fashion platforms like Zalando offer thousands of shoe models, making it difficult for customers to find the right product without expert guidance. The challenge was to build an intelligent, explainable recommendation system that maps customer profiles and context (occasion, season, comfort needs, price sensitivity) to concrete product recommendations — without relying on opaque, black-box machine learning.",
      zielsetzung: "Develop a multi-method recommendation system covering three paradigms of knowledge representation: decision modelling with DMN, rule-based logical inference with Prolog, and semantic reasoning with OWL/SWRL. The system should be transparent, explainable and extendable — key requirements for trustworthy AI in a business context.",
      vorgehen: "The project was structured in three parallel workstreams. First, a Decision Requirements Diagram and three decision tables (Recommendation, Comfort Level, Product Selection) were modelled in DMN using Trisotech, with hit policies ranging from First to Collect. Second, a Prolog knowledge base was built with 10 brands, 20 shoe models and 9 customer profiles, implementing recommendation and fallback rules including comfort scoring and price classification. Third, an OWL ontology was designed in Protégé with 9 domain classes, enriched with 22 SWRL inference rules and queried via SPARQL to retrieve personalised model recommendations.",
      losung: "A fully functional three-layer recommendation system: DMN tables for structured decision logic, Prolog for logical inference across a curated product catalogue, and an OWL ontology enabling semantic querying. The combination demonstrates how symbolic AI methods deliver explainable, auditable recommendations — a key advantage over statistical models in regulated or customer-facing business contexts.",
      technicalSteps: [
        "Modelled Decision Requirements Diagram with 3 decision levels (Recommendation, Comfort Level, Product Selection)",
        "Built DMN decision tables with hit policies First, Unique and Collect in Trisotech",
        "Implemented Prolog knowledge base: 10 brands, 20 shoe models, 9 customer profiles",
        "Defined recommendation rules including komfortanspruch/4, schuhempfehlung/7 and alternative_schuhempfehlung/7",
        "Designed OWL ontology with 9 domain classes in Protégé (Customer, Model, Occasion, Season, Comfort, Style, etc.)",
        "Implemented 22 SWRL rules for comfort-level and shoe-type inference",
        "Wrote SPARQL queries for semantic model retrieval across customer profiles"
      ],
      learnings: "Combining three symbolic AI paradigms in one project made their trade-offs tangible: DMN excels at structured, auditable business rules but requires careful hit-policy design; Prolog enables flexible logical inference but demands clean predicate modelling to scale; OWL ontologies support rich semantic reasoning but require precise class and property definitions upfront. Core takeaway for Business AI: explainability is not an add-on — it is the foundation of trustworthy, deployable AI in real business contexts.",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "hotel-reservierung",
      category: "University Project",
      title: "Hotel Reservation System",
      description:
        "Full hotel reservation system built in a 4-person team — clean three-layer architecture (UI, business logic, data access) covering the complete booking lifecycle: guests, rooms, reservations and invoices. Responsible for business logic layer, ER modelling and version control management.",
      tags: ["Python", "SQLite", "OOP", "DB Design"],
      problemstellung: "The project required building a functional hotel reservation system as part of an FHNW semester project. The challenge was to translate business requirements into a clean object-oriented architecture while coordinating work across a four-person team with varying experience levels.",
      zielsetzung: "Design and implement a complete reservation system with a three-layer architecture (UI, business logic, data access), covering entities like Hotel, Room, Guest, Booking and Invoice. The system should demonstrate solid OOP principles, database integration and collaborative development.",
      vorgehen: "The team split responsibilities: class structure design, business logic, GitHub management and documentation. Development followed sprint-based planning with regular coaching sessions. The architecture separates UI helpers, manager classes for core operations and SQLite data access into distinct layers.",
      losung: "A working hotel reservation system with full CRUD operations for bookings, rooms and guests. The three-layer architecture ensures clean separation of concerns. Key entities (Hotel, Room, RoomType, Guest, Booking, Invoice, Facilities, Address) use getter/setter methods for encapsulation. The team gained proficiency in OOP, ER modeling and version control.",
      technicalSteps: [
        "Designed entity-relationship model for hotel domain",
        "Implemented three-layer architecture (UI, business logic, data access)",
        "Built SQLite database integration with data access layer",
        "Created manager classes for booking and guest operations",
        "Implemented user stories with UI helper functions",
        "Managed version control and code reviews via GitHub"
      ],
      learnings: "Separating the three layers (UI, business logic, data access) from day one made parallel team development significantly smoother — early architecture decisions compound through the entire project. OOP encapsulation via getter/setter methods caught integration bugs earlier than expected, validating the upfront investment in clean class design.",
      githubUrl: "https://github.com/FHNWPythonProject/Hotelreservation",
      demoUrl: ""
    },
    {
      id: "running-dashboard",
      // hidden: true removes this card from work.html until content is ready
      hidden: true,
      category: "Side Project",
      title: "Running & Training Dashboard",
      description:
        "Analysis of running and football data, visualization of training load and pace development.",
      tags: ["Garmin API", "Pandas", "Visualization"],
      problemstellung: "",
      zielsetzung: "",
      vorgehen: "",
      losung: "",
      learnings: "",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "portfolio-website",
      category: "Side Project",
      title: "Personal Portfolio Website",
      description:
        "Framework-free multi-page portfolio with a data-driven content architecture — all site text lives in a single JS file, making updates trivial. Zero external JS dependencies, full CSP security hardening and OWASP-aligned input validation throughout.",
      tags: ["HTML/CSS", "JavaScript", "Git/GitHub"],
      status: "",
      problemstellung: "A personal online presence was needed that goes beyond a standard CV — one that reflects both technical skills and personality while remaining easy to maintain and extend.",
      zielsetzung: "Design and build a fast, framework-free portfolio website with a warm editorial aesthetic, fully data-driven content and multi-page navigation.",
      vorgehen: "Developed a custom design system with CSS variables and serif/mono typography. All content lives in a central JS object, rendered dynamically per page. Interactive features like tag popovers, a timeline and image galleries were built with vanilla JavaScript.",
      losung: "A lightweight, responsive multi-page site with consistent design language, reusable shared logic and zero external dependencies. Content updates require editing a single file.",
      technicalSteps: [
        "Created design system with CSS custom properties",
        "Built data-driven content architecture in vanilla JS",
        "Implemented multi-page routing with shared navbar and footer",
        "Added interactive timeline for experience section",
        "Built tag popover system with click-to-reveal definitions",
        "Responsive layout with mobile-first media queries"
      ],
      learnings: "Building without a framework forces deliberate decisions on every feature — the zero-bundle-overhead performance benefit outweighed the convenience cost. A single-file content architecture (content.js as source of truth) made updates trivial and validated the upfront investment in data-driven design.",
      githubUrl: "https://github.com/janisoldani/CV-Website",
      demoUrl: ""
    },
  ],

  experience: [
    {
      period: "2009 – 2022",
      education: {
        title: "Matura — School of Economics",
        institution: "Kantonsschule Baden",
        bullets: [
          "Primary School Altenburg (2009 – 2013)",
          "Secondary School Wettingen (2013 – 2018)",
          "Kantonsschule Baden, School of Economics (2018 – 2022)"
        ]
      },
      work: null
    },
    {
      period: "Sep – Oct 2019",
      education: null,
      work: {
        role: "Commercial Intern",
        company: "Document Materiel SA, Geneva",
        bullets: [
          "Language immersion internship in a French-speaking environment",
          "Supported sales conversations and client interactions",
          "Administrative office support",
          "Assisted with deliveries and logistics"
        ]
      }
    },
    {
      period: "Aug 2020",
      education: null,
      work: {
        role: "Accounting & Property Management Intern",
        company: "Confida Treuhand GmbH",
        bullets: [
          "Tax return preparation for private clients",
          "Real estate management support",
          "Financial and managerial accounting",
          "Rental agreement processing"
        ]
      }
    },
    {
      period: "2021 – 2023",
      education: {
        title: "Basic Banking Education",
        institution: "CYP – Challenge Your Potential",
        bullets: [
          "Completed in parallel with the BEM internship programme at Migros Bank",
          "Covered banking foundations, compliance and core financial products"
        ]
      },
      work: {
        role: "BEM Internship",
        company: "Migros Bank AG",
        bullets: [
          "Private Banking (2021–2022): client consultations, mortgage financing, property valuations",
          "Pension provision (3rd pillar) and inheritance case processing",
          "Corporate Customers (2022–2023): transaction management and loan portfolio monitoring",
          "Senior advisor support and client request management"
        ]
      }
    },
    {
      period: "2023 – present",
      education: null,
      work: {
        role: "Corporate Customer Advisor",
        company: "Migros Bank AG",
        current: true,
        bullets: [
          "Own portfolio of 50+ corporate clients with full advisory responsibility",
          "Independent credit assessments and financing requests up to CHF 10M",
          "Advisory in mortgage financing, consumer goods leasing and medical practice credits",
          "Liquidity planning and ongoing portfolio monitoring"
        ]
      }
    },
    {
      period: "2024 – present",
      education: {
        title: "BSc Business Artificial Intelligence",
        institution: "FHNW – Fachhochschule Nordwestschweiz",
        current: true,
        bullets: [
          "Focus: machine learning, data engineering, intelligent systems & processes",
          "Part-time programme (180 ECTS) alongside 70% employment",
          "Expected graduation: 2028"
        ]
      },
      work: null
    }
  ],

  cv: {
    workExperience: [
      {
        period: "2023 – present",
        role: "Corporate Customer Advisor",
        company: "Migros Bank AG",
        detail: "70% — parallel to BSc studies",
        bullets: [
          "Relationship-driven advisory for a portfolio of 50+ corporate clients — from needs analysis to tailored solution development",
          "Structuring individual financing solutions across mortgage lending, consumer goods leasing, medical practice credits and liquidity planning",
          "Independent credit assessments and financing proposals up to CHF 10M — from initial client brief through to credit decision",
          "Primary point of contact for complex client situations — proactive problem-solving and cross-product recommendations"
        ]
      },
      {
        period: "08/2022 – 08/2023",
        role: "BEM Intern – Corporate Customers",
        company: "Migros Bank AG",
        detail: "",
        bullets: [
          "Client request management and senior advisor support",
          "Transaction processing and portfolio monitoring",
          "Loan portfolio control and client advisor reporting"
        ]
      },
      {
        period: "09/2021 – 08/2022",
        role: "BEM Intern – Private Banking",
        company: "Migros Bank AG",
        detail: "",
        bullets: [
          "Client reception and initial consultations",
          "Account opening and customer identification",
          "Mortgage financing assistance — property valuations, loan applications, letters of credit",
          "Pension provision (3rd pillar) and investment advisory support",
          "Inheritance case processing"
        ]
      },
      {
        period: "08/2020",
        role: "Accounting & Property Management Intern",
        company: "Confida Treuhand GmbH",
        detail: "",
        bullets: [
          "Tax return preparation for private clients",
          "Real estate management support",
          "Financial and managerial accounting",
          "Rental agreement processing"
        ]
      }
    ],

    education: [
      {
        period: "2024 – present",
        degree: "BSc Business Artificial Intelligence",
        institution: "FHNW – Fachhochschule Nordwestschweiz",
        location: "Olten"
      },
      {
        period: "2021 – 2023",
        degree: "Basic Banking Education",
        institution: "CYP – Challenge Your Potential",
        location: "Switzerland"
      },
      {
        period: "2018 – 2022",
        degree: "School of Economics",
        institution: "Kantonsschule Baden",
        location: "Baden"
      }
    ],

    certificates: [
      { name: "Cambridge Assessment English – First (C1)", year: "2021" },
      { name: "DELF B2 – Diplôme d'études en langue française", year: "2021" },
      { name: "ICT Advanced-User SIZ", year: "2021" },
      { name: "16-Award YES-Project (Kantonsschule Baden)", year: "2020" }
    ],

    languages: [
      { name: "German", level: "Native" },
      { name: "English", level: "C1 – Cambridge First" },
      { name: "French", level: "B2 – DELF" }
    ]
  },

  testimonials: [],

  tagDefinitions: {
    "Python": "Versatile programming language for data science, web and automation.",
    "SQL": "Query language for relational databases and data analysis.",
    "HTML/CSS": "The building blocks of the web — structure (HTML) and style (CSS).",
    "HTML/CSS/JS": "The three core technologies of frontend web development.",
    "JavaScript": "The language of the web — interactive websites and applications.",
    "Pandas": "Python library for data manipulation and analysis with DataFrames.",
    "nltk": "Natural Language Toolkit — Python library for text processing and NLP.",
    "Whisper API": "OpenAI's automatic speech recognition and transcription model.",
    "OpenAI API": "Interface to OpenAI models for text, image and speech.",
    "OpenAI": "AI research company — known for GPT, DALL·E and Whisper.",
    "Git/GitHub": "Version control (Git) and platform for code collaboration (GitHub).",
    "VS Code": "Lightweight code editor by Microsoft with a strong ecosystem.",
    "Jupyter": "Interactive notebooks for data science, visualisation and prototyping.",
    "PostgreSQL": "Powerful open-source database for complex queries and large datasets.",
    "FastAPI": "Modern Python web framework for fast, type-safe APIs.",
    "React": "JavaScript library by Meta for component-based user interfaces.",
    "TypeScript": "JavaScript with static typing for more robust and maintainable code.",
    "TailwindCSS": "Utility-first CSS framework for fast, consistent styling.",
    "SQLite": "Compact, file-based SQL database — ideal for smaller projects.",
    "OOP": "Object-Oriented Programming — structuring code through classes and objects.",
    "DB Design": "Design of database structures, relationships and normalisation.",
    "Garmin API": "Interface to Garmin sports watches for training and health data.",
    "Visualization": "Graphical representation of data to identify patterns and trends.",
    "Data Analysis": "Systematic evaluation of data for informed decision-making.",
    "Drone Photography": "Aerial photography with a drone — perspectives from a bird's eye view.",
    "Landscape": "Nature and outdoor photography — light, space and depth.",
    "Composition": "Visual design and framing — balance, lines and focus.",
    "DMN": "Decision Model and Notation — standard for modelling and executing business decision logic as decision tables.",
    "Prolog": "Logic programming language for rule-based inference and knowledge representation.",
    "OWL/SWRL": "Web Ontology Language combined with Semantic Web Rule Language — for building and reasoning over knowledge graphs.",
    "SPARQL": "Query language for RDF and OWL knowledge graphs — retrieves structured knowledge via semantic patterns.",
    "Knowledge Representation": "Symbolic AI methods for encoding domain knowledge in a structured, machine-readable and explainable form.",
    "Mortgage Financing": "Advisory and structuring of mortgage credits for private and commercial clients.",
    "Consumer Leasing": "Financing of consumer goods and vehicles via leasing agreements for corporate clients.",
    "Medical Practice Lending": "Specialised credits for medical practices — financing operating resources and practice investments.",
    "Liquidity Planning": "Analysis and planning of liquidity for corporate clients — cash flow management and short-term financing.",
    "Client Advisory": "Holistic client consulting — needs analysis, solution development and relationship management.",
    "Credit Assessment": "Creditworthiness analysis — evaluation of balance sheets, cash flows and risk profiles.",
    "KYC & Compliance": "Know Your Customer — identification, due diligence and regulatory compliance.",
    "Portfolio Monitoring": "Monitoring and management of loan portfolios — risk surveillance and reporting.",
    "LangChain": "Python framework for building LLM-powered applications — chains, agents and retrieval-augmented pipelines.",
    "RAG": "Retrieval-Augmented Generation — grounding LLM responses with relevant context retrieved from a knowledge base to reduce hallucinations.",
    "LLaMA": "Open-source large language model by Meta — runs locally via Ollama for privacy-first AI without cloud APIs.",
    "ChromaDB": "Open-source vector database for storing and querying embeddings — used for semantic search and RAG pipelines.",
    "pgvector": "PostgreSQL extension for vector similarity search — enables semantic retrieval directly in the relational database with Row Level Security.",
    "DSGVO": "Datenschutz-Grundverordnung — EU data protection regulation. DSGVO-native means privacy by architecture, not compliance as an afterthought.",
    "Ollama": "Local LLM runtime — runs models like LLaMA and Mistral entirely on-device, no cloud APIs or API costs required.",
    "Next.js": "React meta-framework by Vercel — server-side rendering, file-based routing and full-stack capabilities.",
    "RAGAS": "RAG evaluation framework — measures LLM pipeline quality on dimensions like Faithfulness, Answer Relevancy and Context Precision."
  },

  footer: {
    ownerName: "Janis Oldani",
    builtWith: "Designed & built by Janis Oldani."
  }
};
