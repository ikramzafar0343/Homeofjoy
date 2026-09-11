"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

import BrandMotif from "@/components/ui/BrandMotif";
import Button from "@/components/ui/Button";
import HomeOfJoyLogo from "@/components/brand/HomeOfJoyLogo";

gsap.registerPlugin(useGSAP);

export default function NotFound() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !rootRef.current) {
        return;
      }

      gsap.from("[data-404-reveal]", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      data-nav-theme="light"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-white py-28"
    >
      <BrandMotif variant="circle" className="right-[-4rem] top-16 h-64 w-64" />
      <BrandMotif variant="curve" className="bottom-10 left-0 w-[28rem]" />

      <div className="siteContainer relative z-10 max-w-2xl">
        <div data-404-reveal className="mb-8">
          <HomeOfJoyLogo size="nav" />
        </div>
        <p data-404-reveal className="typeLabel mb-4">
          404
        </p>
        <h1 data-404-reveal className="typeSection mb-5">
          This page could not be found.
        </h1>
        <p data-404-reveal className="typeBody mb-10 max-w-xl">
          The page may have moved, or the link may be incorrect. You can return home
          and continue exploring the work of Home of Joy.
        </p>
        <div data-404-reveal>
          <Button href="/" variant="primary">
            Return Home
          </Button>
        </div>
        <p data-404-reveal className="mt-8 text-sm text-bodyGray">
          Or visit{" "}
          <Link href="/contact" className="font-semibold text-primary underline-offset-2 hover:underline">
            Contact
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
