<template lang="pug">
  #app(:class="theme")
    app-header
    main
      transition(name="cadeFade")
        router-view(@app-theme="getTheme", @foot-theme="getFootTheme")
    app-footer(:foot-theme="footTheme")
</template>

<script>
  import AppHeader from './components/includes/header.vue'
  import AppFooter from './components/includes/footer.vue'
  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter
    },
    data () {
      return {
        theme: 'dark',
        footTheme: 'dark'
      }
    },
    methods: {
      getTheme (msg) {
        this.theme = msg
      },
      getFootTheme (msg) {
        this.footTheme = msg
      }
    }

  }
</script>

<style lang="stylus">
  @import './assets/stylus/common'
  .cadeFade-enter-active,
  .cadeFade-leave-active
    position absolute
    left 0
    right 0
    opacity 1
    transition all 1s cubic-bezier(0.66, 0.1, 0.38, 1.45)
  .cadeFade-enter
    transform translateY(3.5rem) 
    opacity 0
  .cadeFade-leave-active
    transform translateY(7rem) 
    opacity 0
  @media (max-width: 767px)
    .cadeFade-enter
      transform translateY(1rem) 
    .cadeFade-leave-active
      transform translateY(1.5rem) 
</style>
