import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          lang
        }
      }
    }
  `)

  const { siteMetadata } = data.site

  return (
    <Helmet title={`${siteMetadata.title} || ${title}`}>
      <html lang={siteMetadata.lang} />
    </Helmet>
  )
}

export default Head
