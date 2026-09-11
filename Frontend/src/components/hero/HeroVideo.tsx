"use client";

import { useEffect, useRef, useState } from "react";

import SplashVisual from "@/features/home/SplashVisual";
import { prefersReducedMotion } from "@/lib/scrollAnimations";

type HeroVideoProps = {
  readonly videoSrc?: string;
  readonly posterSrc?: string;
  readonly className?: string;
  readonly children?: React.ReactNode;
};

export default function HeroVideo({
  videoSrc,
  posterSrc,
  className = "",
  children,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const reduced = prefersReducedMotion();
    setCanPlayVideo(Boolean(videoSrc) && isDesktop && !reduced);
  }, [videoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canPlayVideo) {
      return;
    }

    const play = async () => {
      try {
        await video.play();
      } catch {
        setCanPlayVideo(false);
      }
    };

    void play();
  }, [canPlayVideo]);

  if (!canPlayVideo || !videoSrc) {
    return (
      <div className={`heroSplash absolute inset-0 ${className}`.trim()}>
        {children ?? <SplashVisual tone="sky" className="absolute inset-0 h-full w-full" />}
      </div>
    );
  }

  return (
    <div className={`heroSplash absolute inset-0 overflow-hidden ${className}`.trim()}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster={posterSrc}
        muted
        playsInline
        loop
        autoPlay
        preload="metadata"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {children}
    </div>
  );
}
