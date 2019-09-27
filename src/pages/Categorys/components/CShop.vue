<template>
  <div class="ulContainer">
    <ul class="ulList">
      <li class="ulItem" v-for="(containerChidren,index) in categorys[currentIndex].container" :key="index">
        <img :src="containerChidren.containerImg1" alt="">
        <div>{{containerChidren.containerTitle1}}</div>
      </li>
      <!-- <li class="ulItem">
        <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
        <div>明星商品</div>
      </li>
      <li class="ulItem">
        <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
        <div>明星商品</div>
      </li>
      <li class="ulItem">
        <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
        <div>明星商品</div>
      </li>
      <li class="ulItem">
        <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
        <div>明星商品</div>
      </li>
      <li class="ulItem">
        <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
        <div>明星商品</div>
      </li>
      <li class="ulItem">
        <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
        <div>明星商品</div>
      </li>
      <li class="ulItem">
        <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
        <div>明星商品</div>
      </li>
      <li class="ulItem">
        <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
        <div>明星商品</div>
      </li> -->
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
  export default {
    props:['currentIndex'],
    computed:{
      ...mapState(['categorys'])
    },
    mounted(){
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll=new BScroll('.ulContainer',{
            click:true,
          })
        }else{
          this.bScroll.refresh()
        }
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.ulContainer
  height 850px
  overflow hidden
  .ulList
    display flex
    flex-wrap wrap
    justify-content space-between
    float left
    .ulItem
      display flex
      flex-direction column
      align-items center
</style>
