<template>
  <div class="findContainer">
    <div class="personHeader">
      <span class="item_icon">
          <i class="iconfont icon-shouye"></i>
      </span>
      <div class="middle">
        <span class="find">发现</span>
        <span class="sel">甄选家</span>
      </div>
      <div class="right">
        <span class="item_icon rightA">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="item_icon rightB">
            <i class="iconfont icon-gouwuche"></i>
        </span>
      </div>
    </div>


    <div class="navFirstM">
        <ul class="navLeft">
          <li v-for="(tab, index) in getTabs" :key="index" @click="qTab(index,tab)"
          ><a :class="{active:curE==index}" href="javascript:;" >{{tab.title}}</a></li>
          <!-- <li><a href="javascript:;" >好货内部价</a></li>
          <li><a href="javascript:;" >选购指南</a></li>
          <li><a href="javascript:;" >回购榜</a></li>
          <li><a href="javascript:;" >晒单</a></li>
          <li><a href="javascript:;" >达人</a></li>
          <li><a href="javascript:;" >HOME</a></li> -->
        </ul>
    </div>


    <div class="spl"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        curE:0
      }
    },
    computed: {
      ...mapState(['getTabs'])
    },
    methods: {
      qTab(index,tab){
        this.curE=index
        this.$router.push({
          name:'findShop',
          params:{
            id:index
          }
        })
        this.$eventBus.$emit('tab',tab)
      }
    },
    mounted(){
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll=new BScroll('.navFirstM',{
            click:true,
            scrollX:true
          })
        }else{
          this.bScroll.refresh()
        }
      })
      // this.$store.dispatch('getTab')
    this.curE=this.curE==this.$route.params.id?0:this.$route.params.id
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.findContainer
  position fixed
  z-index 10
  width 100%
  background-color #f4f4f4
  .personHeader
    width 100%
    height 100px
    padding 0 16px
    box-sizing border-box
    display flex
    align-items center
    justify-content space-between
    border-bottom 2px solid #cccccc
    .item_icon
      box-sizing border-box
      .iconfont
        font-size 50px 
        vertical-align middle
    .right
      .rightB
        margin-left 30px
    .middle
      height 100px
      width 200px
      display flex
      align-items center
      justify-content space-around
      box-sizing border-box
      font-size 30px
      .find
        font-size 40px
        font-weight bold
        color #b4282d
        margin-right 20px
  .navFirstM
    width 100%
    overflow hidden
    border-bottom  2px solid #cccccc
    .navLeft
      float left
      // padding-right 150px
      display flex
      white-space nowrap
      li
        display flex
        justify-content center
        align-items center
        box-sizing border-box
        padding 0 26px
        text-align center
        color #333
        font-size 28px
        line-height 60px
        a.active
          // position absolute
          box-sizing border-box
          min-width 90px
          color #b4282d
          border-bottom 6px solid #b4282d
      li:nth-child
        padding-left 16px
  .spl
    height 20px
    background-color #f4f4f4
  </style>
