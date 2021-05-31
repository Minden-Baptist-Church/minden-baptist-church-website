module.exports = {
  siteMetadata: {
    title: `Minden Baptist Church`,
    author: {
      name: `Minden Baptist Church`,
      summary: `Minden Baptist is a contemporary, friendly and family oriented congregation with ministries to all demographics.`,
    },
    description: `Minden Baptist is a contemporary, friendly and family oriented congregation with ministries to all demographics.`,
    siteUrl: `https://mindenbaptist.org/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:400,600,800`],
        display: "swap",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
  ],
}
