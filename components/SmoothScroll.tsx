"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll | null = null;

    if (scrollRef.current) {
      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true, breakpoint: 1024 },
        lerp: 0.07, // Linear interpolation, adjust for smoothness (0.01-0.1)
        multiplier: 1, // Scroll speed multiplier
      });

      // Update scroll on window resize
      window.addEventListener("resize", () => locomotiveScroll?.update());

      // Add some delay for page content to load properly
      setTimeout(() => {
        locomotiveScroll?.update();
      }, 500);
    }

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}