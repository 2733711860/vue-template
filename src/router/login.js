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
      title: 'loginn'
    }
  }
]
