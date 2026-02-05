import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const archivo = Archivo({
	subsets: ["latin"],
	variable: "--font-archivo",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
	title: "Amir Deilamizadeh | AI Engineer & Full-Stack Architect",
	description:
		"Portfolio of Amir Deilamizadeh - Lead Full-Stack Developer specializing in AI Agent Architecture, Next.js 16, and Fintech systems.",
	keywords: [
		"AI Engineer",
		"Full-Stack Architect",
		"Next.js 16",
		"Tailwind v4",
		"LangGraph",
		"Fintech",
		"Trading Systems",
		"Amir Deilamizadeh",
	],
	authors: [{ name: "Amir Deilamizadeh" }],
	openGraph: {
		title: "Amir Deilamizadeh | AI Engineer & Full-Stack Architect",
		description:
			"6+ years of experience building high-stakes Fintech and AI platforms.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${archivo.variable} ${spaceGrotesk.variable}`}
		>
			<body className="font-body antialiased">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
