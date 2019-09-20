<template>
  <div>
    <div class="personnalContainer">
    <div class="personHeader">
      <span class="item_icon">
          <i class="iconfont icon-shouye"></i>
      </span>
      <img src="../../images/logo.png" alt="">
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
      <form class="submit">
        <input type="text" placeholder="邮箱账号">
        <div class="sin">
          <input type="text" placeholder="密码">
          <!-- <div class="sinM">获取验证码</div> -->
        </div>
        <div class="problm">
          <span class="problmF">注册账号</span>
          <span class="problmT">忘记密码</span>
        </div>
        <div class="login">登录</div>
      </form>
      <div class="anthor">其他登录方式></div>
    </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personnalContainer
    position absolute
    z-index 11
    width 100%
    height 100%
    background-color white
    .personHeader
      width 100%
      height 88px
      padding 16px 24px
      box-sizing border-box
      display flex
      justify-content space-between
      position fixed
      z-index 10
      background-color #f2f5f4
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
        padding 100px 0 50px 0
        img 
          width 268px
          height 96px
      .submit
        width 100%
        height 510px
        padding 0 50px
        box-sizing border-box
        input
          outline 0px
          border-bottom 1px solid #cccccc
          margin 20px 0
          width 650px
          font-size 30px
          line-height 45px
          padding 30px 0
        .sin
          position relative
          .sinM
            position absolute
            right 0
            top 42px
            width 150px
            height 50px
            border 1px solid #cccccc
            text-align center
            line-height 50px
            font-size 26px
        .problm
          display flex
          justify-content space-between
          align-items center
          margin-bottom 30px
          .problmF
            font-size 28px
            color #7f7f7f
          .problmT
            font-size 28px
            color #7f7f7f
        .login
          width 100%
          height 90px
          background-color red
          line-height 90px
          text-align center
          font-size 30px
          color white
          border-radius 3px
      .anthor
        text-align center
        font-size 28px
</style>

