import ContactForm from "./ContactForm";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function ContactSection() {
	return (
		<section id="contact" className="flex items-start py-10 mb-10 text-white md:mb-60 md:px-0 scroll-mt-navbar">
			<div className="container px-4 mx-auto">
				<h1 className="pb-10">Contact Me</h1>	
				<div className="flex flex-col justify-between w-full gap-6 lg:gap-12 flexitems-start md:flex-row">
				<div className="flex flex-col gap-4 mb-8 text-md">
					<p className="max-w-[1/2] mb-4">
						Currently exploring new opportunities and exciting projects. Feel free to reach out with questions, collaboration ideas, or just to start a
						conversation.
					</p>
					<div className="flex items-start gap-6">
						<a href="https://github.com/conradjamir" target="_blank" rel="noopener noreferrer" title="Follow me on Github" className="text-xl">
						<IoLogoGithub size={32} />
						</a>
						
						<a href="https://www.linkedin.com/in/conradjamir/" target="_blank" rel="noopener noreferrer" title="Follow me on LinkedIn">
							<FaLinkedin size={32} />
						</a>
						<a href="mailto:conradjamir@gmail.com" title="Email me">
							<IoMdMail size={32} />
						</a>
					</div>
				</div>
				<ContactForm />
				</div>
			</div>
		</section>
	);
}
