<template>
  <article class="work-detail">
    <article class="work-detail_content">
      <header class="row">
        <h3 class="work-detail_title col-sm-9 col-xs-12">{{detail.data.title}}</h3>
        <aside class="col-sm-3 work-detail_swiper hidden-xs">
          <span class="glyphicon glyphicon-menu-left" v-show="detail.data.prev_slug" @click="$router.push({name:'work-detail-id',params:{id:detail.data.prev_slug}})"></span>
          <span>|</span>
          <span class="glyphicon glyphicon-menu-right" v-show="detail.data.next_slug" @click="$router.push({name:'work-detail-id',params:{id:detail.data.next_slug}})"></span>
        </aside>
        <p class="col-xs-12 work-detail_count">
          <span class="glyphicon glyphicon-eye-open"></span>
          <span>{{detail.data.view_count}}</span>
          <span class="glyphicon glyphicon-time"></span>
          <span>{{new Date(detail.data.published_at * 1000).Format('yyyy.MM.dd')}}</span>
        </p>
      </header>
      <section class="text-center">
        <img :src="detail.data.cover_link" :alt="detail.data.desc" style="max-width: 100%">
      </section>
    </article>
    <section class="work-detail-btn row">
      <div class="col-sm-6 work-detail-btn_good col-xs-12">
        <good-btn :goodCount.sync="detail.data.vote_count" @input="handleInput"></good-btn>
      </div>
      <div class="col-sm-6 work-detail-btn_share col-xs-12">
        <share-btn></share-btn>
      </div>
    </section>
    <message v-model="show" :type="type" :message="message"></message>
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
      return {
        show: false,
        type: '',
        message: ''
      }
    },
    components: {
      'good-btn': require('../../components/good-btn.vue').default,
      'share-btn': require('../../components/share-btn.vue').default,
      'message': require('../../components/message.vue').default
    },
    methods: {
      handleInput (val) {
        axios.post(`articles/${this.$route.params.id}/vote`)
          .then(res => {
            console.log(res)
            const info = res > this.detail.data.vote_count ? '点赞成功' : '取消点赞'
            const type = res > this.detail.data.vote_count ? 'success' : 'info'
            this.detail.data.vote_count = val
            console.log(info, type)
          })
          .catch(err => {
            this.show = true
            this.type = 'error'
            this.message = err
          })
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/var";

  .work-detail {
    max-width: @max-width;
    margin: auto;
    @media (max-width: @client-max-width) {
      & {
        margin-top: 20px;
      }
    }
    .work-detail_content {
      padding: 40px;
      background: @background-color-default;
    }
    .work-detail_title {
      color: @color-active;
      font-size: 24px;
      font-weight: 600;
      margin: 0;
      padding: 0;
    }
    .work-detail_swiper {
      text-align: right;
      span {
        color: @page-change-default;
        margin: 0 10px;
        vertical-align: middle;
      }
      .glyphicon {
        transition: all 0.4s ease;
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
          color: @page-change-active;
        }
      }
    }
    .work-detail_count {
      margin: 20px 0 40px;
      padding: 0 0 30px;
      border-bottom: @detail-border-bottom;
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
      }
    }
    .work-detail-btn {
      margin: 15px 0;
      background: @background-color-default;
      padding: 35px;
      font-size: 12px;
      color: @color-default;
      .work-detail-btn_good.col-xs-12 {
      }
      .work-detail-btn_share.col-xs-12 {
        text-align: right;
      }
      @media (max-width: @client-max-width) {
        & {
          padding: 20px 0;
        }

        .work-detail-btn_good.col-xs-12 {
          text-align: center;
          margin-bottom: 20px;
        }

        .work-detail-btn_share.col-xs-12 {
          text-align: center;
        }
      }
    }
  }
</style>
