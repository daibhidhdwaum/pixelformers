import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./styles.module.scss"

const Logo = () => {
  return (
    <div className={styles.logo}>
      <StaticImage
        src="../../images/pixel-logo.png"
        alt="logo"
        placeholder="blurred"
        layout="fixed"
      />
    </div>
  )
}

export default Logo
