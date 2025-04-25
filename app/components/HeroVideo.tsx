export default function HeroVideo() {
	return (
		<>
			<video
				className="absolute inset-0 w-full h-full object-[29%_100%] md:object-center object-cover z-[-1]"
				poster="/images/hero-video-with-portfolio.webp"
				autoPlay
				loop
				muted
				playsInline
				preload="auto">
				<source src="/videos/hero-video-with-portfolio.mp4" type="video/mp4" />
				<source src="/videos/hero-video-with-portfolio.webm" type="video/webm" />
			</video>
			<div className="absolute inset-0 bg-black/30 z-[-1]"></div>
			<div className="absolute w-full z-[-1] bottom-0 h-[300px] mobileLandscape:h-[150px] bg-linear-to-t from-black to-black/0 from-25%"></div>
		</>
	);
}
