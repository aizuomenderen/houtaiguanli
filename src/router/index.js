// 路由配置
import Vue from "vue"
import VueRouter from "vue-router"//基于vue的一个插件

import Login from "../component/login/Login.vue"
import Register from "../component/register/Register.vue"

Vue.use(VueRouter)//启动插件
//导出路由实例
export default new VueRouter({//实例
  routes:[
    {name: 'login', path: '/login', component: Login },//component:Login渲染哪一个组件
    {name: 'register', path: '/register', component: Register}
  ]
})