import { useEffect, useRef } from "react";

export const ShootingStarsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      width: number;
    }

    let shootingStars: ShootingStar[] = [];
    
    let resizeTimeout: number;
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(setCanvasSize, 150);
    };
    
    setCanvasSize();
    window.addEventListener("resize", handleResize);

    // Initial frequent spawn
    let timeUntilNextStar = Math.random() * 100 + 50; 
    let lastTime = performance.now();

    const render = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      // Dark background with slight transparency for motion blur trails
      ctx.fillStyle = "rgba(5, 5, 5, 0.3)";
      ctx.fillRect(0, 0, width, height);

      // Spawn new shooting stars rapidly for high density, capped at 30 concurrent stars
      timeUntilNextStar -= deltaTime;
      if (timeUntilNextStar <= 0 && shootingStars.length < 30) {
        shootingStars.push({
          x: Math.random() * width * 1.5, 
          y: Math.random() * height * 0.5 - height * 0.5, 
          length: Math.random() * 80 + 40, 
          speed: Math.random() * 15 + 10, 
          angle: Math.PI / 4 + (Math.random() * 0.1 - 0.05),
          opacity: 1,
          width: Math.random() * 0.8 + 0.2 // Reduced width (0.2 to 1.0)
        });
        // Extremely fast spawn rate (20-150ms)
        timeUntilNextStar = Math.random() * 130 + 20;
      }

      // Update and draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        
        star.x -= star.speed * Math.cos(star.angle);
        star.y += star.speed * Math.sin(star.angle);

        // Draw the streak
        const gradient = ctx.createLinearGradient(
          star.x, 
          star.y, 
          star.x + star.length * Math.cos(star.angle), 
          star.y - star.length * Math.sin(star.angle)
        );
        
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, "rgba(0, 240, 255, 0.8)");
        gradient.addColorStop(1, "rgba(0, 200, 255, 0)");

        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x + star.length * Math.cos(star.angle),
          star.y - star.length * Math.sin(star.angle)
        );
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.width;
        ctx.lineCap = "round";
        ctx.stroke();

        // Remove if off screen
        if (
          star.x < -star.length || 
          star.y > height + star.length
        ) {
          shootingStars.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, 
        pointerEvents: "none", 
        background: "#050505"
      }}
    />
  );
};
