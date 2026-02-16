import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

export const fadeIn: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

export const staggerContainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.1,
		},
	},
};

export const scaleIn: Variants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
		},
	},
};

export const slideInFromLeft: Variants = {
	hidden: { opacity: 0, x: -60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

export const slideInFromRight: Variants = {
	hidden: { opacity: 0, x: 60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

export const cardHover = {
	scale: 1.05,
	transition: { duration: 0.3, ease: "easeInOut" },
};

export const iconHover = {
	scale: 1.1,
	rotate: 5,
	transition: { duration: 0.2, ease: "easeInOut" },
};

export const navLinkHover = {
	scale: 1.05,
	color: "hsl(var(--primary))",
	transition: { duration: 0.2 },
};

export const parallaxFadeIn: Variants = {
	hidden: { opacity: 0, y: 60 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
	},
};

export const blogCardHover = {
	rest: { y: 0, scale: 1 },
	hover: {
		y: -12,
		scale: 1.02,
		transition: { duration: 0.3, ease: "easeOut" },
	},
};

export const heroParallax: Variants = {
	hidden: { opacity: 0, scale: 1.1 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
	},
};
