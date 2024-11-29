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
        fonts: [`Montserrat\:400,600,700,800,900`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://mindenbaptist.org",
        sitemap: "https://mindenbaptist.org/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: true,
      },
    },
  ],
}
