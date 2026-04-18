import { experience, certifications } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import styles from "./Experience.module.css";

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <div className={styles.twoCol}>
          {/* Left: Experience */}
          <div>
            <h2 className="section-title reveal">Positions &amp; Activity</h2>
            <div className={styles.expList}>
              {experience.map((e, i) => (
                <div
                  key={e.role}
                  className={`${styles.expCard} reveal`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={styles.expIcon}>{e.emoji}</div>
                  <div>
                    <div className={styles.expRole}>{e.role}</div>
                    <div className={styles.expOrg}>{e.org}</div>
                    <div className={styles.expDate}>{e.date}</div>
                    <p className={styles.expDesc}>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications */}
          <div>
            <h2 className="section-title reveal">Credentials</h2>
            <div className={styles.certList}>
              {certifications.map((c, i) => (
                <div
                  key={c.name}
                  className={`${styles.certCard} reveal`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className={styles.certIcon}>{c.icon}</div>
                  <div>
                    <div className={styles.certName}>{c.name}</div>
                    <div className={styles.certIssuer}>{c.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
