"use client";

import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ImageSlider.module.css';

type ImageType = {
  src: string;
  alt: string;
  title: string;
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
        <path d="M3.97228 63L1.45128 61.171L25.2631 29.0683L27.7841 30.8972L3.97228 63Z" fill="white" />
        <path d="M5.92144e-06 1.96523L2.41388 -2.27894e-06L28 30.7386L25.5861 32.7038L5.92144e-06 1.96523Z" fill="white" />
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
        <path d="M24.0277 0L26.5487 1.82895L2.7369 33.9317L0.215902 32.1028L24.0277 0Z" fill="white" />
        <path d="M28 61.0348L25.5861 63L0 32.2614L2.41387 30.2962L28 61.0348Z" fill="white" />
      </svg>
    </div>
  );
}

export default function ImageSlider({ images, iconUrl, title, subTitle}: CarouselProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "5%",
    adaptiveHeight: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className={`${styles.slider} mt-10`}>
      <div className={styles.sliderTitle}>
        <div>
          {iconUrl && <img src={iconUrl} alt="Icon"/>}
        </div>
        <div>
          <h1>
          {title}
          </h1>
          <p>{subTitle}</p>
        </div>
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
              <h3 className={styles.imageTitle}>{image.title}</h3> {/* Ajout du titre sous chaque image */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}