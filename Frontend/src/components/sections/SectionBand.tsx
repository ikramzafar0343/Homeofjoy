type SectionBandProps = {
  readonly children: React.ReactNode;
  readonly tone?: "white" | "navy" | "sky" | "soft";
  readonly id?: string;
  readonly className?: string;
};

const toneClass = {
  white: "bg-white text-navy [&_.typeBody]:text-bodyGray",
  navy: "bg-navy text-white [&_.typeLabel]:text-sky [&_.typeSection]:text-white [&_.typeBody]:text-white/75",
  sky: "bg-sky/30 text-navy [&_.typeBody]:text-bodyGray",
  soft: "bg-softBg text-navy [&_.typeBody]:text-bodyGray",
} as const;

export default function SectionBand({
  children,
  tone = "white",
  id,
  className = "",
}: SectionBandProps) {
  return (
    <section
      id={id}
      data-nav-theme={tone === "navy" ? "dark" : "light"}
      className={`relative overflow-hidden py-20 md:py-28 lg:py-32 ${toneClass[tone]} ${className}`.trim()}
    >
      <div className="siteContainer relative z-10">{children}</div>
    </section>
  );
}
