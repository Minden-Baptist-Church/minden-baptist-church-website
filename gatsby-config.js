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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:400,600,800`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://zacchary.me",
        sitemap: "https://zacchary.me/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-remark-social-cards`,
  ],
}
