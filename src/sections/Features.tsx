"use client";
import {motion} from "framer-motion";
import pagecontent from "@/data/pagecontent.json";

export const Features = () => {
	return (
		<section className="bg-white py-24">
			<div className="container">
				{/* Section Header */}
				<div className="section-heading max-w-[640px] mx-auto">
					<div className="flex justify-center">
						<div className="tag">Technical Excellence</div>
					</div>
					<h2 className="section-title mt-5">{pagecontent.advantage.title}</h2>
					<p className="section-des mt-5">
						{pagecontent.problem.conclusion[0]} {pagecontent.problem.conclusion[1]}
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid md:grid-cols-3 gap-8 mt-16">
					{pagecontent.advantage.items.map((item, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 20}}
							whileInView={{opacity: 1, y: 0}}
							transition={{duration: 0.5, delay: index * 0.2}}
							viewport={{once: true}}
							className="p-8 rounded-2xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] hover:shadow-[0_14px_28px_#EAEAEA] transition-shadow"
						>
							<div className="w-12 h-12 bg-gradient-to-br from-[#183EC2] to-[#001E80] rounded-lg flex items-center justify-center mb-6">
								<img src={`https://api.iconify.design/lucide:${index === 0 ? "layers" : index === 1 ? "shield-check" : "zap"}.svg?color=white`} alt={item.title} className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-bold mb-4">{item.title}</h3>
							<p className="text-[#010D3E]/70 leading-relaxed">{item.text}</p>
						</motion.div>
					))}
				</div>

				{/* Process Section */}
				<div className="mt-24">
					<div className="section-heading max-w-[640px] mx-auto">
						<h2 className="section-title">{pagecontent.process.title}</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mt-16">
						{pagecontent.process.steps.map((step, index) => (
							<motion.div
								key={index}
								initial={{opacity: 0, x: -20}}
								whileInView={{opacity: 1, x: 0}}
								transition={{duration: 0.5, delay: index * 0.2}}
								viewport={{once: true}}
								className="relative"
							>
								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#183EC2] to-[#001E80] rounded-full flex items-center justify-center text-white font-bold">
										{step.step}
									</div>
									<div>
										<h4 className="text-lg font-bold mb-2">{step.title}</h4>
										<p className="text-[#010D3E]/70 leading-relaxed">{step.text}</p>
									</div>
								</div>
								{index < pagecontent.process.steps.length - 1 && (
									<div className="hidden md:block absolute top-5 left-[50%] w-full h-[2px] bg-gradient-to-r from-[#183EC2]/20 to-transparent" />
								)}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
