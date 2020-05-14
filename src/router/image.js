export default [
  {
    path: '/imagePage',
    name: 'imagePage',
    component: resolve => {
      require(['@/pages/image/imagePage.vue'], resolve)
    },
    meta: {
      title: '首页',
      haoBottom: false
    }
  },
  {
    path: '/moodSign',
    name: 'moodSign',
    component: resolve => {
      require(['@/pages/image/moodSign.vue'], resolve)
    },
    meta: {
      title: '心情签名',
      hasTop: {
      	hasLeft: false,
      	hasRight: false
      },
      haoBottom: false
    }
  }
]
