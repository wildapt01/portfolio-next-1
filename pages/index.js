import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="container">
        <h1>Hello, I am Patrick.</h1>
        <p className="text_lg">
          Software engineer, web developer and more generally an ever curious
          mind.
        </p>
        <p className="text_lg">
          Going the extra mile is usually the easy part. Going the extra inch is
          arduous.
        </p>
      </div>
    </>
  );
}
