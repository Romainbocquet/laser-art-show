"use client";

import { useEffect, useState } from "react";
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
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { createClient } from "contentful";

interface PictoSlider {
  fields: {
    file: {
      url: string;
    };
  };
}

interface ImageData {
  src: string;
  alt: string;
  title: string;
  place: string;
  colorSpace?: string;
  data?: string;
  height?: number;
  width?: number;
}

interface ImageFile {
  file: {
    url: string;
  };
}

interface ImageFields {
  fields: {
    image: {
      fields: ImageFile;
    };
    alt?: string;
    title?: string;
    place?: string;
  };
}

interface SliderFields {
  sliderId: string | number;
  nomDuSlider?: string;
  subTitle?: string;
  pictoSlider?: PictoSlider;
  images?: ImageFields[];
}

interface SliderData {
  id: string;
  title: string;
  subTitle: string;
  iconUrl: string;
  images: ImageData[];
}

const client = createClient({
  space: "hfnntuvhdevi",
  accessToken: "e6yLmttsyvcZ5u_UB4hY-GFYLDEaq7VCO7QK8gOaKd8",
});

export default function Home() {
  // Animations pour la première valeur (Haut)
  const controls1 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  if (inView1) controls1.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } });
  
  const [slidersData, setSlidersData] = useState<SliderData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({ content_type: "imageSlider" });
    
        if (response.items.length > 0) {
          const formattedData = response.items.map((item) => {
            const data = item.fields as unknown as SliderFields;
    
            return {
              id: String(data.sliderId),
              title: String(data.nomDuSlider || "Titre par défaut"),
              subTitle: String(data.subTitle || "Sous-titre par défaut"),
              iconUrl: data.pictoSlider?.fields?.file?.url
                ? `https:${data.pictoSlider.fields.file.url}`
                : "/default-icon.png",
              images: Array.isArray(data.images)
                ? data.images.map((img: ImageFields) => ({
                  src: img.fields.image.fields.file.url
                    ? `https:${img.fields.image.fields.file.url}`
                    : "/default-image.png",
                    alt: String(img.fields.alt || "Image sans description"),
                    title: String(img.fields.title || "Sans titre"),
                    place: String(img.fields.place || "Lieu inconnu"),
                    colorSpace: "srgb",
                    data: String(''),
                    height: 0,
                    width: 0,
                  }))
                : [],
            };
          });
    
          setSlidersData(formattedData);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-100">
      <main className="relative flex flex-col row-start-2 sm:items-start">
        <Video />
        <Intro />
        <Chateau />
        <section id="histoire" className="w-full">
          <Accordion />
        </section>
        <a className="my-10" href="#contact">
          <InfiniteSlider />
        </a>
        <section id="valeurs" className="w-full">
          <Valeurs />
        </section>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={controls1}>
          <h1 className="global-title">TRANSFORMEZ <br /> VOS ÉVÉNEMENTS EN EXPÉRIENCES INOUBLIABLES</h1>
        </motion.div>
        <div id="realisations">
          {slidersData.length > 0 ? (
            slidersData.map((slider, index) => (
              <section key={`carousel-${index}`} id={slider.id}>
                <ImageSlider
                  key={index}
                  title={slider.title}
                  subTitle={slider.subTitle}
                  iconUrl={slider.iconUrl}
                  images={slider.images}
                />
                </section>
            ))
          ) : (
            <p>Chargement...</p>
          )}
        </div>
        <section id="security-audit">
          <AuditSecu />
        </section>
        <a className="my-10 mb-20" href="#contact">
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
        <div className="relative w-full h-[90vh]">
          <Image
            className="object-cover"
            src="/img/photo-laser.jpg"
            alt="Les Grandes Eaux Nocturnes - Château de Versailles"
            layout="fill"
          />
        </div>
        <section className="w-full" id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}