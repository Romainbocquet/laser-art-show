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

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${styles.next} ${className} slick-arrow`}
      onClick={onClick}
    >
  <svg width="14" height="32" viewBox="0 0 14 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.98614 32L0.725637 31.071L12.6315 14.7648L13.8921 15.6938L1.98614 32Z" fill="white"/>
  <path d="M2.94107e-07 0.998214L1.20694 8.30215e-08L14 15.6133L12.7931 16.6115L2.94107e-07 0.998214Z" fill="white"/>
  </svg>
  </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${styles.prev} ${className} slick-arrow`}
      onClick={onClick}
    >
  <svg width="14" height="32" viewBox="0 0 14 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.0139 0L13.2744 0.928991L1.36845 17.2352L0.107951 16.3062L12.0139 0Z" fill="white"/>
  <path d="M14 31.0018L12.7931 32L0 16.3867L1.20694 15.3885L14 31.0018Z" fill="white"/>
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
    <div className={`${styles.slider} mt-10`}>
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