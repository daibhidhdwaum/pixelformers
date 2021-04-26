const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const singleSeriesTemplate = path.resolve(
    "./src/templates/SingleSeriesTemplate.js"
  )

  // This graphql function returns a promise
  const seriesRes = await graphql(`
    query {
      allContentfulSeries {
        nodes {
          id
          seriesName
          slug
        }
      }
    }
  `)

  // This loops over each series
  seriesRes.data.allContentfulSeries.nodes.forEach(node => {
    const { slug } = node
    createPage({
      component: singleSeriesTemplate,
      path: `/series/${slug}`,
      context: {
        slug: slug,
      },
    })
  })
}
