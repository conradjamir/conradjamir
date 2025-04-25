import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
	return (
		<footer>
			<div className="container flex items-center justify-between px-4 py-8 mx-auto text-white">
				<div><span className="text-xs tracking-[3px]">© 2025 • HUNTINGTON BEACH, CA</span></div>
				<div className="flex gap-4 text-md">
					<a href="https://github.com/conradjamir" target="_blank" rel="noopener noreferrer" title="Follow me on Github">
						<IoLogoGithub />
					</a>
					<a href="https://www.linkedin.com/in/conradjamir/" target="_blank" rel="noopener noreferrer" title="Follow me on LinkedIn">
						<FaLinkedin />
					</a>
					<a href="mailto:conradjamir@gmail.com" title="Email me">
						<IoMdMail />
					</a>
				</div>
			</div>
		</footer>
	);
}
