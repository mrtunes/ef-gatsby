import React, { useState } from 'react';
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allWpRelease {
      nodes {
        uri
        title
        date(formatString: "MMMM D, YYYY")
        release {
        bandcampEmbed
        genre
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 250) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  }
`

const ReleasesPage = ({ data }) => {
  const newReleases = data.allWpRelease.nodes

  const variants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0 },
  }
  const [value, setValue] = useState("")

   const allReleases =
    value === ""
      ? newReleases
      : newReleases.filter(post =>
          post.release.genre ? post.release.genre.includes(value) : ""
        )

  return (
    <Layout>
      <SEO title="Music Releases" />

      <Container>
          <Row>
          <Col xs={8}></Col>

          <Col xs={3} className="mb-2">
          <select
              name="cars"
              id="cars"
              value={value}
              onChange={e => {
                setValue(e.currentTarget.value)
              }}
            >
             <option value="">All Styles</option>
              <option value="Ambient">Ambient</option>
                   <option value="Global Groove">Global Groove</option>
              <option value="House">House</option>
         
              
             
            </select>
          </Col>
        </Row>



        <Row>

          {allReleases.map((release, index) => (
            <Col xs={6} md={4} xl={3} key={index} className="mb-4">
              <motion.div custom={index} animate="visible" variants={variants}>
                <Link to={release.uri}>
                  <motion.div
                    whileHover={{
                      boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
                      y: -3,
                    }}
                  >
                    <Img
                      fluid={
                        release.featuredImage.node.localFile.childImageSharp
                          .fluid
                      }
                    />
                  </motion.div>
                  <p className="mt-1">{release.title}</p>
                </Link>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default ReleasesPage
