import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allWpRelease(limit: 6) {
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
                fluid(maxWidth: 300) {
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
  const latestReleases = data.allWpRelease.nodes

  return (
    <Layout>
      <SEO />

      <h3 className="p-4 text-center">Expanding space with sound</h3>

      <Container>
        <h5>Latest Releases</h5>
        <Row>
          {latestReleases.map(release => (
            <Col xs={6} md={4} key={release.uri} className="my-2">
              <Link to={release.uri}>
                <Img
                  fluid={
                    release.featuredImage.node.localFile.childImageSharp.fluid
                  }
                />
                <h5>{release.title}</h5>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
