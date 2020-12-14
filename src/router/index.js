import Vue from 'vue' // 导入Vue
import Router from 'vue-router' // 导入vue-router 库
import Layouts from '@/components/layouts' // 导入layouts.vue 组件
Vue.use(Router) //全局注册Router组件。
export default new Router({ // 创建 router 实例
  routes: [
    {
      path: '/',  //访问路径
      name: 'Layouts', // 路径名
      component: Layouts //访问的组件
    }
  ]
})

