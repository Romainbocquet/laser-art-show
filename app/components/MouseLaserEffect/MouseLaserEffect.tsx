'use client';
import { useEffect, useState } from 'react';
import styles from './MouseLaserEffect.module.css';

const MouseLaserEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`${styles.cursorAnim}`}>
      <div
        style={{
          position: 'fixed',
          top: position.y - 15 + 'px', // Position de décalage pour le halo
          left: position.x - 15 + 'px', // Position de décalage pour le halo
          width: '30px', // Taille du halo
          height: '30px', // Taille du halo
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Couleur du halo
          borderRadius: '50%',
          pointerEvents: 'none',
          transition: 'top 0.1s, left 0.1s', // Douce transition du halo
          zIndex: 9999, // S'assurer que le halo soit au-dessus
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.7)', // Ombre pour l'effet lumineux
        }}
      ></div>

      {/* Curseur point */}
      <div
        style={{
          position: 'fixed',
          top: position.y - 3 + 'px', // Position du curseur au centre du halo
          left: position.x - 3 + 'px', // Position du curseur au centre du halo
          width: '6px',
          height: '6px',
          backgroundColor: '#FFF', // Couleur du point du curseur
          borderRadius: '50%',
          pointerEvents: 'none', // Empêche l'élément de bloquer les autres éléments
          zIndex: 10000, // Assurez-vous que le point soit au-dessus du halo
        }}
      ></div>
    </div>
  );
};

export default MouseLaserEffect;