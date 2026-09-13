import Link from "next/link";

import HomeOfJoyLogo from "@/components/brand/HomeOfJoyLogo";
import BrandWordmark from "@/components/brand/BrandWordmark";
import FooterBackToTop from "@/components/layout/FooterBackToTop";
import FooterSubscribeForm from "@/components/layout/FooterSubscribeForm";
import { organizationContent } from "@/content/organizationContent";
import {
  footerGetInvolvedItems,
  footerLegalItems,
  footerMinistryAreas,
  footerNavItems,
} from "@/content/footerContent";

import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" data-nav-theme="dark" className={styles.footer}>
      <div className={styles.footerInner}>
        <div className="grid gap-12 border-b border-white/25 pb-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <HomeOfJoyLogo size="nav" />
              <BrandWordmark size="footer" tone="light" />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-base">
              {organizationContent.mission}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/60 transition-all hover:border-white hover:text-white"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/60 transition-all hover:border-white hover:text-white"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/60 transition-all hover:border-white hover:text-white"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h2
              className={`${styles.footerAccent} mb-5 text-xs font-semibold uppercase tracking-[0.16em]`}
            >
              Navigation
            </h2>
            <ul className="space-y-3">
              {footerNavItems.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  <Link href={item.href} className={`text-sm ${styles.footerLink}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className={`${styles.footerAccent} mb-5 text-xs font-semibold uppercase tracking-[0.16em]`}
            >
              Get involved
            </h2>
            <ul className="mb-8 space-y-3">
              {footerGetInvolvedItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`text-sm ${styles.footerLink}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2
              className={`${styles.footerAccent} mb-5 text-xs font-semibold uppercase tracking-[0.16em]`}
            >
              Ministry Areas
            </h2>
            <ul className="space-y-3">
              {footerMinistryAreas.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`text-sm ${styles.footerLink}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className={`${styles.footerAccent} mb-5 text-xs font-semibold uppercase tracking-[0.16em]`}
            >
              Stay Updated
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              Subscribe to receive updates on our mission, impact stories, and ways you
              can help.
            </p>
            <FooterSubscribeForm />
          </div>
        </div>

        <div className="grid gap-8 border-b border-white/25 py-10 md:grid-cols-2">
          <div>
            <h2
              className={`${styles.footerAccent} mb-3 text-xs font-semibold uppercase tracking-[0.16em]`}
            >
              Contact
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              For partnership or general inquiries, visit the Contact page. Verified
              phone, email, and social channels will be listed when published.
            </p>
            <Link
              href="/contact"
              className={`mt-4 inline-block text-sm ${styles.footerLink}`}
            >
              Go to Contact →
            </Link>
          </div>
          <div>
            <h2
              className={`${styles.footerAccent} mb-3 text-xs font-semibold uppercase tracking-[0.16em]`}
            >
              Founder
            </h2>
            <Link href="/about#founder" className={`text-sm ${styles.footerLink}`}>
              {organizationContent.founderName}
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/55">
            © {year} {organizationContent.name}. All rights reserved. SECP Registered
            No. CUIN {organizationContent.registration.secpCuin}.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {footerLegalItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs ${styles.footerLink}`}
              >
                {item.label}
              </Link>
            ))}
            <FooterBackToTop />
            <p className="text-xs text-white/45">{organizationContent.country}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
