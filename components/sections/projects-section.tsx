"use client";

import { PROJECTS } from "@/lib/constants";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
                    <motion.div className="text-center mb-20" variants={fadeInUp}>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading tracking-tight">Selected Projects</h2>
                        <div className="w-32 h-2 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full shadow-[0_0_15px_rgba(0,212,255,0.4)]" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {PROJECTS.map((project, index) => (
                            <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="group relative flex flex-col rounded-[2.5rem] bg-card/40 border border-white/5 backdrop-blur-xl overflow-hidden hover:border-neon-blue/30 transition-all duration-500 shadow-2xl">
                                <div className="p-10 flex flex-col h-full space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue text-[10px] font-bold uppercase tracking-widest">{tech}</span>
                                            ))}
                                        </div>
                                        <h3 className="text-3xl font-bold font-heading group-hover:text-neon-blue transition-colors leading-tight">{project.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                                    </div>
                                    <div className="space-y-4 flex-grow">
                                        <p className="text-xs font-bold uppercase tracking-widest text-white/40">Core Intelligence</p>
                                        <ul className="space-y-3">
                                            {project.highlights.map((h, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80"><span className="text-neon-blue mt-1">✦</span>{h}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pt-6 flex items-center justify-between border-t border-white/5">
                                        <div className="flex gap-4">
                                            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-neon-blue/10 hover:text-neon-blue transition-all"><Github className="w-5 h-5" /></a>}
                                            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all"><ExternalLink className="w-5 h-5" /></a>}
                                        </div>
                                        <button className="flex items-center gap-2 text-sm font-bold text-neon-blue group-hover:gap-3 transition-all">Details <ArrowRight className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
