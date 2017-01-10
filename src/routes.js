const routes = [
  {
    name: 'Index',
    path: '/',
    component: require('./components/Hello.vue')
  },
  {
    name: 'Demo',
    path: '/demo',
    meta: {
      title: 'Demo'
    },
    component: require('./components/Demo.vue')
  },
  {
    name: 'Home',
    path: '/home',
    meta: {
      title: 'Home'
    },
    component: require('./components/Home.vue')
  }
]

export default routes
