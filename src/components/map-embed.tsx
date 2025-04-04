// In your MapEmbed.tsx
import React from "react";

interface MapEmbedProps {
  src: string;
  style?: React.CSSProperties;
  allowFullScreen?: boolean;
  loading?: "lazy" | "eager";
  referrerPolicy?:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  className?: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({
  src,
  style,
  allowFullScreen = false,
  loading = "lazy",
  referrerPolicy = "no-referrer-when-downgrade",
  className,
}) => {
  return (
    <div className={`overflow-hidden ${className || ""}`}>
      <iframe
        src={src}
        className="w-full h-full absolute top-0 left-0"
        style={{ ...style, width: "100%", height: "100%" }}
        allowFullScreen={allowFullScreen}
        loading={loading}
        referrerPolicy={referrerPolicy}
      ></iframe>
    </div>
  );
};

export default MapEmbed;
