import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
// import { BLOCKS, MARKS } from "@contentful/rich-text-types"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAbout {
        nodes {
          bio {
            raw
          }
          about
        }
      }
    }
  `)

  // const Text = ({ children }) => <p>{children}</p>

  // const options = {
  //   rendernode: {
  //     [BLOCKS.PARAGRAPH]: (nodes, children) => <Text>{children}</Text>,
  //   },
  // }

  // const bio = data.allContentfulAbout.node
  // const { nodes } = data.allContentfulAbout
  // console.log(data)
  // console.log(nodes)

  return <Layout>{/* {documentToReactComponents(node.bio, options)} */}</Layout>
}

export default About
