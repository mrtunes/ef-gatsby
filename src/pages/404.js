import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not found" />

    <h1>Page Not Found</h1>
    <p>
      Sorry, you've been led down a black hole to nothing. Best to return to the{" "}
      <Link to="/">homepage</Link> and try to find something else that actually
      exists. If all else fails, feel free to{" "}
      <Link to="/contact">contact me</Link> to figure this out together.
    </p>
  </Layout>
)

export default NotFoundPage
