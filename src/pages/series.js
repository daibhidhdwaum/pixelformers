import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const Series = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSeries {
        edges {
          node {
            series
            slug
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulSeries
  return (
    <Layout>
      <section>
        <h2>Series</h2>
        <ul>
          {edges.map((edge, i) => {
            const { series, slug } = edge.node

            return (
              <Link to={`/series/${slug}`}>
                <h3 key={i}>{series}</h3>
              </Link>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default Series
