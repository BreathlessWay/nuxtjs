<template>
  <section class="good-btn">
    <a href="#" @click.prevent="handleClick">
      <img src="../static/good.png" alt="" width="23" height="24">
    </a>
    <span>{{goodCount}}人赞过</span>
  </section>
</template>
<script>
  export default {
    name: 'good-btn',
    props: {
      goodCount: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {}
    },
    methods: {
      handleClick () {
        this.$emit('input', this.goodCount + 1)
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/var.less";

  .good-btn {
    img {
      vertical-align: baseline;
    }
    span {
      margin-left: 5px;
      vertical-align: text-bottom;
    }
  }
</style>
