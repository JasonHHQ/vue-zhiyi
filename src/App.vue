<template lang="pug">
  #app.dark
    app-header
    main
      transition(name="cadeFade")
        router-view
</template>

<script>
  import AppHeader from './components/includes/header.vue'
  export default {
    name: 'app',
    components: {
      AppHeader
    }
  }
</script>

<style lang="stylus">
  @import './assets/stylus/common'
  .cadeFade-enter-active,
  .cadeFade-leave-active
    overflow hidden
    position absolute
    left 0
    right 0
    opacity 1
    transition all 1s cubic-bezier(0.66, 0.1, 0.38, 1.45)
  .cadeFade-enter
    transform scale(.96, 0.92)
    opacity 0
  .cadeFade-leave-active
    transform translateY(5%) scale(.96, 0.96)
    opacity 0
</style>
