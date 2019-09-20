<template>
    <div class="container">
      <Header></Header>
      <div class="ceshi" style="height: 1120px; overflow-y: auto; position: relative; top: 100px">
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
    </div>
  </div>
 </template>

<script type="text/ecmascript-6">
  import Header from './components/header.vue'
  import MSwiperr from './components/MSwiperr.vue'
  import CShop from './components/CShop.vue'
  import 'vue-ydui/dist/ydui.base.css'
  export default {
    components:{
      Header,
      MSwiperr,
      CShop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ceshi /deep/ .yd-scrolltab-nav
    width 200px
    background-color white
  .ceshi /deep/ .yd-scrolltab-title
    padding-top 15px
    text-align center
    font-size 26px
  .ceshi /deep/ .yd-scrolltab-content-title
    display none
  .ceshi /deep/ .yd-scrolltab-content-item
    height 1120px
</style>