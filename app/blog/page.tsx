"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import {
	fadeInUp,
	staggerContainer,
	heroParallax,
	parallaxFadeIn,
} from "@/lib/animations";

export default function BlogPage() {
	const [activeCategory, setActiveCategory] = useState("All");
	const heroRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});

	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
	const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

	const categories = useMemo(() => {
		const cats = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));
		return ["All", ...cats];
	}, []);

	const filteredPosts = useMemo(() => {
		if (activeCategory === "All") return BLOG_POSTS;
		return BLOG_POSTS.filter((p) => p.category === activeCategory);
	}, [activeCategory]);

	return (
		<>
			{/* Parallax Hero */}
			<section
				ref={heroRef}
				className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
			>
				{/* Animated gradient mesh background */}
				<motion.div
					className="absolute inset-0 z-0"
					style={{ y: bgY, scale: bgScale }}
				>
					<div
						className="absolute inset-0"
						style={{
							background: `
								radial-gradient(ellipse 80% 60% at 20% 30%, rgba(0,212,255,0.25) 0%, transparent 60%),
								radial-gradient(ellipse 60% 80% at 80% 70%, rgba(0,255,170,0.2) 0%, transparent 60%),
								radial-gradient(ellipse 90% 50% at 50% 50%, rgba(0,212,255,0.1) 0%, transparent 70%),
								radial-gradient(circle at 60% 20%, rgba(0,255,170,0.15) 0%, transparent 50%)
							`,
						}}
					/>
				</motion.div>

				{/* Overlay */}
				<div className="blog-hero-overlay absolute inset-0 z-1" />

				{/* Content */}
				<motion.div
					className="relative z-10 text-center px-4"
					initial="hidden"
					animate="visible"
					variants={heroParallax}
				>
					<motion.span
						className="inline-block px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-widest mb-6"
						variants={parallaxFadeIn}
					>
						Engineering Blog
					</motion.span>
					<motion.h1
						className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-6"
						variants={parallaxFadeIn}
					>
						Thoughts & Contributions
					</motion.h1>
					<motion.p
						className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
						variants={parallaxFadeIn}
					>
						Deep dives into engineering problems, open-source
						contributions, and technical decisions.
					</motion.p>
				</motion.div>
			</section>

			{/* Category Filter Pills */}
			<section className="py-12 bg-background">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap justify-center gap-3 mb-12">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setActiveCategory(cat)}
								className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
									activeCategory === cat
										? "bg-neon-blue text-deep-navy"
										: "bg-white/5 text-muted-foreground hover:bg-white/10"
								}`}
							>
								{cat}
							</button>
						))}
					</div>

					{/* Blog Grid */}
					{filteredPosts.length === 0 ? (
						<div className="text-center py-20">
							<p className="text-muted-foreground text-lg">
								No posts found in this category.
							</p>
						</div>
					) : (
						<motion.div
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.1 }}
							variants={staggerContainer}
						>
							{filteredPosts.map((post, index) => (
								<motion.div
									key={post.slug}
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
						</motion.div>
					)}
				</div>
			</section>
		</>
	);
}
