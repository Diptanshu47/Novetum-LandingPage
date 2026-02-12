"use client";
import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";

export const CookieBanner = () => {
	const [showBanner, setShowBanner] = useState(false);

	useEffect(() => {
		// Check if user has already accepted/dismissed the banner
		const hasAccepted = localStorage.getItem("cookieConsent");
		if (!hasAccepted) {
			// Show banner after a short delay for better UX
			const timer = setTimeout(() => {
				setShowBanner(true);
			}, 1500);
			return () => clearTimeout(timer);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookieConsent", "accepted");
		setShowBanner(false);
	};

	const handleDecline = () => {
		localStorage.setItem("cookieConsent", "declined");
		setShowBanner(false);
	};

	return (
		<AnimatePresence>
			{showBanner && (
				<motion.div
					initial={{y: 100, opacity: 0}}
					animate={{y: 0, opacity: 1}}
					exit={{y: 100, opacity: 0}}
					transition={{duration: 0.3, ease: "easeOut"}}
					className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:max-w-md z-50"
				>
					<div className="relative bg-white/95 backdrop-blur-sm border border-[#183EC2]/20 rounded-xl shadow-lg p-4">
						{/* Gradient accent line at top */}
						<div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#183EC2] to-[#001E80] rounded-t-xl" />

						<div className="flex items-start gap-3">
							{/* Cookie Icon */}
							<div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-[#183EC2] to-[#001E80] rounded-lg flex items-center justify-center">
								<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
									/>
								</svg>
							</div>

							{/* Content */}
							<div className="flex-1">
								<h3 className="text-sm font-bold text-[#010D3E] mb-1">Essential Cookies Notice</h3>
								<p className="text-xs text-[#010D3E]/70 leading-relaxed mb-3">We use essential cookies for website functionality and spam prevention. No tracking.</p>

								{/* Buttons */}
								<div className="flex items-center gap-2">
									<button onClick={handleAccept} className="px-4 py-1.5 bg-[#183EC2] text-white rounded-lg text-xs font-medium hover:bg-[#001E80] transition-colors">
										Accept
									</button>
									<button onClick={handleDecline} className="px-4 py-1.5 bg-gray-100 text-[#010D3E] rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors">
										Decline
									</button>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
