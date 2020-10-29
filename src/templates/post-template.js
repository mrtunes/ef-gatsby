import React from "react"
import { graphql, Link } from "gatsby"

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
          link
        }
      }
      release {
        releaseDate
        recordLabel
        spotifyUrl
        appleUrl
        youtubeUrl
        discogsUrl
      }
    }
  }
`

const PostTemplate = ({ data }) => {
  const post = data.wpPost

  return (
    <Layout>
      <SEO title={post.title} />

      <h1>{post.title}</h1>
      <p>{post.date}</p>
      {post.featuredImage && (
        <img
          src={post.featuredImage.node.link}
          style={{ maxHeight: 300, width: "100%", objectFit: "scale-down" }}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {post.release.releaseDate && (
        <div>
          <p>
            Released: {post.release.releaseDate} on {post.release.recordLabel}
          </p>
          <h3>Listen to this release on:</h3>
          <ul>
            <li>
              <a href={post.release.spotifyUrl}>Spotify</a>
            </li>
            <li>
              <a href={post.release.appleUrl}>Apple Music</a>
            </li>
            <li>
              <a href={post.release.youtubeUrl}>YouTube</a>
            </li>
            <li>
              <a href={post.release.discogsUrl}>Discogs</a>
            </li>
          </ul>
        </div>
      )}

      <Link to="/blog">← Back to All Post</Link>
    </Layout>
  )
}

export default PostTemplate
