import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextZoomScrollProps {
  children: React.ReactNode;
}

export const TextZoomScroll = ({ children }: TextZoomScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smoothly zoom in as the element scrolls through the viewport
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 1.8]);
  // Fade out smoothly towards the end of the scroll before the next section overlaps
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.7], [1, 1, 0]);

  return (
    <div
      ref={ref}
      style={{
        height: "var(--text-zoom-height, 120vh)",
        position: "relative",
        margin: "var(--text-zoom-margin, 80px 0)"
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "var(--text-zoom-sticky-top, 30vh)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{
            scale,
            opacity,
            transformOrigin: "center center",
            willChange: "transform, opacity",
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
