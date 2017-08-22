<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li :class="{'active':pageIndex===list}" v-for="(list,index) in pageArray">
        <a href="#">{{list}}</a>
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
        if (this.total < this.count) {
          return [1]
        } else {
          const array = []
          const pageCount = Math.ceil(this.total / this.pageSize)
          let len = pageCount < this.showItem ? pageCount : this.showItem
          for (let i = 1; i <= len; i++) {
            array.push(i)
          }
          return array
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/var";
</style>
