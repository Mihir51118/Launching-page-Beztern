import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacityChange: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const getParticleCount = () => {
      const width = window.innerWidth;
      return width < 768 ? 25 : width < 1024 ? 35 : 45;
    };

    const createParticles = (): Particle[] => {
      return Array.from(
        { length: getParticleCount() },
        (): Particle => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.05,
          speedY: (Math.random() - 0.5) * 0.05,
          opacity: Math.random() * 0.4 + 0.2,
          opacityChange: 0.001
        })
      );
    };

    resizeCanvas();
    let particles = createParticles();

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position with slow movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Update opacity for breathing effect
        particle.opacity += particle.opacityChange;
        if (particle.opacity <= 0.2 || particle.opacity >= 0.6) {
          particle.opacityChange *= -1;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw connections only to nearest particles
        for (let i = 0; i < Math.min(5, particles.length); i++) {
          const p2 = particles[i];
          if (particle === p2) continue;

          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.015 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.2;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      resizeCanvas();
      particles = createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: 'linear-gradient(135deg, #001836 0%, #000c20 100%)'
      }}
    />
  );
};

export default ParticleBackground;
