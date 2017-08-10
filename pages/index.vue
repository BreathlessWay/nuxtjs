<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxtjs
      </h1>
      <h2 class="subtitle" style="font-size: 60px">
        nginx反向代理，webhook自动发布
      </h2>
      <div class="links">
        <a href="/page" class="button--green">Page</a>
        <span @click="$router.push({name:'wrong'})" class="button--grey">错误处理</span>
      </div>
      <img src="/1.jpeg" alt="" style="width: 100%">
      <div class="back-img"></div>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    asyncData (context) {
      console.log(context)
    },
    data (context) {
      console.log(context)
      return {
        title: '主页'
      }
    },
    components: {
      Logo
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .back-img {
    background: url("/1.jpeg") no-repeat center;
    background-size: cover;
    width: 200px;
    height: 100px;
    margin: auto;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
