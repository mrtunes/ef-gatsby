import React from "react"
import { graphql, Link } from "gatsby"
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
            link
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
              <img
                src={release.featuredImage.node.link}
                style={{ objectFit: "scale-down", width: "100%" }}
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
