import Head from "next/head";
import Bio from "../components/Bio/Bio";
import Post from "../components/Post";
import PostForm from "../components/PostForm";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Bio
          headshot="https://pbs.twimg.com/profile_images/1347599595115868162/dSzyyv9m_400x400.jpg"
          name="Matthew Ricklefs"
          tagline="Helping others to learn by doing!"
          role="Developer Advocate @ Humana"
        />

        <ul className={styles.post}>
          <li>
            <Post content="Hey, I'm a new post!" date="01/24/2021" />
          </li>

          <li>
            <Post
              content="I’m working in Figma, designing a website to display all of my
              tweets!"
              date="01/24/2022"
            />
          </li>

          <li>
            <Post
              content="I’m working in Figma, designing a website to display all of my
              tweets!"
              date="01/24/2022"
            />
          </li>

          <li>
            <Post
              content="I’m working in Figma, designing a website to display all of my
              tweets!"
              date="01/24/2022"
            />
          </li>
        </ul>

        <PostForm />
      </main>
    </div>
  );
}
