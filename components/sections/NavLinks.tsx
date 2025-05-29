import Link from "next/link";

interface NavLinksProps {
	className?: string;
	onLinkClick?: () => void;
}

export default function NavLinks({ className = "", onLinkClick }: NavLinksProps) {
	const navlinks = [
		{ name: "About", href: "/#about" },
		{ name: "Projects", href: "/#projects" },
		{ name: "Contact", href: "/#contact" },
	];

	return (
		<ul className={`${className}`}>
			{navlinks.map((link, index) => (
				<li key={index}>
					<Link href={link.href} className="relative group hover:shadow-none" onClick={onLinkClick}>
						{link.name}
						<span className="underline absolute left-0 -bottom-1 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-[98%]"></span>
					</Link>
				</li>
			))}
		</ul>
	);
}
