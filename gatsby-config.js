const path = require('path')

const aliases = {
  '~': 'src',
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `morphing-man`,
        path: `${__dirname}/static/morphing-man`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gymnist`,
        path: `${__dirname}/static/gymnist`,
      },
    },
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@root': path.resolve(__dirname, '.'),
          '@src': path.resolve(__dirname, 'src'),
          '@cmp': path.resolve(__dirname, 'src/components'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
        },
        extensions: ['ts', 'tsx', 'js'],
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
  ],
}
