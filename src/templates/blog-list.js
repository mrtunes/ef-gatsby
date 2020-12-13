import React from "react"
import { graphql, Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allWpPost(limit: $limit, skip: $skip) {
      nodes {
        uri
        title
        date(fromNow: true)
        excerpt
      }
    }
  }
`

const BlogList = ({ data, pageContext }) => {
  const posts = data.allWpPost.nodes

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const variants = {
    visible: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0 },
  }

  return (
    <Layout>
      <SEO title="Blog" />

      {posts.map((post, index) => {
        const { uri, title, date, excerpt } = post

        return (
          <motion.div
            custom={index}
            animate="visible"
            variants={variants}
            key={uri}
            className="py-2"
          >
            <h4>
              <Link to={uri}>{title}</Link>
            </h4>
            <p className="text-muted">{date}</p>
            <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          </motion.div>
        )
      })}

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {!isFirst && (
              <Link to={`/blog/${prevPage}`} rel="prev">
                ← Previous Page
              </Link>
            )}
          </li>
          <li>
            {!isLast && (
              <Link to={`/blog/${nextPage}`} rel="next">
                Next Page →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogList
