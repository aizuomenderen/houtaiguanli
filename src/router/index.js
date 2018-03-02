// 路由配置
import Vue from "vue"
import VueRouter from "vue-router"//基于vue的一个插件

import Login from "../component/login/Login.vue"
import Admin from '../component/admin/Admin.vue'
import GoodsList from '../component/admin/goods/list/List.vue'
import GoodsDetail from '../component/admin/goods/detail/Detail.vue'
import GoodsComment from '../component/admin/goods/comment/Comment.vue'


Vue.use(VueRouter)//启动插件
  // 购物车页面路由配置
  const goods = [
    { name: 'goodsList', path: 'goods/list', component: GoodsList } ,// 子路由path不加/自动拼接父路由path
    { name: 'goodsDetail', path: 'goods/detail/:id', component: GoodsDetail },
    { name: 'goodsComment', path: 'goods/comment', component: GoodsComment },
  ];

//导出路由实例
export default new VueRouter({//实例
  routes:[
    {name: 'login', path: '/login', component: Login },//component:Login渲染哪一个组件
    // 后台管理
 { name: 'admin', path: '/admin', component: Admin, children: [...goods] },//主文件名
  ]
})