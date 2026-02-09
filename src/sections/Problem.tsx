"use client";
import {motion} from "framer-motion";
import pagecontent from "@/data/pagecontent.json";

export const Problem = () => {
	return (
		<section id="oldparadigm" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] text-white overflow-hidden">
			<div className="container">
				<div className="max-w-[640px] mx-auto text-center">
					<motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6}} viewport={{once: true}}>
						<div className="inline-flex px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6">The Old Paradigm</div>
						<h2 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter mb-8">{pagecontent.problem.title}</h2>
					</motion.div>

					{/* Assumptions - Crossed Out */}
					<div className="space-y-4 mb-12">
						{pagecontent.problem.assumptions.map((assumption, index) => (
							<motion.div
								key={index}
								initial={{opacity: 0, x: -20}}
								whileInView={{opacity: 1, x: 0}}
								transition={{duration: 0.5, delay: index * 0.2}}
								viewport={{once: true}}
								className="relative p-4 bg-white/5 border border-white/10 rounded-lg"
							>
								<p className="text-white/60 line-through italic">{assumption}</p>
								<div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500/50" />
							</motion.div>
						))}
					</div>

					{/* Solution */}
					<motion.div
						initial={{opacity: 0, y: 20}}
						whileInView={{opacity: 1, y: 0}}
						transition={{duration: 0.6, delay: 0.8}}
						viewport={{once: true}}
						className="p-8 bg-gradient-to-br from-[#183EC2]/20 to-[#001E80]/20 border border-[#183EC2]/30 rounded-2xl"
					>
						{pagecontent.problem.conclusion.map((text, index) => (
							<p key={index} className="text-lg leading-relaxed mb-3 last:mb-0">
								{text}
							</p>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};
