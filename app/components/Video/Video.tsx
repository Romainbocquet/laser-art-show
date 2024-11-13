"use client";

import { useRef, useState } from "react";
import styles from "./Video.module.css";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className={`relative w-full px-10 ${styles.videoContainer}`}>
      <button
        onClick={toggleSound}
        className={`absolute top-2 bg-gray-700 text-white p-2 z-50 ${styles.buttonSound}`}
      >
        {muted ? (
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.08 28L27.36 19.1539V16L21.12 21.0769H16V28H18.08Z" fill="white"/>
          <path d="M27.36 26.4614L23.6 29.9999L27.36 33.1538V26.4614Z" fill="white"/>
          <path d="M16 32.6154L17.36 34L34 17.5384L32.64 16.1538L16 32.6154Z" fill="white"/>
          <path d="M46 25C46 36.598 36.598 46 25 46C13.402 46 4 36.598 4 25C4 13.402 13.402 4 25 4C36.598 4 46 13.402 46 25Z" stroke="white" strokeWidth="2"/>
          </svg>
        ) : (
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46 25C46 36.598 36.598 46 25 46C13.402 46 4 36.598 4 25C4 13.402 13.402 4 25 4C36.598 4 46 13.402 46 25Z" stroke="white" strokeWidth="2"/>
          <path d="M21.2199 20.6486H16V28.3514H21.2199L27.5 34V15L21.2199 20.6486Z" fill="white"/>
          </svg>
        )}
      </button>

      <video
        ref={videoRef}
        className="w-full h-full"
        muted={muted}
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