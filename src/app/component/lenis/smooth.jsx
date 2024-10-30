
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2, // Increased duration for smoother scrolling
      easing: (t) => t * (2 - t), // Quadratic easing function for smooth acceleration and deceleration
      smooth: true, // Enable smooth scrolling
      smoothTouch: true, // Enable smooth touch scrolling on mobile
      gestureDirection: 'vertical', // Set to vertical
      orientation: 'vertical', // Set scroll orientation
      touch: true, // Enable touch support
    });

    const update = (time) => {
      lenisRef.current.raf(time); // Request animation frame
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    // Cleanup on unmount
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;