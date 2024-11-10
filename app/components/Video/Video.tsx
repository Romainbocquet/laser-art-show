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
      console.log('patate');
      
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
          <path d="M20.4182 20.2272H14.3091V28.8182H20.4182L27.7682 35.1182V13.9272L20.4182 20.2272Z" fill="white"/>
          <path d="M46 25C46 36.598 36.598 46 25 46C13.402 46 4 36.598 4 25C4 13.402 13.402 4 25 4C36.598 4 46 13.402 46 25Z" stroke="white" stroke-width="4"/>
          </svg>
        ) : (
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4 28.9L28 17.4V13.3L20.2 19.9H13.8V28.9H16.4Z" fill="white"/>
          <path d="M28 26.9L23.3 31.5L28 35.6V26.9Z" fill="white"/>
          <path d="M13.8 34.9L15.5 36.7L36.3 15.3L34.6 13.5L13.8 34.9Z" fill="white"/>
          <path d="M46 25C46 36.598 36.598 46 25 46C13.402 46 4 36.598 4 25C4 13.402 13.402 4 25 4C36.598 4 46 13.402 46 25Z" stroke="white" stroke-width="4"/>
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