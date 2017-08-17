<template>
  <article class="blog">
    <header class="blog-header">
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid blog-max-width">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <nuxt-link class="navbar-brand" to="/">
              <img src="../static/logo.png" alt="logo">
            </nuxt-link>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <nuxt-link tag="li" active-class="active" class="text-center" to="/" exact>
                <a>
                  <span class="blog-header_en">Work</span>
                  <br>
                  <span class="blog-header_cn">作品</span>
                </a>
              </nuxt-link>
              <nuxt-link tag="li" active-class="active" class="text-center" to="/me" exact>
                <a>
                  <span class="blog-header_en">Me</span>
                  <br>
                  <span class="blog-header_cn">我</span>
                </a>
              </nuxt-link>
              <nuxt-link tag="li" active-class="active" class="text-center" to="/article" exact>
                <a>
                  <span class="blog-header_en">Blog</span>
                  <br>
                  <span class="blog-header_cn">文章</span>
                </a>
              </nuxt-link>
              <nuxt-link tag="li" active-class="active" class="text-center" to="/share" exact>
                <a>
                  <span class="blog-header_en">Share</span>
                  <br>
                  <span class="blog-header_cn">分享</span>
                </a>
              </nuxt-link>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
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
            <p>
              <img :src="baseConfig.wechat_public" alt="公众微信号" width="126" height="126">

            </p>
            <img :src="baseConfig.wechat_personal" alt="个人微信号" width="126" height="126"> &nbsp;&nbsp;&nbsp;
          </div>
        </section>
      </article>
    </footer>
  </article>
</template>

<style lang="less">
  @import "../assets/var";

  .blog {
    .blog-max-width {
      max-width: @max-width;
      margin: auto;
    }
    .blog-header {
      height: 140px;
      .navbar-default {
        padding: 34px 0 34px;
        border: none;
        background: @background-color-default;
      }
      .navbar-default .navbar-nav > li {
        padding: 0 20px;
      }
      .navbar-default .navbar-nav > li > a {
        color: @color-default;
      }
      .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {
        color: @color-active;
        background: none;
      }
      .blog-header_en {
        font-size: 18px;
      }
      .blog-header_cn {
        font-size: 13px;
      }
    }
    .blog-footer {
      padding: 30px 15px;
      margin-top: 22px;
      background: @background-color-default;
      .blog-footer_copyright {
        padding-top: 30px;
        color: @color-active;
        font-size: 13px;
      }
      .blog-footer_btn {
        padding-top: 26px;
        a {
          margin: 0 32px;
        }
      }
    }
  }

  @media (min-width: @client-max-width) {
    .blog .blog-header .navbar-brand {
      margin-left: 15px;
      padding: 0;
      img {
        margin-top: -5px;
        width: 152px;
      }
    }

    #bs-example-navbar-collapse-1 {
      float: right;
    }
  }

  @media (max-width: @client-max-width) {
    .blog .blog-header {
      height: 60px;
    }

    .blog .blog-header .navbar-default {
      padding: 5px 0;
    }

    .blog-header {
      .navbar-brand {
        img {
          position: absolute;
          top: 10px;
          left: 0;
          right: 0;
          margin: auto;
          width: 80px;
        }
      }
    }

    .blog-footer {
      .blog-footer_code {
        text-align: center;
        margin-top: 30px;
      }
    }
  }
</style>
<script>
  import * as mutationTypes from '../store/home/mutations'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters(['baseConfig'])
    },
    created () {
      this.$store.dispatch(mutationTypes.GET_BASE_SETTING)
        .catch(() => {
          this.$message({
            type: 'error',
            message: '接口请求失败'
          })
        })
    }
  }
</script>
