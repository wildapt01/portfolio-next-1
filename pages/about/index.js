import Head from "next/head";
// import styles from "../styles/About.module.css";
import { aboutText} from "../../textContent.js"

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="about" content="a few words" />
      </Head>
      <div>
        <h2>About</h2>
        <div>
          {aboutText.map((parag,indx) => (
            <p key={indx}>{ parag}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
