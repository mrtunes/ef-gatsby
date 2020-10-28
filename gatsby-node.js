const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: {
      allWpPage: { nodes: allPages },
      allWpPost: { nodes: allPosts, totalCount },
    },
  } = await graphql(`
    query {
      allWpPage {
        nodes {
          uri
        }
      }
      allWpPost {
        nodes {
          uri
        }
        totalCount
      }
    }
  `)

  const pageTemplate = path.resolve(`./src/templates/page-template.js`)

  allPages.forEach(page => {
    createPage({
      path: page.uri,
      component: slash(pageTemplate),
      context: {
        uri: page.uri,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post-template.js`)

  allPosts.forEach(post => {
    createPage({
      path: `blog${post.uri}`,
      component: slash(postTemplate),
      context: {
        uri: post.uri,
      },
    })
  })

  // Create blog post list pages
  const postsPerPage = 5
  const numPages = Math.ceil(totalCount / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blog/` : `blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
