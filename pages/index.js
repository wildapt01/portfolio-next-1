import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.container}>
        <h1>Hello, I am Patrick.</h1>
        <p className={styles.text_lg}>Software engineer, web developer and more generally an ever curious mind.</p>
        <p className={styles.text_lg}>Going the extra mile is usually the easy part. Going the extra inch is arduous.</p>
      </div>

    </div>
  )
}
