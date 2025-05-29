"use client";
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

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
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
		</>
	);
}
