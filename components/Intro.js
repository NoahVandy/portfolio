import styles from "../../styles/Intro.module.css"

import Typography from "@mui/material/Typography"

export default function Intro() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        color: "#fff",
        zIndex: 1000,
      }}
    >
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          <br />
          My Personal Portfolio
        </h1>

        <p className={styles.description}>
          My name is{" "}
          <Typography display="inline" className={styles.name}>
            Noah Vandervelden
          </Typography>
          ,
          <br />
          and I'm a Senior finishing my last semester at Grand Canyon
          University.
        </p>

        <div className={styles.grid}>
          <a className={styles.card1}>
            <h2>Who I Am &rarr;</h2>
            <p>Learn who I am, what I know, and what I do.</p>
          </a>

          <a className={styles.card2}>
            <h2>University &rarr;</h2>
            <p>Learn about the program I attended at GCU and how I did.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card1}
          >
            <h2>Internships &rarr;</h2>
            <p>Look at the experience I gained at my various internships.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card2}
          >
            <h2>Links and Resources&rarr;</h2>
            <p>Click here to see my socials and important documents.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
