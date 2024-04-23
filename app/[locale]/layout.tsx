// @shadcn
import { Toaster } from "@/components/ui/toaster";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { NextIntlClientProvider, useMessages } from 'next-intl';


export const metadata: Metadata = {
  title: "Appyenda",
  description: "An easy way to booking services",
};

export default function RootLayout({ children, params: { locale } }: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
