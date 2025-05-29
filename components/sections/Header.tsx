"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";


export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [isOpen]);

	return (
		<header>
			<nav
				className={`fixed top-0 right-0 left-0 w-full z-10 transition-all duration-500 ${
					isScrolled ? "bg-white/100 shadow-md backdrop-blur-md text-black" : "bg-transparent text-white"
				}`}>
				<div className="container flex items-center justify-between w-full px-4 py-6 mx-auto h-[5rem]">
					<Link href="./" onClick={() => setOpen(false)}>
						<Logo />	
					</Link>
					<NavLinks className="hidden space-x-8 md:flex text-xs font-bold tracking-[3px] uppercase" onLinkClick={() => setOpen(false)} />
					<div className="flex md:hidden">
						<Hamburger
							size={25}
							hideOutline={false}
							label="Show menu"
							color={isScrolled ? "#000000" : "#ffffff"}
							toggled={isOpen}
							onToggle={(toggled) => {
								setOpen(toggled);
							}}
						/>
					</div>
				</div>
			</nav>
			<MobileMenu className={`${isOpen ? "z-9 block" : "hidden"}`} onLinkClick={() => setOpen(false)} />
		</header>
	);
}
