<template>
  <div id="app">
    <router-view />
    
    <FoodGuide v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FoodGuide from './components/FoodGuide/FoodGuide.vue'
  export default {
    name:"App",
    data() {
      return {
        msg:'App Component'
      }
    },
    components:{
      FoodGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%
    div
      width 100%
      height 100%
</style>
