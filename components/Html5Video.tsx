"use client";

import { useRef, useEffect } from "react";

interface Html5VideoProps {
  src: string;
  className?: string;
}

export default function Html5Video({ src, className = "" }: Html5VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.src = src;
          videoRef.current.load();
          observer.unobserve(container);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto"
      />
    </div>
  );
}
