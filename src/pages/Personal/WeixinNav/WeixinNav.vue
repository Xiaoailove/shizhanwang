<template>
  <div>
    <ul class="bottom_nav">
        <li><a href="javascript:">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </a></li>
        <li>|</li>
        <li><a href="javascript:">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </a></li>
        <li>|</li>
        <li><a href="javascript:">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </a></li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .bottom_nav
    margin 375px 0 100px 0
    display flex
    justify-content center
    >li
      float left
      font-size 30px
      >a
        font-size 30px
        color #7f7f7f
        display flex
        align-items center
        >i
          font-size 36px
          margin 0 20px 0 40px
        >span
          margin-right 30px
</style>
