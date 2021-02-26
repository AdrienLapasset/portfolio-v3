module.exports = {
  siteMetadata: {
    title: "Adrien Lapasset",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects-cms`,
        path: `${__dirname}/src/projects-cms`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ]
};
