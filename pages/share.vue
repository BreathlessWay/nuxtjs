<template>
  <article class="share-index">
    <section class="share-index_wrap">
      <article class="share-index_content">
        <ul class="nav nav-pills text-center">
          <li role="presentation" v-for="(list,index) in title" :key="index" :class="{active:index===activeIndex}">
            <a href="#" @click.prevent="handleTabsClick(index,list.name)">{{list.name}}</a>
          </li>
        </ul>
        <ul class="share-index_img" v-show="shareBase.response.list.length>0">
          <li v-for="(list,index) in shareBase.response.list" :key="index" class="col-sm-4 col-md-3">
            <section>
              <div>
                <img :src=list.logo :alt=list.name class="share-index_workList" @click="getWorkDetail(list.id)">
                <span>
                {{list.name}}
              </span>
              </div>
              <p>{{list.desc}}</p>
            </section>
          </li>
          <li class="clearfix"></li>
        </ul>
        <div class="text-center" v-show="shareBase.response.list.length === 0">
          <div class="white-space"></div>
          <img src="../static/no-article.png" alt="暂无作品" width="298" height="240">
          <div class="white-space"></div>
        </div>
      </article>
    </section>
    <message v-model="show" :type="type" :message="message"></message>
  </article>
</template>
<script>
  import axios from 'axios'
  import * as mutationTypes from '../store/share/mutations'

  export default {
    layout: 'share',
    name: 'share',
    head: {
      title: '大胖的分享',
      meta: [
        {hid: 'description', name: 'description', content: 'smalltiger share'}
      ]
    },
    asyncData ({error}) {
      return axios.get('tags', {params: {type: 'shares'}})
        .then(res => {
          return {
            title: res.data.data.reverse()
          }
        })
        .catch(err => {
          error({statusCode: err.status || 404, message: err.message || 'Page not found'})
        })
    },
    data () {
      return {
        activeIndex: 0,
        show: false,
        type: '',
        message: ''
      }
    },
    computed: {
      shareBase () {
        return this.$store.state.share[this.title[this.activeIndex].name] ? this.$store.state.share[this.title[this.activeIndex].name] : this.$store.state.share.shareBase
      }
    },
    components: {
      'message': require('../components/message.vue').default
    },
    mounted () {
      this.getShareList({tags: this.title[0].name})
    },
    methods: {
      getShareList (params) {
        this.$store.dispatch(mutationTypes.GET_SHARE_LIST, {...this.shareBase.request, ...params})
          .catch(err => {
            this.show = true
            this.type = 'error'
            this.message = err
          })
      },
      handleTabsClick (index, name) {
        this.activeIndex = index
        this.getShareList({tags: name})
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/var";

  .share-index {

    .share-index_wrap {
      width: 100%;
      background: @background-color-default;
    }
    .share-index_content {
      max-width: @max-width;
      margin: auto;
      .nav > li > a {
        color: @color-default;
        height: 40px;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover {
          background: none;
        }
      }
      .nav-pills > li {
        display: inline-block;
        float: none;
        padding: 45px 15px;
        &:hover a {
          color: @color-active;
        }
      }
      .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {
        color: @color-active;
        background: none;
        font-size: 15px;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          top: 36px;
          left: 0;
          right: 0;
          width: 40px;
          height: 2px;
          background: @color-active;
          margin: auto;
        }
      }
      .share-index_img {
        padding-bottom: @MP30PX;
        li {
          padding-top: @MP30PX;
          section {
            border-radius: 10px;
            border: 1px solid #eeeeee;
            padding: 15px;
            transition: all 0.4s ease;
            &:hover {
              box-shadow: 0 22px 43px 1px rgba(68, 68, 68, .2);
              transform: translateY(-15px);
            }
            span {
              overflow: hidden;
              font-size: 14px;
              color: #222;
              text-overflow: ellipsis;
              margin-left: 10px;
              display: inline-block;
              white-space: nowrap;
              width: calc(~"100% - 72px");
              vertical-align: middle;
            }
            p {
              height: 50px;
              color: #999;
              margin-top: 10px;
              font-size: 12px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
          }
          img {
            max-width: 100%;
            border-radius: 50%;
          }
        }
      }
    }
    @media (max-width: @client-max-width) {
      .share-index_content {
        .nav-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            padding: 15px 0 0;
          }
        }
      }
    }
    .share-index_workList {
      cursor: pointer;
    }
  }

</style>
