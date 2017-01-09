<template lang="pug">
  #app
    app-header
    main
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
</style>
