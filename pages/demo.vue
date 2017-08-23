<template>
  <article class="demo">
    <transition name="demo">
      <div style="width: 50px;height: 50px;background: #000" v-show="show"></div>
    </transition>
    <button @click="handleClick">transition</button>
  </article>
</template>
<script>
  export default {
    name: 'demo',
    data () {
      return {
        show: false
      }
    },
    methods: {
      handleClick () {
        this.show = !this.show
      }
    }
  }
</script>
<style>
  .demo-enter-active, .demo-leave-active {
    transition: all .5s;
    transform: translateY(0);
  }

  .demo-enter, .demo-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
    transform: translateY(-100%);
  }
</style>
