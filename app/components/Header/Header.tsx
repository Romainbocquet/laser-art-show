import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="w-full bg-black text-white p-4 px-10">
      <div className={`flex justify-between items-center ${styles.header}`}>
        <div className={styles.logo}>
          <Link href="/">
            <img
              src="/img/logo/logo-white.png"
              height={67}
              width={200}
              alt="Logo laser show"
            />
          </Link>
        </div>

        <nav className={`flex space-x-8 ${styles.menu}`}>
          <div className={styles.menuItem}>
            <Link href="#about" className={`${styles.menuItemElt}`}>
              À PROPOS
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.984375 4.42144C0.984375 4.42144 1.23198 4.07566 1.36449 3.94347L1.84197 3.46568L6.99986 8.6239L12.25 3.60942C12.25 3.60942 12.3719 3.67945 12.6356 3.94347C12.8996 4.20748 13.125 4.48442 13.125 4.48442L7 10.5346V10.5342L1.84197 5.37646C1.70978 5.24471 0.984375 4.42144 0.984375 4.42144Z" fill="white"/>
              </svg>
            </Link>
            <div className={styles.submenu}>
              <Link href="#histoire" className="hover:underline">NOTRE HISTOIRE</Link>
              <Link href="#valeurs" className="hover:underline">NOS VALEURS</Link>
            </div>
          </div>
          <div className={styles.menuItem}>
            <Link href="#presentation" className={`${styles.menuItemElt}`}>
              PRÉSENTATION
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.984375 4.42144C0.984375 4.42144 1.23198 4.07566 1.36449 3.94347L1.84197 3.46568L6.99986 8.6239L12.25 3.60942C12.25 3.60942 12.3719 3.67945 12.6356 3.94347C12.8996 4.20748 13.125 4.48442 13.125 4.48442L7 10.5346V10.5342L1.84197 5.37646C1.70978 5.24471 0.984375 4.42144 0.984375 4.42144Z" fill="white"/>
              </svg>
            </Link>
            <div className={styles.submenu}>
              <Link href="#volumetrique" className="hover:underline">SHOW VOLUMÉTRIQUE</Link>
              <Link href="#mapping-laser" className="hover:underline">MAPPING LASER</Link>
              <Link href="#projection-laser" className="hover:underline">PROJECTION LASER</Link>
              <Link href="#security-audit" className="hover:underline">AUDIT DE SÉCURITÉ</Link>
            </div>
          </div>

          <Link href="#partenaire" className="hover:underline">
            CLIENTS
          </Link>
          <Link href="#contact" className={`${styles.contactLink}`}>
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}