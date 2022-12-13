import Head from "next/head";
import Divider from "../../components/Divider";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="experience" content="a few projects" />
      </Head>
      <div className="container">
        {" "}
        <section className="section-title">
          <Divider />
          <h2>Projects</h2>
        </section>
      </div>
    </>
  );
};

export default Projects;
