import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import "normalize.css"
import "../../styles/index.scss"
import * as styles from "./styles.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__container}>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
