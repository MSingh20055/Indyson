import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MacbookScrollProps {
  src?: string;
  showGradient?: boolean;
  title?: React.ReactNode;
  badge?: React.ReactNode;
}

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: MacbookScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, 2.5]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [1.2, 2.5]);
  const translateZ = useTransform(scrollYProgress, [0, 0.3], [0, 500]);
  const rotateX = useTransform(scrollYProgress, [0, 0.3], [-15, -45]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div
      ref={ref}
      style={{
        minHeight: "200vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        paddingTop: "20vh",
        perspective: "1000px",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: "15vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {title && (
          <motion.div style={{ 
            opacity, 
            marginBottom: "2rem",
            transform: "translateZ(0)",
            WebkitFontSmoothing: "antialiased",
            backfaceVisibility: "hidden"
          }}>
            {title}
          </motion.div>
        )}
        <motion.div
          style={{
            scaleX,
            scaleY,
            rotateX,
            translateZ,
            transformStyle: "preserve-3d",
            transformOrigin: "bottom center",
            width: "80vw",
            maxWidth: "1000px",
            aspectRatio: "16/10",
            position: "relative",
            borderRadius: "20px",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            background: "#111",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {showGradient && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(135deg, rgba(0,240,255,0.2) 0%, rgba(138,43,226,0.2) 100%)",
                zIndex: 1,
              }}
            />
          )}
          {src ? (
            <img
              src={src}
              alt="Macbook Screen"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 2,
              }}
            />
          ) : (
            <div style={{ 
              width: "100%", 
              height: "100%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              background: "linear-gradient(135deg, #131b2a 0%, #1e1b3a 100%)", 
              color: "white", 
              zIndex: 2 
            }}>
               <h1 style={{ 
                 fontSize: '3rem', 
                 fontFamily: "'Outfit', sans-serif", 
                 fontWeight: 800,
                 letterSpacing: '-0.03em',
                 textAlign: 'center',
                 padding: '0 2rem',
                 lineHeight: 1.1
               }}>Digital Exclusion<br />Without Limits</h1>
            </div>
          )}
          {badge && (
            <div style={{ position: "absolute", bottom: 20, right: 20, zIndex: 3 }}>
              {badge}
            </div>
          )}
        </motion.div>
        
        {/* Keyboard Base */}
        <motion.div
           style={{
             width: '84vw',
             maxWidth: '1050px',
             height: '4vh',
             background: 'linear-gradient(to bottom, #333, #111)',
             borderRadius: '0 0 20px 20px',
             marginTop: '-2px',
             position: 'relative',
             zIndex: 5,
             boxShadow: '0 10px 20px rgba(0,0,0,0.6)'
           }}
        >
           <div style={{
             width: '20%',
             height: '50%',
             background: '#222',
             margin: '0 auto',
             borderBottomLeftRadius: '10px',
             borderBottomRightRadius: '10px'
           }} />
        </motion.div>
      </div>
    </div>
  );
};
