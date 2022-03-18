export default {
  path: 'taobao',
  name: 'taobao',
  component: () => import('@/views/taobao/index.vue'),
  meta: {
    locale: 'menu.taobao',
    requiresAuth: true,
    icon: 'icon-tag',
    order: 0,
  },
  children: [
    {
      path: 'selection',
      name: 'selection',
      component: () => import('@/views/taobao/selection/index.vue'),
      meta: {
        locale: 'menu.taobao.selection',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
};
