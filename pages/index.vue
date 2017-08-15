<template>
  <article class="blog-index">
    <header class="blog-index_banner"></header>
    <section class="container-fluid">

    </section>
  </article>
</template>

<script>
  import axios from 'axios'

  export default {
    async asyncData ({error}) {
      return axios.get(`/topics`)
        .then(res => {
          return {data: res.data.success}
        })
        .catch(err => {
          error({statusCode: err.status || 404, message: err.message || 'Post not found'})
        })
    },
    data () {
      return {
        title: '主页'
      }
    },
    components: {},
    created () {
      axios.get('/topics')
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
      background: url("../static/banner.png") #fcdb34 no-repeat center;
      background-size: cover;
      height: 500px;
    }
  }
</style>
