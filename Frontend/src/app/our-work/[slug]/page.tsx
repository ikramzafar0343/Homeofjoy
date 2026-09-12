import type { Metadata } from "next";
import { notFound } from "next/navigation";

import WorkAreaStoryView from "@/features/ourWork/WorkAreaStoryView";
import {
  getWorkAreaStory,
  workAreaSlugs,
} from "@/features/ourWork/workAreaStories";

type WorkAreaPageProps = {
  readonly params: Promise<{ readonly slug: string }>;
};

export function generateStaticParams() {
  return workAreaSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getWorkAreaStory(slug);

  if (!story) {
    return { title: "Our Work" };
  }

  return {
    title: story.area.title,
    description: story.lead,
  };
}

export default async function WorkAreaPage({ params }: WorkAreaPageProps) {
  const { slug } = await params;
  const story = getWorkAreaStory(slug);

  if (!story) {
    notFound();
  }

  return <WorkAreaStoryView story={story} />;
}
