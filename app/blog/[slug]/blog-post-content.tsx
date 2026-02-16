"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import type { BlogPost } from "@/types";
import { fadeInUp, staggerContainer, parallaxFadeIn } from "@/lib/animations";

interface BlogPostContentProps {
	post: BlogPost;
	prevPost: BlogPost | null;
	nextPost: BlogPost | null;
}

export default function BlogPostContent({
	post,
	prevPost,
	nextPost,
}: BlogPostContentProps) {
	const heroRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});

	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
	const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

	return (
		<>
			{/* Parallax Hero */}
			<section
				ref={heroRef}
				className="relative min-h-[60vh] flex items-end overflow-hidden"
			>
				{/* Decorative gradient background */}
				<motion.div
					className="absolute inset-0 z-0"
					style={{ y: bgY, scale: bgScale }}
				>
					<div
						className="absolute inset-0"
						style={{
							background: `
								radial-gradient(ellipse 70% 50% at 30% 40%, rgba(0,212,255,0.3) 0%, transparent 60%),
								radial-gradient(ellipse 50% 70% at 70% 60%, rgba(0,255,170,0.2) 0%, transparent 60%),
								radial-gradient(ellipse 80% 40% at 50% 80%, rgba(0,212,255,0.15) 0%, transparent 70%)
							`,
						}}
					/>
				</motion.div>

				{/* Overlay */}
				<div className="blog-hero-overlay absolute inset-0 z-1" />

				{/* Content */}
				<motion.div
					className="relative z-10 w-full max-w-3xl mx-auto px-4 pb-16 pt-32"
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
				>
					<motion.div variants={parallaxFadeIn}>
						<Link
							href="/blog"
							className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-blue transition-colors mb-8"
						>
							<ArrowLeft className="w-4 h-4" />
							Back to Blog
						</Link>
					</motion.div>

					<motion.span
						className="inline-block px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue text-[10px] font-bold uppercase tracking-widest mb-4"
						variants={parallaxFadeIn}
					>
						{post.category}
					</motion.span>

					<motion.h1
						className="text-4xl md:text-6xl font-bold font-heading tracking-tighter mb-6"
						variants={parallaxFadeIn}
					>
						{post.title}
					</motion.h1>

					<motion.div
						className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
						variants={parallaxFadeIn}
					>
						<span className="flex items-center gap-1.5">
							<Calendar className="w-4 h-4" />
							{post.date}
						</span>
						<span className="flex items-center gap-1.5">
							<Clock className="w-4 h-4" />
							{post.readTime}
						</span>
						<span className="flex items-center gap-1.5">
							<Tag className="w-4 h-4" />
							{post.tags.join(", ")}
						</span>
					</motion.div>
				</motion.div>
			</section>

			{/* Article Content */}
			<article className="blog-prose max-w-3xl mx-auto px-4 py-16">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.05 }}
					variants={staggerContainer}
				>
					{post.content.map((section, index) => (
						<motion.div
							key={index}
							variants={fadeInUp}
							className="mb-12"
						>
							<h2>{section.heading}</h2>
							<p>{section.body}</p>

							{section.code && (
								<div className="my-6">
									<div className="text-xs font-bold uppercase tracking-widest text-neon-blue mb-2">
										{section.code.language}
									</div>
									<pre>
										<code>{section.code.content}</code>
									</pre>
								</div>
							)}

							{section.table && (
								<div className="my-6 overflow-x-auto">
									<table>
										<thead>
											<tr>
												{section.table.headers.map(
													(header, i) => (
														<th key={i}>
															{header}
														</th>
													),
												)}
											</tr>
										</thead>
										<tbody>
											{section.table.rows.map(
												(row, ri) => (
													<tr key={ri}>
														{row.map((cell, ci) => (
															<td key={ci}>
																{cell}
															</td>
														))}
													</tr>
												),
											)}
										</tbody>
									</table>
								</div>
							)}

							{section.list && (
								<ul className="my-6">
									{section.list.map((item, i) => (
										<li
											key={i}
											className="flex items-start gap-3"
										>
											<span className="text-neon-blue mt-1 shrink-0">
												✦
											</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							)}
						</motion.div>
					))}
				</motion.div>
			</article>

			{/* Post Navigation */}
			<nav className="max-w-3xl mx-auto px-4 pb-20">
				<div className="flex flex-col sm:flex-row gap-4">
					{prevPost ? (
						<Link
							href={`/blog/${prevPost.slug}`}
							className="flex-1 group rounded-2xl bg-card/40 border border-white/5 p-6 hover:border-neon-blue/30 transition-all"
						>
							<span className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
								<ArrowLeft className="w-4 h-4" />
								Previous
							</span>
							<span className="text-lg font-bold font-heading group-hover:text-neon-blue transition-colors line-clamp-2">
								{prevPost.title}
							</span>
						</Link>
					) : (
						<div className="flex-1" />
					)}

					{nextPost ? (
						<Link
							href={`/blog/${nextPost.slug}`}
							className="flex-1 group rounded-2xl bg-card/40 border border-white/5 p-6 hover:border-neon-blue/30 transition-all text-right"
						>
							<span className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
								Next
								<ArrowRight className="w-4 h-4" />
							</span>
							<span className="text-lg font-bold font-heading group-hover:text-neon-blue transition-colors line-clamp-2">
								{nextPost.title}
							</span>
						</Link>
					) : (
						<div className="flex-1" />
					)}
				</div>
			</nav>
		</>
	);
}
