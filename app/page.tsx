import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import TechStackSection from "@/components/sections/tech-stack-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectsSection from "@/components/sections/projects-section";
import EducationSection from "@/components/sections/education-section";
import LanguagesSection from "@/components/sections/languages-section";
import BlogPreviewSection from "@/components/sections/blog-preview-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<TechStackSection />
				<ExperienceSection />
				<ProjectsSection />
				<BlogPreviewSection />
				<EducationSection />
				<LanguagesSection />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
}
