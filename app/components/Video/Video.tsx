"use client";

import { useRef } from "react";
import styles from "./Video.module.css";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={`relative w-full ${styles.videoContainer}`}>
      <video
        ref={videoRef}
        className="w-full h-full"
        muted
        autoPlay
        loop
        preload="auto"
      >
        <source src="/video/video-header.mp4" type="video/mp4" />
        <img src="/video/video-header-caption.png" alt="Fallback image if video fails" />
        Your browser does not support the video tag.
      </video>

      <h1 className={`absolute ${styles.videoTitle} px-10 `}>
        L’EXCELLENCE DU LASER
      </h1>
    </div>
  );
}