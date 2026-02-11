"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import pagecontent from "@/data/pagecontent.json";
import Link from "next/link";

export const CallToAction = () => {
	const sectionRef = useRef(null);
	const {scrollYProgress} = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

	return (
		<section id="deploy" ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-12 sm:py-16 overflow-x-clip">
			<div className="container py-8 sm:py-36">
				<div className="section-heading relative">
					<h2 className="section-title">{pagecontent.cta.title}</h2>
					<p className="section-des mt-5">
						{pagecontent.cta.text[0]} {pagecontent.cta.text[1]}
					</p>
					<p className="section-des mt-3">{pagecontent.cta.text[2]}</p>

					<motion.img
						src={starImage.src}
						alt="star image"
						width={360}
						className="absolute -left-[350px] -top-[137px]"
						style={{
							translateY,
						}}
					/>
					<motion.img
						src={springImage.src}
						alt="spring image"
						width={360}
						className="absolute -right-[331px] -top-[19px]"
						style={{
							translateY,
						}}
					/>
				</div>

				<div className="flex gap-2 mt-10 justify-center">
					{/* <a href="/contact">
						<button className="btn btn-primary">Request Partnership</button>
					</a> */}
					<Link href="/contact">
						<button className="btn btn-primary">Request Partnership</button>
					</Link>
					<button className="btn btn-text gap-1">
						{/* <span>View Architecture</span> */}
						{/* <ArrowRight className="h-5 w-5" /> */}
					</button>
				</div>
			</div>
		</section>
	);
};
