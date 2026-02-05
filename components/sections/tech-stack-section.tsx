"use client";

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
