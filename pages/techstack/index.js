import Head from "next/head";
import styles from "../../styles/TechStack.module.css";

const TechStack = () => {
  return (
    <>
      <Head>
        <title>Tech stack</title>
        <meta name="tech stack" content="a few technologies" />
      </Head>
      <div className="container">
        <h2>Technologies</h2>
        <section className={styles.cards}>
          <div className={styles.card}>Front End</div>
          <div className={styles.card}>Back End</div>
          <div className={styles.card}>Others</div>
        </section>
      </div>
    </>
  );
};

export default TechStack;
