import type {
	Experience,
	Project,
	Education,
	Skill,
	Language,
	SocialLink,
	BlogPost,
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

export const BLOG_POSTS: BlogPost[] = [
	{
		slug: "openclaw-issue-4855-symlink-fix",
		title: "How a Sneaky Symlink Bug Broke OpenClaw for Thousands of Devs",
		date: "February 12, 2026",
		excerpt:
			"I dove into an open-source issue that had been bugging developers for months — turns out nvm and friends don't play nice with symlinks. Here's how I tracked it down and shipped a fix.",
		tags: ["TypeScript", "Node.js", "Open Source", "Symlinks", "nvm"],
		category: "Open Source",
		readTime: "8 min read",
		coverGradient: "from-blue-500 via-cyan-400 to-teal-500",
		content: [
			{
				heading: "The Problem",
				body: "So here's the deal — you install OpenClaw globally with npm, fire up the Control UI dashboard, and get slapped with a 'Missing Control UI assets' error. The files are literally right there in the package. What gives? Turns out, if you're using nvm, fnm, n, or Homebrew to manage your Node versions (like most of us do), the whole thing falls apart. This wasn't some edge case either — the GitHub issue had 10+ upvotes and 29 comments from frustrated devs across macOS, Linux, and Windows. Even the maintainer admitted they'd never tested with symlink-based version managers.",
			},
			{
				heading: "Digging Into the Root Cause",
				body: "Here's where it gets interesting. When you run a CLI tool installed through nvm, Node.js sets process.argv[1] to the symlink path — something like ~/.nvm/versions/node/v22/bin/openclaw — not the actual file it points to. The code in candidateDirsFromArgv1() calls path.resolve() to normalize this, but here's the catch: path.resolve() doesn't follow symlinks. It just cleans up relative path segments. So the code starts walking up from the nvm bin/ folder looking for package.json, never finds it, and boom — \"assets not found.\" Classic case of something that looks totally fine until you realize the input isn't what you think it is.",
				code: {
					language: "typescript",
					content:
						"function candidateDirsFromArgv1(argv1: string): string[] {\n  const normalized = path.resolve(argv1);\n  const candidates = [path.dirname(normalized)];\n  // .bin logic only — never reaches the real package root\n  // when argv1 is a symlink!\n}",
				},
			},
			{
				heading: "The Fix",
				body: "The fix turned out to be surprisingly simple — just add an fs.realpathSync() call after path.resolve() to actually follow the symlink to where the file really lives. If the real path is different from the symlink path, we toss its directory into the candidate list for package root discovery. I wrapped it in a try/catch so if anything goes wrong, the original behavior stays exactly the same — zero risk of breaking existing setups. The best part? This pattern was already used elsewhere in the codebase for execPath resolution, so it felt right at home. I also cleaned up the async resolver's API to accept moduleUrl, keeping things consistent with the sync version.",
				code: {
					language: "typescript",
					content:
						"function candidateDirsFromArgv1(argv1: string): string[] {\n  const normalized = path.resolve(argv1);\n  const candidates = [path.dirname(normalized)];\n\n  // Resolve symlinks for version managers (nvm, fnm, n, Homebrew)\n  try {\n    const resolved = fsSync.realpathSync(normalized);\n    if (resolved !== normalized) {\n      candidates.push(path.dirname(resolved));\n    }\n  } catch { /* keep original candidates */ }\n\n  // .bin logic...\n}",
				},
			},
			{
				heading: "Testing & Validation",
				body: "You can't ship a fix without tests, right? I wrote three test cases that create actual symlinks using fs.symlinkSync with relative targets — basically mimicking exactly how nvm and fnm set things up in the real world. They cover all three resolution paths: finding the package root, finding the Control UI root, and resolving the dist index path through a symlink. I also made sure they skip gracefully on Windows CI where you might not have symlink privileges, so they won't randomly break the build.",
				table: {
					headers: ["Check", "Result"],
					rows: [
						[
							"Vitest (17/17 tests)",
							"All pass (14 existing + 3 new)",
						],
						["tsgo --noEmit", "Clean — no type errors"],
						["oxlint (3 changed files)", "0 warnings, 0 errors"],
						["oxfmt --check", "All correctly formatted"],
						["git status", "Clean working tree"],
					],
				},
			},
			{
				heading: "Platform Coverage",
				body: "This is the part that made me smile. One tiny realpathSync call and suddenly every major version manager just works — nvm, fnm, n, Homebrew, you name it. And for setups that were already working fine (asdf, Volta, plain npm), it's a no-op. No regressions, no surprises.",
				table: {
					headers: ["Platform / Manager", "Mechanism", "Status"],
					rows: [
						[
							"nvm (Linux/macOS)",
							"realpathSync resolves bin symlink",
							"Fixed",
						],
						[
							"fnm (Linux/macOS)",
							"realpathSync resolves double symlink",
							"Fixed",
						],
						[
							"n (Linux/macOS)",
							"realpathSync resolves bin symlink",
							"Fixed",
						],
						[
							"Homebrew/Linuxbrew",
							"realpathSync resolves cellar symlink",
							"Fixed",
						],
						[
							"asdf (exec-based)",
							"argv1 is already real path; no-op",
							"Already works",
						],
						[
							"Volta (binary launcher)",
							"argv1 is already real path; no-op",
							"Already works",
						],
						[
							"Standard npm global",
							"realpathSync returns same path; no-op",
							"No regression",
						],
					],
				},
			},
			{
				heading: "Key Technical Decisions",
				body: "A few choices I want to call out, because they weren't accidental:",
				list: [
					"I put the fix at the lowest level (candidateDirsFromArgv1) so every caller gets it for free — sync resolvers, async resolvers, health checks, build triggers, everything.",
					"For the async resolver API, I went with a string | options object union type. It's fully backward-compatible — existing callers don't need to change a thing.",
					"Test symlinks use relative targets (../real-pkg/openclaw.mjs) instead of absolute paths, because that's how nvm and fnm actually create their symlinks.",
					"Symlink creation in tests is wrapped with try/catch + skip for Windows, because not every CI runner has symlink privileges and I didn't want flaky builds.",
				],
			},
			{
				heading: "What I Took Away From This",
				body: "A few lessons that stuck with me. First — always check the actual runtime values, not just the code. path.resolve() looks perfectly correct in a code review, but the moment argv[1] is a symlink, it silently does the wrong thing. Second, before you write something new, look at what's already there. The codebase already used realpathSync for a similar purpose, so my fix felt natural to the maintainers. Third, defensive coding is your friend. That try/catch means my change literally can't break anything — it can only help. Shipped the PR with conventional commits, used the project's Fix template, and included AI-assisted disclosure as their CONTRIBUTING.md requires. Clean and by the book.",
			},
		],
	},
];
