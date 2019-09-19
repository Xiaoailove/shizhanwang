<template>
  <div id="app">
    <router-view v-if="$route.meta.isShowFooter"/>
    <FoodGuide/>
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

</style>
