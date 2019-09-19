<template>
  <div class="container">
    <div class="line">
      <a href="https://m.you.163.com/">
        <img src="../../images/logo.png" alt="logo">
      </a>
      <span class="item_icon">
          <i class="iconfont icon-sousuo"></i>
      </span>
      <input type="text" placeholder="搜索商品,共22175款好物" class="lineMiddle">
      <div class="line-btn">登录</div>
    </div>
    <div class="nav">
      <div class="navFirst">
        <ul class="navLeft" @click="addCur($event)">
          <li><a href="javascript:;" :class="{active:currentIndex=='0'}" data-this-index='0'>推荐</a></li>
          <li><a href="javascript:;" :class="{active:currentIndex==='1'}" data-this-index='1'>居家生活</a></li>
          <li><a href="javascript:;" :class="{active:currentIndex==='2'}" data-this-index='2'>服饰鞋包</a></li>
          <li><a href="javascript:;" :class="{active:currentIndex==='3'}" data-this-index='3'>美食酒水</a></li>
          <li><a href="javascript:;" :class="{active:currentIndex==='4'}" data-this-index='4'>个护清洁</a></li>
          <li><a href="javascript:;" :class="{active:currentIndex==='5'}" data-this-index='5'>母婴亲子</a></li>
          <li><a href="javascript:;" :class="{active:currentIndex==='6'}" data-this-index='6'>运动旅行</a></li>
          <li><a href="javascript:;" :class="{active:currentIndex==='7'}" data-this-index='7'>数码家电</a></li>
          <li><a href="javascript:;" :class="{active:currentIndex==='8'}" data-this-index='8'>全球特色</a></li>
        </ul>
      </div>
      <div class="navTwo" @click="open">
        <span class="item_icon">
          <i class="iconfont icon-jiantou"></i>
        </span>
      </div>
      <div class="allNavBox" v-if="isShow">
        <div class="allNavHeader">
          <p>全部频道</p>
          <span class="item_icon" @click="open">
            <i class="iconfont icon-jiantou-copy-copy-copy"></i>
          </span>
        </div>
        <ul class="allNav">
          <li><a href="javascript:;">推荐</a></li>
          <li><a href="javascript:;">居家生活</a></li>
          <li><a href="javascript:;">服饰鞋包</a></li>
          <li><a href="javascript:;">美食酒水</a></li>
          <li><a href="javascript:;">个护清洁</a></li>
          <li><a href="javascript:;">母婴亲子</a></li>
          <li><a href="javascript:;">运动旅行</a></li>
          <li><a href="javascript:;">数码家电</a></li>
          <li><a href="javascript:;">全球特色</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        isShow:false,
        currentIndex:0
      }
    },
    methods:{
      open(){
        this.isShow=!this.isShow
      },
      addCur(event){
        //console.log(event)
        this.currentIndex=event.target.dataset.thisIndex
        //console.log(this.currentIndex)
      }
    },
    mounted(){
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll=new BScroll('.navFirst',{
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
  .container
    position fixed
    width 100%
    z-index 100
    background-color #ffffff
    .line
      width 100%
      height 88px
      padding 15px 10px
      box-sizing border-box
      display flex
      justify-content space-around
      a
        width 130px
        height 40px
        margin-top 10px
        img 
          width 100%
          height 100%
      .lineMiddle
        width 442px
        height 56px
        background-color #ededed
        border-radius 15px
        padding-left 70px
        box-sizing border-box
        outline 0px
      .item_icon
        position relative
        margin-left -40px
      .iconfont
        font-size 36px
        position absolute
        left 60px
        top 13px
      .line-btn
        width 74px
        height 40px
        margin-top 7px
        border 1px solid #b4282d
        color #b4282d
        line-height 40px
        text-align center
        font-size 26px
        border-radius 8px
    .nav
      width 100%
      height 60px
      position relative
      z-index 2
      margin-top -1px
      background #fff
      .navFirst
        width 100%
        overflow hidden
        .navLeft
          float left
          padding-right 150px
          display flex
          li
            display flex
            justify-content center
            align-items center
            box-sizing border-box
            padding 0 16px
            text-align center
            color #333
            font-size 28px
            line-height 60px
            width 150px
            a.active
              position absolute
              box-sizing border-box
              min-width 90px
              color #b4282d
              border-bottom 6px solid #b4282d
      .navTwo
        width 200px
        height 60px
        .item_icon
          .iconfont
            width 100px
            height 60px
            line-height 60px
            text-align center
            position fixed
            top 85px
            right 0px
            z-index 2
            font-size 30px
            background-color white
      .allNavBox
        position absolute
        top 0
        left 0
        width 100%
        background-color #ffffff
        z-index 2
        // display none
        .allNavHeader
          display flex
          p
            width 92%
            height 60px
            padding-left 30px
            font-size 28px
            box-sizing border-box
          .item_icon
            width 8%
            .iconfont
              width 8%
              height 60px
              font-size 28px
              text-align center
        .allNav
          display flex
          flex-wrap wrap
          justify-content flex-start
          padding-left 15px
          li
            width 165px
            margin 7.5px
            padding 0 16px
            box-sizing border-box
            font-size 28px
            line-height 60px
            color #333
            background-color: #fafafa
            border 2px solid #cccccc
            border-radius 8px
            display flex
            align-items center
            justify-content center
</style>
