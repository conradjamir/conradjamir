import { ReactNode } from 'react';
import CaptionsProjectDescription from "../components/CaptionsProjectDescription";
import CaptionsProjectTitle from "../components/CaptionsProjectTitle";
import Link from "next/link";

export interface BaseSlide {
  width: number;
  height: number;
  title?: ReactNode;
  description?: ReactNode;
}

export interface ImageSlide extends BaseSlide {
  type: "image";
  src: string;
  alt: string;
}

export interface VideoSlide extends BaseSlide {
  type: "video";
  poster?: string;
  sources: Array<{
    src: string;
    type: string;
  }>;
}

export interface IframeSlide extends BaseSlide {
  type: "iframe";
  src: string;
  title?: ReactNode;
}

export type GallerySlide = ImageSlide | VideoSlide | IframeSlide;

interface Project {
  id: string;
  slides: GallerySlide[];
}

export const projects: Project[] = [
  {
    id: "project_1",
    slides: [
      { type: "image", src: "/portfolio/project-1/project01.image01.3024x1890.3024w.jpg", alt: "Home Page", width: 3024, height: 1890, title: <CaptionsProjectTitle title={<>Craig Olsen eCommerce <br /><a href="https://simpleinc.net/craigolsendesign.com/" target="_blank">View Live Site</a></>} />, description: <CaptionsProjectDescription role="UI/UX | Magento Development" technology="HTML | CSS | Javascript | PHP" notes="Theme customization, banner header design and store setup." /> },
      { type: "image", src: "/portfolio/project-1/project01.image02.3024x1890.3024w.jpg", alt: "About Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-1/project01.image03.3024x1890.3024w.jpg", alt: "Furniture Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-1/project01.image04.3024x1890.3024w.jpg", alt: "Furniture Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-1/project01.image05.3024x1890.3024w.jpg", alt: "Furniture Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-1/project01.image06.3024x1890.3024w.jpg", alt: "Furniture Page", width: 3024, height: 1890, title: "", description: ""},
      {
        type: "video",
        title: "",
        description: "",
        width: 1280,
        height: 720,
        poster: "/portfolio/project-3/project03.video01.3024x1890.3024w.jpg",
        sources: [{ src: "/portfolio/project-3/project03.video01.3024x1890.3024w.mp4", type: "video/mp4" }],
      },
    ]
  },
  {
    id: "project_2",
    slides: [
      { type: "image", src: "/portfolio/project-2/project03.image01.3840x2160.3840w.jpg", alt: "Crab", width: 3840, height: 2560, title: <CaptionsProjectTitle title="Bedtime Stories | gotmilk?" />, description: <CaptionsProjectDescription role="Digital Production | UX/Animation | Development" technology="Adobe CS | HTML5 | CSS | GSAP" notes="Took an active role on the UX/Visual design and digital production to
accomplish an HTML5 Display animation that looks and feels like rich media." /> },
      { type: "iframe", src: "/portfolio/project-2/300x600/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 300, height: 600, description: <div className="text-center"><strong>SIZE:</strong> 300x600</div> },
      { type: "iframe", src: "/portfolio/project-2/160x600/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 160, height: 600, description: <div className="text-center"><strong>SIZE:</strong> 160x600</div> },
      { type: "iframe", src: "/portfolio/project-2/300x250/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 300, height: 250, description: <div className="text-center"><strong>SIZE:</strong> 300x250</div> },
      { type: "iframe", src: "/portfolio/project-2/970x250/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 970, height: 250, description: <div className="text-center"><strong>SIZE:</strong> 970x250</div> },
      { type: "iframe", src: "/portfolio/project-2/728x90/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 728, height: 90, description: <div className="text-center"><strong>SIZE:</strong> 728x90</div> },
    ]
  },
  {
    id: "project_3",
    slides: [
      { type: "image", src: "/portfolio/project-3/project03.image01.3840x2160.3840w.jpg", alt: "Home Page", width: 3024, height: 1890, title: <CaptionsProjectTitle title={<>#boneslovemilk : Microsite for Freestyle Delivery Activation Campaign <br /><Link href="/portfolio/project-3/html/index.html" target="_blank">View Live Site</Link></>} />, description: <CaptionsProjectDescription role="UX | Development " technology="Google API | Bootstrap | JS | Jquery | PHP" notes="Responsible for the overall UX design and development. Custom date counter count down that dynamically changed the layout of the page and activated the Google Maps API implementation that verifies the user’s address is within the Freestyle Delivery Zone. Desktop and Mobile optimized with branded Google maps of pin drop and skull background." /> },
      { type: "image", src: "/portfolio/project-3/project03.image02.3024x1890.3024w.jpg", alt: "About Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-3/project03.image03.3024x1890.3024w.jpg", alt: "Furniture Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-3/project03.image04.3024x1890.3024w.jpg", alt: "Furniture Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-3/project03.image05.3024x1890.3024w.jpg", alt: "Furniture Page", width: 3024, height: 1890, title: "", description: ""}
    ]
  },
  {
    id: "project_4",
    slides: [
      { type: "image", src: "/portfolio/project-4/project04.image01.3840x2160.3840w.jpg", alt: "Home Page", width: 3024, height: 1890, title: <CaptionsProjectTitle title={<>United Artist - Adams Family 2 Snapchat AR Lens <br /><a href="https://www.snapchat.com/lens/45f6b23b2f484593830eb65521ae3c1a" target="_blank">View Lens</a></>} />, description: <CaptionsProjectDescription role="Digital Production | Animation" technology="Photoshop | After Effects" notes="Digital Production and After Effects animation from layered PSD" /> }
    ]
  },
];

export default projects;