const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtjs',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  css: ['bootstrap/dist/css/bootstrap.css'],
  plugins: ['~plugins/bootstrap.js', '~plugins/axiosConfig.js'],
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  env: {
    baseUrl: ''
  },
  build: {
    /*
    ** Run ESLINT on save
    */
    // analyze: true,
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
      })
    ],
    vendor: ['axios', 'jquery', 'bootstrap'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
