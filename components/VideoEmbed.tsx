"use client";

interface VideoEmbedProps {
  type: "youtube" | "vimeo";
  videoId: string;
  aspectRatio?: string;
  noRounding?: boolean;
  className?: string;
}

export default function VideoEmbed({
  type,
  videoId,
  aspectRatio,
  noRounding = false,
  className = "",
}: VideoEmbedProps) {
  const src =
    type === "youtube"
      ? `https://www.youtube.com/embed/${videoId}?enablejsapi=1&wmode=transparent&autohide=1&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0`
      : `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`;

  const paddingBottom = aspectRatio || "56.25%";
  const rounding = noRounding ? "" : "rounded-[30px]";

  return (
    <div
      className={`relative w-full ${rounding} overflow-hidden ${className}`}
      style={{ paddingBottom, height: 0 }}
    >
      <iframe
        src={src}
        className="absolute inset-0 w-full h-full"
        style={noRounding ? { borderRadius: 0 } : undefined}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        title={`${type} video ${videoId}`}
      />
    </div>
  );
}
