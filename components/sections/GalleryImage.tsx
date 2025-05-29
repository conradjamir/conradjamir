import Lightbox, { Slide } from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { useState } from "react";
import Image from "next/image";
import type { GallerySlide, IframeSlide } from "@/app/types/slides";

interface GalleryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  slides: GallerySlide[];
}

export default function GalleryImage({
  src,
  alt,
  width,
  height,
  className,
  slides,
}: GalleryImageProps) {
  const [open, setOpen] = useState(false);

  // Updated type guard to handle unknown type
  const isIframeSlide = (slide: unknown): slide is IframeSlide => {
    return (slide as IframeSlide)?.type === "iframe";
  };

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={() => setOpen(true)}
        className={`h-full object-contain cursor-pointer ${className || ""}`}
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Video, Captions]}
        captions={{ showToggle: true }}
        slides={slides as Slide[]}
        render={{
          slide: ({ slide }) => {
            if (isIframeSlide(slide)) {
              const iframeSlide = slide as IframeSlide;
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <iframe
                    src={iframeSlide.src}
                    width={iframeSlide.width}
                    height={iframeSlide.height}
                    title={String(iframeSlide.title)}
                    style={{
                      border: "none",
                      backgroundColor: "#000000"
                    }}
					          sandbox="allow-scripts"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              );
            }
            return undefined;
          },
        }}
      />
    </>
  );
}