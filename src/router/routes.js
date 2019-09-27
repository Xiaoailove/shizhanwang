
const Misite=()=>import('../pages/Misite/Misite.vue')
const Categorys=()=>import('../pages/Categorys/Categorys.vue')
const FindShop=()=>import('../pages/FindShop/FindShop.vue')
const ShopCar=()=>import('../pages/ShopCar/ShopCar.vue')
const Personal=()=>import('../pages/Personal/Personal.vue')
const Search=()=>import('../pages/Search/Search.vue')
export default [
  {
    path:'/msite',
    component:Misite,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/category',
    component:Categorys,
    meta:{
      isShowFooter:true
    }
  },
  {
    name:'findShop',
    path:'/findshop/:id',
    component:FindShop,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/shopcar',
    component:ShopCar,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/personal',
    component:Personal,
  },
  {
    path:'/search',
    component:Search,
  },
  {
    path:'/',
    redirect: '/msite'
  }
]