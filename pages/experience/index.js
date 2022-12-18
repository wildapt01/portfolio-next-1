import Head from "next/head";
import { Divider } from "../../components/Divider";
import ProjectCard from "../../components/ProjectCard";
import { projectsText } from "../../components/textContent";
import styles from "../../styles/Projects.module.css";

const Experience = () => {
  return (
    <>
      <Head>
        <title>Experience</title>
        <meta name="experience" content="a few projects" />
      </Head>
      <div className="container">
        <section className="section-title">
          <Divider />
          <h2>Experience</h2>
        </section>
        <section className={styles.scrolling} id="projects">
          {projectsText.map((objItem, indx) => (
            <ProjectCard key={indx} props={objItem} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Experience;
