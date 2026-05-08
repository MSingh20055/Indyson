import { useEffect, useRef } from "react";

interface CanvasTextProps {
  text: string;
  className?: string;
}

export const CanvasText = ({ text, className = "" }: CanvasTextProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.01;
      const width = canvas.width;
      const height = canvas.height;

      // Create a dynamic moving fluid/plasma effect
      const gradient = ctx.createLinearGradient(
        Math.sin(time) * width,
        Math.cos(time) * height,
        Math.cos(time) * width,
        Math.sin(time) * height
      );

      gradient.addColorStop(0, "#00f0ff"); // Accent Blue
      gradient.addColorStop(0.5, "#8a2be2"); // Accent Purple
      gradient.addColorStop(1, "#00f0ff");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Optimized digital noise/stars using ultra-fast rects instead of complex arcs
      for (let i = 0; i < 15; i++) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.4})`;
        const size = Math.random() * 2 + 1;
        ctx.fillRect(
          Math.random() * width,
          Math.random() * height,
          size,
          size
        );
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }} className={className}>
      <canvas
        ref={canvasRef}
        width={800}
        height={200}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />
      <h1
        style={{
          position: "relative",
          zIndex: 1,
          margin: 0,
          fontSize: "inherit",
          background: "#050505", // Matches body background
          color: "white",
          mixBlendMode: "multiply", // This masks the canvas to the text!
        }}
      >
        {text}
      </h1>
      {/* 
        The multiply blend mode trick: 
        The h1 has a black background and white text. 
        Multiply makes the white text transparent (showing the canvas underneath) 
        and the black background solid (hiding the canvas around the text).
      */}
    </div>
  );
};
