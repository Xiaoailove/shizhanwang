<template>
  <div class="cheap">
    <ul class="cheapList">
      <li class="cheapItem">
        <p class="title">9.9超值专区</p>
        <p class="des">190款商品定价直降</p>
        <div class="img">
          <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
        </div>
      </li>
      <li class="cheapItem">
        <p class="title">50元内好物</p>
        <p class="des">买到生活小确幸</p>
        <div class="img">
          <img src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
        </div>
      </li>
      <li class="cheapItem">
        <p class="title">断货补单王</p>
        <p class="des">严选必买爆款</p>
        <div class="img">
          <img src="https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?imageView&thumbnail=150x150&quality=75" alt="">
        </div>
      </li>
      <li class="cheapItem">
        <p class="title">家装换季</p>
        <p class="des">夏去秋来床品家装都翻新</p>
        <div class="img">
          <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
          <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
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
  .cheap
    .cheapList
      display flex
      flex-wrap wrap
      justify-content center
      .cheapItem
        width 342px
        height 264px
        padding 20px 0 0 20px
        background-color #f5f5f5
        border-radius 5px
        margin 4px 0 0 4px
        .title
          padding-left 10px
          box-sizing border-box
          color #333
          font-size 32px
        .des
          padding-left 10px
          box-sizing border-box
          color #7f7f7f
          margin 10px 0 
          font-size 24px
        .img
          display flex
          justify-content center
          img 
            width 150px
            height 150px
            margin-right 4px
</style>
