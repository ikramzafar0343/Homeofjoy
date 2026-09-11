"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type ProgressiveImageProps = Omit<ImageProps, "onLoad"> & {
  readonly wrapperClassName?: string;
};

export default function ProgressiveImage({
  className = "",
  wrapperClassName = "",
  alt,
  ...props
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`.trim()}>
      <Image
        {...props}
        alt={alt}
        className={`transition-[filter,opacity] duration-700 ease-out ${
          isLoaded ? "opacity-100 blur-0" : "opacity-80 blur-sm"
        } ${className}`.trim()}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
