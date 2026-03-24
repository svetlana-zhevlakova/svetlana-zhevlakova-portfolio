"use client";

import * as React from "react";

export type ScrollAutoplayVideoProps = {
  sources: Array<{ src: string; type?: string }>;
  className?: string;
  poster?: string;
  threshold?: number;
};

export function ScrollAutoplayVideo({
  sources,
  className,
  poster,
  threshold = 0.5
}: ScrollAutoplayVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!video) return;

        if (entry.isIntersecting) {
          void video.play().catch(() => {
            // Ignore autoplay rejections; user can still play manually.
          });
          return;
        }

        video.pause();
      },
      { threshold }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <video
      ref={videoRef}
      className={className}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
    >
      {sources.map((source) => (
        <source key={`${source.src}-${source.type ?? "default"}`} src={source.src} type={source.type} />
      ))}
      Your browser cannot play this video.
    </video>
  );
}
