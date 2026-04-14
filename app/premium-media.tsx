 "use client";

import Image from "next/image";
import { useState } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type PremiumMediaProps = ComponentPropsWithoutRef<"div"> & {
  src: string;
  alt: string;
  imageClassName?: string;
  ratio?: "hero" | "portrait" | "wide" | "landscape" | "thumb" | "strip";
  sizes?: string;
  priority?: boolean;
  quality?: number;
  children?: ReactNode;
};

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function PremiumMedia({
  src,
  alt,
  className,
  imageClassName,
  ratio = "landscape",
  sizes = "100vw",
  priority = false,
  quality = 76,
  children,
  ...rest
}: PremiumMediaProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cx(
        "premium-media",
        `premium-media--${ratio}`,
        isLoaded && "is-loaded",
        hasError && "is-error",
        className
      )}
      {...rest}
    >
      <div className="premium-media__fallback" aria-hidden="true" />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        quality={quality}
        sizes={sizes}
        className={cx("premium-media__image", imageClassName)}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(false);
        }}
      />
      <div className="premium-media__veil" aria-hidden="true" />
      {children}
    </div>
  );
}
