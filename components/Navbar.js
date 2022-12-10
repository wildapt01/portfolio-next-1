import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Image className={ styles.navlogo} src="../public/software-logo.png" alt="logo"/>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}

export default Navbar;
