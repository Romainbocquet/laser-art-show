"use client";

import { useRef } from "react";
import styles from "./Video.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const controls1 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  if (inView1) controls1.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });

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
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 20 }}
        animate={controls1}>
        <h1 className={`absolute ${styles.videoTitle} px-10 `}>
          L’EXCELLENCE DU LASER
        </h1>
      </motion.div>
    </div>
  );
}