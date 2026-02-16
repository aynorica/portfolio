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
		title: "Fixing Symlinked argv1 for Open-Source Control UI Asset Detection",
		date: "February 12, 2026",
		excerpt:
			"How I diagnosed and fixed a critical symlink resolution bug in OpenClaw that broke Control UI asset detection for developers using nvm, fnm, and other Node version managers.",
		tags: ["TypeScript", "Node.js", "Open Source", "Symlinks", "nvm"],
		category: "Open Source",
		readTime: "8 min read",
		coverGradient: "from-blue-500 via-cyan-400 to-teal-500",
		content: [
			{
				heading: "The Problem",
				body: "When OpenClaw is installed globally via npm install -g openclaw and the developer uses a symlink-based Node version manager like nvm, fnm, n, or Homebrew, the Control UI dashboard fails with a cryptic 'Missing Control UI assets' error — even though dist/control-ui/index.html exists in the installed package. This issue had accumulated 10+ upvotes and 29 comments on GitHub, with confirmed reports across macOS, Linux, and Windows. The maintainer acknowledged that symlink-based version managers had never been considered in their testing pipeline, making this a significant gap in platform coverage.",
			},
			{
				heading: "Root Cause Analysis",
				body: 'The root cause lives in how Node.js handles process.argv[1] with symlinks. When you run a globally-installed CLI tool through nvm, the argv[1] value preserves the symlink path (e.g., ~/.nvm/versions/node/v22/bin/openclaw) rather than resolving to the real target. The candidateDirsFromArgv1() function in openclaw-root.ts uses path.resolve() to normalize this path, but path.resolve() does NOT follow symlinks — it only resolves relative segments. So the directory walk-up starts from the bin/ directory of the version manager and never finds the package.json with name: "openclaw", causing the asset resolution to fail entirely.',
				code: {
					language: "typescript",
					content:
						"function candidateDirsFromArgv1(argv1: string): string[] {\n  const normalized = path.resolve(argv1);\n  const candidates = [path.dirname(normalized)];\n  // .bin logic only — never reaches the real package root\n  // when argv1 is a symlink!\n}",
				},
			},
			{
				heading: "The Fix",
				body: "The fix is elegant in its simplicity: call fs.realpathSync() after path.resolve() to follow the symlink chain to the actual file. If the resolved path differs from the original, its directory is added as an additional candidate for package root discovery. The try/catch ensures backward compatibility — if realpathSync throws (e.g., the path doesn't exist), the original behavior is preserved exactly. This pattern already existed in the codebase: realpathSync was used for execPath resolution in control-ui-assets.ts, so the fix follows established conventions. I also propagated the moduleUrl parameter to the async resolver for completeness, matching the sync resolver's existing API surface.",
				code: {
					language: "typescript",
					content:
						"function candidateDirsFromArgv1(argv1: string): string[] {\n  const normalized = path.resolve(argv1);\n  const candidates = [path.dirname(normalized)];\n\n  // Resolve symlinks for version managers (nvm, fnm, n, Homebrew)\n  try {\n    const resolved = fsSync.realpathSync(normalized);\n    if (resolved !== normalized) {\n      candidates.push(path.dirname(resolved));\n    }\n  } catch { /* keep original candidates */ }\n\n  // .bin logic...\n}",
				},
			},
			{
				heading: "Testing & Validation",
				body: "I added three focused test cases that create real symlinks via fs.symlinkSync with relative targets — matching how nvm and fnm actually set up their symlink structures. The tests validate that resolveOpenClawPackageRoot(), resolveControlUiRootSync(), and resolveControlUiDistIndexPath() all correctly follow symlinks to find assets. Tests gracefully skip on Windows CI environments where symlink creation may require elevated privileges.",
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
				body: "One of the most satisfying aspects of this fix is its breadth. A single realpathSync call handles every major Node version manager and installation method, with zero regressions for standard setups.",
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
				body: "Every engineering decision in this PR was deliberate. Here are the key trade-offs I navigated and why each choice was made:",
				list: [
					"Fixed at the lowest level (candidateDirsFromArgv1) so ALL callers benefit — both sync and async resolvers, health checks, and build triggers.",
					"Used a string | options object union type for the async resolver signature, maintaining full backward compatibility with existing callers.",
					"Created test symlinks with relative targets (../real-pkg/openclaw.mjs) rather than absolute paths, matching how nvm/fnm actually create their symlinks in production.",
					"Wrapped symlink creation in tests with try/catch + skip for Windows environments without symlink privileges, ensuring CI stability.",
				],
			},
			{
				heading: "Impact & Takeaways",
				body: "This contribution reinforced several principles I carry into every codebase. First, always trace the actual runtime values — the bug was invisible in static analysis because path.resolve() looks correct until you realize argv[1] is a symlink. Second, look for existing patterns before inventing new ones — realpathSync was already used elsewhere in the project, making the fix immediately familiar to maintainers. Third, defensive coding matters — the try/catch around realpathSync means this fix literally cannot break existing functionality, only add new capability. The PR was submitted following all contribution guidelines including conventional commits, the project's Fix template, and full AI-assisted disclosure as required by CONTRIBUTING.md.",
			},
		],
	},
];
