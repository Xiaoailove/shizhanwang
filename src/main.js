import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import Split from './components/Split/Split.vue'
Vue.config.productionTip = true
//自定义组件名
Vue.component('Split', Split)
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
