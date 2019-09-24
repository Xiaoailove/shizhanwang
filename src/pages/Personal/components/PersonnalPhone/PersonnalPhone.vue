<template>
  <div v-show="showPerson">
    <div class="personnalContainer" ref="referenceP" :class="{onN:!showPerson}">
    <div class="personHeader">
      <span class="item_icon" @click="$router.replace('/')">
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
        <input type="text" placeholder="请输入手机号" 
        name="phone" 
        v-validate="'required|mobile'" 
        v-model="phone" maxlength="11">
        <span v-show="errors.has('phone')" style="color:red">{{ errors.first('phone')}}</span>
        <div class="sin">
          <input type="text"  
          maxlength="6"
          name="code"
          v-validate="{required: true, regex: /^\d{6}$/}"
          v-model="code"
          placeholder="请输入短信验证码">
          <span v-show="errors.has('code')" style="color:red">{{ errors.first('code')}}</span>
          <div class="sinM">获取验证码</div>
        </div>
        <div class="problm">
          <span class="problmF">遇到的问题?</span>
          <span class="problmT">使用密码登录</span>
        </div>
        <div class="login">登录</div>
      </form>
      <div class="anthor" @click="show">其他登录方式></div>
    </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['divNode','isShowPhone'],
    data() {
      return {
        showPerson:true,
        phone:'',
        code:''
      }
    },
    // updated(){
    //   console.log(1)
    //   if(!this.showPerson){
    //        console.log(this.$refs.referenceP)
    //        //this.$refs.referenceP.style.display="block"
    //        //this.isShowPhone=true
    //        this.showPerson=true
    //      }
    // },
    methods: {
      show(){
         let newDivNode=this.divNode
         //this.$refs.referenceP.style.display="none"
         //this.showPerson=!this.showPerson
         
        newDivNode.style.display="block"
        //console.log(this.isShowPhone)
        this.showPerson=!this.showPerson
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personnalContainer
    position absolute
    z-index 11
    width 100%
    height 100%
    background-color white
    &.onN
    display none
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
            color #bdbdbd
          .problmT
            font-size 28px
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
