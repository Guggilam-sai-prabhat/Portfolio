import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorPositions, setCursorPositions] = useState([]);

  const handleMouseMove = (event) => {
    const newTrailDot = {
      x: event.clientX,
      y: event.clientY,
      key: Date.now(), // Unique key for each trail dot
      scale: 1,
      opacity: 1
    };
    setCursorPositions(prev => [...prev, newTrailDot]);

    setTimeout(() => {
      setCursorPositions(prev =>
        prev.map(dot => 
          dot.key === newTrailDot.key ? { ...dot, scale: 0.1, opacity: 0 } : dot
        )
      );
    }, 100); // Start transformation immediately

    setTimeout(() => {
      setCursorPositions(prev => prev.filter(p => p.key !== newTrailDot.key));
    }, 900); // Remove dot after animation completes
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {cursorPositions.map(dot => (
        <div
          key={dot.key}
          className="cursor-trail"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            transform: `translate(-50%, -50%) scale(${dot.scale})`,
            opacity: dot.opacity,
            animation: 'colorShift 800ms linear'
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
