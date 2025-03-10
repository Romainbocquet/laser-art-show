"use client";

import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './PartenaireSlider.module.css';

type ImageType = {
  src: string;
  alt: string;
};

interface CarouselProps {
  images: ImageType[];
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

export default function PartenaireSlider({ images }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ],
  };

  return (
    <div className={`mt-10`}>
      <div className={styles.sliderTitle}>
        ILS NOUS FONT CONFIANCE
      </div>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1200} // ajuste la largeur pour s'adapter
                height={600} // ajuste la hauteur en conséquence
                className={styles.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}