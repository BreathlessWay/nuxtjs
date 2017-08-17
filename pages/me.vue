<template>
  <article class="text-center me-index">
    <img src="../static/me.png" alt="关于我">
    <section class="me-index_toast">
      <a :href="baseConfig.resume_link" target="_blank" class="me-index_download text-center" v-if="baseConfig.resume_link">
        <p>下</p>
        <p>载</p>
        <p>简</p>
        <p>历</p>
      </a>
    </section>
  </article>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'me',
    computed: {
      ...mapGetters(['baseConfig'])
    }
  }
</script>
<style lang="less">
  @import "../assets/var";

  .me-index {
    max-width: @max-width;
    margin: auto;
    background: @background-color-default;
    padding: 200px 0;
    img {
      max-width: 90%;
    }
    @media (max-width: @client-max-width) {
      & {
        padding: 40px 0;
      }
    }
    .me-index_toast {
      position: fixed;
      max-width: 602px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    .me-index_download {
      p {
        margin: 0;
        padding: 0;
      }
      cursor: pointer;
      position: absolute;
      top: 40%;
      right: 2%;
      display: inline-block;
      padding: 12px 0;
      width: 38px;
      height: 104px;
      border: 1px solid @color-default;
      border-radius: 40px;
      color: @color-default;
      &:hover {
        text-decoration: none;
        color: @color-active;
        border-color: @color-active;
      }
    }
  }
</style>
