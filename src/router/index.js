import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";

import demo from './demo.js' // 演示页面
import login from './login.js' // 演示页面

Vue.use(Router);

const router = new Router({
	routes: [
    ...demo,
    ...login,
  ]
})

router.beforeEach((to, from, next) => {
  let { title, needLogin } = to.meta;
//let { isLogin } = store.state;
  document.title = title;

  if (needLogin) {
    next({
      path: "/login"
    });
  } else {
    next();
  }
});

export default router;
