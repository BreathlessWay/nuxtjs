<template>
  <section class="share-btn" :class="{'share-btn-custom':customCSS}">
    <span v-show="needTitle" class="share-btn_title">分享到：</span>
    <div class="jiathis_style_32x32">
      <a class="jiathis_button_tsina"></a>
      <a class="jiathis_button_douban"></a>
      <a class="jiathis_button_huaban"></a>
      <a class="jiathis_button_cqq"></a>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'share-btn',
    props: {
      needTitle: {
        type: Boolean,
        default: true
      },
      customCSS: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      !document.getElementById('jiathis') && this.init()
    },
    methods: {
      init: function () {
        let url = 'http://v3.jiathis.com/code/jia.js'
        let script = document.createElement('script')
        script.setAttribute('src', url)
        script.setAttribute('id', 'jiathis')
        document.getElementsByTagName('head')[0].appendChild(script)
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/var.less";

  .share-btn {
    span {
      display: inline-block;
      vertical-align: middle;
    }
    .share-btn_title {
      color: @color-default;
    }
    .jiathis_style_32x32 {
      background: none;
      display: inline-block;
      vertical-align: middle;
      .jiathis_txt {
        background: none;
      }
      .jtico_tsina {
        background: url("../static/weibo.png") no-repeat center;
      }
      .jtico_douban {
        background: url("../static/douban.png") no-repeat center;
      }
      .jtico_huaban {
        background: url("../static/huaban.png") no-repeat center;
      }
      .jtico_cqq {
        background: url("../static/qq.png") no-repeat center;
      }
    }
  }

  .share-btn-custom {
    .jiathis_style_32x32 {
      display: flex;
      justify-content: space-between;
      width: 40%;
      margin: auto;
      padding: 20px 0;
      a {
        position: relative;
        color: @color-default;
        &:hover {
          text-decoration: none;
          opacity: 0.8;
        }
        &:after {
          position: absolute;
          white-space: nowrap;
          top: 40px;
          left: 0;
        }
      }
      .jiathis_button_tsina:after {
        content: '新浪微博';
        left: -10px;
      }
      .jiathis_button_douban:after {
        content: '豆瓣网';
      }
      .jiathis_button_huaban:after {
        content: '花瓣网';
      }
      .jiathis_button_cqq:after {
        content: 'QQ好友';
      }
    }
  }
</style>
