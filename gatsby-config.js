module.exports = {
  siteMetadata: {
    title: `Elliott Fienberg Music System`,
    author: `Elliott Fienberg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
      `gatsby-remark-video`,
    {
  resolve: 'gatsby-remark-video',
  options: {
    width: 800,
    height: 'auto',
    preload: 'auto',
    muted: true,
    autoplay: true,
    playsinline: true,
    controls: true,
    loop: true
  }
},
      `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-1015202-1",
      },
    },

  ],
}
