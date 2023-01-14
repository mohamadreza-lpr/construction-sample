export default [
  {
    path: '/users',
    name: 'users-list',
    component: () => import('@/views/users/List.vue'),
  },
  {
    path: '/users/create',
    name: 'users-create',
    component: () => import('@/views/users/Create.vue'),
  },
  {
    path: '/users/:id/edit',
    name: 'users-edit',
    component: () => import('@/views/users/Edit.vue'),
  },
]
