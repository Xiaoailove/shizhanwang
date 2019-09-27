<template>
    <div class="container">
      <Header></Header>
      <!-- <div class="ceshi" style="height: 1120px; overflow-y: auto; position: relative; top: 100px">
        <yd-scrolltab>
            <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
                <div style="height:750px">
                  <MSwiperr></MSwiperr>
                  <CShop></CShop>
                </div>
            </yd-scrolltab-panel>
            <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
                <div style="height:750px">
                  <MSwiperr></MSwiperr>
                  <CShop></CShop>
                </div>
            </yd-scrolltab-panel>
            <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
                <div style="height:750px">
                  <MSwiperr></MSwiperr>
                  <CShop></CShop>
                </div>
            </yd-scrolltab-panel>
            <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
                <div style="height:750px">
                  <MSwiperr></MSwiperr>
                  <CShop></CShop>
                </div>
            </yd-scrolltab-panel>
            <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
                <div style="height:750px">
                  <MSwiperr></MSwiperr>
                  <CShop></CShop>
                </div>
            </yd-scrolltab-panel>
            <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
                <div style="height:750px">
                  <MSwiperr></MSwiperr>
                  <CShop></CShop>
                </div>
            </yd-scrolltab-panel>
            <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
                <div style="height:750px">
                  <MSwiperr></MSwiperr>
                  <CShop></CShop>
                </div>
            </yd-scrolltab-panel>
            <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
                <div style="height:750px">
                  <MSwiperr></MSwiperr>
                  <CShop></CShop>
                </div>
            </yd-scrolltab-panel>
            <yd-scrolltab-panel label="空调" icon="demo-icons-category1">
                <div style="height:750px">
                  <MSwiperr></MSwiperr>
                  <CShop></CShop>
                </div>
            </yd-scrolltab-panel>
        </yd-scrolltab>
      </div> -->
      <div class="nav">
        <div class="leftNav">
          <ul class="leftNavList">
            <li :class="{first:index==0,active:index==currentIndex}" @click="toOther(index)"
            v-for="(category, index) in categorys" :key="index">{{category.title}}</li>
          </ul>
        </div>
        <div class="rightNav" v-if="categorys[currentIndex]">
          <MSwiperr :currentIndex="currentIndex"></MSwiperr>
          <CShop :currentIndex="currentIndex"></CShop>
        </div>
      </div>
  </div>
 </template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Header from './components/header.vue'
  import MSwiperr from './components/MSwiperr.vue'
  import CShop from './components/CShop.vue'
  import 'vue-ydui/dist/ydui.base.css'
  export default {
    data () {
      return {
        currentIndex:0
      }
    },
    mounted(){
      this.$store.dispatch('reqCategorys')
    },
    methods: {
      toOther(index){
        this.currentIndex=index
        //console.log(index)
        //console.log(this.currentIndex)
        this.$router.push({
          path:'/category',
          query:{
            category:index
          }
        })
      }
    },
    computed:{
      ...mapState(['categorys'])
    },
    components:{
      Header,
      MSwiperr,
      CShop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    background-color white
    .nav
      padding-top 90px
      overflow hidden
      .leftNav
        float left
        width 162px
        max-height 1164px
        .leftNavList
          width 100%
          padding 20px 0
          li
            width 100%
            height 50px
            text-align center
            line-height 50px
            margin-top 40px
            font-size 28px
            &.first
              margin-top 0px
            &.active
              color #b4282d
              border-left 6px solid #b4282d
      .rightNav
        float right 
        width 588px
        box-sizing border-box
        padding 15px 30px 100px
        padding-top 20px
      // .ceshi /deep/ .yd-scrolltab-nav
  //   width 200px
  //   background-color white
  // .ceshi /deep/ .yd-scrolltab-title
  //   padding-top 15px
  //   text-align center
  //   font-size 26px
  // .ceshi /deep/ .yd-scrolltab-content-title
  //   display none
  // .ceshi /deep/ .yd-scrolltab-content-item
  //   height 1120px
</style>