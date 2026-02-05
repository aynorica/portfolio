import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-white/5 bg-deep-navy relative overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />

			<div className="container mx-auto px-4 py-12">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="flex flex-col items-center md:items-start gap-2">
						<div className="text-xl font-bold font-heading tracking-tighter">
							Aynorica
						</div>
						<div className="text-sm text-muted-foreground">
							© {currentYear} Amir Deilamizadeh. Crafted with
							precision.
						</div>
					</div>

					<div className="flex gap-6">
						{SOCIAL_LINKS.map((social, index) => (
							<Link
								key={index}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-neon-blue hover:border-neon-blue/30 transition-all hover:scale-110"
								aria-label={social.platform}
							>
								{social.platform === "GitHub" && (
									<Github className="h-5 w-5" />
								)}
								{social.platform === "LinkedIn" && (
									<Linkedin className="h-5 w-5" />
								)}
								{social.platform === "Email" && (
									<Mail className="h-5 w-5" />
								)}
							</Link>
						))}
					</div>

					<div className="text-right flex flex-col items-center md:items-end gap-1">
						<div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
							Tech Stack
						</div>
						<div className="text-sm font-semibold text-foreground/80">
							Next.js 16 • Tailwind v4 • Three.js
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
