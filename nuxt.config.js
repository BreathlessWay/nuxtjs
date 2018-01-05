module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtjs',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no, shrink-to-fit=no'},
      {name: 'renderer', content: 'webkit'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {'http-equiv': 'Cache-Control', content: 'no-siteapp'},
      {name: 'format-detection', content: 'telephone=no'},
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
      {rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'apple-touch-icon-precomposed', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'}
    ],
    script: [
      {src: 'https://cdn.bootcss.com/babel-polyfill/6.23.0/polyfill.min.js'},
      {src: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js'},
      {src: 'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  css: [
    {
      src: 'assets/style.less',
      lang: 'less'
    }
  ],
  plugins: [
    '~/plugins/axiosConfig.js',
    '~/plugins/format.js',
    {
      ssr: false, // only included on client-side
      src: '~/plugins/vuePlugin.js'
    },
    {
      ssr: false, // only included on client-side
      src: '~/plugins/sentry'
    }
  ],
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  env: {
    baseUrl: 'http://api.smalltiger.me/api/v1/'
  },
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  build: {
    /*
    ** Run ESLINT on save
    */
    // analyze: true,
    extractCSS: true,
    vendor: ['axios'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.mp3$/,
        loader: 'url-loader',
        exclude: /(node_modules)/,
        query: {
          name: 'media/[name].[hash:7].[ext]'
        }
      })
      config.externals = {
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery'
      }
    }
  }
}
