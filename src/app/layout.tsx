// src/app/layout.tsx
import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'smind business',
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
        <Footer />
      </body>
    </html>
  );
}
