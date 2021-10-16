import { Typography } from "@mui/material"
import styles from "../styles/University.module.css"
import MERN from "../public/images/MERN.jpeg"
import Image from "next/image"

export default function Univeristy() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography className={styles.titleText}>Univeristy.</Typography>
      </div>
      <div className={styles.body}>
        <Typography className={styles.bodyText}>
          I'm currently enrolled at Grand Canyon University (Go Lopes!) studying
          Software Development. While this degree still teaches the fundamentals
          of Computer Science, like algorithms and data structures, it really
          focuses on designing and developing software's infrastructure and
          architecture from the ground up.
          <br />
          <br />
          Most of the assignments in this course are semester long projects that
          are developed with Agile SCRUM methodology. Along with developing
          these projects, we host them on popular cloud platforms, AWS, google
          cloud, and Azure.{" "}
          <a
            onClickCapture={() => console.log("click")}
            className={styles.link}
          >
            Click to see some of my projects!
          </a>
        </Typography>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cardsRow}>
          <div className={styles.card}>
            <Image src={MERN} />
            <Typography variant="h5" className={styles.cardTitle}>
              Capstone
            </Typography>
            <Typography className={styles.cardDesc}>
              A MERN stack web application that is a marketplace designed
              specifically for GCU students. Students can further setup shops to
              sell specific items for their brands.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
