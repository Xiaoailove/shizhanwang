<template>
  <div class="flashSale">
    <div class="flashSaleHeader">
      <div class="leftInfo">
        <span class="leftTitle">众筹</span>
      </div>
      <span class="more">更多&gt;</span>
    </div>
    <ul class="zhongChouList">
      <li>
        <img src="https://yanxuan.nosdn.127.net/7687670037190e2b4f7391b1a5bf8624.png?imageView&thumbnail=210x210&quality=75" alt="">
        <div class="zhongchouInfo">
          <div class="zhongchouTitle">粉彩扒花，清宫御瓷手艺</div>
          <div class="zhongchouPrice">￥399元起</div>
          <div class="zhongchouBox">
            <div class="zhouchouProgress">
              <div class="bg"></div>
            </div>
            <div class="zhouchouPre">3%</div>
          </div>
          <div class="zhouchouNum">67人已支持</div>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/7687670037190e2b4f7391b1a5bf8624.png?imageView&thumbnail=210x210&quality=75" alt="">
        <div class="zhongchouInfo">
          <div class="zhongchouTitle">粉彩扒花，清宫御瓷手艺</div>
          <div class="zhongchouPrice">￥399元起</div>
          <div class="zhongchouBox">
            <div class="zhouchouProgress">
              <div class="bg"></div>
            </div>
            <div class="zhouchouPre">3%</div>
          </div>
          <div class="zhouchouNum">67人已支持</div>
        </div>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/7687670037190e2b4f7391b1a5bf8624.png?imageView&thumbnail=210x210&quality=75" alt="">
        <div class="zhongchouInfo">
          <div class="zhongchouTitle">粉彩扒花，清宫御瓷手艺</div>
          <div class="zhongchouPrice">￥399元起</div>
          <div class="zhongchouBox">
            <div class="zhouchouProgress">
              <div class="bg"></div>
            </div>
            <div class="zhouchouPre">3%</div>
          </div>
          <div class="zhouchouNum">67人已支持</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../../common/stylus/mixins.styl'
.flashSale
  .flashSaleHeader
    display flex
    justify-content space-between
    align-items center
    .leftInfo
      display flex
      align-items center
      .leftTitle
        font-size 32px
        line-height 100px
        margin 0 20px 0 20px
    .more
      line-height 100px
      font-size 28px
      margin-right 50px
  .zhongChouList
    padding-left 20px
    display flex
    flex-direction column
    margin-top 10px
    top-border-1px(#cccccc)
    li
      height 250px
      display flex
      img 
        width 210px
        height 210px
        background-color #f5f5f5
      .zhongchouInfo
        height 100%
        margin-left 30px
        font-size 24px
        line-height 36px
        display flex
        flex-direction column
        .zhongchouTitle
          color #7f7f7f
        .zhongchouPrice
          color #7f7f7f
          margin-top 7.5px
        .zhongchouBox
          display flex
          align-items center
          justify-content center
          margin-top 10px
          .zhouchouProgress
            width 360px
            height 6px
            margin-right 20px
            background #d8d8d8
            display flex
            justify-content flex-start
            .bg
              height 100%
              background-color #fea438
          .zhouchouPre
            color green
        .zhouchouNum
          margin-top 40px
          color red
</style>
