/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true, // 🔥 REQUIRED for GitHub Pages
	images: {unoptimized: true},
	basePath: "/Novetum-LandingPage",
	assetPrefix: "/Novetum-LandingPage/",

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
