import React, { useEffect, useRef } from 'react';

const BlackHole = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set the size of the canvas to match the parent container
    canvas.width = canvas.parentNode.offsetWidth;
    canvas.height = canvas.parentNode.offsetHeight;

    // Animation properties
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 0;
    const maxRadius = Math.min(centerX, centerY);
    const animationSpeed = 2;

    let currentRadius = radius;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the black hole
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'black';
      ctx.fill();

      // Increase the radius
      currentRadius += animationSpeed;

      // Reset the radius if it exceeds the maximum radius
      if (currentRadius > maxRadius) {
        currentRadius = radius;
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => cancelAnimationFrame(animate);
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default BlackHole;