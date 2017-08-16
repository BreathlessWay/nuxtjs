<template>
  <article class="blog">
    <header class="blog-header">
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid" style="max-width:1366px;">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
              <img src="../static/logo.png" alt="logo">
            </a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active text-center">
                <a href="/">
                  <span class="blog-header_en">Work</span>
                  <br>
                  <span class="blog-header_cn">作品</span>
                </a>
              </li>
              <li class="text-center">
                <a href="/">
                  <span class="blog-header_en">Me</span>
                  <br>
                  <span class="blog-header_cn">我</span>
                </a>
              </li>
              <li class="text-center">
                <a href="/">
                  <span class="blog-header_en">Blog</span>
                  <br>
                  <span class="blog-header_cn">文章</span>
                </a>
              </li>
              <li class="text-center">
                <a href="/">
                  <span class="blog-header_en">Share</span>
                  <br>
                  <span class="blog-header_cn">分享</span>
                </a>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
    </header>
    <nuxt/>
    <footer class="container-fluid blog-footer">
      <section class="row">
        <div class="col-sm-6 col-xs-12 text-center">
          <p class="blog-footer_btn">
            <a href="http://weibo.com/3753729900/profile?rightmod=1
&wvr=6&mod=personinfo&is_all=1">
              <img src="../static/footer-1.png" alt="新浪微博">
            </a>
            <a href="https://dribbble.com/smalltiger">
              <img src="../static/footer-2.png" alt="dribbble">
            </a>
            <a href="mailto:nianzuotian@163.com">
              <img src="../static/footer-3.png" alt="邮箱">
            </a>
          </p>
          <p class="blog-footer_copyright">
            Copyright © 2017 SMALLTIGER </p>
        </div>
        <div class="col-sm-6 col-xs-12 blog-footer_code">
          <img src="../static/footer-4.png" alt="二维码" width="126" height="126"> &nbsp;&nbsp;&nbsp; <img src="../static/footer-5.png" alt="二维码" width="126" height="126">
        </div>
      </section>
    </footer>
  </article>
</template>

<style lang="less">
  @import "../assets/var";

  .blog {
    .blog-header {
      .navbar-default {
        padding: 34px 0 34px;
        border: none;
        background: #fff;
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
      p {
        margin: 0;
        padding: 0;
      }
      margin-top: 22px;
      background: #fff;
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

  @media (min-width: 768px) {
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

  @media (max-width: 760px) {
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
  export default {
    data () {
      return {}
    },
    created () {
    },
    components: {}
  }
</script>
