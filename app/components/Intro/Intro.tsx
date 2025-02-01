"use client";

import Image from "next/image";
import styles from "./Intro.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Lancement des animations si visible
  if (inView1) controls1.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  if (inView2) controls2.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  if (inView3) controls3.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  if (inView4) controls4.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  if (inView5) controls5.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  if (inView6) controls6.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });

  return (
    <div className={`relative w-full mt-11 py-10 px-24 ${styles.intro} flex justify-center`}>
      <div className={`flex flex-wrap lg:flex-nowrap lg:gap-20 sm:gap-0  ${styles.introContainer}`}>
        {/* Section gauche */}
        <div className={`flex flex-col`}>
          {/* Image 1 */}
          <div className="mb-10">
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 20 }}
            animate={controls4}
          >
              <Image
                src="/img/intro/david.jpg"
                alt="Description de l'image 1"
                width={500}
                height={300}
                className="w-full object-cover"
              />
            </motion.div>
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 20 }}
              animate={controls1}
              className="text-left mt-3"
            >
              <h3 className="text-xl">Concert de David Guetta</h3>
              <h4>Paris</h4>
            </motion.div>
          </div>

          {/* Image 2 */}
          <div className={`flex relative justify-center ${styles.textLeft}`}>
          <motion.div
            className={`${styles.textLeftImg}`}
            ref={ref5}
            initial={{ opacity: 0, y: 20 }}
            animate={controls5}
          >
              <Image
                src="/img/intro/defile.jpg"
                alt="Description de l'image 2"
                width={500}
                height={300}
                className="w-full object-cover"
              />
            </motion.div>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 20 }}
              animate={controls2}
              className={`${styles.textLeftImgTitle} lg:absolute mt-5 lg:mt-0 bottom-0`}
            >
              <h3 className="text-xl">
                Défilé de mode pour « VETEMENTS »
              </h3>
              <h4>Paris</h4>
            </motion.div>
          </div>
        </div>

        {/* Section droite */}
        <div className="flex flex-col mt-10">
        <motion.div
            className='max-w-xl'
            ref={ref6}
            initial={{ opacity: 0, y: 20 }}
            animate={controls6}
          >
            <Image
              src="/img/intro/tour.jpg"
              alt="Description de l'image 3"
              width={500}
              height={600}
              className="w-full object-cover"
            />
          </motion.div>
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 20 }}
            animate={controls3}
            className="text-left mt-5"
          >
            <h3 className="text-xl">
              130<sup>e</sup> anniversaire de la Tour Eiffel
            </h3>
            <h4>Paris</h4>
          </motion.div>
        </div>
      </div>
    </div>
  );
}