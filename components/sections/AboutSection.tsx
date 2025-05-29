import AboutTabsInfo from "@/components/sections/AboutTabsInfo";
import Image from "next/image";

export default function AboutSection() {
	return (
		<section id="about" className="flex items-center justify-center py-10 bg-black bg-center bg-cover lg:py-20 md:px-0 scroll-mt-navbar">
			<div className="container flex flex-col items-center gap-8 px-4 mx-auto lg:items-start lg:justify-between lg:flex-row">
				<div className="text-white lg:py-0 lg:w-3/4">
					<h2 className="text-4xl font-extrabold lg:text-5xl">About Me</h2>
					<p className="pb-8">
						I’m a multidisciplinary front-end developer and creative producer with over 20 years of experience. For the past several years, I’ve focused on developing animated digital ads, social media content, static creatives, and landing pages for major campaigns. I combine
						strong technical skills with creative storytelling to deliver polished digital experiences across multiple platforms.
					</p>
					<AboutTabsInfo />					
				</div>

				<div className="flex flex-col bg-black rounded-full aspect-square">
					<div className="hidden mt-8 lg:block"></div>
					<Image src="/images/me.webp" alt="me" width={300} height={379} className="w-full"/>
				</div>
			</div>
		</section>
	);
}
