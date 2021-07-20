import React from "react"
import Layout from "../../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Head from "../../components/Head"

import * as styles from "./styles.module.scss"

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
            gatsbyImageData(width: 500)
          }
        }
      }
    }
  `)

  const { nodes } = data.allContentfulSeries

  return (
    <Layout>
      <Head title={"Series"} />
      <section className={styles.seriesSection}>
        <div className={styles.seriesSection__wrapper}>
          <div className={styles.seriesSection__container}>
            <h2 className={styles.seriesSection__title}>Series</h2>
            <ul className={styles.seriesSection__series}>
              {nodes.map(node => {
                const { seriesImage, seriesName, slug, id } = node
                const pathToImage = getImage(seriesImage)

                return (
                  <li className={styles.seriesSection__link}>
                    <Link to={`/series/${slug}`} key={id}>
                      <GatsbyImage
                        image={pathToImage}
                        alt={seriesName}
                        className={styles.seriesSection__image}
                      />
                      <div className={styles.seriesSection__text}>
                        <p>{seriesName}</p>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Series
