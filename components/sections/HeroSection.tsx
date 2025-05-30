"use client";
import HeroVideo from "@/components/sections/HeroVideo";
import HeroBadge from "@/components/sections/HeroBadge";

export default function HeroSection() {
	return (
		<section className="relative w-full mx-auto bg-black h-dvh z-2">
			<HeroVideo />
			<div className="relative top-[30px] container flex flex-col-reverse py-20 justify-between px-4 mx-auto h-dvh scroll-mt-25 md:flex-row md:justify-between md:items-center z-3">
				<div className="flex items-center justify-end text-left md:items-end md:w-2/3 lg:w-3/4 md:h-dvh md:pb-30 md:text-left mobileLandscape:w-full mobileLandscape:text-right mobileLandscape:items-end mobileLandscape:h-full mobileLandscape:pb-0 mobileLandscape:flex-col">
					<div>
						<h1 className="lg:!text-6xl text-5xl text-white font-extrabold">
							Production. Design. <br className="md:hidden" />
							Development.
						</h1>
						<p className="text-lg text-white">
							Bringing brands to life through animation, code, and design <br className="hidden mobileLandscape:inline" />— from digital ads to interactive web&nbsp;experiences.
						</p>
					</div>
				</div>
				<HeroBadge />
			</div>
		</section>
	);
}
