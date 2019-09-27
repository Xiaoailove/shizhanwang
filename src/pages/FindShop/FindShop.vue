<template>
  <div class="all">
    <keep-alive>
      <FindShopHeader ></FindShopHeader>
    <!-- <FindShopSplit></FindShopSplit> -->
    </keep-alive>
    <FindShopHome v-if="$route.params.id==0"></FindShopHome>
    <GoodPrice v-if="$route.params.id==1"></GoodPrice>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import FindShopHome from './FindShopHome/FindShopHome.vue'
  import FindShopHeader from './components/FindShopHeader/FindShopHeader.vue'
  import GoodPrice from './components/GoodPrice/GoodPrice.vue'
  import store from '../../store'
  // import FindShopSplit from './components/FindShopSplit/FindShopSplit.vue'
  export default {
    data () {
      return {
        tIndex:0,
        tab:{}
      }
    },
    mounted() {
      this.$store.dispatch('getTab')
      this.$eventBus.$on('tab',tab=>{
        this.tab=tab
      })
    },
    computed: {
      ...mapState(['getTabs'])
    },
    components:{
      FindShopHome,
      FindShopHeader,
      GoodPrice,
      // FindShopSplit
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .all
    background-color white
 
</style>
