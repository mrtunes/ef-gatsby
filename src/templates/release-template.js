import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($uri: String!) {
    wpRelease(uri: { eq: $uri }) {
      title
      date(formatString: "MMMM D, YYYY")
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
      release {
        bandcampEmbed
        appleUrl
        bandcampUrl
        facebookUrl
        mp3Url
        soundcloudUrl
        spotifyUrl
        youtubeUrl
        genre
      }
      content
    }
  }
`

const ReleaseTemplate = ({ data }) => {
  const release = data.wpRelease

  return (
    <Layout>
      <SEO title={release.title} />

      <h2>{release.title}</h2>
      <p>Released on {release.date}</p>

      <div style={{ maxWidth: 400 }}>
        <Img
          fluid={release.featuredImage.node.localFile.childImageSharp.fluid}
        />
        <div
          dangerouslySetInnerHTML={{ __html: release.release.bandcampEmbed }}
        />
      </div>

      <div dangerouslySetInnerHTML={{ __html: release.content }} />
      
      <div>
        <p>Save on:</p>
        <ul>
          {release.release.spotifyUrl && (
            <li>
              <a href={release.release.spotifyUrl}>Spotify</a>
            </li>
          )}
          {release.release.appleUrl && (
            <li>
              <a href={release.release.appleUrl}>Apple Music</a>
            </li>
          )}
          {release.release.youtubeUrl && (
            <li>
              <a href={release.release.youtubeUrl}>YouTube</a>
            </li>
          )}
          {release.release.bandcampUrl && (
            <li>
              <a href={release.release.bandcampUrl}>Bandcamp</a>
            </li>
          )}
          {release.release.soundcloudUrl && (
            <li>
              <a href={release.release.soundcloudUrl}>SoundCloud</a>
            </li>
          )}
          {release.release.facebookUrl && (
            <li>
              <a href={release.release.facebookUrl}>Facebook</a>
            </li>
          )}
          {release.release.mp3Url && (
            <li>
              <a href={release.release.mp3Url}>Direct Download</a>
            </li>
          )}
        </ul>
      </div>
    </Layout>
  )
}

export default ReleaseTemplate
