<template>
  <div class="swiper">
    <div class="swiper-container swiper-containerNe">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(swiper, index) in categorys[currentIndex].swipers" :key="index">
            <img :src="swiper.imgAvater1" alt="">
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import "../../../common/swiper/swiper.css"
  import {mapState} from 'vuex'
  export default {
    props:['currentIndex'],
    name:'MSwiper',
    computed:{
      ...mapState(['categorys'])
    },
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
    .swiper-containerNe
      .swiper-wrapper
        .swiper-slide
          img
            height 192px
            width 528px     
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
