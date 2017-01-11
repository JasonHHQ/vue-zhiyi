<template lang="pug">
  #app(:class="theme")
    app-header
    main
      transition(name="cadeFade")
        router-view(@app-theme="getTheme")
</template>

<script>
  import AppHeader from './components/includes/header.vue'
  export default {
    name: 'app',
    components: {
      AppHeader
    },
    data () {
      return {
        theme: 'dark'
      }
    },
    methods: {
      getTheme (msg) {
        this.theme = msg
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
    transform translateY(7vh) 
    opacity 0
  .cadeFade-leave-active
    transform translateY(10vh) 
    opacity 0
</style>
