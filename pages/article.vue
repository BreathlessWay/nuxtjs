<template>
  <article class="article-index">
    <section class="article-index_container">
      <article class="article-index_list">
        <section class="article-index_no_article text-center" v-show="articleBase.response.list.length === 0 ">
          <img src="../static/no-article.png" alt="暂无文章">
        </section>
        <ul class="article-index-content_list">
          <li v-for="(list,index) in articleBase.response.list" class="media" @click="getArticleDetail(list.id)">
            <div class="media-left">
              <img class="media-object" :src="list.cover_link" :alt="list.slug">
            </div>
            <div class="media-body">
              <h4 class="media-heading">{{list.title}}</h4>
              <p>{{list.desc}}</p>
              <p>{{new Date(list.published_at * 1000).Format('yyyy.MM.dd')}}</p>
            </div>
          </li>
        </ul>
        <div class="white-space" style="margin-bottom: 10px"></div>
        <!--<pagination v-show="articleBase.response.list.length>0" :pageIndex="articleBase.request.page" :pageSize="articleBase.request.count" :total="articleBase.response.total" @changePage="changePage" v-if="needPage"></pagination>-->
        <aside class="blog-index_more text-center">
          <button type="button" class="btn btn-default" v-show="articleBase.response.hasMore" @click="getMoreArticle">
            <span>查看更多</span>
          </button>
        </aside>
      </article>
      <div class="article-index_nav hidden-xs text-center">
        <div class="article-index_nav_contain">
          <ul class="article-index_nav_list">
            <li v-for="(list,index) in title" :key="index" @click="getArticleList(list.name,index)" :class="{'article-title_active':index === activeIndex}">
              <!--{{list.name + '(' + list.order_column + ')'}}-->
              {{list.name}}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <message v-model="show" :type="type" :message="message"></message>
  </article>
</template>
<script>
  import axios from 'axios'
  import * as mutationTypes from '../store/article/mutations'

  export default {
    name: 'article-index',
    head: {
      title: '文章',
      meta: [
        {hid: 'description', name: 'description', content: 'smalltiger blog'}
      ]
    },
    middleware: ['clientFilter'],
    asyncData ({error}) {
      return axios.get('tags', {params: {type: 'articles'}})
        .then(res => {
          const all = {
            name: '全部文章',
            'order_column': 0
          }
          res.data.data.forEach(list => {
            all['order_column'] += list['order_column']
          })
          res.data.data.push(all)
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
        message: '',
        needPage: true
      }
    },
    computed: {
      articleBase () {
        return this.$store.state.article[this.title[this.activeIndex].name] ? this.$store.state.article[this.title[this.activeIndex].name] : this.$store.state.article.articleBase
      }
    },
    mounted () {
      if (document.documentElement.clientWidth < 700) {
        this.needPage = false
      }
      this.getList()
    },
    components: {
      'pagination': require('../components/pagination.vue').default,
      'message': require('../components/message.vue').default
    },
    methods: {
      getMoreArticle () {
        const params = {...this.articleBase.request}
        const page = params.page + 1
        params.count = page * params.count
        this.getList(params)
      },
      getList (params) {
        this.$store.dispatch(mutationTypes.GET_ARTICLE_LIST, {...this.articleBase.request, ...params})
          .catch(err => {
            this.show = true
            this.type = 'error'
            this.message = err
          })
      },
      getArticleList (name, index) {
        this.activeIndex = index
        name === '全部文章' ? this.getList({tags: ''}) : this.getList({tags: name})
      },
      getArticleDetail (id) {
        this.$router.push({name: 'article-detail-id', params: {id}})
      },
      changePage (page) {
        this.getList({page})
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/var";

  .article-index {
    max-width: @max-width;
    margin: 40px auto;
    .article-index_container {
      display: flex;
      justify-content: space-around;
      .article-index_list {
        background: @background-color-default;
        padding: 40px;
        width: 100%;
        .article-index_no_article {
          img {
            max-width: 100%;
            padding: 200px 0;
          }
        }
        .article-index-content_list {
          li.media {
            cursor: pointer;
            margin-bottom: 40px;
            transition: all 0.4s ease;
            color: #75818d;
            font-size: 12px;
            h4 {
              margin-top: 15px;
              font-size: 18px;
              color: @color-active;
            }
            p:first-of-type {
              margin: 20px 0;
              font-size: 13px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
            &:last-of-type {
              margin-bottom: 0;
            }
            &:hover {
              transform: translateX(-15px);
            }
          }
        }
      }
      .article-index_nav {
        width: 192px;
        margin-left: 20px;
        .article-index_nav_contain {
          height: 228px;
          display: flex;
          align-items: center;
          width: 100%;
          background: @background-color-default;
        }
        .article-index_nav_list {
          width: 100%;
          height: 165px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          background: @background-color-default;
          li {
            height: 21px;
            line-height: 21px;
            font-size: 13px;
            color: @color-default;
            cursor: pointer;
            &:last-of-type {
              margin-bottom: 0;
            }
            transition: all 0.4s ease;
            &:hover {
              font-size: 15px;
              color: @color-active;
            }
          }
          .article-title_active {
            font-size: 15px;
            color: @color-active;
            border-left: 5px solid @color-active;
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
        border: @border-default;
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
    .article-index {
      margin: 0 auto;
      .article-index_container {
        .article-index_list {
          padding: 20px;
          .article-index-content_list {
            li.media {
              .media-left, .media-body {
                width: 50%;
              }
              img {
                width: 100%;
              }
              h4 {
                margin-top: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              p:first-of-type {
                margin: 16px 0;
                -webkit-line-clamp: 1;
              }
            }
            .article-index_no_article {
              img {
                max-width: 100%;
                padding: 50px 0;
              }
            }
          }
        }
      }
    }
  }
</style>
