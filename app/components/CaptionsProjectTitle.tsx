import { ReactNode } from 'react';

interface CaptionsProjectTitleProps {
  title?: ReactNode;
}
export default function CaptionsProjectTitle({title}: CaptionsProjectTitleProps) {
  return (
    <div className="flex flex-col sm:justify-center sm:ps-[96px] text-white font-bold tracking-[3px] uppercase text-sm text-wrap text-left sm:text-center">
        {title}
    </div>
  )
}
