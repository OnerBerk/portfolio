export type TimelineStep = {
  year: number;
  title: string;
  description: string;
  images?: string[];
  dateLabel?: string;
};

export const FIRST_EVENT_YEAR = 2015;

export const PAST_LIFE_STEP: TimelineStep = {
  year: 0,
  dateLabel: 'Avant 2015',
  title: 'Une autre fréquence',
  description:
    "Une autre vie, dans le commerce. Postes à responsabilité, gestion d'équipe, négociation. Le code n'était qu'une curiosité.",
};

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    year: 2015,
    title: ' Black Cat, premier signal',
    description:
      "Cinq ans à la tête de Black Cat, mon épicerie fine à Paris. De l'étude de marché au montage de la société, du sourcing produits à la fidélisation clients. J'y ai construit une vraie autonomie : décider, négocier, gérer, arbitrer. Tout, tous les jours.",
    images: [
      '/assets/black-cat/bc.webp',
      '/assets/black-cat/bc1.webp',
      '/assets/black-cat/bc2.webp',
      '/assets/black-cat/bc4.webp',
    ],
  },
  {
    year: 2020,
    title: 'Changement de bande',
    description:
      'Le code, longtemps une curiosité, devient un vrai cap. Je quitte le commerce pour me former au développement.',
  },
  {
    year: 2021,
    title: 'Joza-IT, premières ondes',
    description:
      "À cheval entre l'alternance et le CDI. Je travaille essentiellement sur des projets internes — un site web, un blog d'équipe — en React, Next.js, TypeScript et SCSS.",
  },
  {
    year: 2022,
    title: 'Light and Shadow - Mobilier de France, en immersion',
    description:
      "Mission longue chez Mobilier de France jusqu'à fin 2023. Développement d'une application de configuration produits et d'une app client pour la mise en panier. Stack React, TypeScript, SCSS côté front, et incursions back en Java Spring Boot.",
  },
  {
    year: 2023,
    title: 'Sharelock, pleine fréquence',
    description:
      "Sharelock, c'est trois ans dans la squad B2B and more, prise à son démarrage. Tout à construire, et on s'y est mis. J'ai contribué aux polices, au suivi des sinistres, au debug quotidien, à l'authentification par QR code, à la boutique, à la gamification de points, à la gestion des commissions. Stack NestJS, PostgreSQL, React, React Native, TypeScript strict. Une vraie aventure produit, jusqu'en mars 2026.",
  },
];

export const stepForYear = (year: number) => TIMELINE_STEPS.find((step) => step.year === year);

export const detailForYear = (year: number): TimelineStep | null => {
  if (year < FIRST_EVENT_YEAR) return PAST_LIFE_STEP;
  return stepForYear(year) ?? null;
};
