"use client";

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
