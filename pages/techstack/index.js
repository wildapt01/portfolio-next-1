import Head from "next/head";
import Divider from "../../components/Divider";
import styles from "../../styles/TechStack.module.css";

const TechStack = () => {
  return (
    <>
      <Head>
        <title>Tech stack</title>
        <meta name="tech stack" content="a few technologies" />
      </Head>
      <div className="container">
        <section className="section-title">
          <Divider />
          <h2>Technologies</h2>
        </section>

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
