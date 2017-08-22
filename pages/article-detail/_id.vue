<template>
  <article class="article-detail">
    <section class="article-detail_container">
      <article class="article-detail_content">
        <div class="visible-xs-block work-detail-btn_share text-center">
          <share-btn></share-btn>
        </div>
      </article>
      <div class="article-detail_nav hidden-xs text-center">
        <ul class="article-detail_nav_list">
          <li>
            <a href="#">
              分享给朋友
            </a>
          </li>
          <li>
            <a href="#">
              上一篇文章
            </a>
          </li>
          <li>
            <a href="#">
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
      return axios.get(`articles/${params.id}`)
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
      return {}
    },
    mounted () {
      this.$qRCode(
        'qrcode', {
          text: window.location.href,
          width: 128,
          height: 128,
          colorDark: '#000000',
          colorLight: '#ffffff'
        }
      )
    },
    components: {
      'share-btn': require('../../components/share-btn.vue').default
    },
    methods: {}
  }
</script>
<style lang="less">
  @import "../../assets/var";

  #qrcode {
    width: 125px;
    height: 125px;
  }

  .article-detail {
    max-width: @max-width;
    margin: 40px auto 20px;
    @media (max-width: @client-max-width) {
      & {
        margin-top: 20px;
      }
    }
    .article-detail_container {
      display: flex;
      justify-content: space-around;
      .article-detail_content {
        width: 100%;
      }
      .article-detail_nav {
        a {
          color: @color-active;
          &:hover {
            text-decoration: none;
            color: @color-default;
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
    }
  }
</style>
