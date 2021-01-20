import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { motion } from "framer-motion"

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
                fluid(maxWidth: 400) {
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

  const variants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.7,
      },
    }),
    hidden: { opacity: 0 },
  }

  return (
    <Layout>
      <SEO />

      <motion.div custom="0" animate="visible" variants={variants}>
  
      <h3 className="p-4 text-center">Fresh New Music Every Week</h3>
     
      </motion.div>

      <motion.div custom="1" animate="visible" variants={variants}>
        <Container>
 <p>Every week new music flows through the system. <br />Top listeners do best by subscribing to the Sunday Bagel for warm deliveries. 

          </p>
          <h5>Latest Releases</h5>
          <Row>
          
<Col>
<iframe width="100%" height="250" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/967318108&color=%23272232&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"></iframe> <br />
</Col>
</Row>
<Row>

            {latestReleases.map(release => (
              <Col xs={6} md={4} key={release.uri} className="mt-2 mb-3">
                <Link to={release.uri}>
                  <motion.div
                    whileHover={{
                      boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
                      y: -5,
                    }}
                  >
                    <Img
                      fluid={
                        release.featuredImage.node.localFile.childImageSharp
                          .fluid
                      }
                    />
                  </motion.div>
                  <h5 className="mt-2">{release.title}</h5>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>

        <Container className="my-4">
          <h4>Stay In Touch</h4>
          <p>
            Sign up to receive the Sunday Bagel Newsletter and get the
            latest music releases, playlists and reviews from the source. 
          </p>

          <iframe src="https://efnbrg.substack.com/embed" width="100%" height="320" frameborder="0" scrolling="no"></iframe>

           
        </Container>
      </motion.div>
    </Layout>
  )
}

export default IndexPage
