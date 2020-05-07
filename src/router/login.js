export default [
	{
    path: '*',
    redirect: '/loginn'
  },
  {
    path: '/loginn',
    name: 'loginn',
    component: resolve => {
      require(['@/pages/login/loginn.vue'], resolve)
    },
    meta: {
      title: 'login'
    }
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: resolve => {
      require(['@/pages/login/homePage.vue'], resolve)
    },
    meta: {
      title: 'homePage'
    }
  }
]
