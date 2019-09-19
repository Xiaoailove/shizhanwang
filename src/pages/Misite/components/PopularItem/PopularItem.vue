<template>
  <div class="flashSale">
    <div class="flashSaleHeader">
      <div class="leftInfo">
        <span class="leftTitle">人气推荐</span>
      </div>
      <span class="more">更多&gt;</span>
    </div>


    <div class="flashMiddle">
      <img src="https://yanxuan-item.nosdn.127.net/8ee282bed26f6248b3453b4b202a55db.png?imageView&quality=65&thumbnail=280x280" alt="">
      <div class="flashMiddleRight">
        <div class="cheapA">家装节特惠</div>
        <div class="name">AB面独立弹簧床垫 进口乳胶原液</div>
        <div class="dec">仅售供应商建议价的1/3</div>
        <div class="price">￥ 2029</div>
      </div>
    </div>

    <ul class="flashList">
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/7b420678ee556f428d48d1b4011aee70.png?imageView&quality=65&thumbnail=330x330" alt="">
        <div class="price">
          <span class="newPrice">100%桑蚕丝提花被 子母...</span>
          <span class="oldPrice">￥1519</span>
          <div class="cheapA">家装节特惠</div>
        </div>
      </li>
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&quality=65&thumbnail=330x330" alt="">
        <div class="price">
          <span class="newPrice">网易智造3D揉捏按摩肩带</span>
          <span class="oldPrice">￥399</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/b3a401594caf734b7fd843df7ffea1a6.png?imageView&quality=65&thumbnail=330x330" alt="">
        <div class="price">
          <span class="newPrice">多功能人体工学转椅</span>
          <span class="oldPrice">￥1049</span>
          <div class="cheapA">家装节特惠</div>
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
  .flashMiddle
    display flex
    margin  0 25px 25px 25px
    background-color #fef0df
    box-sizing border-box
    img 
      margin-right 20px
    .flashMiddleRight
      display flex
      flex-direction column
      justify-content center
      .cheapA
        color #b4282d
        background-color #ffffff
        border 1px solid #b4282d
        font-size 20px
        width 100px
        height 25px
        line-height 25px
        text-align center
        margin-bottom 15px
      .name
        font-size 28px
        width 370px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        margin-bottom 10px
      .dec
        font-size 24px
        color #7f7f7f
        margin-bottom 10px
      .price
        font-size 26px
        color #b4282d
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
        height 100px
        line-height 36px
        .newPrice
          font-size 24px
        .oldPrice
          font-size 24px
          color #b4282d
        .cheapA
          color #b4282d
          background-color #ffffff
          border 1px solid #b4282d
          font-size 20px
          width 130px
          height 25px
          line-height 25px
          text-align center
          border-radius 10px
</style>
