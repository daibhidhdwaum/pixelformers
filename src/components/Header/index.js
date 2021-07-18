import React, { useState } from "react"
import Logo from "../Logo"
import Hamburger from "../Hamburger"
import { Link } from "gatsby"

import * as styles from "./styles.module.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onHamburgerClick = () => {
    setIsOpen(!isOpen)
    console.log("isOpen", isOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__container}>
          <div className={styles.header__logoContainer}>
            <Logo />
          </div>
          <ul
            className={`${styles.header__navbar} ${
              !isOpen ? styles.header__isClosed : styles.header__isOpen
            }`}
          >
            <li className={styles.header__navbarItem}>
              <Link to="/" className={styles.header__link}>
                Home
              </Link>
            </li>
            <li className={styles.header__navbarItem}>
              <Link to="/series" className={styles.header__link}>
                Series
              </Link>
            </li>
            <li className={styles.header__navbarItem}>
              <Link to="/about" className={styles.header__link}>
                About
              </Link>
            </li>
            <li className={styles.header__navbarItem}>
              <Link to="/blog" className={styles.header__link}>
                Blog
              </Link>
            </li>
          </ul>
          <Hamburger onHamburgerClick={onHamburgerClick} />
        </div>
      </div>
    </header>
  )
}

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   const onHamburgerClick = () => {
//     setIsOpen(!isOpen)
//     console.log("isOpen", isOpen)
//   }

//   return (
//     <header className={styles.header}>
//       <div className={styles.header__cover}>
//         <div className={styles.header__wrapper}>
//           <div className={styles.header__container}>
//             <Logo />
//             <Navbar isOpen={isOpen} />
//             <Hamburger onHamburgerClick={onHamburgerClick} />
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

export default Header
