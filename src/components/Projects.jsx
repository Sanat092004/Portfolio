import { projects } from "../data/content";
import styles from "./Projects.module.css";

const projectConfigs = {
  jambites: { bg: "#FF6B00", device: "phone" },
  earnsafe: { bg: "#0C162D", device: "phone" },
  "semantic-search": { bg: "#E0E7FF", device: "browser" },
  "esp32-lora": { bg: "#0D9488", device: "browser" },
  "stray-coffee": { bg: "#451A03", device: "phone" },
  "dragon-habit": { bg: "#064E3B", device: "phone" },
};

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.sectionTitle}>Selected Work</h2>
        
        <div className={styles.list}>
          {projects.map((p) => {
            const config = projectConfigs[p.id] || { bg: "#F0F0F0", device: "browser" };
            return (
              <div key={p.id} className={styles.card}>
                <div 
                  className={styles.imageBox} 
                  style={{ backgroundColor: config.bg }}
                >
                  <div className={`${styles.deviceFrame} ${styles[config.device]}`}>
                    <img src={p.image || `/projects/${p.id}.png`} alt={p.name} className={styles.image} />
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{p.stack[0]}</span>
                    <span className={styles.sep}>—</span>
                    <span className={styles.year}>2024</span>
                  </div>
                  <h3 className={styles.projectName}>{p.name}</h3>
                  <p className={styles.projectDesc}>{p.desc}</p>
                  <div className={styles.actions}>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className={styles.caseStudyLink}>
                        View Case Study <span className={styles.arrowIcon}>→</span>
                      </a>
                    )}
                    {p.github && (
                       <a href={p.github} target="_blank" rel="noreferrer" className={styles.caseStudyLink}>
                       GitHub <span className={styles.arrowIcon}>↗</span>
                     </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
