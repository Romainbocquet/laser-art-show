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
            <Link href="#about" className="hover:underline">
              A PROPOS
            </Link>
            <div className={styles.submenu}>
              <Link href="#histoire" className="hover:underline">NOTRE HISTOIRE</Link>
              <Link href="#valeurs" className="hover:underline">NOS VALEURS</Link>
            </div>
          </div>
          <div className={styles.menuItem}>
            <Link href="#presentation" className="hover:underline">
              PRESENTATION
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