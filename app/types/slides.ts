import { ReactNode } from 'react';

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

export interface Project {
  id: string;
  slides: GallerySlide[];
}
