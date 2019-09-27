<template>
  <div class="header">
    <span class="item_icon">
      <i class="iconfont icon-sousuo"></i>
    </span>
    <input type="text" placeholder="搜索商品,共22175款好物" class="lineMiddle" @click="goSearch()">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goSearch(){
        this.$router.push('/search')
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   .header
     width 100%
     height 90px
     position fixed
     padding 20px 20px
     box-sizing border-box
     z-index 10
     background-color white
     .lineMiddle
       width 100%
       height 56px
       background-color #ededed
       border-radius 15px
       padding-left 190px
       box-sizing border-box
       outline 0px
      .item_icon
        position relative
      .iconfont
        font-size 36px
        position absolute
        left 150px
        top 0px

</style>
