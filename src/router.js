import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (!to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'z-link-active',
  routes,
  scrollBehavior
})

const title = 'ZHIYI | Learn and know'

router.beforeEach((to, from, next) => {
  let titleStr = ''
  // to.matched.reverse().forEach((match, k) => {
  //   titleStr += `${k > 0 ? '- ' : ''}${match.meta.title} `
  // })
  // tips： 直接翻转数组会导致路由嵌套位置的翻转
  if (to.name !== 'Home') {
    for (let i = to.matched.length - 1; i >= 0; i--) {
      titleStr += `${to.matched[i].meta.title} - `
    }
  }
  titleStr += title
  document.title = titleStr
  next()
})

export default router
