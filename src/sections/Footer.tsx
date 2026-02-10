import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";
// import Logo from "@/assets/novetum logo.png";
import Logo from "@/assets/fulllogo.png";
import pagecontent from "@/data/pagecontent.json";

export const Footer = () => {
	return (
		<footer id="contact" className="bg-black text-[#BCBCBC]">
			{/* Top Section */}
			<div className="container mx-auto px-6 py-20">
				<div className="grid gap-14 md:grid-cols-3">
					{/* Brand */}
					<div>
						<div className="inline-flex mb-6">
							<span
								className="font-serif font-bold tracking-tight text-2xl
    bg-clip-text text-transparent
    bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#1E40AF]"
							>
								{/* {pagecontent.brand} */}
								<img src={Logo.src} alt="Novetum Logo" className="h-16 w-60" />
							</span>
						</div>

						<p className="text-sm leading-relaxed max-w-xs">{pagecontent.intro[4]}</p>
					</div>

					{/* Navigation */}
					<div className="md:text-center">
						<h4 className="text-white font-medium mb-6">Navigation</h4>
						<ul className="space-y-4 text-sm">
							<li>
								<a href="#home" className="hover:text-white transition">
									Home
								</a>
							</li>
							<li>
								<a href="#oldparadigm" className="hover:text-white transition">
									The Old Paradigm
								</a>
							</li>
							<li>
								<a href="#technical-excellence" className="hover:text-white transition">
									Technical Excellence
								</a>
							</li>
							<li>
								<a href="#deploy" className="hover:text-white transition">
									Deploy
								</a>
							</li>
							<li className="relative group">
								<span className="cursor-not-allowed text-gray-500">Documentation</span>

								{/* Tooltip */}
								<span
									className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 
    whitespace-nowrap rounded bg-gray-800 px-3 py-1 text-xs text-gray-300 opacity-0 
    transition-opacity group-hover:opacity-100"
								>
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
								<b>Email</b>: systems@novetum.com
							</li>
							<li>
								<b>Location</b>: B Square 1st floor, <br></br>Huda Enclave, Madhapur
							</li>
						</ul>

						<div className="flex gap-6 md:justify-end justify-center">
							{/* <SocialX /> */}
							<a href="https://www.instagram.com/novetum.ai/" target="_blank" rel="noopener noreferrer">
								<SocialInsta />
							</a>
							<a href="https://www.linkedin.com/company/novetum/" target="_blank" rel="noopener noreferrer">
								<SocialLinkedin />
							</a>

							{/* <SocialPin /> */}
							{/* <SocialYoutube /> */}
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

					{/* <div className="flex gap-6">
						<button className="hover:text-white transition">Terms</button>
						<button className="hover:text-white transition">Privacy</button>
						<button className="hover:text-white transition">Support</button>
					</div> */}
				</div>
			</div>
		</footer>
	);
};
