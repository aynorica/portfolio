import type {
	Experience,
	Project,
	Education,
	Skill,
	Language,
	SocialLink,
} from "@/types";

export const PERSONAL_INFO = {
	name: "Amir Deilamizadeh",
	title: "AI Engineer & Full-Stack Architect",
	summary: `Systematic Full-Stack Architect with 6+ years of experience building high-stakes Fintech and Trading platforms. Currently specializing in AI Agent Architecture, integrating LLMs (OpenAI, Gemini) into production workflows using Next.js 16, LangGraph, and NestJS. Expert in managing complex distributed state, scaling high-concurrency APIs (PostgreSQL/Redis), and delivering secure, production-grade brokerage infrastructure compliant with GDPR standards.`,
	email: "amirdeilamizadeh1996@gmail.com",
	location: "Istanbul, Turkey",
	availability: "Immediate for remote / 1-2 months for relocation",
	yearsOfExperience: 6,
	modulesBuilt: 28,
	apisServed: 80,
};

export const EXPERIENCES: Experience[] = [
	{
		company: "Wingo Markets",
		role: "Lead Full-Stack Developer",
		period: "June 2025 - Present",
		location: "Istanbul, Turkey",
		achievements: [
			"Engineered a comprehensive fintech ecosystem comprising 28 production modules and a 45-stage context-aware workflow system using Next.js 16 and Tailwind v4.",
			"Leveraged NGINX as a reverse proxy and load balancer to optimize request routing and SSL termination.",
			"Integrated 80+ API endpoints via a server-side proxy pattern, decoupling frontend from core backend infrastructure.",
			"Designed a modular architecture using 13 Zustand stores to synchronize real-time market data, multi-account balances, and transactional states.",
			"Implemented MFA/2FA (TOTP) and integrated Sumsub for automated KYC/identity verification.",
		],
		technologies: [
			"Next.js 16",
			"Tailwind v4",
			"Zustand",
			"NGINX",
			"Redis",
			"TypeORM",
			"PostgreSQL",
		],
	},
	{
		company: "Independent Consultant",
		role: "Fintech & AI Systems Architect",
		period: "Feb 2022 - June 2025",
		location: "Remote",
		achievements: [
			"Architected enterprise web applications using Next.js, NestJS, and PostgreSQL, utilizing Supabase for real-time data synchronization.",
			"Orchestrated high-availability deployments on Vercel and Google Cloud (GCP), maintaining 99.9% uptime.",
			"Built agentic workflows for automated research and data synthesis using LLM-driven logic (OpenAI/Gemini).",
			"Developed custom technical indicators and automated backtesting strategies using Pine Script for high-frequency trading clients.",
		],
		technologies: [
			"Next.js",
			"NestJS",
			"PostgreSQL",
			"Supabase",
			"GCP",
			"Vercel",
			"Pine Script",
		],
	},
	{
		company: "Nakitcoins",
		role: "Full-Stack Developer",
		period: "Jan 2020 - Feb 2022",
		location: "Istanbul, Turkey",
		achievements: [
			"Led the migration of legacy systems to a modern React.js/Next.js architecture, improving performance and SEO by 40%.",
			"Designed and deployed cross-platform React Native applications for crypto-to-fiat exchange services.",
			"Optimized NestJS backend services and PostgreSQL schemas to support high-volume transaction processing.",
		],
		technologies: [
			"React.js",
			"Next.js",
			"NestJS",
			"PostgreSQL",
			"React Native",
		],
	},
];

export const PROJECTS: Project[] = [
	{
		title: "Enterprise Trading Ecosystem",
		description:
			"A full-scale global brokerage infrastructure featuring 28 production modules, real-time charting, and secure wallet systems.",
		technologies: [
			"Next.js 16",
			"Tailwind v4",
			"Zustand",
			"Redis",
			"TypeORM",
		],
		highlights: [
			"45-stage context-aware workflow system",
			"13 Zustand stores for real-time state sync",
			"80+ API endpoints orchestrated",
		],
	},
	{
		title: "Agentic Research Bot",
		description:
			"Utilizing LangGraph and Gemini to automate deep-market research and economic calendar analysis.",
		technologies: ["LangGraph", "Gemini 2.5", "Python", "Vector Databases"],
		highlights: [
			"Automated economic data synthesis",
			"Context-aware research workflows",
			"Real-time market analysis integration",
		],
	},
	{
		title: "Multi-Asset Trading Engine",
		description:
			"Production-ready brokerage hub featuring real-time price charting and partnership management systems.",
		technologies: ["CCXT", "Next.js", "NestJS", "PostgreSQL", "NGINX"],
		highlights: [
			"High-frequency data processing",
			"Scalable partnership (IB) analytics",
			"Institutional-grade social trading",
		],
	},
];

