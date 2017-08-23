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
              <img src="../static/blog-logo.png" alt="logo">
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
        &:hover a {
          color: @color-active;
        }
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
  }
</style>
<script>
  export default {}
</script>
