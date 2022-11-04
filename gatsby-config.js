module.exports = {
  siteMetadata: {
    title: "Adrien Lapasset",
    description: `Développeur et designer web indépendant.`,
    url: `https://alapasset.dev`,
    author: `Adrien Lapasset`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/imgs/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-8THJJHX2Y5", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
    `gatsby-plugin-dark-mode`,
  ],
};
