import { useEffect, useRef } from "react";

const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let animationFrameId;
    let particles = [];
    let mouse = {
      x: null,
      y: null,
    };

    const createParticles = () => {
      const particleCount = Math.min(
        Math.floor((window.innerWidth * window.innerHeight) / 14000),
        100,
      );

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.7 + 0.6,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
      }));
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const connectParticles = () => {
      for (let firstIndex = 0; firstIndex < particles.length; firstIndex += 1) {
        for (
          let secondIndex = firstIndex + 1;
          secondIndex < particles.length;
          secondIndex += 1
        ) {
          const distanceX =
            particles[firstIndex].x - particles[secondIndex].x;
          const distanceY =
            particles[firstIndex].y - particles[secondIndex].y;

          const distance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY,
          );

          if (distance < 130) {
            const opacity = 1 - distance / 130;

            context.beginPath();
            context.strokeStyle = `rgba(61, 211, 255, ${opacity * 0.18})`;
            context.lineWidth = 0.7;
            context.moveTo(
              particles[firstIndex].x,
              particles[firstIndex].y,
            );
            context.lineTo(
              particles[secondIndex].x,
              particles[secondIndex].y,
            );
            context.stroke();
          }
        }
      }
    };

    const animateParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const distanceX = mouse.x - particle.x;
          const distanceY = mouse.y - particle.y;
          const distance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY,
          );

          if (distance < 130 && distance > 0) {
            particle.x -= (distanceX / distance) * 0.12;
            particle.y -= (distanceY / distance) * 0.12;
          }
        }

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2,
        );
        context.fillStyle = "rgba(82, 211, 255, 0.75)";
        context.shadowBlur = 12;
        context.shadowColor = "#2dd4ff";
        context.fill();
        context.shadowBlur = 0;
      });

      connectParticles();

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    animateParticles();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
};

export default ParticleNetwork;