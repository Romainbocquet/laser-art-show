"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
  className={`w-full text-white p-4 px-10 fixed ${
    isScrolled ? styles.solid : styles.transparent
  }`}
>
  <div className={`flex justify-between items-center ${styles.header}`}>
    <div className={styles.logo}>
      <Link href="/">
        <img
          className={styles.logoImage}
          src="/img/logo/logo-white.svg"
          height={67} // La hauteur sera ignorée grâce au CSS
          width={200} // La largeur s'ajustera automatiquement
          alt="Logo laser show"
        />
      </Link>
    </div>
    <div className={`${styles.burger}`}>
      <button
            className={`${styles.burgerIcon}`}
            onClick={() => setIsMenuOpen(true)}
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M4 6h16M4 12h16m-7 6h7" stroke="white" strokeWidth="2" />
          </svg>
        </button>
    </div>
    <nav className={`flex space-x-8 ${styles.menu}`}>
          <div className={styles.menuItem}>
            <div className={`${styles.menuItemElt} cursor-pointer`}>
              À PROPOS
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.984375 4.42144C0.984375 4.42144 1.23198 4.07566 1.36449 3.94347L1.84197 3.46568L6.99986 8.6239L12.25 3.60942C12.25 3.60942 12.3719 3.67945 12.6356 3.94347C12.8996 4.20748 13.125 4.48442 13.125 4.48442L7 10.5346V10.5342L1.84197 5.37646C1.70978 5.24471 0.984375 4.42144 0.984375 4.42144Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={styles.submenu}>
              <Link href="#histoire" className="hover:underline">
                NOTRE HISTOIRE
              </Link>
              <Link href="#valeurs" className="hover:underline">
                NOS VALEURS
              </Link>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={`${styles.menuItemElt} cursor-pointer`}>
              PRÉSENTATION
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.984375 4.42144C0.984375 4.42144 1.23198 4.07566 1.36449 3.94347L1.84197 3.46568L6.99986 8.6239L12.25 3.60942C12.25 3.60942 12.3719 3.67945 12.6356 3.94347C12.8996 4.20748 13.125 4.48442 13.125 4.48442L7 10.5346V10.5342L1.84197 5.37646C1.70978 5.24471 0.984375 4.42144 0.984375 4.42144Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={styles.submenu}>
              <Link href="#volumetrique" className="hover:underline">
                SHOW VOLUMÉTRIQUE
              </Link>
              <Link href="#mapping-laser" className="hover:underline">
                MAPPING LASER
              </Link>
              <Link href="#projection-laser" className="hover:underline">
                PROJECTION LASER
              </Link>
              <Link href="#security-audit" className="hover:underline">
                AUDIT DE SÉCURITÉ
              </Link>
            </div>
          </div>

          <Link href="#partenaire" className="hover:underline hidden">
            CLIENTS
          </Link>
          <Link href="#contact" className={`${styles.contactLink}`}>
            CONTACT
          </Link>
        </nav>
      </div>
      {isMenuOpen && (
      <div className={`${styles.mobilMenu}`}>
        <div  className={`${styles.closeMenu}`} onClick={() => setIsMenuOpen(false)}>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 2.98782L2.98779 27" stroke="white"></path><path d="M27 27L2.98779 2.98782" stroke="white"></path></svg>
        </div>
        <nav className={`flex space-x-8 ${styles.menuTel}`}>
          <div className={styles.menuItem}>
            <div className={`${styles.menuItemElt} cursor-pointer`}>
              À PROPOS
            </div>
            <div>
              <Link href="#histoire" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                NOTRE HISTOIRE
              </Link>
              <Link href="#valeurs" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                NOS VALEURS
              </Link>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={`${styles.menuItemElt} cursor-pointer`}>
              PRÉSENTATION
            </div>
            <div className="flex flex-col gap-2">
              <Link href="#volumetrique" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                SHOW VOLUMÉTRIQUE
              </Link>
              <Link href="#mapping-laser" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                MAPPING LASER
              </Link>
              <Link href="#projection-laser" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                PROJECTION LASER
              </Link>
              <Link href="#security-audit" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                AUDIT DE SÉCURITÉ
              </Link>
            </div>
          </div>

          <Link href="#partenaire" className="hover:underline hidden" onClick={() => setIsMenuOpen(false)}>
            CLIENTS
          </Link>
          <Link href="#contact" className={`${styles.contactLink}`} onClick={() => setIsMenuOpen(false)}>
            CONTACT
          </Link>
        </nav>
      </div>
      )}
    </header>
  );
}