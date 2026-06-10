import type { Project } from '@/types/types';

export const PROJECTS: Project[] = [
  {
    id: 'wander cities',
    title: 'Wander City',
    image: '/assets/projects/wander-logo.webp',
    description:
      "Wander est une carte vivante de Paris (et bientôt d'autres villes) qui rassemble en temps réel les événements culturels de la ville" +
      '- expos, musées, festivals, concerts, ateliers ' +
      '- filtrables par envie, quartier et budget.' +
      ' Sans inscription, sans pub. Conçue comme un compagnon de balade urbaine, avec Vélib, métro, météo et Space Invaders en bonus',
    detailsText:
      "Wander est une application web qui transforme Paris en terrain d'exploration. Une carte interactive rassemble en temps réel les événements culturels de la ville" +
      ' — expos, musées, festivals, concerts, ateliers — agrégés depuis les données ouvertes et filtrables par période, catégorie et zone géographique. Sans inscription, sans pub, sans friction.' +
      "Autour des événements, des couches d'information contextuelle activables à la demande : stations Vélib en temps réel, stations de métro, Space Invaders parisiens, et une météo à l'instant T avec icônes paper cut adaptées au jour et à la nuit." +
      'Stack technique : monorepo pnpm avec une API NestJS et un front React 19 / Vite en TypeScript strict. La carte utilise MapLibre GL JS avec un style aquarelle Maptiler et des marqueurs PNG personnalisés en 3D paper cut. Côté état : Zustand pour la persistance de la vue, TanStack Query pour la synchronisation des données avec refetch automatique au déplacement de la carte (debounce 800ms). Cache Redis sur Upstash pour la météo. Tests Jest avec couverture >90%, CI GitHub Actions, Husky en pre-commit.' +
      'Déploiement : front sur Vercel, API sur Railway, domaine wandercity.fr.' +
      "Roadmap : agent IA via l'API Claude pour suggérer des parcours en langage naturel, intégration de nouvelles sources (Street Art Cities, musées nationaux), et extension à d'autres villes." +
      'Stack technique : monorepo pnpm avec une API NestJS et un front React 19 / Vite en TypeScript strict. La carte utilise MapLibre GL JS avec un style aquarelle Maptiler et des marqueurs PNG personnalisés en 3D paper cut. Côté état : Zustand pour la persistance de la vue, TanStack Query pour la synchronisation des données avec refetch automatique au déplacement de la carte (debounce 800ms). Cache Redis sur Upstash pour la météo. Tests Jest avec couverture >90%, CI GitHub Actions, Husky en pre-commit.' +
      'Déploiement : front sur Vercel, API sur Railway, domaine wandercity.fr.' +
      "Roadmap : agent IA via l'API Claude pour suggérer des parcours en langage naturel, intégration de nouvelles sources (Street Art Cities, musées nationaux), et extension à d'autres villes.",
    href: 'https://wandercity.fr/',
    alt: 'Wander City logo',
    technologies: [
      'nestjs',
      'reactjs',
      'tailwindcss',
      'typescript',
      'docker',
      'github actions',
      'redis',
      'upstash',
      'railway',
      'vercel',
    ],
    detailsPics: {
      mobile: [
        '/assets/preview/wander/mobile/wander-prev-0.webp',
        '/assets/preview/wander/mobile/wander-prev-1.webp',
        '/assets/preview/wander/mobile/wander-prev-2.webp',
        '/assets/preview/wander/mobile/wander-prev-3.webp',
        '/assets/preview/wander/mobile/wander-prev-4.webp',
      ],
      web: [
        '/assets/preview/wander/web/wander-prev-5.webp',
        '/assets/preview/wander/web/wander-prev-6.webp',
        '/assets/preview/wander/web/wander-prev-7.webp',
        '/assets/preview/wander/web/wander-prev-8.webp',
      ],
    },
  },
  {
    id: 'nar',
    title: 'Nar',
    image: '/assets/projects/nar-logo.webp',
    description:
      'Nar est une application web de suivi corporel et métabolique.' +
      ' Elle permet à chaque utilisateur d’enregistrer ses mensurations (poids, tour de taille, hanches, etc.),' +
      ' de visualiser son évolution dans le temps et d’obtenir automatiquement son métabolisme de base (BMR) et sa dépense énergétique quotidienne (TDEE) selon son niveau d’activité' +
      'L’objectif : centraliser ses données de composition corporelle, suivre sa progression mois après mois et disposer d’indicateurs fiables pour ajuster son alimentation ou son entraînement.',
    href: 'https://nar-ochre.vercel.app/auth',
    alt: 'Nar logo',
    technologies: [
      'nestjs',
      'postgresql',
      'prisma',
      'reactjs',
      'material-ui',
      'typescript',
      'vercel',
      'railway',
      'neon',
    ],
    detailsPics: {
      web: [
        '/assets/preview/nar/web/nar-prev-0.webp',
        '/assets/preview/nar/web/nar-prev-1.webp',
        '/assets/preview/nar/web/nar-prev-2.webp',
        '/assets/preview/nar/web/nar-prev-3.webp',
        '/assets/preview/nar/web/nar-prev-4.webp',
      ],
      mobile: [],
    },
    detailsText:
      'Nar est une application web de suivi corporel que j’ai conçue pour aider à suivre sa composition physique dans le temps.' +
      ' L’utilisateur enregistre ses mensurations, consulte son historique et visualise sa progression via un tableau de bord et des graphiques.' +
      ' L’application calcule aussi automatiquement le métabolisme de base (BMR) et la dépense énergétique quotidienne (TDEE) à partir du profil et du niveau d’activité.' +
      'Côté technique, le projet est structuré en monorepo avec un frontend React et une API NestJS connectée à PostgreSQL.' +
      ' L’authentification repose sur JWT, les mots de passe sont hachés, et chaque utilisateur n’accède qu’à ses propres données.' +
      ' Les mesures déclenchent un recalcul automatique des indicateurs métaboliques.' +
      'Nar manipule des données personnelles sensibles (mensurations, activité physique).' +
      ' J’ai donc intégré dès la conception des principes de protection des données : accès restreint par compte, validation des entrées, stockage sécurisé et architecture pensée pour limiter l’exposition des informations.' +
      ' L’application pose les bases d’une conformité RGPD (minimisation des données, isolation par utilisateur, suppression liée au compte).' +
      'Déploiement : front sur Vercel, API sur Railway, domaine nar-ochre.vercel.app.' +
      'Roadmap : intégration de nouvelles sources de données (glycémie, fréquence cardiaque, etc.),',
  },
  {
    id: 'hear-me-out',
    title: 'Hear me out',
    image: '/assets/projects/hmt-logo.webp',
    description:
      "Hear Me Out est une PWA de découverte et d'écoute de podcasts." +
      " Recherche par mot-clé, filtres par langues, catégorie et durée, lecture directement dans l'app avec persistance des écoutes." +
      ' Installable sur mobile et desktop, utilisable hors connexion sur les écrans déjà visités',
    href: 'https://hear-me-out-nine.vercel.app/',
    alt: 'Hear me out logo',
    technologies: ['reactjs', 'material-ui', 'typescript', 'vercel'],
    detailsText:
      "Hear Me Out est une Progressive Web App dédiée à la découverte et à l'écoute de podcasts. L'utilisateur recherche par mot-clé, filtre les résultats par catégorie et durée, puis écoute directement dans l'application. Aucune inscription requise" +
      'Fonctionnalités : recherche dans le catalogue Listen Notes, filtres combinables (catégorie, durée), lecteur audio HTML5 natif, persistance locale des écoutes en cours et des préférences, installation en PWA sur mobile et desktop.' +
      "Stack technique : React + TypeScript avec Vite comme bundler, Material UI pour le système de composants, vite-plugin-pwa pour la configuration du service worker et du manifest. Architecture 100% front : l'application interroge directement l'API Listen Notes sans backend intermédiaire. Persistance via le storage navigateur." +
      "Caractéristiques PWA : installable sur l'écran d'accueil mobile et desktop, mise en cache des assets pour un chargement instantané, fonctionnement partiel hors connexion sur les contenus déjà consultés." +
      'Déploiement : hébergé sur Vercel, en production.',
    detailsPics: {
      mobile: [
        '/assets/preview/hear-me-out/web/hear-me-out-prev-3.webp',
        '/assets/preview/hear-me-out/web/hear-me-out-prev-4.webp',
        '/assets/preview/hear-me-out/web/hear-me-out-prev-5.webp',
      ],
      web: [
        '/assets/preview/hear-me-out/mobile/hear-me-out-prev-0.webp',
        '/assets/preview/hear-me-out/mobile/hear-me-out-prev-1.webp',
        '/assets/preview/hear-me-out/mobile/hear-me-out-prev-2.webp',
      ],
    },
  },
  {
    id: 'portfolio',
    title: 'Ce portfolio',
    image: '/assets/projects/bee-logo.webp',
    description:
      'Site personnel animé, thèmes multiples, parallax, responsive et mise en place avec claude.',
    href: 'https://github.com/',
    alt: 'Ön Air Corp logo',
    technologies: ['nextjs', 'scss', 'typescript', 'cursor', 'claude'],
    detailsText:
      'Ce portfolio est un site personnel animé, thèmes multiples, parallax, responsive et mise en place avec claude.',
  },
];

export const SLIDE_COUNT = 1 + PROJECTS.length;
