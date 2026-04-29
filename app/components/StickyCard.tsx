"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface StickyCardProps {
  children: ReactNode;
  zIndex: number;
  shadow?: string;
}

export default function StickyCard({ children, zIndex, shadow }: StickyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!ref.current) return;
      const h = ref.current.offsetHeight;
      const vh = window.innerHeight;
      // Pin so the bottom of the section sits at the viewport bottom.
      // If section fits in viewport, pin at top: 0.
      setStickyTop(h > vh ? -(h - vh) : 0);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="sticky rounded-t-[2rem] overflow-hidden"
      style={{
        top: stickyTop,
        zIndex,
        boxShadow: shadow ?? "0 -20px 60px rgba(0,0,0,0.10)",
      }}
    >
      {children}
    </div>
  );
}
