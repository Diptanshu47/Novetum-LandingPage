"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import React from "react";
import {twMerge} from "tailwind-merge";
import {motion} from "framer-motion";
import pagecontent from "@/data/pagecontent.json";

const testimonials = [
	{
		text: "Novetum transformed our global infrastructure. We went from managing fragmented systems to commanding a unified presence across continents.",
		imageSrc: avatar1.src,
		name: "Sarah Chen",
		username: "@sarahchen_tech",
	},
	{
		text: "The Sovereign Span changed everything. Our latency issues disappeared, and we finally have true visibility across all our operations.",
		imageSrc: avatar2.src,
		name: "Marcus Rodriguez",
		username: "@mrodriguez_cto",
	},
	{
		text: "We needed to scale globally without losing control. Novetum made it possible to expand deliberately while maintaining architectural clarity.",
		imageSrc: avatar3.src,
		name: "Priya Malhotra",
		username: "@priyamalhotra",
	},
	{
		text: "Distance is no longer a constraint for us. Novetum's infrastructure allows us to serve users worldwide as if they were local.",
		imageSrc: avatar4.src,
		name: "David Kim",
		username: "@davidkim_ops",
	},
	{
		text: "The anticipatory load intelligence is remarkable. Our systems adapt before we even see the demand spike coming.",
		imageSrc: avatar5.src,
		name: "Elena Petrov",
		username: "@elenap_eng",
	},
	{
		text: "We maintain sovereignty over our data and policies regardless of where our users are. That's the game changer.",
		imageSrc: avatar6.src,
		name: "James Watson",
		username: "@jwatson_security",
	},
	{
		text: "Novetum doesn't just solve problems—it redefines what's possible with global infrastructure.",
		imageSrc: avatar7.src,
		name: "Aisha Rahman",
		username: "@aisha_devops",
	},
	{
		text: "Our partnership with Novetum allowed us to establish territorial presence with confidence. Expansion became strategic, not chaotic.",
		imageSrc: avatar8.src,
		name: "Thomas Anderson",
		username: "@tanderson_ceo",
	},
	{
		text: "The unified command plane gives us panoramic visibility. Every node, every region, every connection—all manageable from one place.",
		imageSrc: avatar9.src,
		name: "Mei Lin",
		username: "@meilin_platform",
	},
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {className?: string; testimonials: typeof testimonials; duration?: number}) => {
	return (
		<div className={props.className}>
			<motion.div
				animate={{
					translateY: "-50%",
				}}
				transition={{
					duration: props.duration || 10,
					repeat: Infinity,
					ease: "linear",
					repeatType: "loop",
				}}
				className="flex flex-col gap-6 pb-6"
			>
				{[
					...new Array(2).fill(0).map((_, index) => (
						<React.Fragment key={index}>
							{props.testimonials.map(({text, imageSrc, name, username}) => (
								<div className="card" key={username}>
									<div>{text}</div>
									<div className="flex items-center gap-2 mt-5">
										<Image width={40} height={40} src={imageSrc} alt={name} className="h-10 w-10 rounded-full" />
										<div className="flex flex-col">
											<div className="font-medium tracking-tight leading-5">{name}</div>
											<div className="leading-5 tracking-tight">{username}</div>
										</div>
									</div>
								</div>
							))}
						</React.Fragment>
					)),
				]}
			</motion.div>
		</div>
	);
};

export const Testimonials = () => {
	return (
		<section id="partnerships" className="bg-white py-24">
			<div className="container">
				<div className="section-heading">
					<div className="flex justify-center">
						<div className="tag">{pagecontent.partnership.content[0]}</div>
					</div>

					<h2 className="section-title mt-5">{pagecontent.partnership.title}</h2>
					<p className="section-des mt-5">{pagecontent.partnership.content[1]}</p>
				</div>

				{/* Case Study Highlight */}
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.6}}
					viewport={{once: true}}
					className="max-w-[800px] mx-auto mt-12 mb-16 p-8 bg-gradient-to-br from-[#183EC2]/10 to-[#001E80]/10 border-2 border-[#183EC2]/20 rounded-2xl"
				>
					<div className="flex items-start gap-4 mb-4">
						<img src="https://api.iconify.design/lucide:building-2.svg?color=%23183EC2" alt="case study" className="w-8 h-8 flex-shrink-0" />
						<div>
							<h3 className="text-xl font-bold text-[#183EC2] mb-2">Featured Partnership</h3>
							<p className="text-[#010D3E] leading-relaxed mb-3">{pagecontent.partnership.content[2]}</p>
							<p className="text-[#010D3E] leading-relaxed mb-3">{pagecontent.partnership.content[3]}</p>
							<p className="text-[#010D3E] font-medium italic">{pagecontent.partnership.content[4]}</p>
						</div>
					</div>
				</motion.div>

				<div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
					<TestimonialsColumn testimonials={firstColumn} duration={15} />
					<TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
					<TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
				</div>
			</div>
		</section>
	);
};
