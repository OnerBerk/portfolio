import type { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout/main-layout';
import { ThemeProvider } from '@/components/providers/theme-provider';

import '@/styles/globals.scss';
import { chillax } from './fonts';

const siteName = 'Portfolio - Berk Oner';
const siteDescription = 'Portfolio personnel de Berk Oner, actuellement en migration vers Next.js.';
const siteUrl = 'https://berkoner.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
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
    <html lang="fr" suppressHydrationWarning>
      <body className={chillax.className}>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
