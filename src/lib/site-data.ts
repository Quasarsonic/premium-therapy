export const site = {
  name: "Premium Therapy",
  tagline: "Massaggi terapeutici in Ticino",
  owner: "Gregorio Drei",
  location: "6900 Lugano",
  phone: "+41 76 202 60 63",
  phoneHref: "tel:+41762026063",
  whatsappHref: "https://wa.me/41762026063",
  email: "gregoriodrei@gmail.com",
  emailAlt: "info@premiumtherapy.ch",
  studioAddress: "Via Giuseppe Cattori 3, Paradiso 6900, Ticino",
  mapQuery: "Via Giuseppe Cattori 3, Paradiso TI",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/contatti", label: "Contatti" },
] as const;

export const hero = {
  title: "Ritrova equilibrio. Potenzia il recupero.",
  subtitle:
    "Il punto di riferimento in Ticino per massaggi sportivi, terapeutici e relax",
  description:
    "Grazie alla nostra esperienza pluriennale, offriamo trattamenti mirati e personalizzati per aiutarti a raggiungere i tuoi obiettivi in modo rapido ed efficace — trattamenti di alta qualità pensati per chi desidera ritrovare equilibrio, sollievo e nuova energia.",
  cta: "Di cosa hai bisogno: noi ti offriamo la soluzione ideale.",
} as const;

export const about = {
  title: "Chi Siamo",
  paragraphs: [
    "Siamo massaggiatori e terapisti professionisti con anni di esperienza nel settore del benessere e della salute fisica. Operiamo in Ticino e collaboriamo con i migliori studi, palestre e squadre sportive professionistiche, portando ogni giorno competenza, professionalità e passione in tutto ciò che facciamo.",
    "La nostra esperienza ci permette di offrire trattamenti mirati e personalizzati, capaci di coniugare benessere, performance e recupero. Dallo sport professionistico al relax quotidiano, il nostro approccio è sempre studiato per rispondere alle esigenze di chi cerca risultati concreti e un'esperienza di qualità superiore.",
    "In Premium Therapy, il nostro obiettivo è semplice: trasformare ogni trattamento in un momento di sollievo, energia e rinnovato equilibrio per corpo e mente.",
  ],
} as const;

export const pillars = [
  {
    title: "Esperienza sportiva",
    description:
      "Collaborazioni con squadre professionistiche e atleti — trattamenti pensati per performance e recupero.",
  },
  {
    title: "Percorsi personalizzati",
    description:
      "Ogni seduta nasce da valutazione clinica e obiettivi concreti, non da protocolli standard.",
  },
  {
    title: "Tecniche integrate",
    description:
      "Massaggio, linfodrenaggio, taping, cupping e ginnastica correttiva in un unico approccio.",
  },
  {
    title: "Riconoscimenti RME & SNE",
    description:
      "Certificazioni svizzere riconosciute dalle principali casse malati complementari.",
  },
] as const;

export type ServiceItem = { name: string; description: string; slug: string };

