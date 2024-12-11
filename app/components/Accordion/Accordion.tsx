"use client";

import { useState, useRef, useEffect } from 'react';
import Timeline from '../Timeline/Timeline';
import styles from "./Accordion.module.css";
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour contrôler l'ouverture de la section
  const contentRef = useRef<HTMLDivElement>(null);

  const controls1 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  if (inView1) controls1.start({ opacity: 1, y: 0, transition: { duration: 0.6} });

  const controls2 = useAnimation();
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  if (inView2) controls2.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3  } });

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
          <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={controls1}
          >
            <h2>NOTRE HISTOIRE</h2>
          </motion.div>
          <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 20 }}
          animate={controls2}
          className='flex justify-center'
          >
          <p>
            Fondée par <span className={` ${styles.itl}`}>Jonathan NINON</span>, Laser
            Art Show est le fruit d’une solide expérience, acquise <span>depuis 2017</span> en participant à de
            nombreux événements prestigieux aux côtés de <span className={` ${styles.itl}`}>Loïc LACOSTE</span>, <span>professionnel du laser depuis
              1989</span>, véritable référence de ce domaine.
          </p>
          </motion.div>
          <div className={` ${styles.buttonContainer}`}>
            <button
              onClick={toggleAccordion} // Ajout de l'événement onClick pour ouvrir/fermer la section
              className={`${styles.button} text-black bg-white rounded-3xl`}
            >
              VOIR PLUS
            </button>
          </div>
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
        <div className={`${styles.extraContent} relative pt-20`}>
          <button
            onClick={toggleAccordion}
            className={`${styles.extraContentButton} absolute`}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_30_72)">
                <path d="M25.34 0.350006L0.349976 25.34" stroke="white" strokeMiterlimit="10" />
                <path d="M25.34 25.34L0.349976 0.350006" stroke="white" strokeMiterlimit="10" />
              </g>
              <defs>
                <clipPath id="clip0_30_72">
                  <rect width="25.69" height="25.69" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className={styles.timelineContainer}>
            <Timeline />
          </div>
        </div>
      </div>
      <div className={` ${styles.accordionRightImgMobile}`}>
        <Image
            src="/img/home/histoire.jpg"
            alt="Picture of the author"
            width={468}
            height={350}
          />
      </div>
      
    </div>
  );
};

export default Accordion;