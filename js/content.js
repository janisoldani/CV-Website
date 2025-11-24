// js/content.js

window.SITE_CONTENT = {
  personal: {
    name: "Janis Oldani",
    role: "Student Business Artificial Intelligence",
    location: "Wettingen, Schweiz",
    email: "janis.oldani@gmx.ch",
    phone: "+41 79 396 79 17",
    photoUrl: "assets/janis-oldani.jpg.jpeg",
    photoAlt: "Portr\u00e4tfoto von Janis Oldani",
    aboutShort:
      "Ich verbinde mein BAI-Studium mit Sport, Tech und Daten, um praxisnahe digitale Lösungen zu bauen."
  },

  availability: {
    pillLabel: "Verfügbar für neue Projekte",
    statusText: "offen für Anfragen"
  },

  links: {
    github: "https://github.com/janisoldani",
    linkedin: "https://www.linkedin.com/in/janis-oldani-395042219/"
  },

  hero: {
    titleLine1: "Code trifft Business – Zukunft entsteht.",
    titleLine2: "Data • KI • Web-Technologie.",
    subtitle:
      "Ich studiere Business Artificial Intelligence an der FHNW und kombiniere praktische Bankerfahrung mit technischen Fähigkeiten in Daten, KI und Software, um Mehrwert für Unternehmen zu schaffen.",
    primaryCta: "Projekte ansehen",
    secondaryCta: "Kontakt aufnehmen",
    tertiaryCta: "Berufserfahrung"
  },

  sections: {
    work: {
      title: "Work & Projekte",
      subtitle: "Ausgewählte Uni-, Side- und Kundenprojekte."
    },
    about: {
      title: "Profil & Background",
      subtitle: "Kurzfassung von Ausbildung, Erfahrung und Skills."
    },
    contact: {
      title: "Kontakt",
      subtitle: "Lass uns über Projekte oder Kollaborationen sprechen.",
      introText: "Schreib mir eine kurze Nachricht – ich melde mich schnell zurück.",
      ctaButtonLabel: "E-Mail schreiben",
      emailLabelPrefix: "E-Mail:"
    }
  },

  aboutCards: [
    {
      category: "Ausbildung",
      title: "BSc Business Artificial Intelligence, FHNW",
      body:
        "Schwerpunkte in Datenbanken, angewandter Programmierung (Python), Machine Learning und Informationssystemen. Teamarbeit mit Fokus auf reale Business Cases."
    },
    {
      category: "Skills",
      title: "Tech-Stack",
      body:
        "Python, SQL, HTML/CSS/JS, Git/GitHub, Datenanalyse. Interesse an AI-gestützten Produkten und automatisierten Workflows."
    },
    {
      category: "Beyond Tech",
      title: "Sport & Mindset",
      body:
        "Aktiver Fussballer (2. Liga) und Läufer, Performance-getrieben, strukturiert und zielorientiert – auf dem Platz und in Projekten."
    }
  ],

  projects: [
    {
      id: "whisper-arztberichte",
      category: "AI / Data",
      title: "Automatisierte Arztberichte mit Whisper",
      description:
        "Pipeline zur Transkription medizinischer Gespräche mit Whisper und anschliessender Strukturierung der Daten.",
      tags: ["OpenAI", "Python", "NLP"],
      status: "in-progress",
      problemstellung: "",
      zielsetzung: "",
      vorgehen: "",
      losung: "",
      learnings: "",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "hotel-reservierung",
      category: "University Project",
      title: "Hotel-Reservierungssystem",
      description:
        "Relationales Datenmodell, SQL-Queries und Python-Backend für ein mehrstufiges Buchungssystem.",
      tags: ["PostgreSQL", "Python", "DB Design"],
      problemstellung: "",
      zielsetzung: "",
      vorgehen: "",
      losung: "",
      learnings: "",
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "running-dashboard",
      category: "Side Project",
      title: "Running & Training Dashboard",
      description:
        "Analyse von Lauf- und Fussballdaten, Visualisierung von Trainings-Load und Pace-Entwicklung.",
      tags: ["Garmin API", "Pandas", "Visualisierung"],
      problemstellung: "",
      zielsetzung: "",
      vorgehen: "",
      losung: "",
      learnings: "",
      githubUrl: "",
      demoUrl: ""
    }
  ],

  footer: {
    ownerName: "Janis Oldani",
    builtWith: "Gebaut mit HTML, CSS & JS."
  }
};
