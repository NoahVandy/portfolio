import styles from "../../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <nav>
      <div className={styles.container}>
        <h2>Noah Vandy.</h2>
        <a>About</a>
        <a>University</a>
      </div>
    </nav>
  )
}
