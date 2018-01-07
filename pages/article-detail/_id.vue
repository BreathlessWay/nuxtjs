<template>
  <article class="article-detail">
    <section class="article-detail_container">
      <article class="article-detail_content">
        <header class="article-detail_header">
          <h3 class="work-detail_title">{{detail.data.title}}</h3>
          <ul class="article-detail_tag">
            <li v-for="(list,index) in detail.data.tags" :key="index">
              {{list.name}}
            </li>
          </ul>
        </header>
        <section class="article-detail_body">
          {{detail.data.body}}
        </section>
        <footer class="article-detail_footer">
          <div class="col-xs-8 article-detail_count">
            <span class="glyphicon glyphicon-eye-open"></span>
            <span>{{detail.data.view_count}}</span>
            <span class="glyphicon glyphicon-time"></span>
            <span>{{new Date(detail.data.published_at * 1000).Format('yyyy.MM.dd')}}</span>
          </div>
          <div class="col-xs-4 article-detail_count text-right">
            <a :href="detail.data.source_link" target="_blank">
              <span class="glyphicon glyphicon-link"></span>
              <span>原文链接</span>
            </a>
          </div>
        </footer>
        <!--<aside class="hidden-xs work-detail-btn_share text-center">-->
        <!--<share-btn></share-btn>-->
        <!--</aside>-->
      </article>
      <div class="article-detail_nav hidden-xs text-center">
        <ul class="article-detail_nav_list">
          <li>
            <a href="#" @click.prevent="showModal=true">
              分享给朋友
            </a>
          </li>
          <li v-show="detail.data.prev_slug">
            <a href="#" @click.prevent="$router.push({name:'article-detail-id',params:{id:detail.data.prev_slug}})">
              上一篇文章
            </a>
          </li>
          <li v-show="detail.data.next_slug">
            <a href="#" @click.prevent="$router.push({name:'article-detail-id',params:{id:detail.data.next_slug}})">
              下一篇文章
            </a>
          </li>
        </ul>
        <div class="article-detail_code">
          <div id="qrcode"></div>
          <p>
            轻扫随时阅读 </p>
        </div>
      </div>
    </section>
    <modal :show.sync="showModal" :needBtn="false" title="分享到">
      <share-btn :needTitle="false" :customCSS="true"></share-btn>
    </modal>
  </article>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'work-detail',
    head () {
      return {
        title: this.detail.data.title,
        meta: [
          {hid: 'description', name: 'description', content: this.detail.data.desc}
        ]
      }
    },
    validate ({params}) {
      // Must be a exist
      return params.id
    },
    asyncData ({params, error}) {
      return axios.get(`articles/${params.id}`, {params: {include: 'tags'}})
        .then(res => {
          return {
            detail: res.data
          }
        })
        .catch(err => {
          error({statusCode: err.status || 404, message: err.message || 'Page not found'})
        })
    },
    data () {
      return {
        showModal: false
      }
    },
    mounted () {
      this.$qRCode(
        'qrcode', {
          text: window.location.href,
          width: 125,
          height: 125,
          colorDark: '#000000',
          colorLight: '#ffffff'
        }
      )
    },
    components: {
      'share-btn': require('../../components/share-btn.vue').default,
      'modal': require('../../components/modal.vue').default
    },
    methods: {}
  }
</script>
<style lang="less">
  @import "../../assets/var";

  .article-detail {
    max-width: @max-width;
    margin: auto;
    @media (min-width: @client-max-width) {
      & {
        margin-top: 20px;
      }
    }
    .modal-title {
      color: @color-active;
      font-size: 16px;
      text-align: center;
    }
    .modal-body {
      padding: 15px 15px 30px;
    }
    .article-detail_container {
      display: flex;
      justify-content: space-around;
      .article-detail_content {
        width: 100%;
        padding: 20px 40px;
        background: @background-color-default;
        .article-detail_header {
          border-bottom: @detail-border-bottom;
          .work-detail_title {
            color: @color-active;
            font-size: 24px;
            margin-bottom: 0;
            font-weight: 600;
          }
        }
      }
      .article-detail_nav {
        margin-left: 20px;
        a {
          color: @color-default;
          &:hover {
            text-decoration: none;
            color: @color-active;
          }
        }
        .article-detail_nav_list {
          background: @background-color-default;
          padding: 0 30px;
          li {
            padding: 20px 0;
            &:nth-of-type(2) {
              border-top: @border-top-bottom;
              border-bottom: @border-top-bottom;
            }
          }
        }
        .article-detail_code {
          margin-top: 15px;
          background: @background-color-default;
          padding: 20px 20px 0;
          p {
            padding: 15px 0;
          }
        }
      }
      .article-detail_tag {
        padding: 20px 0 40px;
        li {
          display: inline-block;
          padding: 0 15px;
          border-radius: 20px;
          background: #edf2f6;
          color: #565d64;
        }
      }
      .article-detail_body {
        min-height: calc(~'100vh - 520px');
        padding: 35px 0 20px;
        color: @color-active;
      }
      .article-detail_footer {
        display: flex;
        justify-content: space-around;
        .article-detail_count {
          padding: 0;
          span {
            color: @color-default;
            vertical-align: top;
            font-size: 13px;
            &:nth-of-type(1), &:nth-of-type(3) {
              margin-right: 8px;
            }
            &:nth-of-type(2) {
              margin-right: 44px;
            }
            @media (max-width: @client-max-width) {
              &:nth-of-type(2) {
                margin-right: 8px;
              }
            }
          }
          a {
            span:nth-of-type(2) {
              margin-right: 0;
            }
            &:hover {
              text-decoration: none;
              span {
                color: @color-active;
              }
            }
          }
        }
      }

    }
  }
</style>
