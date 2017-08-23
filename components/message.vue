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
    background-color: #fff;
    overflow: hidden;
    z-index: 9999;
    display: flex;
    p {
      display: inline-block;
      text-align: center;
      width: 100%;
      padding: 0 10px;
      line-height: 40px;
      color: @color-default;
    }
  }

  .message-enter-active, .message-leave-active {
    transition: opacity .3s, transform .4s;
    transform: translateY(0)
  }

  .message-enter {
    opacity: 0;
    transform: translateY(-100%)
  }
</style>
