import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Image className={styles.navlogo} src="/clipart2381085.png" alt="Computer Science Engineering Logos@clipartmax.com" width={70} height={70} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}

export default Navbar;
