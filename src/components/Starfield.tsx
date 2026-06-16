import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  driftX: number;
  driftY: number;
  color: string;
};

const MIN_STAR_COUNT = 180;

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];

    const resizeCanvas = () => {
      const pixelRatio = Math.max(window.devicePixelRatio || 1, 1);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const density = Math.max(120, Math.floor((width * height) / 12000));
      const count = Math.max(MIN_STAR_COUNT, density);

      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.35 + Math.random() * 1.1,
        baseAlpha: 0.25 + Math.random() * 0.6,
        twinkleSpeed: 0.6 + Math.random() * 1.8,
        twinkleOffset: Math.random() * Math.PI * 2,
        driftX: -0.03 + Math.random() * 0.06,
        driftY: 0.01 + Math.random() * 0.05,
        color:
          Math.random() > 0.78
            ? "rgba(0, 255, 136, 1)"
            : "rgba(255, 255, 255, 1)",
      }));
    };

    const drawStars = (time: number) => {
      context.clearRect(0, 0, width, height);

      for (const star of stars) {
        star.x += star.driftX;
        star.y += star.driftY;

        if (star.x < -2) {
          star.x = width + 2;
        } else if (star.x > width + 2) {
          star.x = -2;
        }

        if (star.y < -2) {
          star.y = height + 2;
        } else if (star.y > height + 2) {
          star.y = -2;
        }

        const twinkle =
          0.5 + 0.5 * Math.sin(time * 0.001 * star.twinkleSpeed + star.twinkleOffset);
        const alpha = Math.min(
          1,
          Math.max(0.08, star.baseAlpha * (0.45 + twinkle * 0.75))
        );
        const glowRadius = star.radius * (2.5 + twinkle * 1.4);

        context.beginPath();
        context.fillStyle = star.color.replace("1)", `${alpha})`);
        context.shadowColor = star.color.replace(
          "1)",
          `${Math.min(0.75, alpha + 0.2)})`
        );
        context.shadowBlur = glowRadius;
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      }

      animationFrameId = window.requestAnimationFrame(drawStars);
    };

    resizeCanvas();
    animationFrameId = window.requestAnimationFrame(drawStars);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" aria-hidden="true" />;
};

export default Starfield;