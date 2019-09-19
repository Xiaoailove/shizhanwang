//路由器对象模块儿
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)
const router=new VueRouter({
  mode:'history',
  routes
})
export default router
/* 
路由器对象模块
*/
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import routes from './routes'

// // 声明使用vue插件
// Vue.use(VueRouter)

// const router = new VueRouter({ // 配置对象
//   mode: 'history', // 没有#
//   // 配置应用中所有路由
//   routes
// })

// export default router