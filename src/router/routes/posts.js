export default [
  {
    path: '/posts',
    name: 'posts-list',
    component: () => import('@/views/posts/List.vue'),
  },
  {
    path: '/posts/create',
    name: 'posts-create',
    component: () => import('@/views/posts/Create.vue'),
  },
  {
    path: '/posts/:id/edit',
    name: 'posts-edit',
    component: () => import('@/views/posts/Edit.vue'),
  },
]
