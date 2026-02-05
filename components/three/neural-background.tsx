"use client";

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
						args={[particles, 3]}
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
			<lineBasicMaterial
				color="#00D4FF"
				transparent={true}
				opacity={0.1}
			/>
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
