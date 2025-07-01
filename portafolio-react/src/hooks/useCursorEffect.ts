import { useEffect } from 'react';

export const useCursorEffect = () => {
  useEffect(() => {
    const createCursorTrail = (x: number, y: number) => {
      const cursorTrail = document.createElement('div');
      cursorTrail.classList.add('cursor-effect');
      cursorTrail.style.left = x + 'px';
      cursorTrail.style.top = y + 'px';
      document.body.appendChild(cursorTrail);

      setTimeout(() => {
        cursorTrail.remove();
      }, 600);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const header = document.querySelector('header');
      const headerRect = header?.getBoundingClientRect();

      if (!headerRect || e.clientY < headerRect.top || e.clientY > headerRect.bottom) {
        createCursorTrail(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
};

export default useCursorEffect;
