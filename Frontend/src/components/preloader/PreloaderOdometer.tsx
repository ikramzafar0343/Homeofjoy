"use client";

import { forwardRef, useImperativeHandle, useRef, type RefObject } from "react";
import gsap from "gsap";

import styles from "./PreloaderOdometer.module.css";

export type PreloaderOdometerHandle = {
  setProgress: (value: number) => void;
};

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

function DigitColumn({
  trackRef,
}: {
  readonly trackRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className={styles.digitWindow}>
      <div ref={trackRef} className={styles.digitTrack}>
        {DIGITS.map((digit) => (
          <span key={digit} className={styles.digit}>
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
}

const PreloaderOdometer = forwardRef<PreloaderOdometerHandle>(
  function PreloaderOdometer(_, ref) {
    const hundredsWrapRef = useRef<HTMLDivElement>(null);
    const hundredsTrackRef = useRef<HTMLDivElement>(null);
    const tensTrackRef = useRef<HTMLDivElement>(null);
    const onesTrackRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      setProgress: (value: number) => {
        const clamped = Math.max(0, Math.min(100, Math.round(value)));
        const hundreds = Math.floor(clamped / 100);
        const tens = Math.floor((clamped % 100) / 10);
        const ones = clamped % 10;

        if (hundredsWrapRef.current) {
          gsap.set(hundredsWrapRef.current, {
            width: hundreds > 0 ? "auto" : 0,
            opacity: hundreds > 0 ? 1 : 0,
          });
        }

        if (hundredsTrackRef.current) {
          gsap.set(hundredsTrackRef.current, {
            yPercent: hundreds * -10,
          });
        }
        if (tensTrackRef.current) {
          gsap.set(tensTrackRef.current, {
            yPercent: tens * -10,
          });
        }
        if (onesTrackRef.current) {
          gsap.set(onesTrackRef.current, {
            yPercent: ones * -10,
          });
        }
      },
    }));

    return (
      <div className={styles.odometer} aria-hidden="true">
        <div ref={hundredsWrapRef} className={styles.hundredsWrap}>
          <DigitColumn trackRef={hundredsTrackRef} />
        </div>
        <DigitColumn trackRef={tensTrackRef} />
        <DigitColumn trackRef={onesTrackRef} />
        <span className={styles.rule} />
        <span className={styles.percent}>%</span>
      </div>
    );
  },
);

export default PreloaderOdometer;
