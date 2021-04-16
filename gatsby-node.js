const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const seriesTemplate = path.resolve("./src/templates/Series.js")

  // This graphql function returns a promise
  const res = await graphql(`
    query {
      allContentfulSeries {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulSeries.edges.forEach(edge => {
    createPage({
      component: seriesTemplate,
      path: `/series/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
