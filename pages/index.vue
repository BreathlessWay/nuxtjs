<template>
  <article class="blog-index">
    <header class="blog-index_banner">
      <img src="../static/banner.png" alt="">
    </header>
    <section class="blog-index_content">
      <ul class="nav nav-pills nav-justified">
        <li role="presentation" v-for="(list,index) in title" :key="index" :class="{active:index===activeIndex}">
          <a href="#" @click.prevent="handleTabsClick(index)">{{list.name}}</a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
  import axios from 'axios'

  export default {
    asyncData ({error}) {
      return axios.get('tags')
        .then(res => {
          return {
            title: res.data.data.reverse()
          }
        })
        .catch(err => {
          error({statusCode: err.status || 404, message: err.message || 'Page not found'})
        })
    },
    data () {
      return {
        title: '主页',
        activeIndex: 0
      }
    },
    components: {},
    created () {
    },
    methods: {
      handleTabsClick (index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/var";

  .blog-index {
    .blog-index_banner {
      img {
        width: 100%;
      }
    }
    .blog-index_content {
      max-width: 1349px;
      margin: auto;
      .nav > li > a {
        color: @color-default;
        &:hover {
          background: none;
        }
      }
      .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {
        color: @color-active;
        background: none;
        font-size: 15px;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          top: 36px;
          left: 0;
          right: 0;
          width: 40px;
          height: 2px;
          background: @color-active;
          margin: auto;
        }
      }
    }
  }
</style>
