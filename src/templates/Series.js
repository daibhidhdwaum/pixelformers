import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout.js"

const Series = ({ data }) => {
  const { series } = data.contentfulSeries

  return (
    <Layout>
      <h2>{series}</h2>
      <Link to={"/series"}>
        <p>Back</p>
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulSeries(slug: { eq: $slug }) {
      series
    }
  }
`

export default Series
