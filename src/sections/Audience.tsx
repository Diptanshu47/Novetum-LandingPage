"use client";
import {motion} from "framer-motion";
import pagecontent from "@/data/pagecontent.json";

export const Audience = () => {
	return (
		<section className="py-24 bg-white">
			<div className="container">
				<div className="max-w-[640px] mx-auto text-center mb-16">
					<div className="flex justify-center">
						<div className="tag">Strategic Fit</div>
					</div>
					<h2 className="section-title mt-5">{pagecontent.audience.title}</h2>
				</div>

				<div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
					{pagecontent.audience.list.map((item, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: index * 0.1}}
							viewport={{once: true}}
							className="p-6 bg-gradient-to-br from-[#183EC2]/5 to-[#001E80]/5 border border-[#183EC2]/10 rounded-xl hover:border-[#183EC2]/30 transition-all"
						>
							<div className="flex items-start gap-3">
								<img src={`https://api.iconify.design/lucide:check-circle.svg?color=%23183EC2`} alt="check" className="w-6 h-6 flex-shrink-0 mt-1" />
								<p className="text-[#010D3E] font-medium leading-relaxed">{item}</p>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: 0.6}} viewport={{once: true}} className="mt-12 text-center">
					<p className="text-xl font-bold text-[#183EC2]">{pagecontent.audience.closing}</p>
				</motion.div>
			</div>
		</section>
	);
};
