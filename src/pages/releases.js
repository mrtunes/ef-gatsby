import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"

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
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const allReleases = data.allWpRelease.nodes

  return (
    <Layout>
      <SEO title="Music Releases" />

      <Container>
        <Row>
          {allReleases.map(release => (
            <Col sm={12} md={6} lg={4} key={release.title} className="mb-3">
              <Img
                fluid={
                  release.featuredImage.node.localFile.childImageSharp.fluid
                }
              />

              <Link to={release.uri}>{release.title}</Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
