<template>
  <section class="share-btn">
    <span>分享到：</span>
    <a href="#">
      <img src="../static/copy.png" alt="" width="24" height="24">
    </a>
    <a href="#">
      <img src="../static/weibo.png" alt="" width="29" height="24">
    </a>
    <a href="#">
      <img src="../static/qqzone.png" alt="" width="25" height="24">
    </a>
    <a href="#">
      <img src="../static/huaban.png" alt="" width="21" height="20">
    </a>
  </section>
</template>
<script>
  export default {
    name: 'share-btn'
  }
</script>
<style scoped lang="less">
  @import "../assets/var.less";

  .share-btn {
    img {
      vertical-align: middle;
      margin-right: 10px;
    }
    span {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
</style>
