"use client";

import { BLOG_POSTS } from "@/lib/constants";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function BlogPreviewSection() {
	const latestPosts = BLOG_POSTS.slice(0, 3);

	return (
		<section
			id="blog"
			className="py-24 bg-background relative overflow-hidden"
		>
			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					className="max-w-6xl mx-auto"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
					variants={staggerContainer}
				>
					<motion.div
						className="text-center mb-20"
						variants={fadeInUp}
					>
						<h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading tracking-tight">
							Engineering Blog
						</h2>
						<div className="w-32 h-2 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full shadow-[0_0_15px_rgba(0,212,255,0.4)]" />
					</motion.div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{latestPosts.map((post, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								whileHover={{ y: -10 }}
								className="group relative flex flex-col rounded-[2.5rem] bg-card/40 border border-white/5 backdrop-blur-xl overflow-hidden hover:border-neon-blue/30 transition-all duration-500 shadow-2xl"
							>
								<div className="p-10 flex flex-col h-full space-y-6">
									<div className="space-y-4">
										<span className="px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue text-[10px] font-bold uppercase tracking-widest">
											{post.category}
										</span>
										<h3 className="text-2xl font-bold font-heading group-hover:text-neon-blue transition-colors">
											{post.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed line-clamp-3">
											{post.excerpt}
										</p>
									</div>
									<div className="flex flex-wrap gap-2">
										{post.tags.map((tag, i) => (
											<span
												key={i}
												className="px-2 py-0.5 rounded-full bg-white/5 text-white/50 text-[10px] font-medium uppercase tracking-wider"
											>
												{tag}
											</span>
										))}
									</div>
									<div className="pt-6 mt-auto flex items-center justify-between border-t border-white/5">
										<div className="flex items-center gap-4 text-xs text-muted-foreground">
											<span className="flex items-center gap-1.5">
												<Calendar className="w-3.5 h-3.5" />
												{post.date}
											</span>
											<span className="flex items-center gap-1.5">
												<Clock className="w-3.5 h-3.5" />
												{post.readTime}
											</span>
										</div>
										<Link
											href={`/blog/${post.slug}`}
											className="flex items-center gap-2 text-sm font-bold text-neon-blue group-hover:gap-3 transition-all"
										>
											Read More{" "}
											<ArrowRight className="w-4 h-4" />
										</Link>
									</div>
								</div>
							</motion.div>
						))}
					</div>
					<motion.div
						className="text-center mt-16"
						variants={fadeInUp}
					>
						<Link
							href="/blog"
							className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-navy font-bold text-lg shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.5)] transition-all duration-300 hover:scale-105"
						>
							<BookOpen className="w-5 h-5" />
							View All Posts
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
