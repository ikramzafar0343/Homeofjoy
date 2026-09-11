"use client";

import BrandMotif from "@/components/ui/BrandMotif";
import Button from "@/components/ui/Button";

type ErrorPageProps = {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <section
      data-nav-theme="dark"
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy py-28 text-white"
    >
      <BrandMotif variant="house" className="right-10 top-20 h-40 w-40 text-sky/30" />
      <div className="siteContainer relative z-10 max-w-2xl">
        <p className="typeLabel mb-4 text-sky">500</p>
        <h1 className="typeSection mb-5 text-white">Something went wrong</h1>
        <p className="typeBody mb-10 text-white/75">
          We could not load this page right now. Please try again, or return home to
          continue.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3.5 text-sm font-semibold text-white transition duration-300 ease-standard hover:-translate-y-0.5 hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Try again
          </button>
          <Button href="/" variant="secondary">
            Return Home
          </Button>
        </div>
      </div>
    </section>
  );
}
