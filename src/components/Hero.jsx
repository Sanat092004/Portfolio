import { useEffect, useState, useRef } from "react";
import styles from "./Hero.module.css";

const FULL_TEXT = "a B.Tech student in Electronics and Communication Engineering at SRMIST.";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(FULL_TEXT.slice(0, index));
      index++;
      if (index > FULL_TEXT.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, 45); // Adjust typing speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.name}>
          Hi, I am Sanat{" "}
          <span className={styles.portraitWrapper}>
            <img 
              src="/sanat-portrait.jpg" 
              alt="Sanat Kumar Dhawan" 
              className={styles.portrait} 
            />
          </span>{" "}
          — {typedText}
          <span className={`${styles.cursor} ${isDone ? styles.cursorDone : ""}`}>|</span>
        </h1>
        
        <p className={`${styles.desc} ${isDone ? styles.visible : ""}`}>
          I build AI-driven products and mobile applications that bridge the gap 
          between engineering and user experience. Currently focused on 
          product strategy and Android development.
        </p>
        
        <div className={`${styles.ctas} ${isDone ? styles.visible : ""}`}>
          <a href="#projects" className={styles.btnPrimary}>View Work</a>
          <a href="#contact" className={styles.btnSecondary}>Get in Touch</a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <a href="#projects" className={styles.arrowBox}>
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={styles.arrow}
          >
            <path d="M7 13L12 18L17 13M7 6L12 11L17 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
