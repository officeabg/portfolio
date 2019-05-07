module.exports = {
  siteMetadata: {
    title: 'Alex Bunduc',
    description: 'Portfolio Website Alex Bunduc',
    siteUrl: 'http://yeya.ro',
    author: 'AlexBunduc',
    twitter: 'AlexBunduc',
    adsense: '',
  },
  pathPrefix: '/react',
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Alex Bunduc',
        short_name: 'Alex Bunduc',
        description: 'Site de portofoliu Alex Bunduc',
        homepage_url: 'http://yeya.ro',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-transformer-sharp',
  ],
}
