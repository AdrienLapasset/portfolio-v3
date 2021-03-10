module.exports = {
  siteMetadata: {
    title: "Adrien Lapasset",
    description: `Je suis un développeur créatif (et occasionnellement designer) qui aime les sites
    responsive, le design minimaliste et les transitions en douceur.`,
    url: `https://alapasset.dev`,
    author: `Adrien Lapasset`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/imgs/favicon.png`
      },
    },
  ]
};
