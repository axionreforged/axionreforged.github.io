import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Load font without using className
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Shef Scholars - Competitive Math Academy',
  description: 'Join the premier math competition program for students aged 14-19. Learn from IMO medalists and boost your math skills!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-50 font-sans">{children}</body>
    </html>
  );
}