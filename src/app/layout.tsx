import type { Metadata } from 'next';
import '@/styles/globals.scss';

const siteName = 'Portfolio - Berk Oner';
const siteDescription = 'Portfolio personnel de Berk Oner, actuellement en migration vers Next.js.';
const siteUrl = 'https://berkoner.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
