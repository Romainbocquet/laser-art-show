"use client";

import Image from 'next/image';
import styles from './AuditSecu.module.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AuditSecu() {
  const controls1 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  if (inView1) controls1.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } });

  const controls2 = useAnimation();
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  if (inView2) controls2.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } });


  return (
    <div className={`relative w-full mt-20 py-10 px-16 ${styles.secu} flex flex-col md:flex-row justify-between items-center`}>  
      <div className={`w-full md:w-5/12 text-center md:text-left ${styles.secuLeft} relative`}>

      <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 20 }}
            animate={controls1}>

        <div className={` ${styles.secuTitle} mb-5`}>
          <div className={` ${styles.secuTitleImg}`}>
          <Image
              className={` ${styles.valeurtImg}`}
              src="/img/valeurs/service-client.svg"
              alt="Picture of the author"
              width={128}
              height={90}
            />
          </div>
        
            <h2 className={`font-semibold`}>
            AUDIT DE SÉCURITÉ</h2>
        </div>
        </motion.div>
        <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 20 }}
            animate={controls2}>
          <p className={`text-lg ${styles.secuText}`}>
          En France, une formation aux risques lasers est obligatoire pour l’utilisation
          des lasers de classe 3 et 4. Tous nos techniciens étant <span>formés et diplômés
          en tant que « Responsable sécurité laser »</span>, nous proposons également
          un service d’audit de conformité des installations lasers, garantissant une
          sécurité maximale des spectacles lasers <span>en France</span>.
          </p>
        </motion.div>
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