import { meta } from "../data/content";
import styles from "./Footer.module.css";

const RESUME_LINK = "https://acrobat.adobe.com/id/urn:aaid:sc:AP:3004ba6d-2cf6-46c5-8033-b981922ab67a";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.connectBlock}>
          <h2 className={styles.title}>Let's Connect!</h2>
          <p className={styles.sub}>
            I'm currently looking for internships and collaborative projects in AI, 
            Android, and product development.
          </p>
          
          <div className={styles.buttonRow}>
            <a href={`mailto:${meta.email}`} className={styles.pillBtn}>Email Me</a>
            <a href={RESUME_LINK} target="_blank" rel="noreferrer" className={styles.pillBtnOutline}>View Resume</a>
          </div>
        </div>

        <div className={styles.socialGrid}>
          <a href={meta.github} target="_blank" rel="noreferrer" className={styles.socialLink}>GitHub</a>
          <a href={meta.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn</a>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copy}>© 2025 Sanat Kumar Dhawan</div>
          <div className={styles.links}>
            <a href="#hero">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
