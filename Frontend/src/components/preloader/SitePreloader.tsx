"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PreloaderOdometer, {
  type PreloaderOdometerHandle,
} from "@/components/preloader/PreloaderOdometer";
import { organizationContent } from "@/content/organizationContent";
import { lockBodyScroll, releaseBodyScroll } from "@/lib/scrollLock";

import styles from "./SitePreloader.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FAILSAFE_MS = 4200;
const SCROLL_LOCK_OWNER = "sitePreloader";

const MISSION_LINES = [
  organizationContent.designPrinciple,
  "Protect. Educate. Serve. Empower. Bring hope.",
] as const;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function SitePreloader() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(true);
  const [playId, setPlayId] = useState(0);
  const [deadline, setDeadline] = useState(() => Date.now() + FAILSAFE_MS);
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const bandsRef = useRef<HTMLDivElement>(null);
  const odometerRef = useRef<PreloaderOdometerHandle>(null);
  const completedRef = useRef(false);
  const lastPathRef = useRef<string | null>(null);
  const exitTlRef = useRef<gsap.core.Timeline | null>(null);

  const dismiss = useRef(() => {
    if (completedRef.current) {
      return;
    }
    completedRef.current = true;
    releaseBodyScroll(SCROLL_LOCK_OWNER);

    let unlocked = false;
    const unlock = () => {
      if (unlocked) {
        return;
      }
      unlocked = true;
      setIsActive(false);
      window.dispatchEvent(new CustomEvent("hojPreloaderComplete"));
      // Measure pins only once the overlay is unmounted and scrolling is free.
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const forceId = window.setTimeout(unlock, 1200);
    const root = rootRef.current;
    const stage = stageRef.current;

    if (prefersReducedMotion() || !root) {
      window.clearTimeout(forceId);
      unlock();
      return;
    }

    exitTlRef.current?.kill();
    const exitTl = gsap.timeline({
      onComplete: () => {
        window.clearTimeout(forceId);
        unlock();
      },
    });
    exitTlRef.current = exitTl;
    exitTl.to(stage, { opacity: 0, duration: 0.18, ease: "power2.in" }, 0);
    exitTl.to(
      root,
      { yPercent: -100, duration: 0.65, ease: "power4.inOut" },
      0.04,
    );
  });

  // Every soft navigation restarts the brand preloader.
  useEffect(() => {
    if (lastPathRef.current === null) {
      lastPathRef.current = pathname;
      return;
    }
    if (lastPathRef.current === pathname) {
      return;
    }
    lastPathRef.current = pathname;

    exitTlRef.current?.kill();
    completedRef.current = false;
    lockBodyScroll(SCROLL_LOCK_OWNER);
    setDeadline(Date.now() + FAILSAFE_MS);
    setPlayId((id) => id + 1);
    setIsActive(true);
  }, [pathname]);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    lockBodyScroll(SCROLL_LOCK_OWNER);
    window.scrollTo(0, 0);

    const remaining = Math.max(0, deadline - Date.now());
    const failsafeId = window.setTimeout(() => {
      odometerRef.current?.setProgress(100);
      dismiss.current();
    }, remaining);

    return () => {
      window.clearTimeout(failsafeId);
    };
  }, [isActive, deadline, playId]);

  useGSAP(
    () => {
      if (!isActive || completedRef.current) {
        return;
      }

      gsap.set(rootRef.current, { yPercent: 0, clearProps: "transform" });
      gsap.set(stageRef.current, { opacity: 1 });

      if (prefersReducedMotion()) {
        odometerRef.current?.setProgress(100);
        gsap.set([percentRef.current, missionRef.current, bandsRef.current], {
          opacity: 1,
          y: 0,
          yPercent: 0,
        });
        const id = window.setTimeout(() => dismiss.current(), 220);
        return () => window.clearTimeout(id);
      }

      gsap.set(percentRef.current, { opacity: 0, y: 36 });
      gsap.set(missionRef.current, { opacity: 0, y: 20 });
      gsap.set(bandsRef.current, { yPercent: 100 });
      odometerRef.current?.setProgress(0);

      const progressProxy = { value: 0 };
      const master = gsap.timeline({
        onComplete: () => {
          odometerRef.current?.setProgress(100);
          dismiss.current();
        },
      });

      master.to(
        bandsRef.current,
        { yPercent: 0, duration: 0.45, ease: "power3.out" },
        0,
      );
      master.to(
        percentRef.current,
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
        0.08,
      );
      master.to(
        missionRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        0.22,
      );
      master.to(
        progressProxy,
        {
          value: 100,
          duration: 1.9,
          ease: "power1.inOut",
          onUpdate: () => {
            odometerRef.current?.setProgress(progressProxy.value);
          },
        },
        0.15,
      );

      return () => {
        master.kill();
      };
    },
    { dependencies: [isActive, playId], scope: rootRef },
  );

  if (!isActive) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className={styles.preloaderRoot}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={`Loading ${organizationContent.name}`}
      data-preloader-play={playId}
    >
      <div ref={stageRef} className={styles.preloaderStage}>
        <div ref={percentRef} className={styles.preloaderPercent}>
          <PreloaderOdometer key={playId} ref={odometerRef} />
        </div>

        <div ref={missionRef} className={styles.preloaderMissionWrap}>
          <p className={styles.preloaderMission}>
            {MISSION_LINES[0]}
            <br />
            {MISSION_LINES[1]}
          </p>
        </div>
      </div>

      <div ref={bandsRef} className={styles.preloaderBands} aria-hidden="true">
        <div className={styles.preloaderBandBlue} />
        <div className={styles.preloaderBandNavy} />
        <div className={styles.preloaderBandOrange} />
      </div>
    </div>
  );
}
