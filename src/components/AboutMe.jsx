import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="about-me" className={styles.about}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.textCol}>
            <h2 className={styles.title}>A bit about me</h2>
            <div className={styles.bio}>
              <p className={styles.para}>
                I'm a B.Tech student in Electronics and Communication Engineering at 
                <strong> SRM Institute of Science and Technology</strong> with a strong focus 
                on building AI-driven, real-world products that solve practical problems at scale. 
                My work sits at the intersection of product strategy, software development, 
                and embedded systems.
              </p>
              <p className={styles.para}>
                I have led and developed projects such as <strong>EarnSafe</strong>, 
                a parametric micro-insurance platform, and <strong>Jambites</strong>, 
                an AI-powered food delivery application built using modern AI-assisted 
                development tools. My technical stack spans Python, FastAPI, Kotlin, and 
                machine learning frameworks.
              </p>
              <p className={styles.para}>
                Beyond coding, I bring strong experience in AI-accelerated development 
                workflows, leveraging tools like <strong>Claude, Cursor, and Kiro</strong> to 
                design and deliver complete solutions from concept to execution. 
                I also have hands-on experience in UI/UX design using Figma, 
                where I create end-to-end product prototypes.
              </p>
            </div>
          </div>
          
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img 
                src="/sanat-about.jpg" 
                alt="Sanat Kumar Dhawan" 
                className={styles.image} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
