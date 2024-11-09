import Image from 'next/image';
import styles from './AuditSecu.module.css';

export default function AuditSecu() {
  return (
    <div className={`relative w-full mt-20 py-10 px-16 ${styles.secu} flex flex-col md:flex-row justify-between items-center`}>  
      <div className={`w-full md:w-5/12 text-center md:text-left ${styles.secuLeft}`}>
        <h2 className={`text-3xl font-semibold mb-4 ${styles.secuTitle}`}>AUDIT DE SÉCURITÉ</h2>
        <p className={`text-lg ${styles.secuText}`}>
        En France, une formation aux risques lasers est obligatoire pour l’utilisation
        des lasers de classe 3 et 4. Tous nos techniciens étant formés et diplômés
        en tant que « Responsable sécurité laser », nous proposons également
        un service d’audit de conformité des installations lasers, garantissant une
        sécurité maximale des spectacles lasers en France.
        </p>
      </div>
      <div className={`w-full md:w-7/12 flex justify-center mb-6 md:mb-0 ${styles.secuRight}`}>
        <Image
          src="/img/home/secu.jpeg"
          alt="Audit Sécurité"
          width={500}
          height={300}
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  );
}