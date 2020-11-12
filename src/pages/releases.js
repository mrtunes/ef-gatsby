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

const IndexPage = ({ data }) => {
  const allReleases = data.allWpRelease.nodes

  return (
    <Layout>
      <SEO title="Music Releases" />

      <Container>
        <Row>
          {allReleases.map(release => (
            <Col xs={6} md={4} xl={3} key={release.title} className="mb-4">
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
