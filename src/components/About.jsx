import { meta } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import styles from "./About.module.css";

const infoCards = [
  {
    label: "Education",
    value: "B.Tech · Electronics & Communication Engineering",
    sub: `SRMIST Chennai · Expected 2028 · CGPA ${meta.cgpa}`,
  },
  {
    label: "Based in",
    value: meta.location,
    sub: meta.openTo,
  },
  {
    label: "Currently building",
    value: "Android apps · AI-powered tools",
    sub: "Python, Kotlin, Figma, FastAPI",
  },
  {
    label: "Contact",
    value: meta.email,
    sub: meta.phone,
  },
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className={`section ${styles.section}`} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left — text */}
          <div className={styles.textCol}>
            <h2 className="section-title reveal">
              Builder. Leader.<br />AI-Native Dev.
            </h2>
            <div className="divider reveal" />
            <p className={`${styles.para} reveal`}>
              Sanat Kumar Dhawan is a B.Tech student in Electronics and
              Communication Engineering at SRM Institute of Science and
              Technology (CGPA: 9.3), with a strong focus on building AI-driven,
              real-world products that solve practical problems at scale. His
              work sits at the intersection of product strategy, software
              development, and embedded systems, allowing him to design and
              deliver complete solutions from concept to execution.
            </p>
            <p className={`${styles.para} reveal`}>
              He has led and developed projects such as EarnSafe, a parametric
              micro-insurance platform for gig workers, where he defined the
              product vision, user flows, and AI-driven pricing logic, and
              Jambites, an AI-powered food delivery application built using
              modern AI-assisted development tools. His technical stack spans
              Python, FastAPI, Android (Kotlin), and machine learning
              frameworks, complemented by hands-on experience in UI/UX design
              using Figma, where he has created multiple end-to-end product
              prototypes.
            </p>
            <p className={`${styles.para} reveal`}>
              Sanat also brings strong experience in AI-accelerated development
              workflows, leveraging tools like Claude, Cursor, and Replit AI to
              rapidly build, iterate, and ship production-ready systems. In
              parallel, his work in embedded systems—including ESP32 and
              LoRa-based communication systems—demonstrates his ability to
              operate across both software and hardware domains.
            </p>
            <p className={`${styles.para} reveal`}>
              Beyond technical skills, he has proven leadership capabilities as
              Associate Head of SRM’s placement team, managing large teams and
              coordinating high-stakes operations with corporate stakeholders.
              His approach combines structured thinking, execution speed, and a
              strong emphasis on documentation and product clarity, enabling him
              to consistently deliver scalable and impactful solutions.
            </p>
            <p className={`${styles.para} reveal`}>
              He is particularly interested in building systems that integrate
              AI, real-time data, and human-centric design to solve problems in
              emerging domains such as fintech, insurtech, and smart
              infrastructure.
            </p>
            <div className={`${styles.badges} reveal`}>
              <span className={styles.badge}>
                <span className={styles.badgeDot} />
                Open to Internships
              </span>
              <span className={styles.badge}>
                <span className={styles.badgeDot2} />
                AI-Native Workflow
              </span>
              <span className={styles.badge}>
                <span className={styles.badgeDot} />
                Remote / On-site
              </span>
            </div>
          </div>

          {/* Right — info cards */}
          <div className={styles.cardsCol}>
            {infoCards.map((c, i) => (
              <div
                key={c.label}
                className={`${styles.infoCard} reveal`}
                style={{ transitionDelay: `${i * 0.09}s` }}
              >
                <span className={styles.infoLabel}>{c.label}</span>
                <span className={styles.infoValue}>{c.value}</span>
                <span className={styles.infoSub}>{c.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
