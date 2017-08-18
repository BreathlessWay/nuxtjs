<template>
  <article class="article-index">
    <section class="row">
      <div class="col-sm-12">
        <article class="article-index_list">
          <section class="article-index_no_article text-center">
            <img src="../static/no-article.png" alt="暂无文章">
          </section>
        </article>
      </div>
      <div class="article-index_nav hidden-xs text-center">
        <ul>
          <li v-for="(list,index) in title" :key="index" @click="getArticleList(list.name)">
            {{list.name}}
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'article-index',
    asyncData ({error}) {
      return axios.get('tags', {params: {type: 'articles'}})
        .then(res => {
          res.data.data.push({name: '全部文章'})
          return {
            title: res.data.data.reverse()
          }
        })
        .catch(err => {
          error({statusCode: err.status || 404, message: err.message || 'Page not found'})
        })
    },
    created () {
    },
    mounted () {
    },
    methods: {
      getArticleList (name) {}
    }
  }
</script>

<style lang="less">
  @import "../assets/var";

  .article-index {
    max-width: @max-width;
    margin: 22px auto 0;
    .article-index_nav {
      float: right;
      width: 160px;
      background: @background-color-default;
      margin: auto;
    }
    .article-index_list {
      background: @background-color-default;
      margin: auto;
      padding: 40px;
      .article-index_no_article{
        img{
          max-width: 100%;
          padding: 200px 0;
        }
      }
    }
  }
  @media (max-width: @client-max-width){
    .article-index {
      .article-index_list {
        padding: 20px;
        .article-index_no_article{
          img{
            max-width: 100%;
            padding: 50px 0;
          }
        }
      }
    }
  }
</style>
