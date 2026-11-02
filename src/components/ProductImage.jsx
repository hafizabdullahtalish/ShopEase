import { useState } from "react";

// Shows the image; if it fails to load, shows a neutral placeholder instead.
export default function ProductImage({ src, alt = "", className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-stone-200 text-center text-xs font-medium text-stone-500 ${className}`}
      >
        <span className="px-2">{alt || "No image"}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}
