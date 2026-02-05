import os

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed {path}")

# --- ABOUT SECTION ---
about_content = """\\"use client\\";

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
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInView) {
                    setIsInView(true);
                    yearsCount.start();
                    modulesCount.start();
                    apisCount.start();
                }
            },
            { threshold: 0.2 },
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, [isInView, yearsCount, modulesCount, apisCount]);

    const stats = [
        {
            icon: Rocket,
            value: `${yearsCount.count}+`,
            label: "Years Experience",
        },
        {
            icon: Code,
            value: modulesCount.count.toString(),
            label: "Production Modules",
        },
        {
            icon: Database,
            value: `${apisCount.count}+`,
            label: "APIs Served",
        },
    ];

    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden" ref={sectionRef}>
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
                            About Me
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
                    </motion.div>

                    {/* Summary */}
                    <motion.div
                        className="mb-16"
                        variants={fadeInUp}
                    >
                        <p className="text-xl text-muted-foreground leading-relaxed text-center font-medium">
                            {PERSONAL_INFO.summary}
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                        variants={staggerContainer}
                    >
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="group relative flex flex-col items-center p-8 rounded-3xl bg-card/40 border border-white/5 backdrop-blur-md hover:border-neon-blue/30 transition-all"
                                    variants={fadeInUp}
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="p-4 rounded-2xl bg-neon-blue/10 text-neon-blue mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                                        <Icon className="w-10 h-10" />
                                    </div>
                                    <div className="text-4xl font-bold mb-2 font-heading text-foreground group-hover:text-neon-blue transition-colors">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Key Highlights */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={staggerContainer}
                    >
                        <motion.div
                            className="p-8 rounded-3xl bg-neon-blue/5 border border-white/5 backdrop-blur-md hover:border-neon-blue/30 transition-all group"
                            variants={fadeInUp}
                        >
                            <h3 className="text-xl font-bold text-neon-blue mb-4 flex items-center gap-3 font-heading">
                                <Rocket className="w-6 h-6" /> Specialization
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                AI Agent Architecture, LangGraph, NestJS, Next.js 16, High-Stakes Fintech Systems. Expert in managing complex state and high-concurrency environments.
                            </p>
                        </motion.div>
                        <motion.div
                            className="p-8 rounded-3xl bg-neon-cyan/5 border border-white/5 backdrop-blur-md hover:border-neon-cyan/30 transition-all group"
                            variants={fadeInUp}
                        >
                            <h3 className="text-xl font-bold text-neon-cyan mb-4 flex items-center gap-3 font-heading">
                                <Database className="w-6 h-6" /> Infrastructure
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Multi-currency Wallet Systems, Scalable Brokerage APIs, Real-time Market Data Synchronization and context-aware workflow orchestration.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
""".replace('\\"', '"')

# --- HERO SECTION ---
hero_content = """\\"use client\\";

import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { useTypewriter } from "@/hooks/use-typewriter";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import NeuralBackground from "@/components/three/neural-background";

export default function HeroSection() {
    const typedTitle = useTypewriter(PERSONAL_INFO.title, 80);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* 3D Background */}
            <NeuralBackground />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-1" />

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 py-20">
                <motion.div
                    className="max-w-5xl mx-auto text-center space-y-12"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Availability Badge */}
                    <motion.div variants={fadeInUp} className="flex justify-center">
                        <div className="px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
                            </span>
                            {PERSONAL_INFO.availability}
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.div variants={fadeInUp} className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter font-heading">
                            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                                {PERSONAL_INFO.name}
                            </span>
                        </h1>
                        <div className="text-2xl md:text-4xl font-bold text-foreground/80 font-heading min-h-[3.5rem] md:min-h-[4rem]">
                            {typedTitle}
                            <span className="animate-pulse text-neon-blue">|</span>
                        </div>
                    </motion.div>

                    {/* Summary */}
                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        variants={fadeInUp}
                    >
                        Architecting the future of Fintech with Agentic AI and high-concurrency systems.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-6"
                        variants={fadeInUp}
                    >
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-neon-blue text-deep-navy font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                            <span className="relative z-10 flex items-center gap-2">
                                View Intelligence <ArrowRight className="w-5 h-5" />
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-white/5 border border-white/10 text-foreground font-bold rounded-2xl hover:bg-white/10 hover:border-neon-blue/50 transition-all flex items-center gap-2"
                        >
                            Initiate Contact
                        </a>
                    </motion.div>

                    {/* Socials */}
                    <motion.div
                        className="flex justify-center gap-8 pt-8"
                        variants={fadeInUp}
                    >
                        {SOCIAL_LINKS.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-3 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-neon-blue hover:border-neon-blue/30 transition-all hover:scale-110"
                                aria-label={social.platform}
                            >
                                {social.platform === "GitHub" && <Github className="w-6 h-6" />}
                                {social.platform === "LinkedIn" && <Linkedin className="w-6 h-6" />}
                                {social.platform === "Email" && <Mail className="w-6 h-6" />}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-neon-blue">
                                    {social.platform}
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-px h-12 bg-gradient-to-b from-neon-blue/50 to-transparent" />
            </motion.div>
        </section>
    );
}
""".replace('\\"', '"')

# --- TECH STACK SECTION ---
tech_content = """\\"use client\\";

import { useState } from "react";
import { SKILLS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const categories = [
    "All",
    "Languages",
    "AI & Agents",
    "Frontend",
    "Backend",
    "Infrastructure",
];

export default function TechStackSection() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills =
        activeCategory === "All"
            ? SKILLS
            : SKILLS.filter((skill) => skill.category === activeCategory);

    return (
        <section id="tech-stack" className="py-20 bg-background relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    {/* Section Title */}
                    <motion.div className="text-center mb-16" variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading tracking-tight">
                            Tech Stack
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
                        <p className="text-muted-foreground mt-6 text-lg max-w-lg mx-auto leading-relaxed">
                            A curated selection of the technological pillars fueling my development workflow.
                        </p>
                    </motion.div>

                    {/* Category Tabs */}
                    <motion.div 
                        className="flex flex-wrap justify-center gap-3 mb-16"
                        variants={fadeInUp}
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-2xl font-bold text-sm tracking-wide transition-all ${
                                    activeCategory === category
                                        ? "bg-neon-blue text-deep-navy shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                                        : "bg-white/5 border border-white/10 hover:border-neon-blue/40 hover:bg-white/10"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div 
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="p-8 rounded-3xl bg-card/40 border border-white/5 backdrop-blur-md hover:border-neon-blue/30 transition-all flex flex-col gap-6 group"
                                >
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-bold font-heading group-hover:text-neon-blue transition-colors">
                                            {skill.name}
                                        </h3>
                                        <span className="text-[10px] font-bold text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded-lg uppercase tracking-widest">
                                            {skill.proficiency}%
                                        </span>
                                    </div>

                                    {/* Proficiency Bar */}
                                    <div className="space-y-2">
                                        <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${skill.proficiency}%`,
                                                }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full shadow-[0_0_8px_rgba(0,212,255,0.5)]"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                            {skill.yearsOfExperience && `${skill.yearsOfExperience} Years Experience`}
                                        </span>
                                    </div>
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

# Write files
write_file("components/sections/about-section.tsx", about_content)
write_file("components/sections/hero-section.tsx", hero_content)
write_file("components/sections/tech-stack-section.tsx", tech_content)
