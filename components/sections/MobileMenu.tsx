import NavLinks from "./NavLinks";

interface MobileMenuProps {
	className?: string;
	onLinkClick?: () => void;
}

export default function MobileMenu({ className = "", onLinkClick }: MobileMenuProps) {
	return (
		<div className={`fixed top-0 left-0 bg-black w-dvw h-dvh ${className}`}>
			<NavLinks
				className="flex flex-col items-center justify-center h-full font-bold tracking-[3px] uppercase text-white text-2xl leading-24 mobileLandscape:leading-12 mobileLandscape:pt-10"
				onLinkClick={onLinkClick}
			/>
		</div>
	);
}
