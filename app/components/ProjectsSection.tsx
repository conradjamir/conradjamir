export default function ProjectsSection() {
	return (
		<section id="projects" className="bg-black scroll-mt-navbar">
			<div className="container px-4 py-10 mx-auto text-white">
			<h2 className="text-4xl font-extrabold lg:text-5xl">Projects</h2>
			</div>
			
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<div className="w-full h-full text-center bg-red-500">1</div>
				<div className="w-full h-full bg-red-300">1</div>
				<div className="w-full bg-red-100">1</div>
				<div className="w-full bg-red-900">1</div>
			</div>
		</section>
	);
}
