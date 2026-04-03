import type { Metadata } from "next";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata: Metadata = {
  title: "Spacebirth 2 — Watch the Film",
};

export default function WatchPage() {
  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <section className="page-container mb-[5%]">
        <h1 className="text-page-title">Watch the Film</h1>
      </section>

      <section className="mb-[5%]">
        <VideoEmbed
          type="vimeo"
          videoId="1146583889"
          aspectRatio="42.33%"
          className="!rounded-none"
          noRounding
        />
      </section>

      <section className="page-container">
        <p className="text-body text-center">
          If you want to screen the movie in one of your cinemas, please{" "}
          <a href="mailto:mail@mariusjopen.com">contact us</a>.
        </p>
      </section>
    </div>
  );
}
