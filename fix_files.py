import os

files = {
    "components/sections/experience-section.tsx": """\\"use client\\";

import { EXPERIENCES } from "@/lib/constants";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 bg-background relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                >
                    {/* Section Title */}
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading tracking-tight">
                            Experience
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute left-0 md:left-1/2 top-0 w-1 bg-gradient-to-b from-neon-blue via-neon-cyan to-transparent md:transform md:-translate-x-1/2 opacity-30" 
                        />

                        {/* Experience items */}
                        <div className="space-y-16">
                            {EXPERIENCES.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className={`relative flex flex-col md:flex-row gap-10 ${
                                        index % 2 === 0
                                            ? "md:flex-row-reverse"
                                            : ""
                                    }`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-deep-navy rounded-full border-4 border-neon-blue md:transform md:-translate-x-1/2 z-10 mt-2 shadow-[0_0_15px_rgba(0,212,255,0.8)]" />

                                    {/* Content */}
                                    <div
                                        className={`flex-1 ml-10 md:ml-0 ${
                                            index % 2 === 0
                                                ? "md:pr-12 md:text-right"
                                                : "md:pl-12"
                                        }`}
                                    >
                                        <div className="group relative p-8 rounded-3xl bg-card/40 border border-white/5 backdrop-blur-md hover:border-neon-blue/30 transition-all">
                                            <div className="mb-6">
                                                <div className="inline-block px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue text-xs font-bold uppercase tracking-widest mb-3">
                                                    {exp.period}
                                                </div>
                                                <h3 className="text-2xl font-bold mb-1 font-heading group-hover:text-neon-blue transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <div className="text-lg font-bold text-neon-cyan mb-4">
                                                    {exp.company}
                                                </div>

                                                <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                                    <span className="flex items-center gap-1.5">
                                                        <MapPin className="w-4 h-4 text-neon-blue" />
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </div>

                                            <ul className={`space-y-3 mb-6 ${index % 2 === 0 ? "md:items-end flex flex-col" : ""}`}>
                                                {exp.achievements.map(
                                                    (achievement, i) => (
                                                        <li
                                                            key={i}
                                                            className={`text-sm text-foreground/80 flex gap-3 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}
                                                        >
                                                            <span className="text-neon-blue mt-1 shrink-0">
                                                                ✦
                                                            </span>
                                                            <span>
                                                                {achievement}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>

                                            <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                                {exp.technologies.map(
                                                    (tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/5 text-muted-foreground border border-white/10 group-hover:border-neon-blue/30 group-hover:text-neon-blue transition-all"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
""",
    "components/three/neural-background.tsx": """\\"use client\\";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Sphere } from "@react-three/drei";

function Particles({ count = 100 }: { count?: number }) {
    const mesh = useRef<THREE.Points>(null!);
    const light = useRef<THREE.PointLight>(null!);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 50;
            const y = (Math.random() - 0.5) * 50;
            const z = (Math.random() - 0.5) * 50;
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.y = time * 0.05;
            mesh.current.rotation.x = time * 0.02;
        }

        if (light.current) {
            light.current.position.x = Math.sin(time) * 10;
            light.current.position.y = Math.cos(time) * 10;
        }
    });

    return (
        <>
            <pointLight
                ref={light}
                distance={40}
                intensity={25}
                color="#00D4FF"
            />
            <points ref={mesh}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.length / 3}
                        array={particles}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.15}
                    color="#00FFAA"
                    transparent={true}
                    opacity={0.6}
                    sizeAttenuation={true}
                />
            </points>
        </>
    );
}

function Connections({ count = 50 }: { count?: number }) {
    const lines = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const p1 = new THREE.Vector3(
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 50,
            );
            const p2 = new THREE.Vector3(
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 50,
            );
            temp.push(p1, p2);
        }
        return temp;
    }, [count]);

    const geometry = useMemo(() => {
        const g = new THREE.BufferGeometry().setFromPoints(lines);
        return g;
    }, [lines]);

    return (
        <lineSegments geometry={geometry}>
            <lineBasicMaterial color="#00D4FF" transparent={true} opacity={0.1} />
        </lineSegments>
    );
}

export default function NeuralBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-[#0A0A10]">
            <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <Particles count={400} />
                <Connections count={150} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <Sphere args={[2, 32, 32]} position={[10, 5, -10]}>
                        <meshStandardMaterial
                            color="#00D4FF"
                            emissive="#00D4FF"
                            emissiveIntensity={2}
                            transparent={true}
                            opacity={0.2}
                        />
                    </Sphere>
                </Float>
            </Canvas>
        </div>
    );
}
"""
}

for path, content in files.items():
    # Remove the extra escaping from the triple quotes
    content = content.replace('\\"', '"')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed {path}")
