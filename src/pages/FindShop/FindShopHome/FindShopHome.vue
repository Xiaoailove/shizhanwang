<template>
  <div class="wrapF">
    <div class="findShopContainer">
      <ChaoZhi></ChaoZhi>
      <StyleOne></StyleOne>
      <StyleTwo></StyleTwo>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import ChaoZhi from './components/ChaoZhi/ChaoZhi.vue'
  import StyleOne from './components/StyleOne/StyleOne.vue'
  import StyleTwo from './components/styleTwo/styleTwo.vue'
  export default {
    mounted(){
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll=new BScroll('.wrapF',{
            click:true,
          })
        }else{
          this.bScroll.refresh()
        }
      })
    },
    components:{
      ChaoZhi,
      StyleOne,
      StyleTwo
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrapF
  height 100%
  overflow hidden
  .findShopContainer
    padding-top 190px
</style>
