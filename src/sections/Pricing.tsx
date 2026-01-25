"use client";
import CheckIcon from "@/assets/check.svg";
import {twMerge} from "tailwind-merge";
import {motion} from "framer-motion";
import pagecontent from "@/data/pagecontent.json";

const pricingTiers = [
	{
		title: pagecontent.enables.items[0].title,
		description: pagecontent.enables.items[0].text,
		popular: false,
		inverse: false,
	},
	{
		title: pagecontent.enables.items[1].title,
		description: pagecontent.enables.items[1].text,
		popular: true,
		inverse: true,
	},
	{
		title: pagecontent.enables.items[2].title,
		description: pagecontent.enables.items[2].text,
		popular: false,
		inverse: false,
	},
];

export const Pricing = () => {
	return (
		<section id="about" className="py-24 bg-white">
			<div className="container">
				<div className="section-heading">
					<h2 className="section-title">{pagecontent.enables.title}</h2>
					<p className="section-des mt-5">{pagecontent.problem.conclusion[2]}</p>
				</div>

				<div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
					{pricingTiers.map(({title, description, popular, inverse}) => (
						<div
							key={title}
							className={twMerge("p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full", inverse === true && "border-black bg-black text-white")}
						>
							<div className="flex justify-between">
								<h3 className={twMerge("text-lg font-bold text-black/50", inverse && "text-white/60")}>{title}</h3>
								{popular && (
									<div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
										<motion.span
											animate={{
												backgroundPositionX: "-100%",
											}}
											transition={{
												duration: 1,
												repeat: Infinity,
												ease: "linear",
												repeatType: "loop",
											}}
											className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
										>
											Core
										</motion.span>
									</div>
								)}
							</div>
							<div className="mt-[30px]">
								<p className={twMerge("text-sm leading-relaxed", inverse && "text-white/80")}>{description[0]}</p>
								{description[1] && <p className={twMerge("text-sm leading-relaxed mt-4", inverse && "text-white/80")}>{description[1]}</p>}
							</div>
							<button className={twMerge("btn btn-primary w-full mt-[30px]", inverse && "bg-white text-black")}>Learn More</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
