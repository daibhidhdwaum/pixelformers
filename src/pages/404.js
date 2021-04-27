import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Layout>
      <h2>Page not found</h2>
      <p>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
