<template>
  <section class="share-btn">
    <span>分享到：</span>
    <a :href="list.link" v-for="(list,index) in shareBase.response.list" :key="index">
      <img :src="list.logo" alt="" width="24" height="24">
    </a>
  </section>
</template>
<script>
  export default {
    name: 'share-btn',
    computed: {
      shareBase () {
        return this.$store.state.workDetail.shareIcon
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/var.less";

  .share-btn {
    img {
      margin-right: 10px;
    }
    span {
      margin-right: 5px;
      vertical-align: middle;
    }
  }
</style>
