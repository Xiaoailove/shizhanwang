<template>
  <div>
    <!-- 手机号登录 -->
      <PersonnalPhone v-show="isShowPhone"/>

      <!-- 邮箱登录 -->
      <PersonnalEmail v-show="isShowEmail"/>
    <div class="personnalContainer" ref="reference">
      <div class="personHeader">
        <span class="item_icon">
            <i class="iconfont icon-shouye"></i>
        </span>
        <img src="./images/logo.png" alt="">
        <div class="right">
          <span class="item_icon rightA">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="item_icon rightB">
              <i class="iconfont icon-gouwuche"></i>
          </span>
        </div>
      </div>


      <div class="personnalMain">
        <div class="logTop">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>


        <div class="logBtn">
          <div class="logBtnT" @click="showPhone">
            <span class="item_icon">
              <i class="iconfont icon-shouji"></i>
            </span>
            <p>手机号快捷登录</p>
          </div>
          <div class="logBtnB" @click="showEmail">
            <span class="item_icon">
              <i class="iconfont icon-youxiang"></i>
            </span>
            <p>邮箱账号登录 </p>
          </div>
        </div>
        <!-- 底部微信 -->
        <WeixinNav></WeixinNav>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import WeixinNav from './components/WeixinNav/WeixinNav.vue'
import PersonnalEmail from './components/PersonnalEmail/PersonnalEmail.vue'
import PersonnalPhone from './components/PersonnalPhone/PersonnalPhone.vue'
  export default {
    data () {
      return {
        isShowPhone:false,
        isShowEmail:false
      }
    },
    methods:{
      showPhone(){
       let divNode=this.$refs.reference
       divNode.style.display="none"
        this.isShowPhone=!this.isShowPhone
      },
      showEmail(){
        let divNode=this.$refs.reference
        divNode.style.display="none"
        this.isShowEmail=!this.isShowEmail
      }
    },
    components:{
      WeixinNav,
      PersonnalEmail,
      PersonnalPhone
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personnalContainer
    position absolute
    z-index 0
    width 100%
    height 100%
    background-color #f2f5f4
    .personHeader
      width 100%
      height 88px
      padding 16px 24px
      box-sizing border-box
      display flex
      justify-content space-between
      position fixed
      z-index 10
      background-color white
      .item_icon
        box-sizing border-box
        .iconfont
          font-size 50px 
          vertical-align middle
      .right
        .rightB
          margin-left 30px
    .personnalMain
      width 100%
      height 100%
      padding-top 88px
      .logTop
        text-align center
        padding 160px 0 230px 0
        img 
          width 268px
          height 96px
      .logBtn
        width 100%
        height 220px
        padding 0 40px
        margin-bottom 204px
        box-sizing border-box
        .logBtnT
          width 670px
          height 94px
          background-color #b4282d
          border-radius 3px
          display flex
          align-items center
          justify-content center
          margin-bottom 32px
          .item_icon
            .iconfont
              font-size 46px
              color white
              vertical-align middle
          p
            font-size 28px
            color white
            vertical-align middle
            margin-left 16px
        .logBtnB
          width 670px
          height 94px
          border 1px solid #b4282d
          border-radius 3px
          display flex
          align-items center
          justify-content center
          .item_icon
            .iconfont
              font-size 46px
              color #b4282d
              vertical-align middle
          p
            font-size 28px
            color #b4282d
            vertical-align middle
            margin-left 16px
</style>
