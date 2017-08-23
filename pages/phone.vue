<template>
  <article class="wrap" ref="scrollContainer">
    <section>
      <article class="article-index_list">
        <section class="article-index_no_article text-center" v-show="list.length === 0 ">
          <img src="../static/no-article.png" alt="暂无文章">
        </section>
        <ul class="article-index-content_list">
          <li v-for="(item,index) in list" class="media" @click="getArticleDetail(item.id)" :key="index">
            <div class="media-left">
              <img class="media-object" :src="item.cover_link" :alt="item.slug">
            </div>
            <div class="media-body">
              <h4 class="media-heading">{{item.title}}</h4>
              <p>{{item.desc}}</p>
              <p>{{new Date(item.published_at * 1000).Format('yyyy.MM.dd')}}</p>
            </div>
          </li>
        </ul>
      </article>
    </section>
    <mugen-scroll class="you-can-add-custom-class-name" :handler="fetchUsers" :should-handle="!loading" scroll-container="scrollContainer">
      <span class="loading dots"></span>
      loading
    </mugen-scroll>
  </article>
</template>

<script>
  import http from 'axios'
  import MugenScroll from 'vue-mugen-scroll'

  export default {
    name: 'app',
    layout: 'phone',
    head: {
      title: '大胖的文章',
      meta: [
        {hid: 'description', name: 'description', content: 'smalltiger blog'}
      ]
    },
    data () {
      return {
        list: [],
        page: 1,
        loading: false,
        totalPage: 100
      }
    },
    methods: {
      async fetchUsers () {
        console.log(this.page, this.totalPage)
        if (this.page <= this.totalPage) {
          this.loading = true
          const result = await http.get('articles', {
            params: {
              ...{
                page: 1,
                count: 5,
                tags: '',
                type: 'articles'
              },
              ...{
                page: this.page
              }
            }
          }).then(res => res.data)
          this.totalPage = result.meta.pagination.total_pages
          this.list = this.list.concat(result.data)
          this.page++
          this.loading = false
        }
      },
      getArticleDetail (id) {
        this.$router.push({name: 'article-detail-id', params: {id}})
      }
    },
    components: {
      MugenScroll
    }
  }
</script>

<style lang="less">
  @import "../assets/var";

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

  @media (max-width: @client-max-width) {
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
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
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

</style>
