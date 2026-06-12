import type { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout/main-layout';
import { ThemeProvider } from '@/components/providers/theme-provider';

import '@/styles/globals.scss';
import { chillax } from './fonts';

const siteName = 'Portfolio - Berk Oner';
const siteDescription = 'Portfolio de Berk Öner, développeur full-stack.';
const siteUrl = 'https://berkoner.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
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
