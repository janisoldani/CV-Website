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
    cvUrl: "cv.html"
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
      subtitle: "Education and career — often running in parallel."
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
    },
    {
      icon: "banking",
      title: "Banking & Finance",
      tags: ["Hypothekarfinanzierung", "Konsumgüterleasing", "Arztbetriebskredite", "Liquiditätsplanung", "Client Advisory", "Credit Assessment", "KYC & Compliance", "Portfolio Monitoring"]
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
      badge: "Photography & Drone",
      title: "Through the Lens.",
      subtitle: "The Swiss Alps — captured from ground and sky. New images coming soon.",
      heroImage: {
        src: "assets/hiking-alps.jpeg",
        alt: "Hiking in the Swiss Alps — trail along a mountain lake"
      },
      gallery: [
        { src: "assets/snowboard-powder.jpeg", alt: "Snowboarding in deep powder", label: "Winter" },
        { src: "assets/climbing-rocks.jpeg", alt: "Rock climbing in the mountains", label: "Vertical" },
        { src: "assets/camping-alps.jpeg", alt: "Wild camping in the Swiss Alps", label: "Outdoors" },
        { src: "assets/football-captain.jpeg", alt: "Playing football as captain, #19", label: "Captain" },
        { src: "assets/surfing-ocean.jpeg", alt: "Surfing in the ocean", label: "Flow" },
        { src: "assets/drone-winter.jpeg", alt: "Aerial drone shot of a winter river through forest", label: "Drone" }
      ]
    },

    videos: {
      badge: "Film & Motion",
      title: "In Motion.",
      subtitle: "Drone footage and moments captured from above.",
      items: [
        { youtubeId: "", title: "Alps from Above", description: "Aerial footage over the Swiss Alps — placeholder." },
        { youtubeId: "", title: "Winter Flight", description: "Winter drone footage through powder and peaks — placeholder." },
        { youtubeId: "", title: "Mountain Flow", description: "Rivers, valleys and ridgelines from above — placeholder." },
        { youtubeId: "", title: "Golden Hour", description: "Last light over alpine terrain — placeholder." }
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
          coverUrl: "https://covers.openlibrary.org/b/id/13268433-L.jpg"
        }
      ]
    }
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
  ],

  experience: [
    {
      period: "2009 – 2013",
      education: { title: "Primarschule Altenburg" },
      work: null
    },
    {
      period: "2013 – 2018",
      education: { title: "Bezirksschule Wettingen" },
      work: null
    },
    {
      period: "2018 – 2022",
      education: {
        title: "Wirtschaftsmittelschule",
        institution: "Kantonsschule Baden",
        note: "School of Economics"
      },
      work: null
    },
    {
      period: "2021 – 2023",
      education: {
        title: "Basic Banking Education",
        institution: "CYP – Challenge Your Potential",
        note: "Banking certification completed in parallel with BEM internship at Migros Bank."
      },
      work: {
        role: "BEM Internship",
        company: "Migros Bank AG",
        description: "Two-year programme spanning Private Banking (2021–2022) and Corporate Customers (2022–2023). Private Banking: client consultations, mortgage financing (Hypothekarfinanzierung), property valuations, loan applications, pension provision (3rd pillar) and inheritance cases. Corporate: transaction management, loan portfolio monitoring and senior advisor support."
      }
    },
    {
      period: "2023 – present",
      education: {
        title: "BSc Business Information Technology",
        institution: "FHNW – Fachhochschule Nordwestschweiz",
        note: "Specialisation: Business AI — studied in parallel with employment.",
        current: true
      },
      work: {
        role: "Corporate Customer Advisor",
        company: "Migros Bank AG",
        description: "Own client portfolio with full advisory responsibility. Consulting clients on mortgage financing (Hypothekarfinanzierung), consumer goods leasing (Konsumgüterleasing), medical practice credits (Arztbetriebskredite) and liquidity planning (Liquiditätsplanung) — alongside BSc studies at FHNW.",
        current: true
      }
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
          "Own client portfolio in the corporate customer division",
          "Client advisory in mortgage financing (Hypothekarfinanzierung), consumer goods leasing (Konsumgüterleasing), medical practice credits (Arztbetriebskredite) and liquidity planning (Liquiditätsplanung)",
          "Independent management of financing requests and credit assessments"
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
        period: "2023 – present",
        degree: "BSc Business Information Technology (Business AI)",
        institution: "FHNW – Fachhochschule Nordwestschweiz",
        location: "Brugg-Windisch"
      },
      {
        period: "2021 – 2023",
        degree: "Basic Banking Education",
        institution: "CYP – Challenge Your Potential",
        location: "Switzerland"
      },
      {
        period: "2018 – 2022",
        degree: "Wirtschaftsmittelschule (School of Economics)",
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
    "Composition": "Bildaufbau und visuelles Gestalten — Gleichgewicht, Linien und Fokus.",
    "Hypothekarfinanzierung": "Beratung und Strukturierung von Hypothekarkrediten für private und gewerbliche Kunden.",
    "Konsumgüterleasing": "Finanzierung von Konsumgütern und Fahrzeugen über Leasingverträge im Firmenkundensegment.",
    "Arztbetriebskredite": "Spezialkredite für Arztpraxen — Finanzierung von Betriebsmitteln und Praxisinvestitionen.",
    "Liquiditätsplanung": "Analyse und Planung der Liquidität für Unternehmenskunden — Cashflow-Management und kurzfristige Finanzierungen.",
    "Client Advisory": "Ganzheitliche Kundenberatung — Bedürfnisanalyse, Lösungsentwicklung und Beziehungsmanagement.",
    "Credit Assessment": "Kreditwürdigkeitsprüfung — Analyse von Bilanzen, Cashflows und Risikoprofilen.",
    "KYC & Compliance": "Know Your Customer — Identifikation, Sorgfaltspflichten und regulatorische Einhaltung.",
    "Portfolio Monitoring": "Überwachung und Steuerung von Kreditportfolios — Risikoüberwachung und Berichterstattung."
  },

  footer: {
    ownerName: "Janis Oldani",
    builtWith: "Designed & built by Janis Oldani."
  }
};
