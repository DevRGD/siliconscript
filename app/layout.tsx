import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeScript from '@/components/ThemeScript';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://siliconscript.vercel.app'),
  title: {
    default: 'SiliconScript',
    template: '%s | SiliconScript',
  },
  description:
    'A modern tech blog exploring the intersection of hardware and software. Deep dives into coding, architecture, and system design.',
  openGraph: {
    title: 'SiliconScript',
    description: 'Exploring the intersection of hardware and software.',
    url: 'https://siliconscript.vercel.app',
    siteName: 'SiliconScript',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiliconScript',
    description: 'Modern tech blog exploring hardware and software.',
    creator: '@siliconscript',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased transition-colors duration-300">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow bg-bg text-text-primary">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
