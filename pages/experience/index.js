import Head from "next/head";
import Divider from "../../components/Divider";

const Experience = () => {
  return (
    <>
      <Head>
        <title>Experience</title>
        <meta name="experience" content="a few projects" />
      </Head>
      <div className="container">
        {" "}
        <section className="section-title">
          <Divider />
          <h2>Experience</h2>
        </section>
      </div>
    </>
  );
};

export default Experience;
