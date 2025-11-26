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
    titleLine2: "",
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
      tags: ["OpenAI", "Python", "nltk"],
      status: "in-progress",
      problemstellung: "Die ursprüngliche Herausforderung bestand darin, medizinische Gespräche automatisiert zu transkribieren und für die weitere Datenverarbeitung nutzbar zu machen. Erste Tests zeigten jedoch deutliche Verständnisfehler im Roh-Transkript, wodurch unklar war, ob die Datenqualität für ein anschliessendes Labeling ausreicht. Zusätzlich musste abgeklärt werden, ob manuelle Korrekturen erlaubt und sinnvoll sind, und wie sich die Genauigkeit technisch verbessern lässt.",
      zielsetzung: "Das Projekt zielte darauf ab, ein funktionierendes End-to-End-Setup aufzubauen, das Audioaufnahmen automatisch verarbeitet, in Text umwandelt, bereinigt und strukturiert. Gleichzeitig sollte geklärt werden, welche Modelle, Parameter und Post-Processing-Schritte notwendig sind, um eine robuste Datenbasis für ein medizinisches KI-System zu schaffen. Ziel war ein technisch sauberes, reproduzierbares Setup, das sich später erweitern lässt.",
      vorgehen: "Die Audiofiles wurden erfasst, vorverarbeitet und mithilfe von Whisper transkribiert. Die Implementierung erfolgte in Python, inklusive der Modellanbindung, Dateiverarbeitung und automatisierten Ausgabe. Für Vergleichstests kamen unterschiedliche Whisper-Modelle zum Einsatz, um zu beurteilen, ob Modellgrösse und Qualität die Fehlerrate beeinflussen. Parallel wurde die Frage geklärt, ob ein manuelles Korrigieren der Transkripte sinnvoll und vertretbar ist, und welche Optionen zur Qualitätssteigerung existieren (z. B. höherwertige Modelle, Fine-Tuning, Audio-Optimierung).",
      losung: "Es wurde ein funktionales Transkriptionssystem implementiert, das alle aufgenommenen Gespräche automatisiert einliest, transkribiert und als Textdateien exportiert. Die Resultate sind grundsätzlich nutzbar, weisen jedoch sprachmodelltypische Fehler auf, insbesondere bei Fachbegriffen oder undeutlicher Aussprache. Ergänzend wurde ein Workflow definiert, der sowohl manuelle Korrekturen als auch spätere Verbesserungen durch bessere Modelle oder zusätzliche Verarbeitungsschritte ermöglicht. Die Lösung bildet eine stabile Grundlage für das weitere Labeling und die Entwicklung des eigentlichen KI-Systems.",
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
