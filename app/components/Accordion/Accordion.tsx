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
            Fondée par <span className={` ${styles.itl}`}>Jonathan Ninon</span>,
            Laser Art Show est le fruit d’une solide expérience acquise{' '}
            <span>depuis 2017</span> aux côtés de{' '}
            <span>Loïc Lacoste, professionnel du laser depuis 1989</span>,
            véritable référence de ce domaine.
          </p>
          <button
            onClick={toggleAccordion} // Ajout de l'événement onClick pour ouvrir/fermer la section
            className={`${styles.button} text-black bg-white py-1 px-5 rounded-3xl`}
          >
            NOTRE PARCOURS ?
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
              <path d="M27 2.98781L2.9878 27" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M27 27L2.9878 2.98781" stroke="white" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </button>
          <p>
            Notre parcours commence en 2017 avec la rencontre de Jonathan et Loïc.
            Depuis, nous avons réalisé plus de 100 spectacles laser à travers le monde,
            en collaborant avec des grandes marques et des événements prestigieux.
          </p>
          <ul className="list-disc pl-5">
            <li>Plus de 100 spectacles laser réalisés</li>
            <li>Collaboration avec des marques internationales</li>
            <li>Utilisation des dernières technologies laser</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;