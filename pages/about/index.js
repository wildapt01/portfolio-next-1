import Head from "next/head";
import styles from "../../styles/About.module.css";
// eslint-disable-next-line prettier/prettier
import { aboutText } from "../../components/textContent.js";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="about" content="a few words" />
      </Head>
      <div className="container">
        <h2>About</h2>
        <div>
          {aboutText.map((parag, indx) => (
            <p className={styles.parag} key={indx}>
              {parag}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
