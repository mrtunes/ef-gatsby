module.exports = {
  siteMetadata: {
    title: `Elliott Fienberg Music System`,
    author: `Elliott Fienberg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `http://wp.elliottfienberg.com/graphql`,
        schema: {
          typePrefix: `Wp`,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
  ],
}
