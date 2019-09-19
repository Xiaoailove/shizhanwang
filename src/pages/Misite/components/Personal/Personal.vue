<template>
  <div class="personal">
    <div class="personalTitle">私人订制</div>
    <div class="swiper-container swiper-containerNew">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="personalItem">
            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="text">
              <span class="name">清风 自然棉麻家居拖鞋</span>
              <span class="price">￥ 9.9</span>
            </div>
          </div>
          <div class="personalItem">
            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="text">
              <span class="name">清风 自然棉麻家居拖鞋</span>
              <span class="price">￥ 9.9</span>
            </div>
          </div>
          <div class="personalItem">
            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="text">
              <span class="name">清风 自然棉麻家居拖鞋</span>
              <span class="price">￥ 9.9</span>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="personalItem">
            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="text">
              <span class="name">清风 自然棉麻家居拖鞋</span>
              <span class="price">￥ 9.9</span>
            </div>
          </div>
          <div class="personalItem">
            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="text">
              <span class="name">清风 自然棉麻家居拖鞋</span>
              <span class="price">￥ 9.9</span>
            </div>
          </div>
          <div class="personalItem">
            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="text">
              <span class="name">清风 自然棉麻家居拖鞋</span>
              <span class="price">￥ 9.9</span>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="personalItem">
            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="text">
              <span class="name">清风 自然棉麻家居拖鞋</span>
              <span class="price">￥ 9.9</span>
            </div>
          </div>
          <div class="personalItem">
            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="text">
              <span class="name">清风 自然棉麻家居拖鞋</span>
              <span class="price">￥ 9.9</span>
            </div>
          </div>
          <div class="personalItem">
            <img src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="text">
              <span class="name">清风 自然棉麻家居拖鞋</span>
              <span class="price">￥ 9.9</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import "../../../../common/swiper/swiper.css"
  export default {
    mounted(){
      new Swiper ('.swiper-containerNew', {
        autoplay:1000,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i === (current - 1)) {
                customPaginationHtml += '<span class="swiper-pagination-customsm swiper-pagination-customs-activem"></span>';
              } else {
                customPaginationHtml += '<span class="swiper-pagination-customsm"></span>';
              }
            }
            return customPaginationHtml;
          }
        },
  })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.personal
  .personalTitle
    width 100%
    height 100px
    line-height 100px
    font-size 32px
    padding 0 30px
    background #ffffff
  .swiper-container
    height 365px
    .swiper-wrapper
      .swiper-slide
        overflow hidden
        .personalItem
          float left
          width 210px
          margin-left 20px
          img 
            width 216px
            height 216px
            margin-bottom 12px
            background-color #f5f5f5
          .text
            margin-bottom 10px
            font-size 24px
            .name
              width 216px
              color #333
              margin-bottom 10px
              font-size 24px
              line-height 36px
            .price
              color #b4282d
              font-size 22px
</style>
<style>
  .swiper-pagination-custom{
    bottom: 5%;
    left: 0;
    width: 100%;
    height: 20px;
    /* background-color: red; */
    text-align: center;
  }
  .swiper-pagination-customsm{
    width: 15px;
    height: 15px;
    display:inline-block;
    background-color: gray;
    opacity: 0.4;
    border-radius: 50%;
    margin: 0 8px 20px 0
  }
  .swiper-pagination-customs-activem{
    opacity: 1;
    background-color:red;
    border-radius: 50%
  }
</style>
