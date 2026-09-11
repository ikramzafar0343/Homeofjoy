"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import SplashVisual from "@/features/home/SplashVisual";
import { prefersReducedMotion } from "@/lib/scrollAnimations";

type HeroVideoProps = {
  readonly videoSrc?: string;
  readonly posterSrc?: string;
  readonly className?: string;
  readonly children?: React.ReactNode;
};

function subscribeDesktop(onChange: () => void) {
  const desktop = window.matchMedia("(min-width: 1024px)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  desktop.addEventListener("change", onChange);
  reduced.addEventListener("change", onChange);
  return () => {
    desktop.removeEventListener("change", onChange);
    reduced.removeEventListener("change", onChange);
  };
}

export default function HeroVideo({
  videoSrc,
  posterSrc,
  className = "",
  children,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playFailed, setPlayFailed] = useState(false);
  const canAttemptVideo = useSyncExternalStore(
    subscribeDesktop,
    () => Boolean(videoSrc) && window.matchMedia("(min-width: 1024px)").matches && !prefersReducedMotion(),
    () => false,
  );
  const canPlayVideo = canAttemptVideo && !playFailed;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canPlayVideo) {
      return;
    }

    const play = async () => {
      try {
        await video.play();
      } catch {
        setPlayFailed(true);
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
    <div className={`absolute inset-0 ${className}`.trim()}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        muted
        playsInline
        loop
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
