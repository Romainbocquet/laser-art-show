import React from 'react';
import styles from "./InfiniteSlider.module.css";

const InfiniteSlider = () => {
  return (
    <div className={`relative mt-14 flex overflow-x-hidden w-full bg-white text-black ${styles.infiniteSlider}`}>
      <div className="py-2 animate-marquee whitespace-nowrap">
        <span className="text-4xl mx-4">UN PROJET ?</span>
        <span className="text-4xl mx-4">UN PROJET ?</span>
        <span className="text-4xl mx-4">UN PROJET ?</span>
        <span className="text-4xl mx-4">UN PROJET ?</span>
        <span className="text-4xl mx-4">UN PROJET ?</span>
        <span className="text-4xl mx-4">UN PROJET ?</span>
        <span className="text-4xl mx-4">UN PROJET ?</span>
      </div>
      <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
        <span className="text-4xl mx-4">UN PROJET ?</span>
        <span className="text-4xl mx-4">UN PROJET ?</span>
        <span className="text-4xl mx-4">UN PROJET ?</span>
        <span className="text-4xl mx-4">UN PROJET ?</span>
        <span className="text-4xl mx-4">UN PROJET ?</span>
        <span className="text-4xl mx-4">UN PROJET ?</span>
        <span className="text-4xl mx-4">UN PROJET ?</span>
      </div>
    </div>
  );
};

export default InfiniteSlider;