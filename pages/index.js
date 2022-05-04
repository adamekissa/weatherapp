import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'



export default function Home() {
  const[weda , setWeda] = useState("Yep");

  useEffect(() => {
    getWether();
  })
    async function getWether(){
      const url = "";
      fetch(url).then(response => 
        response.json().then(data => ({
            data: data,
            status: response.status
        })
      ).then(res => {
        // res.data.weather[0].main
        console.log(res.data)
        // setWeda(res.data.weather[0].main)
        let obj = {coord: res.data.coord.coord, weather: res.data.weather[0].weather, 
          base: res.data.weather[0].base, main : res.data.weather[0].main, visibility: res.data.weather[0].visibility };
          console.log(obj);
        setWeda(obj.main);
        return obj;
      }))
      };

      const ty = getWether();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport"  content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>HEYYYYYYYYYY!!!!{weda}</h1>
        <h1>Another one {ty.main}</h1>
        <button type="button" className="btn btn-primary">
  Notifications <span className="badge bg-secondary">4</span>
        </button>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
