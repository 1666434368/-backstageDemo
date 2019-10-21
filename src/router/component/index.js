import Layout from '@/views/layout/Layout'

export default {
  path: '/component',
  component: Layout,
  redirect: '/component/userInfo',
  name: 'Component',
  meta: { title: 'Component',
    icon: 'user'
  },
  children: [
    {
      path: 'componentInfo',
      name: 'ComponentInfo',
      component: () => import('@/views/component/componentInfo'),
      meta: { title: 'ComponentInfo', icon: 'user' }
    },
    {
      path: 'cinput',
      // name: 'CInput' 顶部导航栏的名称
      name: 'CInput',
      component: () => import('@/views/component/input/input'),
      // title: 'CInput' 左侧导航栏的名称
      meta: { title: 'CInput', icon: 'user' },
      hidden: true
    }
  ]
}
