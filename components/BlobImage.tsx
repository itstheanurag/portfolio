"use client";
import Image from "next/image";
import { useState } from "react";

export default function BlogImage({ src, alt }: { src: string; alt: string }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="aspect-video bg-neutral-900 rounded-sm overflow-hidden relative">
      {loading && !error && (
        <div className="absolute inset-0 animate-pulse bg-neutral-800"></div>
      )}
      {!error ? (
        <Image
          src={src}
          alt={alt}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 "
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-neutral-800 text-neutral-500">
          Image not available
        </div>
      )}
    </div>
  );
}
