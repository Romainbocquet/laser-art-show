"use client";

import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ImageSlider.module.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type ImageType = {
  src: string;
  alt: string;
  title: string;
  place: string;
};

interface CarouselProps {
  images: ImageType[];
  iconUrl?: string;
  title?: string;
  subTitle?: string;
}

// Typage des flèches manuellement
interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

function NextArrow({ className, onClick }: ArrowProps) {
  return (
    <div
      className={`${styles.next} ${className} slick-arrow`}
      onClick={onClick}
    >
<svg width="28" height="63" viewBox="0 0 28 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.81899 54L5 52.7064L22.181 30L24 31.2936L6.81899 54Z" fill="white"/>
<path d="M4 10.3821L5.72422 9L24 30.6179L22.2758 32L4 10.3821Z" fill="white"/>
</svg>

    </div>
  );
}

function PrevArrow({ className, onClick }: ArrowProps) {
  return (
    <div
      className={`${styles.prev} ${className} slick-arrow`}
      onClick={onClick}
    >
     <svg width="28" height="63" viewBox="0 0 28 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.181 9L23 10.2936L5.81898 33L4 31.7064L21.181 9Z" fill="white"/>
      <path d="M24 52.6179L22.2758 54L4 32.3821L5.72419 31L24 52.6179Z" fill="white"/>
      </svg>
    </div>
  );
}

export default function ImageSlider({ images, iconUrl, title, subTitle}: CarouselProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    centerMode: false,
    centerPadding: "5%",
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ],
  };

  const controls1 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  if (inView1) controls1.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });

  const controls2 = useAnimation();
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  if (inView2) controls2.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2} });

  const controls3 = useAnimation();
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  if (inView3) controls3.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4} });

  return (
    <div className="pt-10">
      <div className={styles.sliderTitle}>
        <div>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 20 }}
          animate={controls1}>
          <h1>
            {title}
            <div>
            {iconUrl && <img src={iconUrl} alt="Icon"/>}
            </div>
          </h1>
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 20 }}
            animate={controls2}>
            <p>{subTitle}</p>
          </motion.div>
        </div>
      </div>
      <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 200 }}
          animate={controls3}>
          <div className={styles.sliderContainer}>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className={styles.slide} aria-hidden="true">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200} // ajuste la largeur pour s'adapter
                      height={600} // ajuste la hauteur en conséquence
                      className={styles.image}
                    />
                    <h3 className={styles.imageTitle} dangerouslySetInnerHTML={{ __html: image.title }}></h3> {/* Ajout du titre sous chaque image */}
                    <span className={styles.imagePlace}>{image.place}</span> {/* Ajout du titre sous chaque image */}
                    
                  </div>
                ))}
              </Slider>
          </div>
        </motion.div>
    </div>
  );
}