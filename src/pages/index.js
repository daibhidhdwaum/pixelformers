import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
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

  console.log(edges)

  return (
    <Layout>
      <h2>This is Pixelformers homepage</h2>
    </Layout>
  )
}
