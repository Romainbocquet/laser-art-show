import styles from "./Valeurs.module.css";
import Image from 'next/image';

export default function Valeurs() {

  return (
    <div className={`relative w-full py-10 p-16 ${styles.valeurs}`}>
      <h2>NOS VALEURS</h2>
      <div className={`${styles.valeursContainer}`}>
        <div className={`${styles.valeursElt}`}>
          <div className={`${styles.valeur} relative`}>
            <Image
              className={` ${styles.valeurtImg} absolute`}
              src="/img/valeurs/service-client.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <h3>SERVICE CLIENT</h3>
            <p>Votre satisfaction étant notre priorité, que vous ayez une <span>question</span>, une <span>demande spécifique</span> ou un <span>besoin d&rsquo;assistance</span>, nous vous apporterons une réponse dans les <span>meilleurs délais.</span></p>
          </div>
          <div className={`${styles.valeur} relative`}>
            <Image
              className={` ${styles.valeurtImg} absolute`}
              src="/img/valeurs/securite.png"
              alt="Picture of the author"
              width={60}
              height={60}
            />
            <h3>SÉCURITÉ</h3>
            <p>Nous mettons un point d&rsquo;honneur à respecter les <span>normes de sécurité les plus strictes</span>. Pour respecter la législation française, tous nos techniciens sont formés et diplômés en tant que <span>« Responsable sécurité laser »</span>. De l&rsquo;installation au démontage, nos installations lasers respectent les normes de sécurité en vigueur, afin de garantir la sécurité de tous, en toutes circonstances.</p>
          </div>
        </div>
        <div className={`${styles.valeursElt}`}>
        <div className={`${styles.valeur} relative`}>
            <Image
              className={` ${styles.valeurtImg} absolute`}
              src="/img/valeurs/environnement.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <h3>ENVIRONNEMENT</h3>
            <p>Nous utilisons des lasers à <span>basse consommation énergétique</span> pour réduire notre bilan carbone. De plus, ils n&rsquo;engendrent <span>aucun déchet</span>. Nos spectacles sont conçus pour offrir une expérience visuelle spectaculaire en utilisant une <span>technologie respectueuse de la planète</span>, minimisant ainsi l&rsquo;empreinte écologique des événements.</p>
          </div>
          <div className={`${styles.valeur} relative`}>
            <Image
              className={` ${styles.valeurtImg} absolute`}
              src="/img/valeurs/qualite.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <h3>QUALITÉ</h3>
            <p>Nous nous engageons à offrir des spectacles lasers de la <span>plus haute qualité</span>. Pour cela, nous travaillons avec des lasers de marque allemande, équipés de <span>diodes lasers OPSL</span>, de la marque américaine COHERENT, ce qui induit une qualité de faisceau nettement supérieure. Nos lasers sont dotés de <span>scanners à très haute vitesse Cambridge Technology de 60 kpps</span> qui garantissent une rapidité d&rsquo;exécution exceptionnelle, idéale pour les applications les plus exigeantes.</p>
          </div>
        </div>
      </div>

    </div>
  );
}