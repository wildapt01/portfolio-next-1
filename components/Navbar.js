import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Image
          className={styles.navlogo}
          src="/clipart2381085.png"
          alt="Computer Science Engineering Logos@clipartmax.com"
          width={70}
          height={70}
        />
      </div>
      <div className={styles.nav_tabs}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/techstack">Technologies</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/personal">Personal projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
