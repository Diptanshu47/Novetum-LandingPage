"use client";
import {useState} from "react";
import contactInfo from "@/data/contactinfo.json";

export const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: contactInfo.web3formsAccessKey,
					name: formData.name,
					email: formData.email,
					subject: formData.subject,
					message: formData.message,
					from_name: "Contact Form - Your Website",
				}),
			});

			const result = await response.json();

			if (result.success) {
				setSubmitStatus("success");
				setFormData({
					name: "",
					email: "",
					subject: "",
					message: "",
				});

				// Reset success message after 5 seconds
				setTimeout(() => setSubmitStatus("idle"), 5000);
			} else {
				setSubmitStatus("error");
				setErrorMessage("Something went wrong. Please try again.");
			}
		} catch (error) {
			setSubmitStatus("error");
			setErrorMessage("Failed to send message. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section className="py-20 md:py-24" style={{background: "radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)"}}>
			<div className="container max-w-6xl">
				<div className="text-center mb-12">
					<h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">Get In Touch</h1>
					<p className="text-xl text-[#010D3E] tracking-tight mt-6">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Contact Information */}
					<div className="space-y-6">
						<div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
							<h2 className="text-2xl font-bold text-[#001E80] mb-6">Contact Information</h2>

							<div className="space-y-6">
								{/* Email */}
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-[#183EC2] rounded-lg flex items-center justify-center flex-shrink-0">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">Email</h3>
										<a href={`mailto:${contactInfo.email}`} className="text-[#183EC2] hover:underline">
											{contactInfo.email}
										</a>
									</div>
								</div>

								{/* Phone */}
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-[#183EC2] rounded-lg flex items-center justify-center flex-shrink-0">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">Phone</h3>
										<a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-[#183EC2] hover:underline">
											{contactInfo.phone}
										</a>
									</div>
								</div>

								{/* Address */}
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-[#183EC2] rounded-lg flex items-center justify-center flex-shrink-0">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">Address</h3>
										<p className="text-gray-600">{contactInfo.address}</p>
									</div>
								</div>

								{/* Business Hours */}
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-[#183EC2] rounded-lg flex items-center justify-center flex-shrink-0">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">Business Hours</h3>
										<p className="text-gray-600">{contactInfo.businessHours}</p>
									</div>
								</div>
							</div>

							{/* Social Media - Instagram & LinkedIn Only */}
							<div className="mt-8 pt-8 border-t border-gray-200">
								<h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
								<div className="flex gap-4">
									{/* Instagram */}
									<a
										href={contactInfo.socialMedia.instagram}
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-300"
										aria-label="Instagram"
									>
										<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
										</svg>
									</a>

									{/* LinkedIn */}
									<a
										href={contactInfo.socialMedia.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 bg-[#0077b5] rounded-lg flex items-center justify-center hover:bg-[#006399] transition-all duration-300 hover:shadow-lg"
										aria-label="LinkedIn"
									>
										<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-white rounded-2xl shadow-xl p-8">
						<h2 className="text-2xl font-bold text-[#001E80] mb-6">Send Us a Message</h2>

						{submitStatus === "success" && (
							<div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
								<svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clipRule="evenodd"
									/>
								</svg>
								<div>
									<p className="text-green-800 font-semibold">Message sent successfully!</p>
									<p className="text-green-700 text-sm mt-1">We'll get back to you as soon as possible.</p>
								</div>
							</div>
						)}

						{submitStatus === "error" && (
							<div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
								<svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
										clipRule="evenodd"
									/>
								</svg>
								<div>
									<p className="text-red-800 font-semibold">Oops! Something went wrong.</p>
									<p className="text-red-700 text-sm mt-1">{errorMessage}</p>
								</div>
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
									Name *
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#183EC2] focus:border-transparent outline-none transition"
									placeholder="Your name"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
									Email *
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#183EC2] focus:border-transparent outline-none transition"
									placeholder="your@email.com"
								/>
							</div>

							<div>
								<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
									Subject *
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#183EC2] focus:border-transparent outline-none transition"
									placeholder="How can we help?"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
									Message *
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#183EC2] focus:border-transparent outline-none transition resize-none"
									placeholder="Tell us more about your inquiry..."
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full btn btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
							>
								{isSubmitting ? (
									<>
										<svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Sending...
									</>
								) : (
									"Send Message"
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
