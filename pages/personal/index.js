import Head from "next/head";
import { Divider } from "../../components/Divider";
import PersoCard from "../../components/PersoCard";
import { persoContent } from "../../components/textContent";
import styles from "../../styles/Projects.module.css";

const Perso = () => {
  return (
    <>
      <Head>
        <title>Personal Projects</title>
        <meta name="personal" content="personal projects" />
      </Head>
      <div className="container">
        <section className="section-title">
          <Divider />
          <h2>Personal Projects</h2>
        </section>
        <section className={styles.scrolling} id="perso">
          <div className={styles.perso_container}>
            {persoContent.map((objItem, indx) => (
              <PersoCard key={indx} props={objItem} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Perso;
