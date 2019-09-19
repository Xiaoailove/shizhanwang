<template>
  <div>
    <NavHeader></NavHeader>
    <div class="wrap">
      <div>
        <MSwiper></MSwiper>
        <SmallNav></SmallNav>
        <ShopSwiper></ShopSwiper>
        <CheapArea></CheapArea>
        <Split></Split>
        <Personal></Personal>
        <Split></Split>
        <FlashSale></FlashSale>
        <Split></Split>
        <NewGoods></NewGoods>
        <Split></Split>
        <PopularItem></PopularItem>
        <Split></Split>
        <TopicList></TopicList>
        <Split></Split>
        <ZhongChou></ZhongChou>
        <Split></Split>
        <CategoryModule></CategoryModule>
        <Split></Split>
        <CategoryModule></CategoryModule>
        <Split></Split>
        <CategoryModule></CategoryModule>
        <Split></Split>
        <CategoryModule></CategoryModule>
        <Split></Split>
        <CategoryModule></CategoryModule>
        <Split></Split>
        <CategoryModule></CategoryModule>
        
      </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import BScroll from 'better-scroll'
 import NavHeader from './components/NavHeader/NavHeader.vue'
 import MSwiper from './components/MSwiper/MSwiper.vue'
 import SmallNav from './components/SmallNav/SmallNav.vue'
 import ShopSwiper from './components/ShopSwiper/ShopSwiper.vue'
 import CheapArea from './components/CheapArea/CheapArea.vue'
 import Personal from './components/Personal/Personal.vue'
 import FlashSale from './components/FlashSale/FlashSale.vue'
 import NewGoods from './components/NewGoods/NewGoods.vue'
 import PopularItem from './components/PopularItem/PopularItem.vue'
 import TopicList from './components/TopicList/TopicList.vue'
 import ZhongChou from './components/ZhongChou/ZhongChou.vue'
 import CategoryModule from './components/CategoryModule/CategoryModule.vue'
  export default {
    name:'Misite',
    mounted(){
      this.$nextTick(()=>{
        if(!this.bScroll){
          this.bScroll=new BScroll('.wrap',{
            click:true,
          })
        }else{
          this.bScroll.refresh()
        }
      })
    },
    components:{
      NavHeader,
      MSwiper,
      SmallNav,
      ShopSwiper,
      CheapArea,
      Personal,
      FlashSale,
      NewGoods,
      PopularItem,
      TopicList,
      ZhongChou,
      CategoryModule
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    padding-bottom 98px
    box-sizing border-box
    height 1240px
    overflow hidden
</style>
