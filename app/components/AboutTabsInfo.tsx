import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { SwatchBook } from "lucide-react";
import { Paintbrush } from "lucide-react";
import { BringToFront } from "lucide-react";
import { Megaphone } from "lucide-react";
import { PencilRuler } from "lucide-react";
import { Code } from "lucide-react";
import { Newspaper } from "lucide-react";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiAdobecreativecloud } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa6";
import { SiWebflow } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GoCopilot } from "react-icons/go";
import { ExperienceAccordion } from "./ExperienceAccordion";

export default function AboutTabsInfo() {
	return (
		<Tabs defaultValue="experience" className="w-full lg:pr-6">
			<TabsList className="grid w-full grid-cols-3 p-0 border-b border-b-gray-500">
				<TabsTrigger
					value="experience"
					className="rounded-none text-white data-[state=active]:bg-black data-[state=active]:border-b-white ata-[state=active]:border-b-2 cursor-pointer">
					Experience
				</TabsTrigger>
				<TabsTrigger
					value="skills"
					className="rounded-none text-white data-[state=active]:bg-black data-[state=active]:border-b-white ata-[state=active]:border-b-2 cursor-pointer">
					Skills
				</TabsTrigger>
				<TabsTrigger
					value="tools"
					className="rounded-none text-white data-[state=active]:bg-black data-[state=active]:border-b-white ata-[state=active]:border-b-2 cursor-pointer">
					Tools
				</TabsTrigger>
			</TabsList>
			<TabsContent value="experience">
                <div className="pt-8 pb-6">
					<div className="flex flex-wrap justify-between gap-2">
						<span>
							<strong>Gallegos United,</strong> Huntington Beach, CA
							<br />
							Sr. Front End Software Engineer
						</span>
						<span>Feb 2016 - Dec 2024</span>
					</div>
					<ExperienceAccordion content="Front End Software Engineer to combine the art of design with the art of coding. Responsibilities include creation and translation of UI/UX designs to front-end code that will produce online display ads, micro sites and other forms of digital campaigns. Also, work with creative teams to bridge the gap between visual design and technical implementation, taking an active role on both sides and defining how the digital creative looks as well as how it works." />
				</div>
				<div className="py-8 border-t-[1px] border-t-gray-500 border-dotted">
					<div className="flex flex-wrap justify-between gap-2">
						<span>
							<strong>LifeScience Media</strong>, Fullerton, CA
							<br />
							Front End UX/UI Designer/Developer
						</span>
						<span>Sep 2009 - Jan 2016</span>
					</div>
					<ExperienceAccordion content="Responsible for Design, Development and Maintenance of websites and various digital campaigns. Specializing in Front End UX/UI Design and Development of touch screen kiosks, iPad apps, dvd menus, and mobile apps." />
				</div>  
			</TabsContent>
			<TabsContent value="skills">
				<div className="flex flex-wrap justify-center gap-6 py-8">
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit">
						<SwatchBook /> Branding
					</div>
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit">
						<Paintbrush /> Digital Production
					</div>
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit">
						<BringToFront /> Social Animation
					</div>
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit">
						<Megaphone />
						Advertising
					</div>
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit">
						<PencilRuler />
						UI/UX
					</div>
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit">
						<Code />
						Web Development
					</div>
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit">
						<BringToFront />
						UI Animation
					</div>
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit">
						<Newspaper />
						Print
					</div>
				</div>
			</TabsContent>
			<TabsContent value="tools">
				<div className="flex flex-wrap justify-center gap-6 py-8">
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit max-h-[50px]">
						<BiLogoVisualStudio className="text-2xl" /> VS Code
					</div>
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit max-h-[50px]">
						<GoCopilot className="text-2xl" /> Copilot
					</div>
                    <div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit max-h-[50px]">
						<RiNextjsFill className="text-3xl" />
						NextJS
					</div>
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit max-h-[50px]">
						<FaWordpress className="text-2xl" />
						Wordpress
					</div>
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit max-h-[50px]">
						<SiWebflow className="text-2xl" />
						Webflow
					</div>
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit max-h-[50px]">
						<SiFramer className="text-2xl" />
						Motion
					</div>
                    <div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit max-h-[50px]">
						<SiWebflow className="text-2xl" />
						GSAP
					</div>
                    <div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit max-h-[50px]">
						<SiAdobecreativecloud className="text-2xl" /> Adobe Creative Suite
					</div>
					<div className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit max-h-[50px]">
						<IoLogoFigma className="text-2xl" /> Figma
					</div>
					
				</div>
			</TabsContent>
		</Tabs>
	);
}
