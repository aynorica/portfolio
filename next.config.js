/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true, // Required for static export
	},
	// Use basePath only in production (GitHub Pages)
	basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
	assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio/" : "",
	trailingSlash: true,
};

module.exports = nextConfig;