export const services: ServiceItem[] = [
  {
    slug: "massaggio-classico",
    name: "Massaggio Classico",
    description:
      "Tecniche tradizionali per alleviare tensioni e stress muscolare, ideale per chi cerca un trattamento completo e rilassante.",
  },
  {
    slug: "massaggio-sportivo",
    name: "Massaggio Sportivo",
    description:
      "Specifico per atleti: prepara i muscoli all'attività fisica e ne favorisce il recupero post-allenamento.",
  },
  {
    slug: "massaggio-decontratturante",
    name: "Massaggio Decontratturante",
    description:
      "Rilassa i muscoli contratti, riducendo dolori e migliorando la mobilità articolare.",
  },
  {
    slug: "massaggio-rilassante",
    name: "Massaggio Rilassante",
    description:
      "Promuove il benessere generale, riducendo lo stress e migliorando la circolazione sanguigna.",
  },
  {
    slug: "trigger-points",
    name: "Trattamento Trigger Points",
    description:
      "Identifica e tratta i punti trigger per alleviare dolori localizzati e tensioni muscolari.",
  },
  {
    slug: "linfodrenaggio",
    name: "Linfodrenaggio",
    description:
      "Massaggio linfatico che favorisce il drenaggio dei liquidi, riducendo gonfiori e migliorando il metabolismo.",
  },
  {
    slug: "ginnastica-correttiva",
    name: "Ginnastica Correttiva",
    description:
      "Migliora postura, mobilità e funzionalità muscolare, prevenendo dolori e squilibri posturali.",
  },
  {
    slug: "test-muscolari",
    name: "Test Muscolari e Allungamento",
    description:
      "Valutazione della forza e flessibilità muscolare per prevenire infortuni e migliorare le performance.",
  },
  {
    slug: "esame-clinico",
    name: "Esame Clinico",
    description:
      "Anamnesi e obiettivo statico/dinamico: analisi personalizzata per valutare la condizione fisica.",
  },
  {
    slug: "indicazioni",
    name: "Indicazioni e Controindicazioni",
    description:
      "Consulenza professionale con indicazioni terapeutiche, controindicazioni e consigli pratici personalizzati.",
  },
  {
    slug: "kinesio-taping",
    name: "Kinesio Taping e Fasciature",
    description:
      "Applicazione di bendaggi elastici e fasciature terapeutiche per supporto muscolare e articolare.",
  },
  {
    slug: "cupping",
    name: "Cupping Therapy",
    description:
      "Terapia con coppette per migliorare la circolazione, ridurre tensioni muscolari e favorire il recupero.",
  },
];

export const conditions: ServiceItem[] = [
  {
    slug: "cervicalgia",
    name: "Cervicalgia",
    description:
      "Dolore al collo e alla parte superiore della schiena, causato da posture scorrette, stress o traumi.",
  },
  {
    slug: "lombalgia",
    name: "Lombalgia",
    description:
      "Dolore nella zona lombare, spesso causato da sforzi, posture errate o problemi vertebrali.",
  },
  {
    slug: "sciatica",
    name: "Sciatica",
    description:
      "Dolore che si irradia lungo il nervo sciatico, dalla schiena fino alla gamba.",
  },
  {
    slug: "cruralgia",
    name: "Cruralgia",
    description:
      "Dolore lungo il nervo crurale, che colpisce la parte anteriore della coscia.",
  },
  {
    slug: "meralgia",
    name: "Meralgia",
    description:
      "Disturbo del nervo cutaneo laterale della coscia, con formicolio e dolore nella parte esterna.",
  },
  {
    slug: "lesioni-muscolari",
    name: "Lesioni Muscolari",
    description:
      "Contratture, stiramenti, ematomi e altre lesioni causate da sforzi o traumi durante l'attività fisica.",
  },
];

export const collaborations = [
  {
    category: "Calcio",
    items: ["FC Paradiso", "FC Melide", "FC Ascona", "AS Breganzona"],
  },
  {
    category: "Basket",
    items: ["SAM Massagno", "Lugano Tigers"],
  },
  {
    category: "Hockey",
    items: ["GDT Bellinzona", "Bellinzona Rockets"],
  },
  {
    category: "Studi",
    items: ["FitLab 2.0", "CSM Minusio", "Fisiosana SAGL", "TSBH Paradiso"],
  },
  {
    category: "Resort e Camping",
    items: ["Camping Tamaro Resort", "Miralago Camping & Palmbeach Resort"],
  },
] as const;

export const recognitions = [
  {
    badge: "RME",
    name: "Registro Medicina Empirica",
    description:
      "Certificazione svizzera che garantisce la professionalità dei terapisti che operano con tecniche manuali e naturali, riconosciuta da molte casse malati.",
  },
  {
    badge: "SNE",
    name: "Swiss Natural Therapists Association",
    description:
      "Associazione svizzera che certifica terapisti naturali e complementari, assicurando competenza, etica professionale e aggiornamento continuo.",
  },
] as const;
