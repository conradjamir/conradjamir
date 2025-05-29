import { ReactNode } from 'react';
import CaptionsProjectDescription from "../../components/sections/CaptionsProjectDescription";
import CaptionsProjectTitle from "../../components/sections/CaptionsProjectTitle";

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
      { type: "image", src: "/portfolio/project-1/project01.image01.3024x1890.3024w.jpg", alt: "Home Page", width: 3024, height: 1890, title: <CaptionsProjectTitle title={<>Craig Olsen eCommerce <br /><a href="https://simpleinc.net/craigolsendesign.com/" target="_blank" rel="noopener noreferrer">View Demo Site</a></>} />, description: <CaptionsProjectDescription role="UI/UX | Magento Development" technology="HTML | CSS | Javascript | PHP" notes="Theme customization, banner header design and store setup." /> },
      { type: "image", src: "/portfolio/project-1/project01.image02.3024x1890.3024w.jpg", alt: "About Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-1/project01.image03.3024x1890.3024w.jpg", alt: "Furniture Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-1/project01.image04.3024x1890.3024w.jpg", alt: "Coleman Cabinet Product Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-1/project01.image05.3024x1890.3024w.jpg", alt: "Shopping Cart Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-1/project01.image06.3024x1890.3024w.jpg", alt: "Compare Products Page", width: 3024, height: 1890, title: "", description: ""},
    ]
  },
  {
    id: "project_2",
    slides: [
      { type: "image", src: "/portfolio/project-2/project02.image01.3840x2160.3840w.jpg", alt: "Bedtime Stories | gotmilk?", width: 3840, height: 2560, title: <CaptionsProjectTitle title="Bedtime Stories | gotmilk?" />, description: <CaptionsProjectDescription role="Digital Production | UX/Animation | Development" technology="Adobe CS | HTML5 | CSS | GSAP" notes="Took an active role on the UX/Visual design and digital production to accomplish an HTML5 Display animation that looks and feels like rich media." /> },
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
      { type: "image", src: "/portfolio/project-3/project03.image01.3840x2160.3840w.jpg", alt: "Home Page", width: 3024, height: 1890, title: <CaptionsProjectTitle title={<>#boneslovemilk : Microsite for Freestyle Delivery Activation Campaign <br /><a href="https://simpleinc.net/freestyle-delivery/" target="_blank" rel="noopener noreferrer">View Live Site</a></>} />, description: <CaptionsProjectDescription role="UX | Development " technology="Google API | Bootstrap | JS | Jquery | PHP" notes="Responsible for the overall UX design and development. Custom date counter count down that dynamically changed the layout of the page and activated the Google Maps API implementation that verifies the user’s address is within the Freestyle Delivery Zone. Desktop and Mobile optimized with branded Google maps of pin drop and skull background." /> },
      { type: "image", src: "/portfolio/project-3/project03.image02.3024x1890.3024w.jpg", alt: "Home Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-3/project03.image03.3024x1890.3024w.jpg", alt: "Video Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-3/project03.image04.3024x1890.3024w.jpg", alt: "Team Rider Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-3/project03.image05.3024x1890.3024w.jpg", alt: "Footer Section", width: 3024, height: 1890, title: "", description: ""}
    ]
  },
  {
    id: "project_4",
    slides: [
      { type: "image", src: "/portfolio/project-4/project04.image01.3840x2160.3840w.jpg", alt: "Home Page", width: 3024, height: 1890, title: <CaptionsProjectTitle title={<>United Artist - Adams Family 2 Snapchat AR Lens <br /><a href="https://www.snapchat.com/lens/45f6b23b2f484593830eb65521ae3c1a" target="_blank" rel="noopener noreferrer">View Lens</a></>} />, description: <CaptionsProjectDescription role="Digital Production | Animation" technology="Photoshop | After Effects" notes="Digital Production and After Effects animation from layered PSD" /> }
    ]
  },
  {
    id: "project_5",
    slides: [
      { type: "image", src: "/portfolio/project-5/project05.image01.3024x1890.3024w.jpg", alt: "Home Page", width: 3024, height: 1890, title: <CaptionsProjectTitle title={<>Freds Best Pizza <br /><a href="https://www.simpleinc.net/fredsbestpizza.com/" target="_blank" rel="noopener noreferrer">View Live Site</a></>} />, description: <CaptionsProjectDescription role="UX/UI Design and Development" technology="Bootstrap | JS | Jquery | PHP" notes="Responsible for the UX/UI design, production, and development." /> },
      { type: "image", src: "/portfolio/project-5/project05.image02.3024x1890.3024w.jpg", alt: "Slide 2 Home Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-5/project05.image03.3024x1890.3024w.jpg", alt: "Services Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-5/project05.image04.3024x1890.3024w.jpg", alt: "Pizza Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-5/project05.image05.3024x1890.3024w.jpg", alt: "Catering & Events Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-5/project05.image06.3024x1890.3024w.jpg", alt: "About Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-5/project05.image07.3024x1890.3024w.jpg", alt: "Contact Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-5/project05.image08.3024x1890.3024w.jpg", alt: "Contact Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-5/project05.image09.3024x1890.3024w.jpg", alt: "Contact Page", width: 3024, height: 1890, title: "", description: ""}
    ]
  },
  {
    id: "project_6",
    slides: [
      { type: "image", src: "/portfolio/project-6/project06.image01.3840x2160.3840w.jpg", alt: "Xfinity World Cup | HTML5 Standard Display Banner", width: 3840, height: 2560, title: <CaptionsProjectTitle title="Xfinity World Cup" />, description: <CaptionsProjectDescription role="UX/UI | Digital Production | Animation | Development" technology="Adobe CS | HTML5 | CSS | GSAP" notes="Responsible for the overall UX/UI design, production, and development. Developed an interactive UI to allow the user to reveal a FAN or EXPERT." /> },
      { type: "iframe", src: "/portfolio/project-6/300x600/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 300, height: 600, description: <div className="text-center"><strong>SIZE:</strong> 300x600</div> },
      { type: "iframe", src: "/portfolio/project-6/160x600/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 160, height: 600, description: <div className="text-center"><strong>SIZE:</strong> 160x600</div> },
      { type: "iframe", src: "/portfolio/project-6/300x250/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 300, height: 250, description: <div className="text-center"><strong>SIZE:</strong> 300x250</div> },
      { type: "iframe", src: "/portfolio/project-6/728x90/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 728, height: 90, description: <div className="text-center"><strong>SIZE:</strong> 728x90</div> },
    ]
  },
  {
    id: "project_7",
    slides: [
      { type: "image", src: "/portfolio/project-7/project07.image01.3840x2160.3840w.jpg", alt: "Home Page", width: 3840, height: 2160, title: <CaptionsProjectTitle title="gotmilk? Stay Strong : Instagram Social" />, description: <CaptionsProjectDescription role="Digital Production | Animation" technology="Photoshop | After Effects" notes="Jorge Gutierrez illustrations was provided as static/jpg’s, and the task was to animate them in After Effects for an Instagram video post." /> },
      {
        type: "video",
        title: <CaptionsProjectTitle title="Instagram Video" />,
        description: <div className="text-center"><strong>SIZE:</strong> 1x1</div>,
        width: 1604,
        height: 1604,
        poster: "",
        sources: [{ src: "/portfolio/project-7/project07.video01.1604x1604.1604w-1x1.mp4", type: "video/mp4" }],
      },
      {
        type: "video",
        title: <CaptionsProjectTitle title="Instagram Video" />,
        description: <div className="text-center"><strong>SIZE:</strong> 4x5</div>,
        width: 1604,
        height: 2114,
        poster: "",
        sources: [{ src: "/portfolio/project-7/project07.video02.1604x2114.1604w-4x5.mp4", type: "video/mp4" }],
      },
      {
        type: "video",
        title: <CaptionsProjectTitle title="Instagram Video" />,
        description: <div className="text-center"><strong>SIZE:</strong> 4x5</div>,
        width: 1604,
        height: 2114,
        poster: "",
        sources: [{ src: "/portfolio/project-7/project07.video03.1604x2114.1604w-4x5.mp4", type: "video/mp4" }],
      },
    ]
  },
  {
    id: "project_8",
    slides: [
      { type: "image", src: "/portfolio/project-8/project08.image01.3024x1890.3024w.jpg", alt: "Home Page", width: 3024, height: 1890, title: <CaptionsProjectTitle title={<>Slatespot Dyslexia Tutoring | Homeschooling made simple <br /><a href="https://slatespot.com" target="_blank" rel="noopener noreferrer">View Live Site</a></>} />, description: <CaptionsProjectDescription role="UX/UI Design and Development" technology="Wordpress" notes="Responsible for the UX/UI design, production, and development." /> },
      { type: "image", src: "/portfolio/project-8/project08.image02.3024x1890.3024w.jpg", alt: "Slide 2 Home Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-8/project08.image03.3024x1890.3024w.jpg", alt: "Services Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-8/project08.image04.3024x1890.3024w.jpg", alt: "Pizza Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-8/project08.image05.3024x1890.3024w.jpg", alt: "Pizza Page", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-8/project08.image06.3024x1890.3024w.jpg", alt: "Pizza Page", width: 3024, height: 1890, title: "", description: ""},
    ]
  },
  {
    id: "project_9",
    slides: [
      { type: "image", src: "/portfolio/project-9/project09.image01.3840x2160.3840w.jpg", alt: "gotmilk? Moo Money : Rich Media Expanables | Fullscreen Take Over", width: 3840, height: 2560, title: <CaptionsProjectTitle title="gotmilk? Moo Money : Rich Media Expandables | Fullscreen Take Over" />, description: <CaptionsProjectDescription role="Animation | Development" technology="Adobe CS | HTML5 | CSS | GSAP" notes="Develop rich media expandable using Google DoubleClick Studio API" /> },
      { type: "iframe", src: "/portfolio/project-9/300x600/index.html", title: <CaptionsProjectTitle title="HTML5 Rich Media Ad" />, width: 1200, height: 600, description: <div className="text-center"><strong>SIZE:</strong> 300x600</div> },
      { type: "iframe", src: "/portfolio/project-9/300x250/index.html", title: <CaptionsProjectTitle title="HTML5 Rich Media Ad" />, width: 600, height: 500, description: <div className="text-center"><strong>SIZE:</strong> 300x250</div> },
      { type: "iframe", src: "/portfolio/project-9/728x90/index.html", title: <CaptionsProjectTitle title="HTML5 Rich Media Ad" />, width: 728, height: 500, description: <div className="text-center"><strong>SIZE:</strong> 728x90</div> },
    ]
  },
  {
    id: "project_10",
    slides: [
      { type: "image", src: "/portfolio/project-10/project10.image01.3840x2160.3840w.jpg", alt: "Xfinity Celia : Instagram Social", width: 3840, height: 2160, title: <CaptionsProjectTitle title="Xfinity Celia : Instagram Social" />, description: <CaptionsProjectDescription role="Digital Production | Animation" technology="Photoshop | After Effects" notes="Digital Production and After Effects animation from layered PSD" /> },
      {
        type: "video",
        title: <CaptionsProjectTitle title="Instagram Video" />,
        description: <div className="text-center"><strong>SIZE:</strong> 1x1</div>,
        width: 1080,
        height: 1080,
        poster: "",
        sources: [{ src: "/portfolio/project-10/project10.video01.1080x1080.1080w-1x1.mp4", type: "video/mp4" }],
      },
    ]
  },
  {
    id: "project_11",
    slides: [
      { type: "image", src: "/portfolio/project-11/project11.image01.3840x2160.3840w.jpg", alt: "Xfinity World Cup | HTML5 Standard Display Banner", width: 3840, height: 2560, title: <CaptionsProjectTitle title="Xfinity Black Friday" />, description: <CaptionsProjectDescription role="Digital Production | Animation | Development" technology="Adobe CS | HTML5 | CSS | GSAP" notes="Digital production, layout of the banner resizes. Technical implementation of Flashtalking Dynamic Text/Image API and custom Javascript confetti animation." /> },
      { type: "iframe", src: "/portfolio/project-11/300x600/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 300, height: 600, description: <div className="text-center"><strong>SIZE:</strong> 300x600</div> },
      { type: "iframe", src: "/portfolio/project-11/160x600/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 160, height: 600, description: <div className="text-center"><strong>SIZE:</strong> 160x600</div> },
      { type: "iframe", src: "/portfolio/project-11/300x250/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 300, height: 250, description: <div className="text-center"><strong>SIZE:</strong> 300x250</div> },
      { type: "iframe", src: "/portfolio/project-11/728x90/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 728, height: 90, description: <div className="text-center"><strong>SIZE:</strong> 728x90</div> },
    ]
  },
  {
    id: "project_12",
    slides: [
      { type: "image", src: "/portfolio/project-12/project12.image01.3840x2160.3840w.jpg", alt: "Xfinity Exatlon : Instagram Social", width: 3840, height: 2160, title: <CaptionsProjectTitle title="Xfinity Exatlon : Instagram Social" />, description: <CaptionsProjectDescription role="Digital Production | Animation" technology="Photoshop | After Effects" notes="Digital Production and After Effects animation from layered PSD" /> },
      {
        type: "video",
        title: <CaptionsProjectTitle title="Instagram Video" />,
        description: <div className="text-center"><strong>SIZE:</strong> 1x1</div>,
        width: 1080,
        height: 1080,
        poster: "",
        sources: [{ src: "/portfolio/project-12/project12.video01.1080x1080.1080w-1x1.mp4", type: "video/mp4" }],
      },
    ]
  },
  {
    id: "project_13",
    slides: [
      { type: "image", src: "/portfolio/project-13/project13.image01.3024x1890.3024w.jpg", alt: "Home Page", width: 3024, height: 1890, title: <CaptionsProjectTitle title={<>MNTN/Alpine Rebuild & Optimize<br /><div><a href="https://simpleinc.net/mountain/" target="_blank" rel="noopener noreferrer">View Demo Site</a> | <a href="https://mountain.com/high-performance/" target="_blank" rel="noopener noreferrer">View Live Site</a></div></>} />, description: <CaptionsProjectDescription role="Consulting/Demo in Wordpress Development and Optimization" technology="Wordpress" notes="Complete rebuild in Wordpress and optimized for performance, accessibility, best practices and SEO for Google PageSpeed Insights. Please compare demo site and live site and redo PageSpeed Insight test for live comparison results." /> },
      { type: "image", src: "/portfolio/project-13/project13.image02.3024x1890.3024w.jpg", alt: "Elite Racing Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-13/project13.image03.3024x1890.3024w.jpg", alt: "Services Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-13/project13.image04.3024x1890.3024w.jpg", alt: "Next Gen Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-13/project13.image05.3024x1890.3024w.jpg", alt: "Creative as a Subscription Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-13/project13.image06.3024x1890.3024w.jpg", alt: "Performance Laboratory Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-13/project13.image07.3024x1890.3024w.jpg", alt: "Tech Specs Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-13/project13.image08.3024x1890.3024w.jpg", alt: "Key Performance Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-13/project13.image09.3024x1890.3024w.jpg", alt: "Footer Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-13/project13.image10.3024x1890.3024w.jpg", alt: "Page Speed Insight Desktop Demo Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-13/project13.image11.3024x1890.3024w.jpg", alt: "Page Speed Insight Mobile Demo Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-13/project13.image12.3024x1890.3024w.jpg", alt: "Page Speed Insight Desktop Live Section", width: 3024, height: 1890, title: "", description: ""},
      { type: "image", src: "/portfolio/project-13/project13.image13.3024x1890.3024w.jpg", alt: "Page Speed Insight Mobile Live Section", width: 3024, height: 1890, title: "", description: ""},
    ]
  },
  {
    id: "project_14",
    slides: [
      { type: "image", src: "/portfolio/project-14/project14.image01.3840x2160.3840w.jpg", alt: "Xfinity Exatlon : Instagram Social", width: 3840, height: 2160, title: <CaptionsProjectTitle title="SouthNorte Beer Quarantine : Instagram Social" />, description: <CaptionsProjectDescription role="Digital Production | Animation" technology="Photoshop | After Effects | Premier" notes="Digital Production, After Effects animation, and Premier Video production from Online Video campaigns. A total of 18 videos produced." /> },
      {
        type: "video",
        title: <CaptionsProjectTitle title="Instagram Video" />,
        description: <div className="text-center"><strong>SIZE:</strong> 1x1</div>,
        width: 1080,
        height: 1080,
        poster: "",
        sources: [{ src: "/portfolio/project-14/project14.video01.1080x1080.1080w-1x1.mp4", type: "video/mp4" }],
      },
      {
        type: "video",
        title: <CaptionsProjectTitle title="Instagram Video" />,
        description: <div className="text-center"><strong>SIZE:</strong> 9x16</div>,
        width: 1080,
        height: 1920,
        poster: "",
        sources: [{ src: "/portfolio/project-14/project14.video02.1080x1920.1080w-9x16.mp4", type: "video/mp4" }],
      },
    ]
  },
  {
    id: "project_15",
    slides: [
      { type: "image", src: "/portfolio/project-15/project15.image01.3840x2160.3840w.jpg", alt: "Xfinity Kids Zone : HTML5 Standard Display Banner", width: 3840, height: 2560, title: <CaptionsProjectTitle title="Xfinity Kids Zone" />, description: <CaptionsProjectDescription role="Digital Production | Animation | Development" technology="Adobe CS | HTML5 | CSS | GSAP" notes="Took an active role on the UX, animation, and technical implementation." /> },
      { type: "iframe", src: "/portfolio/project-15/160x600/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 160, height: 600, description: <div className="text-center"><strong>SIZE:</strong> 160x600</div> },
      { type: "iframe", src: "/portfolio/project-15/300x250/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 300, height: 250, description: <div className="text-center"><strong>SIZE:</strong> 300x250</div> },
      { type: "iframe", src: "/portfolio/project-15/728x90/index.html", title: <CaptionsProjectTitle title="HTML5 Display Ad" />, width: 728, height: 90, description: <div className="text-center"><strong>SIZE:</strong> 728x90</div> },
    ]
  },
];

export default projects;