"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {Menu} from "lucide-react";
// import Logo from "@/assets/logosaas.png";
import Logo from "@/assets/novetum logo.png";
import {Button} from "@/components/ui/button";
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

	return (
		<motion.header variants={fadeDown} initial="hidden" animate="show" className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
			<div className="container flex h-16 items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 text-2xl font-bold text-black">
					{/* <span className="font-serif font-bold tracking-tight text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#1E40AF]">{pagecontent.brand}</span> */}
					<img src={Logo.src} alt="Novetum Logo" className="h-8 w-8" />
				</Link>

				{/* Desktop Navigation */}
				{/* <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-black/70">
					<a href="#home" className="transition hover:text-black">
						Home
					</a>
					<a href="#sovereign-span" className="transition hover:text-black">
						The Sovereign Span
					</a>
					<a href="#partnerships" className="transition hover:text-black">
						Partnerships
					</a>
					<a href="#deploy" className="transition hover:text-black">
						Deploy
					</a>
				</nav> */}

				{/* Desktop CTA */}
				<div className="hidden md:block">
					<Button className="rounded-lg bg-black text-white hover:bg-black/90">
						<a href="/contact">Contact Now</a>
					</Button>
				</div>

				{/* Mobile Menu */}
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger className="md:hidden">
						<Menu className="h-6 w-6 text-black" />
					</SheetTrigger>

					<SheetContent side="right" className="w-[280px]">
						<VisuallyHidden>
							<SheetTitle>Mobile Navigation</SheetTitle>
						</VisuallyHidden>

						{/* <nav className="mt-16 flex flex-col items-center gap-6 text-lg font-medium">
							<a href="#home" onClick={() => setOpen(false)}>
								Home
							</a>
							<a href="#sovereign-span" onClick={() => setOpen(false)}>
								The Sovereign Span
							</a>
							<a href="#partnerships" onClick={() => setOpen(false)}>
								Partnerships
							</a>
							<a href="#deploy" onClick={() => setOpen(false)}>
								Deploy
							</a>

							<Button className="mt-4 w-full rounded-lg bg-black text-white hover:bg-black/90" onClick={() => setOpen(false)}>
								<a href="#contact">Contact Now</a>
							</Button>
						</nav> */}
					</SheetContent>
				</Sheet>
			</div>
		</motion.header>
	);
};
