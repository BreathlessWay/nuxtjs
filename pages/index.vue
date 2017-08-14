<template>
  <article class="blog-index">
    <section class="container">
      bootstrap axios vuex less环境搭建完成{{JSON.stringify(data)}}
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
    }
  }
</script>

<style lang="less">
  @import "../assets/var";

  .blog-index {
  }
</style>
