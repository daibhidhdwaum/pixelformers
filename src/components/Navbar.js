import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/series">Series</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </ul>
  )
}

export default Navbar
