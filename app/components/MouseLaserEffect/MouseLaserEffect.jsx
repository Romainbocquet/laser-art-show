'use client';
import { useEffect, useState } from 'react';

const MouseLaserEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className='sm:hidden'>
      {/* Halo effect */}
      <div
      className='sm:hidden'
        style={{
          position: 'fixed',
          top: position.y - 15 + 'px', // Position du halo autour du curseur
          left: position.x - 15 + 'px', // Position du halo autour du curseur
          width: '30px', // Taille du halo
          height: '30px', // Taille du halo
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Couleur du halo
          borderRadius: '50%',
          pointerEvents: 'none', // Empêche l'élément de bloquer les autres éléments
          zIndex: 9999, // S'assurer que le halo soit au-dessus de tout
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.7)', // Effet lumineux
        }}
      ></div>

      {/* Curseur point */}
      <div
      className='sm:hidden'
        style={{
          position: 'fixed',
          top: position.y - 2.5 + 'px', // Position du point au centre du halo
          left: position.x - 2.5 + 'px', // Position du point au centre du halo
          width: '5px',
          height: '5px',
          backgroundColor: '#FFF', // Couleur du point
          borderRadius: '50%',
          pointerEvents: 'none', // Empêche l'élément de bloquer les autres éléments
          zIndex: 10000, // Assurez-vous que le point soit au-dessus du halo
        }}
      ></div>
    </div>
  );
};

export default MouseLaserEffect;