<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="nuxt.err ? 'nuxt' : layout"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/style.less'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m),

  "_phone": () => import('../layouts/phone.vue'  /* webpackChunkName: "layouts/phone" */).then(m => m.default || m),

  "_share": () => import('../layouts/share.vue'  /* webpackChunkName: "layouts/share" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"nuxtjs","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no, shrink-to-fit=no"},{"name":"renderer","content":"webkit"},{"http-equiv":"X-UA-Compatible","content":"IE=edge"},{"http-equiv":"Cache-Control","content":"no-siteapp"},{"name":"format-detection","content":"telephone=no"},{"name":"author","content":"BreathlessWay  731005087@qq.com"},{"name":"apple-mobile-web-app-title","content":"smalltiger blog"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-status-bar-style","content":"#000"},{"name":"screen-orientation","content":"portrait"},{"name":"x5-orientation","content":"portrait"},{"name":"full-screen","content":"yes"},{"name":"x5-fullscreen","content":"true"},{"name":"browsermode","content":"application"},{"name":"x5-page-mode","content":"app"},{"name":"theme-color","content":"#000"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"link":[{"rel":"shortcut icon","type":"image/x-icon","href":"/favicon.ico"},{"rel":"apple-touch-icon-precomposed","href":"/favicon.ico"},{"rel":"stylesheet","href":"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"}],"script":[{"src":"https://cdn.bootcss.com/babel-polyfill/6.23.0/polyfill.min.js"},{"src":"https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"},{"src":"https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"}],"style":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options._nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

