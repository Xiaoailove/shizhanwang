import Vue from 'vue'
import App from './App.vue'
import {ScrollTab, ScrollTabPanel} from 'vue-ydui/dist/lib.px/scrolltab'
import router from './router'
import 'lib-flexible/flexible'
import {Button} from 'mint-ui'
import Split from './components/Split/Split.vue'
import './validate.js'
import './mock/mock.js'
Vue.config.productionTip = true
//自定义组件名
Vue.component('Split', Split)
Vue.component(ScrollTab.name, ScrollTab);
Vue.component(ScrollTabPanel.name, ScrollTabPanel);
Vue.component(Button.name, Button)//注册mintui全局使用的标签组件对象
// 引入css
//import 'vue-ydui/dist/ydui.base.css'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
