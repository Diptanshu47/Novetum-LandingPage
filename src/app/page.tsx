import {CallToAction} from "@/sections/CallToAction";
import {Footer} from "@/sections/Footer";
import {Header} from "@/sections/Header";
import {Hero} from "@/sections/Hero";
import {Intro} from "@/sections/Intro";
import {Problem} from "@/sections/Problem";
import {ProductShowcase} from "@/sections/ProductShowcase";
import {Pricing} from "@/sections/Pricing";
import {Features} from "@/sections/Features";
import {Testimonials} from "@/sections/Testimonials";
import {Audience} from "@/sections/Audience";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<Intro />
			<Problem />
			{/* <ProductShowcase /> */}
			<Pricing />
			<Features />
			{/* <Testimonials /> */}
			<Audience />
			<CallToAction />
			<Footer />
		</div>
	);
}
