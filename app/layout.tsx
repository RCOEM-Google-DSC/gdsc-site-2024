import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";

const font = localFont({ src: "../public/fonts/PSans.ttf", preload: true, variable: "--font-sans" });

export const metadata: Metadata = {
	title: "GDSC RCOEM",
	description: "Website for GDSC RCOEM 2023-2024",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("min-h-screen bg-background font-sans antialiased", font.variable)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
