import { skills } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import styles from "./Skills.module.css";

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <h2 className="section-title reveal">What I Work With</h2>
        <p className="section-sub reveal">
          Tools and technologies across mobile, AI, embedded systems, and design.
        </p>
        <div className={styles.grid}>
          {skills.map((s, i) => (
            <div
              key={s.title}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <span className={styles.icon}>{s.icon}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <div className={styles.tags}>
                {s.items.map((item) => (
                  <span key={item} className={`tag ${s.variant}`}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
