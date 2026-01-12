import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
	return (
		<footer id="contact" className="bg-black text-[#BCBCBC]">
			{/* Top Section */}
			<div className="container mx-auto px-6 py-20">
				<div className="grid gap-14 md:grid-cols-3">
					{/* Brand */}
					<div>
						<div className="inline-flex relative mb-6 before:content-[''] before:absolute before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
							<Image src={logo} alt="logo" height={40} className="relative" />
						</div>

						<p className="text-sm leading-relaxed max-w-xs">We build modern, scalable digital products with a strong focus on performance, design, and user experience.</p>
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
								<a href="#about" className="hover:text-white transition">
									About
								</a>
							</li>
							<li>
								<a href="#customers" className="hover:text-white transition">
									Customers
								</a>
							</li>
							<li>
								<a href="#updates" className="hover:text-white transition">
									Updates
								</a>
							</li>
							<li className="relative group">
								<span className="cursor-not-allowed text-gray-500">Careers</span>

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
						<h4 className="text-white font-medium mb-6">Let's Connect</h4>

						<ul className="space-y-3 text-sm mb-6">
							<li>Email: contact@yourcompany.com</li>
							<li>Location: Remote</li>
						</ul>

						<div className="flex gap-6 md:justify-end justify-center">
							<SocialX />
							<SocialInsta />
							<SocialLinkedin />
							<SocialPin />
							<SocialYoutube />
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-white/10">
				<div className="container mx-auto px-6 py-6 flex flex-col gap-4 md:flex-row md:justify-between items-center text-sm">
					<p>© {new Date().getFullYear()} Novetum. All rights reserved.</p>

					<div className="flex gap-6">
						<button className="hover:text-white transition">Terms</button>
						<button className="hover:text-white transition">Privacy</button>
						<button className="hover:text-white transition">Support</button>
					</div>
				</div>
			</div>
		</footer>
	);
};
