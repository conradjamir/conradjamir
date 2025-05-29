import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { SwatchBook, Paintbrush, BringToFront, Megaphone, PencilRuler, Code, Newspaper } from "lucide-react";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiAdobecreativecloud } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa6";
import { SiWebflow } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GoCopilot } from "react-icons/go";
import { ExperienceAccordion } from "./ExperienceAccordion";
import { AboutData } from "@/app/types/about";
import { ComponentType } from "react";

interface IconProps {
    className?: string;
}

const iconMap: { [key: string]: ComponentType<IconProps> } = {
    SwatchBook,
    Paintbrush,
    BringToFront,
    Megaphone,
    PencilRuler,
    Code,
    Newspaper,
    BiLogoVisualStudio,
    SiAdobecreativecloud,
    IoLogoFigma,
    FaWordpress,
    SiWebflow,
    SiFramer,
    SiTailwindcss,
    SiBootstrap,
    RiNextjsFill,
    GoCopilot
};

interface AboutTabsInfoProps {
    data: AboutData;
}

export default function AboutTabsInfo({ data }: AboutTabsInfoProps) {
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
                {data.experiences.map((exp, index) => (
                    <div key={exp.company} className={`${index > 0 ? 'py-8 border-t-[1px] border-t-gray-500 border-dotted' : 'pt-8 pb-6'}`}>
                        <div className="flex flex-wrap justify-between gap-2">
                            <span>
                                <strong>{exp.company},</strong> {exp.location}
                                <br />
                                {exp.title}
                            </span>
                            <span>{exp.period}</span>
                        </div>
                        <ExperienceAccordion content={exp.description} />
                    </div>
                ))}
			</TabsContent>
			<TabsContent value="skills">
				<div className="flex flex-wrap justify-center gap-6 py-8">
                    {data.skills.map((skill) => {
                        const IconComponent = iconMap[skill.icon];
                        return (
                            <div key={skill.name} className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit">
                                <IconComponent /> {skill.name}
                            </div>
                        );
                    })}
				</div>
			</TabsContent>
			<TabsContent value="tools">
				<div className="flex flex-wrap justify-center gap-6 py-8">
                    {data.tools.map((tool) => {
                        const IconComponent = iconMap[tool.icon];
                        return (
                            <div key={tool.name} className="flex justify-center items-center gap-2 px-6 py-3 text-white border-[1px] rounded-full w-fit max-h-[50px]">
                                <IconComponent className={tool.icon.includes('Next') ? 'text-3xl' : 'text-2xl'} /> {tool.name}
                            </div>
                        );
                    })}
				</div>
			</TabsContent>
		</Tabs>
	);
}
