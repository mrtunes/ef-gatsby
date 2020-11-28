import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

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
                <h5 className="mt-2">{release.title}</h5>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-4">
        <h4>Stay In Touch</h4>
        <p>
          Sign up to receive my newsletter, the Sunday Bagel and get the latest
          music releases, playlists and reviews.
        </p>

        <Form
          action="https://mrtunes.us1.list-manage.com/subscribe/post?u=f1f7a1f34a5896e1092049121&amp;id=c4ba69fda0"
          method="POST"
        >
          <Form.Row>
            <Col>
              <Form.Control required type="email" placeholder="Your email" />
            </Col>

            <Col>
              <Button type="submit">Subscribe</Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    </Layout>
  )
}

export default IndexPage
