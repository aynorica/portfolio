export interface Experience {
	company: string;
	logo?: string;
	role: string;
	period: string;
	location: string;
	achievements: string[];
	technologies: string[];
}

export interface Project {
	title: string;
	description: string;
	technologies: string[];
	image?: string;
	liveUrl?: string;
	githubUrl?: string;
	highlights: string[];
}

export interface Education {
	institution: string;
	degree: string;
	field: string;
	period: string;
	gpa?: string;
	location: string;
}

export interface Skill {
	name: string;
	category: string;
	proficiency: number; // 0-100
	yearsOfExperience?: number;
}

export interface Language {
	name: string;
	proficiency: string;
	level: number; // 0-100
}

export interface SocialLink {
	platform: string;
	url: string;
	icon: string;
}

export interface BlogSection {
	heading: string;
	body: string;
	code?: {
		language: string;
		content: string;
	};
	table?: {
		headers: string[];
		rows: string[][];
	};
	list?: string[];
}

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	tags: string[];
	category: string;
	readTime: string;
	coverGradient?: string;
	content: BlogSection[];
}
