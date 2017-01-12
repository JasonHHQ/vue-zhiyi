const Hello = r => require.ensure([], () => r(require('./components/Hello.vue')), 'group-hello')

const Home = r => require.ensure([], () => r(require('./components/Home.vue')), 'group-home')
const Demo = r => require.ensure([], () => r(require('./components/Demo.vue')), 'group-home')
const Font = r => require.ensure([], () => r(require('./components/Font.vue')), 'group-home')

const routes = [
  {
    name: 'Hello',
    path: '/hello',
    meta: {
      title: 'Hello'
    },
    component: Hello
  },
  {
    name: 'Font',
    path: '/font',
    meta: {
      title: 'Font'
    },
    component: Font
  },
  {
    name: 'Home',
    path: '/',
    meta: {
      // scrollToTop: true
    },
    component: Home
  },
  {
    name: 'Demo',
    path: '/demo',
    meta: {
      title: 'Demo'
    },
    component: Demo
  }
]

export default routes
