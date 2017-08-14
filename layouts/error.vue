<template>
  <div class="container">
    <h1>{{error.statusCode}}</h1>
    <h1>{{error.message}}</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default' // 你可以为错误页面指定自定义的布局
  }
</script>
