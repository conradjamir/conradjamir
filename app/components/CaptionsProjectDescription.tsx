interface CaptionsProjectDescriptionProps {
  role: string;
  technology: string;
  notes: string;
}
export default function CaptionsProjectDescription({ role, technology, notes }: CaptionsProjectDescriptionProps) {
  return (
    <div className="flex justify-center py-4 lg:max-w-[75%] m-auto text-sm">
        <ul>
            <li className="text-white font-bold tracking-[3px] uppercase leading-6 pb-2 hyphens-none">Role: <span className="font-normal">{role}</span></li>
            <li className="text-white font-bold tracking-[3px] uppercase leading-6 pb-2 hyphens-none">Technology: <span className="font-normal">{technology}</span></li>
            <li className="text-white font-bold tracking-[3px] uppercase leading-6 pb-2 hyphens-none">Notes: <span className="font-normal">{notes}</span></li>  
        </ul>
    </div>
  )
}
