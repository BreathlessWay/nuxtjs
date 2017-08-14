<template>
  <article>
    <header>header</header>
    <nuxt/>
    <footer>footer</footer>
  </article>
</template>

<style></style>
<script>
  export default {
    data () {
      return {}
    },
    created () {
      console.log(this.$route)
    },
    components: {}
  }
</script>
