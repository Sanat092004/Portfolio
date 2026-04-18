import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const RESUME_LINK = "https://acrobat.adobe.com/id/urn:aaid:sc:AP:3004ba6d-2cf6-46c5-8033-b981922ab67a";

const links = [
  { href: "#projects", label: "Selected Work" },
  { href: "#about-me", label: "About Me" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.navWrapper}>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo}>skd</a>
          
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.link}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href={RESUME_LINK} target="_blank" rel="noreferrer" className={styles.link}>
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
