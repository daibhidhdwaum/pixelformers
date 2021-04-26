import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <div>
      <StaticImage
        src="../images/pixel-logo.png"
        alt="logo"
        placeholder="blurred"
        layout="fixed"
      />
    </div>
  )
}

export default Logo
