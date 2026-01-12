/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,

	images: {
		unoptimized: true,
	},

	// REQUIRED for GitHub Pages project site + next/font
	basePath: "/Novetum-LandingPage",
	assetPrefix: "/Novetum-LandingPage/",

	eslint: {
		ignoreDuringBuilds: true,
	},

	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: {not: [...fileLoaderRule.resourceQuery.not, /url/]},
				use: ["@svgr/webpack"],
			}
		);

		fileLoaderRule.exclude = /\.svg$/i;
		return config;
	},
};

export default nextConfig;
