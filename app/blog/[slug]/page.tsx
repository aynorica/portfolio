import { BLOG_POSTS } from "@/lib/constants";
import BlogPostContent from "./blog-post-content";
import { notFound } from "next/navigation";

// Required for static export
export function generateStaticParams() {
	return BLOG_POSTS.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = BLOG_POSTS.find((p) => p.slug === slug);
	if (!post) return { title: "Post Not Found" };
	return {
		title: `${post.title} | Amir Deilamizadeh`,
		description: post.excerpt,
	};
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = BLOG_POSTS.find((p) => p.slug === slug);
	if (!post) notFound();

	const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
	const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
	const nextPost =
		postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

	return (
		<BlogPostContent post={post} prevPost={prevPost} nextPost={nextPost} />
	);
}
