<template lang="pug">
  #app
    app-header
    main
      transition(name="cadeFade")
        router-view
    app-footer
</template>

<script>
  import AppHeader from './components/includes/header.vue'
  import AppFooter from './components/includes/footer.vue'
  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style lang="stylus">
  @import './assets/stylus/common'
  .cadeFade-enter-active,
  .cadeFade-leave-active
    opacity 1
    transition all .5s cubic-bezier(0.66, 0.1, 0.38, 1.45)
  .cadeFade-enter
    transform translateX(-30%) scale(.5)
    opacity 0
  .cadeFade-leave-active
    transform translateX(30%) scale(.5)
    opacity 0
</style>
