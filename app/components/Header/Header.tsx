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
          <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_30_68)">
          <path d="M24.46 0.5L0.130005 0.74" stroke="white" strokeMiterlimit="10"/>
          <path d="M24.39 9.82001L0.0700073 10.06" stroke="white" strokeMiterlimit="10"/>
          <path d="M24.33 19.15L0 19.38" stroke="white" strokeMiterlimit="10"/>
          </g>
          <defs>
          <clipPath id="clip0_30_68">
          <rect width="24.46" height="19.88" fill="white"/>
          </clipPath>
          </defs>
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
                Notre histoire
              </Link>
              <Link href="#valeurs" className="hover:underline">
                Nos valeurs
              </Link>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={`${styles.menuItemElt} cursor-pointer`}>
              PRESTATION
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
                Show volumétrique
              </Link>
              <Link href="#mapping-laser" className="hover:underline">
                Mapping laser
              </Link>
              <Link href="#projection-laser" className="hover:underline">
                Projection laser
              </Link>
              <Link href="#security-audit" className="hover:underline">
                Audit de sécurité
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
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_30_72)"> <path d="M25.34 0.350006L0.349976 25.34" stroke="white" strokeMiterlimit="10"/> <path d="M25.34 25.34L0.349976 0.350006" stroke="white" strokeMiterlimit="10"/> </g> <defs> <clipPath id="clip0_30_72"> <rect width="25.69" height="25.69" fill="white"/> </clipPath> </defs> </svg>
        </div>
        <nav className={`flex space-x-8 ${styles.menuTel}`}>
          <div className={styles.menuItem}>
            <div className={`${styles.menuItemElt} cursor-pointer`}>
              À PROPOS
            </div>
            <div className="flex flex-col gap-2">
              <Link href="#histoire" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                Notre histoire
              </Link>
              <Link href="#valeurs" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                Nos valeurs
              </Link>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={`${styles.menuItemElt} cursor-pointer`}>
              PRESTATION
            </div>
            <div className="flex flex-col gap-2">
              <Link href="#volumetrique" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                Show volumétrique
              </Link>
              <Link href="#mapping-laser" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                Mapping laser
              </Link>
              <Link href="#projection-laser" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                Projection laser
              </Link>
              <Link href="#security-audit" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                Audit de sécurité
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