import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allWpRelease(limit:6) {
      nodes {
        uri
        title
        date(formatString: "MMMM D, YYYY")
        release {
          bandcampEmbed
          soundcloudEmbed
          mp3Url
          releaseDate          
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
  
     <h3 className="p-4 text-center">Music for the Planet</h3>
     



     
      </motion.div>

      <motion.div custom="1" animate="visible" variants={variants}>
        <Container>
 <p>Composer, sound designer and writer, I work on a few different types of music throughout the year.  <br/><br/>
 Here are five projects I have on the go for you at the moment (May 2021): </p>
 <ol>
<li>My music on <a href="http://soundcloud.com/fienberg">Soundcloud</a> or <a href="https://sptfy.com/ivW1">Spotify</a></li>
<li>A <a href="https://anchor.fm/elliottspodcast">new podcast</a></li>
<li>A <a href="https://www.youtube.com/channel/UCqtyhD5muPMkaPyCxFORA8g">YouTube channel</a> for live streams</li>
<li>An <a href="https://gumroad.com/l/failurebook">eBook about creative projects</a></li>
<li>A <a href="https://efnbrg.substack.com/">newsletter</a> to help you stay updated</li>
 </ol>

<p><a href="https://ko-fi.com/elliottfienberg">Buy me a coffee</a> and keep the music playing</p>        

           {/*<h5>Some of the Latest Releases</h5> 
        
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
                  <p><div dangerouslySetInnerHTML={{ __html: release.release.soundcloudEmbed }} /></p>
              </Link>
              </Col>
            ))}
          </Row>*/} 
        </Container>

        {/*<Container className="my-4">
          <h4>Stay In Touch</h4>
          <p>
            Sign up to receive the Sunday Bagel Newsletter and get the
            latest music releases, playlists and reviews from the source. 
          </p>

          <iframe src="https://efnbrg.substack.com/embed" width="100%" height="320" frameborder="0" scrolling="no"></iframe>

           
        </Container>*/}  
      </motion.div>
    </Layout>
  )
}

export default IndexPage
