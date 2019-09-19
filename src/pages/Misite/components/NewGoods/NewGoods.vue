<template>
  <div class="flashSale">
    <div class="flashSaleHeader">
      <div class="leftInfo">
        <span class="leftTitle">新品首发</span>
      </div>
      <span class="more">更多&gt;</span>
    </div>
    <ul class="flashList">
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/b21d7ce553b0eeb5633fcf967d00afbf.png?imageView&quality=65&thumbnail=330x330" alt="">
        <div class="price">
          <span class="newPrice">便携式即热开水机 </span>
          <span class="oldPrice">￥ 299</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/a8eea196aa7c107b2814cfa2976caec6.png?imageView&quality=65&thumbnail=330x330" alt="">
        <div class="price">
          <span class="newPrice">女式荔纹牛皮英伦马丁靴</span>
          <span class="oldPrice">￥ 399</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/d28373e80fd9288675134b87c62fd32a.png?imageView&quality=65&thumbnail=330x330" alt="">
        <div class="price">
          <span class="newPrice">女式仿针织翻边合体直筒牛仔...</span>
          <span class="oldPrice">￥ 249</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/b22d50c7064b977e151350e8290fbb7f.png?imageView&quality=65&thumbnail=330x330" alt="">
        <div class="price">
          <span class="newPrice">突尼斯软籽石榴</span>
          <span class="oldPrice">￥ 98</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/f05f259cbe425b93fb924bf60fca5bbf.png?imageView&quality=65&thumbnail=330x330" alt="">
        <div class="price">
          <span class="newPrice">女式舒软马蹄扣乐福鞋</span>
          <span class="oldPrice">￥ 269</span>
        </div>
      </li>
      <li>
        <img src="https://yanxuan-item.nosdn.127.net/69f5f5f19a7f60207842f6ba56e0282c.png?imageView&quality=65&thumbnail=330x330" alt="">
        <div class="price">
          <span class="newPrice">黄金百香果 16粒装</span>
          <span class="oldPrice">￥ 58</span>
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
</style>
