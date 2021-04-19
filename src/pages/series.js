import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const Series = () => {
  // Grab the each series name and the corresponding slug
  const data = useStaticQuery(graphql`
    query {
      allContentfulSeries {
        edges {
          node {
            seriesName
            slug
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulSeries

  return (
    <Layout>
      <h2>Series</h2>
      <ul>
        {edges.map((edge, i) => {
          const { seriesName, slug } = edge.node

          return (
            <Link to={`/series/${slug}`}>
              <h3 key={i}>{seriesName}</h3>
            </Link>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Series
