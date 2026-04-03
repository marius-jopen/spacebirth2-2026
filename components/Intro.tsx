"use client";

import { useState, useEffect } from "react";
import CdnImage from "@/components/CdnImage";

export default function Intro() {
  const [hidden, setHidden] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setHidden(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animating]);

  const handleClick = () => {
    setAnimating(true);
  };

  if (hidden) return null;

  return (
    <div
      className={`intro ${animating ? "animatehide" : ""}`}
      onClick={handleClick}
    >
      <CdnImage
        src="/images/shared/intro.jpg"
        alt="Spacebirth 2"
        fill
        className="object-contain !rounded-none"
        priority
      />
    </div>
  );
}
