// js/content.js

window.SITE_CONTENT = {
  personal: {
    name: "Janis Oldani",
    role: "Business AI Student",
    location: "Wettingen, Switzerland",
    email: "janis.oldani@gmx.ch",
    phone: "+41 79 396 79 17",
    photoUrl: "assets/janis-oldani.jpg.jpeg",
    photoAlt: "Portrait of Janis Oldani",
    tagline: "Turning data\ninto decisions.",
    aboutShort:
      "I combine my BAI studies with sports, tech and data to build practical digital solutions.",
    skills: ["Python", "SQL", "HTML/CSS/JS", "Git/GitHub", "Data Analysis"],
    cvUrl: "assets/cv-janis-oldani.pdf"
  },

  availability: {
    pillLabel: "Available for new projects",
    statusText: "open to inquiries"
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
      title: "Experience",
      subtitle: "My professional journey so far."
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
      "I'm a <strong>Business AI student</strong> at FHNW with a background in banking — structured work, customer orientation and analytical thinking under pressure.",
      "Today I combine this foundation with <strong>AI and modern technologies</strong> to build practical digital solutions at the intersection of business and technology."
    ]
  },

  quickFacts: [
    { label: "Location", value: "Wettingen, CH" },
    { label: "Education", value: "Business AI, FHNW" },
    { label: "Sports", value: "Football, 2nd League" },
    { label: "Status", value: "Open to Work", highlight: true }
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

  projects: [
    {
      id: "injury-risk-detector",
      category: "Fullstack / AI",
      title: "Injury Risk Detector",
      description:
        "Fullstack app that predicts training injury risk based on physiological data (HRV, sleep, RHR) with safety rules and session planning.",
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
      learnings: "",
      githubUrl: "https://github.com/janisoldani/Injury-Risk-Detector",
      demoUrl: ""
    },
    {
      id: "whisper-arztberichte",
      category: "AI / Data",
      title: "Automated Medical Reports with Whisper",
      description:
        "Pipeline for transcribing medical conversations with Whisper and subsequent data structuring. Team project — contributed to transcription pipeline and model evaluation.",
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
      learnings: "",
      githubUrl: "https://github.com/eli611/Arztbericht-Erstellung-ML-HS-2025",
      demoUrl: ""
    },
    {
      id: "hotel-reservierung",
      category: "University Project",
      title: "Hotel Reservation System",
      description:
        "Three-layer Python application with SQLite for hotel bookings — OOP design, entity modeling and user stories. Team project — responsible for business logic implementation.",
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
      learnings: "",
      githubUrl: "https://github.com/FHNWPythonProject/Hotelreservation",
      demoUrl: ""
    },
    {
      id: "running-dashboard",
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
        "Multi-page portfolio with editorial design, data-driven content architecture and interactive elements — built from scratch without frameworks.",
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
      learnings: "",
      githubUrl: "https://github.com/janisoldani/CV-Website",
      demoUrl: ""
    },
    {
      id: "photography",
      category: "Creative / Visual",
      title: "Drone & Landscape Photography",
      description:
        "A visual exploration of the Swiss Alps and beyond — captured from the ground and from above with a drone. Seven images spanning snowboarding, climbing, camping and aerial perspectives.",
      tags: ["Drone Photography", "Landscape", "Composition"],
      problemstellung: "Photography has always been a creative outlet alongside coding and sports — but without a curated showcase it remained scattered across devices and platforms.",
      zielsetzung: "Create a focused gallery that captures the essence of outdoor life: light, motion, environment and perspective — both at eye-level and from the air.",
      vorgehen: "Every shot was deliberately composed — timing the golden hour, selecting the right vantage point and adjusting exposure for the scene. Drone shots required planning airspace, weather windows and precise flight paths to capture the intended angle.",
      losung: "A curated set of seven images spanning the Swiss Alps, powder snowboarding, rock climbing, wild camping, football and ocean surfing — each telling a story of movement, environment and creative perspective.",
      technicalSteps: [],
      learnings: "",
      githubUrl: "",
      demoUrl: "",
      gallery: [
        { src: "assets/hiking-alps.jpeg", alt: "Hiking in the Swiss Alps — trail along a mountain lake", label: "Alpine Trail" },
        { src: "assets/snowboard-powder.jpeg", alt: "Snowboarding in deep powder", label: "Winter" },
        { src: "assets/climbing-rocks.jpeg", alt: "Rock climbing in the mountains", label: "Vertical" },
        { src: "assets/camping-alps.jpeg", alt: "Wild camping in the Swiss Alps", label: "Outdoors" },
        { src: "assets/football-captain.jpeg", alt: "Playing football as captain, #19", label: "Captain" },
        { src: "assets/surfing-ocean.jpeg", alt: "Surfing in the ocean", label: "Flow" },
        { src: "assets/drone-winter.jpeg", alt: "Aerial drone shot of a winter river through forest", label: "Drone" }
      ]
    }
  ],

  experience: [
    {
      period: "2024 – present",
      role: "Placeholder: Role",
      company: "Placeholder: Company",
      description: "Placeholder: Job description.",
      tags: ["Placeholder"]
    },
    {
      period: "2022 – 2024",
      role: "Placeholder: Role",
      company: "Placeholder: Company",
      description: "Placeholder: Job description.",
      tags: ["Placeholder"]
    },
    {
      period: "2020 – 2022",
      role: "Placeholder: Role",
      company: "Placeholder: Company",
      description: "Placeholder: Job description.",
      tags: ["Placeholder"]
    }
  ],

  testimonials: [
    {
      quote: "Placeholder: Real quote goes here.",
      author: "Placeholder: Name",
      role: "Placeholder: Position / Company"
    },
    {
      quote: "Placeholder: Real quote goes here.",
      author: "Placeholder: Name",
      role: "Placeholder: Position / Company"
    },
    {
      quote: "Placeholder: Real quote goes here.",
      author: "Placeholder: Name",
      role: "Placeholder: Position / Company"
    }
  ],

  tagDefinitions: {
    "Python": "Vielseitige Programmiersprache für Web, Data Science und Automatisierung.",
    "SQL": "Abfragesprache für relationale Datenbanken und Datenanalyse.",
    "HTML/CSS": "Grundbausteine des Webs – Struktur (HTML) und Gestaltung (CSS).",
    "HTML/CSS/JS": "Die drei Kerntechnologien für Frontend-Webentwicklung.",
    "JavaScript": "Die Programmiersprache des Webs – interaktive Websites und Anwendungen.",
    "Pandas": "Python-Bibliothek für Datenmanipulation und -analyse mit DataFrames.",
    "nltk": "Natural Language Toolkit – Python-Bibliothek für Textverarbeitung und NLP.",
    "Whisper API": "OpenAI-Modell zur automatischen Spracherkennung und Transkription.",
    "OpenAI API": "Schnittstelle zu OpenAI-Modellen für Text, Bild und Sprache.",
    "OpenAI": "KI-Forschungsunternehmen – bekannt für GPT, DALL·E und Whisper.",
    "Git/GitHub": "Versionskontrolle (Git) und Plattform für Code-Zusammenarbeit (GitHub).",
    "VS Code": "Leichtgewichtiger Code-Editor von Microsoft mit starkem Ökosystem.",
    "Jupyter": "Interaktive Notebooks für Data Science, Visualisierung und Prototyping.",
    "PostgreSQL": "Leistungsfähiges Open-Source-Datenbanksystem für komplexe Abfragen.",
    "FastAPI": "Modernes Python-Web-Framework für schnelle, typsichere APIs.",
    "React": "JavaScript-Bibliothek von Meta für komponentenbasierte Benutzeroberflächen.",
    "TypeScript": "JavaScript mit statischer Typisierung für robusteren Code.",
    "TailwindCSS": "Utility-first CSS-Framework für schnelles, konsistentes Styling.",
    "SQLite": "Kompakte, dateibasierte SQL-Datenbank – ideal für kleinere Projekte.",
    "OOP": "Objektorientierte Programmierung – Strukturierung durch Klassen und Objekte.",
    "DB Design": "Entwurf von Datenbankstrukturen, Beziehungen und Normalisierung.",
    "Garmin API": "Schnittstelle zu Garmin-Sportuhren für Trainings- und Gesundheitsdaten.",
    "Visualization": "Grafische Darstellung von Daten zur Erkennung von Mustern und Trends.",
    "Data Analysis": "Systematische Auswertung von Daten für fundierte Entscheidungen.",
    "Drone Photography": "Luftaufnahmen mit einer Drohne — Perspektiven aus der Vogelperspektive.",
    "Landscape": "Naturlandschaften und Aussenphotographie — Licht, Raum und Tiefe.",
    "Composition": "Bildaufbau und visuelles Gestalten — Gleichgewicht, Linien und Fokus."
  },

  footer: {
    ownerName: "Janis Oldani",
    builtWith: "Designed & built by Janis Oldani."
  }
};
