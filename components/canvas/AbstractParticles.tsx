"use client";

import { useEffect, useRef } from "react";

const CanvasAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }[] = [];
    const numParticles = window.innerWidth > 500 ? 400 : 150;
    const maxSpeed = 0.5;
    const colorGradient = ["#003300", "#006600", "#00cc00", "#66ff66"];
    const particleSize = 6;

    for (let i = 0; i < numParticles; i++) {
      particles.push(createParticle());
    }

    function createParticle() {
      return {
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        vx: Math.random() * maxSpeed - maxSpeed / 2,
        vy: Math.random() * maxSpeed - maxSpeed / 2,
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 150,
      };
    }

    const calculateDensity = (x: number, y: number) => {
      let density = 0;
      const radius = 50;

      particles.forEach((p) => {
        const dx = x - p.x;
        const dy = y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          density += 1 - distance / radius;
        }
      });

      return density;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;

        if (p.life > p.maxLife) {
          particles[i] = createParticle();

          return;
        }

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const density = calculateDensity(p.x, p.y);
        const colorIndex = Math.min(
          Math.floor((density / 5) * colorGradient.length),
          colorGradient.length - 1,
        );
        const alpha = Math.min(density / 10, 1);

        ctx.fillStyle = `${colorGradient[colorIndex]}`;
        ctx.globalAlpha = alpha * (1 - p.life / p.maxLife);
        ctx.fillRect(p.x, p.y, particleSize, particleSize);
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-[0]"
    />
  );
};

export default CanvasAnimation;
