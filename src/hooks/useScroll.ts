import { useEffect, useState } from 'react';

interface UseScrollProps {
  threshold?: number;
}

interface ScrollData {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolling: boolean;
  scrollPercentage: number;
}

export const useScroll = ({ threshold = 10 }: UseScrollProps = {}): ScrollData => {
  const [scrollData, setScrollData] = useState<ScrollData>({
    scrollY: 0,
    scrollDirection: null,
    isScrolling: false,
    scrollPercentage: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout: number;

    const updateScrollData = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0;

      let scrollDirection: 'up' | 'down' | null = null;
      if (Math.abs(currentScrollY - lastScrollY) > threshold) {
        scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        lastScrollY = currentScrollY;
      }

      setScrollData({
        scrollY: currentScrollY,
        scrollDirection,
        isScrolling: true,
        scrollPercentage: Math.min(100, Math.max(0, scrollPercentage)),
      });

      // Detectar cuando se deja de hacer scroll
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        setScrollData(prev => ({
          ...prev,
          isScrolling: false,
        }));
      }, 150);
    };

    window.addEventListener('scroll', updateScrollData, { passive: true });
    
    // Llamar una vez para obtener el estado inicial
    updateScrollData();

    return () => {
      window.removeEventListener('scroll', updateScrollData);
      clearTimeout(scrollTimeout);
    };
  }, [threshold]);

  return scrollData;
};

export default useScroll;
