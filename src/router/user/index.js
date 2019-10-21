import Layout from '@/views/layout/Layout'

export default {
  path: '/user',
  component: Layout,
  redirect: '/user/userInfo',
  name: 'User',
  meta: { title: 'User',
    icon: 'user1'
  },
  children: [
    {
      path: 'userInfo',
      name: 'UserInfo',
      component: () => import('@/views/user/userInfo'),
      meta: { title: 'UserInfo', icon: 'userInfo' }
    }
  ]
}
