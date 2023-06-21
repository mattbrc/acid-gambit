import './globals.css';
import SupabaseProvider from './supabase-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import Head from 'next/head';

// import { PropsWithChildren } from 'react';

// const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading'
});

const meta = {
  title: 'Gambit Training App',
  description: 'By Acid Gambit',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: 'https://app.acidgambit.com',
  type: 'website'
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  // cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    // cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vercel',
    title: meta.title,
    description: meta.description
    // cardImage: meta.cardImage
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body
        className={cn(
          'bg-background font-sans antialiased min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <SupabaseProvider>
          {children}
          <Toaster />
        </SupabaseProvider>
      </body>
    </html>
  );
}
// took out from body classname: min-h-screen
