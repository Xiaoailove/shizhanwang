<template>
  <div class="searchContainer">
    <div class="serchList">
      <div class="header">
        <span class="item_icon">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <input type="text" placeholder="即食燕窝 溯源可查" class="lineMiddle" v-model="userInput" @keyup="search">
        <span class="none" @click="$router.back()">取消</span>
      </div>
      <div class="nav" v-if="!userInput">
        <h3 class="hotSearch">热门搜索</h3>
        <ul class="searchList">
          <li class="searchItem" v-for="(keywords, index) in searchData" :key="index">
            <a :class="{active:keywords.highlight==1}" href="javascript:;">{{keywords.keyword}}</a>
          </li>
        </ul>
      </div>
      <div class="resultShow" v-if="userInput">
        <ul class="resultList">
          <li class="resultItem" v-for="(hotkeywords, index) in searchResult" :key="index">{{hotkeywords}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import throttle from 'lodash/throttle'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        cuttentIndex:3,
        userInput:''
      }
    },
    methods: {
      search(){
        this._gteThrottle()
      },
      _gteThrottle:throttle(function(){
        this.$store.dispatch('reqSearchResultM',this.userInput)
      },500)
    },
    computed: {
      ...mapState(['searchData','searchResult'])
    },
    mounted(){
      this.$store.dispatch('reqSearchData')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.searchContainer
  background-color #eeeeee
  .serchList
    background-color white
    width 100%
    // height 550px
    padding 20px 20px
    box-sizing border-box
    .header
      width 100%
      height 60px
      .lineMiddle
        width 605px
        height 56px
        background-color #ededed
        border-radius 5px
        padding-left 60px
        box-sizing border-box
        margin-right 45px
        outline 0px
      .none
        font-size 28px
      .item_icon
        position relative
      .iconfont
        font-size 36px
        position absolute
        left 10px
        top -5px
    .nav
      .hotSearch
        width 690px
        height 90px
        line-height 90px
        font-size 30px
        color #999
      .searchList
        display flex
        flex-wrap wrap
        font-size 28px
        .searchItem
          margin 0px 32px 32px 0
          a
            border 1px solid #999
            height 46px
            line-height 46px
            text-align center
            font-size 26px
            padding 0 10px
            box-sizing border-box
            border-radius 5px
            &.active
              border-color #b4282d
              color #b4282d
    .resultShow
      .resultList
        overflow hidden
        .resultItem
          height 90px
          border-bottom 1px solid #eeeeee
          font-size 28px
          line-height 120px
</style>
