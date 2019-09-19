<template>
  <div class="swiper">
    <div class="swiper-container swiper-containerNe">
      <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/ccfde8af22184921682d049b00b34be2.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/e03c9b74a854d4c31c77720dc1e8433a.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/31b6cd9fb5c3cdd627c3d84d45abaca7.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/aecef1569c32c725cf2a29f1fddf25ca.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/96055517125bb2233636dee9fc1ca183.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/1eba77c8f34e1498b83cabca593f3a3f.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/9c75dabb86e08cffcd0b4c95b4035b57.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
          <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/b0098527aac5942dfefc0efd9a27e4f6.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
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
    name:'MSwiper',
    mounted(){
      new Swiper ('.swiper-containerNe', {
        autoplay:1000,
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          //自定义分页器样式
          renderCustom: function (swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if (i === (current - 1)) {
                customPaginationHtml += '<span class="swiper-pagination-customss swiper-pagination-customs-activee"></span>';
              } else {
                customPaginationHtml += '<span class="swiper-pagination-customss"></span>';
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
.swiper
  padding-top 148px
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
  .swiper-pagination-customss{
    width: 40px;
    height: 4px;
    display:inline-block;
    background-color: #fff;
    opacity: 0.4;
    border-radius: 2px;
    margin: 0 8px 15px 0
  }
  .swiper-pagination-customs-activee{
    opacity: 1;
    background-color:white;
    border-radius: 2px
  }
</style>
