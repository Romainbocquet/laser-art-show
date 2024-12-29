import React from 'react';
import styles from "./InfiniteSlider.module.css";

const InfiniteSlider = () => {
  return (
    <div className={`relative flex overflow-x-hidden w-full bg-white text-black ${styles.infiniteSlider}`}>
      <div className="py-2 animate-marquee whitespace-nowrap">
        <span className="mx-3">UN PROJET ?</span>
        <span className="mx-3">UNE INAUGURATION ?</span>
        <span className="mx-3">UN EVENEMENT SPORTIF ?</span>
        <span className="mx-3">UN PROJET ?</span>
        <span className="mx-3">UNE INAUGURATION ?</span>
        <span className="mx-3">UN EVENEMENT SPORTIF ?</span>
        <span className="mx-3">UN PROJET ?</span>
        <span className="mx-3">UNE INAUGURATION ?</span>
        <span className="mx-3">UN EVENEMENT SPORTIF ?</span>
      </div>
      <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
        <span className="mx-3">UN PROJET ?</span>
        <span className="mx-3">UNE INAUGURATION ?</span>
        <span className="mx-3">UN EVENEMENT SPORTIF ?</span>
        <span className="mx-3">UN PROJET ?</span>
        <span className="mx-3">UNE INAUGURATION ?</span>
        <span className="mx-3">UN EVENEMENT SPORTIF ?</span>
        <span className="mx-3">UN PROJET ?</span>
        <span className="mx-3">UNE INAUGURATION ?</span>
        <span className="mx-3">UN EVENEMENT SPORTIF ?</span>
      </div>
    </div>
  );
};

export default InfiniteSlider;