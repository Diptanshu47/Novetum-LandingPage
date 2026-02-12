"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter, usePathname} from "next/navigation";
import {motion} from "framer-motion";
import {Menu} from "lucide-react";
import Logo from "@/assets/novetum logo.png";
import {Sheet, SheetContent, SheetTrigger, SheetTitle} from "@/components/ui/sheet";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import pagecontent from "@/data/pagecontent.json";

const fadeDown = {
	hidden: {opacity: 0, y: -12},
	show: {
		opacity: 1,
		y: 0,
		transition: {duration: 0.4, ease: "easeOut"},
	},
};

export const Header = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		// Close mobile menu
		setOpen(false);

		// Handle smooth scroll for hash links
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
		<motion.header variants={fadeDown} initial="hidden" animate="show" className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
			<div className="container flex h-16 items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 text-2xl font-bold text-black">
					<Image src={Logo} alt="Novetum Logo" className="h-8 w-8" width={32} height={32} />
				</Link>

				{/* Desktop Navigation - Compact */}
				<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-black/70">
					<a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="hover:text-black transition-colors">
						Home
					</a>
					<a href="#oldparadigm" onClick={(e) => handleNavClick(e, "#oldparadigm")} className="hover:text-black transition-colors">
						Old Paradigm
					</a>
					<a href="#technical-excellence" onClick={(e) => handleNavClick(e, "#technical-excellence")} className="hover:text-black transition-colors">
						Capabilities
					</a>
					<a href="#deploy" onClick={(e) => handleNavClick(e, "#deploy")} className="hover:text-black transition-colors">
						Execution Model
					</a>
				</nav>

				{/* Desktop CTA */}
				<div className="hidden lg:block">
					<Link href="/contact" className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-black/90 transition-colors">
						Contact
					</Link>
				</div>

				{/* Mobile Menu */}
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger className="lg:hidden">
						<Menu className="h-6 w-6 text-black" />
					</SheetTrigger>
					<SheetContent side="right" className="w-[280px]">
						<VisuallyHidden>
							<SheetTitle>Mobile Navigation</SheetTitle>
						</VisuallyHidden>
						<nav className="mt-16 flex flex-col items-center gap-6 text-lg font-medium">
							<a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="hover:text-black/70 transition-colors">
								Home
							</a>
							<a href="#oldparadigm" onClick={(e) => handleNavClick(e, "#oldparadigm")} className="hover:text-black/70 transition-colors">
								Execution Model
							</a>
							<a href="#technical-excellence" onClick={(e) => handleNavClick(e, "#technical-excellence")} className="hover:text-black/70 transition-colors">
								Capabilities
							</a>
							<a href="#deploy" onClick={(e) => handleNavClick(e, "#deploy")} className="hover:text-black/70 transition-colors">
								Partnership
							</a>
							<Link
								href="/contact"
								className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white text-base font-medium hover:bg-black/90 transition-colors"
								onClick={() => setOpen(false)}
							>
								Contact Now
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</motion.header>
	);
};
