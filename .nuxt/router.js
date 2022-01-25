import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _380ab095 = () => interopDefault(import('..\\pages\\Cleaning.vue' /* webpackChunkName: "pages/Cleaning" */))
const _18a38e49 = () => interopDefault(import('..\\pages\\Fixing.vue' /* webpackChunkName: "pages/Fixing" */))
const _2b725d6a = () => interopDefault(import('..\\pages\\Forgot_password.vue' /* webpackChunkName: "pages/Forgot_password" */))
const _04d71909 = () => interopDefault(import('..\\pages\\Healty.vue' /* webpackChunkName: "pages/Healty" */))
const _3d00027d = () => interopDefault(import('..\\pages\\Login.vue' /* webpackChunkName: "pages/Login" */))
const _780be202 = () => interopDefault(import('..\\pages\\Others.vue' /* webpackChunkName: "pages/Others" */))
const _72977604 = () => interopDefault(import('..\\pages\\Private-Lesson.vue' /* webpackChunkName: "pages/Private-Lesson" */))
const _6272a93f = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages/Register" */))
const _9b3ff7ba = () => interopDefault(import('..\\pages\\Register-for-service.vue' /* webpackChunkName: "pages/Register-for-service" */))
const _52c3dc22 = () => interopDefault(import('..\\pages\\Register-provider.vue' /* webpackChunkName: "pages/Register-provider" */))
const _703e0be2 = () => interopDefault(import('..\\pages\\Renovation.vue' /* webpackChunkName: "pages/Renovation" */))
const _7605def0 = () => interopDefault(import('..\\pages\\Transportation.vue' /* webpackChunkName: "pages/Transportation" */))
const _59fed746 = () => interopDefault(import('..\\pages\\user-page\\index.vue' /* webpackChunkName: "pages/user-page/index" */))
const _0a4b8c52 = () => interopDefault(import('..\\pages\\user-page\\asked-service\\index.vue' /* webpackChunkName: "pages/user-page/asked-service/index" */))
const _6e9f5c51 = () => interopDefault(import('..\\pages\\user-page\\messages\\index.vue' /* webpackChunkName: "pages/user-page/messages/index" */))
const _1ae41924 = () => interopDefault(import('..\\pages\\user-page\\rezervation\\index.vue' /* webpackChunkName: "pages/user-page/rezervation/index" */))
const _428ac5ff = () => interopDefault(import('..\\pages\\user-page\\asked-service\\_id.vue' /* webpackChunkName: "pages/user-page/asked-service/_id" */))
const _6ce8bb09 = () => interopDefault(import('..\\pages\\user-page\\messages\\_slug.vue' /* webpackChunkName: "pages/user-page/messages/_slug" */))
const _6124896b = () => interopDefault(import('..\\pages\\ask-serve\\_slug.vue' /* webpackChunkName: "pages/ask-serve/_slug" */))
const _bec8fa96 = () => interopDefault(import('..\\pages\\reset-password\\_id.vue' /* webpackChunkName: "pages/reset-password/_id" */))
const _083380f4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Cleaning",
    component: _380ab095,
    name: "Cleaning"
  }, {
    path: "/Fixing",
    component: _18a38e49,
    name: "Fixing"
  }, {
    path: "/Forgot_password",
    component: _2b725d6a,
    name: "Forgot_password"
  }, {
    path: "/Healty",
    component: _04d71909,
    name: "Healty"
  }, {
    path: "/Login",
    component: _3d00027d,
    name: "Login"
  }, {
    path: "/Others",
    component: _780be202,
    name: "Others"
  }, {
    path: "/Private-Lesson",
    component: _72977604,
    name: "Private-Lesson"
  }, {
    path: "/Register",
    component: _6272a93f,
    name: "Register"
  }, {
    path: "/Register-for-service",
    component: _9b3ff7ba,
    name: "Register-for-service"
  }, {
    path: "/Register-provider",
    component: _52c3dc22,
    name: "Register-provider"
  }, {
    path: "/Renovation",
    component: _703e0be2,
    name: "Renovation"
  }, {
    path: "/Transportation",
    component: _7605def0,
    name: "Transportation"
  }, {
    path: "/user-page",
    component: _59fed746,
    name: "user-page"
  }, {
    path: "/user-page/asked-service",
    component: _0a4b8c52,
    name: "user-page-asked-service"
  }, {
    path: "/user-page/messages",
    component: _6e9f5c51,
    name: "user-page-messages"
  }, {
    path: "/user-page/rezervation",
    component: _1ae41924,
    name: "user-page-rezervation"
  }, {
    path: "/user-page/asked-service/:id",
    component: _428ac5ff,
    name: "user-page-asked-service-id"
  }, {
    path: "/user-page/messages/:slug",
    component: _6ce8bb09,
    name: "user-page-messages-slug"
  }, {
    path: "/ask-serve/:slug?",
    component: _6124896b,
    name: "ask-serve-slug"
  }, {
    path: "/reset-password/:id?",
    component: _bec8fa96,
    name: "reset-password-id"
  }, {
    path: "/",
    component: _083380f4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
