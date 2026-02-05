"use client";

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
