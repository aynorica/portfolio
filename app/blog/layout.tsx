import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata = {
	title: "Engineering Blog | Amir Deilamizadeh",
	description:
		"Technical blog posts about engineering, open-source contributions, and software architecture.",
};

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<main className="min-h-screen">{children}</main>
			<Footer />
		</>
	);
}
