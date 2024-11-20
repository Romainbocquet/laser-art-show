import Image from 'next/image';
import styles from "./Chateau.module.css";

const Chateau = () => {
  return (
    <div className={`w-full p-14 lg-pt-28 ${styles.chateau}`}>
      <div className="relative w-full h-[70vh] mb-5">
        <Image
          className="object-cover"
          src="/img/mapping-2.jpg"
          alt="Bosquet de la Colonnade - Château de Versailles"
          layout="fill"
        />
      </div>
      <div className={`mt-4 mb-20 ${styles.chateauTitle}`}>
        <h3 className={`text-xl font-semibold leading-10`}>
          BOSQUET DE LA COLONNADE
        </h3>
        <h4>CHÂTEAU DE VERSAILLES</h4>
      </div>
      <div className="flex justify-center mt-4">
          <a
            className={`${styles.button} text-black bg-white rounded-3xl`} href='#volumetrique'
          >
            VOIR PLUS
          </a>
      </div>
    </div>
  );
};

export default Chateau;