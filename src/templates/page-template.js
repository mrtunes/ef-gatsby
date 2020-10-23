import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      uri
      title
      content
    }
  }
`

const PageTemplate = ({ data }) => {
  const page = data.wpPage

  return (
    <Layout>
      <SEO title={page.title} />

      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </Layout>
  )
}

export default PageTemplate
