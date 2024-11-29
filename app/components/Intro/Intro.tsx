import Image from 'next/image';
import styles from './Intro.module.css';

export default function Intro() {
  return (
    <div className={`relative w-full mt-11 py-10 px-16 ${styles.intro} flex justify-center`}>
      <div className={`flex flex-wrap lg:flex-nowrap lg:gap-20 sm:gap-0  ${styles.introContainer}`}>
        {/* Section gauche */}
        <div className={`flex flex-col`}>
          {/* Image 1 avec titre en dessous */}
          <div className='mb-10'>
            <div>
            <Image
              src="/img/intro/david.jpg"
              alt="Description de l'image 1"
              width={500}
              height={300}
              className="w-full object-cover"
            />
            </div>
            <div className="text-left mt-3">
              <h3>CONCERT DE DAVID GUETTA</h3>
              <h4>PARIS</h4>
            </div>
          </div>
          {/* Image 2 avec titre à droite */}
          <div className={`flex relative justify-center ${styles.textLeft} `}>
            <div className={`${styles.textLeftImg}`}>
              <Image
                src="/img/intro/defile.jpg"
                alt="Description de l'image 2"
                width={500}
                height={300}
                className="w-full object-cover"
              />
            </div>
            <div className={`${styles.textLeftImgTitle} lg:absolute mt-5 lg:mt-0 bottom-0`}>
              <h3>DÉFILÉ DE MODE <br /> POUR « VETEMENTS »</h3>
              <h4>PARIS</h4>
            </div>
          </div>
        </div>

        {/* Section droite */}
        <div className="flex flex-col mt-10">
          <div className='max-w-xl'>
            <Image
              src="/img/intro/tour.jpg"
              alt="Description de l'image 3"
              width={500}
              height={600}
              className="w-full object-cover"
            />
          </div>
          <div className="text-left mt-5">
            <h3>130<sup>e</sup> ANNIVERSAIRE DE LA <br /> TOUR EIFFEL</h3>
            <h4>PARIS</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
