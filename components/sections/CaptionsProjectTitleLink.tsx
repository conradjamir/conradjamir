import { HiExternalLink } from "react-icons/hi";

interface CaptionsProjectTitleLinkProps {
	url: string;
	text: string;
}
export default function CaptionsProjectTitleLink({ url, text }: CaptionsProjectTitleLinkProps) {
	return (
		<>
			<a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col text-blue-500">
				<div className="flex items-center justify-start sm:justify-center gap-2"><HiExternalLink className="text-lg" />{text}</div>
			</a>
		</>
	);
}
