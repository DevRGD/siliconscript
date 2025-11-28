import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
