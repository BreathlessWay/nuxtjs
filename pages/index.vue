<template>
  <article class="blog-index">
    <header class="blog-index_banner">
      <img src="../static/banner.png" alt="">
    </header>
    <section class="blog-index_content">
      <ul class="nav nav-pills nav-justified">
        <li role="presentation" v-for="(list,index) in title" :key="index" :class="{active:index===activeIndex}" v-if="list.type==='works'">
          <a href="#" @click.prevent="handleTabsClick(index,list.name)">{{list.name}}</a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
  import axios from 'axios'
  import * as mutationTypes from '../store/home/mutations'

  export default {
    head: {
      title: 'Home',
      meta: [
        {hid: 'description', name: 'description', content: 'smalltiger blog'}
      ]
    },
    asyncData ({store, error}) {
      return axios.get('tags')
        .then(res => {
          const title = res.data.data.reverse()
          return {
            title: title
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
    computed: {
      articleBase () {
        return this.$store.state.home.articleBase
      }
    },
    components: {},
    mounted () {
      this.getArticleList({tags: this.title[0].name})
    },
    methods: {
      getArticleList (params) {
        this.$store.dispatch(mutationTypes.GET_ARTICLE_LIST, {...this.articleBase.request, ...params})
          .then(res => {
            console.log(res)
          })
      },
      handleTabsClick (index, name) {
        this.activeIndex = index
        this.getArticleList({tags: name})
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/var";

  .blog-index {
    @media (max-width: 768px) {
      .nav-justified {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }

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
        height: 40px;
        white-space: nowrap;
        text-overflow: ellipsis;
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
