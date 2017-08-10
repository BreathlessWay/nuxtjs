<template>
  <article class="page">
    page{{project}}
  </article>
</template>

<style lang="less">
  .page {
    display: flex;
  }
</style>

<script>
  export default {
    name: 'page',
    asyncData (context) {
      console.log(context)
      return {project: 'nuxt'}
    },
    data () {
      return {project: 'default'}
    },
    head () {
      return {
        title: 'page',
        meta: [
          {hid: 'description', name: 'description', content: 'page'},
          {hid: 'author', name: 'author', content: 'fuck'}
        ],
        link: [
          {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
      }
    }
  }
</script>
