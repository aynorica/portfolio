"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
	{ name: "Blog", href: "/blog" },
	{ name: "Education", href: "#education" },
	{ name: "Contact", href: "#contact" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();
	const anchorLinks = navigation.filter((item) => item.href.startsWith("#"));
	const activeSection = useScrollSpy(
		anchorLinks.map((item) => item.href.replace("#", "")),
		120,
	);

	const isHome = pathname === "/" || pathname === "";

	const resolveHref = (href: string) => {
		if (href.startsWith("#") && !isHome) {
			return `/${href}`;
		}
		return href;
	};

	// For anchor links on non-home pages, we need a full page navigation
	// (not Next.js client-side routing) so the browser actually navigates
	// to the homepage and scrolls to the section.
	const needsFullNav = (href: string) =>
		href.startsWith("#") && !isHome;

	const isActive = (item: { href: string }) => {
		if (item.href.startsWith("#")) {
			return activeSection === item.href.replace("#", "");
		}
		return pathname.startsWith(item.href);
	};

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
					{navigation.map((item) => {
						const href = resolveHref(item.href);
						const className = `text-sm font-semibold tracking-wide transition-all hover:text-neon-blue relative group ${
							isActive(item)
								? "text-neon-blue"
								: "text-muted-foreground"
						}`;
						const underline = (
							<span
								className={`absolute -bottom-1 left-0 h-0.5 bg-neon-blue transition-all duration-300 ${
									isActive(item)
										? "w-full"
										: "w-0 group-hover:w-full"
								}`}
							/>
						);

						if (needsFullNav(item.href)) {
							return (
								<a key={item.name} href={href} className={className}>
									{item.name}
									{underline}
								</a>
							);
						}

						return (
							<Link key={item.name} href={href} className={className}>
								{item.name}
								{underline}
							</Link>
						);
					})}
				</div>

				<div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
					<a
						href="https://docs.google.com/document/d/1Z9If1DGKY1XZM26amY69JA15lqiQ6tnCTtXhbywm_ks/edit?tab=t.0"
						target="_blank"
						rel="noopener noreferrer"
						className="px-5 py-2.5 bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-navy font-bold rounded-full text-sm tracking-wide hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]"
					>
						Resume
					</a>
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
							{navigation.map((item) => {
								const href = resolveHref(item.href);
								const cls = `block rounded-lg px-3 py-2 text-base font-medium hover:bg-accent ${
									isActive(item)
										? "text-primary bg-accent/50"
										: ""
								}`;

								if (needsFullNav(item.href)) {
									return (
										<a
											key={item.name}
											href={href}
											className={cls}
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.name}
										</a>
									);
								}

								return (
									<Link
										key={item.name}
										href={href}
										className={cls}
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.name}
									</Link>
								);
							})}
							<a
								href="https://docs.google.com/document/d/1Z9If1DGKY1XZM26amY69JA15lqiQ6tnCTtXhbywm_ks/edit?tab=t.0"
								target="_blank"
								rel="noopener noreferrer"
								className="block mx-3 my-2 px-4 py-2.5 bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-navy font-bold rounded-full text-center text-sm tracking-wide shadow-[0_0_15px_rgba(0,212,255,0.3)]"
								onClick={() => setMobileMenuOpen(false)}
							>
								Resume
							</a>
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
