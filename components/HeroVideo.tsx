"use client";

export default function HeroVideo() {
  return (
    <section className="hero-video relative w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-auto block"
      >
        <source
          src="https://www.spacebirth2.com/wp-content/uploads/2024/10/d91ec70e-8aa372c9.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-h0 text-center">Spacebirth 2</h1>
      </div>
    </section>
  );
}
