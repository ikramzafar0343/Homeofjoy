import LoadingSkeleton from "@/components/ui/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="siteContainer space-y-6 py-32">
      <LoadingSkeleton className="h-4 w-32" label="Loading section label" />
      <LoadingSkeleton className="h-12 w-3/4 max-w-xl" label="Loading heading" />
      <LoadingSkeleton className="h-24 w-full max-w-2xl" label="Loading content" />
    </div>
  );
}
