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
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link to="/blog">Back to All Post</Link>
    </Layout>
  )
}

export default PostTemplate
