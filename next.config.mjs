/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	output: "export",
	trailingSlash: true,

	images: {
		unoptimized: true,
	},

	// Only use subpath on GitHub Pages
	basePath: isProd ? "/Novetum-LandingPage" : "",
	assetPrefix: isProd ? "/Novetum-LandingPage/" : "",

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
				resourceQuery: {
					not: [...fileLoaderRule.resourceQuery.not, /url/],
				},
				use: ["@svgr/webpack"],
			},
		);

		fileLoaderRule.exclude = /\.svg$/i;
		return config;
	},
};

export default nextConfig;
