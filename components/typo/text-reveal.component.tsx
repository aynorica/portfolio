"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TextRevealInterface } from "@/Models/Interfaces/text-reveal.interface";
import NormalText from "./normal-text.component";
import MaskedText from "./masked-text.component";

export const TextRevealCard = ({
	text,
	revealText,
	className,
	textClassName,
	revealedClassName,
}: TextRevealInterface) => {
	const [widthPercentage, setWidthPercentage] = useState(0);
	const cardRef = useRef<HTMLDivElement | any>(null);
	const [left, setLeft] = useState(0);
	const [localWidth, setLocalWidth] = useState(0);
	const [isMouseOver, setIsMouseOver] = useState(false);
	console.log(revealedClassName);
	useEffect(() => {
		if (cardRef.current) {
			const { left, width: localWidth } =
				cardRef.current.getBoundingClientRect();
			setLeft(left);
			setLocalWidth(localWidth);
		}
	}, []);

	function mouseMoveHandler(event: any) {
		event.preventDefault();

		const { clientX } = event;
		if (cardRef.current) {
			const relativeX = clientX - left;
			setWidthPercentage((relativeX / localWidth) * 100);
		}
	}

	function mouseLeaveHandler() {
		setIsMouseOver(false);
		setWidthPercentage(0);
	}
	function mouseEnterHandler() {
		setIsMouseOver(true);
	}
	function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
		event.preventDefault();
		const clientX = event.touches[0]!.clientX;
		if (cardRef.current) {
			const relativeX = clientX - left;
			setWidthPercentage((relativeX / localWidth) * 100);
		}
	}

	const rotateDeg = (widthPercentage - 50) * 0.1;
	return (
		<div
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
			onMouseMove={mouseMoveHandler}
			onTouchStart={mouseEnterHandler}
			onTouchEnd={mouseLeaveHandler}
			onTouchMove={touchMoveHandler}
			ref={cardRef}
			className={cn(
				" w-[90rem] rounded-lg relative overflow-hidden min-h-14",
				className,
			)}
		>
			<div className=" relative flex items-center overflow-hidden">
				<motion.div
					style={{
						width: "100%",
					}}
					animate={
						isMouseOver
							? {
									opacity: widthPercentage > 0 ? 1 : 0,
									clipPath: `inset(0 ${
										100 - widthPercentage
									}% 0 0)`,
							  }
							: {
									clipPath: `inset(0 ${
										100 - widthPercentage
									}% 0 0)`,
							  }
					}
					transition={
						isMouseOver ? { duration: 0 } : { duration: 0.4 }
					}
					className="absolute pl-6 bg-gradient-to-r from-primary via-secondary to-accent z-20  will-change-transform min-w-40 rounded-md"
				>
					<p
						style={{
							textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
						}}
						className={cn(
							"text-sm w-full font-Orbitron py-3 font-bold text-font bg-clip-text text-transparent bg-gradient-to-b from-white to-font",
							revealedClassName,
						)}
					>
						{revealText}
					</p>
				</motion.div>
				<motion.div
					animate={{
						left: `${widthPercentage}%`,
						rotate: `${rotateDeg}deg`,
						opacity: widthPercentage > 0 ? 1 : 0,
					}}
					transition={
						isMouseOver ? { duration: 0 } : { duration: 0.4 }
					}
					className="h-fit w-[8px] bg-gradient-to-b from-transparent via-primary/50 to-transparent absolute z-50 will-change-transform"
				></motion.div>

				<MaskedText text={text} className={textClassName}>
					<MemoizedStars />
				</MaskedText>
			</div>
		</div>
	);
};

const Stars = () => {
	const randomMove = () => Math.random() * 4 - 2;
	const randomOpacity = () => Math.random();
	const random = () => Math.random();
	return (
		<div className="absolute inset-0">
			{[...Array(80)].map((_, i) => (
				<motion.span
					key={`star-${i}`}
					animate={{
						top: `calc(${random() * 100}% + ${randomMove()}px)`,
						left: `calc(${random() * 100}% + ${randomMove()}px)`,
						opacity: randomOpacity(),
						scale: [1, 1.2, 0],
					}}
					transition={{
						duration: random() * 10 + 20,
						repeat: Infinity,
						ease: "linear",
					}}
					style={{
						position: "absolute",
						top: `${random() * 100}%`,
						left: `${random() * 100}%`,
						width: `2px`,
						height: `2px`,
						backgroundColor: "white",
						borderRadius: "50%",
						zIndex: 1,
					}}
					className="inline-block"
				></motion.span>
			))}
		</div>
	);
};

export const MemoizedStars = memo(Stars);