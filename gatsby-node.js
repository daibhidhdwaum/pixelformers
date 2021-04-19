const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const seriesTemplate = path.resolve("./src/templates/SeriesTemplate.js")

  // This graphql function returns a promise
  const seriesRes = await graphql(`
    query {
      allContentfulSeries {
        edges {
          node {
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
            seriesName
            slug
          }
        }
      }
    }
  `)

  // This loops over each series
  seriesRes.data.allContentfulSeries.edges.forEach(edge => {
    const { slug } = edge.node
    createPage({
      component: seriesTemplate,
      path: `/series/${slug}`,
      context: {
        slug: slug,
      },
    })
  })
}
