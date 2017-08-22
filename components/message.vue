<template>
  <transition name="message">
    <aside class="message" v-show="value">
      <img :src="imgSrc" alt="">
      <p>{{message}}</p>
    </aside>
  </transition>
</template>
<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'info'
      },
      message: {
        type: String,
        default: ''
      }
    },
    computed: {
      imgSrc () {
        const img = this.type ? require(`../assets/${this.type}.svg`) : ''
        return img
      }
    },
    watch: {
      value (val) {
        if (val) {
          this.close()
        }
      }
    },
    methods: {
      close () {
        setTimeout(() => {
          this.$emit('input', false)
        }, 3000)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/var.less";

  .message {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    min-width: 200px;
    box-sizing: border-box;
    border-radius: 2px;
    position: fixed;
    left: 50%;
    top: 20px;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: #fff;
    transition: opacity .3s, transform .4s;
    overflow: hidden;
    z-index: 9999;
    display: flex;
    p {
      display: inline-block;
      text-align: center;
      width: 100%;
      line-height: 40px;
      color: @color-default;
    }
  }

  .message-fade-enter, .message-fade-leave-active {
    opacity: 0;
    -ms-transform: translate(-50%, -100%);
    transform: translate(-50%, -100%)
  }
</style>
