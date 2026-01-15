import React, { useEffect, useRef } from 'react';

const StarShower: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Star properties
    const stars: { x: number; y: number; length: number; speed: number; opacity: number; maxOpacity: number }[] = [];
    const starCount = 80;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 80 + 20, // Longer trails for shooting star look
        speed: Math.random() * 2 + 0.5, // Slower speed
        opacity: 0,
        maxOpacity: Math.random() * 0.8 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        // Create a gradient for the trail
        const gradient = ctx.createLinearGradient(star.x, star.y, star.x, star.y - star.length);
        gradient.addColorStop(0, `rgba(255, 0, 0, ${star.opacity})`);
        gradient.addColorStop(1, `rgba(255, 0, 0, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2; // Slightly thicker
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x, star.y - star.length);
        ctx.stroke();

        // Update position
        star.y += star.speed;
        
        // Twinkle/Shooting star opacity logic
        // Fade in when entering, stay bright, then maybe fade out? 
        // Simple "shooting" pulse:
        if (star.y < height / 3) {
             star.opacity = Math.min(star.opacity + 0.02, star.maxOpacity);
        } else if (star.y > height * 0.8) {
             star.opacity = Math.max(star.opacity - 0.02, 0);
        }

        // Reset if off screen
        if (star.y - star.length > height) {
          star.y = -star.length;
          star.x = Math.random() * width;
          star.speed = Math.random() * 2 + 0.5;
          star.opacity = 0;
        }
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default StarShower;
