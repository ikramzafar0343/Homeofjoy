import Image from "next/image";

type HomeOfJoyLogoProps = {
  readonly className?: string;
  readonly priority?: boolean;
  readonly size?: "nav" | "hero" | "preloader";
};

const sizeMap = {
  nav: { width: 72, height: 72, className: "h-12 w-12 md:h-14 md:w-14" },
  hero: { width: 280, height: 280, className: "h-40 w-40 md:h-52 md:w-52 lg:h-64 lg:w-64" },
  preloader: {
    width: 260,
    height: 260,
    className: "h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[240px] lg:w-[240px]",
  },
} as const;

const logoBlurDataUrl =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Crect width='8' height='8' fill='%238FD1F4'/%3E%3C/svg%3E";

export default function HomeOfJoyLogo({
  className = "",
  priority = false,
  size = "nav",
}: HomeOfJoyLogoProps) {
  const sizeConfig = sizeMap[size];

  return (
    <Image
      src="/images/homeOfJoyLogo.webp"
      alt="Home of Joy Welfare Foundation"
      width={sizeConfig.width}
      height={sizeConfig.height}
      priority={priority}
      placeholder="blur"
      blurDataURL={logoBlurDataUrl}
      sizes="(max-width: 768px) 160px, 280px"
      className={`${sizeConfig.className} object-contain ${className}`.trim()}
    />
  );
}
