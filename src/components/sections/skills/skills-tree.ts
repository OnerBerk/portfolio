export type SkillNode = {
  label: string;
  level?: 'notions';
  children?: SkillNode[];
};

export const SKILLS_TREE: SkillNode[] = [
  {
    label: 'Languages',
    children: [{ label: 'JavaScript / TypeScript' }, { label: 'Java', level: 'notions' }],
  },
  {
    label: 'Web',
    children: [
      {
        label: 'Front',
        children: [
          { label: 'React.js' },
          { label: 'Next.js' },
          {
            label: 'State manager',
            children: [{ label: 'Redux Toolkit' }, { label: 'Zustand' }],
          },
          {
            label: 'Test',
            children: [{ label: 'TestCafe' }],
          },
        ],
      },
      {
        label: 'Back',
        children: [
          { label: 'NestJS' },
          { label: 'Node / Express' },
          { label: 'Spring Boot', level: 'notions' },
          {
            label: 'Test',
            children: [{ label: 'Jest' }],
          },
        ],
      },
      {
        label: 'Base de données',
        children: [
          { label: 'PostgreSQL' },
          { label: 'MongoDB' },
          { label: 'Redis' },
          {
            label: 'ORM / ODM',
            children: [
              { label: 'Prisma' },
              { label: 'Mongoose' },
              { label: 'Flyway', level: 'notions' },
            ],
          },
        ],
      },
      {
        label: 'Style',
        children: [{ label: 'MUI' }, { label: 'Tailwind' }, { label: 'SCSS / CSS' }],
      },
    ],
  },
  {
    label: 'Mobile',
    children: [{ label: 'React Native' }],
  },
  {
    label: 'CI/CD & Outils',
    children: [{ label: 'GitHub Actions' }, { label: 'Docker' }, { label: 'Husky' }],
  },
  {
    label: 'Versioning',
    children: [{ label: 'Git' }],
  },
];
