<template>
  <div class="flashSale">
    <div class="flashSaleHeader">
      <div class="leftInfo">
        <span class="leftTitle">人气推荐</span>
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
    li
      height 250px
      display flex
      &:first-child
        border-top 1px solid #d8d8d8
        padding-top 20px
        img 
          width 210px
          height 210px
          background-color #f5f5f5
</style>
