"use client";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import Image from "next/image";
import {useRouter, usePathname} from "next/navigation";
import Logo from "@/assets/fulllogo.png";
import pagecontent from "@/data/pagecontent.json";

export const Footer = () => {
	const router = useRouter();
	const pathname = usePathname();

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		if (href.startsWith("#")) {
			e.preventDefault();

			// If we're on the home page, scroll directly
			if (pathname === "/") {
				const element = document.querySelector(href);
				if (element) {
					element.scrollIntoView({behavior: "smooth", block: "start"});
				}
			} else {
				// If we're on another page (like /contact), navigate to home first
				router.push("/" + href);
			}
		}
	};

	return (
		<footer id="contact" className="bg-black text-[#BCBCBC]">
			{/* Top Section */}
			<div className="container mx-auto px-6 py-20">
				<div className="grid gap-14 md:grid-cols-3">
					{/* Brand */}
					<div>
						<div className="inline-flex mb-6">
							<Image src={Logo} alt="Novetum Logo" className="h-16 w-60" width={240} height={64} />
						</div>
						<p className="text-sm leading-relaxed max-w-xs">{pagecontent.intro[4]}</p>
					</div>

					{/* Navigation */}
					<div className="md:text-center">
						<h4 className="text-white font-medium mb-6">Navigation</h4>
						<ul className="space-y-4 text-sm">
							<li>
								<a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="hover:text-white transition-colors cursor-pointer">
									Home
								</a>
							</li>
							<li>
								<a href="#oldparadigm" onClick={(e) => handleNavClick(e, "#oldparadigm")} className="hover:text-white transition-colors cursor-pointer">
									Old Paradigm
								</a>
							</li>
							<li>
								<a href="#technical-excellence" onClick={(e) => handleNavClick(e, "#technical-excellence")} className="hover:text-white transition-colors cursor-pointer">
									Capabilities
								</a>
							</li>
							<li>
								<a href="#deploy" onClick={(e) => handleNavClick(e, "#deploy")} className="hover:text-white transition-colors cursor-pointer">
									Execution Model
								</a>
							</li>
							<li className="relative group">
								<span className="cursor-not-allowed text-gray-500">Documentation</span>
								{/* Tooltip */}
								<span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap rounded bg-gray-800 px-3 py-1 text-xs text-gray-300 opacity-0 transition-opacity group-hover:opacity-100">
									Coming soon
								</span>
							</li>
						</ul>
					</div>

					{/* Contact + Social */}
					<div className="md:text-right">
						<h4 className="text-white font-medium mb-6">Strategic Partnerships</h4>
						<ul className="space-y-3 text-sm mb-6">
							<li>
								<b>Email</b>:{" "}
								<a href="mailto:systems@novetum.com" className="hover:text-white transition-colors">
									systems@novetum.com
								</a>
							</li>
							<li>
								<b>Location</b>: B Square 1st floor, <br />
								Huda Enclave, Madhapur 500081
							</li>
						</ul>
						<div className="flex gap-6 md:justify-end justify-center">
							<a href="https://www.instagram.com/novetum.ai/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity" aria-label="Visit our Instagram">
								<SocialInsta />
							</a>
							<a
								href="https://www.linkedin.com/company/novetum/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-70 transition-opacity"
								aria-label="Visit our LinkedIn"
							>
								<SocialLinkedin />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-white/10">
				<div className="container mx-auto px-6 py-6 flex flex-col gap-4 md:flex-row md:justify-center items-center text-sm">
					<p>
						© {new Date().getFullYear()} {pagecontent.brand}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
