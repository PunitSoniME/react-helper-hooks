import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    isMobile: width <= 480,
    isTablet: width >= 481 && width <= 768,
    isLaptop: width >= 769 && width <= 1024,
    isDesktop: width >= 1025 && width <= 1200,
    isExtraLarge: width >= 1201,
    width,
    height,
  };
}

/**
 * @since 1.3.0
 */
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
