import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const font = localFont({ src: "../public/fonts/PSans.ttf", preload: true, variable: "--font-sans" });

export const metadata: Metadata = {
	title: "GDSC RCOEM",
	description: "Website for GDSC RCOEM 2023-2024",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cn("min-h-screen bg-background font-sans antialiased", font.variable)}>{children}</body>
		</html>
	);
}
