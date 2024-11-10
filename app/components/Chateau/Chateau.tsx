import Image from 'next/image';
import styles from "./Chateau.module.css";

const Chateau = () => {
  return (
    <div className={`w-full p-14 lg-pt-28 ${styles.chateau}`}>
      <div className="relative w-full h-[70vh] mb-10">
        <Image
          className="object-cover"
          src="/img/mapping-2.jpg"
          alt="Bosquet de la Colonnade - Château de Versailles"
          layout="fill"
        />
      </div>
      <div className="text-center mt-4 mb-20">
        <h3 className={`text-xl font-semibold ${styles.chateauTitle} leading-10`}>
          BOSQUET DE LA COLONNADE <span>CHÂTEAU DE VERSAILLES</span> 
        </h3>
      </div>
      <div className="flex justify-center mt-4">
          <a
            className={`${styles.button} text-black bg-white py-1 px-5 rounded-3xl`} href='#volumetrique'
          >
            VOIR PLUS
          </a>
      </div>
    </div>
  );
};

export default Chateau;