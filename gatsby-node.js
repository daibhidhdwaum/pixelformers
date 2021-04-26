const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const seriesTemplate = path.resolve("./src/templates/SeriesTemplate.js")

  // This graphql function returns a promise
  const seriesRes = await graphql(`
    query {
      allContentfulSeries {
        nodes {
          seriesReference {
            ... on ContentfulSprite {
              id
              spriteName
              contentful_id
              faction
              primaryFunction
              slug
            }
          }
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
  console.log("###############")
  console.log(seriesRes)
  console.log("nodes", seriesRes.data.allContentfulSeries.nodes)
  console.log(
    "reference",
    seriesRes.data.allContentfulSeries.nodes.seriesReference
  )
  console.log("###############")

  // This loops over each series
  seriesRes.data.allContentfulSeries.nodes.forEach(node => {
    const { slug } = node
    createPage({
      component: seriesTemplate,
      path: `/series/${slug}`,
      context: {
        slug: slug,
      },
    })
  })
}
