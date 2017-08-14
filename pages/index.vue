<template>
  <article class="blog-index">
    <section class="container">
      bootstrap axios vuex less环境搭建完成
    </section>
  </article>
</template>

<script>
  import axios from 'axios'

  export default {
    asyncData (context) {
      axios.get('')
    },
    data (context) {
      return {
        title: '主页'
      }
    },
    components: {}
  }
</script>

<style lang="less">
  @import "../assets/var";

  .blog-index {
  }
</style>
