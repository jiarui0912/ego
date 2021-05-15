import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/goods',
    meta: {
      isLogin: true
    },
    children: [
      {
        path: 'center',
        name: 'Center',
        component: () => import('../views/Center')
      },
      {
        path: 'goods',
        name: 'Goods',
        component: () => import('../views/Goods')
      },
      {
        path: 'params',
        name: 'Params',
        component: () => import('../views/Params')
      },
      {
        path: 'advert',
        name: 'Advert',
        component: () => import('../views/Advert')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '*',
    component: () => import('../views/Error')
  }
]

const router = new VueRouter({
  routes
})

import store from '../store'
router.beforeEach((to, from, next) => {
  if (to.matched.length > 0 && !to.matched.some(record => record.meta.isLogin)) {
    // 不需要登录
    next();
  } else {
    // 需要登录，判断是否登录
    if (store.state.loginModule.userInfo.token) {
      next();
    } else {
      // 没有登陆
      next('/login')
    }
  }
})

export default router
