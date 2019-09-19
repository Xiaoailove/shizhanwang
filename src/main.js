import Vue from 'vue'
import App from './App.vue'
import {ScrollTab, ScrollTabPanel} from 'vue-ydui/dist/lib.px/scrolltab'
import router from './router'
import 'lib-flexible/flexible'
import Split from './components/Split/Split.vue'
Vue.config.productionTip = true
//自定义组件名
Vue.component('Split', Split)
Vue.component(ScrollTab.name, ScrollTab);
Vue.component(ScrollTabPanel.name, ScrollTabPanel);
// 引入css
import 'vue-ydui/dist/ydui.base.css'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
