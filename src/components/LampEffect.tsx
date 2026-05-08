import React from "react";
import { motion } from "framer-motion";

interface LampEffectProps {
  children: React.ReactNode;
}

export const LampEffect = ({ children }: LampEffectProps) => {
  return (
    <div style={{
      position: "relative",
      display: "flex",
      minHeight: "220px", // Reduced height to keep it compact
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "transparent",
      width: "100%",
      zIndex: 0,
      paddingTop: "20px",
    }}>
      {/* Lamp Gradients Wrapper */}
      <div style={{
        position: "relative",
        display: "flex",
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        isolation: "isolate",
        zIndex: 0,
      }}>
        {/* Left Glowing Cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "12rem" }}
          whileInView={{ opacity: 1, width: "24rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            right: "50%",
            top: "0",
            height: "80%", // Taller cones for better glow reach
            background: "conic-gradient(from 70deg at top right, rgba(0, 240, 255, 0.18), transparent, transparent)",
            color: "white",
            transformOrigin: "top right",
            filter: "blur(20px)",
            transform: "skewY(12deg)",
          }}
        />

        {/* Right Glowing Cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "12rem" }}
          whileInView={{ opacity: 1, width: "24rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: "50%",
            top: "0",
            height: "80%",
            background: "conic-gradient(from 290deg at top left, transparent, transparent, rgba(0, 240, 255, 0.18))",
            color: "white",
            transformOrigin: "top left",
            filter: "blur(20px)",
            transform: "skewY(-12deg)",
          }}
        />

        {/* Center Glowing Ellipse (Horizontal Blur Behind Top Line) */}
        <div style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          height: "8rem",
          width: "100%",
          maxWidth: "32rem",
          background: "radial-gradient(ellipse at top, rgba(0, 240, 255, 0.3), transparent 70%)",
          filter: "blur(30px)",
        }} />

        {/* Top Highlight Line */}
        <motion.div
          initial={{ width: "12rem" }}
          whileInView={{ width: "24rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            height: "2px",
            background: "linear-gradient(to right, transparent, var(--accent-blue), transparent)",
            zIndex: 20,
          }}
        />

        {/* Content Wrapper - Shifted higher to merge with the light */}
        <div style={{
          position: "relative",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
          width: "100%",
          marginTop: "-40px", // Pull the text up into the glowing light field
        }}>
          {children}
        </div>
      </div>
    </div>
  );
};
