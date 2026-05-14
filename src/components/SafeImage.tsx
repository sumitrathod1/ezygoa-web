"use client";

import { useState } from "react";
import Image from "next/image";

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  style?: React.CSSProperties;
  fallbackClassName?: string;
}

export default function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  className,
  priority,
  style,
  fallbackClassName,
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center ${fallbackClassName ?? className ?? ""}`}
        style={style}
      >
        <span className="text-blue-400 text-sm font-medium">📷 Image coming soon</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        style={style}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 400}
      height={height ?? 300}
      sizes={sizes}
      className={className}
      priority={priority}
      style={style}
      onError={() => setError(true)}
    />
  );
}
