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
    <div className="relative w-full px-10">
          <button
            onClick={toggleSound}
            className="absolute top-2 left-2 z-10 bg-gray-700 text-white p-2"
          >
            {muted ? "Activer le son" : "Désactiver le son"}
          </button>

          <video
            ref={videoRef}
            className="w-full h-auto"
            muted
            autoPlay
            loop
            preload="auto"
          >
            <source src="/video/video-header.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          <h1 className={`absolute ${styles.videoTitle}`}>L’EXCELLENCE DU LASER</h1>
        </div>
  );
}