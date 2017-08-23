# nuxtjs

> 一个基于nuxt实现的前后端分离的服务端渲染blog

[博客地址：smalltiger blog](http://ssr.smalltiger.me/)
## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## 技术栈
1. [nuxtjs](https://zh.nuxtjs.org/)
2. [vue](https://cn.vuejs.org/v2/guide/)
3. [vue-router](https://router.vuejs.org/zh-cn/)
4. [vuex](https://vuex.vuejs.org/zh-cn/)
5. [bootstrap v3](http://v3.bootcss.com/)
6. [qrcode](https://github.com/davidshimjs/qrcodejs/)
7. [axios](https://github.com/mzabriskie/axios)
8. [sentry](https://docs.sentry.io/clients/javascript/)
9. [less](http://less.bootcss.com/)

## 服务端部署
1. 基于webhook的自动发布，node插件 `github-webhook-handler`
2. node脚本，shell脚本，服务端pm2进程管理
3. nginx的反向代理

## Problem
1. 通过cdn引入插件
    >
          build:{
            extend (config, ctx) {
              config.externals = {
                $: 'jquery',
                jQuery: 'jquery',
                'window.$': 'jquery'
              }
            }
          }
          通过window.$来提供全局变量，在页面中通过window.$来调用
    >
2. 如果需要使用less sass scss需要安装对应的loader
3. axios配置
4. require('../components/component.vue').default引入组件
5. build:{extractCSS: true} 开启抽离css
6. store需要返回一个function,export default store = () => new Vuex.Store({...})
7. 添加plugins，需要重新构建
8. 动态设置head：
  >
      head () {
            return {
              title: this.detail.data.title,
              meta: [
                {hid: 'description', name: 'description', content: this.detail.data.desc}
              ]
            }
      }
  >
 9. 识别IE,跳转
  >
    <!--[if lt IE 10]>
    <head>
      <meta http-equiv="Refresh" content="10; url=http://www.baidu.com/"/>
    </head>
    <![endif]-->
  >
 10. 时间戳转换 new Date(time*1000)
 11. 通过Vue.component(component.name,component)实现免声明引入，直接使用的组件
