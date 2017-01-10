import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'z-link-active',
  routes
})

const title = 'ZHIYI | Learn and know'

router.beforeEach((to, from, next) => {
  let titleStr = ''
  // to.matched.reverse().forEach((match, k) => {
  //   titleStr += `${k > 0 ? '- ' : ''}${match.meta.title} `
  // })
  // tips： 直接翻转数组会导致路由嵌套位置的翻转
  if (to.name !== 'Hello') {
    for (let i = to.matched.length - 1; i >= 0; i--) {
      titleStr += `${to.matched[i].meta.title} - `
    }
  }
  titleStr += title
  document.title = titleStr
  next()
})

export default router
