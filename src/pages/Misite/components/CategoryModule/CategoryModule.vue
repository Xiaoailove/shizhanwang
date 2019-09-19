<template>
  <div class="flashSale">
    <div class="flashMiddle">
      <img src="https://yanxuan.nosdn.127.net/bf9562fee476dc59baf2721120282f27.jpg?imageView&thumbnail=750x0&quality=75" alt="">
    </div>

    <div class="flashcontainer">
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
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll=new BScroll('.flashcontainer',{
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
  .flashMiddle
    img 
      width 100%
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
  .flashcontainer
    width 100%
    overflow hidden
    .flashList
      float left
      //width 1400px
      display flex
      flex-wrap nowrap
      justify-content space-between
      padding 15px 25px
      li
        display flex
        flex-direction column
        width 216px
        height 318px
        margin-right 26px
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
