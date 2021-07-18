import React from "react"
import { GoThreeBars } from "react-icons/go"

import * as styles from "./styles.module.scss"

const Hamburger = ({ onHamburgerClick }) => {
  return (
    <div className={styles.hamburger} onClick={() => onHamburgerClick()}>
      <GoThreeBars className={styles.hamburger__icon} />
    </div>
  )
}

export default Hamburger
