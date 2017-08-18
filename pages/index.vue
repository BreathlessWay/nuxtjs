<template>
  <article class="blog-index">
    <header class="blog-index_banner"></header>
    <section class="blog-index_wrap">
      <article class="blog-index_content">
        <ul class="nav nav-pills text-center">
          <li role="presentation" v-for="(list,index) in title" :key="index" :class="{active:index===activeIndex}">
            <a href="#" @click.prevent="handleTabsClick(index,list.name)">{{list.name}}</a>
          </li>
        </ul>
        <ul class="blog-index_img" v-show="articleBase.response.list.length>0">
          <li v-for="(list,index) in articleBase.response.list" :key="index" class="col-sm-4">
            <img :src=list.cover_link :alt=list.title class="blog-index_workList" @click="getWorkDetail(list.id)">
          </li>
          <li class="clearfix"></li>
        </ul>
        <div class="text-center" v-show="articleBase.response.list.length === 0">
          <div class="white-space"></div>
          <img src="../static/index-no-data.png" alt="暂无作品" width="298" height="241">
          <div class="white-space"></div>
        </div>
        <aside class="blog-index_more text-center">
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
      title: '大胖的博客',
      meta: [
        {hid: 'description', name: 'description', content: 'smalltiger blog'}
      ]
    },
    asyncData ({error}) {
      return axios.get('tags', {params: {type: 'works'}})
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
        activeIndex: 0
      }
    },
    computed: {
      articleBase () {
        return this.$store.state.home[this.title[this.activeIndex].name] ? this.$store.state.home[this.title[this.activeIndex].name] : this.$store.state.home.articleBase
      }
    },
    components: {
      //      'loading': require('~/components/loading.vue').default
    },
    mounted () {
      this.getArticleList({tags: this.title[0].name})
    },
    methods: {
      getArticleList (params) {
        this.$store.dispatch(mutationTypes.GET_ARTICLE_LIST, {...this.articleBase.request, ...params})
          .catch(err => {
            alert(err)
          })
          .finally(() => {
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
      },
      getWorkDetail (id) {
        this.$router.push({name: 'work-detail-id', params: {id}})
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/var";

  #blog-index_list {
    min-height: 50px;
  }

  .blog-index {
    .blog-index_banner {
      background: url("../static/banner.png") @banner-background no-repeat center;
      background-size: cover;
      width: 100%;
      height: calc(~"100vh - 140px");
    }

    .blog-index_wrap {
      width: 100%;
      background: @background-color-default;
    }
    .blog-index_content {
      max-width: @max-width;
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
      .nav-pills > li {
        display: inline-block;
        float: none;
        padding: 45px 15px;
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
        padding-bottom: @MP30PX;
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
    @media (max-width: @client-max-width) {
      .blog-index_banner {
        height: calc(~"100vh - 50px");
      }

      .blog-index_content {
        .nav-pills {
          display: flex;
          justify-content: space-between;
          li {
            padding: 15px 0 0;
          }
        }
      }
    }
    .blog-index_workList {
      cursor: pointer;
    }
  }
</style>
