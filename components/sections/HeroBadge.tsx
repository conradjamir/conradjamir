import Link from "next/link";

export default function HeroBadge() {
	return (
		<div className="flex items-center justify-end md:items-center md:h-dvh z-11 mobileLandscape:hidden">
			<Link href="#projects" title="Navigate to preview my project" aria-label="Navigate to preview my project">
				<div className="relative p-2 md:p-3 text-[0.55rem] font-bold tracking-[.21em] border-2 border-white rounded-full md:w-55 md:h-55 lg:w-65 lg:h-65 w-40 h-40 animate-[spin_10s_linear_infinite] transition-all duration-500 hover:paused">
					<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
						<path
							id="circlePath"
							fill="none"
							d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0"
						/>
						<text fill="white">
							<textPath href="#circlePath">OPEN FOR WORK • PREVIEW MY PROJECTS • </textPath>
						</text>
						<title> • OPEN FOR WORK • PREVIEW MY PROJECTS</title>
					</svg>
					<div>
						<svg
							id="uuid-02464b7b-d00d-46d2-9c16-7c356f1e4503"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 31.07 31.08"
							className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 lg:w-10 lg:h-10 top-1/2 left-1/2 fill-white">
							<polygon points="7.27 0 7.27 3 25.95 3 0 28.96 2.12 31.08 28.07 5.12 28.07 24.37 31.07 24.37 31.07 0 7.27 0" />
							<title>Diagonal arrow</title>
						</svg>
					</div>
				</div>
			</Link>
		</div>
	);
}
