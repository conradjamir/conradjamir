import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function ExperienceAccordion({ content }: { content: string }) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="pb-4 hover:no-underline hover:cursor-pointer">More Info:</AccordionTrigger>
          <AccordionContent className="pb-2">
            { content }
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  