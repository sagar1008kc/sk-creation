// src/app/layout.tsx
import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'SK creation',
  description: 'books, shop, and studio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Header />
        <PrimeReactProvider>{children}</PrimeReactProvider>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
