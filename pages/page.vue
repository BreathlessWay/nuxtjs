<template>
  <article class="page">
    page
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
    head: {
      title: 'page',
      meta: [
        {hid: 'description', name: 'description', content: 'page'},
        {hid: 'author', name: 'author', content: 'me'}
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
    }
  }
</script>
