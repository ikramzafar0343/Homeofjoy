import SectionBand from "@/components/sections/SectionBand";
import { ourWorkAreas } from "@/features/ourWork/ourWorkAreas";

const sectionIds = [
  "education",
  "orphanage",
  "child-labour",
  "child-protection",
  "evangelism",
  "outreach",
] as const;

export default function OurWorkAreasDetail() {
  return (
    <>
      {ourWorkAreas.map((area, index) => {
        const id = sectionIds[index] ?? `area-${area.number}`;
        const tone = index % 2 === 0 ? "white" : "sky";
        return (
          <SectionBand key={area.number} id={id} tone={tone}>
            <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="typeLabel mb-4">
                  {area.number} · {area.title}
                </p>
                <h2 className="typeSection mb-5">{area.title}</h2>
              </div>
              <div>
                <p className="typeBody mb-6">{area.detail}</p>
                <p className="typeBody text-bodyGray">{area.description}</p>
              </div>
            </div>
          </SectionBand>
        );
      })}
    </>
  );
}
