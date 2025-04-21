// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { PrimeReactProvider } from 'primereact/api';

export const metadata: Metadata = {
  title: 'SK Books | AI-Powered Future',
  description: 'Books authored by Sagar Khatri on AI, Cybersecurity, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
