import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = () => {
      window.scrollTo({
        top: window.scrollY,
        behavior: 'smooth', // Applique un défilement fluide
      });
    };

    window.addEventListener('scroll', handleSmoothScroll);
    return () => {
      window.removeEventListener('scroll', handleSmoothScroll);
    };
  }, []);

  return null; // Ce composant n'a pas de rendu visuel.
};

export default SmoothScroll;
