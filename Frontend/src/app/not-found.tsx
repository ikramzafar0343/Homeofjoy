import Link from "next/link";

import design from "@/components/design/designShared.module.css";
import Button from "@/components/ui/Button";
import HomeOfJoyLogo from "@/components/brand/HomeOfJoyLogo";

export default function NotFound() {
  return (
    <section
      data-nav-theme="light"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-white py-28"
      style={{ marginTop: "var(--header-height)" }}
    >
      <div className={`${design.container} relative z-10 max-w-2xl`}>
        <div className="mb-8">
          <HomeOfJoyLogo size="nav" />
        </div>
        <p
          className={`${design.eyebrow} mb-4`}
          style={{ color: "var(--landing-blue)" }}
        >
          404
        </p>
        <h1 className={`${design.heading} mb-5`}>This page could not be found.</h1>
        <p className={`${design.body} mb-10`} style={{ maxWidth: "42ch" }}>
          The page may have moved, or the link may be incorrect. You can return home
          and continue exploring the work of Home of Joy.
        </p>
        <div>
          <Button href="/" variant="yellow">
            Return Home
          </Button>
        </div>
        <p className={`${design.body} mt-8`} style={{ fontSize: "14px" }}>
          Or visit{" "}
          <Link
            href="/contact"
            className="font-semibold underline-offset-2 hover:underline"
            style={{ color: "var(--landing-blue)" }}
          >
            Contact
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
