<template>
  <article class="blog-index">
    <header class="blog-index_banner"></header>
    <section class="blog-index_wrap">
      <article class="blog-index_content">
        <ul class="nav nav-pills nav-justified">
          <li role="presentation" v-for="(list,index) in title" :key="index" :class="{active:index===activeIndex}" v-if="list.type==='works'">
            <a href="#" @click.prevent="handleTabsClick(index,list.name)">{{list.name}}</a>
          </li>
        </ul>
        <loading v-show="showLoading"></loading>
        <ul class="blog-index_img" v-show="!showLoading && articleBase.response.list.length>0">
          <li v-for="(list,index) in articleBase.response.list" :key="index" class="col-sm-4">
            <img :src=list.cover_link :alt=list.title>
          </li>
          <li class="clearfix"></li>
        </ul>
        <div class="text-center" v-show="!showLoading && articleBase.response.list.length === 0">
          <div class="white-space"></div>
          <img src="../static/index-no-data.png" alt="暂无作品" width="298" height="241">
          <div class="white-space"></div>
        </div>
        <aside v-show="!showLoading" class="blog-index_more text-center">
          <button type="button" class="btn btn-default" v-show="articleBase.response.hasMore" @click="getMoreArticle">
            <span>查看更多</span>
          </button>
        </aside>
      </article>
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
        activeIndex: 0,
        showLoading: true
      }
    },
    computed: {
      articleBase () {
        return this.$store.state.home.articleBase
      }
    },
    components: {
      'loading': require('../components/loading.vue').default
    },
    mounted () {
      this.getArticleList({tags: this.title[0].name})
    },
    methods: {
      getArticleList (params) {
        this.showLoading = true
        this.$store.dispatch(mutationTypes.GET_ARTICLE_LIST, {...this.articleBase.request, ...params})
          .catch(err => {
            alert(err)
          })
          .finally(() => {
            this.showLoading = false
          })
      },
      handleTabsClick (index, name) {
        this.activeIndex = index
        this.getArticleList({tags: name})
      },
      getMoreArticle () {
        const params = {...this.articleBase.request}
        const page = params.page + 1
        params.count = page * params.count
        this.getArticleList(params)
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
      background: url("../static/banner.png") no-repeat center fixed;
      background-size: cover;
      width: 100%;
      height: 900px;
    }

    .blog-index_wrap {
      width: 100%;
      background: #fff;
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
      .blog-index_img {
        margin: 0;
        padding: 0 0 @MP30PX 0;
        list-style: none;
        li {
          padding-top: @MP30PX;
          text-align: center;
          img {
            width: 100%;
            max-width: 300px;
            transition: all 0.4s ease;
            &:hover {
              box-shadow: 0 22px 43px 1px rgba(68, 68, 68, .2);
              transform: translateY(-15px);
            }
          }
        }
      }
      .blog-index_more {
        .btn:hover {
          &:after {
            content: '>';
            margin-left: 10px;
            font-weight: 700;
          }
        }
      }
    }
  }
</style>
