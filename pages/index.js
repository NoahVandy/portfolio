import styles from "../styles/Home.module.css"

import WhoIAm from "../components/WhoIAm"
import Univeristy from "../components/University"

export default function Home() {
  return (
    <div className={styles.container}>
      <WhoIAm />
      <Univeristy />
    </div>
  )
}
