<template>
  <article class="blog">
    <header class="share-header text-center">
      <img src="../static/share-logo.png" alt="">
      <br>
      <a href="/" class="btn btn-default">
        <span>个人主页</span>
      </a>
      <br>
      <a :href="'mailto:'+baseConfig.email" class="share-header_intro">
        推荐链接
      </a>
    </header>
    <div class="clearfix"></div>
    <nuxt/>
    <footer class="container-fluid blog-footer">
      <article class="blog-max-width">
        <section class="row">
          <div class="col-sm-6 col-xs-12 text-center">
            <p class="blog-footer_btn">
              <a :href="baseConfig.weibo_link" target="_blank">
                <img src="../static/footer-2.png" alt="新浪微博">
              </a>
              <a :href="baseConfig.dribbble_link" target="_blank">
                <img src="../static/footer-1.png" alt="dribbble">
              </a>
              <a :href="'mailto:'+baseConfig.email">
                <img src="../static/footer-3.png" alt="邮箱">
              </a>
            </p>
            <p class="blog-footer_copyright">
              Copyright © 2017 SMALLTIGER </p>
          </div>
          <div class="col-sm-6 col-xs-12 blog-footer_code">
            <p class="text-center">
              <img :src="baseConfig.wechat_public" alt="公众微信号" width="126" height="126">
              <br>
              <span>微信公众号</span>
            </p> &nbsp;&nbsp;&nbsp;&nbsp; <p class="text-center">
            <img :src="baseConfig.wechat_personal" alt="个人微信号" width="126" height="126">
            <br>
            <span>微信公众号</span>
          </p>
          </div>
        </section>
      </article>
    </footer>
    <message v-model="show" :type="type" :message="message"></message>
  </article>
</template>

<style lang="less">
  @import "../assets/var";

  .blog {
    .blog-max-width {
      max-width: @max-width;
      margin: auto;
    }
    .share-header {
      padding: 80px 30px 50px;
      background: url("../static/share-bg.png") repeat;
      img {
        max-width: 100%;
      }
      .btn-default {
        margin-top: @MP30PX;
        background: none;
        border-radius: 40px;
        border-color: #000;
        padding: 5px 40px;
        &:before {
          content: url("../static/sharn-icon.png");
          width: 24px;
          height: 24px;
          vertical-align: middle;
          display: inline-block;
        }
        span {
          margin-left: 10px;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .share-header_intro {
        color: #000;
        display: inline-block;
        margin-top: @MP30PX;
      }
    }
    .blog-footer {
      padding: 30px 15px;
      margin-top: 20px;
      background: @background-color-default;
      .blog-footer_copyright {
        padding-top: 30px;
        color: @color-active;
        font-size: 13px;
      }
      .blog-footer_btn {
        padding-top: 40px;
        a {
          margin: 0 32px;
        }
      }
      .blog-footer_code {
        p {
          display: inline-block;
          width: 126px;
          img {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  @media (max-width: @client-max-width) {
    .blog-footer {
      .blog-footer_code {
        text-align: center;
        margin-top: 30px;
      }
      .blog-footer_btn {
        padding-top: 10px !important;
      }
    }
  }
</style>
<script>
  import * as mutationTypes from '../store/entry/mutations'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        show: false,
        type: '',
        message: ''
      }
    },
    computed: {
      ...mapGetters(['baseConfig'])
    },
    components: {
      'message': require('../components/message.vue').default
    },
    mounted () {
      this.$store.dispatch(mutationTypes.GET_BASE_SETTING)
        .catch(err => {
          this.show = true
          this.type = 'error'
          this.message = err
        })
    }
  }
</script>
