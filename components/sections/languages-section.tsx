"use client";

import { LANGUAGES } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function LanguagesSection() {
	return (
		<section
			id="languages"
			className="py-20 bg-background relative overflow-hidden"
		>
			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					className="max-w-4xl mx-auto"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={staggerContainer}
				>
					{/* Section Title */}
					<motion.div
						className="text-center mb-16"
						variants={fadeInUp}
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading tracking-tight">
							Languages
						</h2>
						<div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
					</motion.div>

					{/* Languages Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{LANGUAGES.map((language, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								whileHover={{ y: -5, scale: 1.05 }}
								className="flex flex-col items-center p-8 rounded-3xl bg-card/40 border border-white/5 backdrop-blur-md hover:border-neon-blue/30 transition-all group"
							>
								{/* Circular Progress */}
								<div className="relative w-36 h-36 mb-6">
									<svg className="w-full h-full transform -rotate-90">
										<circle
											cx="72"
											cy="72"
											r="64"
											stroke="currentColor"
											strokeWidth="8"
											fill="none"
											className="text-white/5"
										/>
										<motion.circle
											cx="72"
											cy="72"
											r="64"
											stroke="url(#langGradient)"
											strokeWidth="8"
											fill="none"
											strokeLinecap="round"
											initial={{
												strokeDashoffset:
													2 * Math.PI * 64,
											}}
											whileInView={{
												strokeDashoffset:
													2 *
													Math.PI *
													64 *
													(1 - language.level / 100),
											}}
											transition={{
												duration: 1.5,
												ease: "easeOut",
											}}
											strokeDasharray={`${2 * Math.PI * 64}`}
										/>
										<defs>
											<linearGradient
												id="langGradient"
												x1="0%"
												y1="0%"
												y2="100%"
												x2="100%"
											>
												<stop
													offset="0%"
													stopColor="#00D4FF"
												/>
												<stop
													offset="100%"
													stopColor="#00FFAA"
												/>
											</linearGradient>
										</defs>
									</svg>
									<div className="absolute inset-0 flex flex-col items-center justify-center">
										<span className="text-3xl font-bold group-hover:text-neon-blue transition-colors">
											{language.level}%
										</span>
									</div>
								</div>

								{/* Language Info */}
								<h3 className="text-xl font-bold mb-1 font-heading group-hover:text-neon-blue transition-colors">
									{language.name}
								</h3>
								<p className="text-sm font-bold text-neon-cyan uppercase tracking-widest">
									{language.proficiency}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
