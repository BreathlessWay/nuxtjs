<template>
  <div class="not-found">
    <img src="../static/404.png" alt="">
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default' // 你可以为错误页面指定自定义的布局
  }
</script>
<style lang="less" scoped>
  @import "../assets/var";

  .not-found {
    img {
      width: 100%;
      max-width: 414px;
    }
    text-align: center;
    height: calc(~"100vh - 180px - 170px");
    line-height: calc(~"100vh - 180px - 170px");
  }
</style>
