"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 mt-8 flex flex-col">
      <div className={`flex justify-between w-full px-10 mb-6 ${styles.footerElt}`}>
        <div className="flex w-96">
          <Link href="/">
            <img
              src="/img/logo/logo-white.png"
              width={500}
              alt="Logo Laser Art Show"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`flex space-x-16 ${styles.footer}`}>
          <div className={styles.menuItemFooter}>
            <div className="hover:underline">
              À PROPOS
            </div>
            <div className={styles.submenuFooter}>
              <Link href="#histoire" className="hover:underline">Notre histoire</Link>
              <Link href="#valeurs" className="hover:underline">Nos valeurs</Link>
            </div>
          </div>
          <div className={styles.menuItemFooter}>
            <div className="hover:underline">
              PRÉSENTATION
            </div>
            <div className={styles.submenuFooter}>
              <Link href="#volumetrique" className="hover:underline">Show volumétrique</Link>
              <Link href="#mapping-laser" className="hover:underline">Mapping laser</Link>
              <Link href="#projection-laser" className="hover:underline">Projection laser</Link>
              <Link href="#security-audit" className="hover:underline">Audit de sécurité</Link>
            </div>
          </div>

          <div className={`flex ${styles.menuItemBottomFooter}`}>
            <Link href="#partenaire" className="hover:underline hidden">
              CLIENTS
            </Link>
            <Link href="#contact" className="hover:underline">
              CONTACT
            </Link>
          </div>
        </nav>

        {/* Instagram Icon */}
        <div className={`flex ${styles.menuItemTightFooter}`}>
          <Link href="https://www.instagram.com/laser.art.show" target="_blank">
            <img
              src="./img/home/insta.svg"
              alt="Instagram"
              height={30}
              width={30}
              className="hover:opacity-80"
            />
          </Link>
        </div>
      </div>

      <div className={`flex items-center px-10 justify-between mt-20 text-white ${styles.menuItemTBottomFooter}`}>
        <div>
          <a href="mailto:contact@laserartshow.com" className="hover:underline">contact@laserartshow.com</a>
          <p>+33 7 59 50 86 08</p>
          <a href="https://maps.app.goo.gl/PnYKWnRYJY19Hq8E9" target="_blank" className="hover:underline">12E chemin de Basso Cambo, 31100 Toulouse</a>
        </div>
        <p>Copyright &copy; Laser Art Show 2024. Tous droits réservés.</p>
        <Link href="/mentions-legales" className="hover:underline mt-2">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
