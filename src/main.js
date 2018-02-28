import Vue from 'vue'

import App from './component/App.vue'

import vueRouter from "./router/index.js"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css'

import axios from "axios";//不是vue插件，导入之后只能在当前模块使用
import api,{domain} from "./js/api.js";//导入有名字的内容

Vue.use(ElementUI)

axios.defaults.baseURL=domain;//配置默认域名，这样请求的时候不用每次都在url里面手动加上域名了

// 我们是跨域请求的接口, 默认不会携带cookie等信息, 后端需要这些信息来判断登陆状态, 所以要设为true
axios.defaults.withCredentials = true;

Vue.prototype.$http = axios;//把axios和api添加到vue原型，将来vue组件可以直接使用
Vue.prototype.$api=api;
new Vue({
  el: '#app',
  render: createElement => createElement(App),
  router: vueRouter
}) 