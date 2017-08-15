<template>
  <article class="blog-index">
    <header class="blog-index_banner">
      <img src="../static/banner.png" alt="">
    </header>
    <section class="container-fluid">

    </section>
  </article>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        title: '主页'
      }
    },
    components: {},
    created () {
      axios.get('/api/v1/articles')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          console.log('axios finish')
        })
    }
  }
</script>

<style lang="less">
  @import "../assets/var";

  .blog-index {
    .blog-index_banner {
      img {
        width: 100%;
      }
    }
  }
</style>
