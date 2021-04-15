import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"

const Series = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSeries {
        edges {
          node {
            series
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
        <div>
          {edges.map((edge, i) => {
            const { series } = edge.node

            return <h3 key={i}>{series}</h3>
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Series
