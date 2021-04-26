import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Series = () => {
  // Grab the each series name and the corresponding slug
  const data = useStaticQuery(graphql`
    query {
      allContentfulSeries {
        nodes {
          id
          seriesName
          slug
          seriesImage {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const { nodes } = data.allContentfulSeries

  return (
    <Layout>
      <h2>Series</h2>
      <ul>
        {nodes.map(node => {
          const { seriesImage, seriesName, slug, id } = node
          const pathToImage = getImage(seriesImage)
          return (
            <div>
              <Link to={`/series/${slug}`} key={id}>
                <GatsbyImage image={pathToImage} alt={seriesName} />
                <p>{seriesName}</p>
              </Link>
            </div>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Series
