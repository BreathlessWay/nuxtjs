<template>
  <article>
    wrong
  </article>
</template>

<style>

</style>

<script>
  import axios from 'axios'

  export default {
    name: 'wrong',
    asyncData ({error}) {
      return axios.get('/wrong')
        .then(res => {
          return {
            title: res.title
          }
        })
        .catch(err => {
          error({status: err.status, message: '资源不存在'})
        })
    }
  }
</script>
