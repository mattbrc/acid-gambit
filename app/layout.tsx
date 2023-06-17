// import SupabaseProvider from './supabase-provider';
// import Footer from '@/components/site/Footer';
// import Navbar from '@/components/site/Navbar';
// import { PropsWithChildren } from 'react';
// import 'styles/main.css';

// const meta = {
//   title: 'Next.js Subscription Starter',
//   description: 'Brought to you by Vercel, Stripe, and Supabase.',
//   cardImage: '/og.png',
//   robots: 'follow, index',
//   favicon: '/favicon.ico',
//   url: 'https://subscription-starter.vercel.app',
//   type: 'website'
// };

// export const metadata = {
//   title: meta.title,
//   description: meta.description,
//   cardImage: meta.cardImage,
//   robots: meta.robots,
//   favicon: meta.favicon,
//   url: meta.url,
//   type: meta.type,
//   openGraph: {
//     url: meta.url,
//     title: meta.title,
//     description: meta.description,
//     cardImage: meta.cardImage,
//     type: meta.type,
//     site_name: meta.title
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@vercel',
//     title: meta.title,
//     description: meta.description,
//     cardImage: meta.cardImage
//   }
// };

// export default function RootLayout({
//   // Layouts must accept a children prop.
//   // This will be populated with nested layouts or pages
//   children
// }: PropsWithChildren) {
//   return (
//     <html lang="en">
//       <body className="bg-black loading">
//         <SupabaseProvider>
//           <Navbar />
//           <main
//             id="skip"
//             className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
//           >
//             {children}
//           </main>
//           <Footer />
//         </SupabaseProvider>
//       </body>
//     </html>
//   );
// }

import './globals.css';
import SupabaseProvider from './supabase-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';

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

export const metadata = {
  title: 'Gambit Training App',
  description: 'By ACID GAMBIT'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
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