export const EDUCATION: Education[] = [
	{
		institution: "Azad University of Najafabad",
		degree: "B.S. Mechanical Engineering",
		field: "Mechanical Engineering",
		period: "2014 - 2018",
		gpa: "3.75/4.00",
		location: "Najafabad, Iran",
	},
];

export const SKILLS: Skill[] = [
	// Languages
	{
		name: "TypeScript",
		category: "Languages",
		proficiency: 95,
		yearsOfExperience: 6,
	},
	{
		name: "Python",
		category: "Languages",
		proficiency: 90,
		yearsOfExperience: 5,
	},
	{
		name: "SQL",
		category: "Languages",
		proficiency: 85,
		yearsOfExperience: 6,
	},
	{
		name: "Pine Script",
		category: "Languages",
		proficiency: 90,
		yearsOfExperience: 4,
	},

	// AI & Agents
	{
		name: "LangGraph",
		category: "AI & Agents",
		proficiency: 90,
		yearsOfExperience: 1,
	},
	{
		name: "OpenAI/Gemini API",
		category: "AI & Agents",
		proficiency: 95,
		yearsOfExperience: 2,
	},
	{
		name: "Agentic Workflows",
		category: "AI & Agents",
		proficiency: 90,
		yearsOfExperience: 2,
	},
	{
		name: "Vector Databases",
		category: "AI & Agents",
		proficiency: 85,
		yearsOfExperience: 2,
	},

	// Frontend
	{
		name: "Next.js 16",
		category: "Frontend",
		proficiency: 95,
		yearsOfExperience: 6,
	},
	{
		name: "React 19",
		category: "Frontend",
		proficiency: 95,
		yearsOfExperience: 6,
	},
	{
		name: "Tailwind CSS v4",
		category: "Frontend",
		proficiency: 95,
		yearsOfExperience: 2,
	},
	{
		name: "Zustand",
		category: "Frontend",
		proficiency: 90,
		yearsOfExperience: 3,
	},

	// Backend & Data
	{
		name: "NestJS",
		category: "Backend",
		proficiency: 90,
		yearsOfExperience: 5,
	},
	{
		name: "Redis",
		category: "Backend",
		proficiency: 85,
		yearsOfExperience: 4,
	},
	{
		name: "PostgreSQL",
		category: "Backend",
		proficiency: 90,
		yearsOfExperience: 6,
	},
	{
		name: "NGINX",
		category: "Infrastructure",
		proficiency: 85,
		yearsOfExperience: 4,
	},
];

export const LANGUAGES: Language[] = [
	{ name: "English", proficiency: "C1 Fluent", level: 95 },
	{ name: "Persian", proficiency: "Native", level: 100 },
	{ name: "Turkish", proficiency: "B1 Level", level: 60 },
];

export const SOCIAL_LINKS: SocialLink[] = [
	{
		platform: "GitHub",
		url: "https://github.com/aynorica",
		icon: "github",
	},
	{
		platform: "LinkedIn",
		url: "https://www.linkedin.com/in/amir-deilamizadeh2712a6192/",
		icon: "linkedin",
	},
	{
		platform: "Email",
		url: "mailto:amirdeilamizadeh1996@gmail.com",
		icon: "mail",
	},
];

export const CERTIFICATIONS = [
	"Advanced JavaScript Concepts",
	"NestJS Zero to Hero",
	"Full-Stack Web Development (Zero To Mastery)",
];

export const THEME_COLORS = {
	primary: "#00D4FF", // Neon Blue
	accent: "#00FFAA", // Neon Cyan
	background: "#0A0A10", // Deep Navy
	text: "#FAFAFF", // Ghost White
	gradient: "linear-gradient(135deg, #00D4FF, #00FFAA)",
};

export const EMAILJS = {
	SERVICE_ID: "service_h5qn1e8",
	TEMPLATE_ID: "YOUR_TEMPLATE_ID", // TODO: Replace with your actual Template ID
	PUBLIC_KEY: "YOUR_PUBLIC_KEY", // TODO: Replace with your actual Public Key
};
