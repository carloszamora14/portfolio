import { useRef } from 'react';

function useMouseTilt() {
  const containerRef = useRef(null);

  const handleMouseMove = evt => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();

    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;

    const xPercentage = x / rect.width;
    const yPercentage = y / rect.height;

    const xRotation = (xPercentage - 0.5) * 70;
    const yRotation = (0.5 - yPercentage) * 70;

    container.style.setProperty('--x-rotation', `${xRotation}deg`);
    container.style.setProperty('--y-rotation', `${yRotation}deg`);
  };

  return { containerRef, handleMouseMove };
}

export default useMouseTilt;
