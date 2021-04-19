import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout.js"

const SeriesTemplate = ({ data }) => {
  console.log(data)
  const { seriesReference, seriesName } = data.contentfulSeries
  return (
    <Layout>
      <h3>{seriesName}</h3>
      <ul>
        {seriesReference.length === 0 ? (
          <p>There are currently no Sprites in this collection</p>
        ) : (
          seriesReference.map(sprite => {
            const { spriteName, id, faction, primaryFunction } = sprite

            return (
              <li key={id}>
                <h4>{spriteName}</h4>
                <p>{faction}</p>
                <p>{primaryFunction}</p>
              </li>
            )
          })
        )}
      </ul>
      <Link to={"/series"}>
        <p>Back</p>
      </Link>
    </Layout>
  )
}

// Grab the name and sprites that correspond to a specified series
export const query = graphql`
  query($slug: String!) {
    contentfulSeries(slug: { eq: $slug }) {
      seriesReference {
        ... on ContentfulSprite {
          id
          slug
          spriteName
          faction
          primaryFunction
        }
      }
      seriesName
    }
  }
`

export default SeriesTemplate
