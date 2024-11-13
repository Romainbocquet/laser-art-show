"use client";

import { useState, useRef, useEffect } from 'react';
import styles from "./Accordion.module.css";
import Image from 'next/image';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler l'ouverture de la section
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Inverser l'état pour afficher/masquer la section
  };

  // Utilisation de useEffect pour gérer la hauteur dynamique
  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`; // Définit la hauteur dynamique
        contentRef.current.style.opacity = '1'; // Rendre visible
      } else {
        contentRef.current.style.height = '0px'; // Masquer la section
        contentRef.current.style.opacity = '0'; // Rendre invisible
      }
    }
  }, [isOpen]);

  return (
    <div>
      <div className={`px-10 ${styles.accordion}`}>
        <div className={` ${styles.accordionLeft}`}>
          <h2>NOTRE HISTOIRE</h2>
          <p>
            Fondée par <span className={` ${styles.itl}`}>Jonathan NINON</span>,
            Laser Art Show est le fruit d’une solide expérience acquise{' '}
            <span>depuis 2017</span> aux côtés de{' '}
            <span className={` ${styles.itl}`}>Loïc LACOSTE</span>, <span>professionnel du laser depuis 1989</span>,
            véritable référence de ce domaine.
          </p>
          <button
            onClick={toggleAccordion} // Ajout de l'événement onClick pour ouvrir/fermer la section
            className={`${styles.button} text-black bg-white py-1 px-5 rounded-3xl`}
          >
            VOIR PLUS
          </button>
        </div>

        <div className={` ${styles.accordionRight}`}>
          <Image
            className={` ${styles.accordionRightImg}`}
            src="/img/home/histoire.jpg"
            alt="Picture of the author"
            width={468}
            height={350}
          />
        </div>
      </div>

      <div
        ref={contentRef}
        className={`${styles.extraContainer} ${isOpen ? "open" : ""}`}
      >
        <div className={`${styles.extraContent} relative px-10 pt-20 p-16`}>
          <button
            onClick={toggleAccordion}
            className={`${styles.extraContentButton} absolute`}
          >
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 2.98782L2.98779 27" stroke="white"/>
          <path d="M27 27L2.98779 2.98782" stroke="white"/>
          </svg>
          </button>
          <div className={`${styles.timeline}`}>
            <div className={`${styles.timelineElt}`}>
              <h5>2019</h5>
              <p>Les voiles de St. Barth à Saint-Barthélemy</p>
            </div>
            <div className={`${styles.timelineElt}`}>
              <h5>2019</h5>
              <p>La finale de « La Coupe de la Ligue » de football à Bordeaux</p>
            </div>
            <div className={`${styles.timelineElt}`}>
              <h5>2019</h5>
              <p>Les émissions de TV The Voice et Mask Singer</p>
            </div>
            <div className={`${styles.timelineElt}`}>
              <h5>2019</h5>
              <p>Le 1<sup>er</sup> mapping laser de la Tour Eiffel pour son 130<sup>er</sup> anniversaire</p>
            </div>
            <div className={`${styles.timelineElt}`}>
              <h5>2019</h5>
              <p>Le Nouvel An 2020 sur les Champs-Élysées</p>
            </div>
            <div className={`${styles.timelineElt}`}>
              <h5>2018 - 2019</h5>
              <p>Le festival Mawazine au Maroc en 2018 et 2019</p>
            </div>
            <div className={`${styles.timelineElt}`}>
              <h5>2017</h5>
              <p>L’Exposition sur le thème « Énergie du Futur » à Astana, au Kazakhstan.</p>
            </div>
            <div className={`${styles.timelineElt}`}>
              <h5>Mais aussi</h5>
              <p>De nombreux concerts d’artistes de renom comme David Guetta, Martin Garrix ou encore Travis Scott</p>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Accordion;