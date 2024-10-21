import Link from "next/link";
import styles from "./Header.module.css";
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white py-4">
      <div className={`flex justify-between items-center ${styles.header}`}>
        <div className={styles.logo}>
          <Link href="/">
          <Image
            src="/img/logo/logo-white.png"
            height={60}
            alt="Logo laser show"
          />
          </Link>
        </div>

        <nav className={`flex space-x-8 ${styles.menu}`}>
          <div className={styles.menuItem}>
            <Link href="/" className="hover:underline">
              A PROPOS
            </Link>
            <div className={styles.submenu}>
              <Link href="/about/team" className="hover:underline">Équipe</Link>
              <Link href="/about/history" className="hover:underline">Histoire</Link>
            </div>
          </div>

          <div className={styles.menuItem}>
            <Link href="/about" className="hover:underline">
              PRESENTATION
            </Link>
            <div className={styles.submenu}>
              <Link href="/presentation/vision" className="hover:underline">Vision</Link>
              <Link href="/presentation/mission" className="hover:underline">Mission</Link>
            </div>
          </div>

          <Link href="/services" className="hover:underline">
            CLIENTS
          </Link>
          <Link href="/contact" className="hover:underline">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}