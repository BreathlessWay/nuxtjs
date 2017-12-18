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
        <ul class="blog-index_img" v-show="workBase.response.list.length>0">
          <li v-for="(list,index) in workBase.response.list" :key="index" class="col-sm-4">
            <img :src=list.cover_link :alt=list.title class="blog-index_workList" @click="getWorkDetail(list.id)">
          </li>
          <li class="clearfix"></li>
        </ul>
        <div class="text-center" v-show="workBase.response.list.length === 0">
          <div class="white-space"></div>
          <img src="../static/index-no-data.png" alt="暂无作品" width="298" height="241">
          <div class="white-space"></div>
        </div>
        <aside class="blog-index_more text-center">
          <button type="button" class="btn btn-default" v-show="workBase.response.hasMore" @click="getMoreArticle">
            <span>查看更多</span>
          </button>
        </aside>
      </article>
    </section>
    <message v-model="show" :type="type" :message="message"></message>
  </article>
</template>

<script>
  import axios from 'axios'
  import * as mutationTypes from '../store/work/mutations'

  export default {
    head: {
      title: '大胖的作品',
      meta: [
        {hid: 'description', name: 'description', content: 'smalltiger work'}
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
        activeIndex: 0,
        show: false,
        type: '',
        message: ''
      }
    },
    computed: {
      workBase () {
        return this.$store.state.work[this.title[this.activeIndex].name] ? this.$store.state.work[this.title[this.activeIndex].name] : this.$store.state.work.workBase
      }
    },
    components: {
      'message': require('../components/message.vue').default
    },
    mounted () {
      this.getArticleList({tags: this.title[0].name})
    },
    methods: {
      getArticleList (params) {
        this.$store.dispatch(mutationTypes.GET_WORK_LIST, {...this.workBase.request, ...params})
          .catch(err => {
            this.show = true
            this.type = 'error'
            this.message = err
          })
      },
      handleTabsClick (index, name) {
        this.activeIndex = index
        this.getArticleList({tags: name})
      },
      getMoreArticle () {
        const params = {...this.workBase.request}
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
        padding: 35px 25px 40px;
        &:hover a {
          color: @color-active;
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
        padding-bottom: @MP30PX;
        li {
          padding: 0 33px 34px 0;
          text-align: center;
          img {
            width: 100%;
            max-width: 300px;
            transition: all 0.4s ease;
            &:hover {
              box-shadow: 0 12px 43px 1px rgba(68, 68, 68, .2);
              transform: translateY(-15px);
            }
          }
        }
      }
      .blog-index_more {
        .btn-default {
          transition: all 0.5s;
          border-radius: 40px;
          width: 250px;
          height: 40px;
          margin-bottom: @MP30PX;
        }
        .btn:after {
          color: @background-color;
          content: '>';
          margin-left: 0;
          font-weight: 700;
        }
        .btn span {
          transition: all 0.5s;
        }
        .btn:hover {
          &:after {
            color: #333;
          }
        }
        .btn:hover span {
          margin-right: 10px;
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
        .blog-index_img {
          li {
            padding: 33px 0 0
          }
        }
      }
    }
    .blog-index_workList {
      cursor: pointer;
    }
  }
</style>
