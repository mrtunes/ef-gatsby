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
        soundcloudEmbed
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

  const checkSoundCloudUrl = () => {
    if (release.release.soundcloudUrl) {
      return (
        <li>
          <a href={release.release.soundcloudUrl}>SoundCloud</a>
        </li>
      )
    } else {
      return (
        <li>
          <a href={release.release.bandcampUrl}>Bandcamp</a>
        </li>
      )
    }
  }

  const embedCode = () => {
    if (release.release.soundcloudEmbed) {
      return release.release.soundcloudEmbed
    } else {
      return release.release.bandcampEmbed
    }
  }

  return (
    <Layout>
      <SEO title={release.title} />

      <h2>{release.title}</h2>
      <p>Released on {release.date}</p>

      <div style={{ maxWidth: 400 }}>
        <Img
          fluid={release.featuredImage.node.localFile.childImageSharp.fluid}
        />
        <div dangerouslySetInnerHTML={{ __html: embedCode() }} />
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
          {checkSoundCloudUrl()}
          {release.release.facebookUrl && (
            <li>
              <a href={release.release.facebookUrl}>Facebook</a>
            </li>
          )}
        </ul>
      </div>
    </Layout>
  )
}

export default ReleaseTemplate
