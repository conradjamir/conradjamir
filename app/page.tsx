"use client";
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
	const pathname = usePathname();
  	const searchParams = useSearchParams();

	useEffect(() => {
	const hash = searchParams.get('hash') || window.location.hash.replace('#', '');
	if (hash) {
		const element = document.getElementById(hash);
		if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
		}
	}
	}, [pathname, searchParams]);
	
	return (
		<>
			<Hero />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
		</>
	);
}
