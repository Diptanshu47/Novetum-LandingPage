"use client";
import {motion} from "framer-motion";
import pagecontent from "@/data/pagecontent.json";

export const Intro = () => {
	return (
		<div className="py-8 md:py-12 bg-white">
			<div className="container">
				<div className="flex overflow-hidden" style={{maskImage: "linear-gradient(to right, transparent, black, transparent)"}}>
					<motion.div
						className="flex gap-14 flex-none pr-14"
						animate={{
							translateX: "-50%",
						}}
						transition={{
							duration: 30,
							repeat: Infinity,
							ease: "linear",
							repeatType: "loop",
						}}
					>
						{[...new Array(2)].map((_, setIndex) => (
							<div key={setIndex} className="flex gap-14 flex-none pr-14">
								{pagecontent.intro.map((statement, index) => (
									<div
										key={`${setIndex}-${index}`}
										className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#183EC2]/5 to-[#001E80]/5 rounded-lg border border-[#183EC2]/10"
										style={{minWidth: "400px"}}
									>
										<div className="w-2 h-2 bg-gradient-to-br from-[#183EC2] to-[#001E80] rounded-full flex-shrink-0" />
										<p className="text-sm font-medium text-[#010D3E] whitespace-nowrap">{statement}</p>
									</div>
								))}
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
};
