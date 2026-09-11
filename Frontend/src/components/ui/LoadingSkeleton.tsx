type LoadingSkeletonProps = {
  readonly className?: string;
  readonly label?: string;
};

export default function LoadingSkeleton({
  className = "h-24 w-full",
  label = "Loading",
}: LoadingSkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-lightGray/70 ${className}`.trim()}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
}
