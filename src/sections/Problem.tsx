"use client";

import {motion} from "framer-motion";
import {AlertTriangle} from "lucide-react";
import pagecontent from "@/data/pagecontent.json";

export const Problem = () => {
	return (
		<section id="oldparadigm" className="py-28 bg-gradient-to-b from-[#0b0b0f] to-[#12121a] text-white">
			<div className="container max-w-4xl mx-auto px-6">
				{/* Label */}
				<motion.div initial={{opacity: 0, y: 16}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.5}} className="mb-6 text-center">
					<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm">The Old Paradigm</span>
				</motion.div>

				{/* Title */}
				<motion.h2
					initial={{opacity: 0, y: 16}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.6}}
					viewport={{once: true}}
					className="text-center text-3xl md:text-5xl font-semibold tracking-tight mb-12"
				>
					{pagecontent.problem.title}
				</motion.h2>

				{/* Failure points */}
				<div className="space-y-4 mb-12">
					{pagecontent.problem.assumptions.map((assumption, index) => (
						<motion.div
							key={index}
							initial={{opacity: 0, y: 12}}
							whileInView={{opacity: 1, y: 0}}
							transition={{delay: index * 0.15}}
							viewport={{once: true}}
							className="
                flex items-start gap-4
                p-5
                bg-white/[0.03]
                border border-white/10
                rounded-xl
                hover:border-red-500/30
                transition-colors
              "
						>
							<AlertTriangle className="text-red-400 mt-0.5 shrink-0" size={18} />

							<p className="text-white/80 leading-relaxed">{assumption}</p>
						</motion.div>
					))}
				</div>

				{/* Conclusion */}
				<motion.div
					initial={{opacity: 0, y: 18}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.6}}
					viewport={{once: true}}
					className="
            p-8
            rounded-2xl
            bg-gradient-to-br from-blue-600/10 to-blue-900/10
            border border-blue-500/20
          "
				>
					{pagecontent.problem.conclusion.map((text, index) => (
						<p key={index} className="text-lg text-white/90 leading-relaxed mb-3 last:mb-0">
							{text}
						</p>
					))}
				</motion.div>
			</div>
		</section>
	);
};
