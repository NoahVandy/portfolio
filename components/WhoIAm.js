import { Typography } from "@mui/material"
import styles from "../styles/Who.module.css"

export default function WhoIAm() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Typography className={styles.titleText} variant="h1">
          Hey there.
        </Typography>
      </div>
      <div className={styles.body}>
        <Typography className={styles.bodyText}>
          Thanks for checking out my page! My full name is Noah Vandervelden but
          I usually shorten it to Vandy so it's easier for people to remember
          🤷. I am currently a student at Grand Canyon University studying
          software development, and have been developing for about two years,
          with two different internships.
        </Typography>
      </div>
    </div>
  )
}
