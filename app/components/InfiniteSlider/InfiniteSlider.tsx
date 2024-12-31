import React from 'react';
import styles from "./InfiniteSlider.module.css";

const InfiniteSlider = () => {
  return (
    <div className={`relative flex overflow-x-hidden w-full font-bold bg-white text-black ${styles.infiniteSlider}`}>
      <div className="py-2 animate-marquee whitespace-nowrap">
        <span className="mx-3">UN PROJET ?</span>
        <span className="mx-3">UNE INAUGURATION ?</span>
        <span className="mx-3">UN LANCEMENT DE PRODUIT ?</span>
        <span className="mx-3">UN FESTIVAL ?</span>
        <span className="mx-3">UNE CÉRÉMONIE ?</span>
        <span className="mx-3">UN ÉVÉNEMENT SPORTIF ?</span>
        <span className="mx-3">UN CONCERT ?</span>
        <span className="mx-3">UN PROJET ?</span>
        <span className="mx-3">UNE INAUGURATION ?</span>
        <span className="mx-3">UN LANCEMENT DE PRODUIT ?</span>
        <span className="mx-3">UN FESTIVAL ?</span>
        <span className="mx-3">UNE CÉRÉMONIE ?</span>
        <span className="mx-3">UN ÉVÉNEMENT SPORTIF ?</span>
        <span className="mx-3">UN CONCERT ?</span>
      </div>
      <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap font-bold">
      <span className="mx-3">UN PROJET ?</span>
        <span className="mx-3">UNE INAUGURATION ?</span>
        <span className="mx-3">UN LANCEMENT DE PRODUIT ?</span>
        <span className="mx-3">UN FESTIVAL ?</span>
        <span className="mx-3">UNE CÉRÉMONIE ?</span>
        <span className="mx-3">UN ÉVÉNEMENT SPORTIF ?</span>
        <span className="mx-3">UN CONCERT ?</span>
        <span className="mx-3">UN PROJET ?</span>
        <span className="mx-3">UNE INAUGURATION ?</span>
        <span className="mx-3">UN LANCEMENT DE PRODUIT ?</span>
        <span className="mx-3">UN FESTIVAL ?</span>
        <span className="mx-3">UNE CÉRÉMONIE ?</span>
        <span className="mx-3">UN ÉVÉNEMENT SPORTIF ?</span>
        <span className="mx-3">UN CONCERT ?</span>
      </div>
    </div>
  );
};

export default InfiniteSlider;