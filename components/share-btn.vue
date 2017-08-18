<template>
  <section class="share-btn">
    <span>分享到：</span>
    <div class="jiathis_style_32x32">
      <a class="jiathis_button_tsina"></a>
      <a class="jiathis_button_douban"></a>
      <a class="jiathis_button_huaban"></a>
      <a class="jiathis_button_cqq"></a>
      <a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'share-btn',
    mounted () {}
  }
</script>
<style lang="less">
  @import "../assets/var.less";

  .share-btn {
    span {
      display: inline-block;
      vertical-align: middle;
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
</style>
