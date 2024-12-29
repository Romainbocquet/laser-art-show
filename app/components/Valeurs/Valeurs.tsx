"use client";

import styles from "./Valeurs.module.css";
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Valeurs() {

  const controls1 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  if (inView1) controls1.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });

  const controls2 = useAnimation();
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  if (inView2) controls2.start({ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } });

  const controls3 = useAnimation();
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  if (inView3) controls3.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.9 } });

  const controls4 = useAnimation();
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });
  if (inView4) controls4.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } });

  const controls5 = useAnimation();
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true });
  if (inView5) controls5.start({ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.12 } });

  return (
    <div className={`relative w-full py-10 p-16 ${styles.valeurs}`}>
      {/* Titre des valeurs */}
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 20 }} // Arrive du haut
        animate={controls1}>
        <h2>Nos valeurs</h2>
      </motion.div>

      {/* Conteneur des valeurs */}
      <div className={`${styles.valeursContainer}`}>
        
        {/* Première colonne de valeurs */}
        <div className={`${styles.valeursElt}`}>
          {/* Service client */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: -20 }} // Arrive de la gauche
            animate={controls2}>
            <div className={`${styles.valeur}`}>
              <Image
                className={` ${styles.valeurtImg}`}
                src="/img/valeurs/service-client.png"
                alt="Service Client"
                width={100}
                height={100}
              />
              <h3>Service client</h3>
              <p>Votre satisfaction étant notre priorité, que vous ayez une <span>question</span>, une <span>demande spécifique</span> ou un <span>besoin d&rsquo;assistance</span>, nous vous apporterons une réponse dans les <span>meilleurs délais.</span></p>
            </div>
          </motion.div>

          {/* Sécurité */}
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 20 }}
            animate={controls3}>
            <div className={`${styles.valeur}`}>
              <Image
                className={` ${styles.valeurtImg}`}
                src="/img/valeurs/securite.png"
                alt="Sécurité"
                width={60}
                height={60}
              />
              <h3>Sécurité</h3>
              <p>Nous mettons un point d&rsquo;honneur à respecter les <span>normes de sécurité les plus strictes</span>. Pour respecter la législation française, tous nos techniciens sont formés et diplômés en tant que <span>« Responsable sécurité laser »</span>. De l&rsquo;installation au démontage, nos installations lasers respectent les normes de sécurité en vigueur, afin de garantir la sécurité de tous, en toutes circonstances.</p>
            </div>
          </motion.div>
        </div>

        {/* Deuxième colonne de valeurs */}
        <div className={`${styles.valeursElt}`}>
          {/* Environnement */}
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: -20 }} // Arrive de la droite
            animate={controls4}>
            <div className={`${styles.valeur}`}>
              <Image
                className={` ${styles.valeurtImg}`}
                src="/img/valeurs/environnement.png"
                alt="Environnement"
                width={100}
                height={100}
              />
              <h3>Environnement</h3>
              <p>Nous utilisons des lasers à <span>basse consommation énergétique</span> pour réduire notre bilan carbone. De plus, ils n&rsquo;engendrent <span>aucun déchet</span>. Nos spectacles sont conçus pour offrir une expérience visuelle spectaculaire en utilisant une <span>technologie respectueuse de la planète</span>, minimisant ainsi l&rsquo;empreinte écologique des événements.</p>
            </div>
          </motion.div>

          {/* Qualité */}
          <motion.div
            ref={ref5}
            initial={{ opacity: 0, x: 20 }}
            animate={controls5}>
            <div className={`${styles.valeur}`}>
              <Image
                className={` ${styles.valeurtImg}`}
                src="/img/valeurs/qualite.png"
                alt="Qualité"
                width={100}
                height={100}
              />
              <h3>Qualité</h3>
              <p>Nous nous engageons à offrir des spectacles lasers de la <span>plus haute qualité</span>. Pour cela, nous travaillons avec des lasers de marque allemande, équipés de <span>diodes lasers OPSL</span>, de la marque américaine COHERENT, ce qui induit une qualité de faisceau nettement supérieure. Nos lasers sont dotés de <span>scanners à très haute vitesse Cambridge Technology de 60 kpps</span> qui garantissent une rapidité d&rsquo;exécution exceptionnelle, idéale pour les applications les plus exigeantes.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}