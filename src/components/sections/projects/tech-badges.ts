const BADGES: Record<string, string> = {
  nestjs:
    'https://img.shields.io/badge/-NestJS-e0234e?style=flat-square&logo=nestjs&logoColor=white',
  reactjs:
    'https://img.shields.io/badge/-React Js-45c8a2?style=flat-square&logo=react&logoColor=blue',
  redis: 'https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=redis&logoColor=white',
  tailwindcss:
    'https://img.shields.io/badge/-Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white',
  typescript:
    'https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white',
  docker:
    'https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white',
  'github actions':
    'https://img.shields.io/badge/-GitHub Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white',
  'material-ui':
    'https://img.shields.io/badge/-Material UI-007FFF?style=flat-square&logo=mui&logoColor=white',
  scss: 'https://img.shields.io/badge/-SCSS-CC6699?style=flat-square&logo=sass&logoColor=white',
  postgresql:
    'https://img.shields.io/badge/-PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white',
  prisma:
    'https://img.shields.io/badge/-Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white',
  neon: 'https://img.shields.io/badge/-Neon-000000?style=flat-square&logo=neon&logoColor=white',
  render:
    'https://img.shields.io/badge/-Render-000000?style=flat-square&logo=render&logoColor=white',
  upstash:
    'https://img.shields.io/badge/-Upstash-000000?style=flat-square&logo=upstash&logoColor=white',
  railway:
    'https://img.shields.io/badge/-Railway-000000?style=flat-square&logo=railway&logoColor=white',
  vercel:
    'https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white',
  cursor:
    'https://img.shields.io/badge/-Cursor-000000?style=flat-square&logo=cursor&logoColor=blue',
  claude:
    'https://img.shields.io/badge/-Claude-000000?style=flat-square&logo=claude&logoColor=orange',
};

export const techBadgeUrl = (tech: string) => {
  const key = tech.toLowerCase().trim();
  return (
    BADGES[key] ?? `https://img.shields.io/badge/-${encodeURIComponent(tech)}-555?style=flat-square`
  );
};
