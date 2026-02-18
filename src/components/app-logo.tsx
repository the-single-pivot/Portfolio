"use client";

import { useState } from "react";

export function AppLogo({
  src,
  alt,
  title,
  className,
}: {
  src: string;
  alt: string;
  title: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  const initials = title
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (failed) {
    return (
      <div
        className={className + " flex items-center justify-center bg-muted"}
        title={alt}
      >
        <span className="text-xs font-semibold text-muted-foreground">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
