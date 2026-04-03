import type { Metadata } from "next";
import GameEmbed from "@/components/GameEmbed";

export const metadata: Metadata = {
  title: "Spacebirth 2 — Game",
};

export default function GamePage() {
  return (
    <div className="pt-[80px] sm:pt-[100px]">
      <section className="page-container mb-[5%]">
        <div className="grid grid-cols-12 gap-x-[1%]">
          <div className="col-span-12 sm:col-span-10 sm:col-start-2">
            <GameEmbed />
          </div>
        </div>
      </section>

      <section className="page-container">
        <p className="text-body text-center">
          We developed a small 3D game. Check it out! (Probably needs some time
          to load…) (Shoutout to{" "}
          <a
            href="https://instagram.com/sophie1000_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sophie1000
          </a>{" "}
          for the great work!)
        </p>
      </section>
    </div>
  );
}
