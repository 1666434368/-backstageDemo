import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout/Layout'
import userRouter from '@/router/user/index.js'
import componentRouter from '@/router/component/index.js'

export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/error-page/404'), hidden: true },
  { path: '/401', component: () => import('@/views/error-page/401'), hidden: true },
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/', // 路由path注册如果重了的话以第一次的注册为准
    component: Layout, // 只要添加了component: Layout便会出现侧边栏
    redirect: '/user'
  },
  userRouter,
  componentRouter
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: '举例', icon: 'example', roles: ['admin', 'editor'] },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: '表格', icon: 'table', roles: ['admin'] }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: '树', icon: 'tree' }
  //     }
  //   ]
  // },
  // 404页面路由必须放在最后一个
  { path: '*', redirect: '/404', hidden: true }
]
