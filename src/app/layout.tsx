import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { DashboardProvider } from '@/context/dashboard-provider';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Mac-Out Recommerce',
  description: 'Dale una segunda vida a la tecnología. Descubre tu Apple reacondicionado en Mac-Out.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-body antialiased">
        <DashboardProvider>
          {children}
          <Toaster />
        </DashboardProvider>
      </body>
    </html>
  );
}
