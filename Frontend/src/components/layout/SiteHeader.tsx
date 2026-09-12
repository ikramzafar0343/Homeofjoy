"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

import HomeOfJoyLogo from "@/components/brand/HomeOfJoyLogo";
import BrandWordmark from "@/components/brand/BrandWordmark";
import { siteNavItems, supportCta } from "@/constants/siteNavigation";
import { syncBodyScrollLock } from "@/lib/scrollLock";

gsap.registerPlugin(useGSAP);

const headerPillClass =
  "inline-flex items-center justify-center rounded-full bg-[color:var(--landing-yellow)] px-[22px] py-[10px] text-[13px] font-semibold text-[color:var(--landing-ink)] transition-[opacity,filter] duration-200 hover:opacity-[0.92] hover:brightness-[1.03]";

export default function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const logoWrapRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasIntroPlayed, setHasIntroPlayed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onComplete = () => setHasIntroPlayed(true);
    window.addEventListener("hojPreloaderComplete", onComplete);
    return () => window.removeEventListener("hojPreloaderComplete", onComplete);
  }, []);

  useEffect(() => syncBodyScrollLock("siteHeaderMenu", isMenuOpen), [isMenuOpen]);

  useGSAP(
    () => {
      if (!hasIntroPlayed) {
        gsap.set([logoWrapRef.current, linksRef.current, ctaRef.current], {
          opacity: 0,
          y: -12,
        });
        return;
      }

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set([logoWrapRef.current, linksRef.current, ctaRef.current], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      const tl = gsap.timeline();
      tl.to(logoWrapRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
      })
        .to(
          linksRef.current,
          { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
          "-=0.35",
        )
        .to(
          ctaRef.current,
          { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
          "-=0.35",
        );
    },
    { dependencies: [hasIntroPlayed], scope: headerRef },
  );

  // Reference design: the header is always an opaque white bar above the hero.
  const menuButtonClass = "text-navy";
  const dropdownChevronClass = "text-navy/50";
  const navItemClass =
    "group relative text-[13px] font-medium tracking-[0.02em] text-navy opacity-90 transition-opacity duration-300 after:bg-navy hover:opacity-100";
  const navUnderlineClass =
    "after:pointer-events-none after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100";

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 border-b border-[color:var(--landing-line)] bg-white transition-shadow duration-300 ${
          isCompact ? "shadow-[0_2px_16px_rgb(17_17_17/0.06)]" : ""
        }`}
      >
        <div className="mx-auto flex min-h-[var(--header-height)] w-full max-w-[1200px] items-center justify-between gap-6 px-5 md:px-9 xl:px-12">
          <Link
            ref={logoWrapRef}
            href="/"
            className="relative z-10 flex shrink-0 items-center gap-3 md:gap-4"
            aria-label="Home of Joy Welfare Foundation home"
          >
            <HomeOfJoyLogo size="nav" priority />
            <BrandWordmark className="hidden sm:flex" size="nav" tone="dark" />
          </Link>

          <nav
            ref={linksRef}
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {siteNavItems.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 ${navItemClass} ${navUnderlineClass}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      } ${dropdownChevronClass}`}
                    >
                      <path
                        d="M2.5 4L5 6.5L7.5 4"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  <div
                    className={`absolute left-1/2 top-full z-50 min-w-[240px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                      activeDropdown === item.label
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-lg border border-lightGray bg-white shadow-xl shadow-dark/5">
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-md px-4 py-2.5 text-sm font-medium text-dark/80 transition-colors hover:bg-softBg hover:text-primary"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${navItemClass} ${navUnderlineClass}`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <div ref={ctaRef} className="hidden lg:block">
              <Link href={supportCta.href} className={headerPillClass}>
                {supportCta.label}
              </Link>
            </div>

            <button
              type="button"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-md lg:hidden ${menuButtonClass}`}
              aria-expanded={isMenuOpen}
              aria-controls="mobileNavPanel"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-5 flex-col gap-1.5">
                <span
                  className={`h-0.5 w-full bg-current transition ${
                    isMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current transition ${
                    isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav panel */}
      <div
        ref={mobilePanelRef}
        id="mobileNavPanel"
        className={`fixed inset-0 z-40 bg-dark transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="siteContainer flex h-full flex-col justify-center gap-6 overflow-y-auto pt-20 pb-10">
          {siteNavItems.map((item) =>
            item.children ? (
              <div key={item.href}>
                <div className="flex w-full items-center gap-3">
                  <Link
                    href={item.href}
                    className="flex-1 text-2xl font-semibold text-background md:text-3xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-background"
                    aria-expanded={mobileAccordion === item.label}
                    aria-label={`${mobileAccordion === item.label ? "Hide" : "Show"} ${item.label} links`}
                    onClick={() =>
                      setMobileAccordion(
                        mobileAccordion === item.label ? null : item.label,
                      )
                    }
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        mobileAccordion === item.label ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileAccordion === item.label
                      ? "mt-3 max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-3 border-l border-background/20 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-base text-background/70 transition-colors hover:text-background"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl font-semibold text-background md:text-3xl"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
          <div className="mt-4">
            <Link
              href={supportCta.href}
              className={headerPillClass}
              onClick={() => setIsMenuOpen(false)}
            >
              {supportCta.label}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
