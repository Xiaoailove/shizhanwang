//引入koa
let Koa=require('koa')
//引入koa-router
let KoaRouter=require('koa-router')
//引入模拟数据
let data=require('./data/data.json')
//实例化
let koa=new Koa
let koaRouter=new KoaRouter
//定义接口
koaRouter.get('/categorys',(ctx,next)=>{
let req=ctx.query.req
console.log(req)
ctx.body=data
next()
})
//定义登录的接口
koaRouter.get('/login',(ctx,next)=>{
let req=ctx.query.req
console.log(req)
cte.body='登录成功了'
})
koa
.use(koaRouter.routes())//声明使用所有路由
.use(koaRouter.allowedMethods())//声明使用所有方法
koa.listen('4000',()=>{
  console.log('服务器启动成功')
  console.log('当前服务器地址为:http://localhost:4000')
})