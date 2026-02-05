"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { PERSONAL_INFO, EMAILJS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				subject: formData.subject,
				message: formData.message,
				to_email: PERSONAL_INFO.email,
			};

			const result = await emailjs.send(
				EMAILJS.SERVICE_ID,
				EMAILJS.TEMPLATE_ID,
				templateParams,
				EMAILJS.PUBLIC_KEY,
			);

			if (result.status === 200) {
				setSubmitStatus("success");
				setFormData({ name: "", email: "", subject: "", message: "" });
				// Reset success message after 5 seconds
				setTimeout(() => setSubmitStatus("idle"), 5000);
			} else {
				throw new Error("Failed to send message");
			}
		} catch (error) {
			console.error("EmailJS Error:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section
			id="contact"
			className="py-20 bg-background relative overflow-hidden"
		>
			{/* Decorative Glow */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					className="max-w-3xl mx-auto"
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
							Get In Touch
						</h2>
						<div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
						<p className="text-muted-foreground mt-6 text-lg max-w-lg mx-auto leading-relaxed">
							Interested in collaborating or have a question?
							I&apos;m currently available for remote
							opportunities.
						</p>
					</motion.div>

					<motion.div
						variants={fadeInUp}
						className="p-8 md:p-12 rounded-[2.5rem] bg-card/40 border border-white/5 backdrop-blur-md shadow-2xl relative"
					>
						<AnimatePresence mode="wait">
							{submitStatus === "success" ? (
								<motion.div
									key="success"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									className="text-center py-12"
								>
									<div className="flex justify-center mb-6">
										<div className="w-20 h-20 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan shadow-[0_0_30px_rgba(0,255,170,0.2)]">
											<CheckCircle className="w-10 h-10" />
										</div>
									</div>
									<h3 className="text-3xl font-bold mb-3 font-heading">
										Message Sent!
									</h3>
									<p className="text-muted-foreground text-lg mb-8">
										I&apos;ll get back to you as soon as
										possible.
									</p>
									<button
										onClick={() => setSubmitStatus("idle")}
										className="px-8 py-3 rounded-full bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all"
									>
										Send Another
									</button>
								</motion.div>
							) : submitStatus === "error" ? (
								<motion.div
									key="error"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									className="text-center py-12"
								>
									<div className="flex justify-center mb-6">
										<div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
											<AlertCircle className="w-10 h-10" />
										</div>
									</div>
									<h3 className="text-3xl font-bold mb-3 font-heading">
										Dispatch Failed
									</h3>
									<p className="text-muted-foreground text-lg mb-8">
										Something went wrong. Please try again
										or use direct email.
									</p>
									<button
										onClick={() => setSubmitStatus("idle")}
										className="px-8 py-3 rounded-full bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all"
									>
										Try Again
									</button>
								</motion.div>
							) : (
								<motion.form
									key="form"
									onSubmit={handleSubmit}
									className="space-y-8"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
										<div className="space-y-2">
											<label
												htmlFor="name"
												className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1"
											>
												Name
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-neon-blue focus:outline-none focus:ring-4 focus:ring-neon-blue/10 transition-all font-medium placeholder:text-muted-foreground/30"
												placeholder="Alex Thompson"
											/>
										</div>

										<div className="space-y-2">
											<label
												htmlFor="email"
												className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1"
											>
												Email
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-neon-blue focus:outline-none focus:ring-4 focus:ring-neon-blue/10 transition-all font-medium placeholder:text-muted-foreground/30"
												placeholder="alex@example.com"
											/>
										</div>
									</div>

									<div className="space-y-2">
										<label
											htmlFor="subject"
											className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1"
										>
											Subject
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											required
											className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-neon-blue focus:outline-none focus:ring-4 focus:ring-neon-blue/10 transition-all font-medium placeholder:text-muted-foreground/30"
											placeholder="Partnership Opportunity"
										/>
									</div>

									<div className="space-y-2">
										<label
											htmlFor="message"
											className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1"
										>
											Message
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											required
											rows={5}
											className="w-full px-6 py-4 rounded-3xl bg-white/5 border border-white/10 focus:border-neon-blue focus:outline-none focus:ring-4 focus:ring-neon-blue/10 transition-all font-medium resize-none placeholder:text-muted-foreground/30"
											placeholder="Tell me about your project..."
										/>
									</div>

									<button
										type="submit"
										disabled={isSubmitting}
										className="group relative w-full py-5 px-8 bg-neon-blue text-deep-navy rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_25px_rgba(0,212,255,0.4)]"
									>
										<div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity bg-[length:200%_100%] group-hover:animate-gradient-x" />
										<div className="relative z-10 flex items-center justify-center gap-3">
											{isSubmitting ? (
												<>
													<div className="w-5 h-5 border-2 border-deep-navy border-t-transparent rounded-full animate-spin" />
													<span>Transmitting...</span>
												</>
											) : (
												<>
													<Send className="w-5 h-5" />
													<span>Launch Message</span>
												</>
											)}
										</div>
									</button>
								</motion.form>
							)}
						</AnimatePresence>
					</motion.div>

					{/* Direct Contact */}
					<motion.div
						variants={fadeInUp}
						className="mt-16 text-center"
					>
						<p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mb-6">
							Direct Communication
						</p>
						<div className="flex flex-wrap justify-center gap-6">
							<a
								href={`mailto:${PERSONAL_INFO.email}`}
								className="group flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-blue/30 transition-all hover:scale-105"
							>
								<div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
									<Mail className="w-6 h-6" />
								</div>
								<div className="text-left">
									<p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
										Email
									</p>
									<p className="font-bold text-foreground/80">
										{PERSONAL_INFO.email}
									</p>
								</div>
							</a>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
