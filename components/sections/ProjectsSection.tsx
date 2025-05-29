"use client";
import GalleryImage from "./GalleryImage";
import { projects } from "../../app/data/slides";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-10 bg-black scroll-mt-navbar">
      <div className="container px-4 py-10 mx-auto text-white">
        <h2 className="text-4xl font-extrabold lg:text-5xl">Projects</h2>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div key={project.id} className="flex aspect-video md:max-h-[250px] border-[1px]">
              {project.slides[0].type === 'image' && (
                <GalleryImage 
                  src={project.slides[0].src}
                  alt={project.slides[0].alt}
                  width={project.slides[0].width}
                  height={project.slides[0].height}
                  slides={project.slides}
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}