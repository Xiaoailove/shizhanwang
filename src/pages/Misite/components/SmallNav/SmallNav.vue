<template>
  <div class="smallContainer">
    <div class="SmallLeft">
      <span class="item_icon">
        <i class="iconfont icon-wenzishuru"></i>
      </span>
      <span>网易自营品牌</span>
    </div>
    <div class="SmallLeft">
      <span class="item_icon">
        <i class="iconfont icon-tuihuanhuo"></i>
      </span>
      <span>30天无忧退货</span>
    </div>
    <div class="SmallLeft">
      <span class="item_icon">
        <i class="iconfont icon-jiaoyi"></i>
      </span>
      <span>48小时快速退款</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.smallContainer
  width 100%
  height 70px
  display flex
  justify-content space-around
  align-items center
  .SmallLeft
    .item_icon
      margin-right 15px
      .iconfont
        color #b4282d
        font-size 30px
    span 
      vertical-align middle
      font-size 24px
</style>
