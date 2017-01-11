<template lang="pug">
  .home
    h1 home page
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      theme: 'dark'
    }
  },
  mounted () {
    this.$emit('app-theme', this.theme)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .home
    position absolute
    left 0
    right 0
    top 7vh

</style>
