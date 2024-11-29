
import Video from "./components/Video/Video";
import InfiniteSlider from "./components/InfiniteSlider/InfiniteSlider";
import Accordion from "./components/Accordion/Accordion";
import Valeurs from "./components/Valeurs/Valeurs";
import Chateau from "./components/Chateau/Chateau";
import Intro from "./components/Intro/Intro";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import PartenaireSlider from "./components/PartenaireSlider/PartenaireSlider";
import AuditSecu from "./components/AuditSecu/AuditSecu";
import Contact from "./components/Contact/Contact";
import Image from 'next/image';
import MouseLaserEffect from './components/MouseLaserEffect/MouseLaserEffect';

export default function Home() {

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="relative flex flex-col row-start-2 sm:items-start">
        <Video />
        <Intro />
        <Chateau/>
        <section id="histoire" className="w-full">
          <Accordion />
        </section>
        <a className="my-10" href="#contact">
        <InfiniteSlider />
        </a>
        <section id="valeurs" className="w-full">
          <Valeurs />
        </section>
        <h1 className="global-title">TRANSFORMEZ VOS ÉVÉNEMENTS
        EN EXPÉRIENCES INOUBLIABLES</h1>
        <section id="volumetrique">
          <ImageSlider
            iconUrl="/img/home/show-volumetrique.svg"
            title="SHOW VOLUMÉTRIQUE"
            subTitle="Vivez une expérience immersive où la lumière et la technologie fusionnent pour créer des spectacles éblouissants en trois dimensions."
            images={[
              { src: '/img/volumetrie/david.jpg', alt: 'Image 1', title: 'Concert de David Guetta', place: "Paris"},
              { src: '/img/volumetrie/test.jpg', alt: 'Image 1', title: 'Soirée privée', place: "Toulouse"},
              { src: '/img/volumetrie/volumetrie-6.jpg', alt: 'Image 5', title: 'Les Grandes Eaux Nocturnes Electro', place: "Château de Versailles"},
              { src: '/img/volumetrie/volumetrie-8.png', alt: 'Image 6', title: 'Concert de M.Pokora', place: "Bruxelles"},
              { src: '/img/volumetrie/volumetrie-9.jpg', alt: 'Image 7', title: '200e anniversaire de la Caisse d\'Épargne', place: "Paris"},
            ]}
          />
        </section>
        <section id="mapping-laser">
          <ImageSlider
            iconUrl="/img/home/mapping-laser.svg"
            title="MAPPING LASER"
            subTitle="Transformez vos espaces en véritables œuvres d’art, où chaque surface devient un spectacle lumineux."
            images={[
              { src: '/img/mapping-2.jpg', alt: 'Château de Versailles', title: 'Bosquet de la Colonnade', place: "Château de Versailles"},
              { src: '/img/mapping-1.jpg', alt: 'Château de Versailles', title: 'Bosquet de la Colonnade', place: "Château de Versailles"},
              { src: '/img/mapping-3.jpg', alt: 'Tour eiffel', title: '130e anniversaire de la Tour Eiffel', place: "Paris"},
              { src: '/img/mapping-1.jpg', alt: 'Château de Versailles', title: 'Bosquet de la Colonnade', place: "Château de Versailles"},
            ]}
          />
        </section>
        <section id="projection-laser">
          <ImageSlider
            iconUrl="/img/home/projection-laser.svg"
            title="PROJECTION LASER"
            subTitle="Mettez en avant votre identité de manière percutante en projetant votre logo, des animations ou textes personnalisés"
            images={[
              { src: '/img/projection/projection-5.jpg', alt: 'Image 1', title: 'Tournoi de futsal', place: "Dijon"},
              { src: '/img/projection/projection-3.jpg', alt: 'Image 4', title: 'Finale de la Coupe de la Ligue de Football', place: "Bordeaux"},
              { src: '/img/projection/projection-4.jpg', alt: 'Image 5', title: 'Tournoi de futsal', place: "Dijon"},
              { src: '/img/projection/projection-6.jpg', alt: 'Image 6', title: 'Tournoi de futsal', place: "Dijon"},
            ]}
          />
        </section>
        <section id="security-audit">
          <AuditSecu />
        </section>
        <a className="my-10" href="#contact">
          <InfiniteSlider />
        </a>
        <section id="partenaire" className=" hidden">
          <PartenaireSlider
            images={[
              { src: '/img/partenaires/caisse-epargne.png', alt: 'caisse d\'epargne logo' },
              { src: '/img/partenaires/chateau-de-versaille.png', alt: 'Chateau de versaille logo' },
              { src: '/img/partenaires/vetements.png', alt: 'logo Vetements' },
              { src: '/img/partenaires/novelty.png', alt: 'Novety Logo' },
              { src: '/img/partenaires/thevoice.png', alt: 'The voice logo' },
              { src: '/img/partenaires/mawazine.png', alt: 'Mawazine logo' },
              { src: '/img/partenaires/vieille-charrues.png', alt: 'Vieille charrues logo' },
            ]}
          />
        </section>
        <div className="relative w-full h-[90vh] my-10">
          <Image
            className="object-cover"
            src="/img/photo-laser.jpg"
            alt="Bosquet de la Colonnade - Château de Versailles"
            layout="fill"
          />
        </div>
        <section id="contact">
          <Contact />
        </section>
        <MouseLaserEffect></MouseLaserEffect>

      </main>
    </div>
  );
}