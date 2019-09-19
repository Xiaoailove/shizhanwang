<template>
  <div class="flashSale">
    <div class="flashSaleHeader">
      <div class="leftInfo">
        <span class="leftTitle">限时购</span>
        <div class="leftTime">
          <span class="hour">17</span>
          <span class="dian">:</span>
          <span class="min">40</span>
          <span class="dian">:</span>
          <span class="sec">27</span>
        </div>
      </div>
      <span class="more">更多&gt;</span>
    </div>
    <ul class="flashList">
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/04ab534b805d1c73ffde79fb951d763a.jpg?imageView&thumbnail=216x216&quality=75" alt="">
        <div class="price">
          <span class="newPrice">￥ 215</span>
          <span class="oldPrice">￥ 299</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/dd0cd9ad7a2a1d8748df5ca7869079f0.png?imageView&thumbnail=216x216&quality=75" alt="">
        <div class="price">
          <span class="newPrice">￥ 215</span>
          <span class="oldPrice">￥ 299</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/cfe2f03d2ec17ec5fa81737b77a09464.png?imageView&thumbnail=216x216&quality=75" alt="">
        <div class="price">
          <span class="newPrice">￥ 215</span>
          <span class="oldPrice">￥ 299</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/2b43ce0ad0b9e95b264b023cb60a4353.png?imageView&thumbnail=216x216&quality=75" alt="">
        <div class="price">
          <span class="newPrice">￥ 215</span>
          <span class="oldPrice">￥ 299</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/e22add3a371e8d06202a5c04109cf08b.png?imageView&thumbnail=216x216&quality=75" alt="">
        <div class="price">
          <span class="newPrice">￥ 215</span>
          <span class="oldPrice">￥ 299</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/c10eb9001206096698f2451f3c383c7b.png?imageView&thumbnail=216x216&quality=75" alt="">
        <div class="price">
          <span class="newPrice">￥ 215</span>
          <span class="oldPrice">￥ 299</span>
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
      .leftTime
        display flex
        .hour
        .min
        .sec
          display block
          width 36px
          height 36px
          font-size 24px
          line-height 36px
          text-align center
          color #ffffff
          background-color #333
        .dian
          margin 0 10px
          font-size 28px
    .more
      line-height 100px
      font-size 28px
      margin-right 50px
  .flashList
    display flex
    flex-wrap wrap
    justify-content space-between
    padding 0 25px
    li
      width 216px
      height 318px
      img 
        width 216px
        height 216px
        background-color #f5f5f5
      .price
        display flex
        align-items center
        justify-content center
        height 100px
        line-height 100px
        .newPrice
          font-size 28px
          color #b4282d
          margin-right 20px
        .oldPrice
          font-size 24px
          color #7f7f7f
          //中划线
          text-decoration line-through
</style>
