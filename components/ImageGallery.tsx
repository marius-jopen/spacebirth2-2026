"use client";

import { useState } from "react";
import Lightbox, { Slide } from "yet-another-react-lightbox";
import CdnImage from "@/components/CdnImage";
import { cdnImage } from "@/lib/cdn";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import Html5Video from "@/components/Html5Video";

export interface GalleryItem {
  type: "img" | "video";
  src: string;
  alt?: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
}

export default function ImageGallery({ items }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Build slides for lightbox — both images and videos
  const slides: Slide[] = items.map((item) => {
    if (item.type === "video") {
      return {
        type: "video" as const,
        sources: [{ src: item.src, type: "video/mp4" }],
        autoPlay: true,
        muted: true,
        loop: true,
      };
    }
    return {
      src: cdnImage(item.src),
      alt: item.alt || "",
    };
  });

  return (
    <>
      <div className="masonry-grid">
        {items.map((item, index) => (
          <div
            key={item.src}
            className="cursor-pointer"
            onClick={() => {
              setLightboxIndex(index);
              setLightboxOpen(true);
            }}
          >
            {item.type === "video" ? (
              <Html5Video src={item.src} />
            ) : (
              <CdnImage
                src={item.src}
                alt={item.alt || ""}
                width={1920}
                height={1280}
                className="w-full h-auto"
                loading="lazy"
                sizes="(max-width: 600px) 50vw, (max-width: 1024px) 50vw, 33vw"
              />
            )}
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Video]}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
      />
    </>
  );
}
