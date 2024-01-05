/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		MONGODB_URI: process.env.MONGODB_URI,
		BASE_URL: process.env.BASE_URL,
		GITHUB_ID: process.env.GITHUB_ID,
		GITHUB_SECRET: process.env.GITHUB_SECRET,
		NEXTAUTH_SECRET: process.env.NEX_AUTH_SECRET,
	},
	images: {
		domains: ["media.tradly.app", "avatars.githubusercontent.com"],
	},
};

module.exports = nextConfig;

