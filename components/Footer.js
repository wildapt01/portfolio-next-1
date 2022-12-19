import styles from "../styles/Footer.module.css";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright P. Boutier - 2022, 2023</div>
      <section className={styles.social}>
        <a href="https://github.com/wildapt01" target="_blank" rel="noreferrer">
          <FaGithub className={styles.social_icons} />
        </a>
        <a
          href="https://www.linkedin.com/in/patrick-boutier/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={styles.social_icons} />
        </a>
        <a
          href="https://www.facebook.com/patrick.boutier.7/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className={styles.social_icons} />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
