const aliases = {
  "~": "src"
}

module.exports = {
  plugins: [
    {
      resolve:
        `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`
      },
    },
    {
      resolve:
        `gatsby-source-filesystem`,
      options: {
        name: `morphing-man`,
        path: `${__dirname}/static/morphing-man`
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: aliases,
        extensions: [`ts`, `tsx`]
      }
    }
  ],
}
