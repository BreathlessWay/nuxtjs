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
    async asyncData (context) {
      let {data} = await axios.get(`/topics`)
      return {
        data: data
      }
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
