"use client";

import { EDUCATION, CERTIFICATIONS } from "@/lib/constants";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function EducationSection() {
	return (
		<section id="education" className="py-20 bg-background relative">
			<div className="container mx-auto px-4">
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
							Education & Certs
						</h2>
						<div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
					</motion.div>

					{/* Education Card */}
					<div className="mb-16">
						{EDUCATION.map((edu, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								className="group relative p-8 rounded-3xl bg-card/40 border border-white/5 backdrop-blur-md hover:border-neon-blue/30 transition-all overflow-hidden"
							>
								{/* Decorative Glow */}
								<div className="absolute -right-20 -top-20 w-64 h-64 bg-neon-blue/10 blur-[80px] rounded-full group-hover:bg-neon-blue/20 transition-all" />

								<div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
									<div className="p-4 rounded-2xl bg-neon-blue/10 text-neon-blue shadow-[0_0_15px_rgba(0,212,255,0.2)]">
										<GraduationCap className="w-8 h-8" />
									</div>
									<div className="flex-1">
										<div className="flex flex-wrap justify-between items-start gap-4 mb-4">
											<div>
												<h3 className="text-2xl font-bold group-hover:text-neon-blue transition-colors font-heading mb-1">
													{edu.degree}
												</h3>
												<p className="text-neon-cyan font-bold text-lg">
													{edu.institution}
												</p>
											</div>
											<div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">
												{edu.period}
											</div>
										</div>
										<div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
											<span className="flex items-center gap-2">
												<MapPin className="w-4 h-4 text-neon-blue" />
												{edu.location}
											</span>
											{edu.gpa && (
												<span className="flex items-center gap-2 font-bold text-foreground">
													<Award className="w-4 h-4 text-neon-cyan" />
													GPA: {edu.gpa}
												</span>
											)}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* Certifications Grid */}
					<motion.div variants={fadeInUp}>
						<h3 className="text-2xl font-bold mb-8 flex items-center gap-3 font-heading">
							<Award className="w-6 h-6 text-neon-cyan" />
							Professional Certifications
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{CERTIFICATIONS.map((cert, index) => (
								<motion.div
									key={index}
									whileHover={{ y: -5, scale: 1.02 }}
									className="p-5 rounded-2xl bg-card/40 border border-white/5 backdrop-blur-md hover:border-neon-cyan/30 transition-all flex items-center gap-4 group"
								>
									<div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform">
										<Award className="w-5 h-5 text-neon-cyan" />
									</div>
									<span className="text-sm font-semibold text-foreground/80">
										{cert}
									</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
