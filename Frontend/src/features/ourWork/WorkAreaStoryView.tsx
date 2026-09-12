"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SectionCurve from "@/components/design/SectionCurve";
import design from "@/components/design/designShared.module.css";
import FieldPhotoStack from "@/components/ui/FieldPhotoStack";
import ImageLightbox from "@/components/ui/ImageLightbox";
import SectionBand from "@/components/sections/SectionBand";
import PageCta from "@/components/sections/PageCta";
import PageHero from "@/components/sections/PageHero";
import {
  getAllWorkAreaStories,
  type WorkAreaStory,
} from "@/features/ourWork/workAreaStories";

import styles from "./WorkAreaStoryView.module.css";

const frameClass = [
  design.shapeA,
  design.shapeB,
  design.shapeCircle,
] as const;

type WorkAreaStoryViewProps = {
  readonly story: WorkAreaStory;
};

export default function WorkAreaStoryView({ story }: WorkAreaStoryViewProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const related = getAllWorkAreaStories().filter((item) => item.slug !== story.slug);
  const lightboxPhoto =
    lightboxIndex !== null ? story.area.gallery[lightboxIndex] : undefined;

  return (
    <>
      <PageHero
        eyebrow={`Our Work · ${story.area.number}`}
        title={story.headline}
        description={story.lead}
        gallery={story.area.gallery}
        ctaLabel="Support this work"
        ctaHref="/donate"
        secondaryLabel="All work areas"
        secondaryHref="/our-work"
        align="left"
      />

      <SectionBand tone="white">
        <div className={styles.intro}>
          <div className={styles.introCopy}>
            <p className={design.eyebrow} style={{ color: "var(--landing-blue)" }}>
              {story.kicker}
            </p>
            <h2 className={`${design.heading} ${styles.introHeading}`}>
              Why this work matters
            </h2>
            <p className={`${design.body} ${styles.introLead}`}>{story.lead}</p>
            <p className={design.body}>{story.area.description}</p>
          </div>
          <div className={styles.introMediaCol}>
            <div className={`${styles.introMedia} ${design.shapeA}`}>
              <FieldPhotoStack
                photos={story.area.gallery.slice(0, 4)}
                sizes="(max-width: 1024px) 86vw, 420px"
                intervalMs={3600}
              />
            </div>
          </div>
        </div>
      </SectionBand>

      {story.sections.map((section, index) => {
        const tone = index % 2 === 0 ? "soft" : "white";
        const mediaFirst = index % 2 === 0;
        const photo = story.area.gallery[(index + 1) % story.area.gallery.length];
        const frame = frameClass[index % frameClass.length] ?? design.shapeSoft;

        return (
          <SectionBand key={section.heading} tone={tone}>
            <div
              className={`${styles.chapter} ${
                mediaFirst ? styles.mediaFirst : styles.copyFirst
              }`}
            >
              {photo ? (
                <div className={styles.chapterMediaCol}>
                  <div
                    className={`${styles.chapterMedia} ${
                      index % 3 === 2 ? styles.chapterCircle : ""
                    } ${frame}`.trim()}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 1024px) 86vw, 400px"
                    />
                  </div>
                </div>
              ) : null}
              <div className={styles.chapterCopy}>
                <p
                  className={design.eyebrow}
                  style={{ color: "var(--landing-blue)", marginBottom: 12 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className={`${design.subHeading} ${styles.chapterHeading}`}>
                  {section.heading}
                </h2>
                <p className={design.body}>{section.body}</p>
              </div>
            </div>
          </SectionBand>
        );
      })}

      <section
        data-nav-theme="dark"
        className={styles.practiceBand}
        aria-labelledby="practice-title"
      >
        <SectionCurve position="top" fill="var(--landing-blue)" />
        <div className={design.container}>
          <p className={design.eyebrow} style={{ color: "rgb(255 255 255 / 0.85)" }}>
            In practice
          </p>
          <h2
            id="practice-title"
            className={`${design.heading} ${design.headingLight} ${styles.practiceHeading}`}
          >
            {story.practiceTitle}
          </h2>
          <ul className={styles.practiceList}>
            {story.practices.map((practice) => (
              <li key={practice} className={styles.practiceItem}>
                <p className={`${design.body} ${design.bodyLight}`}>{practice}</p>
              </li>
            ))}
          </ul>
        </div>
        <SectionCurve position="bottom" fill="#ffffff" />
      </section>

      <SectionBand tone="white">
        <div className={styles.galleryHead}>
          <p className={design.eyebrow} style={{ color: "var(--landing-blue)" }}>
            From the field
          </p>
          <h2 className={design.heading}>Moments from this work</h2>
          <p className={`${design.body} ${styles.galleryIntro}`}>
            Authentic photographs from Home of Joy’s work in Pakistan—children,
            caregivers, classrooms, and communities we walk with.
          </p>
        </div>
        <ul className={styles.gallery}>
          {story.area.gallery.map((photo, index) => (
            <li key={photo.src}>
              <button
                type="button"
                className={`${styles.galleryCard} ${design.shapeSoft}`}
                onClick={() => setLightboxIndex(index)}
                aria-label={`View larger: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 45vw, 360px"
                />
              </button>
            </li>
          ))}
        </ul>
        <p className={`${design.body} ${styles.closing}`}>{story.closing}</p>
        <div className={styles.closingActions}>
          <Link href="/donate" className={`${design.pill} ${design.pillYellow}`}>
            Support the mission
          </Link>
          <Link href="/contact" className={`${design.pill} ${design.pillBlue}`}>
            Contact Us
          </Link>
        </div>
      </SectionBand>

      <SectionBand tone="soft">
        <div className={styles.relatedHead}>
          <p className={design.eyebrow} style={{ color: "var(--landing-blue)" }}>
            Continue exploring
          </p>
          <h2 className={design.heading}>More areas of our work</h2>
        </div>
        <div className={styles.relatedGrid}>
          {related.map((item) => (
            <Link key={item.slug} href={item.area.href} className={styles.relatedCard}>
              <div className={`${styles.relatedMedia} ${design.shapeSoft}`}>
                <Image
                  src={item.area.imageSrc}
                  alt={item.area.imageAlt}
                  fill
                  sizes="(max-width: 768px) 92vw, 280px"
                />
              </div>
              <p className={styles.relatedEyebrow}>Area {item.area.number}</p>
              <h3 className={styles.relatedTitle}>{item.area.title}</h3>
              <p className={`${design.body} ${styles.relatedBody}`}>
                {item.area.description}
              </p>
              <span className={styles.relatedLink}>Read story</span>
            </Link>
          ))}
        </div>
      </SectionBand>

      <PageCta
        eyebrow="Be part of the story"
        title="Help this work continue"
        description={story.closing}
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Partner With Us"
        secondaryHref="/partner"
        gallery={story.area.gallery}
      />

      {lightboxPhoto ? (
        <ImageLightbox
          open={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          src={lightboxPhoto.src}
          alt={lightboxPhoto.alt}
          caption={story.headline}
          lockOwner="workAreaGallery"
        />
      ) : null}
    </>
  );
}
