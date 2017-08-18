<template>
  <section class="share-btn">
    <span>分享到：</span>
    <!-- JiaThis Button BEGIN -->
    <div class="jiathis_style_32x32">
      <a class="jiathis_button_qzone"></a>
      <a class="jiathis_button_tsina"></a>
      <a class="jiathis_button_weixin"></a>
      <a class="jiathis_button_huaban"></a>
      <a class="jiathis_button_douban"></a>
      <a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank" style="visibility: hidden"></a>
    </div>
    <!-- JiaThis Button END -->
  </section>
</template>
<script>
  export default {
    name: 'share-btn',
    mounted () {}
  }
</script>
<style scoped lang="less">
  @import "../assets/var.less";

  .share-btn {
    span {
      display: inline-block;
      vertical-align: middle;
    }
    .jiathis_style_32x32{
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>
