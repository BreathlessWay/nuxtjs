<template>
  <div class="wrap" ref="scrollContainer">
    <div class="users" v-if="users.length > 0">
      <div class="user" v-for="user in users">
        <img class="avatar" :src="user.cover_link" height="40" alt="">
        <h2>{{ user.title }}</h2>
      </div>
    </div>
    <mugen-scroll class="you-can-add-custom-class-name" :handler="fetchUsers" :should-handle="!loading" scroll-container="scrollContainer">
      <span class="loading dots"></span>
    </mugen-scroll>
  </div>
</template>

<script>
  import http from 'axios'
  import MugenScroll from 'vue-mugen-scroll'

  export default {
    name: 'app',
    layout: 'phone',
    data () {
      return {
        users: [],
        page: 1,
        loading: false,
        totalPage: 100
      }
    },
    methods: {
      async fetchUsers () {
        if (this.page <= this.totalPage) {
          this.loading = true
          const result = await http.get('articles', {
            params: {
              ...{
                page: 1,
                count: 10,
                tags: '',
                type: 'articles'
              },
              ...{
                page: this.page
              }
            }
          }).then(res => res.data)
          this.totalPage = result.meta.pagination.total_pages
          this.users = [...this.users, ...result.data]
          this.page++
          this.loading = false
        }
      }
    },
    components: {
      MugenScroll
    }
  }
</script>

<style lang="less">
  body {
    height: 100vh;
    overflow: hidden;
  }

  .wrap {
    max-width: 400px;
    height: calc(~ "100vh - 50px");
    margin: 0 auto;
    overflow-y: auto;
  }
</style>
