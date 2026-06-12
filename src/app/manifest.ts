import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portfolio - Berk Öner',
    short_name: 'Berk Öner',
    description: 'Portfolio de Berk Öner, développeur full-stack.',
    start_url: '/',
    display: 'standalone',
    background_color: '#e2e1dd',
    theme_color: '#152d3c',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
