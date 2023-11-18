import { useRef, useEffect } from "react";

const CanvasStar = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<{ x: number; y: number; alpha: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const drawBackground = () => {
      const gradient = context.createLinearGradient(
        canvas.width / 2,
        0,
        canvas.width / 2,
        canvas.height
      );
      gradient.addColorStop(0.1, "#1b2947");
      gradient.addColorStop(0.6, "#75517d");
      gradient.addColorStop(1, "#e96f92");

      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawShootingStar = (x: number, y: number, alpha: number): void => {
      let gradient = context.createRadialGradient(x, y, 0, x, y, 10);
      gradient.addColorStop(0, "#fff");
      gradient.addColorStop(0.3, "transparent");
      context.fillStyle = gradient;
      context.globalAlpha = alpha;
      context.beginPath();
      context.arc(x, y, 50, 0, Math.PI * 2);
      context.fill();
    };

    const generateRandomStars = (
      num: number
    ): {
      x: number;
      y: number;
      alpha: number;
    }[] => {
      const stars = [];

      for (let i = 0; i < num; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.6;
        const alpha = Math.random();
        stars.push({ x, y, alpha });
      }

      return stars;
    };

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      starsRef.current = generateRandomStars(Math.max(canvas.width / 10, 20));
    };

    const animateStars = (): void => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.globalAlpha = 1;
      drawBackground();

      starsRef.current.forEach((star) => {
        drawShootingStar(star.x, star.y, star.alpha);
        if (Math.random() < 0.1 && star.alpha < 0.9) {
          star.alpha += 0.1;
        } else if (Math.random() > 0.9 && star.alpha > 0.1) {
          star.alpha -= 0.1;
        }
      });

      requestAnimationFrame(animateStars);
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    animateStars();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ position: "absolute", zIndex: -2 }}
    />
  );
};

export default CanvasStar;
