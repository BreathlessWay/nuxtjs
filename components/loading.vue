<template>
  <section class="blog-loading">
    <img src="../static/loading.gif" alt="loading">
  </section>
</template>
<script>
  export default {
    name: 'loading',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/var";

  .blog-loading {
    background: #fff;
    width: 100%;
    text-align: center;
    padding: @MP30PX 0;
    img {
      width: 100%;
      max-width: 600px;
    }
  }
</style>
