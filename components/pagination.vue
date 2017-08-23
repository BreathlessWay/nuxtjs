<template>
  <nav aria-label="Page navigation" class="pagination-wrap">
    <ul class="pagination">
      <li :class="{'active':pageIndex===list}" v-for="(list,index) in pageArray">
        <a href="javascript:;" @click="handleChangePage(list)">{{list}}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    name: 'pagination',
    props: {
      pageIndex: {
        type: [String, Number],
        default: 1
      },
      pageSize: {
        type: [String, Number],
        default: 10
      },
      total: {
        type: [String, Number],
        default: 0
      },
      showItem: {
        type: [String, Number],
        default: 5
      }
    },
    computed: {
      pageArray () {
        let array = []
        const pageCount = Math.ceil(this.total / this.pageSize)
        if (this.showItem > pageCount) {
          for (let i = 1; i <= pageCount; i++) {
            array.push(i)
          }
          return array
        }
        if (pageCount > this.showItem) {
          const _array = []
          for (let i = 1; i <= pageCount; i++) {
            _array.push(i)
          }
          let middleIndex = Math.ceil(this.showItem / 2)
          let startIndex = middleIndex >= this.pageIndex ? 0 : (this.pageIndex - middleIndex - 1 < 0 ? 0 : this.pageIndex - middleIndex)
          let endIndex = this.pageIndex + middleIndex - 1 < this.showItem ? this.showItem : this.pageIndex + middleIndex - 1
          endIndex > pageCount && (startIndex = startIndex - (endIndex - pageCount))
          array = _array.slice(startIndex, endIndex)
          return array
        }
      }
    },
    methods: {
      handleChangePage (index) {
        this.$emit('changePage', index)
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/var";

  .pagination-wrap {
    text-align: center;
    .pagination > li {
      margin: 0 10px;
      a {
        float: none;
        padding: 5px 15px;
        line-height: 1;
        color: @color-default;
        border: none;
        font-size: 13px;
        &:hover {
          background: none;
          color: @color-active;
        }
      }
    }
    .pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover {
      background: #dfe5eb;
      color: @color-active;
      border-radius: 30px;
    }
  }
</style>
