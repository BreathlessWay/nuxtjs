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
      {name: 'renderer', content: 'webkit'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {name: 'author', content: 'BreathlessWay  731005087@qq.com'},
      {name: 'apple-mobile-web-app-title', content: 'smalltiger blog'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-status-bar-style', content: '#000'},
      {name: 'screen-orientation', content: 'portrait'},
      {name: 'x5-orientation', content: 'portrait'},
      {name: 'full-screen', content: 'yes'},
      {name: 'x5-fullscreen', content: 'true'},
      {name: 'browsermode', content: 'application'},
      {name: 'x5-page-mode', content: 'app'},
      {name: 'theme-color', content: '#000'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  css: [
    'bootstrap/dist/css/bootstrap.css', {
      src: '~assets/style.less',
      lang: 'less'
    }],
  plugins: ['~plugins/bootstrap.js', '~plugins/axiosConfig.js'],
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  env: {
    baseUrl: 'http://api.smalltiger.me'
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
