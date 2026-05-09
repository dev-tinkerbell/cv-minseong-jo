"use client";

import { useState, useCallback, CSSProperties } from "react";

export default function CopyText({
  text,
  className = "",
  style,
  onMouseEnter,
  onMouseLeave,
  children,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={`relative cursor-pointer ${className}`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children ?? text}
      {copied && (
        <span
          className="absolute -top-6 left-0 text-xs font-mono px-1.5 py-0.5 rounded whitespace-nowrap pointer-events-none z-10"
          style={{ backgroundColor: "#111118", color: "#2ecc71", border: "1px solid #1e1e2e" }}
        >
          Copied!
        </span>
      )}
    </button>
  );
}
