import type { ReactNode } from "react";

type IconName =
  | "arrowRight"
  | "heart"
  | "home"
  | "mapPin"
  | "users"
  | "book"
  | "shield"
  | "mail";

type IconProps = {
  readonly name: IconName;
  readonly className?: string;
  readonly title?: string;
};

const paths: Record<IconName, ReactNode> = {
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  heart: (
    <path d="M12 21s-7-4.5-9.5-8.2C.7 9.8 2.2 6 6 6c2 0 3.2 1.2 4 2.2C10.8 7.2 12 6 14 6c3.8 0 5.3 3.8 3.5 6.8C19 16.5 12 21 12 21z" />
  ),
  home: (
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M7 10.5V20h10v-9.5" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3.5 19c1.2-3 3.4-4.5 5.5-4.5S13.3 16 14.5 19" />
      <path d="M14 14.5c1.5 0 3 .8 4 2.5" />
    </>
  ),
  book: (
    <>
      <path d="M5 4.5h10.5A2.5 2.5 0 0 1 18 7v13H7.5A2.5 2.5 0 0 0 5 22.5" />
      <path d="M5 4.5V22.5" />
    </>
  ),
  shield: (
    <path d="M12 3 19 6.5v5.2c0 4.4-2.9 7.8-7 9.3-4.1-1.5-7-4.9-7-9.3V6.5L12 3z" />
  ),
  mail: (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="m5 8 7 5 7-5" />
    </>
  ),
};

export default function Icon({ name, className = "h-5 w-5", title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
