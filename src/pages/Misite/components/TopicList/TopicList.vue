<template>
  <div class="flashSale">
    <div class="flashSaleHeader">
      <div class="leftInfo">
        <span class="leftTitle">专题精选</span>
      </div>
      <span class="more">更多&gt;</span>
    </div>

    <div class="listContainer">
      <ul class="flashList">
        <li>
          <img src="https://yanxuan.nosdn.127.net/9457ea8f408d730344440c6024f7af52.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
          <div class="price">
            <span class="newPrice">团圆中秋购物指南</span>
            <span class="oldPrice">教你挑选贴心好礼送父母，教你准备一桌超有料中秋大餐</span>
          </div>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/9457ea8f408d730344440c6024f7af52.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
          <div class="price">
            <span class="newPrice">团圆中秋购物指南</span>
            <span class="oldPrice">教你挑选贴心好礼送父母，教你准备一桌超有料中秋大餐</span>
          </div>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/9457ea8f408d730344440c6024f7af52.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75" alt="">
          <div class="price">
            <span class="newPrice">团圆中秋购物指南</span>
            <span class="oldPrice">教你挑选贴心好礼送父母，教你准备一桌超有料中秋大餐</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll=new BScroll('.listContainer',{
            click:true,
            scrollX:true
          })
        }else{
          this.bScroll.refresh()
        }
      })
    }
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
  .listContainer
    width 800px
    overflow hidden
    .flashList
      width 1450px
      display flex
      margin-left 25px
      li
        width 480px
        height 393px
        margin-right 32px
        background-color #f5f5f5
        img 
          width 480px
          height 267px
          margin-bottom 12px
        .price
          margin-left 20px
          height 100px
          line-height 40px
          .oldPrice
            display block
            width 448px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            color #333
            font-size 24px
          .newPrice
            font-size 28px
</style>
