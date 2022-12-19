import Head from "next/head";
import { Divider } from "../../components/Divider";
import TechCard from "../../components/TechCard";
import styles from "../../styles/TechStack.module.css";
import { techCards } from "../../components/textContent";

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
        <p className="text_md">
          I have worked with a range of technologies in the web development
          world, from back-end to design.
        </p>
        <section className={styles.cards}>
          {techCards.map((record, indx) => (
            <TechCard props={record} key={indx} />
          ))}
        </section>
      </div>
    </>
  );
};

export default TechStack;
