import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        about
        bio {
          bio
        }
        bioImage {
          gatsbyImageData
          title
        }
      }
    }
  `)

  const {
    bio: { bio },
    about,
    bioImage,
  } = data.contentfulAbout

  const image = getImage(bioImage)

  return (
    <Layout>
      <h2>{about}</h2>
      <div>{bio}</div>
      <div>
        <GatsbyImage image={image} alt={bioImage.title} />
      </div>
    </Layout>
  )
}

export default About
