<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="guide_item" @click="goTo('/msite')" :class="{on:isCurrent('/msite')}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/category')" :class="{on:isCurrent('/category')}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/findshop')" :class="{on:isCurrent('/findshop')}">
      <span class="item_icon">
        <i class="iconfont icon-tupian"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/shopcar')" :class="{on:isCurrent('/shopcar')}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/personal')" :class="{on:isCurrent('/personal')}">
      <span class="item_icon">
        <i class="iconfont icon-gerenzhongxin"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      },
      isCurrent(path){
        //console.log(this.$route.path)
        return this.$route.path===path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 98px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #b4282d
      span
        font-size 24px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 40px
</style>
