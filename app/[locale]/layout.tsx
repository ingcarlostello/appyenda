// @shadcn
import { Toaster } from "@/components/ui/toaster";

import { ThemeProvider } from "@/components/theme-provider";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
  title: "Appyenda",
  description: "An easy way to booking services",
};

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
	const messages = useMessages();
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					themes={[
						"orange",
						"darkorange",
						"blue",
						"darkblue",
						"green",
						"darkgreen",
						"light",
						"dark",
					]}
					disableTransitionOnChange
				>
					<NextIntlClientProvider messages={messages}>
						{children}
						<Toaster />
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
