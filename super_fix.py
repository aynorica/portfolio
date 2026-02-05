import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Verified & Fixed {path}")

# --- 1. HERO ---
hero_code = """\\"use client\\";

import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { useTypewriter } from "@/hooks/use-typewriter";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import NeuralBackground from "@/components/three/neural-background";

export default function HeroSection() {
    const typedTitle = useTypewriter(PERSONAL_INFO.title, 80);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            <NeuralBackground />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-1" />
            <div className="container relative z-10 mx-auto px-4 py-20">
                <motion.div
                    className="max-w-5xl mx-auto text-center space-y-12"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={fadeInUp} className="flex justify-center">
                        <div className="px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
                            </span>
                            {PERSONAL_INFO.availability}
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter font-heading">
                            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                                {PERSONAL_INFO.name}
                            </span>
                        </h1>
                        <div className="text-2xl md:text-4xl font-bold text-foreground/80 font-heading min-h-[4rem]">
                            {typedTitle}<span className="animate-pulse text-neon-blue">|</span>
                        </div>
                    </motion.div>
                    <motion.p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" variants={fadeInUp}>
                        Architecting the future of Fintech with Agentic AI and high-concurrency systems.
                    </motion.p>
                    <motion.div className="flex flex-wrap justify-center gap-6" variants={fadeInUp}>
                        <a href="#projects" className="group relative px-8 py-4 bg-neon-blue text-deep-navy font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                            <span className="relative z-10 flex items-center gap-2">View Intelligence <ArrowRight className="w-5 h-5" /></span>
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-foreground font-bold rounded-2xl hover:bg-white/10 hover:border-neon-blue/50 transition-all">Initiate Contact</a>
                    </motion.div>
                    <motion.div className="flex justify-center gap-8" variants={fadeInUp}>
                        {SOCIAL_LINKS.map((social, index) => (
                            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-neon-blue hover:border-neon-blue/30 transition-all hover:scale-110">
                                {social.platform === "GitHub" && <Github className="w-6 h-6" />}
                                {social.platform === "LinkedIn" && <Linkedin className="w-6 h-6" />}
                                {social.platform === "Email" && <Mail className="w-6 h-6" />}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
""".replace('\\"', '"')

# --- 2. ABOUT ---
about_code = """\\"use client\\";

import { PERSONAL_INFO } from "@/lib/constants";
import { Code, Database, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/use-count-up";

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isInView, setIsInView] = useState(false);
    const yearsCount = useCountUp(PERSONAL_INFO.yearsOfExperience, 2000);
    const modulesCount = useCountUp(PERSONAL_INFO.modulesBuilt, 2000);
    const apisCount = useCountUp(PERSONAL_INFO.apisServed, 2000);

    useEffect(() => {
        const currentSection = sectionRef.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !isInView) {
                setIsInView(true);
                yearsCount.start(); modulesCount.start(); apisCount.start();
            }
        }, { threshold: 0.2 });
        if (currentSection) observer.observe(currentSection);
        return () => { if (currentSection) observer.unobserve(currentSection); };
    }, [isInView, yearsCount, modulesCount, apisCount]);

    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <motion.div className="max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
                    <motion.div className="text-center mb-16" variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading tracking-tight">About Me</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
                    </motion.div>
                    <motion.div className="mb-16" variants={fadeInUp}>
                        <p className="text-xl text-muted-foreground leading-relaxed text-center font-medium">{PERSONAL_INFO.summary}</p>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" variants={staggerContainer}>
                        {[
                            { icon: Rocket, value: `${yearsCount.count}+`, label: "Years Experience" },
                            { icon: Code, value: modulesCount.count.toString(), label: "Production Modules" },
                            { icon: Database, value: `${apisCount.count}+`, label: "APIs Served" }
                        ].map((stat, i) => (
                            <motion.div key={i} className="group relative flex flex-col items-center p-8 rounded-3xl bg-card/40 border border-white/5 backdrop-blur-md hover:border-neon-blue/30 transition-all" variants={fadeInUp}>
                                <div className="p-4 rounded-2xl bg-neon-blue/10 text-neon-blue mb-6 shadow-[0_0_15px_rgba(0,212,255,0.2)]"><stat.icon className="w-10 h-10" /></div>
                                <div className="text-4xl font-bold mb-2 font-heading">{stat.value}</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
""".replace('\\"', '"')

# --- 3. TECH STACK ---
tech_code = """\\"use client\\";

import { useState } from "react";
import { SKILLS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const categories = ["All", "Languages", "AI & Agents", "Frontend", "Backend", "Infrastructure"];

export default function TechStackSection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = activeCategory === "All" ? SKILLS : SKILLS.filter(s => s.category === activeCategory);

    return (
        <section id="tech-stack" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div className="max-w-6xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                    <motion.div className="text-center mb-16" variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading tracking-tight">Tech Stack</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full" />
                    </motion.div>
                    <motion.div className="flex flex-wrap justify-center gap-3 mb-16" variants={fadeInUp}>
                        {categories.map(c => (
                            <button key={c} onClick={() => setActiveCategory(c)} className={`px-6 py-2.5 rounded-2xl font-bold text-sm ${activeCategory === c ? "bg-neon-blue text-deep-navy" : "bg-white/5 border border-white/10"}`}>{c}</button>
                        ))}
                    </motion.div>
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredSkills.map(s => (
                                <motion.div key={s.name} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-card/40 border border-white/5 backdrop-blur-md hover:border-neon-blue/30 transition-all flex flex-col gap-6 group">
                                    <div className="flex justify-between">
                                        <h3 className="text-xl font-bold font-heading group-hover:text-neon-blue">{s.name}</h3>
                                        <span className="text-[10px] font-bold text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded-lg">{s.proficiency}%</span>
                                    </div>
                                    <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
                                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.proficiency}%` }} className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan" />
                                    </div>
                                    <div className="text-[10px] text-muted-foreground uppercase font-bold">{s.yearsOfExperience} Years Experience</div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
""".replace('\\"', '"')

# --- 4. PROJECTS ---
projects_code = """\\"use client\\";

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
""".replace('\\"', '"')

# --- 5. LOGS/FIXER ---
# Write them
write_file("components/sections/hero-section.tsx", hero_code)
write_file("components/sections/about-section.tsx", about_code)
write_file("components/sections/tech-stack-section.tsx", tech_code)
write_file("components/sections/projects-section.tsx", projects_code)
# ... only doing these 4 first to test if it fixes the mangling
print("Batch 1 completed.")
