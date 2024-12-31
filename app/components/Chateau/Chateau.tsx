"use client";

import Image from 'next/image';
import styles from "./Chateau.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Chateau = () => {
  const controls1 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  if (inView1) controls1.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });

  return (
    <div className={`w-full p-14 lg-pt-28 ${styles.chateau}`}>
      <div className="relative w-full h-[70vh] mb-5">
        <Image
          className="object-cover"
          src="/img/mapping-2.jpg"
          alt="Les Grandes Eaux Nocturnes - Château de Versailles"
          layout="fill"
        />
      </div>
      <motion.div className={`mt-4 mb-20 ${styles.chateauTitle}`}
      ref={ref1}
      initial={{ opacity: 0, y: 20 }}
      animate={controls1}
      >
        <h3 className={`text-xl leading-10`}>
        Les Grandes Eaux Nocturnes
        </h3>
        <h4>Château de Versailles</h4>
      </motion.div>
      <div className="flex justify-center mt-4">
          <a
            className={`${styles.button} text-black bg-white rounded-3xl`} href='#volumetrique'
          >
            Voir plus
          </a>
      </div>
    </div>
  );
};

export default Chateau;