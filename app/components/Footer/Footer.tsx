import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 mt-8 flex flex-col">
      {/* Partie supérieure du footer */}
      <div className="flex justify-between w-full px-10 mb-6">
        {/* Logo */}
        <div className="flex">
          <Link href="/">
            <img
              src="/img/logo/logo-white.png"
              width={500}
              alt="Logo Laser Art Show"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-16">
        <div className={styles.menuItemFooter}>
            <Link href="#about" className="hover:underline">
              A PROPOS
            </Link>
            <div className={styles.submenuFooter}>
              <Link href="#histoire" className="hover:underline">Notre histoire</Link>
              <Link href="#valeurs" className="hover:underline">Nos valeurs</Link>
            </div>
          </div>
          <div className={styles.menuItemFooter}>
            <Link href="#presentation" className="hover:underline">
              PRESENTATION
            </Link>
            <div className={styles.submenuFooter}>
              <Link href="#volumetrique" className="hover:underline">Show volumétrique</Link>
              <Link href="#mapping-laser" className="hover:underline">Mapping laser</Link>
              <Link href="#projection-laser" className="hover:underline">Projection laser</Link>
              <Link href="#security-audit" className="hover:underline">Audit de sécurité</Link>
            </div>
          </div>

          <div className={`flex-col ${styles.menuItemBottomFooter}`}>
            <Link href="#partenaire" className="hover:underline">
              CLIENTS
            </Link>
            <Link href="#contact" className="hover:underline">
              CONTACT
            </Link>
          </div>
        </nav>

        {/* Instagram Icon */}
        <div className={`flex ${styles.menuItemTightFooter}`}>
          <Link href="https://www.instagram.com" target="_blank">
            <img
              src="./img/home/insta.svg"
              alt="Instagram"
              height={30}
              width={30}
              className="hover:opacity-80"
            />
          </Link>
        </div>

        {/* Bouton Retour en haut */}
        <div className={`flex ${styles.menuItemTightFooter}`}>
          <Link href="#top">
            <div className="flex flex-col items-center">
              <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="3" width="5" height="37" fill="white"/>
              <rect x="17.163" width="5" height="23.739" transform="rotate(45 17.163 0)" fill="white"/>
              <rect x="14" y="3.53552" width="5" height="23.739" transform="rotate(-45 14 3.53552)" fill="white"/>
              </svg>
              Haut de page
            </div>
          </Link>
        </div>
      </div>

      <div className="flex items-center px-10 justify-between mt-20 text-[rgb(73,73,73)]">
        <div>
        <a href="mailto:contact@laserartshow.com" className="hover:underline">contact@laserartshow.com</a>
        <p>+33 7 59 50 86 08</p>
          <a href="https://www.google.fr/maps/place/57+Rue+Mar%C3%A9chal+Joffre,+44000+Nantes/@47.2208838,-1.5507209,16z/data=!3m1!4b1!4m6!3m5!1s0x4805eebce29f5eff:0xb72cbcd1ee585550!8m2!3d47.2208802!4d-1.548146!16s%2Fg%2F11c27ptt71?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="hover:underline"> 57 rue Maréchal Joffre, Nantes</a>
        </div>
        <p>Copyright &copy; Laser Art Show 2024. Tous droits réservés.</p>
        <Link href="/mentions-legales" className="hover:underline mt-2">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}