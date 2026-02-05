"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
	{ name: "About", href: "#about" },
	{ name: "Tech Stack", href: "#tech-stack" },
	{ name: "Experience", href: "#experience" },
	{ name: "Projects", href: "#projects" },
	{ name: "Education", href: "#education" },
	{ name: "Contact", href: "#contact" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const activeSection = useScrollSpy(
		navigation.map((item) => item.href.replace("#", "")),
		120,
	);

	return (
		<header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
			<nav
				className="mx-auto flex items-center justify-between px-6 py-4 rounded-full border border-white/10 bg-background/60 backdrop-blur-xl shadow-2xl"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link
						href="/"
						className="-m-1.5 p-1.5 group flex items-center gap-2"
					>
						<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-cyan flex items-center justify-center font-bold text-deep-navy shadow-[0_0_15px_rgba(0,212,255,0.4)] group-hover:scale-110 transition-transform">
							A
						</div>
						<span className="text-xl font-bold font-heading tracking-tighter">
							Aynorica
						</span>
					</Link>
				</div>

				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						<span className="sr-only">Toggle menu</span>
						{mobileMenuOpen ? (
							<X className="h-6 w-6" aria-hidden="true" />
						) : (
							<Menu className="h-6 w-6" aria-hidden="true" />
						)}
					</button>
				</div>

				<div className="hidden lg:flex lg:gap-x-10">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className={`text-sm font-semibold tracking-wide transition-all hover:text-neon-blue relative group ${
								activeSection === item.href.replace("#", "")
									? "text-neon-blue"
									: "text-muted-foreground"
							}`}
						>
							{item.name}
							<span
								className={`absolute -bottom-1 left-0 h-0.5 bg-neon-blue transition-all duration-300 ${
									activeSection === item.href.replace("#", "")
										? "w-full"
										: "w-0 group-hover:w-full"
								}`}
							/>
						</Link>
					))}
				</div>

				<div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
					<ThemeToggle />
				</div>
			</nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						className="lg:hidden border-t border-border"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
					>
						<div className="space-y-1 px-4 pb-3 pt-2">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={`block rounded-lg px-3 py-2 text-base font-medium hover:bg-accent ${
										activeSection ===
										item.href.replace("#", "")
											? "text-primary bg-accent/50"
											: ""
									}`}
									onClick={() => setMobileMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
							<div className="px-3 py-2">
								<ThemeToggle />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
