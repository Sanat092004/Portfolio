import { meta } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import styles from "./Contact.module.css";

const links = [
  { label: "✉ Email", href: `mailto:${meta.email}`, text: meta.email },
  { label: "in LinkedIn", href: meta.linkedin },
  { label: "⌥ GitHub", href: meta.github },
  { label: "📞 Phone", href: `tel:${meta.phone.replace(/\s/g, "")}`, text: meta.phone },
];

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className={styles.card}>
          <h2 className={`section-title reveal ${styles.centered}`}>
            Let's build something.
          </h2>
          <p className={`reveal ${styles.sub}`}>
            Actively seeking Android / Mobile internships — remote or on-site, anywhere.
            If you're working on something interesting, reach out.
          </p>
          <div className={`${styles.links} reveal`}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.linkLabel}>{l.label}</span>
                {l.text && <span className={styles.linkText}>{l.text}</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
