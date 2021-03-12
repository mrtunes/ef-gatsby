import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($uri: String!) {
    wpPost(uri: { eq: $uri }) {
      title
      date(formatString: "MMMM D, YYYY")
      content
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
      release {
        releaseDate
        recordLabel
        appleUrl
        bandcampUrl
        discogsUrl
        facebookUrl
        mp3Url
        soundcloudUrl
        spotifyUrl
        youtubeUrl
      }
    }
  }
`

const PostTemplate = ({ data }) => {
  const post = data.wpPost

  return (
    <Layout>
      <SEO title={post.title} />

      <h2>{post.title}</h2>
      <p className="text-muted">{post.date}</p>

      {post.featuredImage && (
        <Img
          fluid={post.featuredImage.node.localFile.childImageSharp.fluid}
          className="mb-3"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {post.release.releaseDate && (
        <div>
          <p>
            Released: {post.release.releaseDate} on {post.release.recordLabel}
          </p>
          <h4>Listen to this release on:</h4>
          <ul>
            {post.release.spotifyUrl && (
              <li>
                <a href={post.release.spotifyUrl}>Spotify</a>
              </li>
            )}
            {post.release.appleUrl && (
              <li>
                <a href={post.release.appleUrl}>Apple Music</a>
              </li>
            )}
            {post.release.youtubeUrl && (
              <li>
                <a href={post.release.youtubeUrl}>YouTube</a>
              </li>
            )}
            {post.release.bandcampUrl && (
              <li>
                <a href={post.release.bandcampUrl}>Bandcamp</a>
              </li>
            )}
            {post.release.soundcloudUrl && (
              <li>
                <a href={post.release.soundcloudUrl}>SoundCloud</a>
              </li>
            )}
            {post.release.discogsUrl && (
              <li>
                <a href={post.release.discogsUrl}>Discogs</a>
              </li>
            )}
            {post.release.facebookUrl && (
              <li>
                <a href={post.release.facebookUrl}>Facebook</a>
              </li>
            )}
            {post.release.mp3Url && (
              <li>
                <a href={post.release.mp3Url}>Direct Download</a>
              </li>
            )}
          </ul>
        </div>
      )}

      <Link to="/blog">← Back to All Posts</Link>
    </Layout>
  )
}

export default PostTemplate
